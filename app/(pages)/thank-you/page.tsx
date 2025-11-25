// app/(pages)/thank-you/page.tsx
"use client";

import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black text-white">
      {/* glow background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-gradient-to-tr from-emerald-500 via-cyan-400 to-fuchsia-500 opacity-30 blur-3xl" />
        <div className="absolute bottom-[-120px] right-10 h-72 w-72 rounded-full bg-gradient-to-tr from-fuchsia-500 via-purple-500 to-sky-500 opacity-20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-md px-6 text-center">
        {/* icon circle */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 ring-1 ring-emerald-400/40 shadow-[0_0_35px_rgba(16,185,129,0.55)]">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-black">
            <svg className="h-7 w-7" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M9.5 16.2 5.8 12.5 4.4 13.9 9.5 19 20 8.5 18.6 7.1 9.5 16.2Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>

        <h1 className="mb-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          Thank you for reaching out
        </h1>

        <p className="mb-6 text-sm text-neutral-400">
          Your message has been received. The team will get back to you as soon
          as possible at the email you provided.
        </p>

        <div className="mb-10 inline-flex items-center justify-center gap-3 text-xs text-neutral-500">
          <span className="inline-block h-px w-6 bg-neutral-700" />
          <span>What would you like to do next?</span>
          <span className="inline-block h-px w-6 bg-neutral-700" />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full border border-emerald-400/70 bg-emerald-500/10 px-6 py-2 text-sm font-medium text-emerald-100 shadow-[0_0_25px_rgba(16,185,129,0.45)] transition hover:bg-emerald-500/20 hover:text-white"
          >
            <span>Back to home</span>
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>

      <p className="mt-10 text-[11px] uppercase tracking-[0.25em] text-neutral-600">
        We&apos;ll be in touch soon
      </p>
    </div>
  );
}
