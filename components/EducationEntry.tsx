import type React from "react"
import ProjectCard from "./ProjectCard"

interface Project {
    title: string
    team?: string[]
    description: string
    link?: string
  }
  
interface Education {
    school: string
    major: string
    college: string
    fromDate: string
    toDate: string
    skills: string[]
    projects: Project[]
}

interface EducationEntryProps {
  education: Education
}

const EducationEntry: React.FC<EducationEntryProps> = ({ education }) => {
  return (
    <div className="bg-transparent border-2 border-white p-6 rounded-lg">
      <div className="mb-4">
        <h3 className="text-2xl font-bold">{education.major}</h3>
        <h4 className="text-xl">{education.school}</h4>
        <p className="text-sm text-gray-400">
          {education.fromDate} - {education.toDate}
        </p>
      </div>
      <p className="mb-4">{education.skills}</p>
      {education.projects.length > 0 && (
        <div>
          <h5 className="text-lg font-semibold mb-2">Key Projects:</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {education.projects.map((project, index) => (
              <ProjectCard key={index} project={project}/>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default EducationEntry

