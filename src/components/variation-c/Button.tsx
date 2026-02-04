import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  icon?: React.ReactNode;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  type = "button",
  icon,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary)]/90 text-white hover:shadow-lg hover:shadow-[var(--color-primary)]/25 focus:ring-[var(--color-primary)]",
    secondary:
      "bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-secondary)]/90 text-[var(--color-primary)] hover:shadow-lg hover:shadow-[var(--color-secondary)]/25 focus:ring-[var(--color-secondary)]",
    outline:
      "border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white focus:ring-[var(--color-primary)]",
    ghost:
      "text-[var(--color-primary)] hover:bg-[var(--color-primary)]/5 focus:ring-[var(--color-primary)]",
  };

  const sizeStyles = {
    sm: "px-5 py-2 text-sm gap-2",
    md: "px-7 py-3 text-base gap-2",
    lg: "px-9 py-4 text-lg gap-3",
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const content = (
    <>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles}>
      {content}
    </button>
  );
}
