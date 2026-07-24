'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { User, Award, CheckCircle, Zap, Shield, GraduationCap, Server } from 'lucide-react';
import { developerProfile, certificationsData } from '@/data/portfolioData';

const coreValues = [
  {
    icon: Zap,
    title: 'Pengembangan Web Responsif',
    description: 'Mengembangkan aplikasi web tercepat & modern menggunakan Next.js, React.js, dan Tailwind CSS dengan arsitektur UI/UX yang intuitif.',
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-400/10 border-cyan-500/20'
  },
  {
    icon: Server,
    title: 'Dukungan TI & Administrasi VPS',
    description: 'Pengalaman memelihara infrastruktur TI kantor, mengkonfigurasi server VPS Linux Ubuntu, jaringan Cisco CCNA, dan troubleshooting.',
    color: 'text-indigo-400',
    bgColor: 'bg-indigo-400/10 border-indigo-500/20'
  },
  {
    icon: Shield,
    title: 'Solusi Digital Teruji Instansi',
    description: 'Sukses membangun dan menyebarkan sistem informasi SITANJAK & Metalika untuk efisiensi digitalisasi operasional BBPOM Palembang.',
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-400/10 border-emerald-500/20'
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-indigo-500/30 text-xs font-mono text-indigo-300">
            <User className="w-3.5 h-3.5" />
            <span>Tentang Saya</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Dedikasi Pengembangan Web & <span className="text-gradient-cyan">Dukungan TI</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Profil lulusan Sarjana Teknik Informatika Universitas Bina Darma dengan kombinasi skill Full-Stack Development dan Administrasi Sistem Server.
          </p>
        </div>

        {/* Bio Grid with Pas Foto Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Pas Foto Showcase Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 glass-panel p-4 rounded-3xl border border-slate-800 flex flex-col justify-between"
          >
            <div className="relative w-full h-80 rounded-2xl overflow-hidden border border-slate-800 mb-4 bg-slate-900">
              <img
                src="/Pas Foto.jpeg"
                alt="Muhammad Samsu Hidayattullah - Pas Foto"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              
              <div className="absolute bottom-3 left-3 right-3 text-left">
                <span className="text-xs font-semibold text-white bg-slate-900/90 px-3 py-1 rounded-lg border border-slate-700 inline-block shadow-md">
                  Muhammad Samsu Hidayattullah (S.Kom)
                </span>
              </div>
            </div>

            <div className="p-2 space-y-3 text-left">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <GraduationCap className="w-4 h-4" />
                <span>Universitas Bina Darma &bull; IPK 3.81</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Lulusan terbaik dengan predikat Cum Laude. Terbukti mampu memimpin proyek digitalisasi sistem serta aktif dalam organisasi bimbingan web BDCA.
              </p>
            </div>
          </motion.div>

          {/* Main Bio Card & Highlights */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-panel p-8 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-6 text-left"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <Award className="w-6 h-6 text-cyan-400" />
                <span>Latar Belakang & Pengalaman</span>
              </h3>
              {developerProfile.bio.map((paragraph, index) => (
                <p key={index} className="text-slate-300 text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Quick Highlights list */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Pengembangan Next.js, React & Node.js</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Administrasi Server Linux Ubuntu & VPS</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Sertifikasi Cisco CCNA Networking</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Troubleshooting Hardware & Software TI</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Core Competencies Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {coreValues.map((val, idx) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel glass-panel-hover p-6 rounded-3xl border border-slate-800/80 space-y-4 text-left"
              >
                <div className={`w-12 h-12 rounded-2xl ${val.bgColor} border flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${val.color}`} />
                </div>
                <h4 className="text-xl font-bold text-white">{val.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{val.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications Showcase */}
        <div className="space-y-6">
          <div className="text-left max-w-xl space-y-2">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <Award className="w-6 h-6 text-amber-400" />
              <span>Sertifikasi & Pelatihan Resmi</span>
            </h3>
            <p className="text-slate-400 text-sm">
              Sertifikasi teknis yang telah diselesaikan untuk menjamin kompetensi standar industri.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {certificationsData.map((cert) => (
              <div
                key={cert.id}
                className="glass-panel p-5 rounded-2xl border border-slate-800/80 text-left space-y-2 hover:border-cyan-500/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-900 text-cyan-300 border border-slate-700 text-[10px] font-mono">
                    {cert.badge}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">{cert.period}</span>
                </div>
                <h4 className="text-sm font-bold text-white line-clamp-2">{cert.title}</h4>
                <p className="text-xs text-slate-400">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
