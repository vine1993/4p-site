import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ServiceHero from "@/components/services/ServiceHero";
import ProblemSolution from "@/components/services/ProblemSolution";
import ServiceProcess from "@/components/services/ServiceProcess";
import Differentials from "@/components/services/Differentials";
import ServiceFaq from "@/components/services/ServiceFaq";
import ServiceCta from "@/components/services/ServiceCta";
import PhoneMockup from "@/components/services/visuals/PhoneMockup";
import Breadcrumbs from "@/components/services/Breadcrumbs";

const PATH = "/servicos/cardapio-virtual";
const SITE_URL = "https://ad4pixels.com.br";

export const metadata: Metadata = {
  title: "Cardápio Digital para Restaurantes com QR Code",
  description:
    "Cardápio digital e virtual para restaurantes, bares e lanchonetes. Acesso por QR code, pedidos pelo WhatsApp e atualização instantânea. Sem comissão, sem app.",
  keywords: [
    "cardápio digital",
    "cardápio virtual",
    "cardápio qr code",
    "menu digital restaurante",
    "cardápio online sem comissão",
    "cardápio digital com pedido pelo whatsapp",
    "site para restaurante com cardápio",
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: "Cardápio Digital para Restaurantes com QR Code | 4 Pixels",
    description:
      "Cardápio digital com QR code, pedidos pelo WhatsApp e atualização instantânea. Sem comissão, sem app, sem complicação.",
    type: "website",
    locale: "pt_BR",
    url: PATH,
  },
  twitter: {
    card: "summary_large_image",
    title: "Cardápio Digital para Restaurantes com QR Code | 4 Pixels",
    description:
      "Cardápio digital via QR code, pedidos pelo WhatsApp, sem comissão. Atendimento no Brasil e exterior.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Cardápio Digital para Restaurantes",
  description:
    "Cardápio digital e virtual para restaurantes, bares e lanchonetes — acesso por QR code, pedidos via WhatsApp, atualização instantânea de preços e disponibilidade, sem comissão e sem app.",
  url: `${SITE_URL}${PATH}`,
  provider: { "@id": `${SITE_URL}/#business` },
  areaServed: [
    { "@type": "Country", name: "Brasil" },
    { "@type": "Place", name: "Worldwide" },
  ],
  audience: {
    "@type": "Audience",
    audienceType: "Restaurantes, Bares e Lanchonetes",
  },
  serviceType: "Digital Menu Solution",
};

export default function CardapioVirtual() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <ServiceHero
          badge="Cardápio Digital"
          title="O cardápio do futuro cabe num QR code."
          highlight="E aumenta o ticket médio."
          description="Cardápio digital com acesso por QR code na mesa, fotos profissionais dos pratos, pedidos diretos pelo WhatsApp e atualização instantânea de preços. Sem app, sem comissão de iFood, sem complicação."
          cta="Quero meu cardápio digital"
          whatsappMessage="Olá! Tenho um restaurante e gostaria de um orçamento para o cardápio digital."
          visual={<PhoneMockup />}
          breadcrumbs={
            <Breadcrumbs
              items={[
                { label: "Início", href: "/" },
                { label: "Serviços", href: "/#servicos" },
                { label: "Criação de Sites", href: "/servicos/criacao-de-sites" },
                { label: "Cardápio Digital" },
              ]}
            />
          }
        />
        <ProblemSolution
          problemTitle={
            <>
              Cardápio em papel é caro.{" "}
              <span className="text-(--color-text-secondary)">App de delivery cobra muito.</span>
            </>
          }
          solutionTitle={
            <>
              Um cardápio digital que{" "}
              <span className="text-gradient-cool">você controla.</span>
            </>
          }
          problems={[
            "Cardápio impresso fica desatualizado, suja, e a cada mudança de preço você imprime tudo de novo",
            "Pratos sem foto vendem pouco — o cliente pede o de sempre por insegurança e o ticket médio não sobe",
            "Apps de delivery cobram 20-30% de comissão e são donos do seu cliente, não você",
          ]}
          solutions={[
            "Cardápio acessível via QR code na mesa, sempre atualizado, com fotos profissionais e categorias claras",
            "Pratos visualmente apetitosos vendem mais — fotos profissionais aumentam o ticket médio comprovadamente",
            "Pedidos diretos pelo WhatsApp do restaurante: zero comissão, dados do cliente seus, relacionamento direto",
          ]}
        />
        <ServiceProcess
          title={
            <>
              Como entregamos seu{" "}
              <span className="text-gradient-cool">cardápio digital.</span>
            </>
          }
          subtitle="Do hamburguer artesanal ao restaurante de alta gastronomia. Adaptamos o cardápio ao tom do seu salão."
          steps={[
            {
              title: "Cardápio & Categorias",
              description:
                "Levantamos todos os pratos, categorias, variações e preços. Definimos a melhor arquitetura para o seu cardápio.",
              details: ["Lista de pratos", "Categorias", "Variações"],
            },
            {
              title: "Fotografia (opcional)",
              description:
                "Orientamos um padrão de fotos para os pratos. Fotos profissionais aumentam o ticket médio em até 30%.",
              details: ["Roteiro de fotos", "Padrão visual", "Indicações de fotógrafos"],
            },
            {
              title: "Design do Cardápio",
              description:
                "Desenhamos o cardápio com a identidade visual do restaurante — sofisticado, casual, divertido, conforme seu posicionamento.",
              details: ["Identidade visual", "Hierarquia de pratos", "Destaques"],
            },
            {
              title: "Desenvolvimento & QR Code",
              description:
                "Codificamos o cardápio responsivo e geramos QR codes prontos para imprimir e colocar nas mesas.",
              details: ["Cardápio responsivo", "QR codes para mesas", "Painel de gestão"],
            },
            {
              title: "Lançamento & Treinamento",
              description:
                "Treinamos sua equipe para atualizar pratos, preços e disponibilidade sozinhos. Suporte contínuo disponível.",
              details: ["Treinamento", "Material de mesa", "Suporte"],
            },
          ]}
        />
        <Differentials
          title={
            <>
              Por que restaurantes escolhem a{" "}
              <span className="text-gradient-primary">4 Pixels.</span>
            </>
          }
          subtitle="Cardápio digital pensado para o operacional do restaurante — não só bonito, mas prático no dia a dia."
          items={[
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="6" y="6" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" /><rect x="9" y="9" width="3" height="3" fill="currentColor" /><rect x="16" y="9" width="3" height="3" fill="currentColor" /><rect x="9" y="16" width="3" height="3" fill="currentColor" /><rect x="16" y="16" width="3" height="3" fill="currentColor" /></svg>,
              title: "QR Code na Mesa",
              description: "Cliente escaneia, abre no celular, navega o cardápio. Sem app, sem download, sem fricção.",
            },
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M21.5 12.5C21.5 17.7 17.5 22 12.5 22C10.5 22 8.7 21.4 7.2 20.4L3 22L4.7 18C3.6 16.4 3 14.5 3 12.5C3 7.3 7 3 12 3C17 3 21.5 7.3 21.5 12.5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>,
              title: "Pedidos pelo WhatsApp",
              description: "Cliente monta o pedido e envia direto pro WhatsApp do restaurante. Sem comissão, sem intermediário.",
            },
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 2V8M14 20V26M2 14H8M20 14H26M5.6 5.6L9.8 9.8M18.2 18.2L22.4 22.4M5.6 22.4L9.8 18.2M18.2 9.8L22.4 5.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>,
              title: "Atualização Instantânea",
              description: "Mudou o preço? Acabou um prato? Atualiza no painel e o cardápio reflete na hora. Sem reimpressão.",
            },
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M4 21L10 15L14 19L20 11L24 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M18 7H24V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
              title: "Aumento do Ticket Médio",
              description: "Fotos profissionais e sugestões inteligentes (\"clientes também pediram\") aumentam o valor do pedido.",
            },
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="2" /><path d="M14 8V14L18 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>,
              title: "Acesso Offline (PWA)",
              description: "Cliente abre uma vez e o cardápio fica salvo. Em locais com Wi-Fi instável, ainda funciona.",
            },
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="4" y="6" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" /><path d="M9 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M9 16H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>,
              title: "Multi-idioma (Opcional)",
              description: "Bairros turísticos? Cardápio em português, inglês e espanhol no mesmo link, alternado pelo cliente.",
            },
          ]}
        />
        <ServiceFaq
          faqs={[
            {
              question: "Como o cliente acessa o cardápio?",
              answer:
                "Pelo QR code que fica na mesa. O cliente abre a câmera do celular, aponta para o código, e o cardápio abre no navegador. Não precisa baixar nenhum app.",
            },
            {
              question: "Os pedidos vão para meu sistema (PDV)?",
              answer:
                "Por padrão, os pedidos chegam pelo WhatsApp ou e-mail do restaurante. Para clientes que precisam de integração com PDVs como Linx, Consumer ou Saipos, fazemos a integração via API sob orçamento adicional.",
            },
            {
              question: "Funciona se o Wi-Fi do restaurante for fraco?",
              answer:
                "Sim. O cardápio é leve e otimizado para 3G/4G. Como PWA, depois da primeira visita o cardápio fica em cache no celular do cliente.",
            },
            {
              question: "Posso atualizar os preços sozinho?",
              answer:
                "Sim. Você recebe um painel de gestão simples para atualizar preços, marcar pratos como esgotados, adicionar promoções do dia e gerenciar fotos.",
            },
            {
              question: "Quanto custa o cardápio digital?",
              answer:
                "Investimento varia conforme número de pratos, integrações, fotografia e funcionalidades extras (multi-idioma, multi-unidade, etc). Faça o orçamento — vamos entender seu restaurante e enviar uma proposta personalizada.",
            },
            {
              question: "Atendem restaurantes fora de São Paulo?",
              answer:
                "Sim. Atendemos restaurantes em todo o Brasil e também projetos no exterior, com entrega 100% remota e suporte por WhatsApp e vídeo.",
            },
          ]}
        />
        <ServiceCta
          title={
            <>
              Pronto para um cardápio que{" "}
              <span className="text-gradient-primary">vende mais?</span>
            </>
          }
          subtitle="Solicite um orçamento sem compromisso. Vamos modernizar seu cardápio e aumentar o ticket médio do salão."
          whatsappMessage="Olá! Tenho um restaurante e gostaria de um orçamento para o cardápio digital."
        />
      </main>
      <Footer />
    </>
  );
}
