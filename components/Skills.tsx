import type React from "react"
import CategorySkills from "./CategorySkills"

export interface Skill {
    name: string
    proficiency: number // 0-100
}
export interface SkillCategory {
    name: string
    skills: Skill[]
  }
  
const Skills: React.FC = () => {
    const skillCategories: SkillCategory[] = [
        {
            name: "Backend",
            skills: [
                {

                    "name": "Java",
                    "proficiency": 100
                },
                {
                    "name": " RESTful APIs",
                    "proficiency": 100
                },
                {
                    "name": " JSON",
                    "proficiency": 100
                },
                {
                    "name": " PostgreSQL",
                    "proficiency": 100
                },
                {
                    "name": " NoSQL",
                    "proficiency": 100
                },
                {
                    "name": " MongoDB",
                    "proficiency": 100
                },
                {
                    "name": " Node.js",
                    "proficiency": 100
                },
                {
                    "name": " Python",
                    "proficiency": 100
                },
                {
                    "name": " Express.js",
                    "proficiency": 100
                },
                {
                    "name": " GraphQL",
                    "proficiency": 100
                },
                {
                    name: "Object-Oriented Programming",
                    proficiency: 100
                }
            ]
        },
        {
            name: "Frontend",
            skills: [
                {
                    "name": "  JavaScript",
                    "proficiency": 100
                },
                {
                    "name": " React",
                    "proficiency": 100
                },
                {
                    "name": " TypeScript",
                    "proficiency": 100
                },
                {
                    "name": " Flutter",
                    "proficiency": 100
                },
                {
                    "name": " Dart",
                    "proficiency": 100
                },
                {
                    "name": " SvelteKit",
                    "proficiency": 100
                },
                {
                    "name": " ES6",
                    "proficiency": 100
                },
                {
                    "name": " HTML",
                    "proficiency": 100
                },
                {
                    "name": " CSS",
                    "proficiency": 100
                },
                {
                    "name": " Sass Scripting",
                    "proficiency": 100
                },
                {
                    "name": " D3.js",
                    proficiency: 100
                }
            ]
        },
        {
            name: " Cloud and DevOps",
            skills: [
                {
                    name: "Git",
                    "proficiency": 100
                },
                {
                    "name": " AWS (DynamoDB",
                    "proficiency": 100
                },
                {
                    "name": " Lambda",
                    "proficiency": 100
                },
                {
                    "name": " S3",
                    "proficiency": 100
                },
                {
                    "name": " etc.)",
                    "proficiency": 100
                },
                {
                    "name": " GitLab",
                    "proficiency": 100
                },
                {
                    "name": " Azure DevOps",
                    "proficiency": 100
                },
                {
                    "name": " Docker",
                    "proficiency": 100
                },
                {
                    "name": " Cloud Native Architectures",
                    "proficiency": 100
                },
                {
                    "name": " CI/CD Pipelines",
                    "proficiency": 100
                },
                {
                    "name": " Jira",
                    "proficiency": 100
                },
                {
                    "name": " Vercel",
                    proficiency: 100
                }

            ]
        },
        {
            name: "Other",
            skills: [
                {
                    name: "HTTP",
                    "proficiency": 100
                },
                {
                    "name": " Windows",
                    "proficiency": 100
                },
                {
                    "name": " Linux",
                    "proficiency": 100
                },
                {
                    "name": " JUnit",
                    "proficiency": 100
                },
                {
                    "name": " Bash",
                    "proficiency": 100
                },
                {
                    "name": " Agile Scrum Development Practices",
                    "proficiency": 100
                },
                {
                    "name": " Amazon Connect",
                    "proficiency": 100
                },
                {
                    "name": " Twilio",
                    "proficiency": 100
                },
                {
                    "name": " R",
                    "proficiency": 100
                },
                {
                    "name": " Machine Learning Algorithms",
                    "proficiency": 100
                },
                {
                    "name": " Statistical Analysis",
                    "proficiency": 100
                },
                {
                    "name": " Generative AI",
                    "proficiency": 100
                }

            ]
        }
    ]

    return (
        <section id="skills" className="min-h-screen py-16 px-8">
          <h2 className="text-3xl mb-12 text-center ">Skills</h2>
          <div className="space-y-12">
            {skillCategories.map((category, index) => (
              <CategorySkills key={index} category={category} />
            ))}
          </div>
        </section>
      )
    }

export default Skills

