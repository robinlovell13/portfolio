"use client"
import Navigation from "../components/Navigation"



import { useState } from 'react';

import Skills from "../components/Skills"


export default function Home() {
    const faqs = [
        { question: 'What are your qualifications?', answer: "I am in the process of obtaining Social Media Marketing certifications from Google and Meta and have a strong background in tech -- a bachelor's degree and two years of industry experience. I am now expanding my skills to include social media management." },
        { question: 'Do you also offer website design + development services?', answer: "Absolutely! I'm excited to bring my extensive experience in web design + development to your business." },
        { question: "What's your hourly rate?", answer: 'First 3 months of social media management are free. After that, an average of ~$25/hr, depending on scope.' },
        { question: "Why are you offering free services? What's the catch?", answer: "I am looking to gain valuable experience as a freelancer! My only requirement is that you leave a review if you're happy with my work." },
        { question: 'Where are you located? Do you work remotely?', answer: 'I’m based in Massachusetts and work remotely.' },
        { question: 'What was this site built with?', answer: 'This site was built with Next.js and Tailwind CSS.' },
        { question: 'Ok, enough about your work, what do you do in your spare time?', answer: 'I love training in jiu-jitsu, trail running, and reading about history!' },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };


    return (
        <main className="flex flex-col items-center">
            
            <div id="container" className="w-full px-4 sm:px-0 sm:w-5/6 md:w-3/4 lg:w-3/4 xl:w-2/3 mt-4 flex flex-col items-start">
            <div className="flex grid grid-rows-[auto_1fr_auto] lg:grid-cols-[auto_1fr_auto] items-center  lg:space-x-6">
                      


                        <ul className="flex flex-col lg:flex-row flex-1 lg:items-center justify-start lg:justify-center lg:space-x-6 ">
                        <li className="text-center flex lg:items-center justify-start lg:justify-center">
                        <a href="https://www.robinlovell.com" className="flex justify-start text-3xl mb-4 lg:mb-0">
                            Robin Lovell
                        </a>

                            </li>
                            <li className="text-center flex lg:items-center justify-start lg:justify-center">
                                <a href="tel:+14138131087" className="hover:text-secondary flex items-center justify-start lg:justify-center text-left lg:text-center space-x-2 w-full">
                                    <svg className="w-4 h-4 opacity-40 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" height="16" width="16"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                    <span className="flex-shrink-0">+1 413 813 1087</span>
                                </a>
                            </li>
                            <li className="text-center flex lg:items-center justify-start lg:justify-center">

                                <a href="mailto:mail@robinlovell.com" className="hover:text-secondary flex items-center justify-start lg:justify-center text-left lg:text-center space-x-2 w-full" >
                                    <svg className="w-4 h-4  opacity-40 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" height="16" width="16"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                    <span className="flex-shrink-0">mail@robinlovell.com</span>
                                </a>
                            </li>

                            {/* <li>
          <a href="/resume.pdf" className="hover:text-secondary">
            Resume
          </a>
        </li> */}

                            <li className="text-center flex lg:items-center justify-start lg:justify-center">
                                <a
                                    href="https://www.linkedin.com/in/robinlovell-12"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-foreground hover:text-secondary flex items-center justify-start lg:justify-center text-left lg:text-center   w-full"
                                >
                                    <svg className="inline-block w-4 h-3 mr-3 -mt-1 opacity-40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path></svg>
                                    <span className="flex-shrink-0">LinkedIn</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                <section id="home" className="lg:min-h-[calc(100vh-4rem)] mt-4 sm:mt-16 w-full flex flex-col justify-center items-start text-left ">
                   

                    <ul className="">
                        <li>
                            <h1 className="text-3xl sm:text-5xl  md:text-6xl mt-2 sm:mt-4 font-bold">Social media, done for you.</h1>
                        </li>
                        <li>
                            <h1 className="text-3xl sm:text-5xl  md:text-6xl mt-2 sm:mt-4 font-bold">First 3 months free.</h1>
                        </li>
                    </ul>
                    <p className="text:xl sm:text-2xl mt-6 sm:mt-16">Content Creation | Social Media Scheduling | Strategy & Hashtag Optimization | Ad Campaign Setup</p>
                    <p className="text:xl sm:text-2xl lg:text-3xl mt-6 sm:mt-16">Hi, I'm Robin, a Google- and Meta-certified digital marketer who helps small businesses show up consistently online. I make it easy for you to have a strong, active presence on platforms like Instagram and Facebook without lifting a finger.</p>
                    
                    <a href="#contact" className="bg-accent hover:bg-primary mt-6 sm:mt-16 text-[--accent-foreground] text-md sm:text-lg font-bold p-3 sm:p-4 rounded-lg offer-text inline-block text-center">
                        Contact Me
                    </a>




                </section>
                {/* <section id="examples" className="min-h-[calc(100vh-4rem)] w-full flex justify-center items-center ">
                    <div className="flex flex-col min-h-[100%] w-full lg:flex-row justify-center items-center items-stretch">
                        <div className="flex-1 text-center items-center justify-center min-h-[100%] lg:w-full lg:rounded-3xl bg-secondary px-6 py-12 my-6 lg:m-6 lg:w-3/4">
                            <h1 className="text-xl sm:text-6xl mb-4 font-bold">Posts & templates</h1>
                            <a href="#contact" className="bg-[#E0E0E0] hover:bg-gray-800 mt-10 text-foreground text-xl font-bold py-4 px-8 rounded-lg offer-text inline-block text-center">
                                See more
                            </a>
                        </div>

                    </div>
                </section> */}
                <section className="min-h-[calc(100vh-4rem)] w-full mt-24 flex flex-col justify-center  ">
                    <h1 className="text-3xl sm:text-5xl  md:text-6xl font-bold">FAQs</h1>
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
                <section id="contact" className="flex flex-col justify-center items-center w-full mt-24 sm:w-4/5 md:w-3/4 lg:w-1/2 min-h-[calc(100vh-4rem)] ">
                    <form
                        action="https://formsubmit.co/mail@robinlovell.com"
                        method="POST"
                        className="w-full bg-background  rounded-xl space-y-4 "
                    >
                        <h2 className="text-3xl sm:text-5xl  md:text-6xl font-bold mb-12">Get in Touch</h2>

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
                            className="bg-accent hover:bg-primary mt-6 sm:mt-16 text-[--accent-foreground] text-md sm:text-lg font-bold p-3 sm:p-4 rounded-lg offer-text inline-block text-center"
                        >
                            Send Message
                        </button>
                    </form>
                </section>






            </div>
        </main>
    )
}

