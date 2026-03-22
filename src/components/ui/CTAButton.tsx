import type { ButtonVariant } from "@/data/theme"

interface CTAButtonProps {
  label: string
  href: string
  variant?: ButtonVariant
  size?: "sm" | "md" | "lg"
  external?: boolean
  className?: string
}

const variantClass: Record<ButtonVariant, string> = {
  primary:       "btn-primary",
  primaryDark:   "btn-primary-dark",
  secondary:     "btn-secondary",
  secondaryDark: "btn-secondary-dark",
  ghost:         "btn-ghost",
}

const sizeClass = {
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg",
}

export function CTAButton({
  label,
  href,
  variant = "primary",
  size = "lg",
  external,
  className = "",
}: CTAButtonProps) {
  const isExternal = external ?? href.startsWith("http")
  return (
    <a
      href={href}
      className={`btn ${variantClass[variant]} ${sizeClass[size]} ${className}`}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {label}
    </a>
  )
}
