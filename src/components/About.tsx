"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="border-b hairline py-24 md:py-36">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[.36fr_1fr]">
          <p className="eyebrow">About / capabilities</p>
          <div>
            <motion.p initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} className="max-w-4xl text-[clamp(2rem,4.5vw,4.8rem)] font-medium leading-[1.04] tracking-[-.06em]">{portfolioData.about}</motion.p>
            <div className="mt-20 border-t hairline">
              {portfolioData.capabilities.map((capability) => (
                <motion.article key={capability.index} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid gap-5 border-b hairline py-8 md:grid-cols-[70px_.7fr_1fr]">
                  <span className="eyebrow opacity-50">{capability.index}</span>
                  <h3 className="text-xl font-semibold tracking-[-.04em]">{capability.title}</h3>
                  <div><p className="max-w-xl leading-relaxed text-[#716f68]">{capability.description}</p><p className="eyebrow mt-4 leading-6 opacity-60">{capability.tools.join(" · ")}</p></div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
