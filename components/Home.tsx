"use client"
import Navigation from "../components/Navigation"
import About from "../components/About"
import CurrentActivities from "../components/CurrentActivities"
import Contact from "../components/Contact"
import Recommendations from "../components/Recommendations"
import CompletedProjects from "../components/CompletedProjects"
import ProfessionalExperience from "../components/ProfessionalExperience"
import Education from "../components/EducationExperience"
import Skills from "../components/Skills"
import { useState, useEffect  } from "react";
import { useSearchParams } from "next/navigation";
export interface Skill {
    name: string
    image: string,
    proficiency: number // 0-100
}
export interface SkillCategory {
    name: string
    skills: Skill[]
}

export default function Home() { 
    const searchParams = useSearchParams();
    const [forEmployers, setForEmployers] = useState(false);

    useEffect(() => {
        setForEmployers(searchParams.has("forEmployers"));
    }, [searchParams]);

    const skillCategories: SkillCategory[] = forEmployers ? [
        {
            name: "Backend",
            skills: [
                {

                    "name": "Java",
                    "image": "https://www.vectorlogo.zone/logos/java/java-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "RESTful APIs",
                    "image": "",
                    "proficiency": 100
                },
                {
                    "name": "JSON",
                    "image": "https://www.vectorlogo.zone/logos/json/json-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "PostgreSQL",
                    "image": "https://www.vectorlogo.zone/logos/postgresql/postgresql-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "NoSQL",
                    "image": "",
                    "proficiency": 100
                },
                {
                    "name": "MongoDB",
                    "image": "https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "Node.js",
                    "image": "https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "Python",
                    "image": "https://www.vectorlogo.zone/logos/python/python-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "Express.js",
                    "image": "https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "GraphQL",
                    "image": "https://www.vectorlogo.zone/logos/graphql/graphql-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    name: "Object-Oriented Programming",
                    "image": "",
                    proficiency: 100
                }
            ]
        },
        {
            name: "Frontend",
            skills: [
                {
                    "name": "JavaScript",
                    "image": "https://www.vectorlogo.zone/logos/javascript/javascript-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "React",
                    "image": "https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "TypeScript",
                    "image": "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {"name": "Next.js",
                    "image": "https://www.vectorlogo.zone/logos/nextjs/nextjs-ar21~bgwhite.svg",
                    "proficiency": 80
                },
                {   "name": "Tailwind CSS",
                    "image": "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-ar21~bgwhite.svg",
                    "proficiency": 80
                },
                {
                    "name": "Flutter",
                    "image": "https://www.vectorlogo.zone/logos/flutterio/flutterio-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "Dart",
                    "image": "https://www.vectorlogo.zone/logos/dartlang/dartlang-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "SvelteKit",
                    "image": "https://www.vectorlogo.zone/logos/sveltetechnology/sveltetechnology-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "ES6",
                    "image": "",
                    "proficiency": 100
                },
                {
                    "name": "HTML",
                    "image": "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "CSS",
                    "image": "https://www.vectorlogo.zone/logos/w3_css/w3_css-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "Syntactically Awesome Style Sheets",
                    "image": "https://www.vectorlogo.zone/logos/sass-lang/sass-lang-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "D3.js",
                    "image": "https://www.vectorlogo.zone/logos/d3js/d3js-ar21~bgwhite.svg",
                    proficiency: 100
                }
            ]
        },
        {
            name: "Cloud and DevOps",
            skills: [
                {
                    name: "Git",
                    "image": "https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "AWS",
                    "image": "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "GitLab",
                    "image": "https://www.vectorlogo.zone/logos/gitlab/gitlab-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "Azure DevOps",
                    "image": "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "Docker",
                    "image": "https://www.vectorlogo.zone/logos/docker/docker-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "Cloud Native Architectures",
                    "image": "",
                    "proficiency": 100
                },
                {
                    "name": "CI/CD Pipelines",
                    "image": "",
                    "proficiency": 100
                },
                {
                    "name": "Jira",
                    "image": "https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "Vercel",
                    "image": "https://www.vectorlogo.zone/logos/vercel/vercel-ar21~bgwhite.svg",
                    proficiency: 100
                },

            ]
        },
        {
            name: "Other",
            skills: [
                {
                    name: "HTTP",
                    "image": "",
                    "proficiency": 100
                },
                {
                    "name": "Windows",
                    "image": "",
                    "proficiency": 100
                },
                {
                    "name": "Linux",
                    "image": "https://www.vectorlogo.zone/logos/linux/linux-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "JUnit",
                    "image": "",
                    "proficiency": 100
                },
                {
                    "name": "Bash",
                    "image": "https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "Agile Scrum Development Practices",
                    "image": "",
                    "proficiency": 100
                },
                {
                    "name": "Amazon Connect",
                    "image": "",
                    "proficiency": 100
                },
                {
                    "name": "Twilio",
                    "image": "https://www.vectorlogo.zone/logos/twilio/twilio-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "R",
                    "image": "",
                    "proficiency": 100
                },
                {
                    "name": "Machine Learning Algorithms",
                    "image": "",
                    "proficiency": 100
                },
                {
                    "name": "Statistical Analysis",
                    "image": "",
                    "proficiency": 100
                },
                {
                    "name": "Generative AI",
                    "image": "",
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
                "image": "",
                "proficiency": 100
            },
            {
                "name": "Twilio",
                "image": "https://www.vectorlogo.zone/logos/twilio/twilio-ar21~bgwhite.svg",
                "proficiency": 100
            },]
        },
        {
            name: "AI",
            skills: [{
                "name": "Custom LLMs",
                "image": "",
                "proficiency": 100
            },
            {
                "name": "ChatGPT API",
                "image": "",
                "proficiency": 100
            },
            {
                "name": "PyTorch",
                "image": "",
                "proficiency": 100
            }
            ]
        },
        {
            name: "Cloud and DevOps",
            skills: [
                {
                    "name": "Amazon Web Services (AWS)",
                    "image": "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    name: "Git",
                    "image": "https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "GitLab",
                    "image": "https://www.vectorlogo.zone/logos/gitlab/gitlab-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "Docker",
                    "image": "https://www.vectorlogo.zone/logos/docker/docker-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "Vercel",
                    "image": "https://www.vectorlogo.zone/logos/vercel/vercel-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "Cloud Native Architectures",
                    "image": "",
                    "proficiency": 100
                },
                {
                    "name": "CI/CD Pipelines",
                    "image": "",
                    "proficiency": 100
                },
            ]
        },
        {
            name: "App and Web Development",
            skills: [
                {"name": "Next.js",
                    "image": "https://www.vectorlogo.zone/logos/nextjs/nextjs-ar21~bgwhite.svg",
                    "proficiency": 80
                },
                {   "name": "Tailwind CSS",
                    "image": "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-ar21~bgwhite.svg",
                    "proficiency": 80
                },
                {
                    "name": "Java",
                    "image": "https://www.vectorlogo.zone/logos/java/java-ar21~bgwhite.svg",
                    "proficiency": 30
                },
                {
                    "name": "VB .NET",
                    "image": "",
                    "proficiency": 30
                },
                {
                    "name": "RESTful APIs",
                    "image": "",
                    "proficiency": 100
                },
                {
                    "name": "JSON",
                    "image": "https://www.vectorlogo.zone/logos/json/json-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "PostgreSQL",
                    "image": "https://www.vectorlogo.zone/logos/postgresql/postgresql-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "NoSQL",
                    "image": "",
                    "proficiency": 100
                },
                {
                    "name": "MongoDB",
                    "image": "https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "Node.js",
                    "image": "https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "Python",
                    "image": "https://www.vectorlogo.zone/logos/python/python-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "Express.js",
                    "image": "https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "GraphQL",
                    "image": "https://www.vectorlogo.zone/logos/graphql/graphql-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    name: "Object-Oriented Programming",
                    "image": "",
                    proficiency: 100
                },
                {
                    name: "HTTP",
                    "image": "",
                    "proficiency": 100
                },
                {
                    "name": "JavaScript",
                    "image": "https://www.vectorlogo.zone/logos/javascript/javascript-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "React",
                    "image": "https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "TypeScript",
                    "image": "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "Flutter",
                    "image": "https://www.vectorlogo.zone/logos/flutterio/flutterio-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "Dart",
                    "image": "https://www.vectorlogo.zone/logos/dartlang/dartlang-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "SvelteKit",
                    "image": "https://www.vectorlogo.zone/logos/sveltetechnology/sveltetechnology-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "ES6",
                    "image": "",
                    "proficiency": 100
                },
                {
                    "name": "HTML",
                    "image": "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "CSS",
                    "image": "https://www.vectorlogo.zone/logos/w3_css/w3_css-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "Syntactically Awesome Style Sheets (SASS)",
                    "image": "https://www.vectorlogo.zone/logos/sass-lang/sass-lang-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "Bash",
                    "image": "https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-ar21~bgwhite.svg",
                    "proficiency": 100
                },
            ]
        },
        {
            name: "Project Management",
            skills: [
                {
                    "name": "Jira",
                    "image": "https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "Azure DevOps",
                    "image": "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "Agile Scrum Development Practices",
                    "image": "",
                    "proficiency": 100
                },
            ]
        },
        {
            name: "Data Science",
            skills: [
                {
                    "name": "R",
                    "image": "",
                    "proficiency": 100
                },
                {
                    "name": "Machine Learning Algorithms",
                    "image": "",
                    "proficiency": 100
                },
                {
                    "name": "Statistical Analysis",
                    "image": "",
                    "proficiency": 100
                },
                {
                    "name": "D3.js",
                    "image": "https://www.vectorlogo.zone/logos/d3js/d3js-ar21~bgwhite.svg",
                    "proficiency": 100
                }
            ]
        },

        {
            name: "Testing",
            skills: [
                {
                    "name": "JUnit",
                    "image": "",
                    "proficiency": 100
                },
                {
                    "name": "Playwright",
                    "image": "",
                    "proficiency": 100
                },
            ]
        },
        {
            name: "Operating Systems",
            skills: [
                {
                    "name": "Windows",
                    "image": "",
                    "proficiency": 100
                },
                {
                    "name": "Linux",
                    "image": "https://www.vectorlogo.zone/logos/linux/linux-ar21~bgwhite.svg",
                    "proficiency": 100
                },
                {
                    "name": "MacOS",
                    "image": "",
                    "proficiency": 100
                },

            ]
        },

        ]
        const skills: { [key: string]: string } = Object.fromEntries(
            skillCategories.flatMap(category =>
              category.skills.map(skill => [skill.name, skill.image])
            )
          );
          
    return (
        <main >
            <Navigation forEmployers={forEmployers} setForEmployers={setForEmployers} />
            <div className="max-w-screen-2xl mx-auto px-1 sm:px-6 md:px-8">
                {forEmployers ? <section id="home" className="min-h-screen flex flex-col items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-2xl sm:text-6xl mb-4">Software Engineer</h1>
                        <p className="text-lg sm:text-xl">Next.js | AWS | JavaScript | Amazon Connect | Custom LLMs</p>
                      
                    </div>
                </section> :
                    <section id="home" className="min-h-screen flex flex-col items-center justify-center">
                        <div className="text-center">
                        <h1 className="text-2xl sm:text-6xl mb-4">Freelance Software Engineer for your Web and AI needs</h1>
                        <p className="text-lg sm:text-xl mt-10">AI | Contact Centers | Automations | Web and Mobile Apps</p>
                        <p className="text-center text-lg sm:text-xl mt-10  rounded-lg">   Free services for my first 3 clients. </p>
                        <button className="bg-white hover:bg-gray-800  mt-10 text-black font-bold py-2 px-4 rounded offer-text">
                            Let's Connect
                        </button>
                        </div>
                      
                          
                       
                       
                    </section>}
               
                <CurrentActivities skills = {skills}/>
                <Recommendations />
                <ProfessionalExperience skills = {skills}/>
               
                
                <Education skills = {skills}/>
                <Skills skillCategories = {skillCategories} forEmployers={forEmployers}/>
                <About />
                <Contact />
            </div>
        </main>
    )
}

