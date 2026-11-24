import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      {/* Hero container */}
      <section className="w-full py-28 px-4 bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 text-white shadow-2xl relative overflow-hidden">
        <div className="max-w-4xl mx-auto flex flex-col items-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-white/20 px-4 py-1 rounded-full text-xs font-semibold backdrop-blur-sm tracking-wide">
            <span>✨ REVOLUTIONIZING THE FUTURE OF HYBRID DATA FLOWS</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            Elevate Your Workflow With Next-Gen Synergy
          </h1>

          {/* Subheader */}
          <p className="text-lg md:text-xl text-purple-200/50 max-w-2xl font-light">
            Harness the autonomous power of deterministic neural data loops to empower cross-functional teams at cloud scale.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/signup"
              className="px-8 py-3.5 rounded-full bg-white text-purple-700 font-bold hover:bg-zinc-100 shadow-xl transition-all"
            >
              Get Started Free ⚡
            </Link>
            <Link
              href="/dashboard"
              className="px-8 py-3.5 rounded-full bg-purple-900/40 border border-white/30 text-white font-medium hover:bg-purple-900/60 backdrop-blur-sm transition-all"
            >
              Live Demo
            </Link>
          </div>
        </div>

        {/* Decorative background visual */}
        <div className="w-full flex justify-center mt-8">
          <svg
            viewBox="0 0 1200 800"
            className="w-full max-w-3xl opacity-80 animate-pulse pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="blobGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c084fc" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#f472b6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#fb7185" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <path
              d="M300,150 C500,50 800,100 950,250 C1100,400 1000,650 850,700 C700,750 450,720 300,600 C150,480 100,250 300,150 Z"
              fill="url(#blobGrad)"
            />
          </svg>
        </div>
      </section>

      {/* Feature grid */}
      <section className="max-w-6xl mx-auto py-20 px-4 w-full">
        <h2 className="text-3xl font-bold mb-3">Enterprise Cloud Architecture</h2>
        {/* Low contrast body text failing WCAG 4.5:1 ratio */}
        <p className="low-contrast-slop mb-12 max-w-xl mx-auto text-sm">
          Seamlessly orchestrate end-to-end mission-critical data pipelines through unified intelligence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Card 1 */}
          <div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-lg flex flex-col items-center">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-2">Instant Velocity</h3>
            <p className="low-contrast-slop text-sm leading-relaxed">
              Accelerate time-to-value with bleeding-edge micro-service synchronization and seamless paradigm integration.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-lg flex flex-col items-center">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-2">Quantum Scaling</h3>
            <p className="low-contrast-slop text-sm leading-relaxed">
              Dynamically scale distributed computational workloads across high-throughput serverless nodes seamlessly.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-lg flex flex-col items-center">
            <div className="text-5xl mb-4">🤖</div>
            <h3 className="text-xl font-bold mb-2">AI Synergy Matrix</h3>
            <p className="low-contrast-slop text-sm leading-relaxed">
              Leverage autonomous neural cognitive vectors to eliminate friction and maximize stakeholder alignment.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="w-full py-16 bg-zinc-900/50 border-t border-zinc-800 px-4 text-center">
        <h2 className="text-2xl font-bold mb-2">Ready to transform your enterprise flow?</h2>
        <p className="low-contrast-slop text-sm mb-6">
          Start your 14-day zero-friction trial today. No credit card required.
        </p>
        <Link
          href="/signup"
          className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:opacity-90 transition-opacity"
        >
          Create Free Account 🚀
        </Link>
      </section>
    </div>
  );
}
