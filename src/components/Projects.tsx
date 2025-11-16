"use client";

import { LuExternalLink as LinkIcon } from "react-icons/lu";
import { FaCodeBranch as CodeIcon } from "react-icons/fa6";
import { VscGitStash as CodeStashIcon } from "react-icons/vsc";
import AOSComponent from "@/lib/aos";

export const projects = [
  {
    id: 1,
    title: "GTA VI Landing Page",
    date: "2025",
    // image: projectImg1,
    description:
      "A visually striking, SEO-optimized landing page for GTA VI built with Next.js and React. Features pixel-perfect responsive layouts, lazy-loaded assets, and performant animations to engage fans.",
    tags: ["React", "Next.js", "SEO", "Responsive Design", "Performance"],
    category: "Web App",
    demo: "https://saurabh374.github.io/gta_vi_landing/",
    gitRepo: "https://saurabh374.github.io/gta_vi_landing/"
  },
  {
    id: 2,
    title: "Chatify — Real-Time Chat Application",
    date: "2024 – 2025",
    // image: chatifyImg,
    description:
      "Full-featured chat app built with Next.js, Node.js, Express, and MongoDB microservices. Enables real-time messaging, typing indicators, presence status with Socket.IO, OTP-based email auth, and image messaging. Asynchronous queueing via RabbitMQ and Redis caching ensure reliability at scale.",
    tags: ["Next.js", "Node.js", "Socket.IO", "MongoDB", "RabbitMQ", "Redis"],
    category: "Web App",
    demo: "https://github.com/saurabh374/Chatify",
    gitRepo: "https://github.com/saurabh374/Chatify",
  },
  {
    id: 3,
    title: "Jyotish Vishwakosh — Web Platform (Freelance)",
    date: "2020 – 2021",
    image: "https://jyotishvishwakosh.com/favicon.png",
    description:
      "Content-rich astrology platform using React, CodeIgniter, and AWS. Scaled to 10K+ monthly users with Redis-backed caching and CI/CD deployment pipelines.",
    tags: ["React", "CodeIgniter", "AWS", "MySQL", "Caching"],
    category: "Web App",
    demo: "https://jyotishvishwakosh.com/",
    gitRepo: "https://jyotishvishwakosh.com/",
  },
  {
    id: 4,
    title: "Jyotish Vishwakosh — Flutter App (Freelance)",
    date: "2021",
    image: "https://jyotishvishwakosh.com/images/channel_profile.jpg",
    description:
      "Flutter-based mobile companion to the Jyotish Vishwakosh platform. Includes Firebase Authentication, push notifications, and real-time updates with <2% crash rate post-launch.",
    tags: ["Flutter", "Firebase", "Mobile"],
    category: "Mobile App",
    demo:
      "https://play.google.com/store/apps/details?id=jyotishvivkosh.mobileapplication",
    gitRepo:
      "https://play.google.com/store/apps/details?id=jyotishvivkosh.mobileapplication",
  }
];


export default function Projects() {
  return (
    <AOSComponent>
      <section id="projects" className="relative z-10 mt-32 p-6 text-slate-900">
        <h3
          data-aos="fade-left"
          className="projects-title motion-preset-blur-right mb-8 font-heading text-4xl"
        >
          Selected Work
        </h3>

        <div id="projects-container" className="mb-6 flex flex-col gap-6">
          {/* PROJECT 1 */}
          {projects.map((project) => <div data-aos="fade-left">
            <div className="wrapper flex flex-col gap-4 rounded-[30px] border-[3px] border-slate-900 p-6 shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <h3 className="flex gap-4 font-heading text-3xl">
                {project.title}
                <CodeStashIcon className="text-green" />
              </h3>

              <div className="flex flex-col gap-2 text-lg md:flex-row md:gap-4">
                <a
                  target="_blank"
                  href={project?.demo}
                  className="flex items-center gap-2 rounded-[30px] border-[2px] border-slate-900 bg-slate-900 px-6 py-1 font-medium text-white shadow-[2px_2px_0px_0px_#84cc16] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                >
                  Deployed site
                  <LinkIcon className="inline h-[20px] w-[20px] text-white" />
                </a>
                <a
                  target="_blank"
                  href={project?.gitRepo ?? ""}
                  className="flex items-center gap-2 rounded-[30px] border-[2px] border-slate-900 px-6 py-1 font-medium shadow-[2px_2px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                >
                  Source code
                  <CodeIcon className="inline h-[17px] w-[17px]" />
                </a>
              </div>

              <p className="mb-2 text-xl">
                {project?.description}   </p>

              <div className="badge-container">
                <img src="/badges/typescript.svg" alt="TypeScript" />
                <img src="/badges/react.svg" alt="React" />
                <img src="/badges/nextjs.svg" alt="Next Js" />
                <img src="/badges/react_query.svg" alt="React Query" />
                <img src="/badges/tailwindcss.svg" alt="TailwindCSS" />
                <img src="/badges/mongodb.svg" alt="MongoDB" />
                <img src="/badges/node.svg" alt="NodeJS" />
                <img src="/badges/express.svg" alt="Express.js" />
              </div>
            </div>
          </div>)}
        </div>

        <a
          href="https://github.com/saurabh374"
          target="_blank"
          className="wrapper flex h-16 items-center justify-center gap-2 rounded-[30px] border-[3px] border-slate-900 text-center text-[20px] font-medium shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
        >
          More on github
          <LinkIcon />
        </a>
      </section>
    </AOSComponent>
  );
}
