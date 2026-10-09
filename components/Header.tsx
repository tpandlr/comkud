"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandMark } from "@/components/BrandMark";
import { QuoteCta } from "@/components/QuoteCta";
import { navLinks } from "@/lib/content";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white">
      <div className="mx-auto flex w-full max-w-[1230px] items-center justify-between px-7 py-4">
        <BrandMark onClick={() => setOpen(false)} />

        <div className="hidden items-center gap-7 lg:flex">
          <nav className="flex items-center gap-7">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={
                    active
                      ? "text-[14px] font-medium text-primary"
                      : "text-[14px] font-normal text-slate-500 hover:text-primary"
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <QuoteCta variant="header" />
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center lg:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>

      {open ? (
        <div className="px-7 pb-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={active ? "text-sm font-medium text-primary" : "text-sm text-slate-600"}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-2 inline-flex justify-center">
              <QuoteCta variant="header" onClick={() => setOpen(false)} />
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
