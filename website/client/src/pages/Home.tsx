/**
 * MERIDIAN — Home Page
 * Design: Premium Editorial Magazine
 * Philosophy: Stripe Press meets a16z — editorial authority with operator precision
 * Colors: Bone bg, Obsidian text, Deep Meridian hero, Brass accents
 * Typography: Cormorant Garamond (editorial) + DM Sans (operator) + JetBrains Mono (terminal)
 */
import { useEffect } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RevealSection from "@/components/RevealSection";

function useGlobalReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  });
}

export default function Home() {
  useGlobalReveal();

  return (
    <div className="min-h-screen bg-[#F2EEE5]">
      <Navigation />

      {/* ============================================================
          HERO — Deep Meridian cinematic moment
          ============================================================ */}
      <section className="meridian-hero min-h-screen flex flex-col justify-center relative overflow-hidden">
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(242,238,229,1) 1px, transparent 1px), linear-gradient(90deg, rgba(242,238,229,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="container relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-8 items-center">
            {/* Left: Text */}
            <div className="flex flex-col gap-6">
              <p
                className="meridian-eyebrow text-[#C9A961] text-[11px]"
                style={{ opacity: 0, animation: "fadeUp 0.7s ease 0.2s forwards" }}
              >
                THE AI OPERATOR SYSTEM · COHORT 01
              </p>
              <h1
                className="text-[#F2EEE5]"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 300,
                  fontStyle: "italic",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.05,
                  fontSize: "clamp(3rem, 7vw, 6rem)",
                  opacity: 0,
                  animation: "fadeUp 0.8s ease 0.4s forwards",
                }}
              >
                Quiet leverage.{" "}
                <span style={{ fontStyle: "normal", fontWeight: 400 }}>Loud</span>{" "}
                results.
              </h1>
              <hr
                className="meridian-rule w-16"
                style={{ opacity: 0, animation: "fadeUp 0.6s ease 0.6s forwards" }}
              />
              <p
                className="text-[#F2EEE5]/75 text-base lg:text-lg leading-relaxed max-w-lg"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 300,
                  opacity: 0,
                  animation: "fadeUp 0.7s ease 0.7s forwards",
                }}
              >
                A six-week program that transforms senior executives into AI operators.
                Not a course. A system. The before/after identity shift from senior IC
                who works hard to operator who compounds.
              </p>
              <div
                className="flex flex-col sm:flex-row gap-4"
                style={{ opacity: 0, animation: "fadeUp 0.7s ease 0.9s forwards" }}
              >
                <Link href="/enroll" className="meridian-cta text-[11px] px-7 py-3.5 inline-block">
                  Enroll — $1,500 →
                </Link>
                <Link href="/program" className="meridian-cta-ghost text-[11px] px-7 py-3.5 inline-block">
                  View Program
                </Link>
              </div>
              <div
                className="flex items-center gap-6 mt-2"
                style={{ opacity: 0, animation: "fadeUp 0.7s ease 1.1s forwards" }}
              >
                {[
                  { val: "06", label: "WEEKS" },
                  { val: "09", label: "MODULES" },
                  { val: "42", label: "WORKFLOWS" },
                ].map((stat, i) => (
                  <div key={stat.label} className="flex items-center gap-6">
                    {i > 0 && <div className="w-px h-8 bg-[#F2EEE5]/20" />}
                    <div>
                      <p
                        className="text-[#C9A961] text-xl font-medium"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {stat.val}
                      </p>
                      <p className="meridian-eyebrow text-[#F2EEE5]/50 text-[9px] mt-0.5">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Phone Mockups */}
            <div
              className="flex justify-center lg:justify-end"
              style={{ opacity: 0, animation: "fadeUp 1s ease 0.5s forwards" }}
            >
              <img
                src="/manus-storage/hero_phones_mockup_1642c752.png"
                alt="Meridian app on iPhone"
                className="w-full max-w-sm lg:max-w-lg xl:max-w-xl object-contain"
                style={{ filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.5))" }}
              />
            </div>
          </div>
        </div>

        {/* Bottom fade to Bone */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F2EEE5] to-transparent" />
      </section>

      {/* ============================================================
          THESIS — Pull Quote
          ============================================================ */}
      <section className="bg-[#F2EEE5] py-20 lg:py-28">
        <div className="container">
          <RevealSection className="max-w-4xl mx-auto">
            <p className="meridian-eyebrow text-[#C9A961] text-[11px] mb-6">THE THESIS</p>
            <p
              className="text-[#0B0C0E] leading-tight mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "clamp(1.75rem, 4vw, 3.5rem)",
              }}
            >
              We are not selling a course.{" "}
              <span style={{ fontStyle: "normal" }}>We are selling the identity shift.</span>
            </p>
            <hr className="meridian-rule w-full mb-6" />
            <p
              className="text-[#0B0C0E]/60 text-base lg:text-lg"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
            >
              From senior IC who works hard → operator who compounds. Bloomberg Terminal energy meets a Hermès orange box.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ============================================================
          FEATURES — The Signature Move grid
          ============================================================ */}
      <section className="bg-[#E5E1D7] py-20 lg:py-28">
        <div className="container">
          <RevealSection className="mb-16">
            <p className="meridian-eyebrow text-[#C9A961] text-[11px] mb-4">WHAT YOU BUILD</p>
            <h2
              className="text-[#0B0C0E] mb-4"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                letterSpacing: "-0.01em",
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
              }}
            >
              A system you build,
              <br />
              not a tool you rent.
            </h2>
            <hr className="meridian-rule w-16" />
          </RevealSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#0B0C0E]/10">
            {[
              { num: "01", title: "The Foundation", body: "Core principles of AI workflow automation. How operators think differently from users." },
              { num: "02", title: "Automation Architecture", body: "Build scalable AI systems. Forty-two prompts. Eleven workflows. One operator stack." },
              { num: "03", title: "The Operator Layer", body: "The mental model that separates operators from users. Status + leverage, not just productivity." },
              { num: "04", title: "Brief Intelligence", body: "Transform how you intake, process, and output information. Eliminate 60% of cognitive overhead." },
              { num: "05", title: "Meeting Architecture", body: "AI-powered meeting prep, live capture, and follow-up systems. Never summarize manually again." },
              { num: "06", title: "The Compound Stack", body: "Build workflows that compound. Each automation feeds the next. The system runs while you think." },
            ].map((feature, i) => (
              <RevealSection key={feature.num} delay={i * 80} className="bg-[#F2EEE5] p-8 lg:p-10 flex flex-col gap-4">
                <p
                  className="text-[#C9A961] text-sm"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {feature.num}
                </p>
                <h3
                  className="text-[#0B0C0E] text-xl"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
                >
                  {feature.title}
                </h3>
                <hr className="meridian-rule w-8" />
                <p
                  className="text-[#0B0C0E]/60 text-sm leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
                >
                  {feature.body}
                </p>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          MACBOOK MOCKUP — Cross-device
          ============================================================ */}
      <section className="bg-[#F2EEE5] py-20 lg:py-28 overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <RevealSection className="flex flex-col gap-6">
              <p className="meridian-eyebrow text-[#C9A961] text-[11px]">THE PLATFORM</p>
              <h2
                className="text-[#0B0C0E]"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                  fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                }}
              >
                Your operator dashboard.
                <br />
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontStyle: "italic",
                    fontWeight: 300,
                  }}
                >
                  Everywhere you work.
                </span>
              </h2>
              <hr className="meridian-rule w-16" />
              <p
                className="text-[#0B0C0E]/60 text-base leading-relaxed max-w-md"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
              >
                Access your modules, workflows, and operator stack from any device.
                The Meridian platform is built for the way executives actually work —
                in transit, between meetings, at the desk.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  "Progress tracking across all 09 modules",
                  "42 pre-built workflow templates",
                  "Downloadable operator playbooks",
                  "Private cohort access",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span
                      className="text-[#C9A961] text-xs mt-0.5"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      —
                    </span>
                    <p
                      className="text-[#0B0C0E]/70 text-sm"
                      style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              <Link href="/program" className="meridian-cta text-[11px] px-6 py-3 inline-block w-fit mt-2">
                View Full Program →
              </Link>
            </RevealSection>

            <RevealSection delay={200}>
              <img
                src="/manus-storage/macbook_iphone_mockup_abbda9fb.png"
                alt="Meridian on MacBook and iPhone"
                className="w-full object-contain"
                style={{ filter: "drop-shadow(0 20px 60px rgba(11,15,69,0.12))" }}
              />
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ============================================================
          DEEP MERIDIAN PULL QUOTE
          ============================================================ */}
      <section className="meridian-hero py-20 lg:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(rgba(242,238,229,1) 1px, transparent 1px), linear-gradient(90deg, rgba(242,238,229,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="container relative z-10">
          <RevealSection className="max-w-3xl">
            <p className="meridian-eyebrow text-[#C9A961] text-[11px] mb-6">THE REGISTER</p>
            <p
              className="text-[#F2EEE5] leading-tight mb-8"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "clamp(1.75rem, 4.5vw, 4rem)",
              }}
            >
              "You're not behind on AI.
              <br />
              You're behind on leverage."
            </p>
            <hr className="meridian-rule w-full mb-6 opacity-30" />
            <p
              className="text-[#C9A961] text-xs"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              MERIDIAN · 06 WEEKS · $1,500 · STARTS Q3
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ============================================================
          WHO IT'S FOR
          ============================================================ */}
      <section className="bg-[#F2EEE5] py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <RevealSection className="flex flex-col gap-6">
              <p className="meridian-eyebrow text-[#C9A961] text-[11px]">THE AUDIENCE</p>
              <h2
                className="text-[#0B0C0E]"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                  fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                }}
              >
                Built for the
                <br />
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontStyle: "italic",
                    fontWeight: 300,
                  }}
                >
                  Drowning Executive.
                </span>
              </h2>
              <hr className="meridian-rule w-16" />
              <p
                className="text-[#0B0C0E]/60 text-base leading-relaxed max-w-md"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
              >
                Directors, VPs, senior consultants, founders, and agency owners earning
                $180K–$500K/year who are cognitively overloaded. Paid to think — but
                60% of the week is still spent executing.
              </p>
              <p
                className="text-[#0B0C0E]/60 text-base leading-relaxed max-w-md"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
              >
                If Gary Vee's AI course is a CrossFit box, Meridian is a private
                strength coach in Tribeca. Same muscle built — completely different room.
              </p>
            </RevealSection>

            <RevealSection delay={150} className="grid grid-cols-2 gap-px bg-[#0B0C0E]/10">
              {[
                { label: "MIN. TARGET COMP", value: "$180K" },
                { label: "PRIMARY AGE WINDOW", value: "32–48" },
                { label: "TICKET PRICE", value: "$1,500" },
                { label: "PROGRAM LENGTH", value: "06 WK" },
              ].map((stat) => (
                <div key={stat.label} className="bg-[#F2EEE5] p-6 lg:p-8 flex flex-col gap-2">
                  <p className="meridian-eyebrow text-[#C9A961] text-[9px]">{stat.label}</p>
                  <p
                    className="text-[#0B0C0E] text-2xl lg:text-3xl font-medium"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {stat.value}
                  </p>
                </div>
              ))}
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ============================================================
          TESTIMONIALS
          ============================================================ */}
      <section className="bg-[#E5E1D7] py-20 lg:py-28">
        <div className="container">
          <RevealSection className="mb-12">
            <p className="meridian-eyebrow text-[#C9A961] text-[11px] mb-4">OPERATOR VOICES</p>
            <h2
              className="text-[#0B0C0E]"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                letterSpacing: "-0.01em",
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
              }}
            >
              The room speaks for itself.
            </h2>
            <hr className="meridian-rule w-16 mt-4" />
          </RevealSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-[#0B0C0E]/10">
            {[
              {
                quote: "I walked into my next board meeting and casually mentioned 'the system I built.' The room shifted. That's what Meridian does.",
                name: "Director of Operations",
                company: "Series B SaaS",
              },
              {
                quote: "I've tried every AI course. Meridian is the first one that felt like it was built for someone at my level. No hand-holding. No guru energy.",
                name: "VP of Strategy",
                company: "Global Consulting Firm",
              },
              {
                quote: "Six weeks. My meeting prep went from 90 minutes to 12. My weekly report from 3 hours to 20 minutes. The ROI is embarrassing.",
                name: "Founder & CEO",
                company: "Agency, $4M ARR",
              },
            ].map((t, i) => (
              <RevealSection key={i} delay={i * 100} className="bg-[#F2EEE5] p-8 lg:p-10 flex flex-col gap-6">
                <div className="w-8 h-px bg-[#C9A961]" />
                <p
                  className="text-[#0B0C0E] text-lg leading-relaxed flex-1"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontStyle: "italic",
                    fontWeight: 300,
                  }}
                >
                  "{t.quote}"
                </p>
                <div>
                  <p
                    className="text-[#0B0C0E] text-sm font-medium"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-[#0B0C0E]/50 text-xs mt-0.5"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {t.company}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          FINAL CTA
          ============================================================ */}
      <section className="bg-[#0B0C0E] py-20 lg:py-28">
        <div className="container">
          <RevealSection className="max-w-2xl flex flex-col gap-6">
            <p className="meridian-eyebrow text-[#C9A961] text-[11px]">READY TO OPERATE?</p>
            <h2
              className="text-[#F2EEE5]"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "clamp(1.75rem, 4vw, 3.5rem)",
              }}
            >
              Design does the closing.
              <br />
              <span
                style={{
                  fontStyle: "normal",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.65em",
                }}
              >
                The aesthetic has already pre-sold the price.
              </span>
            </h2>
            <hr className="meridian-rule w-16" />
            <p
              className="text-[#F2EEE5]/60 text-base leading-relaxed max-w-md"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
            >
              Six weeks. Nine modules. One operator stack. The before/after identity
              shift that makes $1,500 feel like the cheapest investment you've made.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/enroll" className="meridian-cta text-[11px] px-7 py-3.5 inline-block">
                Enroll Now — $1,500 →
              </Link>
              <Link
                href="/program"
                className="meridian-cta-ghost text-[11px] px-7 py-3.5 inline-block"
                style={{ borderColor: "rgba(242,238,229,0.3)", color: "rgba(242,238,229,0.7)" }}
              >
                View Program
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
