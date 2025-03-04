"use client";
import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";
import React, { Fragment, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";

const SectionHeader = ({
    sectionTag,
    sectionTitle,
    sectionDescription,
}: {
    sectionTag: string;
    sectionTitle: string;
    sectionDescription: string;
}) => {
    const sectionsRef = useRef<HTMLDivElement | null>(null);
    const { scope: titleScope, entranceAnimation: titleAimate } = useTextRevealAnimation();
    const { scope: paragraphScope, entranceAnimation: paragraphAimate } = useTextRevealAnimation();

    const inView = useInView(titleScope, {
        once: true,
    });

    useEffect(() => {
        if (inView) {
            titleAimate(0.2).then(() => {
                paragraphAimate(0.1);
            });
        }
    }, [inView, titleAimate, paragraphAimate]);

    return (
        <div ref={sectionsRef}>
            <div className="flex justify-center">
                <p className="uppercase font-semibold tracking-widest bg-gradient-to-tr from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                    {sectionTag}
                </p>
            </div>
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                ref={titleScope}
                className="font-serif text-3xl md:text-5xl text-center mt-6">
                {sectionTitle}
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                ref={paragraphScope}
                className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
                {sectionDescription}
            </motion.p>
        </div>
    );
};

export default SectionHeader;
