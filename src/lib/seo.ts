import type { Metadata } from "next";

type SiteConfig = {
  name: string;
  title: string;
  description: string;
  url: string;
  locale: string;
  twitterHandle: string;
};

type PageMetadataInput = {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
};

const productionSiteUrl = "https://www.theatrefordevelopmentinitiative.com";

export const siteConfig: SiteConfig = {
  name: "DTI",
  title: "DTI | Developmental Theatre Initiative",
  description:
    "Empowering communities, inspiring change, and driving development through theatre, creative arts, dialogue, advocacy, and community participation.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? productionSiteUrl).replace(
    /\/$/,
    ""
  ),
  locale: "en_GH",
  twitterHandle: "@DTI_Ghana",
};

export function absoluteUrl(path?: string) {
  if (!path) return siteConfig.url;
  return new URL(path, siteConfig.url).toString();
}

export function stringifyJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "Developmental Theatre Initiative",
    alternateName: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl("/logo.png"),
    email: "developmentaltheatreinitiative@gmail.com",
    telephone: "+233247134085",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Accra",
      addressCountry: "GH",
    },
  };
}

export function getSeoDefaults(): Metadata {
  const defaultImage = absoluteUrl("/opengraph-image");

  return {
    metadataBase: new URL(siteConfig.url),
    applicationName: siteConfig.name,
    title: {
      default: siteConfig.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      url: siteConfig.url,
      title: siteConfig.title,
      description: siteConfig.description,
      images: [
        {
          url: defaultImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} Open Graph image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      creator: siteConfig.twitterHandle,
      title: siteConfig.title,
      description: siteConfig.description,
      images: [defaultImage],
    },
    icons: {
      icon: [{ url: "/logo.png", type: "image/png" }],
      apple: [{ url: "/logo.png", type: "image/png" }],
    },
  };
}

export function createPageMetadata(input: PageMetadataInput): Metadata {
  const title = input.title;
  const description = input.description ?? siteConfig.description;
  const canonical = input.path ?? "/";
  const image = absoluteUrl(input.image ?? "/opengraph-image");

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(canonical),
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${title} Open Graph image`,
        },
      ],
    },
    twitter: {
      title,
      description,
      images: [image],
    },
    robots: input.noIndex ? { index: false, follow: false } : undefined,
  };
}
