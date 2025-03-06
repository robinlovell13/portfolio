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
  skills: string[]
}
interface ProjectCardProps {
  project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className={"bg-transparent border-2 border-white p-4 rounded-lg relative"}>
      {project.link && (<Link
        href={project.link || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className={`absolute ${project.isActive ? "top-7": "top-2"} right-2 text-gray-400 hover:text-white`}
      >
        <ExternalLink size={16} />
      </Link>)}
      <h6 className="text-lg font-semibold mb-2">{project.title}</h6>
      <p className="text-sm whitespace-pre-line">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-2">
                    {project.skills.map((skill, skillIndex) => (
                      <ProjectSkill skill={skill} key={skillIndex}/>
                    ))}
                  </div>
    </div>
  )
}

export default ProjectCard

