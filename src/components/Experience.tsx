"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
            Background
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Experience &amp; <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <Briefcase size={20} className="text-violet-400" />
              <h3 className="text-white font-semibold text-lg">Experience</h3>
            </div>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-white/[0.06]" />
              <div className="flex flex-col gap-6">
                {portfolioData.experience.map((exp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="relative pl-12"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-violet-500/20 border border-violet-500/40 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-violet-400" />
                    </div>
                    <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-2 mb-1">
                        <h4 className="text-white font-medium text-sm sm:text-base leading-snug">
                          {exp.role}
                        </h4>
                        <span className="text-violet-400 text-xs px-2 py-1 rounded-md bg-violet-500/10 border border-violet-500/20 self-start shrink-0 whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-slate-400 text-sm mb-2">{exp.company}</p>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <GraduationCap size={20} className="text-cyan-400" />
              <h3 className="text-white font-semibold text-lg">Education</h3>
            </div>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-white/[0.06]" />
              <div className="flex flex-col gap-6">
                {portfolioData.education.map((edu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative pl-12"
                  >
                    <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-cyan-400" />
                    </div>
                    <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-2 mb-2">
                        <h4 className="text-white font-medium text-sm sm:text-base leading-snug">
                          {edu.degree}
                        </h4>
                        <span className="text-cyan-400 text-xs px-2 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 self-start shrink-0 whitespace-nowrap">
                          {edu.year}
                        </span>
                      </div>
                      <p className="text-slate-400 text-sm">{edu.institution}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
