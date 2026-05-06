import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ServiceHero from "@/components/services/ServiceHero";
import ProblemSolution from "@/components/services/ProblemSolution";
import ServiceProcess from "@/components/services/ServiceProcess";
import Differentials from "@/components/services/Differentials";
import ServiceFaq from "@/components/services/ServiceFaq";
import ServiceCta from "@/components/services/ServiceCta";
import BrowserMockup from "@/components/services/visuals/BrowserMockup";
import Breadcrumbs from "@/components/services/Breadcrumbs";

const PATH = "/servicos/site-para-clinica-veterinaria";
const SITE_URL = "https://ad4pixels.com.br";

export const metadata: Metadata = {
  title: "Site para Clínica Veterinária com Agendamento Online",
  description:
    "Criação de site para clínica veterinária e pet shop com agendamento online, apresentação de serviços, equipe e galeria. Atendemos clínicas em todo o Brasil.",
  keywords: [
    "site para clínica veterinária",
    "site para veterinário",
    "site para pet shop",
    "agendamento online veterinária",
    "marketing veterinário",
    "criação de site veterinário",
    "agência para clínicas veterinárias",
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: "Site para Clínica Veterinária com Agendamento Online | 4 Pixels",
    description:
      "Sites para clínicas veterinárias com agendamento online, serviços, equipe e galeria. Atendemos todo o Brasil.",
    type: "website",
    locale: "pt_BR",
    url: PATH,
  },
  twitter: {
    card: "summary_large_image",
    title: "Site para Clínica Veterinária com Agendamento Online | 4 Pixels",
    description:
      "Sites para clínicas veterinárias com agendamento online. Atendimento no Brasil e projetos remotos.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Site para Clínica Veterinária",
  description:
    "Criação de sites para clínicas veterinárias e pet shops com agendamento online, apresentação de serviços, galeria e SEO local.",
  url: `${SITE_URL}${PATH}`,
  provider: { "@id": `${SITE_URL}/#business` },
  areaServed: [
    { "@type": "Country", name: "Brasil" },
    { "@type": "Place", name: "Worldwide" },
  ],
  audience: { "@type": "Audience", audienceType: "Clínicas Veterinárias e Pet Shops" },
  serviceType: "Web Development for Veterinary Clinics",
};

export default function SiteParaClinicaVeterinaria() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <ServiceHero
          badge="Site para Veterinária"
          title="Tutores procuram veterinário no Google."
          highlight="Esteja onde eles buscam."
          description="Sites para clínicas veterinárias com agendamento online, apresentação dos serviços, equipe e galeria — feitos para gerar confiança no tutor antes do primeiro contato."
          cta="Quero meu site veterinário"
          whatsappMessage="Olá! Tenho uma clínica veterinária e gostaria de um orçamento para criar um site."
          visual={<BrowserMockup />}
          breadcrumbs={
            <Breadcrumbs
              items={[
                { label: "Início", href: "/" },
                { label: "Serviços", href: "/#servicos" },
                { label: "Criação de Sites", href: "/servicos/criacao-de-sites" },
                { label: "Site para Clínica Veterinária" },
              ]}
            />
          }
        />
        <ProblemSolution
          problemTitle={
            <>
              Pet ficou doente?{" "}
              <span className="text-(--color-text-secondary)">O tutor já abriu o Google.</span>
            </>
          }
          solutionTitle={
            <>
              Um site que{" "}
              <span className="text-gradient-cool">conquista o tutor.</span>
            </>
          }
          problems={[
            "Sem site, o tutor escolhe a clínica concorrente que aparece primeiro no Google e no Maps",
            "Indicações no Instagram não são suficientes — tutores ansiosos querem ver fotos, equipe e horários antes de ligar",
            "Falta de canal claro de agendamento faz o tutor desistir e procurar outro veterinário disponível agora",
          ]}
          solutions={[
            "Site rápido e otimizado para SEO local — quem busca \"veterinário [bairro]\" encontra você primeiro",
            "Apresentação completa: equipe, especialidades, infraestrutura, galeria e depoimentos de tutores",
            "Agendamento online integrado com WhatsApp ou sistema de gestão para resposta rápida",
          ]}
        />
        <ServiceProcess
          title={
            <>
              Como entregamos{" "}
              <span className="text-gradient-cool">seu site veterinário.</span>
            </>
          }
          subtitle="Da clínica de bairro à rede com várias unidades. Adaptamos o processo ao tamanho do seu negócio."
          steps={[
            {
              title: "Briefing & Diferenciais",
              description:
                "Mapeamos os serviços oferecidos, especializações, infraestrutura e o que diferencia sua clínica das concorrentes.",
              details: ["Mapa de serviços", "Diferenciais", "Perfil de tutores"],
            },
            {
              title: "Conteúdo & Fotografia",
              description:
                "Estruturamos o conteúdo — quem somos, equipe, serviços, galeria — e orientamos a captação de fotos profissionais da clínica.",
              details: ["Roteiro de fotos", "Textos de serviços", "Apresentação da equipe"],
            },
            {
              title: "Design Acolhedor e Confiável",
              description:
                "Criamos uma identidade visual que transmite cuidado e profissionalismo — atributos essenciais para tutores escolherem você.",
              details: ["Identidade visual", "Iconografia pet", "Paleta acolhedora"],
            },
            {
              title: "Agendamento & SEO Local",
              description:
                "Integramos agendamento via WhatsApp ou sistema de gestão e otimizamos o site para buscas locais por bairro/cidade.",
              details: ["Integração WhatsApp", "SEO local", "Google Business Profile"],
            },
            {
              title: "Lançamento & Suporte",
              description:
                "Publicamos o site, treinamos sua equipe para atualizar conteúdo e oferecemos suporte contínuo.",
              details: ["Publicação", "Treinamento", "Manutenção mensal"],
            },
          ]}
        />
        <Differentials
          title={
            <>
              Por que clínicas escolhem a{" "}
              <span className="text-gradient-primary">4 Pixels.</span>
            </>
          }
          subtitle="Conhecemos a jornada do tutor — e construímos sites que convertem visita em consulta."
          items={[
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 25C14 25 4 19 4 11C4 7 7 4 11 4C12.5 4 14 5 14 6C14 5 15.5 4 17 4C21 4 24 7 24 11C24 19 14 25 14 25Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>,
              title: "Foco no Tutor",
              description: "Cada elemento pensa no tutor ansioso buscando ajuda. Confiança visual, informação clara, contato fácil.",
            },
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="4" y="6" width="20" height="18" rx="2" stroke="currentColor" strokeWidth="2" /><path d="M9 4V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M19 4V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M4 12H24" stroke="currentColor" strokeWidth="2" /></svg>,
              title: "Agendamento Online",
              description: "Tutores agendam consulta direto pelo site, via WhatsApp ou sistema integrado. Menos ligação, mais conversão.",
            },
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 4C9 4 5 8 5 13C5 18 14 25 14 25C14 25 23 18 23 13C23 8 19 4 14 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><circle cx="14" cy="13" r="3" stroke="currentColor" strokeWidth="2" /></svg>,
              title: "SEO Local Otimizado",
              description: "Apareça primeiro em buscas como \"veterinário [bairro]\" ou \"clínica 24h [cidade]\". Tráfego que vira cliente.",
            },
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="9" r="4" stroke="currentColor" strokeWidth="2" /><path d="M5 24C5 19 9 16 14 16C19 16 23 19 23 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>,
              title: "Apresentação da Equipe",
              description: "Veterinários, especializações e CRMV ganham destaque — mostrar o profissional gera confiança imediata.",
            },
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="4" y="6" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" /><path d="M4 12L9 17L14 12L20 18L24 14" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>,
              title: "Galeria Profissional",
              description: "Estrutura, salas de procedimento e ambiente acolhedor — fotos transmitem o que palavras não conseguem.",
            },
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M21 15.5C21 17.5 19.5 19 17.5 19H10.5C8.5 19 7 17.5 7 15.5C7 13.5 8.5 12 10.5 12C10.5 9 13 7 16 7C19 7 21 9 21 12V15.5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M14 23V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>,
              title: "Conteúdo de Saúde Pet",
              description: "Blog opcional com dicas de saúde animal — atrai tutores via Google e reforça autoridade da clínica.",
            },
          ]}
        />
        <ServiceFaq
          faqs={[
            {
              question: "O site funciona bem no celular?",
              answer:
                "Sim. Mais de 70% dos tutores acessam pelo celular durante uma emergência. Construímos com mobile-first: layout, velocidade e botão de WhatsApp sempre acessível.",
            },
            {
              question: "Posso integrar com meu sistema de gestão veterinária?",
              answer:
                "Sim. Integramos com Vetus, ProntVet, Vetsoft e outros sistemas via API ou formulários customizados para criar fichas e agendar consultas.",
            },
            {
              question: "O site vai me ajudar a aparecer no Google Maps?",
              answer:
                "Sim. Configuramos o site com Schema.org de LocalBusiness/VeterinaryCare, otimizamos seu Google Business Profile e estruturamos páginas por especialidade — combinação que melhora o ranking no pacote local.",
            },
            {
              question: "Atendem clínicas fora de São Paulo?",
              answer:
                "Sim. Atendemos clínicas em todo o Brasil de forma 100% remota, com reuniões por vídeo. Já trabalhamos com clínicas em diversas regiões.",
            },
            {
              question: "Vocês fazem fotografia da clínica?",
              answer:
                "Não fazemos a fotografia diretamente, mas orientamos um roteiro de captação. Para clínicas em São Paulo, podemos indicar fotógrafos parceiros especializados em pet/clínicas.",
            },
            {
              question: "Posso ter um blog com dicas para tutores?",
              answer:
                "Sim. O blog é uma das maiores fontes de tráfego orgânico para clínicas veterinárias — pautas como \"vacinação de filhote\" ou \"alimentação de gato idoso\" trazem visitas qualificadas constantemente.",
            },
          ]}
        />
        <ServiceCta
          title={
            <>
              Pronto para conquistar{" "}
              <span className="text-gradient-primary">novos tutores?</span>
            </>
          }
          subtitle="Solicite um orçamento sem compromisso. Vamos criar o site que sua clínica merece."
          whatsappMessage="Olá! Tenho uma clínica veterinária e gostaria de um orçamento para criar um site."
        />
      </main>
      <Footer />
    </>
  );
}
