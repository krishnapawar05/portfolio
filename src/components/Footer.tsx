import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { VideoBackground } from "./VideoBackground";
import { GithubIcon, LinkedinIcon, InstagramIcon, FacebookIcon } from "./SocialIcons";
import { PORTFOLIO_DATA } from "../data/portfolio";

const HLS_URL = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

export const Footer: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;

    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const marqueeAnim = gsap.to(marqueeRef.current, {
      xPercent: -50,
      duration: 40,
      ease: "none",
      repeat: -1,
    });

    return () => {
      marqueeAnim.kill();
    };
  }, []);

  const emailHref = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${PORTFOLIO_DATA.personal.emailSubject}`;

  return (
    <footer
      id="contact"
      className="relative bg-bg pt-20 md:pt-28 pb-10 md:pb-14 overflow-hidden border-t border-stroke/40"
    >
      {/* Background Video: flipped vertically with heavier 65% overlay */}
      <VideoBackground
        src={HLS_URL}
        flipped={true}
        overlayOpacity="bg-black/65"
      />

      {/* Marquee Section */}
      <div className="relative z-10 w-full overflow-hidden py-4 select-none mb-16 md:mb-20">
        <div
          ref={marqueeRef}
          className="flex whitespace-nowrap will-change-transform text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display italic tracking-tight text-white/10 uppercase"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="inline-block px-4">
              LET&apos;S BUILD SOMETHING MEANINGFUL &bull;
            </span>
          ))}
        </div>
      </div>

      {/* Center Contact Block */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col items-center text-center mb-16 md:mb-24">
        <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium mb-4">
          GET IN TOUCH
        </span>
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-display italic text-text-primary mb-6 tracking-tight">
          Have an idea?{" "}
          <span className="font-display italic font-normal text-white">
            Let&apos;s build it.
          </span>
        </h2>

        <p className="text-sm sm:text-base text-muted max-w-lg mb-10 leading-relaxed font-normal">
          I&apos;m open to connecting with developers, collaborating on interesting
          projects, and exploring opportunities to build useful software.
        </p>

        {/* Primary CTA Button */}
        <div className="mb-12">
          <a
            href={emailHref}
            className="relative group rounded-full text-base sm:text-lg font-medium px-8 sm:px-10 py-4 transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-stroke bg-bg text-text-primary hover:border-transparent inline-flex items-center gap-3 shadow-xl shadow-black/40"
            aria-label="Send email to Krishna Pawar"
          >
            <span className="absolute -inset-[2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            <span className="relative z-10 font-normal">Get in Touch</span>
            <ArrowUpRight className="relative z-10 w-4 h-4 text-[#89AACC] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Verified Contact Details Grid (Email, Phone, GitHub, LinkedIn) */}
        <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          {/* 1. Email */}
          <a
            href={emailHref}
            className="group p-5 rounded-2xl bg-surface/40 hover:bg-surface/80 border border-stroke hover:border-[#89AACC]/40 transition-all duration-300 flex items-center justify-between"
            aria-label={`Send email to ${PORTFOLIO_DATA.personal.email}`}
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-bg border border-stroke flex items-center justify-center text-[#89AACC] group-hover:scale-105 transition-transform">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-muted block">
                  EMAIL
                </span>
                <span className="text-xs sm:text-sm font-mono text-text-primary group-hover:text-white transition-colors">
                  {PORTFOLIO_DATA.personal.email}
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-[#89AACC] transition-colors" />
          </a>

          {/* 2. Phone */}
          <a
            href={PORTFOLIO_DATA.personal.phoneUrl}
            className="group p-5 rounded-2xl bg-surface/40 hover:bg-surface/80 border border-stroke hover:border-[#89AACC]/40 transition-all duration-300 flex items-center justify-between"
            aria-label={`Call Krishna at ${PORTFOLIO_DATA.personal.phone}`}
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-bg border border-stroke flex items-center justify-center text-[#89AACC] group-hover:scale-105 transition-transform">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-muted block">
                  PHONE
                </span>
                <span className="text-xs sm:text-sm font-mono text-text-primary group-hover:text-white transition-colors">
                  {PORTFOLIO_DATA.personal.phone}
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-[#89AACC] transition-colors" />
          </a>

          {/* 3. GitHub */}
          <a
            href={PORTFOLIO_DATA.socials[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-2xl bg-surface/40 hover:bg-surface/80 border border-stroke hover:border-[#89AACC]/40 transition-all duration-300 flex items-center justify-between"
            aria-label="Visit Krishna's GitHub Profile"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-bg border border-stroke flex items-center justify-center text-[#89AACC] group-hover:scale-105 transition-transform">
                <GithubIcon size={18} />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-muted block">
                  GITHUB
                </span>
                <span className="text-xs sm:text-sm font-mono text-text-primary group-hover:text-white transition-colors">
                  krishnapawar05
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-[#89AACC] transition-colors" />
          </a>

          {/* 4. LinkedIn */}
          <a
            href={PORTFOLIO_DATA.socials[1].url}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-2xl bg-surface/40 hover:bg-surface/80 border border-stroke hover:border-[#89AACC]/40 transition-all duration-300 flex items-center justify-between"
            aria-label="Connect with Krishna on LinkedIn"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-bg border border-stroke flex items-center justify-center text-[#89AACC] group-hover:scale-105 transition-transform">
                <LinkedinIcon size={18} />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-muted block">
                  LINKEDIN
                </span>
                <span className="text-xs sm:text-sm font-mono text-text-primary group-hover:text-white transition-colors">
                  in/krishnapawar05
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-[#89AACC] transition-colors" />
          </a>

          {/* 5. Instagram */}
          <a
            href={PORTFOLIO_DATA.socials[2].url}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-2xl bg-surface/40 hover:bg-surface/80 border border-stroke hover:border-[#89AACC]/40 transition-all duration-300 flex items-center justify-between"
            aria-label="Follow Krishna on Instagram"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-bg border border-stroke flex items-center justify-center text-[#89AACC] group-hover:scale-105 transition-transform">
                <InstagramIcon size={18} />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-muted block">
                  INSTAGRAM
                </span>
                <span className="text-xs sm:text-sm font-mono text-text-primary group-hover:text-white transition-colors">
                  @krishnapawar05
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-[#89AACC] transition-colors" />
          </a>

          {/* 6. Facebook */}
          <a
            href={PORTFOLIO_DATA.socials[3].url}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-2xl bg-surface/40 hover:bg-surface/80 border border-stroke hover:border-[#89AACC]/40 transition-all duration-300 flex items-center justify-between"
            aria-label="Connect with Krishna on Facebook"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-bg border border-stroke flex items-center justify-center text-[#89AACC] group-hover:scale-105 transition-transform">
                <FacebookIcon size={18} />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-muted block">
                  FACEBOOK
                </span>
                <span className="text-xs sm:text-sm font-mono text-text-primary group-hover:text-white transition-colors">
                  krishnapawar05
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-[#89AACC] transition-colors" />
          </a>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 pt-8 border-t border-stroke/50 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Name and Tagline */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="text-sm font-light text-text-primary tracking-wide">
            {PORTFOLIO_DATA.personal.name}
          </span>
          <span className="hidden sm:inline-block text-stroke">&bull;</span>
          <span className="text-xs text-muted/70 font-mono">
            Designed and built with care.
          </span>
        </div>

        {/* Verified Social Links ONLY (GitHub, LinkedIn) */}
        <div className="flex items-center gap-6">
          {PORTFOLIO_DATA.socials.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.ariaLabel}
              className="text-xs text-muted hover:text-text-primary transition-colors duration-200 tracking-wide font-mono inline-flex items-center gap-1"
            >
              <span>{social.platform}</span>
              <ArrowUpRight className="w-3 h-3 text-[#89AACC]/70" />
            </a>
          ))}
        </div>

        {/* Dynamic Copyright */}
        <div className="text-xs font-mono text-muted/60">
          &copy; {new Date().getFullYear()} Krishna Pawar.
        </div>
      </div>
    </footer>
  );
};
