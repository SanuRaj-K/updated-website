"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

const links = [{ label: "Work", href: "#work" }, { label: "About", href: "#about" }, { label: "Experience", href: "#experience" }, { label: "Contact", href: "#contact" }];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = links.map(({ href }) => document.querySelector(href)).filter(Boolean) as Element[];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(`#${visible.target.id}`);
    }, { rootMargin: "-30% 0px -60%", threshold: [0, .25, .5] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b hairline bg-[#f2f0e9]/90 backdrop-blur-xl">
      <nav className="shell flex h-16 items-center justify-between" aria-label="Primary navigation">
        <a href="#" className="flex items-center gap-3 font-semibold tracking-[-.04em]" aria-label="Sanu Raj, home">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[#151512] text-[10px] text-[#f2f0e9]">{portfolioData.initials}</span>
          <span>{portfolioData.name}</span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => <a key={link.href} href={link.href} className={`eyebrow link-line ${active === link.href ? "opacity-100" : "opacity-50 hover:opacity-100"}`}>{link.label}</a>)}
          <a href={`mailto:${portfolioData.email}`} className="rounded-full bg-[#151512] px-5 py-2.5 text-xs font-medium text-[#f2f0e9] transition-transform hover:-translate-y-0.5">Start a conversation ↗</a>
        </div>
        <button type="button" className="md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</button>
      </nav>
      <AnimatePresence>
        {open && <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="border-t hairline bg-[#f2f0e9] px-4 py-7 md:hidden">
          <div className="flex flex-col gap-5">{links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-3xl font-semibold tracking-[-.05em]">{link.label}</a>)}</div>
        </motion.div>}
      </AnimatePresence>
    </header>
  );
}
