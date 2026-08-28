"use client";

import { motion } from "framer-motion";
import {
  Layers,
  Server,
  Database,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const categories: {
  name: string;
  icon: LucideIcon;
  gradient: string;
  border: string;
  badge: string;
  iconBg: string;
  glow: string;
}[] = [
  {
    name: "Frontend",
    icon: Layers,
    gradient: "from-violet-600/20 to-violet-600/5",
    border: "border-violet-500/20 hover:border-violet-500/50",
    badge: "bg-violet-500/10 text-violet-300 border-violet-500/20 hover:bg-violet-500/20",
    iconBg: "bg-violet-500/15 text-violet-400",
    glow: "hover:shadow-violet-500/10",
  },
  {
    name: "Backend",
    icon: Server,
    gradient: "from-cyan-600/20 to-cyan-600/5",
    border: "border-cyan-500/20 hover:border-cyan-500/50",
    badge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20 hover:bg-cyan-500/20",
    iconBg: "bg-cyan-500/15 text-cyan-400",
    glow: "hover:shadow-cyan-500/10",
  },
  {
    name: "Database",
    icon: Database,
    gradient: "from-emerald-600/20 to-emerald-600/5",
    border: "border-emerald-500/20 hover:border-emerald-500/50",
    badge: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20 hover:bg-emerald-500/20",
    iconBg: "bg-emerald-500/15 text-emerald-400",
    glow: "hover:shadow-emerald-500/10",
  },
  {
    name: "Tools",
    icon: Wrench,
    gradient: "from-amber-600/20 to-amber-600/5",
    border: "border-amber-500/20 hover:border-amber-500/50",
    badge: "bg-amber-500/10 text-amber-300 border-amber-500/20 hover:bg-amber-500/20",
    iconBg: "bg-amber-500/15 text-amber-400",
    glow: "hover:shadow-amber-500/10",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
            Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Tech <span className="gradient-text">stack</span>
          </h2>
        </motion.div>

        {/* Category cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, ci) => {
            const skills = portfolioData.skills.filter(
              (s) => s.category === cat.name
            );
            const Icon = cat.icon;

            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: ci * 0.1 }}
                className={`relative p-6 rounded-2xl border bg-gradient-to-br ${cat.gradient} ${cat.border} hover:shadow-2xl ${cat.glow} transition-all duration-300 overflow-hidden group`}
              >
                {/* Card background pattern */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    backgroundImage: `radial-gradient(circle at 80% 20%, rgba(255,255,255,0.03) 0%, transparent 60%)`,
                  }}
                />

                {/* Header row */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${cat.iconBg}`}>
                    <Icon size={18} />
                  </div>
                  <h3 className="text-white font-semibold text-lg">{cat.name}</h3>
                  <span className="ml-auto text-xs text-slate-600 font-mono">
                    {skills.length} skills
                  </span>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, si) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.25,
                        delay: ci * 0.1 + si * 0.04,
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border cursor-default transition-all duration-200 ${cat.badge}`}
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* All skills marquee strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 overflow-hidden relative"
        >
          <div className="flex gap-3 animate-[marquee_30s_linear_infinite] w-max">
            {[...portfolioData.skills, ...portfolioData.skills].map(
              (skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] text-slate-500 text-xs whitespace-nowrap"
                >
                  {skill.name}
                </span>
              )
            )}
          </div>
          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0a0a0f] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0a0a0f] to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
