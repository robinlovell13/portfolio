import type React from "react"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import ProjectSkill from "./ProjectSkill"

interface Project {
  title: string
  team?: string[]
  description: string
  currentProgress?: number,
  currentTask?: string,
  isActive?: boolean,
  total?: number,
  label?: string,
  status?: "To Do" | "In Progress" | "Done",
  startDate?: Date,
  endDate?: Date,
  link?: string
  image?: string
  skills: string[]
}
interface ProjectCardProps {
  project: Project
  skills: { [key: string]: string }
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, skills }) => {
  return (
    <a
    key={project.title}
    href={project.link || "#"}
    className={`bg-transparent border-2 rounded-lg p-4 relative pt-6 block
      ${project.isActive ? "border-green-500" : "border-white"} 
      ${project.link ? "cursor-pointer hover:bg-gray-800 transition-colors duration-200" : "cursor-default"}`}
  >
    
      <h6 className="text-lg font-semibold mb-2">{project.title}</h6>
      {project.image && (
      <div className="mb-4">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-40 object-cover rounded-lg"
        />
      </div>
    )}
      <div className="flex flex-wrap gap-x-2 gap-y-2 mb-4">
        {project.skills.map((skill, skillIndex) => (
          <ProjectSkill
          skill={skill}
          image={skills[skill] || ""}
          key={skillIndex}
        />
        ))}
      </div>
      <p className="text-sm whitespace-pre-line">{project.description}</p>
      
    </a>
  )
}

export default ProjectCard

