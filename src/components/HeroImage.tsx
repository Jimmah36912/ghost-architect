"use client"

import { useState } from "react"
import Image from "next/image"
import type { ReactNode } from "react"

interface HeroImageProps {
  src: string
  alt: string
  fallback: ReactNode
}

export function HeroImage({ src, alt, fallback }: HeroImageProps) {
  const [error, setError] = useState(false)

  if (error) return <>{fallback}</>

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover object-top"
      priority
      sizes="(max-width: 768px) 80vw, 40vw"
      onError={() => setError(true)}
    />
  )
}
