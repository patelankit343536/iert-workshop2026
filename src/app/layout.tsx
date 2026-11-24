import type { Metadata } from "next";
import "./globals.css";
import { DebugFooter } from "@/components/DebugFooter";

export const metadata: Metadata = {
  title: "FlowVault - Intelligent SaaS Data Platform",
  description: "Next-gen synergy for your enterprise cloud workflow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col bg-zinc-950 text-zinc-100">
        <header className="border-b border-zinc-800 bg-zinc-900/60 backdrop-blur-md px-6 py-4 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                FlowVault
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 font-medium">
                vibe-coded
              </span>
            </div>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a href="/" className="hover:text-purple-400 transition-colors">
                Home
              </a>
              <a href="/dashboard" className="hover:text-purple-400 transition-colors">
                Dashboard
              </a>
              <a href="/admin" className="hover:text-amber-400 transition-colors">
                Admin
              </a>
              <a href="/login" className="px-3 py-1.5 rounded-md bg-purple-600 hover:bg-purple-700 text-white transition-colors">
                Sign In
              </a>
            </nav>
          </div>
        </header>
        <main className="flex-1 flex flex-col">{children}</main>
        <DebugFooter />
      </body>
    </html>
  );
}
