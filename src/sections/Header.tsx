"use client";

import { useEffect, useState } from "react";

export const Header = () => {
    const [tab, setTab] = useState<any>("#HOME");
    const hash = window.location.hash;
    console.log(hash);

    useEffect(() => {
        !hash ? setTab("#HOME") : setTab(hash);
    }, [hash]);

    return (
        <div className="flex justify-center items-center fixed left-1/2 -translate-x-1/2 top-3 z-10">
            <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
                <a
                    href="#HOME"
                    onClick={() => setTab("#HOME")}
                    className={`nav-item ${
                        tab === "#HOME" && "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
                    }`}>
                    Home
                </a>
                <a
                    href="#PROJECTS"
                    onClick={() => setTab("#PROJECTS")}
                    className={`nav-item ${
                        tab === "#PROJECTS" && "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
                    }`}>
                    Projects
                </a>
                <a
                    href="#ABOUT"
                    onClick={() => setTab("#ABOUT")}
                    className={`nav-item ${
                        tab === "#ABOUT" && "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
                    }`}>
                    About
                </a>
                <a
                    href="#CONTACT"
                    onClick={() => setTab("#CONTACT")}
                    className={`nav-item ${
                        tab === "#CONTACT" && "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
                    }`}>
                    Contact
                </a>
            </nav>
        </div>
    );
};
