import React from "react";

const TechIcon = ({ component }: { component: React.ElementType }) => {
    const Component = component;
    return (
        <>
            <Component className="size-10 fill-[url(#techIconGradient)]" />
            <svg className="size-0 absolute">
                <linearGradient id="techIconGradient">
                    <stop offset="0%" stopColor="rgb(110 231 183)" />
                    <stop offset="100%" stopColor="rgb(56 189 248)" />
                </linearGradient>
            </svg>
        </>
    );
};

export default TechIcon;
