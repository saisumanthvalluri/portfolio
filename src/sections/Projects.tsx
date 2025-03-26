// import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
// import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
// import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import ChceckIcon from "@/assets/icons/check-circle.svg";
import ArrowRightIcon from "@/assets/icons/arrow-up-right.svg";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import { PortfolioData } from "@/app.config";

export const ProjectsSection = () => {
    return (
        <section className="pb-16 lg:py-24" id="PROJECTS">
            <div className="container">
                <SectionHeader
                    sectionTag="Real-world Results"
                    sectionTitle="Featured Projects"
                    sectionDescription="See how I transformed concepts into engaging digital experiences."
                />
                <div className="flex flex-col mt-10 md:mt-20 gap-20">
                    {PortfolioData.portfolioProjects.map((project, index) => (
                        <Card
                            key={project.title}
                            className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky top-16"
                            style={{
                                top: `calc(64px + ${index * 40}px)`,
                            }}>
                            <div className="md:grid lg:grid-cols-2 lg:gap-16">
                                <div className="lg:pb-16">
                                    <div className="inline-flex gap-2 font-bold uppercase traking-widest text-sm bg-gradient-to-tr from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                                        <span>{project.company}</span>
                                        <span>&bull;</span>
                                        <span>{project.year}</span>
                                    </div>
                                    <h2 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">{project.title}</h2>
                                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                                        {project.results.map((result) => (
                                            <li key={result.title} className="flex items-center gap-2 text-white/50">
                                                <ChceckIcon className="size-5 md:size-6" />
                                                <span className="text-sm md:text-base">{result.title}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <a href={project.link} target="_blank">
                                        <button className="bg-white text-gray-900 h-12 w-full md:w-auto md:px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                                            <span>Visit Live Site</span>
                                            <ArrowRightIcon className="size-4" />
                                        </button>
                                    </a>
                                </div>
                                <div className="relative">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        className="mt-8 -mb-4 md:mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-t-xl"
                                    />
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
