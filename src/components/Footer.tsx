'use client';

import React from 'react';
import { ArrowUp, Code, Heart, Mail, Phone } from 'lucide-react';
import { developerProfile } from '@/data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-12 relative overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-500 p-[1.5px]">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Code className="w-5 h-5 text-cyan-400" />
              </div>
            </div>
            <div>
              <div className="font-bold text-white text-lg tracking-tight">
                Muhammad Samsu H.
                <span className="text-gradient-cyan">.dev</span>
              </div>
              <p className="text-xs text-slate-400">Full-Stack Developer & IT Support Specialist</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={developerProfile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors border border-slate-800"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={developerProfile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-indigo-400 hover:bg-slate-800 transition-colors border border-slate-800"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${developerProfile.email}`}
              className="p-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-emerald-400 hover:bg-slate-800 transition-colors border border-slate-800"
              aria-label="Email Direct"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={`tel:${developerProfile.phone}`}
              className="p-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-amber-400 hover:bg-slate-800 transition-colors border border-slate-800"
              aria-label="Phone Call"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-all hover:scale-110 active:scale-95"
            title="Kembali ke atas"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} {developerProfile.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Dibuat dengan <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> menggunakan Next.js & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}
