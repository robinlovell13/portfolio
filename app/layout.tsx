import '../styles/globals.css'
import { Chakra_Petch } from "next/font/google"
import StarryBackground from "../components/StarryBackground"
import Navigation from "../components/Navigation"
import type React from "react"
import Head from "next/head";

const pixelFont = Chakra_Petch({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
})

export const metadata = {
  title: "Robin Lovell",
  description: "Software Engineer",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-32x32.png",
  },
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

