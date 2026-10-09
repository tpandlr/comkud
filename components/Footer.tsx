import Link from "next/link";
import { QuoteCta } from "@/components/QuoteCta";
import { navLinks, quotationEmail, services } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-footer text-white">
      <div className="mx-auto grid max-w-[1230px] grid-cols-1 gap-12 px-7 py-16 md:grid-cols-3">
        <div>
          <p className="font-headline text-[22px] font-semibold">COMKUD Analytical Solutions</p>
          <p className="mt-3 text-[14px] text-white/70">Zimbabwe</p>
          <p className="mt-4 text-[14px] text-white/70">
            Environmental Monitoring · Compliance · Analytical Services
          </p>
        </div>
        <div>
          <p className="text-[13px] font-medium text-white/80">Services</p>
          <ul className="mt-4 space-y-3 text-[14px] text-white/70">
            {services.map((service) => (
              <li key={service.title}>
                <Link href="/services" className="hover:text-white">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[13px] font-medium text-white/80">Site</p>
          <ul className="mt-4 space-y-3 text-[14px] text-white/70">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a href={`mailto:${quotationEmail}`} className="mt-6 block text-[14px] hover:text-white">
            {quotationEmail}
          </a>
          <QuoteCta variant="footer" />
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-[1230px] px-7 py-5 text-[12px] text-white/50">
          COMKUD Analytical Solutions · Zimbabwe · comkud.co.zw
        </p>
      </div>
    </footer>
  );
}
