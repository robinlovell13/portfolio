"use client"

import { useState } from "react"
import Link from "next/link"
import ViewToggle from "./ViewToggle"
import { Menu, X, Linkedin, Github } from "lucide-react"
import MoreMenu from "./MoreMenu"

const Navigation = ({ forEmployers, setForEmployers }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (

    <nav className="fixed top-0 left-0 w-full border-b-2 border-white bg-black z-20 py-4">
      <div className="flex justify-between items-center text-white space-x-6 px-4 sm:px-6 ">
        <a href="https://www.robinlovell.com" className="flex items-center space-x-6 ">
          {forEmployers ?
            (<p className="text-lg sm:text-3xl">Robin Lovell</p>) :
            (<p className="text-lg sm:text-3xl">Lovell Solutions</p>)}
        </a>
        <div className="hidden md:flex justify-center text-white text-lg items-center flex-grow space-x-6">


          <a href="#projects" className="hover:bg-gray-800">
            Projects
          </a>
          <a href="#recommendations" className="hover:bg-gray-800 hidden lg:flex">
            Recommendations
          </a>
          <a href="#professional-experience" className="hover:bg-gray-800">
            Experience
          </a>

          <a href="/resume.pdf" className="hover:bg-gray-800">
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/robinlovell-12"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/robinlovell13"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <Github size={20} />
          </a>
          <ViewToggle forEmployers={forEmployers} setForEmployers={setForEmployers} />
        </div>
        
        <div className="flex items-center space-x-6 ">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="mt-6 absolute right-0 mt-4 bg-black w-full sm:w-72">
          <ul className="flex flex-col space-y-2">
          <li>
          <div className="block py-2">
          <ViewToggle forEmployers={forEmployers} setForEmployers={setForEmployers} />
        </div>
        </li>
            <li>
              <Link href="/" className="block py-2 hover:bg-gray-800" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <a href="#projects" className="block py-2 hover:bg-gray-800" onClick={() => setIsMenuOpen(false)}>
                Projects
              </a>
            </li>

            <li>
              <a href="#recommendations" className="block py-2 hover:bg-gray-800" onClick={() => setIsMenuOpen(false)}>
                Recommendations
              </a>
            </li>
            <li>
              <a href="#professional-experience" className="block py-2 hover:bg-gray-800" onClick={() => setIsMenuOpen(false)}>
                Experience
              </a>
            </li>
            <li>
              <a href="/resume.pdf" className="block py-2 hover:bg-gray-800">
                Resume
              </a>
            </li>
            <li>
              <a href="#education" className="block py-2 hover:bg-gray-800" onClick={() => setIsMenuOpen(false)}>
                Education
              </a>
            </li>

            <li>
              <a href="#about" className="block py-2 hover:bg-gray-800" onClick={() => setIsMenuOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="block py-2 hover:bg-gray-800" onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}

    </nav>
  )
}

export default Navigation