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

const PATH = "/servicos/site-para-imobiliarias";
const SITE_URL = "https://ad4pixels.com.br";

export const metadata: Metadata = {
  title: "Site para Imobiliárias com Integração de CRM e Listings",
  description:
    "Criação de site para imobiliárias com integração com Imobzi, Jetimob, Vista, Tecimob e outros CRMs. Listings, captação de leads e SEO imobiliário para todo o Brasil.",
  keywords: [
    "site para imobiliária",
    "site imobiliário",
    "criação de site para corretor de imóveis",
    "site com integração imobzi",
    "site com integração jetimob",
    "site com integração vista crm",
    "agência para imobiliárias",
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: "Site para Imobiliárias com Integração de CRM e Listings | 4 Pixels",
    description:
      "Sites para imobiliárias com integração com Imobzi, Jetimob, Vista e outros CRMs. Atendemos todo o Brasil.",
    type: "website",
    locale: "pt_BR",
    url: PATH,
  },
  twitter: {
    card: "summary_large_image",
    title: "Site para Imobiliárias com Integração de CRM e Listings | 4 Pixels",
    description:
      "Sites com integração com CRMs imobiliários e listings automáticos. Atendimento no Brasil e exterior.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Site para Imobiliárias",
  description:
    "Criação de sites para imobiliárias e corretores com integração de CRMs imobiliários (Imobzi, Jetimob, Vista, Tecimob), listings sincronizados, captação de leads e SEO imobiliário.",
  url: `${SITE_URL}${PATH}`,
  provider: { "@id": `${SITE_URL}/#business` },
  areaServed: [
    { "@type": "Country", name: "Brasil" },
    { "@type": "Place", name: "Worldwide" },
  ],
  audience: { "@type": "Audience", audienceType: "Imobiliárias e Corretores de Imóveis" },
  serviceType: "Web Development for Real Estate",
};

export default function SiteParaImobiliarias() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <ServiceHero
          badge="Site para Imobiliárias"
          title="Seu portfólio de imóveis num site que é seu."
          highlight="Sem depender só de portais."
          description="Sites para imobiliárias com integração direta ao seu CRM (Imobzi, Jetimob, Vista, Tecimob), listings sempre atualizados, captação de leads e SEO imobiliário por bairro."
          cta="Quero meu site imobiliário"
          whatsappMessage="Olá! Tenho uma imobiliária e gostaria de um orçamento para um site com integração de CRM."
          visual={<BrowserMockup />}
          breadcrumbs={
            <Breadcrumbs
              items={[
                { label: "Início", href: "/" },
                { label: "Serviços", href: "/#servicos" },
                { label: "Criação de Sites", href: "/servicos/criacao-de-sites" },
                { label: "Site para Imobiliárias" },
              ]}
            />
          }
        />
        <ProblemSolution
          problemTitle={
            <>
              Lead vem só de portais?{" "}
              <span className="text-(--color-text-secondary)">Você paga caro pelo seu cliente.</span>
            </>
          }
          solutionTitle={
            <>
              Um site imobiliário que{" "}
              <span className="text-gradient-cool">capta direto, sem comissão de portal.</span>
            </>
          }
          problems={[
            "Dependência de portais como Zap e VivaReal — você paga mensalidade, paga por destaque, e o lead chega para vários concorrentes ao mesmo tempo",
            "Atualizar listings manualmente em cada lugar consome horas semanais e gera divergência de preço e foto",
            "Marca da imobiliária fica diluída — o cliente lembra do portal, não de você",
          ]}
          solutions={[
            "Site próprio com integração via API ao seu CRM imobiliário — listings sincronizados em tempo real",
            "Captação de leads exclusivos chega direto no CRM, sem dividir com a concorrência",
            "Identidade visual da imobiliária em destaque — você constrói marca, não aluga audiência de portal",
          ]}
        />
        <ServiceProcess
          title={
            <>
              Como entregamos{" "}
              <span className="text-gradient-cool">seu site imobiliário.</span>
            </>
          }
          subtitle="Da imobiliária de bairro à rede com várias unidades. Adaptamos a estrutura ao volume de listings."
          steps={[
            {
              title: "Briefing & Análise do CRM",
              description:
                "Mapeamos qual CRM imobiliário você usa, quantos imóveis estão cadastrados, regiões de atuação e tipos de imóvel.",
              details: ["Análise do CRM", "Volume de imóveis", "Regiões de atuação"],
            },
            {
              title: "Estrutura & Filtros",
              description:
                "Definimos a arquitetura do site: filtros (preço, dormitórios, bairro, finalidade), busca por mapa e páginas por região.",
              details: ["Arquitetura", "Filtros avançados", "Páginas por bairro"],
            },
            {
              title: "Design Imobiliário",
              description:
                "Criamos uma identidade visual sofisticada que valoriza fotos de imóveis, com cards limpos e galeria em destaque.",
              details: ["Identidade visual", "Cards de imóvel", "Galeria valorizada"],
            },
            {
              title: "Integração & SEO",
              description:
                "Conectamos via API ao seu CRM e otimizamos para buscas como \"apartamento à venda em [bairro]\" — gerando tráfego orgânico qualificado.",
              details: ["API do CRM", "SEO imobiliário", "Sitemap dinâmico de imóveis"],
            },
            {
              title: "Lançamento & Suporte",
              description:
                "Publicamos o site, treinamos sua equipe na gestão e oferecemos suporte para novos filtros, regiões e funcionalidades.",
              details: ["Publicação", "Treinamento", "Manutenção"],
            },
          ]}
        />
        <Differentials
          title={
            <>
              Por que imobiliárias escolhem a{" "}
              <span className="text-gradient-primary">4 Pixels.</span>
            </>
          }
          subtitle="Conhecemos o operacional do mercado imobiliário — e construímos sites que geram lead exclusivo, não tráfego de vaidade."
          items={[
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M4 14L14 4L24 14V24H4V14Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><rect x="11" y="16" width="6" height="8" stroke="currentColor" strokeWidth="2" /></svg>,
              title: "Integração com CRMs Imobiliários",
              description: "Imobzi, Jetimob, Vista, Tecimob, ZapImóveis CRM — integramos com o sistema que você já usa.",
            },
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="2" /><path d="M14 8V14L18 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>,
              title: "Listings em Tempo Real",
              description: "Cadastrou no CRM, aparece no site. Vendeu, sai da listagem. Zero retrabalho de atualização manual.",
            },
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="2" /><path d="M9 14C9 11 11 9 14 9C17 9 19 11 19 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M14 14V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>,
              title: "Busca por Mapa",
              description: "Cliente busca imóvel por região visualmente, com filtros de preço e características. Conversão muito maior que listas.",
            },
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M4 21L10 15L14 19L20 11L24 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M18 7H24V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
              title: "SEO Imobiliário",
              description: "Páginas dedicadas por bairro/cidade otimizadas para \"apartamento à venda em [bairro]\" — tráfego que paga aluguel.",
            },
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="4" y="6" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" /><path d="M9 11H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M9 15H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>,
              title: "Captação de Imóveis",
              description: "Formulário de captação de imóveis para proprietários que querem alugar/vender com você. Suprimento sempre cheio.",
            },
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M21.5 12.5C21.5 17.7 17.5 22 12.5 22C10.5 22 8.7 21.4 7.2 20.4L3 22L4.7 18C3.6 16.4 3 14.5 3 12.5C3 7.3 7 3 12 3C17 3 21.5 7.3 21.5 12.5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>,
              title: "WhatsApp por Imóvel",
              description: "Cada anúncio tem botão de WhatsApp direto pro corretor responsável — fricção zero entre interesse e contato.",
            },
          ]}
        />
        <ServiceFaq
          faqs={[
            {
              question: "Vocês integram com qual CRM imobiliário?",
              answer:
                "Integramos com Imobzi, Jetimob, Vista CRM, Tecimob, ZapImóveis CRM, Apolar, Casabranca e outros. Se você usa outro CRM com API pública, fazemos a integração também.",
            },
            {
              question: "Quanto tempo leva para integrar com o CRM?",
              answer:
                "Depende do CRM. Para os mais comuns (Imobzi, Jetimob, Vista) a integração leva entre 1 e 2 semanas. Para sistemas com API menos documentada, pode levar 3 a 4 semanas.",
            },
            {
              question: "O site funciona bem com muitos imóveis (5 mil+)?",
              answer:
                "Sim. Implementamos paginação, filtros otimizados, cache e geração estática incremental. Já entregamos sites com bases de 10 mil+ imóveis com tempo de carregamento abaixo de 2s.",
            },
            {
              question: "Posso ter páginas dedicadas por bairro para SEO?",
              answer:
                "Sim. Geramos páginas dinâmicas por bairro/cidade e tipo de imóvel — fundamentais para ranquear em buscas como \"apartamento Tatuapé\" ou \"casa para alugar Mooca\".",
            },
            {
              question: "Vocês continuam atendendo após a entrega?",
              answer:
                "Sim. Oferecemos planos de manutenção mensal com correções, atualizações de funcionalidades, novos filtros, novas regiões e suporte técnico.",
            },
            {
              question: "Atendem imobiliárias fora de São Paulo?",
              answer:
                "Sim. Atendemos imobiliárias em todo o Brasil de forma 100% remota, com reuniões por vídeo.",
            },
          ]}
        />
        <ServiceCta
          title={
            <>
              Pronto para parar de pagar{" "}
              <span className="text-gradient-primary">comissão pra portal?</span>
            </>
          }
          subtitle="Solicite um orçamento sem compromisso. Vamos construir o site que torna sua imobiliária dona dos próprios leads."
          whatsappMessage="Olá! Tenho uma imobiliária e gostaria de um orçamento para um site com integração de CRM."
        />
      </main>
      <Footer />
    </>
  );
}
