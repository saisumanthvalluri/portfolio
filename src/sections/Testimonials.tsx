import Image from "next/image";
import { Fragment } from "react";
import { PortfolioData } from "@/app.config";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";

export const TestimonialsSection = () => {
    return (
        <div className="py-12 lg:py-20">
            <div className="container">
                <SectionHeader
                    sectionTag="happy clients"
                    sectionTitle="What Clients Say about Me"
                    sectionDescription="Don't just take my word for it. See what my clients have to say about my work."
                />
                <div className="mt-16 lg:mt-24 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
                    <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
                        {[...new Array(2)].fill(0).map((_, index) => (
                            <Fragment key={index}>
                                {PortfolioData?.testimonials.map((item) => (
                                    <Card
                                        key={item.name}
                                        className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300">
                                        <div className="flex gap-4 items-center">
                                            <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                                                <Image src={item.avatar} alt="avatar" className="max-h-full" />
                                            </div>
                                            <div className="">
                                                <div className="font-semibold">{item.name}</div>
                                                <div className="text-sm text-white/40">{item.position}</div>
                                            </div>
                                        </div>
                                        <p className="mt-4 md:mt-6 text-sm md:text-base">{item.text}</p>
                                    </Card>
                                ))}
                            </Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
