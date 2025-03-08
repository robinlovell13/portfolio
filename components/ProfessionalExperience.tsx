import type React from "react"
import ExperienceEntry from "./ExperienceEntry"

interface Experience {
  company: string
  position: string
  fromDate: string
  toDate: string
  description: string
  projects: Project[]
}

interface Project {
  title: string
  team?: string[]
  skills: string[], description: string
  link?: string,
  year?: number
  image?: string
}
export interface Skill {
  name: string
  image: string,
  proficiency: number 
}
const ProfessionalExperience = ({ skills }: { skills: { [key: string]: string } }) => {
  const experiences: Experience[] = [
    {
      company: "Perficient",
      position: "Associate Software Engineer Consultant",
      fromDate: "January 2022",
      toDate: "March 2023",
      description: "Worked directly with Fortune 500 clients to develop technical solutions in an Agile environment",
      projects: [
        {
          title: "Amazon Connect Disaster Recovery Tool",
          skills: ["JavaScript", "AWS", "Git", "Jira", "Agile Scrum",], description: "- Engineered a scalable, cloud-native disaster recovery solution for Amazon Connect cloud contact centers, generating approximately $2-5 million in revenue and averting potential client outages. \n\n- Made key technical decisions, rigorously tested and resolved critical bugs, and refactored to decrease runtime and complexity by 10X, leading to project success. \n\n- Conducted daily Scrum meetings with a cross-functional development team and client, accurately scoping work, communicating progress, and adapting to client needs and evolving project demands.",
          year: 2022
        },
        {
          title: "Multi-channel Messaging Application Proof of Concept",
          skills: ["Flutter", "Dart", "GraphQL", "AWS",  "Twilio", "WebSockets", "Microsoft Teams API", "Git", "Azure DevOps", "Agile Scrum",], description: "- Developed proof of concept to demonstrate secure, multi-channel messaging functionality between administrators, financial advisors, and clients. \n\n- Rapidly upskilled in GraphQL and AWS AppSync to develop data models and achieve real-time data sync, replacing WebSockets; debugged the user interface using Flutter and Dart, and integrated MS Teams, meeting key project milestones. \n\n- Presented live demos to highlight features and value to stakeholders.",
          year: 2023
        },
        {
          title: "IVR-to-Flowchart Tool",
          skills: ["JavaScript", "Mermaid Charting Tool"], description: "- Created a tool using JavaScript and Mermaid to transform complex contact center workflows into clear, visually distinct flowcharts. \n\n- Enhanced client understanding and interaction with these flows and reduced labor required for generating project documentation. \n\n- Authored an in-depth blog post on the tool, showcasing the company's innovative services and driving client acquisition.",
          link: "https://blogs.perficient.com/2023/03/07/ivr-to-flowchart-tool/",
          image: "/images/IVR-to-Flowchart.PNG",
          year: 2023
        },

      ],
    },
    {
      company: "Common Crow",
      position: "Data Manager and Web Developer",
      fromDate: "February 2024",
      toDate: "Present",
      description: "- Manage inventory and sales data utilizing Excel and ECRS Catapult, maintaining accuracy and efficiency in tracking product movements and sales trends. \n\n- Document business processes and conduct training sessions to facilitate adoption of processes. \n\n- Develop company website according to owners' style and feature preferences and synchronize content with external social media and job postings.",
      projects: [
        {
          title: "Common Crow Website",
          skills: ["Weebly", "Photoshop", "CSS"],
          description: "Develop and maintain company website",
          link: "http://www.commoncrow.com/",
          image: "/images/commoncrow.PNG",
          year: 2025
        }
      ]

    },

  ]

  return (
    <section id="professional-experience" className="min-h-screen py-16">
      <h2 className="text-4xl mb-12 text-center">Experience</h2>
      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <ExperienceEntry key={index} experience={experience} skills = {skills} />
        ))}
      </div>
    </section>
  )
}

export default ProfessionalExperience

