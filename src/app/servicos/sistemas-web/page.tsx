import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ServiceHero from "@/components/services/ServiceHero";
import ProblemSolution from "@/components/services/ProblemSolution";
import ServiceProcess from "@/components/services/ServiceProcess";
import Differentials from "@/components/services/Differentials";
import ServiceFaq from "@/components/services/ServiceFaq";
import ServiceCta from "@/components/services/ServiceCta";
import DashboardMockup from "@/components/services/visuals/DashboardMockup";

export const metadata: Metadata = {
  title: "Desenvolvimento de Sistemas Web | 4 Pixels — Agência Digital",
  description:
    "Desenvolvimento de sistemas web sob medida. Dashboards, painéis administrativos, plataformas e automações para otimizar seu negócio.",
  keywords: [
    "desenvolvimento de sistemas",
    "sistema web",
    "dashboard",
    "painel administrativo",
    "plataforma web",
    "sistema sob medida",
    "automação de processos",
    "sistema para empresa",
  ],
  openGraph: {
    title: "Desenvolvimento de Sistemas Web | 4 Pixels",
    description:
      "Sistemas web sob medida para otimizar seu negócio. Solicite um orçamento sem compromisso.",
    type: "website",
    locale: "pt_BR",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Desenvolvimento de Sistemas Web",
  description:
    "Desenvolvimento de sistemas web sob medida: dashboards, painéis administrativos, plataformas e automações empresariais.",
  provider: {
    "@type": "Organization",
    name: "4 Pixels — Agência Digital",
    url: "https://fourpixels.com.br",
  },
  areaServed: { "@type": "Country", name: "Brasil" },
  serviceType: "Web Application Development",
};

export default function SistemasWeb() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <ServiceHero
          badge="Sistemas Web"
          title="Processos manuais custam caro."
          highlight="Automatize com tecnologia."
          description="Desenvolvemos sistemas web sob medida que automatizam processos, centralizam informações e dão visibilidade total ao seu negócio."
          cta="Preciso de um sistema"
          visual={<DashboardMockup />}
        />
        <ProblemSolution
          problemTitle={
            <>
              Planilhas e processos manuais{" "}
              <span className="text-(--color-text-secondary)">
                não escalam.
              </span>
            </>
          }
          solutionTitle={
            <>
              Um sistema que{" "}
              <span className="text-gradient-cool">cresce com você.</span>
            </>
          }
          problems={[
            "Informações espalhadas em planilhas, e-mails e ferramentas desconectadas",
            "Processos manuais que consomem tempo e estão sujeitos a erros humanos",
            "Falta de visibilidade sobre métricas e indicadores do negócio em tempo real",
          ]}
          solutions={[
            "Sistema centralizado com todas as informações acessíveis em um único lugar",
            "Automação de tarefas repetitivas que libera sua equipe para o que importa",
            "Dashboards e relatórios em tempo real para tomada de decisão baseada em dados",
          ]}
        />
        <ServiceProcess
          title={
            <>
              Como desenvolvemos{" "}
              <span className="text-gradient-cool">seu sistema.</span>
            </>
          }
          subtitle="Um processo colaborativo com entregas incrementais. Você usa o sistema enquanto ele evolui."
          steps={[
            {
              title: "Diagnóstico & Requisitos",
              description:
                "Mapeamos seus processos atuais, identificamos gargalos e definimos os requisitos do sistema. Priorizamos funcionalidades para o MVP.",
              details: ["Mapa de processos", "Levantamento de requisitos", "Definição do MVP"],
            },
            {
              title: "Arquitetura & Modelagem",
              description:
                "Definimos a arquitetura técnica, modelo de dados e integrações necessárias. Planejamos para escalar conforme seu negócio cresce.",
              details: ["Arquitetura de software", "Modelagem de dados", "Plano de integrações"],
            },
            {
              title: "Interface & Experiência",
              description:
                "Desenhamos interfaces claras e funcionais. Cada tela é pensada para que sua equipe aprenda a usar sem treinamento extenso.",
              details: ["UI/UX design", "Protótipos navegáveis", "Fluxos otimizados"],
            },
            {
              title: "Desenvolvimento Iterativo",
              description:
                "Construímos o sistema em ciclos curtos com entregas funcionais a cada etapa. Você testa e valida continuamente.",
              details: ["Entregas incrementais", "Testes integrados", "Code review"],
            },
            {
              title: "Deploy & Evolução",
              description:
                "Implantamos o sistema, migramos dados e treinamos sua equipe. O sistema continua evoluindo conforme novas necessidades surgem.",
              details: ["Implantação", "Migração de dados", "Suporte e evolução"],
            },
          ]}
        />
        <Differentials
          title={
            <>
              Sistemas que{" "}
              <span className="text-gradient-primary">resolvem de verdade.</span>
            </>
          }
          subtitle="Não entregamos software genérico. Cada sistema é construído para resolver os problemas específicos do seu negócio."
          items={[
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M12 8L6 16L12 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M16 8L22 16L16 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
              title: "Sob Medida",
              description: "Cada sistema é desenvolvido especificamente para seu fluxo de trabalho. Nada de adaptar seu negócio a uma ferramenta genérica.",
            },
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M4 21L10 15L14 19L20 11L24 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M18 7H24V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
              title: "Dashboards Inteligentes",
              description: "Visualize os dados que importam em tempo real. Relatórios e métricas que ajudam na tomada de decisão.",
            },
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 4L4 8V14C4 20 8 24.5 14 26C20 24.5 24 20 24 14V8L14 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M10 14L13 17L18 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
              title: "Segurança & Permissões",
              description: "Controle de acesso por perfil, logs de atividade e criptografia de dados sensíveis. Seu sistema protegido.",
            },
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="8" cy="14" r="3" stroke="currentColor" strokeWidth="2" /><circle cx="20" cy="8" r="3" stroke="currentColor" strokeWidth="2" /><circle cx="20" cy="20" r="3" stroke="currentColor" strokeWidth="2" /><path d="M11 13L17 9" stroke="currentColor" strokeWidth="2" /><path d="M11 15L17 19" stroke="currentColor" strokeWidth="2" /></svg>,
              title: "Integrações",
              description: "Conectamos com ERPs, CRMs, gateways de pagamento, APIs externas e qualquer ferramenta que seu negócio já utilize.",
            },
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="3" y="3" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2" /><rect x="15" y="3" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2" /><rect x="3" y="15" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2" /><rect x="15" y="15" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2" /></svg>,
              title: "Escalável",
              description: "Arquitetura pensada para crescer. O sistema acompanha o aumento de usuários, dados e funcionalidades sem perder performance.",
            },
            {
              icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M12 4H6C4.9 4 4 4.9 4 6V22C4 23.1 4.9 24 6 24H22C23.1 24 24 23.1 24 22V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M20 4L24 8L14 18H10V14L20 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>,
              title: "Evolução Contínua",
              description: "Seu negócio muda e o sistema acompanha. Adicionamos funcionalidades e melhorias conforme novas necessidades surgem.",
            },
          ]}
        />
        <ServiceFaq
          faqs={[
            {
              question: "Qual a diferença entre um sistema web e um site?",
              answer: "Um site apresenta informações e captura leads. Um sistema web é uma aplicação completa com funcionalidades como cadastros, relatórios, automações e controle de acesso. É uma ferramenta de trabalho para sua equipe ou seus clientes.",
            },
            {
              question: "Como funciona o orçamento de um sistema?",
              answer: "O investimento depende da complexidade, número de módulos, integrações e volume de usuários. Após mapear seus processos e requisitos, enviamos uma proposta detalhada com escopo e investimento.",
            },
            {
              question: "Posso começar com um MVP e ir evoluindo?",
              answer: "Sim, é o que recomendamos. Começar com as funcionalidades essenciais permite validar o sistema rapidamente e evoluir com base no uso real, otimizando o investimento.",
            },
            {
              question: "O sistema pode se integrar com ferramentas que já uso?",
              answer: "Sim. Desenvolvemos integrações com ERPs, CRMs, ferramentas de e-mail, gateways de pagamento, APIs de terceiros e qualquer sistema que possua interface de integração.",
            },
            {
              question: "Como funciona o controle de acesso?",
              answer: "Implementamos sistemas de permissão por perfil de usuário. Cada colaborador acessa apenas as funcionalidades e dados relevantes para sua função, com logs de atividade para auditoria.",
            },
            {
              question: "Vocês oferecem hospedagem e manutenção?",
              answer: "Sim. Oferecemos infraestrutura em nuvem com monitoramento, backups automáticos e suporte técnico. Também cuidamos de atualizações de segurança e evolução do sistema.",
            },
          ]}
        />
        <ServiceCta
          title={
            <>
              Pronto para{" "}
              <span className="text-gradient-primary">automatizar seu negócio?</span>
            </>
          }
          subtitle="Solicite um orçamento sem compromisso. Vamos mapear seus processos e propor a solução ideal."
        />
      </main>
      <Footer />
    </>
  );
}
