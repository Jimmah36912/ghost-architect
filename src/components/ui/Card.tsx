import type { CardVariant } from "@/data/theme"

interface CardProps {
  children: React.ReactNode
  variant?: CardVariant
  className?: string
  as?: "div" | "article" | "li"
}

const variantClass: Record<CardVariant, string> = {
  default:  "card-default",
  outlined: "card-outlined",
  elevated: "card-elevated",
  tinted:   "card-tinted",
  dark:     "card-dark",
}

export function Card({ children, variant = "default", className = "", as: Tag = "div" }: CardProps) {
  return (
    <Tag className={`${variantClass[variant]} ${className}`}>
      {children}
    </Tag>
  )
}
