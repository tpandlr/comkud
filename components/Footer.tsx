import Image from "next/image";
import Link from "next/link";
import { QuoteCta } from "@/components/QuoteCta";
import { companyAddress, navLinks, phones, quotationEmail, services, tagline } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-deep text-white">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-12 px-4 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-10 lg:py-20">
        <div>
          <Image
            src="/images/logo.png"
            alt="COMKUD Analytical Solutions"
            width={835}
            height={278}
            className="h-10 w-auto brightness-0 invert md:h-11"
          />
          <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-white/70">{tagline}</p>
          <p className="mt-4 text-[14px] leading-relaxed text-white/60">{companyAddress}</p>
        </div>
        <div>
          <p className="eyebrow text-ochre">Services</p>
          <ul className="mt-5 space-y-3 text-[14px] text-white/70">
            {services.map((service) => (
              <li key={service.title}>
                <Link href="/services" className="footer-link hover:text-white">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow text-ochre">Site</p>
          <ul className="mt-5 space-y-3 text-[14px] text-white/70">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="footer-link hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow text-ochre">Contact</p>
          <a
            href={`mailto:${quotationEmail}`}
            className="footer-link mt-5 inline-block text-[14px] text-white/90 hover:text-white"
          >
            {quotationEmail}
          </a>
          <ul className="mt-4 space-y-2 text-[14px] text-white/80">
            {phones.map((phone) => (
              <li key={phone.href}>
                <a href={phone.href} className="footer-link hover:text-white">
                  {phone.display}
                </a>
              </li>
            ))}
          </ul>
          <QuoteCta variant="footer" />
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-[1320px] px-4 py-5 text-[12px] text-white/45 lg:px-10">
          © 2026 Comkud Analytical Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
