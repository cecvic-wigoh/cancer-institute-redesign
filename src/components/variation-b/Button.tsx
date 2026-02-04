import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "text";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-bold uppercase tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles = {
    primary:
      "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/90 focus:ring-[var(--color-primary)] border-2 border-[var(--color-primary)]",
    secondary:
      "bg-[var(--color-secondary)] text-[var(--color-primary)] hover:bg-[var(--color-secondary)]/90 focus:ring-[var(--color-secondary)] border-2 border-[var(--color-secondary)]",
    outline:
      "border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white focus:ring-[var(--color-primary)] bg-transparent",
    text:
      "text-[var(--color-primary)] hover:text-[var(--color-secondary)] underline-offset-4 hover:underline bg-transparent",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
}
