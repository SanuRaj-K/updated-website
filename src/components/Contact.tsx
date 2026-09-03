import { ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#d8ff3e] py-24 md:py-36">
      <div className="shell">
        <p className="eyebrow">Contact / next move</p>
        <h2 className="display mt-10 max-w-6xl text-[clamp(4.2rem,10vw,10rem)] font-semibold">Let’s make<br /><span className="font-normal italic">something useful.</span></h2>
        <div className="mt-16 grid gap-8 border-t border-black/25 pt-7 md:grid-cols-2 md:items-end">
          <p className="max-w-lg text-lg leading-relaxed">Have a product challenge, a role, or an idea worth exploring? I’m always happy to have a thoughtful conversation.</p>
          <div className="flex flex-wrap gap-3 md:justify-end"><a href={`mailto:${portfolioData.email}`} className="inline-flex items-center gap-3 rounded-full bg-[#151512] px-6 py-3.5 text-sm font-semibold text-[#f2f0e9]">Send an email <ArrowUpRight size={16} /></a><a href={portfolioData.social.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full border border-black/35 px-6 py-3.5 text-sm font-semibold">LinkedIn <ArrowUpRight size={16} /></a></div>
        </div>
      </div>
    </section>
  );
}
