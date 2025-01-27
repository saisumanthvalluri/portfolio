import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
const links = [
    {
        title: "Github",
        link: "https://github.com/saisumanthvalluri",
    },
    {
        title: "LinkedIn",
        link: "https://www.linkedin.com/in/v-sai-sumanth/",
    },
    {
        title: "Twitter",
        link: "https://x.com/SaiSumanth_3123",
    },
    {
        title: "YouTube",
        link: "https://www.youtube.com/@vsaisumanth9546",
    },
];

export const Footer = () => {
    return (
        <footer className="relative z-10 overflow-x-clip">
            <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
            <div className="container">
                <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row items-center md:justify-between gap-8">
                    <div className="text-white/40">&copy; 2025. All rights reserved.</div>
                    <nav className="flex flex-col md:flex-row items-center gap-8 z-0">
                        {links.map((link) => (
                            <a
                                href={link.link}
                                key={link.title}
                                target="_blank"
                                className="inline-flex items-center gap-1.5 cursor-pointer">
                                <span className="font-semibold">{link.title}</span>
                                <ArrowUpRightIcon className="size-4" />
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </footer>
    );
};
