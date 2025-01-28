import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import favIcon from '@/assets/images/memoji-computer.png'

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({ subsets: ["latin"], variable: "--font-serif", weight: ["400"] });

export const metadata: Metadata = {
    title: "Sai Sumanth | Frontend Developer Portfolio",
    description:
        "Discover Sai Sumanth's innovative projects, advanced technical skills, and exceptional testimonials. Let's build the future together!",
    icons: {
        icon: favIcon.src,
        apple: "/apple-touch-icon.png",
        shortcut: "/favicon-32x32.png",
    },
    keywords: [
        "Sai Sumanth",
        "Frontend Developer",
        "Portfolio",
        "React.js",
        "Next.js",
        "Tailwind",
        "JavaScript",
        "TypeScript",
        "Projects",
        "Testimonials",
        "Skills",
    ],
    metadataBase: new URL("https://sai-sumanth-portfolio.vercel.app/"),
    alternates: {
        canonical: "https://sai-sumanth-portfolio.vercel.app/",
    },
    openGraph: {
        title: "Sai Sumanth | Frontend Developer Portfolio",
        description:
            "Explore Sai Sumanth's portfolio featuring cutting-edge projects, technical skills, and achievements in modern web development technologies.",
        url: "https://sai-sumanth-portfolio.vercel.app/",
        siteName: "Sai Sumanth Portfolio",
        images: [
            {
                url: favIcon.src,
                width: 1200,
                height: 630,
                alt: "Sai Sumanth Portfolio",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Sai Sumanth | Frontend Developer Portfolio",
        description:
            "Discover Sai Sumanth's innovative projects, technical skills, and testimonials in modern web development.",
        creator: "@SaiSumanth_3123",
        images: [favIcon.src],
    },
    authors: [{ name: "Sai Sumanth", url: "https://sai-sumanth-portfolio.vercel.app/" }],
    publisher: "Sai Sumanth",
    robots: {
        index: true,
        follow: true,
        nocache: false,
    },
    themeColor: "#111827", // Set a theme color for browsers and PWA
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={twMerge(
                    inter.variable,
                    calistoga.variable,
                    "bg-gray-900 text-white antialiased font-sans scroll-smooth"
                )}>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
