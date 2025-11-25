"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black text-white">
      {/* glowing gradient blob */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-gradient-to-tr from-emerald-500 via-cyan-400 to-fuchsia-500 opacity-30 blur-3xl" />
        <div className="absolute bottom-[-120px] left-10 h-72 w-72 rounded-full bg-gradient-to-tr from-fuchsia-500 via-purple-500 to-sky-500 opacity-20 blur-3xl" />
      </div>

      {/* 404 text */}
      <div className="relative flex flex-col items-center px-4 text-center">
        <div className="relative mb-6">
          <span className="pointer-events-none absolute -inset-6 rounded-full bg-emerald-400/10 blur-2xl" />
          <h1 className="relative text-7xl font-black tracking-[0.3em] text-white/90 sm:text-8xl">
            404
          </h1>
        </div>

        <p className="mb-2 text-sm font-medium uppercase tracking-[0.35em] text-neutral-400">
          Page not found
        </p>

        <p className="mb-8 max-w-md text-sm text-neutral-400">
          The page you are looking for has drifted into the void. Let&apos;s
          guide you back to something real.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full border border-emerald-400/60 bg-emerald-500/10 px-6 py-2 text-sm font-medium text-emerald-100 shadow-[0_0_25px_rgba(16,185,129,0.35)] transition hover:bg-emerald-500/20 hover:text-white"
          >
            <span>Back to home</span>
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>

          <Link
            href="/contact-us"
            className="inline-flex items-center rounded-full border border-neutral-700 px-6 py-2 text-sm font-medium text-neutral-300 transition hover:border-neutral-500 hover:bg-neutral-900/80"
          >
            Contact support
          </Link>
        </div>
      </div>

      {/* subtle bottom line */}
      <div className="mt-10 text-xs text-neutral-600">
        <span className="inline-block h-px w-8 bg-neutral-700 align-middle" />{" "}
        <span className="align-middle">Lost in navigation</span>{" "}
        <span className="inline-block h-px w-8 bg-neutral-700 align-middle" />
      </div>
    </div>
  );
}
