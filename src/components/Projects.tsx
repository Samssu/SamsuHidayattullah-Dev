'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink, ArrowUpRight, Zap, Star } from 'lucide-react';
import { projectsData, Project } from '@/data/portfolioData';
import ProjectModal from './ProjectModal';
import { GithubIcon } from './SocialIcons';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('Semua');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Clean category tabs: 'Semua', 'Web App', 'UI/UX' (Removed AI & Mobile buttons)
  const categories = ['Semua', 'Web App', 'UI/UX'];

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === 'Semua') return true;
    return project.category === activeCategory;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Glow Effects */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-purple-500/30 text-xs font-mono text-purple-300">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Portofolio Karya</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Proyek Pilihan & <span className="text-gradient-cyan">Hasil Karya</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Kumpulan aplikasi web dan sistem informasi instansi yang pernah saya bangun dengan arsitektur & standar tinggi.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 scale-105'
                  : 'glass-panel text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel glass-panel-hover rounded-3xl border border-slate-800/80 overflow-hidden flex flex-col justify-between group cursor-pointer text-left"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image Preview Container */}
              <div className="relative w-full h-52 overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/90 text-slate-950 font-bold text-[10px] uppercase tracking-wider shadow-lg">
                    <Star className="w-3 h-3 fill-slate-950" />
                    <span>Featured</span>
                  </div>
                )}

                {/* Metrics Pill */}
                {project.metrics && (
                  <div className="absolute top-4 right-4 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-cyan-300 border border-slate-700 text-[10px] font-mono">
                    <Zap className="w-3 h-3 text-cyan-400" />
                    <span>{project.metrics}</span>
                  </div>
                )}

                <div className="absolute bottom-3 left-4">
                  <span className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-700 text-slate-300 font-mono text-xs">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h3>
                  <p className="text-slate-400 text-sm line-clamp-2 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="pt-4 border-t border-slate-800 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-slate-900 text-slate-400 border border-slate-800 text-[11px] font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-1 rounded-md bg-slate-900 text-slate-500 text-[10px] font-mono">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div 
                    className="flex items-center justify-between pt-2 text-xs font-semibold text-slate-400"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span 
                      onClick={() => setSelectedProject(project)}
                      className="text-cyan-400 hover:underline cursor-pointer"
                    >
                      Detail Selengkapnya &rarr;
                    </span>

                    <div className="flex items-center gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-white transition-colors"
                          aria-label="GitHub Code"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-cyan-400 transition-colors"
                          aria-label="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}
