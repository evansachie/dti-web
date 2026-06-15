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
  href?: string;
  children: React.ReactNode;
  variant?: "dark" | "light";
}) {
  if (!href) return null;

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

export function TikTokIcon({
  href,
  variant = "dark",
  size = 18,
}: SocialIconProps & { href?: string }) {
  return (
    <IconWrapper href={href} variant={variant}>
      <svg {...svgProps(size)}>
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
      </svg>
    </IconWrapper>
  );
}

export function YoutubeIcon({
  href,
  variant = "dark",
  size = 18,
}: SocialIconProps & { href?: string }) {
  return (
    <IconWrapper href={href} variant={variant}>
      <svg {...svgProps(size)}>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
      </svg>
    </IconWrapper>
  );
}

export function SocialIcons({
  variant = "dark",
  size = 18,
  tiktok,
  youtube,
}: SocialIconProps & {
  tiktok?: string;
  youtube?: string;
}) {
  if (!tiktok && !youtube) return null;

  return (
    <div className="flex items-center gap-3">
      <TikTokIcon href={tiktok} variant={variant} size={size} />
      <YoutubeIcon href={youtube} variant={variant} size={size} />
    </div>
  );
}
