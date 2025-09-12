import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Elevaze - AI Automation Agency",
  description:
    "Transform your business with AI receptionists and agents that handle calls, qualify leads, and book appointments automatically.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.jpg",
    shortcut: "/favicon.jpg",
    apple: "/favicon.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} antialiased`}>
      <head>
        <link rel="icon" href="/favicon.jpg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.jpg" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  )
}
