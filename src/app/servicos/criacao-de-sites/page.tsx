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

export const metadata: Metadata = {
  title: "Criação de Sites Profissionais | Four Pixels — Agência Digital",
  description:
    "Criação de sites profissionais com design exclusivo e foco em conversão. Sites institucionais, landing pages e e-commerces. Solicite um orçamento.",
  keywords: [
    "criação de sites",
    "criação de sites profissionais",
    "empresa que faz site",
    "agência de sites",
    "desenvolvimento de sites",
    "fazer site profissional",
    "site institucional",
    "landing page",
  ],
  openGraph: {
    title: "Criação de Sites Profissionais | Four Pixels",
    description:
      "Sites com design exclusivo e foco em conversão. Solicite um orçamento sem compromisso.",
    type: "website",
    locale: "pt_BR",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Criação de Sites Profissionais",
  description:
    "Desenvolvimento de sites institucionais, landing pages e e-commerces com design exclusivo e foco em conversão.",
  provider: {
    "@type": "Organization",
    name: "Four Pixels — Agência Digital",
    url: "https://fourpixels.com.br",
  },
  areaServed: { "@type": "Country", name: "Brasil" },
  serviceType: "Web Development",
};

export default function CriacaoDeSites() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <ServiceHero
          badge="Criação de Sites"
          title="Seu site é sua vitrine digital."
          highlight="Ele precisa vender."
          description="Criamos sites profissionais com design exclusivo e foco em conversão. Cada projeto é pensado para representar sua marca e gerar resultados."
          cta="Quero meu site"
          visual={<BrowserMockup />}
        />
        <ProblemSolution
          problemTitle={
            <>
              Ter um site{" "}
              <span className="text-(--color-text-secondary)">
                não é o suficiente.
              </span>
            </>
          }
          solutionTitle={
            <>
              Um site que{" "}
              <span className="text-gradient-cool">trabalha por você.</span>
            </>
          }
          problems={[
            "Seu site não transmite profissionalismo e afasta potenciais clientes",
            "O design é genérico e não transmite a credibilidade da sua empresa",
            "Visitantes entram no site e saem sem entrar em contato ou comprar",
          ]}
          solutions={[
            "Site com estrutura técnica preparada para os mecanismos de busca",
            "Design exclusivo alinhado à identidade visual e posicionamento da marca",
            "Estrutura focada em conversão com CTAs estratégicos em cada seção",
          ]}
        />
        <ServiceProcess
          title={
            <>
              Como criamos{" "}
              <span className="text-gradient-cool">seu site.</span>
            </>
          }
          subtitle="Um processo transparente em 5 etapas. Você participa de cada decisão."
          steps={[
            {
              title: "Briefing & Estratégia",
              description:
                "Entendemos seu negócio, público-alvo e objetivos. Analisamos concorrentes e definimos a estratégia de conteúdo e posicionamento do site.",
              details: ["Análise de mercado", "Definição de personas", "Mapa de conteúdo"],
            },
            {
              title: "Wireframe & Arquitetura",
              description:
                "Criamos a estrutura e navegação do site. Você visualiza e aprova a organização das páginas antes de iniciarmos o design.",
              details: ["Arquitetura de informação", "Wireframes interativos", "Fluxo de navegação"],
            },
            {
              title: "Design Visual",
              description:
                "Desenvolvemos o design exclusivo do seu site com base na identidade visual da sua marca. Cada página é desenhada com foco em conversão.",
              details: ["UI/UX design", "Design responsivo", "Protótipo navegável"],
            },
            {
              title: "Desenvolvimento",
              description:
                "Codificamos o site com tecnologias modernas, garantindo performance, segurança e compatibilidade com todos os dispositivos.",
              details: ["Código otimizado", "Boas práticas de SEO", "Testes de qualidade"],
            },
            {
              title: "Lançamento & Suporte",
              description:
                "Publicamos o site, configuramos ferramentas de análise e oferecemos suporte contínuo para garantir o melhor desempenho.",
              details: ["Deploy e DNS", "Google Analytics", "Suporte pós-lançamento"],
            },
          ]}
        />
        <Differentials
          title={
            <>
              O que nos torna{" "}
              <span className="text-gradient-primary">diferentes.</span>
            </>
          }
          subtitle="Não somos apenas uma fábrica de sites. Somos parceiros estratégicos do seu crescimento digital."
          items={[
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 3L17.5 10L25 11L19.5 16.5L21 24L14 20L7 24L8.5 16.5L3 11L10.5 10L14 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>,
              title: "Design Exclusivo",
              description: "Nada de templates prontos. Cada site é desenhado do zero para refletir a identidade e os objetivos do seu negócio.",
            },
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 4V14L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="2" /></svg>,
              title: "Performance Otimizada",
              description: "Sites rápidos geram mais conversões. Utilizamos tecnologias modernas para garantir a melhor experiência de carregamento.",
            },
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M4 21L10 15L14 19L20 11L24 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M18 7H24V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
              title: "Estrutura Preparada para SEO",
              description: "Código semântico, meta tags e estrutura técnica seguindo as boas práticas para mecanismos de busca. Uma base sólida para sua estratégia digital.",
            },
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="3" y="5" width="22" height="14" rx="2" stroke="currentColor" strokeWidth="2" /><rect x="8" y="21" width="12" height="4" rx="1" stroke="currentColor" strokeWidth="2" /><path d="M10 19V21" stroke="currentColor" strokeWidth="2" /><path d="M18 19V21" stroke="currentColor" strokeWidth="2" /></svg>,
              title: "100% Responsivo",
              description: "Desktop, tablet, celular. Cada breakpoint é projetado individualmente para oferecer a melhor experiência ao usuário.",
            },
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 4C8.48 4 4 8.48 4 14C4 19.52 8.48 24 14 24C19.52 24 24 19.52 24 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M14 10V14L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M20 4V10H26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
              title: "Entrega Ágil",
              description: "Processo estruturado com entregas parciais a cada etapa. Você acompanha o progresso e aprova cada fase.",
            },
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M12 4H6C4.9 4 4 4.9 4 6V22C4 23.1 4.9 24 6 24H22C23.1 24 24 23.1 24 22V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M20 4L24 8L14 18H10V14L20 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>,
              title: "Suporte Contínuo",
              description: "Não desaparecemos após a entrega. Suporte técnico, atualizações e melhorias contínuas para manter seu site sempre atualizado.",
            },
          ]}
        />
        <ServiceFaq
          faqs={[
            {
              question: "Como funciona o orçamento?",
              answer: "Cada projeto é único, por isso o investimento varia conforme a complexidade, número de páginas e funcionalidades necessárias. Após uma conversa inicial para entender suas necessidades, enviamos uma proposta detalhada e personalizada.",
            },
            {
              question: "Quais tipos de site vocês desenvolvem?",
              answer: "Desenvolvemos sites institucionais, landing pages, e-commerces, portais e plataformas web. Cada projeto é desenhado do zero com design exclusivo, sem templates prontos, e adaptado aos objetivos do seu negócio.",
            },
            {
              question: "O site terá uma boa estrutura para SEO?",
              answer: "Sim. Todos os nossos sites seguem as boas práticas de SEO técnico: código semântico, meta tags, sitemap, schema markup e compatibilidade mobile. Essa base facilita o trabalho de posicionamento nos mecanismos de busca. Para estratégias avançadas de SEO e posicionamento na primeira página, oferecemos planos específicos.",
            },
            {
              question: "Vocês fazem sites responsivos para celular?",
              answer: "Todos os nossos sites são 100% responsivos. Projetamos cada breakpoint individualmente (desktop, tablet e mobile) para garantir a melhor experiência em qualquer dispositivo.",
            },
            {
              question: "Posso atualizar o conteúdo do site sozinho?",
              answer: "Sim. Dependendo da plataforma escolhida, integramos um painel administrativo intuitivo para que você possa editar textos, imagens e conteúdos sem precisar de conhecimento técnico.",
            },
            {
              question: "Vocês oferecem suporte após a entrega?",
              answer: "Sim. Oferecemos suporte técnico contínuo, atualizações de segurança e melhorias. Temos planos de manutenção para garantir que seu site continue funcionando perfeitamente.",
            },
            {
              question: "Quais tecnologias vocês utilizam?",
              answer: "Utilizamos as tecnologias mais modernas do mercado: React, Next.js, TypeScript e Tailwind CSS para sites de alta performance. Para projetos que exigem CMS, trabalhamos com WordPress e soluções headless.",
            },
          ]}
        />
        <ServiceCta
          title={
            <>
              Pronto para ter um site que{" "}
              <span className="text-gradient-primary">realmente vende?</span>
            </>
          }
          subtitle="Solicite um orçamento sem compromisso. Vamos entender seu projeto e apresentar a melhor solução para o seu negócio."
        />
      </main>
      <Footer />
    </>
  );
}
