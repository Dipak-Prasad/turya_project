import type { Metadata } from "next"
import { Playfair_Display, Lora } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

/* Fonts */
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
})

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
})

/* Metadata */
export const metadata: Metadata = {
  title: "Turya Wellness – Psychology Counselling & Therapy",
  description:
    "Professional mental health counselling and therapy services from Turya Wellness. Connect with certified therapists for personalized, compassionate mental health support online.",
  icons: {
    icon: "/favicon.jpg",
    apple: "/favicon.jpg",
  },
  colorScheme: "light dark",
}

/* Viewport (correct place for theme-color) */
export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${playfair.variable}
          ${lora.variable}
          font-lora
          antialiased
        `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          storageKey="theme-preference"
        >
          {children}
        </ThemeProvider>

        <Analytics />
      </body>
    </html>
  )
}
