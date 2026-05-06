import type { Metadata } from "next";
import BlogPost from "@/components/blog/BlogPost";
import { getPost } from "@/content/posts";

const post = getPost("site-imobiliaria-integracao-imobzi-jetimob-vista")!;
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
        Toda imobiliária que decide ter site próprio em 2026 enfrenta a mesma decisão técnica: <strong>como conectar o site ao CRM imobiliário</strong> sem virar trabalho dobrado para a equipe. A escolha do CRM e o jeito que o site se integra a ele determinam praticamente todo o operacional pós-lançamento — atualização de imóveis, captação de leads, venda concluída.
      </p>
      <p>
        Aqui comparamos os três CRMs mais usados no mercado brasileiro — <strong>Imobzi, Jetimob e Vista</strong> — sob o ângulo de quem vai construir o site da imobiliária e precisa conviver com a integração no longo prazo.
      </p>

      <h2>Por que o site precisa falar com o CRM</h2>
      <p>
        Sem integração, o site da imobiliária é uma vitrine estática que precisa ser atualizada manualmente. Cada imóvel novo cadastrado no CRM teria de ser republicado no site. Cada venda concluída teria de ser removida em dois lugares. Cada alteração de preço, idem.
      </p>
      <p>
        Com integração, o CRM continua sendo a fonte única da verdade — e o site reflete em tempo (quase) real. Cadastrou no CRM, aparece no site. Vendeu, sai. Mudou foto, atualiza. <strong>Operacional zero pra equipe</strong>, e o cliente vê informação sempre correta.
      </p>

      <h2>Os 3 CRMs mais comuns: visão prática</h2>
      <h3>Imobzi</h3>
      <p>
        Plataforma completa, popular entre imobiliárias de médio e grande porte. API documentada, webhooks para eventos (imóvel criado, atualizado, vendido), sincronização com portais (Zap, VivaReal). Para integração com site próprio, oferece endpoints REST razoavelmente bem feitos.
      </p>
      <p>
        <strong>Pontos fortes:</strong> ecossistema completo, suporte ativo, documentação técnica, gestão de leads sólida.
      </p>
      <p>
        <strong>Pontos de atenção:</strong> é uma das opções mais caras. Para imobiliárias menores, pode ser overkill.
      </p>
      <h3>Jetimob</h3>
      <p>
        Voltado ao público brasileiro com foco em automação de portais e site. API REST, webhook para mudanças, documentação razoável. Permite gerar site nativamente, mas a customização visual é limitada — por isso, muita imobiliária usa Jetimob como CRM e contrata site próprio integrado via API.
      </p>
      <p>
        <strong>Pontos fortes:</strong> preço competitivo, integração com portais ágil, popular no mercado.
      </p>
      <p>
        <strong>Pontos de atenção:</strong> API menos rica que Imobzi para casos avançados (busca semântica, filtros customizados); às vezes precisa de ajustes pra performance em bases grandes.
      </p>
      <h3>Vista CRM</h3>
      <p>
        Tradicional no mercado, base instalada grande. API funcional para integrações. Tem o módulo Vista Web, que é o site nativo deles, com customização limitada — por isso muitas imobiliárias usam Vista como CRM e fazem site externo integrado.
      </p>
      <p>
        <strong>Pontos fortes:</strong> robustez, base de imobiliárias parceiras, processos consolidados.
      </p>
      <p>
        <strong>Pontos de atenção:</strong> interface menos moderna, ritmo de evolução da API mais lento que concorrentes.
      </p>

      <h2>O que considerar na integração</h2>
      <h3>Sincronização: pull vs push</h3>
      <ul>
        <li><strong>Pull</strong> — o site consulta a API do CRM em intervalos definidos. Mais simples de implementar, mas há atraso entre cadastro no CRM e atualização no site.</li>
        <li><strong>Push (webhook)</strong> — o CRM avisa o site sempre que algo muda. Reflete em tempo real, mas exige infraestrutura para receber webhooks.</li>
      </ul>
      <p>
        Para sites de até alguns milhares de imóveis, pull com cache esperto resolve. Para bases grandes ou que mudam muito (alta rotatividade), push compensa o esforço.
      </p>
      <h3>Geração estática vs dinâmica</h3>
      <p>
        Sites com Next.js (como os que construímos) podem usar <strong>ISR (Incremental Static Regeneration)</strong> — cada página de imóvel é estática (rápida pro Google e pro usuário), mas regenera quando o webhook do CRM avisa de mudança. Combina o melhor dos dois mundos: SEO de site estático, dados sempre atualizados.
      </p>
      <h3>SEO por bairro/cidade</h3>
      <p>
        Páginas dedicadas por bairro são essenciais. Buscas como <em>\"apartamento Tatuapé\"</em>, <em>\"casa para alugar Mooca\"</em> têm intenção altíssima e volume significativo. O site precisa gerar essas páginas dinamicamente a partir das tags de localização do CRM.
      </p>
      <h3>Captação de leads de volta para o CRM</h3>
      <p>
        Quando o visitante preenche o formulário de interesse no site, o lead precisa cair direto no CRM (com o imóvel referenciado). Isso fecha o ciclo: o site não é só vitrine, é canal de captação que alimenta o operacional já existente.
      </p>

      <h2>Custos de integração</h2>
      <p>
        Integrações com Imobzi, Jetimob e Vista geralmente levam de 1 a 3 semanas de desenvolvimento, dependendo do escopo. CRMs com API menos documentada ou customizações específicas podem levar mais. Vale conferir antes:
      </p>
      <ul>
        <li>O CRM tem documentação pública da API?</li>
        <li>Tem ambiente de sandbox para testar sem afetar dados reais?</li>
        <li>Suporta webhooks ou só pull?</li>
        <li>Quantos imóveis a base tem hoje? (afeta performance e arquitetura)</li>
        <li>Há campos customizados específicos da imobiliária que precisam aparecer no site?</li>
      </ul>

      <h2>O que evitar</h2>
      <ol>
        <li><strong>Site sem integração</strong> — vira trabalho dobrado, dados ficam dessincronizados, ninguém atualiza, e em 6 meses está abandonado.</li>
        <li><strong>Integração só pelo módulo nativo do CRM</strong> — limita identidade visual e SEO. Você fica preso ao template do fornecedor.</li>
        <li><strong>Depender só de portais</strong> (Zap, VivaReal) — você paga mensalidade, paga por destaque, e o lead chega para vários concorrentes ao mesmo tempo. O site próprio resgata controle.</li>
        <li><strong>Páginas de imóvel sem SEO local</strong> — esquecer URL semântica (<code>/imovel/apartamento-tatuape-3-dorms-ABC123</code>) é deixar tráfego na mesa.</li>
      </ol>

      <h2>Resumo</h2>
      <p>
        A escolha do CRM importa, mas o que faz a diferença é <strong>como o site se conecta a ele</strong>. Integração via API com sincronização via webhook, geração estática para SEO, páginas por bairro, captação de leads de volta para o CRM — esse é o stack moderno do site imobiliário em 2026. Independente de você usar Imobzi, Jetimob, Vista ou outro CRM, o site precisa estar arquitetado para se beneficiar de todos esses recursos.
      </p>
      <p>
        Quer ver como construímos sites assim na prática? Conheça nosso <a href="/servicos/site-para-imobiliarias">serviço dedicado a imobiliárias</a>.
      </p>
    </BlogPost>
  );
}
