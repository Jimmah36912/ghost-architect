import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Practical AI Consulting for Small Businesses | Jimmy Long",
  description:
    "Practical AI consulting for owner-led businesses that want less chaos, better follow-up, smoother operations, and a clear path for using AI without unnecessary complexity.",
  openGraph: {
    title: "Practical AI Consulting for Small Businesses | Jimmy Long",
    description:
      "Practical AI consulting for owner-led businesses that want less chaos, better follow-up, smoother operations, and a clear path for using AI without unnecessary complexity.",
    type: "website",
    locale: "en_US",
    siteName: "Jimmy Long",
  },
  twitter: {
    card: "summary_large_image",
    title: "Practical AI Consulting for Small Businesses | Jimmy Long",
    description:
      "Practical AI consulting for owner-led businesses that want less chaos, better follow-up, smoother operations, and a clear path for using AI without unnecessary complexity.",
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
