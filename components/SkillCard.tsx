import type React from "react"
import Link from "next/link"
import type { Skill } from "./Skills"

interface SkillCardProps {
  skill: Skill
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <Link href={`/skills/${encodeURIComponent(skill.name.toLowerCase())}`}>
      <div className="bg-transparent  p-4 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors duration-200 ">
        <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
        {/* PROFICIENCY BAR */}
        {/* <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${skill.proficiency}%` }}></div>
        </div> */}
      </div>
    </Link>
  )
}

export default SkillCard

