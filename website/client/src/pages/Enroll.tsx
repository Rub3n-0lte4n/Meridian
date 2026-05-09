/**
 * MERIDIAN — Enroll Page
 * Design: Premium Editorial Magazine
 * Sections: Hero (Deep Meridian), Pricing, What's included, FAQ, CTA
 */
import { useEffect, useState } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { toast } from "sonner";

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

const faqs = [
  {
    q: "Who is this for?",
    a: "Directors, VPs, senior consultants, founders, and agency owners earning $180K–$500K/year who are cognitively overloaded. If you've tried a Skool community and hated it, this is the alternative.",
  },
  {
    q: "What's the time commitment?",
    a: "Six weeks. The curriculum is designed for executive schedules — not 4-hour daily sessions. Expect 3–5 hours per week of focused work.",
  },
  {
    q: "Is this a live course or self-paced?",
    a: "Self-paced with cohort access. You move through the nine modules at your own pace, with access to a private cohort of operators at your level.",
  },
  {
    q: "What if I've already tried AI tools?",
    a: "Good. This isn't for beginners. Meridian assumes you know AI is interesting — it teaches you to make it a daily reflex and build a compound system around it.",
  },
  {
    q: "Is there a refund policy?",
    a: "Yes. If you complete the first two modules and don't find value, we'll refund your investment in full. We're confident in the system.",
  },
  {
    q: "When does the next cohort start?",
    a: "Q3 2026. Enrollment is open now. Cohort size is intentionally limited to maintain the quality of the operator community.",
  },
];

export default function Enroll() {
  useReveal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#0B0F45]">
      <Navigation />

      {/* ============================================================
          HERO — Full Deep Meridian
          ============================================================ */}
      <section className="meridian-hero min-h-[60vh] flex flex-col justify-center relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-28">
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "linear-gradient(rgba(242,238,229,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(242,238,229,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <p className="meridian-eyebrow text-[#C9A961] text-[11px] mb-5 reveal">
              ENROLLMENT · COHORT 01 · Q3 2026
            </p>
            <h1
              className="text-[#F2EEE5] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mb-6 reveal reveal-delay-1"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic", fontWeight: 300, letterSpacing: "-0.02em", lineHeight: 1.05 }}
            >
              Enroll.
            </h1>
            <hr className="meridian-rule w-full mb-6 opacity-30 reveal reveal-delay-2" />
            <p className="meridian-body text-[#F2EEE5]/70 text-base lg:text-lg leading-relaxed max-w-xl reveal reveal-delay-3">
              One price. One system. One identity shift. The investment is $1,500.
              The return is measured in hours recovered and leverage compounded.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          PRICING CARD
          ============================================================ */}
      <section className="bg-[#F2EEE5] py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Pricing */}
            <div className="reveal flex flex-col gap-0 bg-[#F2EEE5] border border-[#0B0C0E]/10">
              {/* Header */}
              <div className="bg-[#0B0F45] p-8 lg:p-10">
                <p className="meridian-eyebrow text-[#C9A961] text-[11px] mb-4">THE INVESTMENT</p>
                <div className="flex items-end gap-3 mb-2">
                  <p className="meridian-mono text-[#F2EEE5] text-5xl lg:text-6xl font-medium">$1,500</p>
                </div>
                <p className="meridian-mono text-[#C9A961] text-sm">ONE-TIME · NO SUBSCRIPTION</p>
              </div>

              {/* Details */}
              <div className="p-8 lg:p-10 flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  {[
                    "09 structured modules",
                    "42 pre-built workflow templates",
                    "06 weeks of cohort access",
                    "Downloadable operator playbooks",
                    "Private community of operators",
                    "Lifetime access to all materials",
                    "Full refund if no value after Module 02",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="meridian-mono text-[#C9A961] text-xs mt-0.5">✓</span>
                      <p className="text-[#0B0C0E]/80 text-sm">{item}</p>
                    </div>
                  ))}
                </div>

                <hr className="meridian-rule" />

                <button
                  onClick={() => toast.info("Enrollment opens Q3 2026. Join the waitlist below.")}
                  className="meridian-cta text-[11px] px-7 py-4 w-full text-center"
                >
                  Enroll Now — $1,500 →
                </button>

                <p className="meridian-mono text-[#0B0C0E]/40 text-xs text-center">
                  STARTS Q3 2026 · COHORT SIZE LIMITED
                </p>
              </div>
            </div>

            {/* What this is NOT */}
            <div className="reveal reveal-delay-2 flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <p className="meridian-eyebrow text-[#C9A961] text-[11px]">THE COMPARISON</p>
                <h2
                  className="text-[#0B0C0E] text-3xl sm:text-4xl"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, letterSpacing: "-0.01em" }}
                >
                  Not a course.
                  <br />
                  <span
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic", fontWeight: 300 }}
                  >
                    A private strength coach.
                  </span>
                </h2>
                <hr className="meridian-rule w-16" />
                <p className="meridian-body text-[#0B0C0E]/60 text-base leading-relaxed">
                  If Gary Vee's AI course is a CrossFit box, Meridian is a private strength
                  coach in Tribeca. Same muscle built — completely different room.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-px bg-[#0B0C0E]/10">
                {[
                  {
                    label: "MERIDIAN",
                    items: ["Operator-grade curriculum", "Executive-level cohort", "Compound workflow system", "Identity shift, not tips"],
                    dark: true,
                  },
                  {
                    label: "EVERYTHING ELSE",
                    items: ["Beginner tutorials", "Skool communities", "One-off prompt packs", "\"Secrets\" and \"Blueprints\""],
                    dark: false,
                  },
                ].map((col) => (
                  <div
                    key={col.label}
                    className={`p-6 flex flex-col gap-3 ${col.dark ? "bg-[#0B0F45]" : "bg-[#F2EEE5]"}`}
                  >
                    <p className={`meridian-eyebrow text-[10px] ${col.dark ? "text-[#C9A961]" : "text-[#0B0C0E]/40"}`}>
                      {col.label}
                    </p>
                    {col.items.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <span className={`meridian-mono text-xs mt-0.5 ${col.dark ? "text-[#C9A961]" : "text-[#0B0C0E]/30"}`}>
                          {col.dark ? "✓" : "×"}
                        </span>
                        <p className={`text-sm ${col.dark ? "text-[#F2EEE5]/80" : "text-[#0B0C0E]/40 line-through"}`}>
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FAQ
          ============================================================ */}
      <section className="bg-[#E5E1D7] py-20 lg:py-28">
        <div className="container">
          <div className="reveal mb-12">
            <p className="meridian-eyebrow text-[#C9A961] text-[11px] mb-4">FREQUENTLY ASKED</p>
            <h2
              className="text-[#0B0C0E] text-3xl sm:text-4xl"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, letterSpacing: "-0.01em" }}
            >
              Questions worth asking.
            </h2>
            <hr className="meridian-rule w-16 mt-4" />
          </div>

          <div className="max-w-3xl flex flex-col gap-px bg-[#0B0C0E]/10">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`bg-[#F2EEE5] reveal reveal-delay-${Math.min(i % 3 + 1, 3)}`}
              >
                <button
                  className="w-full text-left p-6 lg:p-8 flex items-start justify-between gap-4"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <p
                    className="text-[#0B0C0E] text-base"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
                  >
                    {faq.q}
                  </p>
                  <span className="meridian-mono text-[#C9A961] text-lg flex-shrink-0 mt-0.5">
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-400 ${
                    openFaq === i ? "max-h-48 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="meridian-body text-[#0B0C0E]/60 text-sm leading-relaxed px-6 lg:px-8">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          FINAL CTA — Deep Meridian
          ============================================================ */}
      <section className="meridian-hero py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "linear-gradient(rgba(242,238,229,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(242,238,229,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="container relative z-10">
          <div className="max-w-2xl reveal flex flex-col gap-6">
            <p className="meridian-eyebrow text-[#C9A961] text-[11px]">THE DECISION</p>
            <h2
              className="text-[#F2EEE5] text-3xl sm:text-4xl lg:text-5xl"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic", fontWeight: 300 }}
            >
              Design does the closing.
            </h2>
            <hr className="meridian-rule w-full opacity-30" />
            <p className="meridian-body text-[#F2EEE5]/70 text-base leading-relaxed max-w-md">
              When a VP of Operations lands on this page and sees Editorial New italic
              setting a headline against Obsidian, with a brass eyebrow reading
              MODULE 04 — THE OPERATOR LAYER — they are not comparing this to a Kajabi course.
              They're comparing it to Wharton Online. The aesthetic has already pre-sold the price.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => toast.info("Enrollment opens Q3 2026. You'll be notified.")}
                className="meridian-cta text-[11px] px-7 py-3.5 inline-block"
              >
                Enroll Now — $1,500 →
              </button>
              <Link href="/program" className="meridian-cta-ghost text-[11px] px-7 py-3.5 inline-block">
                View Program First
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
