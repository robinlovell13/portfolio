"use client"
import Navigation from "../components/Navigation"

import Recommendations from "../components/Recommendations"

import { useState } from 'react';

import Skills from "../components/Skills"


export default function Home() {
    const faqs = [
        { question: 'Are you available for an interesting position?', answer: 'Absolutely! I’m open to exciting opportunities.' },
        { question: "What's your hourly rate?", answer: 'Rates depend on the scope. Contact me for a quote!' },
        { question: 'Do you have experience with <technology X>?', answer: 'Yes, I’ve worked with a wide range of technologies.' },
        { question: 'Where are you located? Do you work remotely?', answer: 'I’m based in Massachusetts and I work remotely.' },
        { question: 'What was this site built with?', answer: 'This site was built with Next.js and Tailwind CSS.' },
        { question: 'Ok, enough about your work, what do you do in your spare time?', answer: 'I enjoy soccer, nature, and learning new skills!' },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };


    return (
        <main className="flex flex-col items-center">
            <div id="container" className="w-7/8 sm:w-5/6 md:w-3/4 lg:w-1/2 flex flex-col items-center">
                <Navigation />
                <section id="home" className="min-h-[calc(100vh-4rem)] w-full flex flex-col justify-center items-center text-center ">
                    <ul>
                        <li>
                            <h1 className="text-5xl lg:text-6xl mt-4 font-bold">Social media, done for you.</h1>
                        </li>
                        <li>
                            <h1 className="text-5xl lg:text-6xl mt-4 font-bold">First month free.</h1>
                        </li>
                    </ul>
                    <p className="text-2xl lg:text-3xl mt-16">Hi, I'm Robin, a Google- and Meta-certified digital marketer who helps small businesses show up consistently online. I make it easy for you to have a strong, active presence on platforms like Instagram and Facebook without lifting a finger.</p>
                    <p className="text-2xl mt-16">Content Creation | Social Media Scheduling | Strategy & Hashtag Optimization | Ad Campaign Setup</p>
                    <a href="#contact" className="bg-accent hover:bg-primary mt-16 text-[--accent-foreground] text-lg font-bold p-4 rounded-lg offer-text inline-block text-center">
                        Contact Me
                    </a>




                </section>
                <section id="examples" className="min-h-[calc(100vh-4rem)] w-full flex justify-center items-center ">
                    <div className="flex flex-col min-h-[100%] w-full lg:flex-row justify-center items-center items-stretch">
                        <div className="flex-1 text-center items-center justify-center min-h-[100%] lg:w-full lg:rounded-3xl bg-secondary px-6 py-12 my-6 lg:m-6 lg:w-3/4">
                            <h1 className="text-xl sm:text-6xl mb-4 font-bold">Posts & templates</h1>
                            <a href="#contact" className="bg-[#E0E0E0] hover:bg-gray-800 mt-10 text-foreground text-xl font-bold py-4 px-8 rounded-lg offer-text inline-block text-center">
                                See more
                            </a>
                        </div>

                    </div>
                </section>
                <section className="min-h-[calc(100vh-4rem)] w-full mt-6 flex flex-col justify-center items-center ">
                <h1 className="text-5xl lg:text-6xl font-bold">FAQs</h1>
                    <dl className="space-y-4 w-full mt-12 divide-y divide-gray-200">
                        {faqs.map((faq, index) => (
                            <div key={index}>
                                <dt>
                                    <button
                                        type="button"
                                        className="flex items-start justify-between w-full text-left text-foreground hover:text-secondary py-4"
                                        onClick={() => toggle(index)}
                                    >
                                        <span className="font-semibold">{faq.question}</span>
                                        <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-45' : 'rotate-0'}`}>
                                            +
                                        </span>
                                    </button>
                                </dt>
                                {openIndex === index && (
                                    <dd className="mt-2 text-gray-600">{faq.answer}</dd>
                                )}
                            </div>
                        ))}
                    </dl>                
                    </section>
                <section id="contact" className="flex flex-col justify-center items-center  w-full min-h-[calc(100vh-4rem)] ">
                    <form
                        action="https://formsubmit.co/mail@robinlovell.com"
                        method="POST"
                        className="w-full bg-background p-6 rounded-xl space-y-4 "
                    >
                        <h2 className="text-2xl font-bold">Get in Touch</h2>

                        <input type="text" name="_honey" style={{ display: 'none' }} />



                        <div>
                            <label className="block text-sm font-medium mb-1" htmlFor="name">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full  rounded-lg p-2"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full  rounded-lg p-2"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                required
                                className="w-full  rounded-lg p-2 resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className=" bg-accent hover:bg-primary mt-10 text-[--accent-foreground] text-lg font-bold p-4 rounded-lg offer-text inline-block text-center"
                        >
                            Send Message
                        </button>
                    </form>
                </section>
                
                <Recommendations />




            </div>
        </main>
    )
}

