import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Lora } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })
const lora = Lora({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Turya Wellness - Psychology Counselling & Therapy",
  description:
    "Professional mental health counselling and therapy services from Turya Wellness. Connect with certified therapists for personalized, compassionate mental health support online.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.jpg",
    apple: "/favicon.jpg",
  },
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", content: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", content: "#0a0a0a" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#FF5722" />
      </head>
      <body className={`${lora.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem storageKey="theme-preference">
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
