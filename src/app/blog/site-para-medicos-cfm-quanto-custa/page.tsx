import type { Metadata } from "next";
import BlogPost from "@/components/blog/BlogPost";
import { getPost } from "@/content/posts";

const post = getPost("site-para-medicos-cfm-quanto-custa")!;
const PATH = `/blog/${post.slug}`;

export const metadata: Metadata = {
  title: post.title,
  description: post.excerpt,
  alternates: { canonical: PATH },
  openGraph: {
    title: post.title,
    description: post.excerpt,
    type: "article",
    locale: "pt_BR",
    url: PATH,
    publishedTime: post.publishedAt,
    authors: ["4 Pixels"],
  },
  twitter: {
    card: "summary_large_image",
    title: post.title,
    description: post.excerpt,
  },
};

export default function Article() {
  return (
    <BlogPost post={post}>
      <p>
        Quase todo médico que pensa em criar (ou refazer) seu site começa com a mesma pergunta: <strong>quanto isso custa?</strong> A resposta honesta é que depende — mas não como uma evasiva. Depende de variáveis claras que dá para mapear antes de pedir o primeiro orçamento. Neste guia, abrimos os fatores que mais pesam no investimento e o que mudou nos últimos anos com a aplicação efetiva da <a href="https://portal.cfm.org.br/" target="_blank" rel="noopener noreferrer">Resolução CFM nº 1.974/2011</a>.
      </p>

      <h2>O que define o investimento</h2>
      <p>
        Sites médicos profissionais sérios em 2026 partem de algumas dezenas de milhares de reais e podem chegar a valores muito mais altos para clínicas grandes. A faixa exata depende de:
      </p>
      <ul>
        <li><strong>Número de especialidades</strong> — cada especialidade quer sua própria página otimizada para a busca local correspondente.</li>
        <li><strong>Quantidade de profissionais</strong> — currículo, fotos institucionais e CRM por médico.</li>
        <li><strong>Integrações</strong> — Doctoralia, iClinic, Conexa Saúde, Memed, Boa Consulta. Cada API tem seu custo de implementação.</li>
        <li><strong>Conteúdo e fotografia</strong> — texto profissional revisado por compliance e captação de fotos da clínica e equipe.</li>
        <li><strong>Estratégia de SEO médico</strong> — sites com SEO local sério custam mais, mas pagam o investimento em poucos meses.</li>
      </ul>
      <p>
        Sites de templates prontos custam pouco, mas geralmente <strong>nem chegam a discutir conformidade com o CFM</strong> — e essa conta vem depois, em forma de processo ético ou multa.
      </p>

      <h2>O que a Resolução CFM 1974/2011 muda no seu site</h2>
      <p>
        A resolução define o que pode e o que não pode aparecer em sites e perfis de médicos no Brasil. Os principais pontos de atenção:
      </p>
      <ul>
        <li><strong>Não pode prometer resultado</strong> — \"emagrecimento garantido\", \"cura definitiva\", \"100% de eficácia\" são tipos de afirmação vedados.</li>
        <li><strong>Não pode usar antes/depois sensacionalista</strong> — fotos comparativas com viés promocional são proibidas.</li>
        <li><strong>Não pode fazer comparações</strong> entre tratamentos ou entre profissionais.</li>
        <li><strong>É obrigatório identificar CRM</strong> e especialidades reconhecidas pelo CFM em local visível.</li>
        <li><strong>Não pode usar termos que sugiram exclusividade</strong> — \"o único especialista\", \"a melhor clínica\" são problemáticos.</li>
        <li><strong>Sorteios, brindes e promoções comerciais</strong> tipo cupom de desconto são vedados.</li>
      </ul>
      <p>
        Tudo isso restringe o tom de marketing comum em outros segmentos — mas não impede o site de gerar pacientes. Pelo contrário: <strong>credibilidade técnica vende mais que sensacionalismo</strong> para quem está procurando um médico.
      </p>

      <h2>O que realmente faz um site médico converter</h2>
      <p>
        Em vez de promessas, o site precisa transmitir algumas coisas de forma clara:
      </p>
      <h3>Currículo do profissional em destaque</h3>
      <p>
        Formação acadêmica, residência, fellowships, sociedades de especialidade, publicações. O paciente quer ver competência técnica antes de marcar consulta — e essas informações são totalmente permitidas pelo CFM.
      </p>
      <h3>Página por especialidade</h3>
      <p>
        Cada especialidade ganha sua própria URL otimizada. Isso ajuda em buscas como <em>\"cardiologista [bairro]\"</em> e dá contexto ao paciente sobre o que esperar daquela consulta específica.
      </p>
      <h3>Agendamento online sem fricção</h3>
      <p>
        Integração direta com sistema de prontuário (Doctoralia, iClinic, Conexa) ou pelo menos um botão de WhatsApp visível. Quanto menos passos entre interesse e agendamento, maior a conversão.
      </p>
      <h3>Conteúdo educativo</h3>
      <p>
        Blog com pautas informativas — \"sintomas que merecem investigação\", \"como se preparar para um exame\" — atrai pacientes via Google e reforça autoridade. É permitido pelo CFM enquanto for educativo, sem promessa de cura.
      </p>

      <h2>Erros comuns que vemos em sites médicos</h2>
      <ol>
        <li><strong>Banner gigante com promessa</strong> — \"Recupere sua qualidade de vida com nossos tratamentos!\" é exatamente o tipo de afirmação que o CFM observa.</li>
        <li><strong>Galeria de antes/depois</strong> sem contexto educativo nem consentimento expresso.</li>
        <li><strong>Falta de CRM e especialidade visíveis</strong> — alguns sites escondem essas informações no rodapé minúsculo.</li>
        <li><strong>Formulário de contato sem aviso de LGPD</strong> — dados médicos são sensíveis e precisam de tratamento específico.</li>
        <li><strong>Site não responsivo</strong> — mais de 70% dos pacientes pesquisam médicos pelo celular.</li>
      </ol>

      <h2>Como escolher quem vai construir</h2>
      <p>
        Procure agência ou desenvolvedor que:
      </p>
      <ul>
        <li>Já trabalhou com clínicas e conhece o CFM (não só desenvolve, mas entende o contexto).</li>
        <li>Trabalha com revisão de conteúdo por compliance — não só design e código.</li>
        <li>Faz integração com os sistemas de prontuário do mercado, não só formulário simples.</li>
        <li>Implementa LGPD para dados sensíveis, não só cookie banner genérico.</li>
        <li>Oferece manutenção contínua — site médico é um produto vivo.</li>
      </ul>

      <h2>Resumo prático</h2>
      <p>
        Site médico bem feito é um investimento de médio prazo que paga em pacientes recorrentes vindos do Google. O que mais pesa no orçamento são integrações e número de especialidades. O que mais pesa no resultado é <strong>respeitar o CFM enquanto comunica autoridade técnica</strong> — uma combinação que site genérico de template não entrega.
      </p>
      <p>
        Se quer aprofundar em como estruturamos sites médicos em conformidade com o CFM, conheça nosso <a href="/servicos/site-para-medicos">serviço dedicado a clínicas médicas</a>.
      </p>
    </BlogPost>
  );
}
