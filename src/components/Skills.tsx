'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Wrench, 
  Search, 
  Globe, 
  Code2, 
  Palette, 
  Sparkles, 
  Layers, 
  Server, 
  Database, 
  Cpu, 
  Box, 
  Cloud, 
  Bot, 
  GitBranch, 
  ShieldCheck
} from 'lucide-react';
import { skillCategories } from '@/data/portfolioData';
import { FigmaIcon } from './SocialIcons';

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Code2,
  Palette,
  Sparkles,
  Layers,
  Server,
  Database,
  Cpu,
  Box,
  Cloud,
  Bot,
  GitBranch,
  ShieldCheck,
  Figma: FigmaIcon,
};

export default function Skills() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categoriesList = ['All', ...skillCategories.map((c) => c.category)];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <Wrench className="w-3.5 h-3.5" />
            <span>Stack Teknologi & Tools</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Keahlian & <span className="text-gradient-cyan">Penguasaan Alat</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Rangkaian teknologi modern yang saya gunakan sehari-hari untuk mengembangkan aplikasi web tercepat, aman, dan scalable.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 bg-slate-900/80 p-1.5 rounded-2xl border border-slate-800 w-full sm:w-auto">
            {categoriesList.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari keahlian..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-900/80 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories
            .filter((catGroup) => activeCategory === 'All' || catGroup.category === activeCategory)
            .map((catGroup, groupIdx) => {
              const filteredSkills = catGroup.skills.filter((skill) =>
                skill.name.toLowerCase().includes(searchTerm.toLowerCase())
              );

              if (filteredSkills.length === 0) return null;

              return (
                <motion.div
                  key={catGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
                  className="glass-panel p-6 rounded-3xl border border-slate-800/80 flex flex-col justify-between space-y-6"
                >
                  <div>
                    <h3 className="text-lg font-bold text-white mb-6 flex items-center justify-between pb-3 border-b border-slate-800">
                      <span>{catGroup.category}</span>
                      <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-slate-800 text-cyan-400">
                        {filteredSkills.length} Tech
                      </span>
                    </h3>

                    <div className="space-y-5">
                      {filteredSkills.map((skill) => {
                        const IconComponent = iconMap[skill.iconName] || Code2;
                        return (
                          <div key={skill.name} className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span className="flex items-center gap-2.5 text-slate-200 font-medium">
                                <div className="p-1.5 rounded-lg bg-slate-800 text-cyan-400">
                                  <IconComponent className="w-4 h-4" />
                                </div>
                                {skill.name}
                              </span>
                              <span className="text-xs font-mono text-slate-400">
                                {skill.level}%
                              </span>
                            </div>

                            {/* Progress bar container */}
                            <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: 'easeOut' }}
                                className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              );
            })}
        </div>

      </div>
    </section>
  );
}
