"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Code2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 sm:mb-16">
            Crafting digital{" "}
            <span className="gradient-text">experiences</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8">
              {portfolioData.about}
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin size={18} className="text-violet-400 shrink-0" />
                <span>{portfolioData.location}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Mail size={18} className="text-violet-400 shrink-0" />
                <a
                  href={`mailto:${portfolioData.email}`}
                  className="hover:text-white transition-colors"
                >
                  {portfolioData.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Code2 size={18} className="text-violet-400 shrink-0" />
                <span>Open to remote opportunities</span>
              </div>
            </div>
          </motion.div>

          {/* Stats cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { value: "3+", label: "Years Experience" },
              { value: "20+", label: "Projects Built" },
              { value: "10+", label: "Happy Clients" },
              { value: "∞", label: "Coffee Cups" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-4 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] text-center card-hover"
              >
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
