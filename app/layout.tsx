import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mitvacha - Portfolio",
  description:
    "Personal portfolio of Mitvacha - Full Stack Developer specializing in React, Next.js, and modern web technologies",
  keywords: ["portfolio", "developer", "react", "nextjs", "full-stack", "mitvacha"],
  authors: [{ name: "Mitvacha" }],
  openGraph: {
    title: "Mitvacha - Full Stack Developer",
    description: "Personal portfolio showcasing my projects and skills",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
