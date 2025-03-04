"use client";
import memojiImage from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import Image from "next/image";
import HeroOrbit from "@/components/heroOrbit";
import { motion } from "motion/react";
import { useEffect } from "react";
import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";

export const HeroSection = () => {
    const { scope: titleScope, entranceAnimation: titleAimate } = useTextRevealAnimation();
    const { scope: paragraphScope, entranceAnimation: paragraphAimate } = useTextRevealAnimation();

    useEffect(() => {
        titleAimate(0.2).then(() => {
            paragraphAimate(0.1);
        });
    }, [titleAimate, paragraphAimate]);

    return (
        <div className="py-32 md:py-48 lg:py-32 relative z-0 overflow-x-clip" id="HOME">
            <div className="absolute inset-0 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
                <div
                    className="absolute inset-0 -z-30 opacity-5"
                    style={{ backgroundImage: `url(${grainImage.src})` }}></div>
                <div className="hero-ring size-[620px]"></div>
                <div className="hero-ring size-[820px]"></div>
                <div className="hero-ring size-[1020px]"></div>
                <div className="hero-ring size-[1220px]"></div>
                <HeroOrbit size={430} rotation={-14} orbitRotate orbitSpeed="30s" spin spinSpeed="6s">
                    <SparkleIcon className="size-8 text-emerald-300/20" />
                </HeroOrbit>
                <HeroOrbit size={440} rotation={79} orbitRotate orbitSpeed="32s" spin spinSpeed="6s">
                    <SparkleIcon className="size-5 text-emerald-300/20" />
                </HeroOrbit>
                <HeroOrbit size={800} rotation={-72} orbitRotate orbitSpeed="34s" spin spinSpeed="6s">
                    <StarIcon className="size-28 text-emerald-300" />
                </HeroOrbit>
                <HeroOrbit size={520} rotation={-41} orbitRotate orbitSpeed="36s">
                    <div className="size-2 rounded-full bg-emerald-300/20" />
                </HeroOrbit>
                <HeroOrbit size={530} rotation={178} orbitRotate orbitSpeed="38s" spin spinSpeed="6s">
                    <SparkleIcon className="size-10 text-emerald-300/20" />
                </HeroOrbit>
                <HeroOrbit size={550} rotation={20} orbitRotate orbitSpeed="40s" spin spinSpeed="6s">
                    <StarIcon className="size-12 text-emerald-300" />
                </HeroOrbit>
                <HeroOrbit size={590} rotation={98} orbitRotate orbitSpeed="42s" spin spinSpeed="6s">
                    <StarIcon className="size-8 text-emerald-300" />
                </HeroOrbit>
                <HeroOrbit size={650} rotation={-5} orbitRotate orbitSpeed="44s">
                    <div className="size-2 rounded-full bg-emerald-300/20" />
                </HeroOrbit>
                <HeroOrbit size={710} rotation={144} orbitRotate orbitSpeed="46s" spin spinSpeed="6s">
                    <SparkleIcon className="size-14 text-emerald-300/20" />
                </HeroOrbit>
                <HeroOrbit size={720} rotation={85} orbitRotate orbitSpeed="48s">
                    <div className="size-3 rounded-full bg-emerald-300/20" />
                </HeroOrbit>
            </div>
            <div className="container">
                <div className="flex flex-col items-center">
                    <Image src={memojiImage} className="size-[100px]" alt="person peeking from laptop" />
                    <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-md">
                        <div className="bg-green-500 size-2.5 rounded-full">
                            <div className="bg-green-500 size-2.5 rounded-full animate-spin-large"></div>
                        </div>
                        <div className="text-sm font-medium">Available for new projects</div>
                    </div>
                </div>
                <div className="max-w-lg mx-auto">
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        ref={titleScope}
                        className="text-3xl md:text-5xl font-serif text-center mt-8 tracking-wide">
                        Building Exceptional User Experiences
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        ref={paragraphScope}
                        className="mt-4 text-center text-white/60 md:text-lg">
                        I specialize in transforming designs into functional, high-performing web applications.
                        Let&apos;s discuss your next project.
                    </motion.p>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: "100%" }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        delay: 3,
                    }}>
                    <div className="flex flex-col md:flex-row md:justify-center gap-4 items-center mt-8">
                        <a href="#PROJECTS">
                            <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
                                <span className="font-semibold">Explore My Work</span>
                                <ArrowDown className="size-4" />
                            </button>
                        </a>
                        <a href="mailto:vsaisumanth9951@gmail.com">
                            <button className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 h-12 rounded-xl">
                                <span>👋</span>
                                <span className="font-semibold">Let&apos;s Connect</span>
                            </button>
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
