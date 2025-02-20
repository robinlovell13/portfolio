import type React from "react"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
interface Project {
  title: string
  link?: string
  description: string
}

interface ProjectCardProps {
  project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className={"bg-transparent border-2 border-white p-4 rounded relative"}>
      {project.link && (<Link
        href={project.link || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-2 right-2 text-gray-400 hover:text-white"
      >
        <ExternalLink size={16} />
      </Link>)}
      <h6 className="text-lg font-semibold mb-2">{project.title}</h6>
      <p className="text-sm">{project.description}</p>
    </div>
  )
}

export default ProjectCard

