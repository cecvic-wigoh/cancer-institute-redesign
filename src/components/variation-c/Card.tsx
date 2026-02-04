import Link from "next/link";

interface CardProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  variant?: "default" | "elevated" | "glass" | "outlined";
  padding?: "sm" | "md" | "lg";
  rounded?: "md" | "lg" | "xl" | "2xl";
}

export default function Card({
  children,
  href,
  className = "",
  variant = "default",
  padding = "md",
  rounded = "xl",
}: CardProps) {
  const paddingStyles = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const roundedStyles = {
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
  };

  const variantStyles = {
    default: "bg-white shadow-sm hover:shadow-md transition-shadow duration-300",
    elevated: "bg-white shadow-lg hover:shadow-xl transition-shadow duration-300",
    glass: "bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-all duration-300",
    outlined: "bg-white border border-gray-200 hover:border-[var(--color-secondary)] transition-colors duration-300",
  };

  const combinedStyles = `${variantStyles[variant]} ${paddingStyles[padding]} ${roundedStyles[rounded]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={`block ${combinedStyles}`}>
        {children}
      </Link>
    );
  }

  return <div className={combinedStyles}>{children}</div>;
}
