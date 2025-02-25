import Link from "next/link"
import ProgressBar from "./ProgressBar"
import type React from "react" // Added import for React

interface Project {
  title: string
  description: string
  currentProgress: number,
  total: number,
  label?: string
}

interface CategoryProps {
  category: {
    name: string
    projects: Project[]
  }
}

const CurrentActivitiesCategory: React.FC<CategoryProps> = ({ category }) => {
  const displayProjects = category.projects.slice(0, 4)
  const hasMoreProjects = category.projects.length > 4

  return (
    
    <div className="bg-transparent border-2 border-white p-6 rounded-lg">
      <h3 className="text-2xl mb-4">{category.name}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {displayProjects.map((project, index) => (
          <div key={index} className="bg-transparent border-2 border-white p-4 rounded-lg hover:bg-gray-800 hover:border-gray-300">
            <h4 className="text-lg mb-2">{project.title}</h4>
            <p className="text-sm mb-2">{project.description}</p>
            <ProgressBar currentProgress={project.currentProgress} total={project.total}/>
            <p className="text-right text-xs">{project.label}</p>
          </div>
        ))}
      </div>
      {hasMoreProjects && (
        <div className="mt-4 text-center">
          <Link
            href={`/projects/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
            className="text-blue-400 hover:bg-gray-800"
          >
            View All
          </Link>
        </div>
      )}
    </div>
  )
}

export default CurrentActivitiesCategory

