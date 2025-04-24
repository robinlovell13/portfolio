"use client"

import { useState } from "react"
import Link from "next/link"
import ViewToggle from "./ViewToggle"
import { Menu, X, Linkedin, Github } from "lucide-react"

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (

    <nav className="fixed top-0 left-0 w-full bg-background z-20 py-4 flex grid grid-cols-3  px-4 sm:px-6 text-[--foreground]">
     
      <a href="https://www.robinlovell.com" className="flex justify-start text-3xl">
        Robin Lovell
      </a>
    
  

      <ul className="flex flex-1 justify-center space-x-6 ">
        <li>
          <a href="tel:+14138131087" className="hover:text-secondary flex items-center space-x-2">
            <svg className="w-4 h-4 opacity-40 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" height="16" width="16"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            <span>+1 413 813 1087</span>
          </a>
        </li>
        <li>

          <a href="mailto:mail@robinlovell.com" className="hover:text-secondary flex items-center space-x-2">
            <svg className="w-4 h-4 mt-0.5 opacity-40 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" height="16" width="16"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            <span>mail@robinlovell.com</span>
          </a>
        </li>

        {/* <li>
          <a href="/resume.pdf" className="hover:text-secondary">
            Resume
          </a>
        </li> */}

        <li>
          <a
            href="https://www.linkedin.com/in/robinlovell-12"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-secondary"
          >
            <Linkedin size={20} />
          </a>
        </li>
      </ul>

    <div>

    </div>


    </nav>
  )
}

export default Navigation