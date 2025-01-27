"use client";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import NextIcon from "@/assets/icons/next-js.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import mapImage from "@/assets/images/map.png";
import smileMomoji from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const tools = [
    {
        title: "JavaScript",
        iconType: JavascriptIcon,
    },
    {
        title: "HTML5",
        iconType: HtmlIcon,
    },
    {
        title: "CSS3",
        iconType: CssIcon,
    },
    {
        title: "React",
        iconType: ReactIcon,
    },
    {
        title: "Chrome",
        iconType: ChromeIcon,
    },
    {
        title: "Github",
        iconType: GithubIcon,
    },
    {
        title: "Next.js",
        iconType: NextIcon,
    }
];

const hobbies = [
    {
        title: "Painting",
        emoji: "🎨",
        left: "5%",
        top: "5%",
    },
    {
        title: "Photography",
        emoji: "📷",
        left: "50%",
        top: "5%",
    },
    {
        title: "Hiking",
        emoji: "🌲",
        left: "35%",
        top: "40%",
    },
    {
        title: "Gaming",
        emoji: "🎮",
        left: "10%",
        top: "35%",
    },
    {
        title: "Music",
        emoji: "🎶",
        left: "70%",
        top: "45%",
    },
    {
        title: "Fitness",
        emoji: "🏋️‍♀️",
        left: "5%",
        top: "65%",
    },
    {
        title: "Reading",
        emoji: "📚",
        left: "45%",
        top: "70%",
    },
];

export const AboutSection = () => {
    const constraintsTRef = useRef(null);
    return (
        <div className="py-20 lg:py-28">
            <div className="container">
                <SectionHeader
                    sectionTag="about me"
                    sectionTitle="A Glimpse Into My World"
                    sectionDescription="Learn more about who I am, want I do, and what inspires me."
                />
                <div className="mt-20 flex flex-col gap-8">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
                        <Card className="h-[320px] md:col-span-2 lg:col-span-1">
                            <CardHeader title="My Reads" description="Explore the books shaping my perspectives." />
                            <div className="w-40 mx-auto mt-2 md:mt-0">
                                <Image src={bookImage} alt="book" />
                            </div>
                        </Card>

                        <Card className="h-[320px] md:col-span-3 lg:col-span-2">
                            <CardHeader
                                title="My Toolbox"
                                description="Explore the technologies and tools I used to craft exceptional digital experiences."
                                className=""
                            />

                            <ToolboxItems
                                className=""
                                tools={tools}
                                translateClass="animate-move-left [animation-duration:30s]"
                            />
                            <ToolboxItems
                                className="mt-6"
                                tools={tools}
                                translateClass="-translate-x-1/2 animate-move-right [animation-duration:15s]"
                            />
                        </Card>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
                        <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
                            <CardHeader
                                title="Beyond the Code"
                                description="Explore my interests and hobbies beyond the digital realm."
                                className="px-6 py-6"
                            />
                            <div className="relative flex-1" ref={constraintsTRef}>
                                {hobbies.map((hobby) => (
                                    <motion.div
                                        key={hobby.title}
                                        className="inline-flex items-center gap-2 px-6 bg-gradient-to-tr from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                                        style={{
                                            left: hobby.left,
                                            top: hobby.top,
                                        }}
                                        drag
                                        dragConstraints={constraintsTRef}>
                                        <span className="font-medium text-gray-950">{hobby.title}</span>
                                        <span>{hobby.emoji}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </Card>

                        <a
                            href="https://www.google.com/maps/place/17%C2%B026'01.1%22N+78%C2%B026'22.4%22E/@17.43364,78.4369825,17z/data=!3m1!4b1!4m4!3m3!8m2!3d17.43364!4d78.4395574?entry=ttu&g_ep=EgoyMDI1MDEyMS4wIKXMDSoASAFQAw%3D%3D"
                            target="_blank">
                            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1 cursor-pointer">
                                <Image
                                    src={mapImage}
                                    alt="map"
                                    className="w-full h-full object-cover object-left-top"
                                />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:outline-gray-950/30 after:rounded-full">
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-300 to-sky-400 -z-10"></div>
                                    <Image src={smileMomoji} alt="memoji" className="size-20" />
                                </div>
                            </Card>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
