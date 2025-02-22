import ProjectCategory from "./ActivitiesCategory"
import ProgressBar from "./ProgressBar"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

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
  year?: number,
  link?: string
}

interface Category {
  name: string
  projects: Project[]
}

const CurrentActivities = () => {
  const categories: Category[] = [
    {
      name: "Personal",
      projects: [
        { title: "Personal Website", description: "Create a central repository for my creative and professional endeavors", isActive: true, currentTask: "Improve UX on mobile; fix skills section", status: "In Progress" },
        { title: "From-To Clone", description: "Create a free-to-use version of the From-To app", team: ["Jeffrey Torres", "me"], status: "In Progress" },
        { title: "Daily Tracker", description: "Built a personal wellbeing tracker", year: 2023, status: "Done" },
        { title: "Kaella Makeup Store POC", description: "Created an ecommerce website POC for a Peruvian small business", year: 2023, status: "Done", link: "https://kaella-eta.vercel.app/" },
        { title: "Kubernetes", description: "Contribute to Kubernetes open-source project", currentProgress: 0, total: 100, status: "To Do" },
      ],
    },
    {
      name: "Self-study",
      projects: [
        { title: "Build an LLM from Scratch", description: "Learn to implement custom LLMs through this book by Sebastian Raschka", currentProgress: 32, total: 100, label: "32% complete", status: "In Progress", isActive: true, currentTask: "Chapter 3" },
        { title: "Fundamentals of Software Architecture", description: "Book & course by Mark Richards and Neal Ford", currentProgress: 10, total: 100, label: "10% complete", status: "In Progress" },
        { title: "UX Design", description: "", status: "To Do" },
        { title: "Tailwind CSS", description: "", status: "To Do" }

      ],
    },
    {
      name: "Activities and Interests",
      projects: [
        { title: "Learn Spanish", description: "", status: "In Progress" },
        { title: "Strength Training", team: ["me"], description: "", status: "In Progress" },
        { title: "Jazz Harmonies", description: "", status: "To Do" },
      ],
    },


  ]



  const statuses: ("To Do" | "In Progress" | "Done")[] = ["Done", "In Progress", "To Do"]

  return (
    <section id="projects" className="min-h-screen py-16">
      <h2 className="text-3xl mb-12 text-center border-b-2 py-4 md:py-0 md:border-0 border-white">Projects</h2>
      <div className="space-y-12">
        {categories.map((category, categoryIndex) => (
          <div key={category.name} className="bg-transparent md:border-2 md:border-white rounded-lg py-6 md:px-6 relative">
            <h3 className="text-xl font-semibold mb-6 absolute top-2 left-2 bg-transparent md:border-2 md:border-white px-3 py-1 rounded">
              {category.name}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {statuses.map(status => category.projects
                .filter(project => project.status === status).length !== 0 && (
                  <div key={status} className="space-y-4">
                    <h4 className="text-lg font-medium mb-3 text-center mt-4">{status}</h4>
                    {category.projects
                      .filter(project => project.status === status)
                      .map(project => (
                        <div
                          key={project.title}
                          className={`bg-transparent border-2 rounded p-4 relative pt-6 ${project.isActive ? "border-green-500" : "border-white"
                            }`}
                        >
                          {project.isActive && (
                            <div className="absolute top-0 right-0 bg-green-500 text-xs text-black font-bold px-2 py-1 rounded-bl">
                              Active Task
                            </div>
                          )}
                          {project.link && <Link
                            href={project.link || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute top-2 right-2 text-gray-400 hover:text-white"
                          >
                            <ExternalLink size={16} />
                          </Link>}
                          <h5 className="font-semibold mb-2">{project.title}</h5>
                          <p className="text-sm text-gray-300 mb-2">{project.description}</p>
                          {project.status === 'In Progress' && project.currentProgress !== undefined && (
                            <div>
                              <ProgressBar currentProgress={project.currentProgress} total={project.total} />
                              <p className="text-xs text-right mt-1 text-gray-400">{project.label}</p>
                            </div>
                          )}
                          {project.currentTask && (<p className="text-sm text-gray-300 mb-2">Current task: {project.currentTask}</p>)}
                        </div>
                      ))
                    }
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CurrentActivities