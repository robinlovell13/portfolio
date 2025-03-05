import type React from "react"
import CategorySkills from "./CategorySkills"
import { useState } from "react"

export interface Skill {
    name: string
    link: string,
    proficiency: number // 0-100
}
export interface SkillCategory {
    name: string
    skills: Skill[]
}

interface SkillsProps {
    forEmployers: boolean;
}

const Skills: React.FC<SkillsProps> = ({ forEmployers }) => {

    const skillCategories: SkillCategory[] = forEmployers ? [
        {
            name: "Backend",
            skills: [
                {

                    "name": "Java",
                    "link": "https://www.vectorlogo.zone/logos/java/java-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "RESTful APIs",
                    "link": "",
                    "proficiency": 100
                },
                {
                    "name": "JSON",
                    "link": "https://www.vectorlogo.zone/logos/json/json-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "PostgreSQL",
                    "link": "https://www.vectorlogo.zone/logos/postgresql/postgresql-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "NoSQL",
                    "link": "",
                    "proficiency": 100
                },
                {
                    "name": "MongoDB",
                    "link": "https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "Node.js",
                    "link": "https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "Python",
                    "link": "https://www.vectorlogo.zone/logos/python/python-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "Express.js",
                    "link": "https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "GraphQL",
                    "link": "https://www.vectorlogo.zone/logos/graphql/graphql-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    name: "Object-Oriented Programming",
                    "link": "",
                    proficiency: 100
                }
            ]
        },
        {
            name: "Frontend",
            skills: [
                {
                    "name": "JavaScript",
                    "link": "https://www.vectorlogo.zone/logos/javascript/javascript-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "React",
                    "link": "https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "TypeScript",
                    "link": "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "Flutter",
                    "link": "https://www.vectorlogo.zone/logos/flutterio/flutterio-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "Dart",
                    "link": "https://www.vectorlogo.zone/logos/dartlang/dartlang-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "SvelteKit",
                    "link": "https://www.vectorlogo.zone/logos/sveltetechnology/sveltetechnology-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "ES6",
                    "link": "",
                    "proficiency": 100
                },
                {
                    "name": "HTML",
                    "link": "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "CSS",
                    "link": "https://www.vectorlogo.zone/logos/w3_css/w3_css-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "Syntactically Awesome Style Sheets",
                    "link": "https://www.vectorlogo.zone/logos/sass-lang/sass-lang-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "D3.js",
                    "link": "https://www.vectorlogo.zone/logos/d3js/d3js-ar21~bgwhite.svg",
                    proficiency: 100
                }
            ]
        },
        {
            name: "Cloud and DevOps",
            skills: [
                {
                    name: "Git",
                    "link": "https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "AWS",
                    "link": "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "GitLab",
                    "link": "https://www.vectorlogo.zone/logos/gitlab/gitlab-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "Azure DevOps",
                    "link": "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "Docker",
                    "link": "https://www.vectorlogo.zone/logos/docker/docker-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "Cloud Native Architectures",
                    "link": "",
                    "proficiency": 100
                },
                {
                    "name": "CI/CD Pipelines",
                    "link": "",
                    "proficiency": 100
                },
                {
                    "name": "Jira",
                    "link": "https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "Vercel",
                    "link": "https://www.vectorlogo.zone/logos/vercel/vercel-ar21~bgwhite.svg",
                    proficiency: 100
                }

            ]
        },
        {
            name: "Other",
            skills: [
                {
                    name: "HTTP",
                    "link": "",
                    "proficiency": 100
                },
                {
                    "name": "Windows",
                    "link": "",
                    "proficiency": 100
                },
                {
                    "name": "Linux",
                    "link": "https://www.vectorlogo.zone/logos/linux/linux-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "JUnit",
                    "link": "",
                    "proficiency": 100
                },
                {
                    "name": "Bash",
                    "link": "https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "Agile Scrum Development Practices",
                    "link": "",
                    "proficiency": 100
                },
                {
                    "name": "Amazon Connect",
                    "link": "",
                    "proficiency": 100
                },
                {
                    "name": "Twilio",
                    "link": "https://www.vectorlogo.zone/logos/twilio/twilio-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "R",
                    "link": "",
                    "proficiency": 100
                },
                {
                    "name": "Machine Learning Algorithms",
                    "link": "",
                    "proficiency": 100
                },
                {
                    "name": "Statistical Analysis",
                    "link": "",
                    "proficiency": 100
                },
                {
                    "name": "Generative AI",
                    "link": "",
                    "proficiency": 100
                }

            ]
        }
    ] :
        // For clients
        [{
            name: "Contact Center Technologies",
            skills: [{
                "name": "Amazon Connect",
                "link": "",
                "proficiency": 100
            },
            {
                "name": "Twilio",
                "link": "https://www.vectorlogo.zone/logos/twilio/twilio-ar21~bgwhite.svg",
                "proficiency": 100
            },]
        },
        {
            name: "AI",
            skills: [{
                "name": "Custom LLMs",
                "link": "",
                "proficiency": 100
            },
            {
                "name": "ChatGPT API",
                "link": "",
                "proficiency": 100
            },
            {
                "name": "PyTorch",
                "link": "",
                "proficiency": 100
            }
            ]
        },
        {
            name: "Cloud and DevOps",
            skills: [
                {
                    "name": "Amazon Web Services (AWS)",
                    "link": "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    name: "Git",
                    "link": "https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "GitLab",
                    "link": "https://www.vectorlogo.zone/logos/gitlab/gitlab-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "Docker",
                    "link": "https://www.vectorlogo.zone/logos/docker/docker-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "Vercel",
                    "link": "https://www.vectorlogo.zone/logos/vercel/vercel-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "Cloud Native Architectures",
                    "link": "",
                    "proficiency": 100
                },
                {
                    "name": "CI/CD Pipelines",
                    "link": "",
                    "proficiency": 100
                },
            ]
        },
        {
            name: "App and Web Development",
            skills: [
                {
                    "name": "Java",
                    "link": "https://www.vectorlogo.zone/logos/java/java-ar21~bgwhite.svg",
                    "proficiency": 30
                },
                {
                    "name": "VB .NET",
                    "link": "",
                    "proficiency": 30
                },
                {
                    "name": "RESTful APIs",
                    "link": "",
                    "proficiency": 100
                },
                {
                    "name": "JSON",
                    "link": "https://www.vectorlogo.zone/logos/json/json-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "PostgreSQL",
                    "link": "https://www.vectorlogo.zone/logos/postgresql/postgresql-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "NoSQL",
                    "link": "",
                    "proficiency": 100
                },
                {
                    "name": "MongoDB",
                    "link": "https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "Node.js",
                    "link": "https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "Python",
                    "link": "https://www.vectorlogo.zone/logos/python/python-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "Express.js",
                    "link": "https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "GraphQL",
                    "link": "https://www.vectorlogo.zone/logos/graphql/graphql-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    name: "Object-Oriented Programming",
                    "link": "",
                    proficiency: 100
                },
                {
                    name: "HTTP",
                    "link": "",
                    "proficiency": 100
                },
                {
                    "name": "JavaScript",
                    "link": "https://www.vectorlogo.zone/logos/javascript/javascript-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "React",
                    "link": "https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "TypeScript",
                    "link": "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "Flutter",
                    "link": "https://www.vectorlogo.zone/logos/flutterio/flutterio-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "Dart",
                    "link": "https://www.vectorlogo.zone/logos/dartlang/dartlang-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "SvelteKit",
                    "link": "https://www.vectorlogo.zone/logos/sveltetechnology/sveltetechnology-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "ES6",
                    "link": "",
                    "proficiency": 100
                },
                {
                    "name": "HTML",
                    "link": "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "CSS",
                    "link": "https://www.vectorlogo.zone/logos/w3_css/w3_css-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "Syntactically Awesome Style Sheets (SASS)",
                    "link": "https://www.vectorlogo.zone/logos/sass-lang/sass-lang-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "Bash",
                    "link": "https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-ar21~bgwhite.svg",
                    "proficiency": 100
                },
            ]
        },
        {
            name: "Project Management",
            skills: [
                {
                    "name": "Jira",
                    "link": "https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "Azure DevOps",
                    "link": "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "Agile Scrum Development Practices",
                    "link": "",
                    "proficiency": 100
                },
            ]
        },
        {
            name: "Data Science",
            skills: [
                {
                    "name": "R",
                    "link": "",
                    "proficiency": 100
                },
                {
                    "name": "Machine Learning Algorithms",
                    "link": "",
                    "proficiency": 100
                },
                {
                    "name": "Statistical Analysis",
                    "link": "",
                    "proficiency": 100
                },
                {
                    "name": "D3.js",
                    "link": "https://www.vectorlogo.zone/logos/d3js/d3js-ar21~bgwhite.svg",
                    "proficiency": 100
                }
            ]
        },

        {
            name: "Testing",
            skills: [
                {
                    "name": "JUnit",
                    "link": "",
                    "proficiency": 100
                },
                {
                    "name": "Playwright",
                    "link": "",
                    "proficiency": 100
                },
            ]
        },
        {
            name: "Operating Systems",
            skills: [
                {
                    "name": "Windows",
                    "link": "",
                    "proficiency": 100
                },
                {
                    "name": "Linux",
                    "link": "https://www.vectorlogo.zone/logos/linux/linux-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "MacOS",
                    "link": "",
                    "proficiency": 100
                },

            ]
        },

        ]


    return (
        <section id="skills" className="min-h-screen py-16">
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

