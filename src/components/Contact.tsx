"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let&apos;s <span className="gradient-text">work together</span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg max-w-xl mx-auto">
            Have a project in mind or just want to say hi? My inbox is always
            open.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Email CTA */}
          <motion.a
            href={`mailto:${portfolioData.email}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group p-6 sm:p-8 rounded-2xl bg-violet-600/10 border border-violet-500/20 hover:border-violet-500/50 hover:bg-violet-600/15 transition-all duration-300 flex items-center justify-between card-hover"
          >
            <div className="flex items-center gap-4 min-w-0">
              <div className="w-11 h-11 rounded-xl bg-violet-500/20 flex items-center justify-center shrink-0">
                <Mail size={20} className="text-violet-400" />
              </div>
              <div className="min-w-0">
                <p className="text-white font-medium mb-1">Send an Email</p>
                <p className="text-slate-500 text-sm truncate">{portfolioData.email}</p>
              </div>
            </div>
            <ArrowRight
              size={20}
              className="text-slate-600 group-hover:text-violet-400 group-hover:translate-x-1 transition-all duration-200 shrink-0 ml-3"
            />
          </motion.a>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex flex-col justify-center gap-4"
          >
            <p className="text-white font-medium">Find me online</p>
            <div className="flex flex-col gap-4">
              {portfolioData.social.github && (
                <a
                  href={portfolioData.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
                >
                  <Github size={18} className="group-hover:text-violet-400 transition-colors shrink-0" />
                  <span className="text-sm">GitHub</span>
                </a>
              )}
              {portfolioData.social.linkedin && (
                <a
                  href={portfolioData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
                >
                  <Linkedin size={18} className="group-hover:text-violet-400 transition-colors shrink-0" />
                  <span className="text-sm">LinkedIn</span>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
