// import Link from "next/link"
// import ViewToggle from "./ViewToggle"

// const Navigation = ({forEmployers, setForEmployers}) => {
//   return (
//     <nav className="fixed top-0 left-0 w-full border-b-2 border-white bg-black  z-20">
//       <ul className="flex justify-center text-white">
//       <li className = "border-l-2 border-r-2 border-white px-6 py-4">
//           <Link href="#home" className="hover:text-gray-300">
//             Home
//           </Link>
//         </li>
//         <li className = "border-l-2 border-r-2 border-white px-6 py-4">
//           <Link href="#current-activities" className="hover:text-gray-300">
//             Current Projects
//           </Link>
//         </li>
//         <li className = "border-l-2 border-r-2 border-white px-6 py-4">
//           <Link href="#professional-experience" className="hover:text-gray-300">
//             Experience
//           </Link>
//         </li>
//         <li className = "border-l-2 border-r-2 border-white px-6 py-4">
//           <Link href="#education" className="hover:text-gray-300">
//             Education
//           </Link>
//         </li>
//         <li className = "border-l-2 border-r-2 border-white px-6 py-4">
//           <Link href="#completed-projects" className="hover:text-gray-300">
//             Projects
//           </Link>
//         </li>
//         <li className = "border-l-2 border-r-2 border-white px-6 py-4">
//           <Link href="#recommendations" className="hover:text-gray-300">
//             Recommendations
//           </Link>
//         </li>
//         <li className = "border-l-2 border-r-2 border-white px-6 py-4">
//           <Link href="#about" className="hover:text-gray-300">
//             About
//           </Link>
//         </li>
//         <li className = "border-l-2 border-r-2 border-white px-6 py-4">
//           <Link href="#contact" className="hover:text-gray-300">
//             Contact
//           </Link>
//         </li>
//         <ViewToggle forEmployers = {forEmployers} setForEmployers = {setForEmployers}/>
        
//       </ul>
//     </nav>
//   )
// }

// export default Navigation

"use client"

import { useState } from "react"
import Link from "next/link"
import ViewToggle from "./ViewToggle"
import { Menu, X } from "lucide-react"

const Navigation = ({forEmployers, setForEmployers}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full border-b-2 border-white bg-black z-20">
      <div className="flex justify-between items-center text-white px-6 py-4 md:py-0">
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className="hidden md:flex justify-center text-white">
          <Link href="/" className="hover:text-gray-300 border-r-2 border-white px-6 py-4">
            Home
          </Link>
          <a href="#current-activities" className="hover:text-gray-300 border-r-2 border-white px-6 py-4">
            Projects
          </a>
          <a href="#professional-experience" className="hover:text-gray-300 border-r-2 border-white px-6 py-4">
            Experience
          </a>
          <a href="#completed-projects" className="hover:text-gray-300 border-r-2 border-white px-6 py-4">
            Past Projects
          </a>
          <a href="#education" className="hover:text-gray-300 border-r-2 border-white px-6 py-4">
            Education
          </a>
          <a href="#recommendations" className="hover:text-gray-300 border-r-2 border-white px-6 py-4">
            Recommendations
          </a>
          <a href="#about" className="hover:text-gray-300 border-r-2 border-white px-6 py-4">
            About
          </a>
          <a href="#contact" className="hover:text-gray-300 border-r-2 border-white px-6 py-4">
            Contact
          </a>
        </div>
        <div className="ml-auto">
          <ViewToggle forEmployers={forEmployers} setForEmployers={setForEmployers} />
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col space-y-2">
            <li>
              <Link href="/" className="block py-2 hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
              Home
              </Link>
            </li>
            <li>
              <a href="#current-activities" className="block py-2 hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
              Projects
              </a>
            </li>
            <li>
              <a href="#professional-experience" className="block py-2 hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
              Experience
              </a>
            </li>
            <li>
              <a href="#completed-projects" className="block py-2 hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
              Past Projects
              </a>
            </li>
            <li>
              <a href="#education" className="block py-2 hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
              Education
              </a>
            </li>
            <li>
              <a href="#recommendations" className="block py-2 hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
              Recommendations
              </a>
            </li>
            <li>
              <a href="#about" className="block py-2 hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
              About
              </a>
            </li>
            <li>
              <a href="#contact" className="block py-2 hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
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

