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
  description: string
}

const ProfessionalExperience: React.FC = () => {
  const experiences: Experience[] = [
    {
      company: "Common Crow",
      position: "Data Manager and Web Developer",
      fromDate: "February 2024",
      toDate: "Present",
      description: "- Manage inventory and sales data utilizing Excel and ECRS Catapult, maintaining accuracy and efficiency in tracking product movements and sales trends. - Document business processes and conduct training sessions to facilitate adoption of processes. - Develop company website according to owners' style and feature preferences and synchronize content with external social media and job postings.",
      projects: [
        {
          title: "Common Crow Website",
          description: "Develop and maintain company website",
        }
      ]
    },
    {
      company: "Perficient",
      position: "Associate Software Engineer Consultant",
      fromDate: "January 2022",
      toDate: "March 2023",
      description: "Worked directly with Fortune 500 clients in Agile environment to develop technological solutions to business needs",
      projects: [
        {
          title: "Amazon Connect Disaster Recovery Tool",
          description: "● Engineered a scalable, cloud-native disaster recovery solution for Amazon Connect cloud contact centers, generating approximately $2-5 million in revenue and averting potential client outages. ● Made key technical decisions, rigorously tested and resolved critical bugs, and refactored to decrease runtime and complexity by 10X, leading to project success. ● Conducted daily Scrum meetings with a cross-functional development team and client, accurately scoping work, communicating progress, and adapting to client needs and evolving project demands.",
        },
        {
          title: "Multi-channel Messaging Application Proof of Concept",
          description: "● Developed proof of concept to demonstrate secure, multi-channel messaging functionality between administrators, financial advisors, and clients. ● Rapidly upskilled in GraphQL and AWS AppSync to develop data models and achieve real-time data sync, replacing WebSockets; debugged the user interface using Flutter and Dart, and integrated MS Teams, meeting key project milestones. ● Presented live demos to highlight features and value to stakeholders.",
        },
        {
          title: "IVR-to-Flowchart Tool",
          description: "● Created a tool using JavaScript and Mermaid to transform complex contact center workflows into clear, visually distinct flowcharts. ● Enhanced client understanding and interaction with these flows and reduced labor required for generating project documentation. ● Authored an in-depth blog post on the tool, showcasing the company's innovative services and driving client acquisition.",
        },
      ],
    }
  ]

  return (
    <section id="professional-experience" className="min-h-screen py-16 px-8">
      <h2 className="text-3xl mb-12 text-center">Professional Experience</h2>
      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <ExperienceEntry key={index} experience={experience} />
        ))}
      </div>
    </section>
  )
}

export default ProfessionalExperience

