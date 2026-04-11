import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Revenue Recovery and Client Flow Consulting | Jimmy Long",
  description:
    "Jimmy Long helps small businesses recover revenue by fixing client flow, follow-up, and operational infrastructure — without adding complexity.",
  openGraph: {
    title: "Revenue Recovery and Client Flow Consulting | Jimmy Long",
    description:
      "Jimmy Long helps small businesses recover revenue by fixing client flow, follow-up, and operational infrastructure — without adding complexity.",
    type: "website",
    locale: "en_US",
    siteName: "Jimmy Long",
  },
  twitter: {
    card: "summary_large_image",
    title: "Revenue Recovery and Client Flow Consulting | Jimmy Long",
    description:
      "Jimmy Long helps small businesses recover revenue by fixing client flow, follow-up, and operational infrastructure — without adding complexity.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
