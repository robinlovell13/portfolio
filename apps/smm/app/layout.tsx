import '../styles/globals.css'
import { Chakra_Petch } from "next/font/google"
import StarryBackground from "../components/StarryBackground"
import Navigation from "../components/Navigation"
import type React from "react"
import Head from "next/head";

import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'], 
  variable: '--font-montserrat',
})

export const metadata = {
  title: "Robin Lovell",
  description: "Social Media Management",
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
      
      <body className={`${montserrat.variable} font-montserrat bg-background text-foreground`}>
        
       
        <div className="relative z-10 ">{children}</div>
      </body>
    </html>
  )
}

