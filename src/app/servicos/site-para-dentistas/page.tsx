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

const PATH = "/servicos/site-para-dentistas";
const SITE_URL = "https://ad4pixels.com.br";

export const metadata: Metadata = {
  title: "Site para Dentistas e Clínicas em Conformidade com o CFO",
  description:
    "Criação de site para dentistas e clínicas odontológicas em conformidade com o CFO. Especialidades, agendamento online e SEO odontológico para todo o Brasil.",
  keywords: [
    "site para dentistas",
    "site para clínica odontológica",
    "criação de site para dentista",
    "site odontológico em conformidade com cfo",
    "marketing odontológico digital",
    "agendamento online dentista",
    "agência para clínicas odontológicas",
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: "Site para Dentistas e Clínicas em Conformidade com o CFO | 4 Pixels",
    description:
      "Sites para dentistas e clínicas odontológicas dentro das regras do CFO. Atendemos todo o Brasil.",
    type: "website",
    locale: "pt_BR",
    url: PATH,
  },
  twitter: {
    card: "summary_large_image",
    title: "Site para Dentistas e Clínicas em Conformidade com o CFO | 4 Pixels",
    description:
      "Sites odontológicos dentro das regras do CFO. Atendimento no Brasil e projetos remotos.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Site para Dentistas e Clínicas Odontológicas",
  description:
    "Criação de sites para dentistas e clínicas odontológicas em conformidade com a Resolução CFO 196/2019, com apresentação de especialidades, agendamento online e SEO odontológico.",
  url: `${SITE_URL}${PATH}`,
  provider: { "@id": `${SITE_URL}/#business` },
  areaServed: [
    { "@type": "Country", name: "Brasil" },
    { "@type": "Place", name: "Worldwide" },
  ],
  audience: { "@type": "Audience", audienceType: "Dentistas e Clínicas Odontológicas" },
  serviceType: "Web Development for Dental Practices",
};

export default function SiteParaDentistas() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <ServiceHero
          badge="Site para Dentistas"
          title="Pacientes pesquisam dentista no Google."
          highlight="Em conformidade com o CFO."
          description="Sites para dentistas e clínicas odontológicas dentro das regras da Resolução CFO 196/2019, com especialidades, currículo do profissional, agendamento online e SEO odontológico."
          cta="Quero meu site odontológico"
          whatsappMessage="Olá! Sou dentista e gostaria de um orçamento para um site em conformidade com o CFO."
          visual={<BrowserMockup />}
          breadcrumbs={
            <Breadcrumbs
              items={[
                { label: "Início", href: "/" },
                { label: "Serviços", href: "/#servicos" },
                { label: "Criação de Sites", href: "/servicos/criacao-de-sites" },
                { label: "Site para Dentistas" },
              ]}
            />
          }
        />
        <ProblemSolution
          problemTitle={
            <>
              Marketing odontológico tem regras.{" "}
              <span className="text-(--color-text-secondary)">E o CFO fiscaliza.</span>
            </>
          }
          solutionTitle={
            <>
              Um site odontológico que{" "}
              <span className="text-gradient-cool">conquista paciente sem infringir.</span>
            </>
          }
          problems={[
            "Risco de infração à Resolução CFO 196/2019 com promessas de resultado, antes/depois sem consentimento, sensacionalismo ou propaganda enganosa",
            "Sites odontológicos genéricos não diferenciam especializações nem mostram qualidade técnica e tecnologia da clínica",
            "Falta um caminho claro para o paciente agendar avaliação, consulta de emergência ou orçamento online",
          ]}
          solutions={[
            "Conteúdo, imagens e CTAs revisados conforme a Resolução CFO 196/2019 e o Código de Ética Odontológica",
            "Identidade visual moderna, fotografia profissional dos consultórios e equipamentos, currículo com CRO em destaque",
            "Páginas dedicadas a cada especialidade (estética, ortodontia, implantes) e agendamento online integrado",
          ]}
        />
        <ServiceProcess
          title={
            <>
              Como entregamos{" "}
              <span className="text-gradient-cool">seu site odontológico.</span>
            </>
          }
          subtitle="Do consultório individual à clínica multiprofissional. Adaptamos a estrutura ao porte e às especialidades."
          steps={[
            {
              title: "Briefing & Especialidades",
              description:
                "Mapeamos especialidades odontológicas, perfil dos pacientes, convênios atendidos e diferenciais técnicos da clínica.",
              details: ["Mapa de especialidades", "Perfil de paciente", "Convênios"],
            },
            {
              title: "Conteúdo Ético",
              description:
                "Estruturamos conteúdo respeitando o Código de Ética e a Resolução CFO 196/2019 — sem promessas, antes/depois sensacionalistas ou autopromoção indevida.",
              details: ["Revisão ética", "Conformidade CFO", "Linguagem adequada"],
            },
            {
              title: "Design Moderno e Confiável",
              description:
                "Identidade visual que transmite limpeza, modernidade e tecnologia — atributos essenciais para escolha de clínica odontológica.",
              details: ["Identidade visual", "Fotografia clínica", "Apresentação tech"],
            },
            {
              title: "Agendamento & SEO",
              description:
                "Integração com sistemas de gestão odontológica e otimização para buscas locais por especialidade e bairro.",
              details: ["Agendamento online", "SEO odontológico", "Schema MedicalBusiness"],
            },
            {
              title: "Lançamento & Suporte",
              description:
                "Publicamos o site, treinamos a equipe e oferecemos suporte para novas especialidades e atualizações de equipamentos.",
              details: ["Publicação", "Treinamento", "Manutenção contínua"],
            },
          ]}
        />
        <Differentials
          title={
            <>
              Por que dentistas escolhem a{" "}
              <span className="text-gradient-primary">4 Pixels.</span>
            </>
          }
          subtitle="Conhecemos as nuances da odontologia — e construímos sites que geram pacientes dentro das regras do CFO."
          items={[
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 4L4 8V14C4 20 8 24.5 14 26C20 24.5 24 20 24 14V8L14 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M10 14L13 17L18 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
              title: "Conformidade com o CFO",
              description: "Conteúdo revisado conforme Resolução CFO 196/2019 e Código de Ética Odontológica. Sem riscos.",
            },
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="4" y="6" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" /><path d="M9 11H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M9 15H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>,
              title: "Especialidades em Destaque",
              description: "Estética, ortodontia, implantes, próteses — cada especialidade ganha página própria com foco em busca local.",
            },
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="9" r="4" stroke="currentColor" strokeWidth="2" /><path d="M5 24C5 19 9 16 14 16C19 16 23 19 23 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>,
              title: "Currículo do Profissional",
              description: "CRO, especializações, formação continuada — tudo apresentado com sobriedade e profissionalismo.",
            },
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="4" y="6" width="20" height="18" rx="2" stroke="currentColor" strokeWidth="2" /><path d="M9 4V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M19 4V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M14 13V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M11 16H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>,
              title: "Agendamento Online",
              description: "Integração com Clinicorp, Dental Office, Easy Dental e outros sistemas via API ou redirect.",
            },
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M4 21L10 15L14 19L20 11L24 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M18 7H24V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
              title: "SEO Odontológico",
              description: "Otimização para buscas como \"dentista de implante [bairro]\" ou \"ortodontia [cidade]\". Tráfego que vira consulta.",
            },
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="2" /><path d="M14 8V14L18 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>,
              title: "LGPD em Dados Sensíveis",
              description: "Formulários e captura tratam dados clínicos como sensíveis (LGPD), com consentimento adequado.",
            },
          ]}
        />
        <ServiceFaq
          faqs={[
            {
              question: "O site fica em conformidade com o CFO?",
              answer:
                "Sim. Estruturamos conteúdo, imagens e CTAs respeitando a Resolução CFO 196/2019 e o Código de Ética — sem promessas, antes/depois sensacionalistas, comparações ou autopromoção indevida. Recomendamos revisão final pelo Conselho Regional.",
            },
            {
              question: "Posso publicar fotos de \"antes e depois\" no site?",
              answer:
                "É um tema delicado. A Resolução CFO 196/2019 permite publicação de antes/depois apenas com consentimento expresso do paciente, sem caráter comparativo ou sensacionalista, e em contexto educativo. Estruturamos isso com segurança jurídica — termos de consentimento, contexto adequado e sem garantia de resultado.",
            },
            {
              question: "Posso integrar com sistemas como Clinicorp ou Easy Dental?",
              answer:
                "Sim. Fazemos integração com Clinicorp, Dental Office, Easy Dental, Dental Mídia e outros sistemas via API ou widget de agendamento.",
            },
            {
              question: "Posso ter blog odontológico?",
              answer:
                "Sim, com viés informativo e educativo, sem promessas ou comparações. Pautas como \"como escolher implante\" ou \"cuidados após extração\" trazem visitas qualificadas.",
            },
            {
              question: "Atendem dentistas fora de São Paulo?",
              answer:
                "Sim. Atendemos clínicas e consultórios em todo o Brasil de forma 100% remota, com reuniões por vídeo.",
            },
            {
              question: "Como funciona o orçamento?",
              answer:
                "Cada projeto é único. O investimento varia conforme número de especialidades, integrações e funcionalidades. Após uma conversa inicial, enviamos uma proposta detalhada.",
            },
          ]}
        />
        <ServiceCta
          title={
            <>
              Pronto para um site que{" "}
              <span className="text-gradient-primary">trabalha pelo consultório?</span>
            </>
          }
          subtitle="Solicite um orçamento sem compromisso. Vamos construir um site odontológico que respeita o CFO e gera pacientes."
          whatsappMessage="Olá! Sou dentista e gostaria de um orçamento para um site em conformidade com o CFO."
        />
      </main>
      <Footer />
    </>
  );
}
