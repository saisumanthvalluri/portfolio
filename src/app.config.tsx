import chatSphere from "@/assets/images/Chat-Sphere-home.jpg";
import TastyKitchens from "@/assets/images/TastyKitchens.png";
import NxtWatchApp from "@/assets/images/NxtWatch-app.png";
import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import TypeScript from "@/assets/icons/typescript.svg";
import Angular from "@/assets/icons/angular.svg";
import Node from "@/assets/icons/node.svg";
import Express from "@/assets/icons/express.svg";
import Figma from "@/assets/icons/figma.svg";
import Jira from "@/assets/icons/jira.svg";
import Tailwind from "@/assets/icons/tailwing.svg";
import MongoDB from "@/assets/icons/mongodb.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ReduxIcon from "@/assets/icons/redux.svg";
import VercelIcon from "@/assets/icons/vercel.svg";
import NextIcon from "@/assets/icons/next-js.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import BitbucketIcon from "@/assets/icons/bitbucket.svg";

export const PortfolioData = {
    portfolioProjects: [
        {
            company: "INFINITY LEARN",
            year: "2022",
            title: "Chat Sphere",
            results: [
                { title: "Real-time chatting with friends" },
                { title: "Share images, files, and media" },
                { title: "Friend requests and blocking options" },
                { title: "Interactive profiles with animations" },
            ],
            link: "https://chat-sphere-ochre.vercel.app/signin",
            image: chatSphere,
        },
        {
            company: "NXT WAVE",
            year: "2021",
            title: "Tasty Kitchens",
            results: [
                { title: "Seamless restaurant and food searches" },
                { title: "Sophisticated rating and filters" },
                { title: "User-friendly cart functionality" },
                { title: "Secure login/logout for users" },
            ],
            link: "https://tasty-kitchens-app.web.app/login",
            image: TastyKitchens,
        },
        {
            company: "NXT WAVE",
            year: "2023",
            title: "NXTWatch (YouTube)",
            results: [
                { title: "User authentication and personalization" },
                { title: "Toggle between Dark/Light modes" },
                { title: "Save and like videos easily" },
                { title: "Username: rahul, Password: rahul@2021" },
            ],
            link: "https://nwatchsumanth.ccbp.tech/login",
            image: NxtWatchApp,
        },
    ],

    tapeWords: [
        "Experience",
        "Innovation",
        "Creativity",
        "Problem-solving",
        "Collaboration",
        "Adaptability",
        "Leadership",
        "Communication",
        "Teamwork",
        "Problem-solving",
    ],

    testimonials: [
        {
            name: "Alex Turner",
            position: "Marketing Manager @ TechStartups",
            text: "Sumanth was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
            avatar: memojiAvatar1,
        },
        {
            name: "Olivia Green",
            position: "Head of Design @ GreenLeaf",
            text: "Working with Sumanth was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
            avatar: memojiAvatar2,
        },
        {
            name: "Daniel White",
            position: "CEO @ InnovateCo",
            text: "Sumanth's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
            avatar: memojiAvatar3,
        },
        {
            name: "Emily Carter",
            position: "Product Manager @ GlobalTech",
            text: "Sumanth is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
            avatar: memojiAvatar4,
        },
        {
            name: "Michael Brown",
            position: "Director of IT @ MegaCorp",
            text: "Sumanth's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
            avatar: memojiAvatar5,
        },
    ],

    techSkills: [
        {
            title: "TypeScript",
            iconType: TypeScript,
        },
        {
            title: "JavaScript",
            iconType: JavascriptIcon,
        },
        {
            title: "Next.js",
            iconType: NextIcon,
        },
        {
            title: "React.js",
            iconType: ReactIcon,
        },
        {
            title: "Redux",
            iconType: ReduxIcon,
        },
        {
            title: "Node",
            iconType: Node,
        },
        {
            title: "Express",
            iconType: Express,
        },
        {
            title: "AngularJs",
            iconType: Angular,
        },
        {
            title: "MongoDB",
            iconType: MongoDB,
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
            title: "Tailwind",
            iconType: Tailwind,
        },
        {
            title: "Figma",
            iconType: Figma,
        },

        {
            title: "Jira",
            iconType: Jira,
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
            title: "Bitbucket",
            iconType: BitbucketIcon,
        },
        {
            title: "Vercel",
            iconType: VercelIcon,
        },
    ],

    hobbies: [
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
    ],
    footerLinks: [
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
    ],
};
