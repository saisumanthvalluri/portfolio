import React, { Fragment } from "react";
import TechIcon from "./TechIcon";
import { twMerge } from "tailwind-merge";

const ToolboxItems = ({
    tools,
    className,
    translateClass,
}: {
    tools: { title: string; iconType: React.ElementType }[];
    className?: string;
    translateClass?: string;
}) => {
    return (
        <div
            className={twMerge(
                "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
                className
            )}>
            <div className={twMerge("flex flex-none py-0.5 gap-6 pr-6", translateClass)}>
                {[...new Array(2)].fill(0).map((_, index) => (
                    <Fragment key={index}>
                        {tools.map((tool) => (
                            <div
                                key={tool.title}
                                className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg">
                                <TechIcon component={tool.iconType} />
                                <span className="font-semibold">{tool.title}</span>
                            </div>
                        ))}
                    </Fragment>
                ))}
            </div>
        </div>
    );
};

export default ToolboxItems;
