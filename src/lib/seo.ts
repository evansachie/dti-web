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

export const siteConfig: SiteConfig = {
  name: "TFDI",
  title: "TFDI | Theatre for Development Initiative",
  description:
    "Empowering communities in Ghana through participatory theatre, creative arts, and social advocacy for sustainable development.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://tfdi-ghana.org",
  locale: "en_GH",
  twitterHandle: "@TFDI_Ghana",
};

function absoluteUrl(path?: string) {
  if (!path) return siteConfig.url;
  return new URL(path, siteConfig.url).toString();
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
