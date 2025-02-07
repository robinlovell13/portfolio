import "./globals.css"
import { Press_Start_2P } from "next/font/google"
import StarryBackground from "../components/StarryBackground"
import type React from "react" // Import React

const pixelFont = Press_Start_2P({
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
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  )
}

