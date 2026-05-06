import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { posts } from "@/content/posts";

const PATH = "/blog";
const SITE_URL = "https://ad4pixels.com.br";

export const metadata: Metadata = {
  title: "Blog · Marketing Digital, SEO e Conversão",
  description:
    "Análises, guias e estudos sobre criação de sites, marketing digital, SEO e conversão para advogados, médicos, dentistas, clínicas, restaurantes e imobiliárias.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "Blog · 4 Pixels",
    description:
      "Guias e análises sobre marketing digital, SEO e conversão para diferentes segmentos de negócio.",
    type: "website",
    locale: "pt_BR",
    url: PATH,
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog · 4 Pixels",
    description:
      "Guias e análises sobre marketing digital, SEO e conversão para diferentes segmentos.",
  },
};

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "4 Pixels Blog",
  url: `${SITE_URL}${PATH}`,
  description:
    "Conteúdo sobre criação de sites, marketing digital, SEO e conversão por segmento de mercado.",
  publisher: { "@id": `${SITE_URL}/#business` },
  blogPost: posts.map((p) => ({
    "@type": "BlogPosting",
    headline: p.title,
    url: `${SITE_URL}/blog/${p.slug}`,
    datePublished: p.publishedAt,
    description: p.excerpt,
  })),
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function BlogIndex() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <Header />
      <main>
        <section className="relative overflow-hidden bg-(--color-bg-base) pt-32 pb-16 lg:pt-44 lg:pb-20">
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-(--color-accent-blue)/8 blur-[160px]" />
          <div className="mx-auto max-w-(--layout-max-width) px-6 lg:px-20">
            <p className="text-xs tracking-[0.2em] uppercase text-(--color-accent-blue) mb-4">
              Blog
            </p>
            <h1 className="text-4xl font-bold tracking-tight lg:text-6xl">
              Análises e guias para{" "}
              <span className="text-gradient-cool">decisões digitais.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-(--color-text-secondary) leading-relaxed">
              Conteúdo prático sobre criação de sites, marketing digital, SEO e conversão — por segmento de mercado, com foco no que realmente move o ponteiro.
            </p>
          </div>
        </section>

        <section className="bg-(--color-bg-elevated) py-16 lg:py-24">
          <div className="mx-auto max-w-(--layout-max-width) px-6 lg:px-20">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="glass-card group flex flex-col gap-4 p-8 transition-all duration-300 hover:brightness-110"
                >
                  <span className="text-xs tracking-[0.15em] uppercase text-(--color-accent-orange)">
                    {post.category}
                  </span>
                  <h2 className="text-xl font-bold text-(--color-text-primary) leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-(--color-text-secondary) leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto flex items-center justify-between text-xs text-text-secondary/70">
                    <time dateTime={post.publishedAt}>
                      {formatDate(post.publishedAt)}
                    </time>
                    <span>{post.readingMinutes} min de leitura</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
