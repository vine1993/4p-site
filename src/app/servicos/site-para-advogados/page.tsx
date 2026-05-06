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

const PATH = "/servicos/site-para-advogados";
const SITE_URL = "https://ad4pixels.com.br";

export const metadata: Metadata = {
  title: "Site para Advogados em Conformidade com a OAB",
  description:
    "Criação de site para advogados e escritórios de advocacia em conformidade com o Provimento 205/2021 da OAB. Design profissional, captura de leads e SEO jurídico.",
  keywords: [
    "site para advogados",
    "site para escritório de advocacia",
    "criação de site jurídico",
    "site para advogado em conformidade com a oab",
    "marketing jurídico digital",
    "site advogado oab",
    "agência para advogados",
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: "Site para Advogados em Conformidade com a OAB | 4 Pixels",
    description:
      "Sites profissionais para advogados e escritórios em conformidade com o Provimento 205/2021. Atendemos todo o Brasil.",
    type: "website",
    locale: "pt_BR",
    url: PATH,
  },
  twitter: {
    card: "summary_large_image",
    title: "Site para Advogados em Conformidade com a OAB | 4 Pixels",
    description:
      "Sites profissionais para advogados em conformidade com a OAB. Atendimento no Brasil e projetos remotos.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Site para Advogados",
  description:
    "Criação de sites para advogados e escritórios de advocacia em conformidade com o Provimento 205/2021 da OAB, com foco em credibilidade, captura de leads e SEO jurídico.",
  url: `${SITE_URL}${PATH}`,
  provider: { "@id": `${SITE_URL}/#business` },
  areaServed: [
    { "@type": "Country", name: "Brasil" },
    { "@type": "Place", name: "Worldwide" },
  ],
  audience: { "@type": "Audience", audienceType: "Advogados e Escritórios de Advocacia" },
  serviceType: "Web Development for Law Firms",
};

export default function SiteParaAdvogados() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <ServiceHero
          badge="Site para Advogados"
          title="Um site jurídico que respeita a OAB."
          highlight="E gera novos casos."
          description="Sites em conformidade com o Provimento 205/2021 da OAB, com design profissional, áreas de atuação bem estruturadas e captura de leads pensada para o público jurídico."
          cta="Quero meu site jurídico"
          whatsappMessage="Olá! Sou advogado(a) e gostaria de um orçamento para um site em conformidade com a OAB."
          visual={<BrowserMockup />}
          breadcrumbs={
            <Breadcrumbs
              items={[
                { label: "Início", href: "/" },
                { label: "Serviços", href: "/#servicos" },
                { label: "Criação de Sites", href: "/servicos/criacao-de-sites" },
                { label: "Site para Advogados" },
              ]}
            />
          }
        />
        <ProblemSolution
          problemTitle={
            <>
              Marketing jurídico tem regras.{" "}
              <span className="text-(--color-text-secondary)">E penalidades.</span>
            </>
          }
          solutionTitle={
            <>
              Um site jurídico{" "}
              <span className="text-gradient-cool">que vende sem infringir.</span>
            </>
          }
          problems={[
            "Risco de infração ao Código de Ética da OAB e ao Provimento 205/2021 com promessas de resultado, autopromoção ou mercantilização",
            "Sites genéricos não transmitem credibilidade, e potenciais clientes escolhem o concorrente que pareceu mais sério",
            "Falta uma estrutura clara de áreas de atuação, currículo da banca e caminho para o contato qualificado",
          ]}
          solutions={[
            "Conteúdo e CTAs revisados para respeitar o Código de Ética e o Provimento 205/2021 da OAB",
            "Identidade visual sóbria e profissional que reforça autoridade técnica do escritório",
            "Áreas de atuação, equipe e formulário de contato estruturados para gerar leads qualificados",
          ]}
        />
        <ServiceProcess
          title={
            <>
              Como entregamos{" "}
              <span className="text-gradient-cool">seu site jurídico.</span>
            </>
          }
          subtitle="Processo colaborativo, com revisão de conteúdo pensando nas regras da OAB em cada etapa."
          steps={[
            {
              title: "Briefing & Áreas de Atuação",
              description:
                "Mapeamos as áreas de atuação do escritório, o perfil do cliente ideal e o tom de comunicação adequado ao seu posicionamento.",
              details: ["Mapa de áreas", "Perfil do cliente", "Tom de comunicação"],
            },
            {
              title: "Estrutura & Conteúdo",
              description:
                "Definimos a arquitetura do site e revisamos cada texto considerando o Código de Ética e o Provimento 205/2021.",
              details: ["Arquitetura do site", "Revisão ética", "Estrutura de páginas"],
            },
            {
              title: "Design Sóbrio e Profissional",
              description:
                "Criamos uma identidade visual que transmite seriedade, confiança e autoridade técnica — sem exageros gráficos.",
              details: ["Identidade visual", "Tipografia editorial", "Hierarquia clara"],
            },
            {
              title: "Desenvolvimento & SEO Jurídico",
              description:
                "Codificamos com performance e SEO orientado a buscas jurídicas locais e por área de atuação.",
              details: ["Site responsivo", "SEO jurídico", "Schema.org Legal"],
            },
            {
              title: "Lançamento & Manutenção",
              description:
                "Publicamos o site, treinamos sua equipe e oferecemos suporte contínuo para atualização de conteúdo e novas áreas.",
              details: ["Treinamento", "Suporte técnico", "Atualizações de conteúdo"],
            },
          ]}
        />
        <Differentials
          title={
            <>
              Por que escritórios escolhem a{" "}
              <span className="text-gradient-primary">4 Pixels.</span>
            </>
          }
          subtitle="Entendemos as nuances do marketing jurídico — e construímos sites que geram resultado dentro das regras."
          items={[
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 4L4 8V14C4 20 8 24.5 14 26C20 24.5 24 20 24 14V8L14 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M10 14L13 17L18 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
              title: "Conformidade com a OAB",
              description: "Conteúdo e estrutura revisados conforme o Código de Ética e o Provimento 205/2021. Você não corre riscos.",
            },
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="4" y="6" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" /><path d="M4 11H24" stroke="currentColor" strokeWidth="2" /><path d="M9 16H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>,
              title: "Áreas de Atuação Estruturadas",
              description: "Cada área de atuação ganha sua própria página, otimizada para busca e para conversão de cliente qualificado.",
            },
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="9" r="4" stroke="currentColor" strokeWidth="2" /><path d="M5 24C5 19 9 16 14 16C19 16 23 19 23 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>,
              title: "Credibilidade Visual",
              description: "Identidade sóbria, tipografia editorial e fotografia profissional — o cliente sente seriedade antes de ler.",
            },
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M4 21L10 15L14 19L20 11L24 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M18 7H24V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
              title: "SEO Jurídico Local",
              description: "Otimização para buscas como \"advogado [especialidade] [cidade]\", trazendo clientes que já procuram seu serviço.",
            },
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M6 4H22C23.1 4 24 4.9 24 6V22C24 23.1 23.1 24 22 24H6C4.9 24 4 23.1 4 22V6C4 4.9 4.9 4 6 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M9 10H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M9 14H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M9 18H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>,
              title: "Blog Jurídico (Opcional)",
              description: "Artigos informativos sobre temas jurídicos — dentro das regras da OAB — que reforçam autoridade técnica.",
            },
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="2" /><path d="M14 8V14L18 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>,
              title: "LGPD na Captura de Leads",
              description: "Formulários e cookies em conformidade com a LGPD, com gestão de consentimento e termos claros.",
            },
          ]}
        />
        <ServiceFaq
          faqs={[
            {
              question: "O site fica em conformidade com as regras da OAB?",
              answer:
                "Sim. Construímos a estrutura, o conteúdo e os CTAs respeitando o Código de Ética e o Provimento 205/2021 — sem promessas de resultado, mercantilização ou autopromoção indevida. Recomendamos uma revisão final pelo seu próprio departamento de compliance ou colega assessor.",
            },
            {
              question: "Posso ter blog jurídico no site?",
              answer:
                "Sim, desde que com viés informativo e educativo, sem promessas, sem captação indevida e com identificação adequada. Estruturamos o blog seguindo essas premissas.",
            },
            {
              question: "Vocês fazem SEO para escritórios de advocacia?",
              answer:
                "Sim. Otimizamos cada área de atuação para buscas como \"advogado trabalhista [cidade]\" ou \"escritório de família [bairro]\", além de marcação Schema.org especializada.",
            },
            {
              question: "Atendem escritórios fora de São Paulo?",
              answer:
                "Sim. Atendemos escritórios em todo o Brasil de forma 100% remota, com reuniões por vídeo e processo colaborativo digital.",
            },
            {
              question: "É possível integrar o site com sistemas de gestão jurídica?",
              answer:
                "Sim. Integramos o site com Astrea, Projuris, ADVBOX, Jusbrasil e outros sistemas via API ou formulários personalizados.",
            },
            {
              question: "Quanto tempo leva para entregar o site?",
              answer:
                "Sites jurídicos institucionais ficam prontos entre 4 e 8 semanas, dependendo do número de áreas de atuação, conteúdo e integrações.",
            },
          ]}
        />
        <ServiceCta
          title={
            <>
              Pronto para um site que{" "}
              <span className="text-gradient-primary">trabalha pelo escritório?</span>
            </>
          }
          subtitle="Solicite um orçamento sem compromisso. Vamos construir um site jurídico que respeita a OAB e gera novos casos."
          whatsappMessage="Olá! Sou advogado(a) e gostaria de um orçamento para um site em conformidade com a OAB."
        />
      </main>
      <Footer />
    </>
  );
}
