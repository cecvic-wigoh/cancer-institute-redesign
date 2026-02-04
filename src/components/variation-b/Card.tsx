import Link from "next/link";

interface CardProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  variant?: "default" | "featured" | "minimal" | "bordered";
  padding?: "sm" | "md" | "lg";
}

export default function Card({
  children,
  href,
  className = "",
  variant = "default",
  padding = "md",
}: CardProps) {
  const paddingStyles = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const variantStyles = {
    default: "bg-white shadow-sm hover:shadow-md transition-shadow duration-300",
    featured: "bg-white shadow-lg border-l-4 border-[var(--color-secondary)]",
    minimal: "bg-transparent border-b border-[var(--color-primary)]/10 hover:border-[var(--color-secondary)] transition-colors",
    bordered: "bg-white border-2 border-[var(--color-primary)]/10 hover:border-[var(--color-primary)] transition-colors",
  };

  const combinedStyles = `${variantStyles[variant]} ${paddingStyles[padding]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={`block ${combinedStyles}`}>
        {children}
      </Link>
    );
  }

  return <article className={combinedStyles}>{children}</article>;
}
