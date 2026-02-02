import Link from "next/link";

interface CardProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  padding?: "sm" | "md" | "lg";
  hover?: boolean;
}

export default function Card({
  children,
  href,
  className = "",
  padding = "md",
  hover = true,
}: CardProps) {
  const paddingStyles = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const baseStyles = `bg-white rounded-lg border border-[var(--color-primary)]/10 ${paddingStyles[padding]}`;
  const hoverStyles = hover
    ? "transition-all duration-200 hover:shadow-lg hover:border-[var(--color-secondary)]/50"
    : "";

  const combinedStyles = `${baseStyles} ${hoverStyles} ${className}`;

  if (href) {
    return (
      <Link href={href} className={`block ${combinedStyles}`}>
        {children}
      </Link>
    );
  }

  return <div className={combinedStyles}>{children}</div>;
}
