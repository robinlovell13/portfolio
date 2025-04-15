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
import { useState, useEffect } from "react";
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
                {
                    "name": "Next.js",
                    "image": "https://www.vectorlogo.zone/logos/nextjs/nextjs-ar21~bgwhite.svg",
                    "proficiency": 80
                },
                {
                    "name": "Tailwind CSS",
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
                {
                    "name": "Next.js",
                    "image": "https://www.vectorlogo.zone/logos/nextjs/nextjs-ar21~bgwhite.svg",
                    "proficiency": 80
                },
                {
                    "name": "Tailwind CSS",
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
            <div className="max-w-screen-2xl mx-auto px-1 sm:px-6 md:px-8 ">
                    <section id="home" className="min-h-screen flex justify-center items-center py-24 lg:py-0 px-4 lg:px-0">
                        <div className="flex flex-col lg:flex-row justify-center items-center rounded-3xl bg-muted px-8 lg:px-20 py-14">
                        <div className="text-center w-full lg:w-2/3">
                            <h1 className="text-5xl lg:text-6xl mb-4 font-bold">I'll do your social media for you — first month free.</h1>
                            <p className="text-2xl lg:text-3xl mt-10">Hi, I’m Robin — I'm a Google- and Meta-certified digital marketer and software developer who helps small businesses show up consistently online. I make it easy for you to have a strong, active presence on platforms like Instagram and Facebook without lifting a finger.</p>
                            <a href="#contact" className="bg-accent hover:bg-gray-800 mt-10 text-muted-foreground] text-xl font-bold py-4 px-8 rounded-lg offer-text inline-block text-center">
                            Contact Me
                            </a>
                        </div>
                        <div className="px-8 lg:pl-32 text-left py-14 lg:py-0 w-full lg:w-1/3">
                        <ul className="text-2xl list-disc space-y-10"> 
                            <li>Content Creation: Reels, Posts, Stories</li>
                            <li>Instagram & Facebook Management</li>
                            <li>Social Media Scheduling</li> 
                            <li>Strategy & Hashtag Optimization</li>
                            <li>Ad Campaign Setup</li>
                            </ul>
                        </div> 
                        </div>
                    </section>
                    <section id="examples" className="min-h-screen flex flex-col items-center justify-center ">
                        <div className="text-center  bg-secondary text-secondary-foreground rounded-3xl px-20 py-14">
                            <h1 className="text-xl sm:text-6xl mb-4 font-bold">Posts & templates</h1>
                                <a href="#contact" className="bg-[#E0E0E0] hover:bg-gray-800 mt-10 text-foreground text-xl font-bold py-4 px-8 rounded-lg offer-text inline-block text-center">
                                    See more
                                </a>
                        </div>
                    </section>
                <CurrentActivities skills={skills} />
                <Recommendations />
                <ProfessionalExperience skills={skills} />


                <Education skills={skills} />
                <Skills skillCategories={skillCategories} forEmployers={forEmployers} />
                <About />
                <Contact />
            </div>
        </main>
    )
}

