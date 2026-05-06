export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  updatedAt?: string;
  readingMinutes: number;
  category: string;
  relatedServiceHref: string;
  relatedServiceLabel: string;
};

export const posts: Post[] = [
  {
    slug: "site-para-medicos-cfm-quanto-custa",
    title: "Site para médicos: quanto custa e o que muda com o CFM em 2026",
    excerpt:
      "O que esperar do investimento em um site médico, quais funcionalidades realmente importam para captar pacientes e como respeitar a Resolução CFM 1974/2011 sem abrir mão de conversão.",
    publishedAt: "2026-05-06",
    readingMinutes: 9,
    category: "Marketing Médico",
    relatedServiceHref: "/servicos/site-para-medicos",
    relatedServiceLabel: "Site para Médicos e Clínicas",
  },
  {
    slug: "marketing-odontologico-cfo-resolucao-196-2019",
    title:
      "Marketing odontológico: o que muda com a Resolução CFO 196/2019 no seu site",
    excerpt:
      "Antes/depois, promessas, propaganda em redes sociais — o que pode e o que não pode no marketing odontológico digital, e como estruturar um site que respeita o CFO.",
    publishedAt: "2026-05-06",
    readingMinutes: 10,
    category: "Marketing Odontológico",
    relatedServiceHref: "/servicos/site-para-dentistas",
    relatedServiceLabel: "Site para Dentistas e Clínicas Odontológicas",
  },
  {
    slug: "site-imobiliaria-integracao-imobzi-jetimob-vista",
    title:
      "Imobzi, Jetimob ou Vista? Como o site da sua imobiliária deve se integrar ao CRM",
    excerpt:
      "Comparativo prático entre os principais CRMs imobiliários e o que considerar na hora de integrar o site com listings sincronizados, captação de leads e SEO por bairro.",
    publishedAt: "2026-05-06",
    readingMinutes: 11,
    category: "Mercado Imobiliário",
    relatedServiceHref: "/servicos/site-para-imobiliarias",
    relatedServiceLabel: "Site para Imobiliárias",
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
