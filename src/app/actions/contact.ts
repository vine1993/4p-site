"use server";

import nodemailer from "nodemailer";

export interface ContactFormState {
  success: boolean;
  error?: string;
}

export async function sendContactEmail(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const project = formData.get("project")?.toString().trim();

  if (!name || !email || !project) {
    return { success: false, error: "Preencha todos os campos." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: "E-mail inválido." };
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"4 Pixels Site" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `Novo contato via site — ${name}`,
      html: `
        <h2>Novo contato via site</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Projeto:</strong></p>
        <p>${project.replace(/\n/g, "<br>")}</p>
      `,
    });

    return { success: true };
  } catch (err) {
    console.error("[contact] falha ao enviar e-mail:", err);
    return {
      success: false,
      error: "Não foi possível enviar sua mensagem. Tente novamente ou fale pelo WhatsApp.",
    };
  }
}
