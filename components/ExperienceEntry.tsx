import type React from "react"
import ProjectCard from "./ProjectCard"

interface Project {
    title: string
    team?: string[]
    description: string
    link?: string
  }
  
interface Experience {
  company: string
  position: string
  fromDate: string
  toDate: string
  description: string
  projects: Project[]
}

interface ExperienceEntryProps {
  experience: Experience
}

const ExperienceEntry: React.FC<ExperienceEntryProps> = ({ experience }) => {
  return (
    <div className="bg-transparent border-2 border-white py-6 rounded-lg">
      <div className="mb-4">
        <h3 className="text-2xl font-bold mx-4">{experience.position}</h3>
        <h4 className="text-xl mx-4">{experience.company}</h4>
        <p className="text-sm text-gray-400 mx-4">
          {experience.fromDate} - {experience.toDate}
        </p>
      </div>
      <p className="mb-4 whitespace-pre-line mx-4">{experience.description}</p>
      {experience.projects.length > 0 && (
        <div>
          <h5 className="text-lg font-semibold mb-2 mx-4">Key Projects:</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:mx-4">
            {experience.projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ExperienceEntry

