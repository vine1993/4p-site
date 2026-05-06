import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ServiceHero from "@/components/services/ServiceHero";
import ProblemSolution from "@/components/services/ProblemSolution";
import ServiceProcess from "@/components/services/ServiceProcess";
import Differentials from "@/components/services/Differentials";
import ServiceFaq from "@/components/services/ServiceFaq";
import ServiceCta from "@/components/services/ServiceCta";
import CodeMockup from "@/components/services/visuals/CodeMockup";
import Breadcrumbs from "@/components/services/Breadcrumbs";

const PATH = "/servicos/produtos-customizados";
const SITE_URL = "https://ad4pixels.com.br";

export const metadata: Metadata = {
  title: "Produtos Digitais Customizados e Soluções Sob Medida",
  description:
    "Desenvolvimento de soluções digitais personalizadas. Integrações, APIs e ferramentas sob medida. Atendemos todo o Brasil e projetos remotos.",
  keywords: [
    "produto digital sob medida",
    "desenvolvimento de software customizado",
    "integração de sistemas",
    "api sob medida",
    "ferramenta digital personalizada",
    "agência de produto digital brasil",
    "desenvolvedor freelance remoto",
    "software empresarial sob medida",
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: "Produtos Digitais Customizados e Soluções Sob Medida | 4 Pixels",
    description:
      "Integrações, APIs e ferramentas sob medida. Atendemos clientes em todo o Brasil e projetos remotos.",
    type: "website",
    locale: "pt_BR",
    url: PATH,
  },
  twitter: {
    card: "summary_large_image",
    title: "Produtos Digitais Customizados e Soluções Sob Medida | 4 Pixels",
    description:
      "Integrações, APIs e ferramentas sob medida. Atendimento no Brasil e projetos remotos.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Produtos Digitais Customizados",
  description:
    "Desenvolvimento de soluções digitais personalizadas — integrações, APIs e ferramentas sob medida. Atendemos todo o Brasil e projetos remotos no exterior.",
  url: `${SITE_URL}${PATH}`,
  provider: { "@id": `${SITE_URL}/#business` },
  areaServed: [
    { "@type": "Country", name: "Brasil" },
    { "@type": "Place", name: "Worldwide" },
  ],
  serviceType: "Custom Software Development",
};

export default function ProdutosCustomizados() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <ServiceHero
          badge="Produtos Customizados"
          title="Seu negócio é único."
          highlight="Sua solução também deve ser."
          description="Desenvolvemos produtos digitais sob medida — integrações, APIs, ferramentas e plataformas específicas para o seu modelo de negócio."
          cta="Tenho um projeto"
          whatsappMessage="Olá! Tenho um projeto de produto digital customizado e gostaria de conversar sobre um orçamento."
          visual={<CodeMockup />}
          breadcrumbs={
            <Breadcrumbs
              items={[
                { label: "Início", href: "/" },
                { label: "Serviços", href: "/#servicos" },
                { label: "Produtos Customizados" },
              ]}
            />
          }
        />
        <ProblemSolution
          problemTitle={
            <>
              Ferramentas genéricas{" "}
              <span className="text-(--color-text-secondary)">
                têm limites.
              </span>
            </>
          }
          solutionTitle={
            <>
              Uma solução que{" "}
              <span className="text-gradient-cool">se adapta a você.</span>
            </>
          }
          problems={[
            "Você usa várias ferramentas que não conversam entre si e geram retrabalho",
            "Soluções prontas do mercado não atendem às particularidades do seu negócio",
            "Processos críticos dependem de soluções improvisadas que não são confiáveis",
          ]}
          solutions={[
            "Produto digital construído exatamente para o seu fluxo de trabalho e regras de negócio",
            "Integrações que conectam suas ferramentas e eliminam trabalho manual",
            "Solução robusta e escalável que cresce junto com a sua operação",
          ]}
        />
        <ServiceProcess
          title={
            <>
              Como construímos{" "}
              <span className="text-gradient-cool">seu produto.</span>
            </>
          }
          subtitle="Um processo adaptado à complexidade do seu projeto. Da validação da ideia ao produto em produção."
          steps={[
            {
              title: "Imersão no Negócio",
              description:
                "Entendemos profundamente seu modelo de negócio, desafios e oportunidades. Mapeamos o problema antes de pensar na solução.",
              details: ["Entrevistas com stakeholders", "Mapa de processos", "Análise de viabilidade"],
            },
            {
              title: "Definição do Produto",
              description:
                "Traduzimos as necessidades em especificações técnicas. Definimos escopo, arquitetura e priorizamos o que vai para o MVP.",
              details: ["Especificação técnica", "Arquitetura de solução", "Roadmap do produto"],
            },
            {
              title: "Prototipação",
              description:
                "Criamos protótipos funcionais para validar a solução com usuários reais antes de investir no desenvolvimento completo.",
              details: ["Protótipo funcional", "Validação com usuários", "Ajustes de escopo"],
            },
            {
              title: "Desenvolvimento",
              description:
                "Construímos o produto em ciclos ágeis com entregas frequentes. Cada incremento é testado e validado antes de avançar.",
              details: ["Sprints semanais", "Entregas incrementais", "Testes contínuos"],
            },
            {
              title: "Lançamento & Iteração",
              description:
                "Colocamos o produto em produção e acompanhamos os primeiros resultados. Iteramos com base em dados e feedback real.",
              details: ["Deploy em produção", "Monitoramento", "Iteração baseada em dados"],
            },
          ]}
        />
        <Differentials
          title={
            <>
              Parceiros de{" "}
              <span className="text-gradient-primary">tecnologia.</span>
            </>
          }
          subtitle="Mais do que desenvolvedores. Entendemos de negócio e construímos soluções que geram valor real."
          items={[
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 4L28 10V22L14 28L0 22V10L14 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M14 16L28 10" stroke="currentColor" strokeWidth="2" /><path d="M14 16L0 10" stroke="currentColor" strokeWidth="2" /><path d="M14 16V28" stroke="currentColor" strokeWidth="2" /></svg>,
              title: "Visão de Produto",
              description: "Não somos apenas executores. Participamos da estratégia e ajudamos a tomar decisões técnicas que impactam o negócio.",
            },
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="8" cy="14" r="3" stroke="currentColor" strokeWidth="2" /><circle cx="20" cy="8" r="3" stroke="currentColor" strokeWidth="2" /><circle cx="20" cy="20" r="3" stroke="currentColor" strokeWidth="2" /><path d="M11 13L17 9" stroke="currentColor" strokeWidth="2" /><path d="M11 15L17 19" stroke="currentColor" strokeWidth="2" /></svg>,
              title: "APIs & Integrações",
              description: "Construímos APIs robustas e integramos com qualquer serviço — gateways de pagamento, ERPs, CRMs, serviços de terceiros.",
            },
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M12 8L6 16L12 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M16 8L22 16L16 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
              title: "Stack Moderna",
              description: "Utilizamos as melhores tecnologias para cada caso. React, Node.js, Python, Go — escolhemos a ferramenta certa para o problema.",
            },
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="3" y="3" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2" /><rect x="15" y="3" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2" /><rect x="3" y="15" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2" /><rect x="15" y="15" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2" /></svg>,
              title: "Arquitetura Escalável",
              description: "Projetamos para crescer. Microsserviços, cloud-native e infraestrutura que acompanha o aumento da demanda.",
            },
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 4L4 8V14C4 20 8 24.5 14 26C20 24.5 24 20 24 14V8L14 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M10 14L13 17L18 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
              title: "Qualidade & Testes",
              description: "Código com testes automatizados, code review e CI/CD. Qualidade não é negociável — é parte do processo.",
            },
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M12 4H6C4.9 4 4 4.9 4 6V22C4 23.1 4.9 24 6 24H22C23.1 24 24 23.1 24 22V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M20 4L24 8L14 18H10V14L20 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>,
              title: "Parceria de Longo Prazo",
              description: "Construímos relacionamentos duradouros. Acompanhamos a evolução do produto e ajudamos a priorizar o roadmap.",
            },
          ]}
        />
        <ServiceFaq
          faqs={[
            {
              question: "O que é um produto digital customizado?",
              answer: "É qualquer solução digital construída sob medida para resolver um problema específico do seu negócio. Pode ser uma plataforma SaaS, uma ferramenta interna, uma API, um sistema de automação ou qualquer produto que não existe pronto no mercado.",
            },
            {
              question: "Como funciona o orçamento?",
              answer: "O investimento depende da complexidade e escopo do projeto. Após uma fase de imersão no seu negócio, apresentamos uma proposta com escopo detalhado, arquitetura técnica e investimento. Trabalhamos com escopo fechado ou modelo de squads dedicados.",
            },
            {
              question: "Posso começar com um MVP?",
              answer: "Sim, é o que recomendamos para a maioria dos projetos. O MVP permite validar a ideia com usuários reais, com investimento controlado, antes de desenvolver todas as funcionalidades planejadas.",
            },
            {
              question: "Vocês trabalham com metodologias ágeis?",
              answer: "Sim. Trabalhamos com sprints curtas, entregas frequentes e comunicação constante. Você acompanha o progresso em tempo real e participa da priorização a cada ciclo.",
            },
            {
              question: "Como fica a propriedade intelectual?",
              answer: "Todo o código e propriedade intelectual pertencem a você. Ao final do projeto, entregamos o repositório completo com documentação técnica.",
            },
            {
              question: "Vocês mantêm o produto após o lançamento?",
              answer: "Sim. Oferecemos planos de manutenção e evolução contínua. Monitoramos a infraestrutura, corrigimos problemas e desenvolvemos novas funcionalidades conforme o produto amadurece.",
            },
          ]}
        />
        <ServiceCta
          title={
            <>
              Tem um projeto em mente?{" "}
              <span className="text-gradient-primary">Vamos construir juntos.</span>
            </>
          }
          subtitle="Solicite um orçamento sem compromisso. Vamos entender seu desafio e propor a solução técnica ideal."
          whatsappMessage="Olá! Tenho um projeto de produto digital customizado e gostaria de conversar sobre um orçamento."
        />
      </main>
      <Footer />
    </>
  );
}
