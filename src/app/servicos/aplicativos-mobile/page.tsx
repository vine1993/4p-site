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

const PATH = "/servicos/aplicativos-mobile";
const SITE_URL = "https://ad4pixels.com.br";

export const metadata: Metadata = {
  title: "Desenvolvimento de Aplicativos Mobile para iOS e Android",
  description:
    "Desenvolvimento de aplicativos mobile nativos e multiplataforma para iOS e Android. Atendemos clientes em todo o Brasil e projetos remotos no exterior.",
  keywords: [
    "desenvolvimento de aplicativos mobile",
    "criação de apps ios e android",
    "agência de aplicativos brasil",
    "desenvolvedor de apps remoto",
    "criar aplicativo sob medida",
    "empresa de desenvolvimento de apps",
    "aplicativo react native",
    "aplicativo flutter",
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: "Desenvolvimento de Aplicativos Mobile iOS e Android | 4 Pixels",
    description:
      "Apps nativos e multiplataforma com design intuitivo. Atendemos clientes em todo o Brasil e projetos remotos.",
    type: "website",
    locale: "pt_BR",
    url: PATH,
  },
  twitter: {
    card: "summary_large_image",
    title: "Desenvolvimento de Aplicativos Mobile iOS e Android | 4 Pixels",
    description:
      "Apps para iOS e Android com design intuitivo. Atendimento no Brasil e projetos remotos.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Desenvolvimento de Aplicativos Mobile",
  description:
    "Desenvolvimento de aplicativos nativos e multiplataforma para iOS e Android. Atendemos clientes em todo o Brasil e projetos remotos no exterior.",
  url: `${SITE_URL}${PATH}`,
  provider: { "@id": `${SITE_URL}/#business` },
  areaServed: [
    { "@type": "Country", name: "Brasil" },
    { "@type": "Place", name: "Worldwide" },
  ],
  serviceType: "Mobile App Development",
};

export default function AplicativosMobile() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <ServiceHero
          badge="Aplicativos Mobile"
          title="Seu negócio no bolso do cliente."
          highlight="Sempre acessível."
          description="Desenvolvemos aplicativos para iOS e Android com design intuitivo, performance nativa e foco total na experiência do usuário."
          cta="Quero meu app"
          whatsappMessage="Olá! Gostaria de desenvolver um aplicativo mobile. Pode me enviar um orçamento?"
          visual={<PhoneMockup />}
          breadcrumbs={
            <Breadcrumbs
              items={[
                { label: "Início", href: "/" },
                { label: "Serviços", href: "/#servicos" },
                { label: "Aplicativos Mobile" },
              ]}
            />
          }
        />
        <ProblemSolution
          problemTitle={
            <>
              Seu público está no celular.{" "}
              <span className="text-(--color-text-secondary)">
                E você?
              </span>
            </>
          }
          solutionTitle={
            <>
              Um app que{" "}
              <span className="text-gradient-cool">conecta e fideliza.</span>
            </>
          }
          problems={[
            "Seus clientes precisam de acesso rápido e você depende apenas do navegador",
            "A experiência mobile do seu serviço é limitada e frustrante para o usuário",
            "Você perde engajamento por não estar presente na rotina digital do cliente",
          ]}
          solutions={[
            "App com experiência nativa, rápida e fluida em qualquer dispositivo",
            "Interface desenhada para o contexto mobile com navegação intuitiva",
            "Notificações push e funcionalidades offline para manter o engajamento",
          ]}
        />
        <ServiceProcess
          title={
            <>
              Como desenvolvemos{" "}
              <span className="text-gradient-cool">seu app.</span>
            </>
          }
          subtitle="Da ideia ao lançamento nas lojas. Um processo colaborativo com visibilidade total."
          steps={[
            {
              title: "Descoberta & Escopo",
              description:
                "Mapeamos os objetivos do app, funcionalidades essenciais e perfil dos usuários. Definimos a estratégia técnica e o MVP.",
              details: ["Mapa de funcionalidades", "Perfil de usuário", "Definição do MVP"],
            },
            {
              title: "Prototipação & UX",
              description:
                "Desenhamos os fluxos de navegação e protótipos interativos. Você testa e valida a experiência antes de uma linha de código ser escrita.",
              details: ["Fluxos de navegação", "Protótipo interativo", "Testes de usabilidade"],
            },
            {
              title: "Design de Interface",
              description:
                "Criamos a identidade visual do app seguindo as guidelines de cada plataforma. Cada tela é desenhada com foco em usabilidade.",
              details: ["UI design", "Design system", "Adaptação iOS/Android"],
            },
            {
              title: "Desenvolvimento",
              description:
                "Codificamos o app com tecnologias modernas, garantindo performance, segurança e compatibilidade. Entregas incrementais para acompanhamento.",
              details: ["Código multiplataforma", "Integração com APIs", "Testes automatizados"],
            },
            {
              title: "Publicação & Suporte",
              description:
                "Cuidamos de todo o processo de publicação na App Store e Google Play. Suporte contínuo com atualizações e melhorias.",
              details: ["Publicação nas lojas", "Monitoramento", "Atualizações contínuas"],
            },
          ]}
        />
        <Differentials
          title={
            <>
              Por que escolher a{" "}
              <span className="text-gradient-primary">4 Pixels.</span>
            </>
          }
          subtitle="Experiência real em apps que vão além do visual. Construímos produtos que os usuários realmente usam."
          items={[
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="8" y="2" width="12" height="24" rx="3" stroke="currentColor" strokeWidth="2" /><circle cx="14" cy="22" r="1.5" fill="currentColor" /><path d="M12 6H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>,
              title: "Experiência Nativa",
              description: "Apps com a fluidez e responsividade que o usuário espera. Sem travamentos, sem delay, sem frustração.",
            },
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 4L4 8V14C4 20 8 24.5 14 26C20 24.5 24 20 24 14V8L14 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M10 14L13 17L18 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
              title: "Segurança de Dados",
              description: "Criptografia, autenticação segura e proteção de dados seguindo as melhores práticas e a LGPD.",
            },
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="2" /><path d="M14 8V14H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
              title: "iOS e Android",
              description: "Desenvolvimento multiplataforma com uma única base de código, reduzindo custo e mantendo a qualidade em ambas as plataformas.",
            },
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M4 21L10 15L14 19L20 11L24 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M18 7H24V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
              title: "Foco em Retenção",
              description: "Funcionalidades pensadas para manter o usuário engajado: notificações, onboarding inteligente e UX otimizada.",
            },
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M6 4H22C23.1 4 24 4.9 24 6V18C24 19.1 23.1 20 22 20H16L14 24L12 20H6C4.9 20 4 19.1 4 18V6C4 4.9 4.9 4 6 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M10 10H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M10 14H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>,
              title: "Integração com APIs",
              description: "Conectamos seu app com sistemas existentes, gateways de pagamento, ERPs e qualquer serviço que seu negócio utilize.",
            },
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M12 4H6C4.9 4 4 4.9 4 6V22C4 23.1 4.9 24 6 24H22C23.1 24 24 23.1 24 22V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M20 4L24 8L14 18H10V14L20 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>,
              title: "Suporte Pós-lançamento",
              description: "Monitoramento, correções, atualizações de versão e melhorias contínuas para manter o app sempre funcionando.",
            },
          ]}
        />
        <ServiceFaq
          faqs={[
            {
              question: "Vocês desenvolvem para iOS e Android?",
              answer: "Sim. Desenvolvemos apps para ambas as plataformas. Utilizamos tecnologias multiplataforma que permitem manter uma única base de código com experiência nativa em cada sistema operacional.",
            },
            {
              question: "Como funciona o orçamento de um app?",
              answer: "O investimento varia conforme a complexidade, número de telas, integrações e funcionalidades. Após entender seu projeto, enviamos uma proposta detalhada com escopo e investimento.",
            },
            {
              question: "Vocês publicam o app nas lojas?",
              answer: "Sim. Cuidamos de todo o processo de publicação na App Store (iOS) e Google Play (Android), incluindo a criação das contas de desenvolvedor, assets gráficos e conformidade com as diretrizes de cada loja.",
            },
            {
              question: "O app pode se conectar com meu sistema atual?",
              answer: "Sim. Desenvolvemos integrações com APIs, ERPs, CRMs, gateways de pagamento e qualquer sistema que seu negócio já utilize. Se necessário, também criamos a API do zero.",
            },
            {
              question: "Vocês oferecem manutenção após a entrega?",
              answer: "Sim. Oferecemos planos de manutenção que incluem monitoramento, correções, atualizações de compatibilidade com novas versões dos sistemas operacionais e melhorias contínuas.",
            },
            {
              question: "Qual a diferença entre app nativo e multiplataforma?",
              answer: "Apps nativos são desenvolvidos separadamente para cada plataforma (Swift para iOS, Kotlin para Android). Apps multiplataforma usam uma base de código compartilhada (React Native, Flutter). Ambas as abordagens entregam excelente performance — recomendamos a mais adequada para cada projeto.",
            },
          ]}
        />
        <ServiceCta
          title={
            <>
              Pronto para levar seu negócio{" "}
              <span className="text-gradient-primary">para o mobile?</span>
            </>
          }
          subtitle="Solicite um orçamento sem compromisso. Vamos transformar sua ideia em um app que seus usuários vão adorar."
          whatsappMessage="Olá! Gostaria de desenvolver um aplicativo mobile. Pode me enviar um orçamento?"
        />
      </main>
      <Footer />
    </>
  );
}
