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

const PATH = "/servicos/site-para-medicos";
const SITE_URL = "https://ad4pixels.com.br";

export const metadata: Metadata = {
  title: "Site para Médicos e Clínicas em Conformidade com o CFM",
  description:
    "Criação de site para médicos e clínicas em conformidade com a Resolução CFM 1974/2011. Apresentação de especialidades, agendamento e SEO médico para todo o Brasil.",
  keywords: [
    "site para médicos",
    "site para clínica médica",
    "criação de site médico",
    "site médico em conformidade com cfm",
    "marketing médico digital",
    "agendamento online médico",
    "agência para clínicas médicas",
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: "Site para Médicos e Clínicas em Conformidade com o CFM | 4 Pixels",
    description:
      "Sites para médicos e clínicas dentro das regras do CFM. Especialidades, agendamento e SEO médico. Atendemos todo o Brasil.",
    type: "website",
    locale: "pt_BR",
    url: PATH,
  },
  twitter: {
    card: "summary_large_image",
    title: "Site para Médicos e Clínicas em Conformidade com o CFM | 4 Pixels",
    description:
      "Sites médicos dentro das regras do CFM. Atendimento no Brasil e projetos remotos.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Site para Médicos e Clínicas",
  description:
    "Criação de sites para médicos e clínicas em conformidade com a Resolução CFM 1974/2011, com apresentação de especialidades, equipe, agendamento online e SEO médico.",
  url: `${SITE_URL}${PATH}`,
  provider: { "@id": `${SITE_URL}/#business` },
  areaServed: [
    { "@type": "Country", name: "Brasil" },
    { "@type": "Place", name: "Worldwide" },
  ],
  audience: { "@type": "Audience", audienceType: "Médicos e Clínicas Médicas" },
  serviceType: "Web Development for Medical Practices",
};

export default function SiteParaMedicos() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <ServiceHero
          badge="Site para Médicos"
          title="Pacientes pesquisam médicos no Google."
          highlight="Em conformidade com o CFM."
          description="Sites para médicos e clínicas dentro das regras da Resolução CFM 1974/2011, com especialidades estruturadas, currículo do profissional, agendamento online e SEO médico."
          cta="Quero meu site médico"
          whatsappMessage="Olá! Sou médico(a) e gostaria de um orçamento para um site em conformidade com o CFM."
          visual={<BrowserMockup />}
          breadcrumbs={
            <Breadcrumbs
              items={[
                { label: "Início", href: "/" },
                { label: "Serviços", href: "/#servicos" },
                { label: "Criação de Sites", href: "/servicos/criacao-de-sites" },
                { label: "Site para Médicos" },
              ]}
            />
          }
        />
        <ProblemSolution
          problemTitle={
            <>
              Marketing médico tem regras.{" "}
              <span className="text-(--color-text-secondary)">E o CFM observa.</span>
            </>
          }
          solutionTitle={
            <>
              Um site médico que{" "}
              <span className="text-gradient-cool">conquista paciente sem infringir.</span>
            </>
          }
          problems={[
            "Risco de infração à Resolução CFM 1974/2011 com promessas de cura, comparações, antes/depois, sensacionalismo ou sorteios",
            "Sites genéricos não transmitem credibilidade científica — paciente em busca de diagnóstico procura sinais de seriedade",
            "Falta uma estrutura clara de especialidades, equipe e formas de agendar consulta de modo seguro e ético",
          ]}
          solutions={[
            "Conteúdo, imagens e CTAs revisados conforme a Resolução CFM 1974/2011 e o Código de Ética Médica",
            "Identidade visual sóbria, fotos institucionais e currículo do profissional com CRM e especializações em destaque",
            "Páginas dedicadas a cada especialidade médica e agendamento online integrado a sistemas de prontuário",
          ]}
        />
        <ServiceProcess
          title={
            <>
              Como entregamos{" "}
              <span className="text-gradient-cool">seu site médico.</span>
            </>
          }
          subtitle="Do consultório individual à clínica multiespecialidade. Adaptamos a estrutura ao porte e às especialidades."
          steps={[
            {
              title: "Briefing & Especialidades",
              description:
                "Mapeamos especialidades, perfil dos pacientes, convênios atendidos e diferenciais técnicos da clínica ou consultório.",
              details: ["Mapa de especialidades", "Perfil de paciente", "Convênios"],
            },
            {
              title: "Conteúdo Ético",
              description:
                "Estruturamos conteúdo respeitando o Código de Ética Médica e a Resolução CFM 1974/2011 — sem promessas, sensacionalismo ou autopromoção indevida.",
              details: ["Revisão ética", "Linguagem técnica", "Conformidade"],
            },
            {
              title: "Design Clínico e Confiável",
              description:
                "Identidade visual sóbria com tipografia legível e fotografia profissional do consultório, equipe e equipamentos.",
              details: ["Identidade visual", "Fotografia institucional", "Acessibilidade"],
            },
            {
              title: "Agendamento & SEO Médico",
              description:
                "Integração com sistemas de prontuário (Doctoralia, Conexa, iClinic) e otimização para buscas locais por especialidade.",
              details: ["Agendamento online", "SEO médico", "Schema MedicalBusiness"],
            },
            {
              title: "Lançamento & Manutenção",
              description:
                "Publicamos o site, treinamos a recepção para gestão de conteúdo e oferecemos suporte para novas especialidades.",
              details: ["Publicação", "Treinamento", "Suporte contínuo"],
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
          subtitle="Entendemos as nuances do marketing médico — e construímos sites que geram pacientes dentro das regras."
          items={[
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 4L4 8V14C4 20 8 24.5 14 26C20 24.5 24 20 24 14V8L14 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M10 14L13 17L18 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
              title: "Conformidade com o CFM",
              description: "Conteúdo revisado conforme Resolução CFM 1974/2011 e Código de Ética. Sem riscos de processo ético.",
            },
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="4" y="6" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" /><path d="M9 11H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M9 15H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>,
              title: "Especialidades Estruturadas",
              description: "Cada especialidade ganha sua própria página, otimizada para busca local e para o paciente que já procura.",
            },
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="9" r="4" stroke="currentColor" strokeWidth="2" /><path d="M5 24C5 19 9 16 14 16C19 16 23 19 23 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>,
              title: "Currículo do Profissional",
              description: "CRM, formação, especializações, sociedades — tudo apresentado de forma clara e em destaque.",
            },
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="4" y="6" width="20" height="18" rx="2" stroke="currentColor" strokeWidth="2" /><path d="M9 4V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M19 4V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M14 13V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M11 16H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>,
              title: "Agendamento Online",
              description: "Integração com Doctoralia, Conexa Saúde, iClinic, Memed e outros sistemas via API ou redirect.",
            },
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M4 21L10 15L14 19L20 11L24 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M18 7H24V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
              title: "SEO Médico Local",
              description: "Otimização para buscas como \"cardiologista [bairro]\" ou \"clínica de pediatria [cidade]\". Tráfego que vira consulta.",
            },
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="2" /><path d="M14 8V14L18 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>,
              title: "LGPD em Dados Sensíveis",
              description: "Formulários, cookies e captura tratam dados de saúde como sensíveis (LGPD), com consentimento adequado.",
            },
          ]}
        />
        <ServiceFaq
          faqs={[
            {
              question: "O site fica em conformidade com o CFM?",
              answer:
                "Sim. Estruturamos o site, conteúdo e CTAs respeitando a Resolução CFM 1974/2011 e o Código de Ética Médica — sem promessas de cura, antes/depois, comparações, sensacionalismo ou autopromoção indevida. Recomendamos revisão final pelo Conselho Regional ou pelo seu departamento de compliance.",
            },
            {
              question: "Posso integrar com sistemas como Doctoralia ou iClinic?",
              answer:
                "Sim. Fazemos integração com Doctoralia, Conexa Saúde, iClinic, Memed, Boa Consulta, Feegow e outros sistemas via API, widgets ou redirect.",
            },
            {
              question: "Posso ter blog médico?",
              answer:
                "Sim, desde que com viés informativo e educativo, sem promessas ou comparações entre tratamentos. Estruturamos o blog seguindo essas premissas.",
            },
            {
              question: "Posso publicar fotos do consultório e da equipe?",
              answer:
                "Sim. Fotografias institucionais do consultório, equipamentos e equipe são totalmente permitidas e ajudam o paciente a se sentir seguro antes da consulta.",
            },
            {
              question: "Atendem clínicas fora de São Paulo?",
              answer:
                "Sim. Atendemos clínicas e consultórios em todo o Brasil de forma 100% remota, com reuniões por vídeo e processo colaborativo digital.",
            },
            {
              question: "O site é seguro para receber dados de pacientes?",
              answer:
                "Sim. Implementamos HTTPS, formulários com tratamento conforme LGPD para dados sensíveis de saúde e gestão de consentimento. Para clínicas com necessidades específicas, oferecemos auditoria adicional.",
            },
          ]}
        />
        <ServiceCta
          title={
            <>
              Pronto para um site que{" "}
              <span className="text-gradient-primary">trabalha pela clínica?</span>
            </>
          }
          subtitle="Solicite um orçamento sem compromisso. Vamos construir um site médico que respeita o CFM e gera pacientes."
          whatsappMessage="Olá! Sou médico(a) e gostaria de um orçamento para um site em conformidade com o CFM."
        />
      </main>
      <Footer />
    </>
  );
}
