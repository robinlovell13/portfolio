import ProjectCategory from "./ActivitiesCategory"

interface Project {
  title: string
  team?: string[]
  description: string
  currentProgress: number,
  total: number,
  label?: string

}

interface Category {
  name: string
  projects: Project[]
}

const CurrentActivities = () => {
  const categories: Category[] = [
    {
      name: "Projects",
      projects: [
        { title: "From-To Clone", description: "Create a free-to-use version of the From-To app", team: ["Jeffrey Torres", "me"], currentProgress: 30, total:100, label: "30% complete" },
        { title: "Kubernetes", description: "Contribute to Kubernetes open-source project", currentProgress: 0, total:100,  label: "0/100 commits" }
      ],
    },
    {
      name: "Self-study",
      projects: [
        { title: "Build an LLM from Scratch", description: "Learn to implement custom LLMs through this book by Sebastian Raschka", currentProgress: 32, total:100, label: "32% complete" },
        { title: "Fundamentals of Software Architecture", description: "Book & course by Mark Richards and Neal Ford", currentProgress: 10, total:100, label: "10% complete" }
  
      ],
    },
    {
      name: "Activities and Interests",
      projects: [
        { title: "Learning Spanish", description: "", currentProgress: 40, total:100, label: "A2 Level" },
        { title: "Strength Training", team: ["me"], description: "Lift 100% of bodyweight in farmer's carries", currentProgress: 110, total:195, label: "110/195 lbs"},
        { title: "Jazz Harmonies", description: "", currentProgress: 10, total:100, label: "10% complete" },
      ],
    },
  ]
  


  return (
    <section id="current-activities" className="min-h-screen py-16 px-8">
      <h2 className="text-3xl mb-12 text-center">What Am I Working On?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {categories.map((category, index) => (
          <ProjectCategory key={index} category={category} />
        ))}
      </div>
    </section>
  )
}

export default CurrentActivities