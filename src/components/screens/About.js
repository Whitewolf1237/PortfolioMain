import React from "react";
import Skills from "../utils/Skills";
import "../styles/About.css";
import Experience from "../utils/Experience";
import aboutme from "../../assets/images/aboutme2.png";
import {
    programmingLanguages,
    FullStack,
} from "../skillsimports";

export default function About() {
    return (
        <div className="aboutWrapper">
            <div className="topWrapper">
                <div className="imageWrapper">
                    <img className="aboutImage" src={aboutme}></img>
                </div>

                <div className="expWrapper">
                    <div className="experience">
                        <h1>Hello! I am</h1>
                        <span className="name">Nitin Kumar Rai,</span>
                        <p className="aboutMe">
                            pursuing B.Tech in AIML from GLBITM,
                            Greater Noida.
                            <br />
                            <br />I daily use: <span>.java</span>,{" "}
                            <span>.cpp</span>, <span>.js</span>,{" "}
                            <span>.html</span>, <span>.css</span>,{" "}
                            <span>.java</span>. I have few
                            Frontend Development projects under my hood,
                            details of which you can find here -{" "}
                            <a href="https://github.com/Whitewolf1237">
                                GitHub
                            </a>
                            <br />
                        </p>
                    </div>
                </div>
            </div>
            <div className="bottomWrapper">
                <div className="expWrapper">
                    <h1 className="heading">Experience</h1>
                    <Experience
                        company="Bharat Intern"
                        years="May 2023-Jun 2023"
                        title="Artificial Intelligence Internship"
                        summary={[
                            "Developed a English To Hindi Translator with the help of GoogleTranslator(python) for translating a given english sentence to Hindi.",
                            "Also developed a autocorrect tool with the help of pyspellchecker(python) for correcting a misspelled english sentence.",
                        ]}
                    ></Experience>
                    <Experience
                        company="AICTE(AWS)"
                        years="Sep 2023-Nov 2023"
                        title="Cloud Computing Virtual Internship"
                        summary={[
                            "During the program, I gained valuable insights into cloud computing principles, cloud security, virtualization, networking, and much more. The AWS Academy's expert instructors and comprehensive curriculum provided a solid foundation for understanding AWS technologies, preparing me for the challenges and opportunities that lie ahead in the cloud industry.",
                        ]}
                    ></Experience>
                </div>
                <div style={{ marginTop: 0 }} className="expWrapper">
                    <Experience
                        company="AICTE"
                        years="April 2024-June 2024"
                        title="AI-ML Virtual Internship"
                        summary={[
                            "Throughout my Google AIML virtual internship, I delved into the fascinating realm of artificial intelligence and machine learning. Guided by seasoned mentors and a robust curriculum, I explored cutting-edge technologies, including various AIML libraries. I honed my skills in areas such as creating a AI model, all while contributing to real-world projects. This immersive experience not only enriched my knowledge but also ignited my passion for AI and ML. 🌟🤖",
                        ]}
                    ></Experience>
                </div>
            </div>
            <div className="bottomWrapper">
                <div className="skillsWrapper">
                    <h1 className="heading">Skills</h1>
                    <Skills
                        title="Programming Languages"
                        images={programmingLanguages}
                    ></Skills>
                    <Skills
                        title="Full Stack Devlopment"
                        images={FullStack}
                    ></Skills>
                </div>
            </div>
        </div>
    );
}
