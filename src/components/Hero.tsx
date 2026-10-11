import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Download, ArrowRight, Award, Mail, GraduationCap } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { VideoBackground } from "./VideoBackground";
import { PORTFOLIO_DATA } from "../data/portfolio";

const HLS_URL = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

interface HeroProps {
  isReady?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ isReady = true }) => {
  const heroRef = useRef<HTMLDivElement | null>(null);

  // GSAP Entrance
  useEffect(() => {
    if (!isReady || !heroRef.current) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(
        ".hero-intro-item",
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.08, delay: 0.1 }
      ).fromTo(
        ".hero-portrait-slot",
        { opacity: 0, scale: 0.96, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 1.0 },
        0.25
      );
    }, heroRef);

    return () => ctx.revert();
  }, [isReady]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const emailHref = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${PORTFOLIO_DATA.personal.emailSubject}`;

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden px-4 sm:px-6 md:px-10 lg:px-16 pt-24 sm:pt-28 pb-12 lg:pb-16"
    >
      {/* Cinematic Background Video */}
      <VideoBackground src={HLS_URL} overlayOpacity="bg-black/50" />

      {/* Atmospheric Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[550px] h-[450px] bg-gradient-to-br from-[#4E85BF]/10 via-[#89AACC]/5 to-transparent rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-gradient-to-bl from-[#4E85BF]/15 via-[#89AACC]/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Main 2-Column Balanced Layout */}
      <div className="relative z-10 max-w-[1280px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center my-auto">
        {/* Left Column: Information (~58% desktop width) */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-5 sm:space-y-6 text-left">
          {/* Eyebrow & Academic / Achievement Labels */}
          <div className="hero-intro-item flex flex-wrap items-center gap-2 sm:gap-2.5">
            {/* Academic Tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#101827]/85 border border-[#4E85BF]/30 text-[#89AACC] text-[10px] sm:text-xs font-mono uppercase tracking-wider backdrop-blur-md shadow-[0_0_15px_-3px_rgba(78,133,191,0.25)]">
              <GraduationCap className="w-3.5 h-3.5 text-[#89AACC]" />
              <span>CSE UNDERGRADUATE &bull; KLE INSTITUTE OF TECHNOLOGY &bull; 2027</span>
            </div>

            {/* Achievement Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/35 border border-amber-500/30 text-amber-300 text-[10px] sm:text-xs font-mono uppercase tracking-wider backdrop-blur-md">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>1ST PLACE &bull; NAIN 2.0</span>
            </div>
          </div>

          {/* Name & Role */}
          <div className="hero-intro-item space-y-2">
            {/* Display Name: Krishna Pawar (no 'G.') */}
            <h1
              className="font-display italic text-text-primary tracking-tight leading-[0.92]"
              style={{ fontSize: "clamp(2.75rem, 5.2vw, 5.25rem)" }}
            >
              Krishna Pawar
            </h1>

            {/* Primary Professional Role */}
            <p className="text-xl sm:text-2xl md:text-[26px] font-light text-text-primary tracking-tight flex items-center gap-2 flex-wrap">
              <span>Full-Stack Developer</span>
              <span className="text-[#89AACC]/40">&bull;</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#89AACC] via-[#7B9FE0] to-[#A78BFA] font-normal">
                AI Enthusiast
              </span>
            </p>
          </div>

          {/* Short Introduction */}
          <p className="hero-intro-item text-sm sm:text-base text-muted max-w-xl leading-relaxed font-normal">
            Building web applications and AI-powered solutions with a focus on practical functionality, thoughtful interfaces, and meaningful problem-solving.
          </p>

          {/* Primary Action Buttons & Social Links Cluster */}
          <div className="hero-intro-item flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
            {/* Primary CTA: Explore My Work */}
            <button
              type="button"
              onClick={() => scrollToSection("projects")}
              className="relative group rounded-full text-xs sm:text-sm font-medium px-6 sm:px-7 py-3 sm:py-3.5 transition-all duration-300 hover:scale-[1.03] active:scale-95 overflow-hidden shadow-lg shadow-black/50 cursor-pointer inline-flex items-center gap-2"
            >
              <span className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 p-[2px]" />
              <span className="relative z-10 inline-flex items-center justify-center gap-2 rounded-full bg-text-primary text-bg group-hover:bg-bg group-hover:text-text-primary px-6 sm:px-7 py-3 sm:py-3.5 -m-6 -my-3 -sm:m-7 -sm:my-3.5 transition-colors duration-300">
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </button>

            {/* Secondary CTA: Get Resume */}
            <a
              href={PORTFOLIO_DATA.personal.resumeUrl}
              download={PORTFOLIO_DATA.personal.resumeFilename}
              aria-label="Download Krishna Pawar's Resume (PDF)"
              className="relative group rounded-full text-xs sm:text-sm font-medium px-5 sm:px-6 py-3 sm:py-3.5 transition-all duration-300 hover:scale-[1.03] active:scale-95 border border-[#89AACC]/40 bg-[#4E85BF]/10 text-text-primary hover:bg-[#4E85BF]/25 hover:border-[#89AACC]/70 inline-flex items-center gap-2 shadow-sm"
            >
              <Download className="w-4 h-4 text-[#89AACC] group-hover:-translate-y-0.5 transition-transform" />
              <span>Get Resume</span>
            </a>

            {/* Social Icons Group (Secondary) */}
            <div className="flex items-center gap-2 pl-1 sm:pl-2 border-l border-stroke/70">
              <a
                href={emailHref}
                aria-label="Send email to Krishna"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-[#101827]/80 border border-stroke text-muted hover:text-text-primary hover:border-[#89AACC]/50 hover:bg-[#101827] transition-all hover:scale-105"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.socials[0].url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Krishna's GitHub Profile"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-[#101827]/80 border border-stroke text-muted hover:text-text-primary hover:border-[#89AACC]/50 hover:bg-[#101827] transition-all hover:scale-105"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href={PORTFOLIO_DATA.socials[1].url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Krishna's LinkedIn Profile"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-[#101827]/80 border border-stroke text-muted hover:text-text-primary hover:border-[#89AACC]/50 hover:bg-[#101827] transition-all hover:scale-105"
              >
                <LinkedinIcon size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Refined Framed Portrait (~42% desktop width) */}
        <div className="hero-portrait-slot lg:col-span-5 flex justify-center items-center pb-4 lg:pb-0">
          <div className="relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[400px] xl:max-w-[420px] group">
            {/* Ambient Backlight Glow */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-[#4E85BF]/25 via-[#89AACC]/15 to-[#A78BFA]/20 rounded-[36px] blur-2xl opacity-60 group-hover:opacity-85 transition-opacity duration-700 pointer-events-none -z-10" />

            {/* Framed Editorial Portrait Container */}
            <div className="relative rounded-[28px] sm:rounded-[34px] overflow-hidden border border-white/10 bg-[#080c14] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]">
              {/* Studio soft top vignette to gently frame the portrait */}
              <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-black/25 via-black/5 to-transparent pointer-events-none z-10" />

              {/* Inner ring & subtle studio shadow */}
              <div className="pointer-events-none absolute inset-0 rounded-[28px] sm:rounded-[34px] ring-1 ring-inset ring-white/10 z-20 shadow-[inset_0_0_30px_rgba(0,0,0,0.2)]" />

              {/* Profile Image with preserved natural appearance and suit visible */}
              <img
                src={encodeURI("/Krishna Passport size white.png")}
                onError={(e) => {
                  e.currentTarget.src = "/krishna-profile.png";
                }}
                alt="Krishna Pawar — Full-Stack Developer and AI Enthusiast"
                className="w-full h-auto aspect-[4/5] object-cover object-top filter contrast-[1.02] brightness-[0.99] transition-transform duration-700 group-hover:scale-[1.02]"
                loading="eager"
              />

              {/* Bottom Subtle Vignette to elegantly integrate the suit */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#080c14] via-[#080c14]/65 to-transparent pointer-events-none z-10" />
            </div>

            {/* Available Pill Tag (Anchored at Bottom Center of Portrait) */}
            <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap">
              <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#0a0e17]/95 backdrop-blur-md border border-white/15 shadow-[0_8px_25px_rgba(0,0,0,0.85)] text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-medium text-slate-200">AVAILABLE &bull; OPEN TO WORK</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div
        onClick={() => scrollToSection("projects")}
        className="relative z-10 flex flex-col items-center gap-2.5 cursor-pointer pt-6 pb-1 opacity-70 hover:opacity-100 transition-opacity mx-auto mt-2"
        role="button"
        tabIndex={0}
        aria-label="Scroll down to projects"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted font-medium">
          SCROLL
        </span>
        <div className="relative w-px h-8 bg-stroke overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 accent-gradient animate-scroll-down rounded-full" />
        </div>
      </div>
    </section>
  );
};
