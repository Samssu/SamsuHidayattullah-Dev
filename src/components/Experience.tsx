'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experienceData } from '@/data/portfolioData';

export default function Experience() {
  const [filter, setFilter] = useState<'All' | 'Work' | 'Education'>('All');

  const filteredExp = experienceData.filter((exp) => {
    if (filter === 'All') return true;
    return exp.type === filter;
  });

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-emerald-500/30 text-xs font-mono text-emerald-300">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Rekam Jejak Karir</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pengalaman Kerja & <span className="text-gradient-cyan">Pendidikan</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Perjalanan profesional saya dalam membangun sistem perintis, memimpin tim, dan menimba ilmu di industri.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-16">
          <button
            onClick={() => setFilter('All')}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
              filter === 'All'
                ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg'
                : 'glass-panel text-slate-400 hover:text-white'
            }`}
          >
            Semua Timeline
          </button>
          <button
            onClick={() => setFilter('Work')}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all ${
              filter === 'Work'
                ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg'
                : 'glass-panel text-slate-400 hover:text-white'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Pengalaman Kerja</span>
          </button>
          <button
            onClick={() => setFilter('Education')}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all ${
              filter === 'Education'
                ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg'
                : 'glass-panel text-slate-400 hover:text-white'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Pendidikan</span>
          </button>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-12">
          {filteredExp.map((exp, index) => {
            const isWork = exp.type === 'Work';

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-6 sm:pl-8 group"
              >
                {/* Timeline Dot Node */}
                <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-10 h-10 rounded-2xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110 shadow-lg ${
                  isWork 
                    ? 'bg-slate-900 border-cyan-500/50 text-cyan-400 shadow-cyan-500/20' 
                    : 'bg-slate-900 border-purple-500/50 text-purple-400 shadow-purple-500/20'
                }`}>
                  {isWork ? <Briefcase className="w-4 h-4" /> : <GraduationCap className="w-4 h-4" />}
                </div>

                {/* Card Container */}
                <div className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-3xl border border-slate-800/80 space-y-4">
                  {/* Header info */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-base font-semibold text-slate-300">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-col sm:items-end gap-1 font-mono text-xs text-slate-400">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-cyan-300">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1 text-slate-400 pt-1">
                        <MapPin className="w-3 h-3 text-slate-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullet accomplishments */}
                  <div className="space-y-2.5 pt-2">
                    {exp.description.map((desc, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                        <span>{desc}</span>
                      </div>
                    ))}
                  </div>

                  {/* Skills Pills */}
                  {exp.skills && exp.skills.length > 0 && (
                    <div className="pt-4 flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-lg bg-slate-900 text-slate-300 border border-slate-800 text-xs font-mono"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
