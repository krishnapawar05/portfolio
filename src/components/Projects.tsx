import React, { useState, useEffect } from "react";
import { X, Award, ExternalLink, Code2, CheckCircle2, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolio";
import type { Project } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";

export const Projects: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalProject(null);
      }
    };

    if (activeModalProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModalProject]);

  return (
    <section id="projects" className="bg-bg py-16 md:py-24 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#4E85BF]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="SELECTED WORK"
          heading={
            <>
              Projects that bring{" "}
              <span className="font-display italic font-normal">ideas to life.</span>
            </>
          }
          description="A selection of AI-powered applications, computer vision systems, and full-stack software focused on solving practical challenges."
        />

        {/* Balanced 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
          {PORTFOLIO_DATA.projects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              onOpenModal={(proj) => setActiveModalProject(proj)}
            />
          ))}
        </div>
      </div>

      {/* Accessible Project Detail Modal */}
      {activeModalProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          onClick={() => setActiveModalProject(null)}
          className="fixed inset-0 z-[9999] bg-black/85 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full bg-surface border border-stroke rounded-3xl overflow-hidden shadow-2xl max-h-[92vh] flex flex-col animate-in zoom-in-95 duration-200"
          >
            {/* Modal Header */}
            <div className="relative p-6 sm:p-8 border-b border-stroke/70 flex items-start justify-between gap-4 bg-surface/90">
              <div className="pr-4">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#89AACC] px-2.5 py-0.5 rounded-full bg-bg border border-stroke">
                    {activeModalProject.category}
                  </span>
                  {activeModalProject.badge && (
                    <span className="inline-flex items-center gap-1 text-[11px] text-amber-300 px-2.5 py-0.5 rounded-full bg-amber-950/60 border border-amber-500/30">
                      <Award className="w-3 h-3" />
                      {activeModalProject.badge}
                    </span>
                  )}
                  {activeModalProject.statusBadge && (
                    <span className="text-[11px] font-mono text-white/80 px-2.5 py-0.5 rounded-full bg-bg border border-stroke">
                      {activeModalProject.statusBadge}
                    </span>
                  )}
                </div>
                <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-light text-text-primary tracking-tight">
                  {activeModalProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted mt-1 font-mono">
                  {activeModalProject.subtitle}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="w-10 h-10 rounded-full bg-bg border border-stroke flex items-center justify-center text-muted hover:text-white hover:border-[#89AACC] transition-colors shrink-0 focus-visible:ring-2 focus-visible:ring-[#89AACC] outline-none"
                aria-label="Close project modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              {/* Preview image banner */}
              <div className="relative aspect-[16/8] w-full rounded-2xl overflow-hidden border border-stroke/60 bg-bg">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.imageAlt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Detailed Overview */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#89AACC] mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Detailed Overview
                </h4>
                <p className="text-sm sm:text-base text-text-primary/90 leading-relaxed font-normal">
                  {activeModalProject.detailedOverview}
                </p>
              </div>

              {/* Key Features Checklist */}
              {activeModalProject.keyFeatures && activeModalProject.keyFeatures.length > 0 && (
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#89AACC] mb-3">
                    Key Features &amp; Implemented Capabilities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeModalProject.keyFeatures.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-surface/50 border border-stroke/50 text-xs sm:text-sm text-muted"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#89AACC] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Supporting Recognition / Description if any */}
              {activeModalProject.supportingDescription && (
                <div className="p-4 rounded-2xl bg-surface/60 border border-stroke/80">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-amber-300 mb-1 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" />
                    Recognition &amp; Innovation Status
                  </h4>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {activeModalProject.supportingDescription}
                  </p>
                </div>
              )}

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-muted mb-3 flex items-center gap-2">
                  <Code2 className="w-3.5 h-3.5 text-[#89AACC]" />
                  Technologies &amp; Architecture
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-text-primary bg-bg px-3 py-1.5 rounded-full border border-stroke"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 border-t border-stroke/70 flex items-center justify-between bg-bg/60">
              <span className="text-[11px] font-mono text-muted/60">
                KRISHNA PAWAR • PORTFOLIO
              </span>

              <div className="flex items-center gap-3">
                {activeModalProject.liveDemoUrl && (
                  <a
                    href={activeModalProject.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-full accent-gradient text-white hover:opacity-95 transition-opacity"
                  >
                    <span>Open Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setActiveModalProject(null)}
                  className="text-xs font-mono text-muted hover:text-white px-3 py-1.5 rounded-full border border-stroke bg-surface hover:bg-surface/80"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
