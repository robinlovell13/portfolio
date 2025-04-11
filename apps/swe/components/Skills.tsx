import type React from "react"
import CategorySkills from "./CategorySkills"
import { useState } from "react"

export interface Skill {
    name: string
    image: string,
    proficiency: number // 0-100
}

export interface SkillCategory {
    name: string
    skills: Skill[]
}

interface SkillsProps {
    forEmployers: boolean;
    skillCategories: SkillCategory[]
}

const Skills: React.FC<SkillsProps> = ({ skillCategories, forEmployers }) => {

    


    return (
        <section id="skills" className="min-h-screen py-16">
            <h2 className="text-4xl mb-12 text-center ">Skills</h2>
            <div className="space-y-12">
                {skillCategories.map((category, index) => (
                    <CategorySkills key={index} category={category} />
                ))}
            </div>
        </section>
    )
}

export default Skills

