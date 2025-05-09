import '../styles/globals.css'

import StarryBackground from "../components/StarryBackground"
import Navigation from "../components/Navigation"
import type React from "react"
import Head from "next/head";

import { M_PLUS_Rounded_1c } from 'next/font/google'

const mPlus = M_PLUS_Rounded_1c({
  subsets: ['latin'],
  weight: ['400', '700'], // or whatever weights you need
  variable: '--font-mplus'
})


export const metadata = {
  title: "Robin Lovell",
  description: "Software and Social Media Services",
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
      
      <body className={`${mPlus.variable} font-helvetica bg-background text-foreground`}>
        
       
        <div className="relative z-10 pt-16">{children}</div>
      </body>
    </html>
  )
}

