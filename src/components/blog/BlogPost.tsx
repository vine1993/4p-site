import type { ReactNode } from "react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Breadcrumbs from "@/components/services/Breadcrumbs";
import type { Post } from "@/content/posts";

const SITE_URL = "https://ad4pixels.com.br";
const WHATSAPP_NUMBER = "5511961848388";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPost({
  post,
  children,
}: {
  post: Post;
  children: ReactNode;
}) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: `${SITE_URL}/opengraph-image`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: { "@id": `${SITE_URL}/#business` },
    publisher: { "@id": `${SITE_URL}/#business` },
    articleSection: post.category,
    inLanguage: "pt-BR",
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Olá! Li o artigo "${post.title}" e gostaria de conversar sobre um projeto.`
  )}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Header />
      <main>
        <article>
          <header className="relative overflow-hidden bg-(--color-bg-base) pt-32 pb-12 lg:pt-44 lg:pb-16">
            <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-(--color-accent-blue)/8 blur-[160px]" />
            <div className="relative mx-auto max-w-3xl px-6 lg:px-0">
              <div className="mb-8">
                <Breadcrumbs
                  items={[
                    { label: "Início", href: "/" },
                    { label: "Blog", href: "/blog" },
                    { label: post.title },
                  ]}
                />
              </div>
              <span className="text-xs tracking-[0.15em] uppercase text-(--color-accent-orange)">
                {post.category}
              </span>
              <h1 className="mt-4 text-3xl font-bold tracking-tight lg:text-5xl lg:leading-[1.1]">
                {post.title}
              </h1>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-text-secondary/80">
                <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                <span aria-hidden="true">·</span>
                <span>{post.readingMinutes} min de leitura</span>
                <span aria-hidden="true">·</span>
                <span>Por 4 Pixels</span>
              </div>
            </div>
          </header>

          <div className="bg-(--color-bg-elevated) py-16 lg:py-20">
            <div className="mx-auto max-w-3xl px-6 lg:px-0">
              <div className="article-prose space-y-6 text-(--color-text-primary)">
                {children}
              </div>

              <aside className="mt-16 rounded-2xl border border-(--color-glass-border) bg-(--color-glass) p-8 lg:p-10">
                <p className="text-xs tracking-[0.15em] uppercase text-(--color-accent-orange) mb-3">
                  Serviço relacionado
                </p>
                <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">
                  {post.relatedServiceLabel}
                </h2>
                <p className="mt-3 text-(--color-text-secondary) leading-relaxed">
                  Quer aplicar o que leu no seu projeto? Conheça nosso serviço dedicado a esse segmento.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <a
                    href={post.relatedServiceHref}
                    className="inline-flex items-center gap-2 rounded-2xl border border-(--color-border) px-6 py-3 text-sm font-semibold text-(--color-text-primary) transition-colors hover:border-(--color-text-secondary)"
                  >
                    Conhecer serviço
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-(--color-accent-orange)/30 hover:brightness-110"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    Solicitar orçamento
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
