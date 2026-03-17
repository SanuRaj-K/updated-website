"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-violet-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 md:w-80 md:h-80 bg-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 bg-violet-800/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center w-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for work
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">{portfolioData.name}</span>
        </motion.h1>

        {/* Role */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl text-slate-400 font-medium mb-6"
        >
          {portfolioData.role}
        </motion.h2>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-slate-500 text-base md:text-xl max-w-2xl mx-auto mb-10 px-2"
        >
          {portfolioData.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/25 text-center"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-white/10 hover:border-violet-500/50 text-slate-300 hover:text-white font-medium transition-all duration-200 hover:bg-white/5 text-center"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-6 mb-16"
        >
          {portfolioData.social.github && (
            <a
              href={portfolioData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors duration-200"
            >
              <Github size={22} />
            </a>
          )}
          {portfolioData.social.linkedin && (
            <a
              href={portfolioData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors duration-200"
            >
              <Linkedin size={22} />
            </a>
          )}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col items-center gap-2 text-slate-600"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
