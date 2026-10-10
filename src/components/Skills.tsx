import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Cpu,
  Eye,
  Wrench,
} from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  Frontend: Code2,
  Backend: Server,
  Databases: Database,
  Programming: Cpu,
  "AI & Computer Vision": Eye,
  "Developer Tools": Wrench,
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="bg-bg py-16 md:py-24 relative overflow-hidden border-t border-stroke/40">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="MY TOOLKIT"
          heading={
            <>
              Technologies I{" "}
              <span className="font-display italic font-normal">work with.</span>
            </>
          }
          description="A practical toolkit for building web applications, exploring AI, and solving programming problems."
        />

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.skills.map((category, idx) => {
            const Icon = CATEGORY_ICONS[category.name] || Code2;

            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                className="group relative p-6 sm:p-7 rounded-3xl bg-surface/40 hover:bg-surface border border-stroke transition-all duration-300 hover:border-stroke/80 hover:shadow-xl hover:shadow-black/20 flex flex-col justify-between"
              >
                {/* Ambient glow on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#4E85BF]/5 rounded-full blur-2xl group-hover:bg-[#4E85BF]/15 transition-all duration-500 pointer-events-none" />

                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-bg border border-stroke flex items-center justify-center text-[#89AACC] group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-normal text-text-primary">
                        {category.name}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-muted leading-relaxed mb-6 font-normal">
                    {category.description}
                  </p>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-stroke/40">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono text-text-primary/90 bg-bg px-3 py-1.5 rounded-full border border-stroke/80 group-hover:border-[#89AACC]/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
