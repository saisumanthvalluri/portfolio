import React from "react";

const SectionHeader = ({
    sectionTag,
    sectionTitle,
    sectionDescription,
}: {
    sectionTag: string;
    sectionTitle: string;
    sectionDescription: string;
}) => {
    return (
        <>
            <div className="flex justify-center">
                <p className="uppercase font-semibold tracking-widest bg-gradient-to-tr from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                    {sectionTag}
                </p>
            </div>
            <h1 className="font-serif text-3xl md:text-5xl text-center mt-6">{sectionTitle}</h1>

            <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
                {sectionDescription}
            </p>
        </>
    );
};

export default SectionHeader;
