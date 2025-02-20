import ProjectCategory from "./ActivitiesCategory"
import ProgressBar from "./ProgressBar"

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
  year?: number
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
        { title: "Professional Website", description: "Build website for software services",  isActive: true, currentTask: "Update projects section", status: "In Progress" },
        { title: "From-To Clone", description: "Create a free-to-use version of the From-To app", team: ["Jeffrey Torres", "me"], status: "In Progress"},
        { title: "Daily Tracker", description: "Built a scalable e-commerce solution", year: 2023, status: "Done"},
        { title: "Kaella Makeup Store POC", description: "Completed an advanced ML course", year: 2023, status: "Done"},
        { title: "Kubernetes", description: "Contribute to Kubernetes open-source project", currentProgress: 0, total:100, status: "To Do"},
      ],
    },
    {
      name: "Self-study",
      projects: [
        { title: "Build an LLM from Scratch", description: "Learn to implement custom LLMs through this book by Sebastian Raschka", currentProgress: 32, total:100, label: "32% complete", status: "In Progress", isActive: true, currentTask: "Chapter 3" },
        { title: "Fundamentals of Software Architecture", description: "Book & course by Mark Richards and Neal Ford", currentProgress: 10, total:100, label: "10% complete", status: "In Progress" }
  
      ],
    },
    {
      name: "Activities and Interests",
      projects: [
        { title: "Learn Spanish", description: "", status: "In Progress" },
        { title: "Strength Training", team: ["me"], description: "", status: "In Progress"},
        { title: "Jazz Harmonies", description: "", status: "To Do" },
      ],
    },
    
    
  ]
  


  const statuses: ("To Do" | "In Progress" | "Done")[] = ["To Do", "In Progress", "Done"]

  return (
    <section id="projects" className="min-h-screen py-16 px-4 md:px-8">
      <h2 className="text-3xl mb-12 text-center">Projects</h2>
      <div className="space-y-12">
        {categories.map((category, categoryIndex) => (
          <div key={category.name} className="bg-transparent border-2 border-white rounded-lg p-6 relative">
            <h3 className="text-xl font-semibold mb-6 absolute top-2 left-2 bg-transparent border-2 border-white px-3 py-1 rounded">
              {category.name}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {statuses.map(status => (
                <div key={status} className="space-y-4">
                  <h4 className="text-lg font-medium mb-3 text-center">{status}</h4>
                  {category.projects
                    .filter(project => project.status === status)
                    .map(project => (
                      <div
                        key={project.title}
                        className={`bg-transparent border-2 rounded p-4 relative pt-6 ${
                          project.isActive ? "border-green-500" : "border-white"
                        }`}
                      >
                        {project.isActive && (
                          <div className="absolute top-0 right-0 bg-green-500 text-xs text-black font-bold px-2 py-1 rounded-bl">
                            Active Task
                          </div>
                        )}
                        <h5 className="font-semibold mb-2">{project.title}</h5>
                        <p className="text-sm text-gray-300 mb-2">{project.description}</p>
                        {project.status === 'In Progress' && project.currentProgress !== undefined && (
                          <div>
                            <ProgressBar currentProgress={project.currentProgress} total={project.total}/>
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