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

const PATH = "/servicos/criacao-de-sites";
const SITE_URL = "https://ad4pixels.com.br";

export const metadata: Metadata = {
  title: "Criação de Sites Profissionais com Foco em Conversão",
  description:
    "Criação de sites profissionais com design exclusivo e foco em conversão. Sites institucionais, landing pages e e-commerces. Atendemos todo o Brasil e projetos remotos.",
  keywords: [
    "criação de sites profissionais",
    "agência de criação de sites",
    "site institucional sob medida",
    "landing page de alta conversão",
    "criação de e-commerce",
    "desenvolvimento de sites brasil",
    "agência de sites remota",
    "site otimizado para conversão",
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: "Criação de Sites Profissionais com Foco em Conversão | 4 Pixels",
    description:
      "Sites com design exclusivo e foco em conversão. Atendemos clientes em todo o Brasil e projetos remotos.",
    type: "website",
    locale: "pt_BR",
    url: PATH,
  },
  twitter: {
    card: "summary_large_image",
    title: "Criação de Sites Profissionais com Foco em Conversão | 4 Pixels",
    description:
      "Sites institucionais, landing pages e e-commerces. Atendimento no Brasil e projetos remotos.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Criação de Sites Profissionais",
  description:
    "Desenvolvimento de sites institucionais, landing pages e e-commerces com design exclusivo e foco em conversão. Atendemos todo o Brasil e projetos remotos no exterior.",
  url: `${SITE_URL}${PATH}`,
  provider: { "@id": `${SITE_URL}/#business` },
  areaServed: [
    { "@type": "Country", name: "Brasil" },
    { "@type": "Place", name: "Worldwide" },
  ],
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
          whatsappMessage="Olá! Tenho interesse em criar um site profissional. Pode me enviar um orçamento?"
          visual={<BrowserMockup />}
          breadcrumbs={
            <Breadcrumbs
              items={[
                { label: "Início", href: "/" },
                { label: "Serviços", href: "/#servicos" },
                { label: "Criação de Sites" },
              ]}
            />
          }
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
        <section className="relative bg-(--color-bg-elevated) py-20 lg:py-28">
          <div className="mx-auto max-w-(--layout-max-width) px-6 lg:px-20">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 lg:col-span-7">
                <p className="text-xs tracking-[0.2em] uppercase text-(--color-accent-blue) mb-4">
                  Soluções por Segmento
                </p>
                <h2 className="text-3xl font-bold tracking-tight lg:text-5xl">
                  Sites pensados para{" "}
                  <span className="text-gradient-primary">o seu segmento.</span>
                </h2>
                <p className="mt-4 max-w-xl text-(--color-text-secondary) text-lg">
                  Cada negócio tem regras, jornada e linguagem próprias. Construímos páginas dedicadas a quem entende disso melhor que ninguém — você.
                </p>
              </div>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:mt-16">
              {[
                {
                  title: "Site para Advogados",
                  description: "Em conformidade com o Provimento 205/2021 da OAB, com SEO jurídico e captura de leads qualificados.",
                  href: "/servicos/site-para-advogados",
                  accent: "text-(--color-accent-blue)",
                },
                {
                  title: "Site para Médicos",
                  description: "Em conformidade com a Resolução CFM 1974/2011, com especialidades, currículo e agendamento online.",
                  href: "/servicos/site-para-medicos",
                  accent: "text-(--color-accent-blue)",
                },
                {
                  title: "Site para Dentistas",
                  description: "Em conformidade com a Resolução CFO 196/2019, com especialidades odontológicas e agendamento.",
                  href: "/servicos/site-para-dentistas",
                  accent: "text-(--color-accent-blue)",
                },
                {
                  title: "Site para Clínica Veterinária",
                  description: "Apresentação dos serviços, equipe e infraestrutura, com agendamento online integrado.",
                  href: "/servicos/site-para-clinica-veterinaria",
                  accent: "text-(--color-accent-green)",
                },
                {
                  title: "Site para Imobiliárias",
                  description: "Listings sincronizados com Imobzi, Jetimob e Vista, captação de leads e SEO por bairro.",
                  href: "/servicos/site-para-imobiliarias",
                  accent: "text-(--color-accent-purple)",
                },
                {
                  title: "Cardápio Digital",
                  description: "Cardápio com QR code na mesa, pedidos pelo WhatsApp, sem comissão e sem app.",
                  href: "/servicos/cardapio-virtual",
                  accent: "text-(--color-accent-orange)",
                },
              ].map((segment) => (
                <a
                  key={segment.href}
                  href={segment.href}
                  className="glass-card group relative flex flex-col gap-4 p-8 transition-all duration-300 hover:brightness-110"
                >
                  <h3 className={`text-xl font-bold ${segment.accent}`}>
                    {segment.title}
                  </h3>
                  <p className="text-(--color-text-secondary) leading-relaxed">
                    {segment.description}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-(--color-text-primary)">
                    Conhecer
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
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
          whatsappMessage="Olá! Tenho interesse em criar um site profissional. Pode me enviar um orçamento?"
        />
      </main>
      <Footer />
    </>
  );
}
