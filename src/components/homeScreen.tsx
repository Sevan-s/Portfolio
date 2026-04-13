import { useEffect, useRef, useState } from "react"
import Me from '../assets/images/sev.jpg'
import { SocialNetworkButton } from "./buttons/SocialNetworkButton"
import { FaLinkedin, FaGithub, FaEnvelope, FaDiscord, FaJs, FaReact, FaNodeJs, FaFigma, FaCss3Alt, FaDocker, FaGitAlt, FaFilePdf } from "react-icons/fa";
import { SiMalt, SiPostgresql, SiStrapi, SiTailwindcss } from "react-icons/si";
import { ProjectSection } from "./card/projectcard";
import { ReactTyped } from "react-typed";
import { FaHtml5 } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { FaGolang } from "react-icons/fa6";
import { FadeSection } from "../utils/hook/hook";

interface IsnInformation {
    image: any,
    title: string,
    link: string
}

export function HomeScreen() {
    const [showTitle, setShowTitle] = useState<boolean>(false)
    const [showTyped, setShowTyped] = useState(false);




    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowTitle(true)
        }, 500);
        return () => clearTimeout(timeout);

    }, [])

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowTyped(true);
        }, 800);
        return () => clearTimeout(timeout);

    }, [])

    return (
        <div className="w-full flex flex-col lg:h-screen min-h-screen overflow-y-scroll ">
            <section className="lg:h-screen flex items-center justify-center">
                <FadeSection>
                    <HomePageFirstSection
                        showTyped={showTyped}
                        showTitle={showTitle}
                    />
                </FadeSection>
            </section>
            <section className=" flex items-center bg-secondBgColor justify-center text-white text-4xl">
                <FadeSection>
                    <div className="h-screen w-screen">
                        <SkillsSection />
                    </div>
                </FadeSection>
            </section>
            <section className=" flex items-center justify-center text-white text-4xl">
                <FadeSection>
                    <ProjectSection />
                </FadeSection>
            </section>
        </div>
    )
}

function HomePageFirstSection({ showTyped, showTitle }: { showTyped: boolean, showTitle: boolean}) {
    const socialNetworkInformation = [
        { image: FaLinkedin, title: "Linkedin", link: "https://www.linkedin.com/in/sevan-sarikaya/", download: false },
        { image: FaGithub, title: "Github", link: "https://github.com/Sevan-s/", download: false },
        { image: FaEnvelope, title: "sevan.sarikaya@gmail.com", link: "mailto:sevan.sarikaya@gmail.com", download: false },
        { image: SiMalt, title: "Malt", link: "https://www.malt.fr/profile/sarikayasevan", download: false },
        { image: FaDiscord, title: "Discord", link: "https://discord.com/users/yushinzo", download: false },
        { image: FaFilePdf, title: "CV", link: "/cv_sevan_sarikaya.pdf", download: true },
    ]

    return (
        <div className="flex flex-col justify-center w-full lg:h-screen overflow-y-auto mt-5">
            <div className="flex flex-row flex-1/3"></div>
            <div className="flex flex-col-reverse items-center gap-10 md:flex-row flex-1/3">
                <div className={`flex flex-col justify-center text-3xl ${showTitle === false ? 'opacity-0' : 'opacity-100'} transition-all transition-discrete duration-700 md:w-1/2 flex-1/2 
                lg:pl-40 
                md:pl-20  
                pl-5
                pr-5
                `}>
                    <p>Bonjour, je m'appelle</p>
                    <p className="text-6xl">Sevan Sarikaya</p>
                    <p className="mt-2">et je suis <span className="text-animatedText ">
                        {showTyped && (
                            <ReactTyped
                                strings={["développeur Full stack", "développeur web", "développeur mobile"]}
                                typeSpeed={30}
                                backSpeed={50}
                                className="text-[#3480c7]"
                                loop
                            />
                        )}
                    </span>
                    </p>
                    <br />
                    <p className="text-lg">Spécialisé en React, Node.js et React Native, je crée des applications web et mobiles modernes, performantes et adaptées aux besoins des utilisateurs.</p>
                    <br />
                    <div className="flex flex-row flex-wrap gap-2 w-[100%]">
                        {socialNetworkInformation.map((item, index) => (
                            <div
                                key={index}
                                className="fade-in-left"
                                style={{ animationDelay: `${1 + index * 0.25}s` }}
                            >
                                <SocialNetworkButton
                                    image={item.image}
                                    title={item.title}
                                    link={item.link}
                                    download={item.download}
                                />
                            </div>

                        ))}
                    </div>
                </div>
                <div className={`flex flex-col justify-center items-center w-3/5 ml-10 md:w-1/2 flex-1/2`}>
                    <div className="xl:w-1/2 overflow-hidden rounded-full aspect-square mr-10" >
                        <img
                            src={Me}
                            className="w-full h-full object-cover scale-300 origin-[10%_15%] opacity-0 animate-zoom-out"
                            style={{ animationDelay: '2s' }}
                            alt="Sarikaya Sevan"
                        />
                    </div>
                </div>
            </div>
            <div className=" flex items-end flex-1/3 pb-5 mt-5 ">
                <div className="flex flex-row justify-evenly w-screen mx-2">
                    <p className="text-2xl sm:w-100 w-60 flex flex-wrap mx-2 flex-row items-end font-bold gap-1 justify-center">3+
                        <span className="text-[14px] text-lg font-normal text-center">
                            années d'expérience
                        </span>
                    </p>
                    <div className="w-px h-16 sm:h-10 bg-gray-300 self-end" />
                    <p className="text-2xl sm:w-100 w-60 flex-wrap mx-2 flex flex-row items-end font-bold gap-1 justify-center">10+
                        <span className="text-[14px] text-lg font-normal text-center">
                            projets réalisés
                        </span>
                    </p>
                    <div className="w-px h-16 sm:h-10 bg-gray-300 self-end" />
                    <p className="text-2xl sm:w-100 w-60 flex flex-wrap mx-2 flex-row items-end font-bold gap-1 justify-center">Stack :
                        <span className="text-[14px] text-lg font-normal text-center">
                            React, Node.js, Go, PostgreSQL, TypeScript
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export function SkillsSection() {
    return (
        <div className="sm:pt-20 w-full h-full flex flex-col">
            <div className="mt-20 flex flex-1/6 justify-center ">
                <p>Skills</p>
            </div>
            <div className="mt-20 flex flex-1/3 flex-wrap gap-x-12 gap-y-12 flex-row justify-evenly items-center lg:text-lg xl:text-xl md:text-md text-sm mx-2 s:mx-6 ls:mx-26 xxs:mx-16 xs:mx-20">
                <div className="flex flex-col gap-4 h-56">
                    <p className="font-bold mb-5">
                        Front-end
                    </p>
                    <div className="flex flex-row gap-1 items-center">
                        <FaReact />
                        <p>React</p>
                    </div>

                    <div className="flex flex-row gap-1 items-center">
                        <FaJs />
                        <p>Javascript</p>
                    </div>
                    <div className="flex flex-row gap-1 items-center">
                        <BiLogoTypescript />
                        <p>Typescript</p>
                    </div>
                    <div className="flex flex-row gap-1 items-center">
                        <FaHtml5 />
                        <p>HTML</p>
                    </div>

                </div>
                <div className="flex flex-col gap-4 h-56">
                    <p className=" font-bold mb-5">
                        Back-end
                    </p>
                    <div className="flex flex-row gap-2 items-center">
                        <FaNodeJs />
                        <p>Express</p>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <FaGolang />
                        <p>Go</p>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <SiPostgresql />
                        <p>PostgreSQL</p>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <SiStrapi />
                        <p>Strapi</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4  h-56">
                    <p className=" font-bold mb-5">
                        Design
                    </p>
                    <div className="flex flex-row gap-2 items-center">
                        <FaFigma />
                        <p>Figma</p>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <SiTailwindcss />
                        <p>Tailwind</p>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <FaCss3Alt />
                        <p>CSS</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4 h-56">
                    <p className="font-bold mb-5">
                        Autres
                    </p>
                    <div className="flex flex-row gap-2 items-center">
                        <FaGitAlt />
                        <p>Git / Github</p>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <FaDocker />
                        <p>Docker</p>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <p>CI/CD</p>
                    </div>
                </div>
            </div>
            <div className="mt-20 flex flex-1/3">
            </div>
        </div>
    )
}