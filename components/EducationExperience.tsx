import type React from "react"
import EducationEntry from "./EducationEntry"

interface Education {
    school: string
    major: string
    college: string
    fromDate: string
    toDate: string
    skills: string[]
    projects: Project[]
}

interface Project {
    title: string
    team?: string[]
    description: string,
    link?: string
  }
  

const Education: React.FC = () => {
    const educationExperiences: Education[] = [
        {
            school: "University of Massachusetts Amherst",
            major: "Informatics",
            college: "College of Information and Computer Science",
            fromDate: "September 2018",
            toDate: "May 2021",
            skills: [""],
            projects: [
                {
                    title: "2020 US Election Tweet Analysis",
                    team: ["Alain Duplan", "Harshul Shukla"],
                    description: "- Built an interactive visualization tool with D3, JavaScript, HTML, and CSS that enables users to explore the political leanings of tweets posted in the months before the election. \n\n- Used R to clean and analyze 865 MB data set containing nearly two million tweets. \n\n- Employed principles of effective visualization design to answer the question: “Could tweets be used to predict the election’s outcome?",
                    link: "https://rmlovell.github.io/2020ElectionAnalysis/tweets_map.html"
                },
            ],
        }
    ]

    return (
        <section id="education" className="min-h-screen py-16 px-8">
            <h2 className="text-3xl mb-12 text-center">Education</h2>
            <div className="space-y-12">
                {educationExperiences.map((education, index) => (
                    <EducationEntry key={index} education={education} />
                ))}
            </div>
        </section>
    )
}

export default Education

