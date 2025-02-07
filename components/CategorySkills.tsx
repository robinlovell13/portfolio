import type React from "react"
import SkillCard from "./SkillCard"
import type { SkillCategory } from "./Skills"

interface CategorySkillsProps {
  category: SkillCategory
}

const CategorySkills: React.FC<CategorySkillsProps> = ({ category }) => {
  return (
    <div className="mb-8">
      <h3 className="text-2xl mb-4 font-semibold border-b-2 border-white">{category.name}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-4 ">
        {category.skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  )
}

export default CategorySkills

