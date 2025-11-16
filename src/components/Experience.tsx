"use client";

import AOSComponent from "@/lib/aos";
import Image from "next/image";
import { Briefcase, Calendar } from "lucide-react";

export const experiences = [
  {
    id: 0,
    img: "https://simple.works/wp-content/uploads/2024/10/simpleworks-logo-svg.svg",
    defaultImg: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
    role: "Software Engineer, SimpleCRM",
    organization: "SimpleWorks Solutions Pvt. Ltd.",
    date: "Apr 2022 – Present",
    desc:
      "Led the migration of SimpleCRM from a PHP/Smarty monolith to a React + Node.js microservices stack, cutting page loads by 30% and API latency by 40%. Introduced Redis caching, WebSockets, and a secure BFF layer to ship fast, resilient features. Dockerized services, moved traffic behind Nginx, and set up AWS CI/CD with GitHub Actions and Sentry—reducing release cycles by 25% and regressions through 60% Playwright coverage.",
    skills: [
      "React",
      "Node.js",
      "Redis",
      "WebSockets",
      "Docker",
      "Nginx",
      "AWS",
      "GitHub Actions",
      "Sentry",
      "Playwright",
      "Security",
      "Performance",
      "Collaboration",
    ],
  },
  {
    id: 1,
    img: "https://upload.wikimedia.org/wikipedia/commons/9/99/CodeIgniter_logo.svg",
    defaultImg: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
    role: "Freelance Software Engineer",
    organization: "Whiteboard Software",
    date: "Feb 2020 – Apr 2021",
    desc:
      "Modernized a legacy PHP monolith into a cleaner CodeIgniter-based system for 1K+ users. Shipped Jyotish Vishwakosh, a React + CodeIgniter + AWS platform serving 10K+ monthly users with smart caching and automated deployments. Built a Flutter companion app with Firebase Auth, push notifications, and analytics, maintaining <2% crash rate on Google Play.",
    skills: [
      "PHP",
      "CodeIgniter",
      "React",
      "AWS",
      "Flutter",
      "Firebase",
      "Performance",
      "Scalability",
    ],
  },
];

export default function Experience() {
  return (
    <AOSComponent>
      <section
        id="experience"
        className="relative z-10 mt-32 p-6 text-slate-900"
      >
        <h3
          data-aos="fade-left"
          className="projects-title motion-preset-blur-right mb-8 font-heading text-4xl"
        >
          Work Experience
        </h3>

        <div className="mb-6 flex flex-col gap-6">
          {experiences.map((exp) => {
            const isCurrent = exp.date.includes("Present");

            return (
              <div data-aos="fade-left" key={exp.id}>
                <div className="wrapper flex flex-col gap-4 rounded-[30px] border-[3px] border-slate-900 p-6 shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                  {/* Header: Logo + Role/Org */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border-2 border-slate-900 bg-white">
                      <Image
                        src={exp.img}
                        alt={exp.organization}
                        width={56}
                        height={56}
                        className="object-contain"
                      />
                    </div>

                    <div className="flex flex-1 flex-col gap-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="flex items-center gap-2 font-heading text-2xl md:text-3xl">
                          {/* <Briefcase className="h-5 w-5" /> */}
                          {exp.role}
                        </h3>
                        {isCurrent && (
                          <span className="rounded-full border border-lime-500 bg-lime-100 px-3 py-0.5 text-xs font-semibold uppercase tracking-wide text-lime-700">
                            Current Role
                          </span>
                        )}
                      </div>

                      <p className="text-lg font-medium text-slate-700">
                        {exp.organization}
                      </p>

                      <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-slate-600">
                        <span className="inline-flex items-center gap-1 rounded-full border border-slate-300 bg-slate-50 px-3 py-1">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>{exp.date}</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-2 text-lg leading-relaxed text-slate-700">
                    {exp.desc}
                  </p>

                  {/* Skills / tags */}
                  {exp.skills?.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-[20px] border-2 border-slate-900 bg-lime-500 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-900"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </AOSComponent>
  );
}
