"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ChevronDown, ChevronUp } from "lucide-react"

const MoreMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="relative hover:text-gray-300 " ref={menuRef}>
      <button className="flex items-center space-x-1 hover:text-gray-300" onClick={() => setIsOpen(!isOpen)}>
        <span>More</span>
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-black rounded-md shadow-lg py-1 z-20">
             <a href="#about" className="hover:text-gray-300 block px-4 py-2 text-sm ">
            About
          </a>
          <a href="#contact" className="hover:text-gray-300 block px-4 py-2 text-sm ">
            Contact
          </a>
          <a href="#contact" className="hover:text-gray-300 block px-4 py-2 text-sm ">
            Contact
          </a>
        </div>
      )}
    </div>
  )
}

export default MoreMenu

