/**
 * MERIDIAN — Program Page
 * Design: Premium Editorial Magazine
 * Sections: Hero, Modules grid, App mockups, What's included, CTA
 */
import { useEffect } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  });
}

const modules = [
  {
    num: "01",
    title: "The Foundation",
    subtitle: "How operators think",
    duration: "4 LESSONS · 52 MIN",
    description: "The mental model that separates AI operators from AI users. Why most executives fail to build a daily reflex — and the one shift that changes everything.",
  },
  {
    num: "02",
    title: "Automation Architecture",
    subtitle: "Building scalable systems",
    duration: "6 LESSONS · 78 MIN",
    description: "The blueprint for building AI workflows that scale. From single-task automation to compound systems that run while you think.",
  },
  {
    num: "03",
    title: "The Operator Layer",
    subtitle: "Status + leverage",
    duration: "5 LESSONS · 65 MIN",
    description: "The identity shift from senior IC to operator. How to walk into your next executive meeting and casually mention 'the system I built.'",
  },
  {
    num: "04",
    title: "Brief Intelligence",
    subtitle: "Eliminate cognitive overhead",
    duration: "5 LESSONS · 60 MIN",
    description: "Transform how you intake, process, and output information. AI-powered brief systems that eliminate 60% of cognitive overhead.",
  },
  {
    num: "05",
    title: "Meeting Architecture",
    subtitle: "Never summarize manually again",
    duration: "4 LESSONS · 48 MIN",
    description: "AI-powered meeting prep, live capture, and follow-up systems. The complete meeting stack for operators.",
  },
  {
    num: "06",
    title: "Document Intelligence",
    subtitle: "The writing operator",
    duration: "5 LESSONS · 62 MIN",
    description: "How operators produce documents. Briefs, reports, proposals — all systematized. The same categories of documents, never drafted from scratch again.",
  },
  {
    num: "07",
    title: "Data Operator",
    subtitle: "Terminal-grade analysis",
    duration: "4 LESSONS · 55 MIN",
    description: "Bloomberg Terminal energy applied to your actual data. AI-powered analysis workflows for executives who need answers, not dashboards.",
  },
  {
    num: "08",
    title: "The Compound Stack",
    subtitle: "Systems that compound",
    duration: "5 LESSONS · 68 MIN",
    description: "Build workflows that feed each other. Each automation compounds the next. The operator stack that runs while you're in the room.",
  },
  {
    num: "09",
    title: "The Operator Identity",
    subtitle: "The before/after",
    duration: "3 LESSONS · 40 MIN",
    description: "The final module. How to maintain, evolve, and compound your operator stack. The identity shift is complete. Now protect it.",
  },
];

export default function Program() {
  useReveal();

  return (
    <div className="min-h-screen bg-[#F2EEE5]">
      <Navigation />

      {/* ============================================================
          HERO — Editorial light mode
          ============================================================ */}
      <section className="bg-[#F2EEE5] pt-32 pb-20 lg:pt-44 lg:pb-28">
        <div className="container">
          <div className="max-w-4xl">
            <p className="meridian-eyebrow text-[#C9A961] text-[11px] mb-5 reveal">
              MODULE OVERVIEW · 09 MODULES
            </p>
            <h1
              className="text-[#0B0C0E] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mb-6 reveal reveal-delay-1"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic", fontWeight: 300, letterSpacing: "-0.02em", lineHeight: 1.05 }}
            >
              The Program.
            </h1>
            <hr className="meridian-rule w-full mb-6 reveal reveal-delay-2" />
            <p className="meridian-body text-[#0B0C0E]/60 text-base lg:text-lg leading-relaxed max-w-xl reveal reveal-delay-3">
              Forty-two prompts. Eleven workflows. One operator stack.
              Six weeks of doing the work — none of watching it.
            </p>
            <div className="flex items-center gap-6 mt-8 reveal reveal-delay-4">
              <div>
                <p className="meridian-mono text-[#0B0C0E] text-2xl font-medium">$1,500</p>
                <p className="meridian-eyebrow text-[#C9A961] text-[9px] mt-1">INVESTMENT</p>
              </div>
              <div className="w-px h-10 bg-[#0B0C0E]/20" />
              <div>
                <p className="meridian-mono text-[#0B0C0E] text-2xl font-medium">06</p>
                <p className="meridian-eyebrow text-[#C9A961] text-[9px] mt-1">WEEKS</p>
              </div>
              <div className="w-px h-10 bg-[#0B0C0E]/20" />
              <div>
                <p className="meridian-mono text-[#0B0C0E] text-2xl font-medium">09</p>
                <p className="meridian-eyebrow text-[#C9A961] text-[9px] mt-1">MODULES</p>
              </div>
              <div className="w-px h-10 bg-[#0B0C0E]/20" />
              <div>
                <p className="meridian-mono text-[#0B0C0E] text-2xl font-medium">42</p>
                <p className="meridian-eyebrow text-[#C9A961] text-[9px] mt-1">WORKFLOWS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          MODULES — Full grid
          ============================================================ */}
      <section className="bg-[#E5E1D7] py-20 lg:py-28">
        <div className="container">
          <div className="reveal mb-12">
            <p className="meridian-eyebrow text-[#C9A961] text-[11px] mb-4">THE CURRICULUM</p>
            <h2
              className="text-[#0B0C0E] text-3xl sm:text-4xl"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, letterSpacing: "-0.01em" }}
            >
              Nine modules. One system.
            </h2>
          </div>

          <div className="flex flex-col gap-px bg-[#0B0C0E]/10">
            {modules.map((mod, i) => (
              <div
                key={mod.num}
                className={`bg-[#F2EEE5] p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-6 lg:gap-10 items-start reveal reveal-delay-${Math.min(i % 3 + 1, 5)}`}
              >
                <div className="lg:w-20">
                  <p className="meridian-mono text-[#C9A961] text-2xl font-medium">{mod.num}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="meridian-eyebrow text-[#C9A961] text-[10px]">{mod.subtitle}</p>
                  <h3
                    className="text-[#0B0C0E] text-xl lg:text-2xl"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
                  >
                    {mod.title}
                  </h3>
                  <p className="meridian-body text-[#0B0C0E]/55 text-sm leading-relaxed max-w-lg">
                    {mod.description}
                  </p>
                </div>
                <div className="lg:text-right">
                  <p className="meridian-mono text-[#0B0C0E]/40 text-xs">{mod.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          APP MOCKUPS — Mobile screens
          ============================================================ */}
      <section className="meridian-hero py-20 lg:py-28 overflow-hidden relative">
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "linear-gradient(rgba(242,238,229,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(242,238,229,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="reveal flex flex-col gap-6">
              <p className="meridian-eyebrow text-[#C9A961] text-[11px]">THE EXPERIENCE</p>
              <h2
                className="text-[#F2EEE5] text-3xl sm:text-4xl lg:text-5xl"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic", fontWeight: 300 }}
              >
                Learn on any device.
                <br />
                <span style={{ fontStyle: "normal", fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "0.75em" }}>
                  Build on all of them.
                </span>
              </h2>
              <hr className="meridian-rule w-16 opacity-40" />
              <p className="meridian-body text-[#F2EEE5]/70 text-base leading-relaxed max-w-md">
                The Meridian platform is designed for executives who work everywhere.
                Mobile for learning in transit. Desktop for building workflows at the desk.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-2">
                {[
                  { label: "MODULE PROGRESS", value: "Real-time" },
                  { label: "WORKFLOW BUILDER", value: "Drag & drop" },
                  { label: "OPERATOR PLAYBOOKS", value: "Downloadable" },
                  { label: "COHORT ACCESS", value: "Private" },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col gap-1">
                    <p className="meridian-eyebrow text-[#C9A961] text-[9px]">{item.label}</p>
                    <p className="text-[#F2EEE5] text-sm font-light">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal reveal-delay-2 flex justify-center lg:justify-end gap-4 lg:gap-6">
              <img
                src="/manus-storage/app_ui_dashboard_69c72f21.png"
                alt="Meridian app dashboard"
                className="w-36 sm:w-44 lg:w-48 object-contain rounded-2xl"
                style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.4))", transform: "translateY(-16px)" }}
              />
              <img
                src="/manus-storage/app_ui_module_2fc8aea6.png"
                alt="Meridian module view"
                className="w-36 sm:w-44 lg:w-48 object-contain rounded-2xl"
                style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.4))", transform: "translateY(16px)" }}
              />
              <img
                src="/manus-storage/app_ui_workflow_92068f28.png"
                alt="Meridian workflow builder"
                className="hidden sm:block w-36 sm:w-44 lg:w-48 object-contain rounded-2xl"
                style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.4))", transform: "translateY(-8px)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          WHAT'S INCLUDED
          ============================================================ */}
      <section className="bg-[#F2EEE5] py-20 lg:py-28">
        <div className="container">
          <div className="reveal mb-12">
            <p className="meridian-eyebrow text-[#C9A961] text-[11px] mb-4">WHAT'S INCLUDED</p>
            <h2
              className="text-[#0B0C0E] text-3xl sm:text-4xl"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, letterSpacing: "-0.01em" }}
            >
              Everything you need.
              <br />
              Nothing you don't.
            </h2>
            <hr className="meridian-rule w-16 mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#0B0C0E]/10">
            {[
              { num: "09", label: "MODULES", desc: "Structured curriculum from foundation to compound stack." },
              { num: "42", label: "WORKFLOWS", desc: "Pre-built automation templates ready to deploy." },
              { num: "06", label: "WEEKS", desc: "Intensive program designed for executive schedules." },
              { num: "01", label: "COHORT", desc: "Private access to fellow operators at your level." },
            ].map((item, i) => (
              <div
                key={item.label}
                className={`bg-[#F2EEE5] p-8 flex flex-col gap-3 reveal reveal-delay-${i + 1}`}
              >
                <p className="meridian-mono text-[#C9A961] text-4xl font-medium">{item.num}</p>
                <p className="meridian-eyebrow text-[#0B0C0E] text-[10px]">{item.label}</p>
                <hr className="meridian-rule w-8" />
                <p className="meridian-body text-[#0B0C0E]/55 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA
          ============================================================ */}
      <section className="bg-[#0B0C0E] py-20 lg:py-28">
        <div className="container">
          <div className="max-w-2xl reveal flex flex-col gap-6">
            <p className="meridian-eyebrow text-[#C9A961] text-[11px]">READY TO BUILD?</p>
            <h2
              className="text-[#F2EEE5] text-3xl sm:text-4xl lg:text-5xl"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic", fontWeight: 300 }}
            >
              A system you build,
              <br />
              not a tool you rent.
            </h2>
            <hr className="meridian-rule w-16" />
            <p className="meridian-body text-[#F2EEE5]/60 text-base leading-relaxed max-w-md">
              The investment is $1,500. The return is measured in hours recovered,
              decisions accelerated, and leverage compounded.
            </p>
            <Link href="/enroll" className="meridian-cta text-[11px] px-7 py-3.5 inline-block w-fit">
              Enroll Now — $1,500 →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
