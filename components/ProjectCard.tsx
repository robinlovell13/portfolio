import type React from "react"

interface Project {
  title: string
  description: string
}

interface ProjectCardProps {
  project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-transparent border-2 border-white p-4 rounded">
      <h6 className="text-lg font-semibold mb-2">{project.title}</h6>
      <p className="text-sm">{project.description}</p>
    </div>
  )
}

export default ProjectCard

