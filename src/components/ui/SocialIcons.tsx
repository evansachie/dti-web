import Link from "next/link";

interface SocialIconProps {
  variant?: "dark" | "light";
  size?: number;
}

function IconWrapper({
  href,
  children,
  variant = "dark",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "dark" | "light";
}) {
  const base =
    variant === "dark"
      ? "w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#24a186] transition-colors text-white"
      : "w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-[#24a186] hover:border-[#24a186] hover:text-white transition-colors text-zinc-600";
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={base}
    >
      {children}
    </Link>
  );
}

const svgProps = (size = 18) => ({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

export function FacebookIcon({
  href = "#",
  variant = "dark",
  size = 18,
}: SocialIconProps & { href?: string }) {
  return (
    <IconWrapper href={href} variant={variant}>
      <svg {...svgProps(size)}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    </IconWrapper>
  );
}

export function TwitterIcon({
  href = "#",
  variant = "dark",
  size = 18,
}: SocialIconProps & { href?: string }) {
  return (
    <IconWrapper href={href} variant={variant}>
      <svg {...svgProps(size)}>
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    </IconWrapper>
  );
}

export function InstagramIcon({
  href = "#",
  variant = "dark",
  size = 18,
}: SocialIconProps & { href?: string }) {
  return (
    <IconWrapper href={href} variant={variant}>
      <svg {...svgProps(size)}>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    </IconWrapper>
  );
}

export function LinkedInIcon({
  href = "#",
  variant = "dark",
  size = 18,
}: SocialIconProps & { href?: string }) {
  return (
    <IconWrapper href={href} variant={variant}>
      <svg {...svgProps(size)}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    </IconWrapper>
  );
}

export function SocialIcons({
  variant = "dark",
  size = 18,
  facebook = "#",
  twitter = "#",
  instagram = "#",
  linkedin = "#",
}: SocialIconProps & {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <FacebookIcon href={facebook} variant={variant} size={size} />
      <TwitterIcon href={twitter} variant={variant} size={size} />
      <InstagramIcon href={instagram} variant={variant} size={size} />
      <LinkedInIcon href={linkedin} variant={variant} size={size} />
    </div>
  );
}
