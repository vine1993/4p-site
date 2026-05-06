import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const SITE_URL = "https://ad4pixels.com.br";
const SITE_DESCRIPTION =
  "Criamos sites e aplicativos que convertem. Agência digital com sede em São Paulo, atendendo todo o Brasil e projetos remotos no exterior.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "4 Pixels — Agência Digital · Sites e Apps que Convertem",
    template: "%s | 4 Pixels",
  },
  description: SITE_DESCRIPTION,
  applicationName: "4 Pixels",
  authors: [{ name: "4 Pixels" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "4 Pixels — Agência Digital",
    url: "/",
    title: "4 Pixels — Agência Digital · Sites e Apps que Convertem",
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "4 Pixels — Agência Digital · Sites e Apps que Convertem",
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#business`,
  name: "4 Pixels — Agência Digital",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/logo.png`,
  description:
    "Agência digital especializada em criação de sites, aplicativos mobile, sistemas web e produtos digitais sob medida. Sediados em São Paulo, atendemos clientes em todo o Brasil e projetos remotos no exterior.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tatuapé",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -23.5404,
    longitude: -46.5752,
  },
  areaServed: [
    { "@type": "Country", name: "Brasil" },
    { "@type": "Place", name: "Worldwide" },
  ],
  knowsAbout: [
    "Criação de Sites",
    "Desenvolvimento de Aplicativos Mobile",
    "Sistemas Web",
    "Produtos Digitais Customizados",
    "Site para Advogados",
    "Site para Clínica Veterinária",
    "Cardápio Digital para Restaurantes",
  ],
  priceRange: "$$",
  telephone: "+55-11-96184-8388",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: "+55-11-96184-8388",
    areaServed: ["BR", "Worldwide"],
    availableLanguage: ["Portuguese"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${dmSans.variable} antialiased`}>
      <body className="min-h-screen font-(--font-dm-sans)">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
