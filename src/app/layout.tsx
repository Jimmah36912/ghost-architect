import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

const playfair = Playfair_Display({
  variable: "--font-playfair",
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
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        {children}
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="69db2896d0d6ea544070a68a"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
