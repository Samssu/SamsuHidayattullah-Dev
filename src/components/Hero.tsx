'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Mail, 
  Sparkles, 
  Code2, 
  Layers, 
  PhoneCall,
  GraduationCap
} from 'lucide-react';
import { developerProfile } from '@/data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-radial-glow">
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/20 via-indigo-500/20 to-purple-500/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-purple-500/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio & Intro */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-lg shadow-cyan-500/10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{developerProfile.status}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              Halo, Saya <br />
              <span className="text-gradient-cyan">{developerProfile.name}</span>
            </h1>

            <p className="text-lg sm:text-xl font-semibold text-slate-300 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-yellow-400 shrink-0" />
              <span>{developerProfile.title}</span>
            </p>

            <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
              {developerProfile.tagline}
            </p>

            {/* Quick Education Pill */}
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-900/80 border border-slate-800/80 max-w-md">
              <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <div className="font-bold text-white">S.Kom Universitas Bina Darma (IPK 3.81)</div>
                <div className="text-slate-400">Teknik Informatika &bull; Predikat Cum Laude</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 text-white font-semibold shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all duration-300 active:scale-95 group"
              >
                <span>Lihat Proyek Saya</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass-panel text-slate-200 font-semibold border border-slate-700/80 hover:bg-slate-800/80 hover:text-white hover:border-slate-600 transition-all duration-300 active:scale-95"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Hubungi Saya</span>
              </a>
            </div>

            {/* Social Links & Contact Pill */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-400 font-mono uppercase tracking-wider">Sosial Media:</span>
                <div className="flex items-center gap-2">
                  <a
                    href={developerProfile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg glass-panel text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={developerProfile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg glass-panel text-slate-400 hover:text-indigo-400 hover:border-indigo-500/40 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <a
                href={`tel:${developerProfile.phone}`}
                className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/40 px-3.5 py-2 rounded-xl border border-emerald-500/30 hover:bg-emerald-900/40 transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>{developerProfile.phone}</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Clean Profile Photo 1 (Foto 1.jpg) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            <div className="relative w-80 h-[450px] sm:w-96 sm:h-[480px] rounded-3xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-purple-600 p-1 shadow-2xl shadow-cyan-500/20 group">
              <div className="w-full h-full bg-slate-950 rounded-[22px] overflow-hidden relative flex flex-col justify-between p-3">
                
                {/* Photo Image Container - Foto 1.jpg */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-800 shadow-inner">
                  <img
                    src="/Foto 1.jpg"
                    alt={developerProfile.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <span className="text-xs font-semibold text-cyan-300 bg-slate-900/90 px-3 py-1 rounded-lg border border-slate-700 inline-block shadow-md">
                      Muhammad Samsu H. (S.Kom)
                    </span>
                  </div>
                </div>

              </div>

              {/* Floating Badge 1 - Left Top */}
              <div className="absolute -top-5 -left-5 glass-panel px-3.5 py-2 rounded-2xl border border-cyan-500/30 flex items-center gap-2.5 shadow-xl animate-float">
                <div className="p-1.5 rounded-xl bg-cyan-500/20 text-cyan-400">
                  <Code2 className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white">Full-Stack Web</div>
                  <div className="text-[10px] text-slate-400">Next.js & React</div>
                </div>
              </div>

              {/* Floating Badge 2 - Right Bottom */}
              <div className="absolute -bottom-5 -right-5 glass-panel px-3.5 py-2 rounded-2xl border border-purple-500/30 flex items-center gap-3 shadow-xl animate-float [animation-delay:2s]">
                <div className="p-1.5 rounded-xl bg-purple-500/20 text-purple-400">
                  <Layers className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white">IT Support & VPS</div>
                  <div className="text-[10px] text-slate-400">Linux & Network</div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
