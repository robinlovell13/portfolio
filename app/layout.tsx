import "./globals.css"
import { Chakra_Petch } from "next/font/google"
import StarryBackground from "../components/StarryBackground"
import Navigation from "../components/Navigation"
import type React from "react"

const pixelFont = Chakra_Petch({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
})

export const metadata = {
  title: "Lovell Creations",
  description: "Software Engineering | LLM Implementation | Web Solutions",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${pixelFont.variable} font-pixel bg-black text-starWhite`}>
        <StarryBackground />
       
        <div className="relative z-10 pt-16">{children}</div>
      </body>
    </html>
  )
}

