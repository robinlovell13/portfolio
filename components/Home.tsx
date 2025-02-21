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
import { useState } from "react";

export default function Home() {
    const [forEmployers, setForEmployers] = useState(false);
    return (
        <main >
            <Navigation forEmployers={forEmployers} setForEmployers={setForEmployers} />
            <div className="max-w-screen-xl mx-auto mt-24 sm:mt-0 px-1 sm:px-6 md:px-8">
                {forEmployers ? <section id="home" className="min-h-screen flex flex-col items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl mb-4">Robin Lovell</h1>
                        <p className="text-xl">Software Engineer</p>
                        <p className="text-lg">Next.js | AWS | JavaScript | Amazon Connect | Custom LLMs</p>
                    </div>
                </section> :
                    <section id="home" className="min-h-screen flex flex-col items-center justify-center">
                        <div className="text-center">
                            <h1 className="text-4xl mb-4">Lovell Creations</h1>
                            <p className="text-xl">Web Solutions | Custom LLMs | Software Engineering</p>
                        </div>
                        <a href="#contact" className="text-center text-xl mt-48 underline hover:bg-gray-800 cta-button">
                            Offering <span className="text-green-500">FREE</span> development services to 3 clients! Contact me if interested.
                        </a>
                    </section>}


                <CurrentActivities />
                <ProfessionalExperience />
                <Education />
                <Recommendations />
                <Skills />
                <About />
                <Contact />
            </div>
        </main>
    )
}

