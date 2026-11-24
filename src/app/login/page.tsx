"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (loginEmail?: string, loginPassword?: string) => {
    setError("");
    setLoading(true);

    const submitEmail = loginEmail || email;
    const submitPassword = loginPassword || password;

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: submitEmail, password: submitPassword }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Login failed");
        setLoading(false);
        return;
      }

      // Store basic info for client convenience
      localStorage.setItem("flowvault_user", JSON.stringify(data.user));
      localStorage.setItem("flowvault_token", data.token);

      if (data.user?.role === "admin") {
        router.push("/admin");
      } else {
        router.push("/dashboard");
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md p-8 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            FlowVault Sign In
          </h1>
          <p className="text-xs text-zinc-400">
            Sign in to access your orders, notes, and AI workspace.
          </p>
        </div>

        {error && (
          <div className="p-3 bg-red-950/60 border border-red-800 text-red-300 text-xs rounded-lg">
            {error}
          </div>
        )}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
          className="space-y-4"
        >
          <div>
            <label className="block text-xs font-medium text-zinc-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="user@example.com"
              className="w-full px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-zinc-100 placeholder-zinc-600 focus:border-purple-500"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-300 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-zinc-100 placeholder-zinc-600 focus:border-purple-500"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium text-sm transition-colors shadow-lg"
          >
            {loading ? "Authenticating..." : "Sign In"}
          </button>
        </form>

        {/* 1-Click Workshop Quick-Login Helpers */}
        <div className="pt-4 border-t border-zinc-800 space-y-2">
          <p className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider text-center">
            Workshop Quick-Select
          </p>
          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => handleLogin("usera@example.com", "Password123!")}
              className="px-2 py-1.5 rounded bg-zinc-800 hover:bg-purple-900/50 hover:border-purple-600 border border-zinc-700 text-xs font-medium text-zinc-300 transition-colors"
            >
              User A
            </button>
            <button
              type="button"
              onClick={() => handleLogin("userb@example.com", "Password123!")}
              className="px-2 py-1.5 rounded bg-zinc-800 hover:bg-purple-900/50 hover:border-purple-600 border border-zinc-700 text-xs font-medium text-zinc-300 transition-colors"
            >
              User B
            </button>
            <button
              type="button"
              onClick={() => handleLogin("admin@example.com", "Admin123!")}
              className="px-2 py-1.5 rounded bg-zinc-800 hover:bg-amber-900/50 hover:border-amber-600 border border-zinc-700 text-xs font-medium text-amber-300 transition-colors"
            >
              Admin
            </button>
          </div>
        </div>

        <div className="text-center text-xs text-zinc-500">
          Need an account?{" "}
          <Link href="/signup" className="text-purple-400 hover:underline">
            Sign up here
          </Link>
        </div>
      </div>
    </div>
  );
}
