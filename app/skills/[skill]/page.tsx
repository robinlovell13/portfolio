import { notFound } from "next/navigation"
import Link from "next/link"

// This is a placeholder. In a real application, you'd fetch this data from an API or database.
const skillsData = {
  java: {
    name: "Java",
    category: "Backend",
    proficiency: 100,
    yearsOfExperience: 8,
    projects: [
      {
        name: "Enterprise Resource Planning System",
        description: "Developed a large-scale ERP system using Java and Spring Boot",
      },
      {
        name: "Microservices Architecture",
        description: "Implemented a microservices-based backend for a high-traffic e-commerce platform",
      },
    ],
  },
  react: {
    name: "React",
    category: "Frontend",
    proficiency: 95,
    yearsOfExperience: 5,
    projects: [
      {
        name: "Single Page Application Dashboard",
        description: "Built a complex dashboard for data visualization using React and D3.js",
      },
      {
        name: "Progressive Web App",
        description: "Developed a PWA for a major retail client, improving mobile engagement",
      },
    ],
  },
  // Add more skills here...
}

export function generateStaticParams() {
  return Object.keys(skillsData).map((skill) => ({
    skill: skill,
  }))
}

export default function SkillPage({ params }: { params: { skill: string } }) {
  const skill = skillsData[params.skill as keyof typeof skillsData]

  if (!skill) {
    notFound()
  }

  return (
    <div className="min-h-screen py-16 px-8">
      <h1 className="text-3xl mb-2 text-center">{skill.name}</h1>
      <p className="text-xl mb-8 text-center text-gray-400">{skill.category}</p>
      <div className="max-w-2xl mx-auto bg-midnight p-6 rounded-lg">
        <p className="mb-4">
          <strong>Proficiency:</strong> {skill.proficiency}%
        </p>
        <p className="mb-4">
          <strong>Years of Experience:</strong> {skill.yearsOfExperience}
        </p>
        <h2 className="text-2xl mb-4">Projects and Experience</h2>
        <ul className="list-disc pl-5 space-y-2">
          {skill.projects.map((project, index) => (
            <li key={index}>
              <strong>{project.name}</strong>: {project.description}
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Link href="/#skills" className="text-blue-400 hover:bg-gray-800">
            Back to Skills
          </Link>
        </div>
      </div>
    </div>
  )
}

