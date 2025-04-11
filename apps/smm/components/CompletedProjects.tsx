import type React from "react"

interface CompletedProject {
  title: string
  description: string
  year: number
}

const CompletedProjects: React.FC = () => {
  const projects: CompletedProject[] = [
    { title: "Daily Tracker", description: "Built a scalable e-commerce solution", year: 2023 },
    { title: "Kaella Makeup Store POC", description: "Completed an advanced ML course", year: 2023 },
  ]

  const groupedProjects = projects.reduce(
    (acc, project) => {
      if (!acc[project.year]) {
        acc[project.year] = []
      }
      acc[project.year].push(project)
      return acc
    },
    {} as Record<number, CompletedProject[]>,
  )

  const sortedYears = Object.keys(groupedProjects)
    .map(Number)
    .sort((a, b) => b - a)

  return (
    <section id="completed-projects" className="min-h-screen py-16 px-8">
      <h2 className="text-3xl mb-12 text-center">Completed Projects</h2>
      {sortedYears.map((year) => (
        <div key={year} className="mb-12">
          <h3 className="text-2xl mb-6 border-b border-gray-600 pb-2">{year}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {groupedProjects[year].map((project, index) => (
              <div key={index} className="bg-transparent border-white border-2 p-6 rounded-lg">
                <h4 className="text-xl mb-2">{project.title}</h4>
                <p className="text-sm">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

export default CompletedProjects

