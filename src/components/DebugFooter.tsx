"use client";

import React, { useState } from "react";

export function DebugFooter() {
  const [showConfig, setShowConfig] = useState(false);

  // Client-exposed environment variable containing service_role key
  const serviceRoleKey = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY || "NOT_CONFIGURED";
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "NOT_CONFIGURED";
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "http://127.0.0.1:54321";

  return (
    <footer className="mt-auto border-t border-zinc-800 bg-zinc-950 px-4 py-3 text-xs text-zinc-500">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div>
          <span>FlowVault v1.0.0-rc3 (Workshop Edition)</span>
          <span className="ml-3 text-zinc-600">|</span>
          <button
            onClick={() => setShowConfig(!showConfig)}
            className="ml-3 text-zinc-400 hover:text-zinc-200 underline"
          >
            {showConfig ? "Hide Diagnostics" : "System Diagnostics"}
          </button>
        </div>
        <div className="text-zinc-600">
          Environment: local-hybrid
        </div>
      </div>

      {showConfig && (
        <div className="mx-auto mt-3 max-w-7xl rounded bg-zinc-900 p-3 font-mono text-[11px] text-zinc-300">
          <div className="font-bold text-amber-400 mb-1">Developer Debug Overlay</div>
          <div>Endpoint: {supabaseUrl}</div>
          <div className="truncate">Anon Key: {anonKey}</div>
          <div className="truncate text-red-400">
            Internal Service Role Token: {serviceRoleKey}
          </div>
        </div>
      )}
    </footer>
  );
}
