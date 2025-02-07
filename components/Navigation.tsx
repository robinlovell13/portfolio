import Link from "next/link"

const Navigation = ({forEmployers, setForEmployers}) => {
  return (
    <nav className="fixed top-0 left-0 w-full border-b-2 border-white bg-black  z-20">
      <ul className="flex justify-center text-white">
      <li className = "border-l-2 border-r-2 border-white px-6 py-4">
          <Link href="#home" className="hover:text-gray-300">
            Home
          </Link>
        </li>
        <li className = "border-l-2 border-r-2 border-white px-6 py-4"  onClick={() => setForEmployers((prev: boolean) => !prev)}>
          {forEmployers ?<p className="hover:text-gray-300">For Prospective Clients</p> : <p className="hover:text-gray-300">For Prospective Employers</p>}
        </li>
        <li className = "border-l-2 border-r-2 border-white px-6 py-4">
          <Link href="#current-activities" className="hover:text-gray-300">
            What Am I Working On?
          </Link>
        </li>
        <li className = "border-l-2 border-r-2 border-white px-6 py-4">
          <Link href="#professional-experience" className="hover:text-gray-300">
            Experience
          </Link>
        </li>
        <li className = "border-l-2 border-r-2 border-white px-6 py-4">
          <Link href="#education" className="hover:text-gray-300">
            Education
          </Link>
        </li>
        <li className = "border-l-2 border-r-2 border-white px-6 py-4">
          <Link href="#completed-projects" className="hover:text-gray-300">
            Projects
          </Link>
        </li>
        <li className = "border-l-2 border-r-2 border-white px-6 py-4">
          <Link href="#recommendations" className="hover:text-gray-300">
            Recommendations
          </Link>
        </li>
        <li className = "border-l-2 border-r-2 border-white px-6 py-4">
          <Link href="#about" className="hover:text-gray-300">
            About
          </Link>
        </li>
        <li className = "border-l-2 border-r-2 border-white px-6 py-4">
          <Link href="#contact" className="hover:text-gray-300">
            Contact
          </Link>
        </li>
        
        
      </ul>
    </nav>
  )
}

export default Navigation

