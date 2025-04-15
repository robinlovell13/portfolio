"use client"

import { useState } from "react"
import Link from "next/link"
import ViewToggle from "./ViewToggle"
import { Menu, X, Linkedin, Github } from "lucide-react"
import MoreMenu from "./MoreMenu"

const Navigation = () => {

  return (

    <nav className="fixed top-0 left-0 w-full  bg-background z-20 py-4">
      <div className="flex justify-between items-center text-[--foreground] space-x-6 px-4 sm:px-6 ">
        <a href="#home" className="flex items-center space-x-6 ">
          
            <p className="text-3xl sm:text-3xl">Robin Lovell</p>
        </a>
        <div className="flex justify-end text-foreground text-lg items-center flex-grow space-x-6">

          <a
            href="https://www.linkedin.com/in/robinlovell-12"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground-300 hover:text-foreground"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/robinlovell13"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground-300 hover:text-foreground"
          >
            <Github size={24} />
          </a>
         
        </div>
        
      </div>


    </nav>
  )
}

export default Navigation