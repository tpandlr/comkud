"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const drawer =
    mounted &&
    createPortal(
      <div className="lg:hidden">
        <button
          type="button"
          className={`mobile-drawer-backdrop ${open ? "is-open" : ""}`}
          aria-label="Close menu"
          tabIndex={open ? 0 : -1}
          onClick={() => setOpen(false)}
        />
        <aside
          id="mobile-sidebar"
          className={`mobile-drawer ${open ? "is-open" : ""}`}
          aria-hidden={!open}
        >
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-3">
            <BrandMark onClick={() => setOpen(false)} />
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={
                    active
                      ? "rounded-md bg-surface-container-low px-4 py-3 text-[15px] font-medium text-primary"
                      : "rounded-md px-4 py-3 text-[15px] text-slate-600"
                  }
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="border-t border-slate-100 p-5">
            <QuoteCta
              variant="header"
              className="flex w-full justify-center"
              onClick={() => setOpen(false)}
            />
          </div>
        </aside>
      </div>,
      document.body,
    );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white">
      <div className="mx-auto flex w-full max-w-[1230px] items-center justify-between gap-3 px-5 py-3 md:px-7 md:py-4">
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
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-sidebar"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="material-symbols-outlined">{open ? "close" : "menu"}</span>
        </button>
      </div>
      {drawer}
    </header>
  );
}
