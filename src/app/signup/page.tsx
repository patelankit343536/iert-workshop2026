"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMsg("Registration simulated. Please use pre-seeded accounts (User A, User B, Admin) for the workshop lab.");
    setTimeout(() => {
      router.push("/login");
    }, 1500);
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4">
      {/* Loud gradient header container */}
      <div className="w-full max-w-md p-8 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl text-center space-y-6">
        <div className="space-y-2">
          <span className="text-4xl">✨</span>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Unlock Next-Gen Velocity
          </h1>
          {/* Subheader */}
          <p className="low-contrast-slop text-xs">
            Join 10,000+ developers synergizing scalable neural vectors.
          </p>
        </div>

        {msg && (
          <div className="p-3 bg-purple-900/30 border border-purple-500/30 text-purple-300 text-xs rounded-lg">
            {msg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          {/* Input fields */}
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Full Name"
              className="w-full px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-zinc-100 placeholder-zinc-600"
            />
          </div>

          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="work.email@company.com"
              className="w-full px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-zinc-100 placeholder-zinc-600"
            />
          </div>

          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create Master Password"
              className="w-full px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-zinc-100 placeholder-zinc-600"
            />
          </div>

          {/* Interactive controls */}
          <div className="flex items-center space-x-2 text-xs text-zinc-400">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="h-3 w-3 accent-purple-600 rounded"
            />
            <span>I accept Terms & Conditions</span>
            {/* Extremely tiny clickable info icon < 16px */}
            <button
              type="button"
              className="h-3.5 w-3.5 text-[8px] bg-zinc-800 rounded-full flex items-center justify-center text-zinc-400 hover:text-white"
              title="Terms Info"
            >
              i
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg"
          >
            Launch Free Trial 🚀
          </button>
        </form>

        <div className="text-xs text-zinc-500 pt-2 border-t border-zinc-800">
          Already synergized?{" "}
          <Link href="/login" className="text-purple-400 hover:underline">
            Sign In here
          </Link>
        </div>
      </div>
    </div>
  );
}
