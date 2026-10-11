import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Sparkles, Terminal } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export const About: React.FC = () => {
  return (
    <section id="about" className="bg-bg py-16 md:py-24 relative overflow-hidden border-t border-stroke/40">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Heading */}
        <SectionHeading
          eyebrow={PORTFOLIO_DATA.about.eyebrow}
          heading={
            <>
              A little about{" "}
              <span className="font-display italic font-normal">how I build.</span>
            </>
          }
        />

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Story & Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="text-base sm:text-lg text-text-primary/90 font-light leading-relaxed">
              {PORTFOLIO_DATA.about.paragraphs[0]}
            </p>

            <p className="text-sm sm:text-base text-muted font-normal leading-relaxed">
              {PORTFOLIO_DATA.about.paragraphs[1]}
            </p>

            {/* Education Highlight Card */}
            <div className="p-6 rounded-3xl bg-surface/50 border border-stroke mt-8 hover:border-stroke/80 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-bg border border-stroke flex items-center justify-center shrink-0 text-[#89AACC]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#89AACC]">
                    EDUCATION
                  </span>
                  <h4 className="text-base sm:text-lg font-normal text-text-primary mt-1">
                    Bachelor of Engineering in Computer Science and Engineering
                  </h4>
                  <p className="text-xs sm:text-sm text-muted mt-1">
                    KLE Institute of Technology, Hubballi, Karnataka, India
                  </p>
                </div>
              </div>
            </div>

            {/* Focus areas pill badges */}
            <div className="pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-muted block mb-3">
                CORE FOCUS DOMAINS
              </span>
              <div className="flex flex-wrap gap-2">
                {PORTFOLIO_DATA.personal.interests.map((interest) => (
                  <span
                    key={interest}
                    className="text-xs font-mono text-text-primary bg-surface px-3 py-1.5 rounded-full border border-stroke"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Abstract Technical Architecture Collage */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl bg-surface border border-stroke p-6 sm:p-8 overflow-hidden shadow-2xl">
              {/* Subtle ambient light */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#4E85BF]/10 rounded-full blur-3xl pointer-events-none" />

              {/* Terminal-like header */}
              <div className="flex items-center justify-between pb-5 border-b border-stroke/60 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/60" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-muted">
                  <Terminal className="w-3 h-3 text-[#89AACC]" />
                  <span>developer.config.ts</span>
                </div>
              </div>

              {/* Interactive editorial code block */}
              <div className="font-mono text-xs sm:text-sm leading-relaxed space-y-3">
                <div className="text-muted">
                  <span className="text-[#89AACC]">const</span> developer = &#123;
                </div>
                <div className="pl-4 text-text-primary/90">
                  <span className="text-muted">name:</span> &quot;Krishna Pawar&quot;,
                </div>
                <div className="pl-4 text-text-primary/90">
                  <span className="text-muted">focus:</span> [&quot;Full-Stack&quot;, &quot;Computer Vision&quot;],
                </div>
                <div className="pl-4 text-text-primary/90">
                  <span className="text-muted">mindset:</span> &quot;Practical &amp; Purpose-Driven&quot;,
                </div>
                <div className="pl-4 text-text-primary/90">
                  <span className="text-muted">location:</span> &quot;Hubballi, Karnataka, India&quot;,
                </div>
                <div className="text-muted">&#125;;</div>

                <div className="pt-3 border-t border-stroke/40 text-muted">
                  <span className="text-[#89AACC]">async function</span>{" "}
                  <span className="text-text-primary">solveProblem</span>(challenge) &#123;
                </div>
                <div className="pl-4 text-emerald-400/90">
                  // Design scalable solution
                </div>
                <div className="pl-4 text-emerald-400/90">
                  // Integrate AI &amp; user-centric UI
                </div>
                <div className="pl-4 text-[#89AACC]">
                  return <span className="text-white">workingSoftware</span>;
                </div>
                <div className="text-muted">&#125;</div>
              </div>

              {/* Status footer pill */}
              <div className="mt-8 pt-4 border-t border-stroke/40 flex items-center justify-between">
                <span className="text-[11px] font-mono text-muted flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#89AACC]" />
                  Continuous Learner
                </span>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  Active
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
