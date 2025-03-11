import type React from "react"
// import Link from "next/link"
import type { Skill } from "./Skills"
import Image from "next/image"

interface SkillCardProps {
  skill: Skill
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    // <Link href={`/skills/${encodeURIComponent(skill.name.toLowerCase())}`}>
      <div className=" flex h-12 mb-2 relative bg-transparent justify-center items-center rounded-lg  ">
      {skill.image ? (
          
            <Image
              src={skill.image || "/placeholder.svg"}
              alt={skill.name}
              fill
              sizes="100vw"
              style={{
                objectFit: "contain"
              }} />
          
        ) : (
          <h3 className="bg-white rounded-lg relative h-full text-lg p-1 flex items-center text-center justify-center text-black font-semibold">{skill.name}</h3>
        )}
       
      </div>
    // </Link>
  );
}

export default SkillCard

 {/* PROFICIENCY BAR */}
        {/* <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${skill.proficiency}%` }}></div>
        </div> */}