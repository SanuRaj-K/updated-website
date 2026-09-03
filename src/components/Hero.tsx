"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="min-h-[92vh] border-b hairline pt-16">
      <div className="shell grid min-h-[calc(92vh-4rem)] grid-rows-[auto_1fr_auto] py-7 md:py-10">
        <motion.div initial={false} className="flex items-center justify-between border-b hairline pb-5">
          <span className="eyebrow">Independent portfolio / 2026</span>
          <span className="eyebrow hidden sm:block">{portfolioData.location}</span>
        </motion.div>
        <div className="grid items-center gap-10 py-14 lg:grid-cols-[1fr_.55fr]">
          <motion.div initial={false}>
            <p className="eyebrow mb-6 flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-green-600" />{portfolioData.availability}</p>
            <h1 className="display max-w-5xl text-[clamp(4.3rem,11vw,10rem)] font-semibold">Product<br /><span className="font-normal italic">engineer.</span></h1>
          </motion.div>
          <motion.div initial={false} className="self-end lg:pb-4">
            <p className="max-w-lg text-xl leading-[1.45] tracking-[-.035em] md:text-2xl">{portfolioData.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#work" className="inline-flex items-center gap-4 rounded-full bg-[#d8ff3e] px-6 py-3.5 text-sm font-semibold">Explore selected work <ArrowDownRight size={17} /></a>
              <a href={portfolioData.social.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border hairline px-6 py-3.5 text-sm font-semibold">LinkedIn <ArrowUpRight size={16} /></a>
            </div>
          </motion.div>
        </div>
        <div className="grid grid-cols-2 border-t hairline pt-5 md:grid-cols-4">
          {["Product thinking", "Interface systems", "Full-stack delivery", "Built with care"].map((item, i) => <span key={item} className={`eyebrow min-w-0 py-2 text-[9px] md:text-[11px] ${i > 1 ? "hidden md:block" : ""}`}>{`0${i + 1} / ${item}`}</span>)}
        </div>
      </div>
    </section>
  );
}
