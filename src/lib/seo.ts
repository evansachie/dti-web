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
  absoluteTitle?: boolean;
};

const productionSiteUrl = "https://www.developmentaltheatreinitiative.com";
const socialImagePath = "/social/dti-open-graph.jpg";
const socialImageAlt =
  "Developmental Theatre Initiative — using theatre for social change in Ghana";

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

const socialProfiles = [
  "https://www.facebook.com/people/Developmemtaltheatreinitiative/61590315404599/",
  "https://www.linkedin.com/company/developmental-theatre-initiative/",
  "https://www.instagram.com/developmentaltheatreinitiative/",
  "https://www.tiktok.com/@developmentalthea",
];

const publicRobots: Metadata["robots"] = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

function getImageType(url: string) {
  const pathname = new URL(url, siteConfig.url).pathname.toLowerCase();
  if (pathname.endsWith(".png")) return "image/png";
  if (pathname.endsWith(".webp")) return "image/webp";
  if (pathname.endsWith(".jpg") || pathname.endsWith(".jpeg")) {
    return "image/jpeg";
  }
  return undefined;
}

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
    "@graph": [
      {
        "@type": "NGO",
        "@id": `${siteConfig.url}/#organization`,
        name: "Developmental Theatre Initiative",
        alternateName: siteConfig.name,
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl("/logo.png"),
          width: 410,
          height: 404,
        },
        image: absoluteUrl(socialImagePath),
        description: siteConfig.description,
        email: "info@developmentaltheatreinitiative.com",
        telephone: "+233247134085",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Accra",
          addressCountry: "GH",
        },
        areaServed: {
          "@type": "Country",
          name: "Ghana",
        },
        sameAs: socialProfiles,
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: "Developmental Theatre Initiative",
        alternateName: siteConfig.name,
        description: siteConfig.description,
        inLanguage: "en-GH",
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
      },
    ],
  };
}

export function getSeoDefaults(): Metadata {
  const defaultImage = absoluteUrl(socialImagePath);

  return {
    metadataBase: new URL(siteConfig.url),
    applicationName: siteConfig.name,
    title: {
      default: siteConfig.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    category: "Nonprofit organisation",
    alternates: {
      canonical: "/",
    },
    robots: publicRobots,
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
          type: "image/jpeg",
          alt: socialImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
      title: siteConfig.title,
      description: siteConfig.description,
      images: [{ url: defaultImage, alt: socialImageAlt }],
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
  const usesDefaultImage = !input.image;
  const image = absoluteUrl(input.image ?? socialImagePath);
  const imageAlt = usesDefaultImage
    ? socialImageAlt
    : `${title} — Developmental Theatre Initiative`;

  return {
    title: input.absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      title,
      description,
      url: absoluteUrl(canonical),
      images: [
        {
          url: image,
          width: usesDefaultImage ? 1200 : undefined,
          height: usesDefaultImage ? 630 : undefined,
          type: getImageType(image),
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
      title,
      description,
      images: [{ url: image, alt: imageAlt }],
    },
    robots: input.noIndex ? { index: false, follow: false } : publicRobots,
  };
}
