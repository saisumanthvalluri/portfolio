"use client";
import ArrowUpIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { useRef } from "react";
import { motion, useInView } from "motion/react";

export const ContactSection = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(sectionRef, {
        once: true,
        margin: "-150px",
    });
    return (
        <motion.div
            ref={sectionRef}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="py-16 pt-12 lg:py-24 lg:pt-20 relative z-0"
            id="CONTACT">
            <div className="container">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
                    <div
                        className="absolute inset-0 opacity-5 -z-10 pointer-events-none"
                        style={{ backgroundImage: `url(${grainImage.src})` }}></div>
                    <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
                        <div>
                            <h2 className="font-serif text-2xl md:text-3xl">
                                Let&apos;s create something amazing together
                            </h2>
                            <p className="text-sm md:text-base mt-2">
                                Ready to bring your next project to life? Let&apos;s connect and discuss how I can help
                                you achieve your goals.
                            </p>
                        </div>
                        <div>
                            <a href="mailto:vsaisumanth9951@gmail.com">
                                <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 cursor-pointer">
                                    <span className="font-semibold">Contact Me</span>
                                    <ArrowUpIcon className="size-4" />
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
