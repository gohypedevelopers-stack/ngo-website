"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  {
    label: "The Crisis",
    href: "/the-crisis",
  },
  {
    label: "Our Work",
    href: "/our-work",
  },
  {
    label: "The Hui",
    href: "/the-hui",
  },
  {
    label: "Get Involved",
    href: "/get-involved",
  },
  { label: "News & Research", href: "/news-research" },
  { label: "Contact", href: "/contact" },
];

export function SiteNav({ theme = "dark" }: { theme?: "light" | "dark" }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? theme === "light"
            ? "border-b border-slate-200 bg-white/95 py-3 backdrop-blur-md shadow-sm"
            : "border-b border-white/10 bg-slate-950/95 py-3 backdrop-blur-md shadow-lg"
          : "border-b border-transparent bg-transparent py-5",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 sm:px-8">
        <a href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Hui Nehu Logo"
            width={64}
            height={64}
            className="h-16 w-auto object-contain bg-white rounded-lg p-1 shadow-sm"
            priority
            loading="eager"
          />
        </a>

        <ul className="hidden items-center gap-5 lg:flex xl:gap-7">
          {links.map((link) => (
            <li key={link.href} className="relative group">
              <a
                href={link.href}
                className={cn(
                  "group relative whitespace-nowrap text-xs font-semibold tracking-wide transition-colors lg:text-sm flex items-center gap-1 py-2",
                  theme === "light"
                    ? "text-slate-600 hover:text-slate-900"
                    : "text-slate-300 hover:text-white",
                )}
              >
                {link.label}
                {link.dropdown && (
                  <svg
                    className="h-3 w-3 opacity-60 transition-transform group-hover:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-px w-0 transition-all duration-300 group-hover:w-full",
                    theme === "light" ? "bg-teal-600" : "bg-teal-400",
                  )}
                />
              </a>

              {link.dropdown && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full hidden group-hover:block w-56 pt-2">
                  <ul
                    className={cn(
                      "rounded-xl border p-2 shadow-lg backdrop-blur-md",
                      theme === "light"
                        ? "border-slate-200 bg-white/95 text-slate-800"
                        : "border-white/10 bg-slate-950/95 text-slate-200",
                    )}
                  >
                    {link.dropdown.map((sub) => (
                      <li key={sub.href}>
                        <a
                          href={sub.href}
                          className={cn(
                            "block rounded-lg px-4 py-2.5 text-xs font-medium transition-colors",
                            theme === "light"
                              ? "hover:bg-slate-100 hover:text-teal-600"
                              : "hover:bg-white/10 hover:text-teal-400",
                          )}
                        >
                          {sub.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="/donate"
            className={cn(
              "hidden whitespace-nowrap rounded-full border px-4 py-2 text-xs font-semibold transition-all xl:inline-block xl:px-5 xl:text-sm backdrop-blur-sm",
              theme === "light"
                ? "border-slate-900/20 bg-slate-900/5 text-slate-900 hover:bg-slate-900 hover:text-white"
                : "border-white/20 bg-white/5 text-white hover:bg-white hover:text-slate-950",
            )}
          >
            Donate now
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden",
              theme === "light"
                ? "text-slate-900 hover:bg-slate-100"
                : "text-white hover:bg-white/10",
            )}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-500 ease-in-out lg:hidden",
          open ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="flex flex-col px-6 pb-10 pt-4">
          {links.map((link) => (
            <li 
              key={link.href} 
              className={cn(
                "flex flex-col border-b",
                theme === "light" ? "border-slate-100" : "border-white/5"
              )}
            >
              {link.dropdown ? (
                <>
                  <span
                    className={cn(
                      "px-2 pt-5 pb-2 text-xs font-bold uppercase tracking-widest",
                      theme === "light" ? "text-slate-400" : "text-slate-500",
                    )}
                  >
                    {link.label}
                  </span>
                  <div className="flex flex-col pl-4 mb-4 space-y-1">
                    {link.dropdown.map((sub) => (
                      <a
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "group flex items-center justify-between rounded-lg px-2 py-3 text-base font-medium transition-all",
                          theme === "light"
                            ? "text-slate-600 hover:text-teal-600"
                            : "text-slate-300 hover:text-teal-400",
                        )}
                      >
                        <span className="transition-transform group-hover:translate-x-2">{sub.label}</span>
                        <ChevronRight className="h-4 w-4 opacity-0 transition-all group-hover:opacity-100 group-hover:-translate-x-1" />
                      </a>
                    ))}
                  </div>
                </>
              ) : (
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "group flex items-center justify-between px-2 py-5 text-lg font-medium transition-all",
                    theme === "light"
                      ? "text-slate-700 hover:text-teal-600"
                      : "text-slate-200 hover:text-teal-400",
                  )}
                >
                  <span className="transition-transform group-hover:translate-x-2">{link.label}</span>
                  <ChevronRight className="h-5 w-5 opacity-0 transition-all group-hover:opacity-100 group-hover:-translate-x-1" />
                </a>
              )}
            </li>
          ))}
          <li className="pt-8">
            <a
              href="/donate"
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center justify-center w-full rounded-full px-6 py-4 text-base font-bold transition-all shadow-lg active:scale-95",
                theme === "light"
                  ? "bg-slate-900 text-white hover:bg-teal-600 hover:shadow-teal-600/25"
                  : "bg-white text-slate-950 hover:bg-teal-400 hover:shadow-teal-400/25",
              )}
            >
              Donate now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

