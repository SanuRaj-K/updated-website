"use client";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
const links = ["Home", "About", "Experience", "Projects", "Skills", "Contact"];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -65% 0px", threshold: 0 },
    );
    links.forEach((link) => {
      const section = document.getElementById(link.toLowerCase());
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="site-header">
      <nav className="shell nav" aria-label="Primary navigation">
        <a
          href="#home"
          className="brand"
          onClick={() => setOpen(false)}
          aria-label="Sanu Raj, home"
        >
          <span className="brand-mark">
            s<span>.</span>
          </span>
          Sanu Raj<span className="brand-role"> / Fullstack Engineer</span>
        </a>
        <div className="desktop-nav">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              aria-current={
                active === link.toLowerCase() ? "location" : undefined
              }
            >
              {link}
            </a>
          ))}
        </div>
        <a href="#contact" className="nav-cta">
          Let’s Talk <ArrowUpRight size={15} />
        </a>
        <button
          ref={toggle}
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      <div id="mobile-menu" className="mobile-menu" hidden={!open}>
        {links.map((link, i) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            aria-current={
              active === link.toLowerCase() ? "location" : undefined
            }
            onClick={() => setOpen(false)}
          >
            <span className="mono">0{i + 1}</span>
            {link}
            <ArrowUpRight size={18} />
          </a>
        ))}
      </div>
    </header>
  );
}
