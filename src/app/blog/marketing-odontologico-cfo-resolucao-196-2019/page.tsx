import type { Metadata } from "next";
import BlogPost from "@/components/blog/BlogPost";
import { getPost } from "@/content/posts";

const post = getPost("marketing-odontologico-cfo-resolucao-196-2019")!;
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
        Marketing odontológico no Brasil deixou de ser tema só de redes sociais. Com a aplicação ampla da <strong>Resolução CFO 196/2019</strong> e do Código de Ética Odontológica, todo conteúdo público — site, blog, perfis em mídias sociais e campanhas pagas — passou a ser observado com lupa pelos Conselhos Regionais. Para o profissional, isso muda como o site precisa ser estruturado.
      </p>
      <p>
        Este artigo destrincha o que pode, o que não pode, e como organizar um site odontológico que captura paciente sem cair em infração. Não substitui consultoria jurídica — mas dá um mapa para quem está planejando o site da clínica.
      </p>

      <h2>O que a Resolução CFO 196/2019 endurece</h2>
      <p>
        A 196/2019 atualizou e detalhou a regulamentação anterior. Os pontos mais sensíveis:
      </p>
      <ul>
        <li><strong>Promessas de resultado</strong> — \"clareamento garantido\", \"sorriso perfeito em 7 dias\" são vedadas.</li>
        <li><strong>Antes e depois sensacionalista</strong> — proibido em redes sociais e site quando tiver caráter promocional, comparativo ou sem consentimento expresso do paciente.</li>
        <li><strong>Sorteios, ofertas relâmpago e cupons</strong> — vedados quando relacionados a tratamentos.</li>
        <li><strong>Mercantilização da profissão</strong> — \"tratamento mais barato da região\" e similares.</li>
        <li><strong>Auto-elogio e autopromoção</strong> — \"o melhor dentista\", \"profissional de excelência reconhecida\" — proibidos.</li>
        <li><strong>Comparações</strong> entre profissionais ou técnicas com viés competitivo.</li>
        <li><strong>Identificação obrigatória</strong> — CRO, especialidade reconhecida pelo CFO e responsável técnico precisam aparecer em local visível.</li>
      </ul>

      <h2>Antes/depois: o tema mais delicado</h2>
      <p>
        Muito profissional pergunta sobre publicar antes/depois de tratamentos como clareamento, ortodontia ou implantes. A 196/2019 <strong>permite uso educativo</strong>, com consentimento expresso por escrito do paciente e sem caráter promocional ou garantia de resultado.
      </p>
      <p>
        Na prática, isso significa que galerias de transformação tipo \"smile makeover\" do jeito que aparecem no Instagram são problemáticas. Já um conteúdo educativo discutindo um caso clínico com o devido consentimento e sem comparação direta — esse é defensável.
      </p>
      <p>
        Recomendação: se for usar imagens clínicas no site, faça com cuidado, contexto educativo e termo de consentimento informado guardado.
      </p>

      <h2>O que pode (e funciona) no site odontológico</h2>
      <h3>Apresentação técnica do consultório</h3>
      <p>
        Equipamentos, esterilização, biossegurança, tecnologia. Mostrar a estrutura é totalmente permitido e <strong>aumenta a percepção de qualidade</strong> — o que vale mais que promessa, do ponto de vista de conversão.
      </p>
      <h3>Currículo do profissional</h3>
      <p>
        Graduação, especializações, mestrado, doutorado, sociedades — apresentados com sobriedade. CRO sempre visível. Idiomas, atendimento a estrangeiros, convênios também são informações neutras e úteis.
      </p>
      <h3>Páginas por especialidade</h3>
      <p>
        Em vez de uma página única \"serviços\", crie uma página por especialidade reconhecida pelo CFO: ortodontia, implantodontia, prótese, periodontia, odontopediatria, endodontia. Cada uma otimizada para a busca local correspondente.
      </p>
      <h3>Conteúdo educativo</h3>
      <p>
        Blog com pautas como \"o que esperar do tratamento de canal\", \"cuidados após extração de siso\", \"diferença entre lente de contato dental e faceta\". Linguagem informativa, sem promessa, sem auto-elogio. <strong>É a maior fonte de tráfego orgânico</strong> de uma clínica odontológica.
      </p>
      <h3>Agendamento online</h3>
      <p>
        Integração com Clinicorp, Easy Dental, Dental Office ou simplesmente botão de WhatsApp visível. Sem promessa, sem urgência manipulativa — apenas facilidade.
      </p>

      <h2>Marketing pago: cuidado redobrado</h2>
      <p>
        Anúncios no Google, Facebook e Instagram são considerados publicidade. Tudo que vale para o site, vale (mais fortemente) para os anúncios. Erros comuns:
      </p>
      <ul>
        <li>Headline tipo <em>\"Sorriso novo em 30 dias!\"</em> — promessa direta.</li>
        <li>Imagem de antes/depois sem consentimento e fora de contexto educativo.</li>
        <li>Oferta com prazo: <em>\"só hoje, R$ 99\"</em>.</li>
        <li>Falta de CRO no anúncio, quando a peça mostra rosto/nome do dentista.</li>
      </ul>

      <h2>Como decidir o que entra no site</h2>
      <p>
        Um filtro mental simples para cada elemento:
      </p>
      <ol>
        <li>Esse texto promete resultado? <strong>Tira.</strong></li>
        <li>Essa imagem mostra paciente sem consentimento? <strong>Tira.</strong></li>
        <li>Esse banner usa urgência manipulativa ou desconto-relâmpago? <strong>Tira.</strong></li>
        <li>Esse trecho compara você com outros profissionais? <strong>Tira.</strong></li>
        <li>Esse conteúdo é educativo e respeitoso com a profissão? <strong>Mantém.</strong></li>
      </ol>

      <h2>O que muda na hora de contratar</h2>
      <p>
        Procure agência que entende isso na prática:
      </p>
      <ul>
        <li>Faz revisão ética do conteúdo, não só design.</li>
        <li>Sabe estruturar páginas por especialidade reconhecida pelo CFO.</li>
        <li>Implementa LGPD para dados clínicos.</li>
        <li>Já trabalhou com clínicas e tem casos para mostrar.</li>
        <li>Oferece manutenção — porque a regulamentação evolui e o site precisa acompanhar.</li>
      </ul>

      <h2>Resumo</h2>
      <p>
        A Resolução CFO 196/2019 torna o marketing odontológico mais difícil <strong>quando o ponto de partida era promessa e sensacionalismo</strong>. Para quem aposta em credibilidade técnica, conteúdo educativo e estrutura sólida de especialidades, o cenário é favorável: a maioria dos concorrentes ainda usa táticas de marketing genérico que esbarram nas regras, abrindo espaço para quem comunica certo.
      </p>
      <p>
        Quer ver como aplicamos tudo isso na prática? Conheça nosso <a href="/servicos/site-para-dentistas">serviço dedicado a clínicas odontológicas</a>.
      </p>
    </BlogPost>
  );
}
