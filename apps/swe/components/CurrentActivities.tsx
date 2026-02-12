import ProjectCategory from "./ActivitiesCategory"
import ProgressBar from "./ProgressBar"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import ProjectSkill from "./ProjectSkill"




interface Project {
  title: string
  team?: string[]
  description: string
  currentProgress?: number,
  currentTask?: string,
  isActive?: boolean,
  skills: string[],
  total?: number,
  label?: string,
  status?: "To Do" | "In Progress" | "Done",
  startDate?: Date,
  endDate?: Date,
  link?: string
  image?: string
}

interface Category {
  name: string
  projects: Project[]
}

export interface Skill {
  name: string
  image: string,
  proficiency: number
}
export interface SkillCategory {
  name: string
  skills: Skill[]
}

const formatDate = (date: Date | undefined): string => {
  return date ? date.toLocaleDateString("en-US", { year: "numeric", month: "short" }) : ""
}
const CurrentActivities = ({ skills }: { skills: { [key: string]: string } }) => {


  const categories: Category[] = [
    {
      name: "Personal Projects",
      projects: [
        { title: "Software Engineering Website", skills: ["Next.js", "Tailwind CSS"], image: "/images/personal-website.PNG", description: "Central repository for my creative and professional endeavors", link: "https://github.com/robinlovell13/portfolio", startDate: new Date(2025, 1), endDate: new Date(2025, 3), currentTask: "Add projects", status: "Done" },
        {
          title: "Digital Marketing Website",
          startDate: new Date(2025, 1), endDate: new Date(2025, 3),
          skills: ["Next.js", "TypeScript", "Vercel", "React", "Web Design"], description: "",
          link: "https://social.robinlovell.com/",
          image: "/images/digitalmarketingwebsite.png",
          status: "Done",
          
        },
        { title: "Kaella Makeup Store POC", skills: ["SvelteKit", "JavaScript", "AWS", "Azure DevOps"], image: "images/kaella.PNG", description: "Simple ecommerce website POC for a Peruvian small business that allows users to browse items and add to cart", startDate: new Date(2023, 5), endDate: new Date(2023, 8), status: "Done", link: "https://kaella-eta.vercel.app/" },
        { title: "Kubernetes", skills: [], description: "Kubernetes open-source project", currentProgress: 0, total: 100, status: "To Do" },
      ],
    },
    {
      name: "Self-study",
      projects: [
        { title: "Build an LLM from Scratch", skills: ["Custom LLMs", "Python", "PyTorch", "Machine Learning"], description: "Learn to implement custom LLMs through book by Sebastian Raschka", startDate: new Date(2024, 11), currentProgress: 32, total: 100, label: "32% complete", status: "In Progress", isActive: true, currentTask: "Chapter 3" },
        { title: "Fundamentals of Software Architecture", skills: [], description: "Book & course by Mark Richards and Neal Ford", startDate: new Date(2024, 11), currentProgress: 10, total: 100, label: "10% complete", status: "In Progress" },
        // { title: "UX Design", skills: [], description: "", status: "To Do" },
        // { title: "Tailwind CSS", skills: [], description: "", status: "To Do" }

      ],
    },

    // {
    //   name: "Activities and Interests",
    //   projects: [
    //     { title: "Learn Spanish", skills: [], description: "", status: "In Progress" },
    //     { title: "Strength Training", team: ["me"], skills: [], description: "", status: "In Progress" },
    //     { title: "Jazz Harmonies", skills: [], description: "", status: "To Do" },
    //   ],
    // },


  ]



  const statuses: ("To Do" | "In Progress" | "Done")[] = ["Done", "In Progress", "To Do"]

  const renderProjects = (projects: Project[], status: string) => {
    return projects.filter((project) => project.status === status).map((project) => renderProjectCard(project))
  }

  const renderProjectCard = (project: Project) => (

    <a
      key={project.title}
      href={project.link || "#"}
      className={`bg-transparent border-2 rounded-lg p-4 relative pt-6 block
    ${project.isActive ? "border-green-500" : "border-white"} 
    ${project.link ? "cursor-pointer hover:bg-gray-800 transition-colors duration-200" : "cursor-default"}`}
    >
      {project.isActive && (
        <div className="absolute top-0 right-0 bg-green-500 text-xs text-black font-bold px-2 py-1 rounded-lg">
          Active Project
        </div>
      )}

      <h5 className="font-semibold mb-2 text-lg">{project.title}</h5>
      {project.image && (
        <div className="mb-4">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-40 object-cover rounded-lg"
          />
        </div>
      )}
      <div className="flex flex-wrap gap-x-2 gap-y-2 mb-2">
        {project.skills.map((skill: string, skillIndex) => (
          <ProjectSkill
            skill={skill}
            image={skills[skill] || ""}
            key={skillIndex}
          />
        ))}
      </div>
      <p className="text-md text-gray-300 mb-2">{project.description}</p>
      {project.startDate && (
        <p className="text-sm text-gray-400 mb-2">
          {formatDate(project.startDate)} - {project.endDate ? formatDate(project.endDate) : "Present"}
        </p>
      )}

      {project.status === 'In Progress' && project.currentProgress !== undefined && (
        <div>
          <ProgressBar currentProgress={project.currentProgress} total={project.total} />
          <p className="text-xs text-right mt-1 text-gray-400">{project.label}</p>
        </div>
      )}
      {project.currentTask && (<p className="text-sm text-gray-300 mb-2">Current task: {project.currentTask}</p>)}
    </a>

  )
  return (
    <section id="projects" className="min-h-screen py-16">
      <h2 className="text-4xl mb-12 text-center  py-4 md:py-0 ">Projects</h2>
      <div className="space-y-12">
        {categories.map((category, categoryIndex) => (
          <div key={category.name} className="bg-transparent rounded-lg py-6 md:px-6 relative">
            <h3 className="text-2xl font-semibold mb-6 absolute top-2 left-2 bg-transparent px-3 py-1 rounded-lg">
              {category.name}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {statuses.map(status => category.projects
                .filter(project => project.status === status).length !== 0 && (
                  <div key={status} className="space-y-4">
                    <h4 className="text-lg font-medium mb-3 text-center mt-4">{status}</h4>
                    {renderProjects(category.projects, status)}
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