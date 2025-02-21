import type React from "react" // Added import for React

interface Recommendation {
    name: string
    relation: string,
    position: string,
    message: string,
    company: string
}

const Recommendations = () => {
    const Recommendations: Recommendation[] = [
        {
            name: "Alberto Ramirez",
            message: "\"I had the pleasure of working with Robin during his time as an Associate Technical Consultant, and he was truly an invaluable team member. Robin has a knack for solving tough problems, picking up new skills quickly, and building great working relationships with clients and colleagues alike.\n\nOne moment that really stood out was his work on a disaster recovery project for a cloud-based contact center. Robin tackled a complex timeout issue by streamlining user hierarchies, which significantly reduced runtime and complexity. His expertise in AWS, JavaScript, and Git played a huge role in the project’s success, delivering real value to the client and avoiding potential outages.\n\nIn another project—a proof-of-concept for a multi-channel financial services messaging app—Robin stepped into unfamiliar territory, mastering Flutter, Dart, and GraphQL in no time. He didn’t just learn the tools; he applied them effectively, building real-time data syncing, debugging interfaces, and integrating external systems, all while hitting key milestones.\n\nWhat really stood out about Robin, though, was his ability to communicate and work with others. Whether it was explaining timelines to clients, updating the team on progress, or helping scope out work, he made sure everyone was on the same page. He was easy to work with, super reliable, and always ready to step up when needed.\n\nRobin’s mix of technical skills, eagerness to learn, and ability to connect with people make him a huge asset to any team. I’d highly recommend him for any role that requires problem-solving, collaboration, and a can-do attitude.\"",
            relation: "Alberto managed Robin directly",
            position: "☁️ Cloud Architect",
            company: "Perficient"
        },
        {
            name: "Jeremy Streeter",
            message: "\"Robin joined our team through Perficient's campus hire program. His engineering ability was obvious during the interview process, and he quickly showed up technically. Robin is technically savvy, and contributed to interesting and complex solutions with succinct aptitude. Robin went above and beyond during his time with the team, and even wrote an article, available here: https://blogs.perficient.com/2023/03/07/ivr-to-flowchart-tool/\n\nI highly recommend Robin for any software development roles and anyone looking to have someone join you who will offer value to your engineering practice from day one.\"",
            relation: "Jeremy managed Robin directly",
            position: "Senior Technology Leader",
            company: "Perficient"
        },
    ]
    return (
        <section id = "recommendations">
            <h2 className="text-3xl mb-12 text-center">Recommendations</h2>
            <div className="bg-transparent rounded-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {Recommendations.map((reference, index) => (
                        <div key={index} className="bg-transparent border-2 border-white p-4 rounded hover:bg-gray-800 hover:border-gray-300">
                            <h3 className="text-xl mb-2">{reference.name}</h3>
                            <h4 className="text-md mb-2">{reference.position}</h4>
                            <h4 className="text-md mb-2">{reference.relation} at {reference.company}</h4>
                            <p className="text-sm mb-2 whitespace-pre-line">{reference.message}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Recommendations

