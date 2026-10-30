/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, ArrowUpRight, User, Download, Linkedin, Globe, Instagram, Lock } from 'lucide-react';

export const AlexMorganReplica: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F0EFEB] p-2 sm:p-6 lg:p-10 font-sans antialiased selection:bg-[#E06D53] selection:text-white flex flex-col items-center">
      {/* macOS Safari Browser Frame */}
      <div className="w-full max-w-6xl bg-[#FFF8F5] rounded-3xl shadow-2xl overflow-hidden border border-stone-300/80">
        {/* Safari Top Window Bar */}
        <div className="bg-[#EAE6E1] px-4 py-3 border-b border-stone-200 flex items-center justify-between">
          {/* Traffic light buttons */}
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
            <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
          </div>

          {/* Centered URL Bar */}
          <div className="flex items-center gap-2 bg-white/80 border border-stone-300 rounded-lg px-4 py-1 text-xs text-stone-600 font-mono max-w-md w-full justify-center shadow-xs">
            <Lock className="w-3 h-3 text-stone-400" />
            <span>alexmorgan.design</span>
          </div>

          <div className="w-12 text-right text-stone-400 text-xs font-mono">+</div>
        </div>

        {/* Website Content */}
        <div className="bg-[#FFF8F5] text-[#2A2928] p-6 sm:p-10 lg:p-14 space-y-16">
          {/* Header Navigation */}
          <header className="flex items-center justify-between pb-4">
            <div className="flex items-center gap-1 font-bold text-xl tracking-tight">
              <span>AM</span>
              <span className="w-2 h-2 rounded-full bg-[#E06D53] inline-block" />
            </div>

            <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-stone-600">
              <a href="#work" className="hover:text-black transition-colors font-semibold text-black">Work</a>
              <a href="#about" className="hover:text-black transition-colors">About</a>
              <a href="#services" className="hover:text-black transition-colors">Services</a>
              <a href="#blog" className="hover:text-black transition-colors">Blog</a>
              <a href="#contact" className="hover:text-black transition-colors">Contact</a>
            </nav>

            <div>
              <button className="px-5 py-2.5 rounded-full bg-white hover:bg-stone-50 border border-stone-200 text-xs font-semibold text-stone-800 transition-all flex items-center gap-1.5 shadow-xs">
                <span>Let's talk</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-stone-500" />
              </button>
            </div>
          </header>

          {/* Hero Section */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-4">
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-1">
                <h1 className="font-sans text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#2A2928] leading-[1.1]">
                  Hi, I'm <br />
                  <span className="text-[#E06D53]">Alex Morgan.</span>
                </h1>
                <p className="text-base sm:text-xl font-medium text-stone-700 pt-2">
                  Brand & Web Designer based in <span className="font-semibold text-stone-900">Toronto, Canada.</span>
                </p>
              </div>

              <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-lg">
                I help startups and creative brands build thoughtful identities and digital experiences that connect.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button className="px-6 py-3 rounded-full bg-[#E06D53] hover:bg-[#D05D43] text-white text-xs font-semibold flex items-center gap-2 transition-all shadow-md">
                  <span>View my work</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button className="px-6 py-3 rounded-full bg-white hover:bg-stone-50 border border-stone-200 text-xs font-semibold text-stone-800 flex items-center gap-2 transition-all shadow-xs">
                  <span>About me</span>
                  <User className="w-3.5 h-3.5 text-stone-500" />
                </button>
              </div>
            </div>

            {/* Right Ambient Coral Portrait + Floating Glass Badge */}
            <div className="lg:col-span-5 relative flex justify-center">
              {/* Radial Coral Mesh Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FFA07A]/40 via-[#FF7F50]/20 to-transparent rounded-full filter blur-3xl pointer-events-none" />

              {/* Circular Portrait */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-8 border-white/80 shadow-2xl bg-[#FFE4D6]">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                  alt="Alex Morgan"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating Glass Status Card */}
              <div className="absolute -bottom-6 right-0 sm:-right-4 backdrop-blur-md bg-white/70 border border-white/60 p-4 rounded-2xl shadow-xl max-w-[220px] text-xs space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-semibold text-stone-800 text-[11px]">Available for work</span>
                </div>
                <p className="text-[11px] text-stone-600 leading-tight">
                  I'm currently accepting new projects for May 2026.
                </p>
                <div className="pt-1">
                  <a href="#resume" className="text-[10px] font-bold text-[#E06D53] hover:underline flex items-center gap-1">
                    <ArrowRight className="w-3 h-3" />
                    <span>Download Resume</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Trusted By Logos Strip */}
          <section className="border-y border-stone-200/80 py-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <span className="text-xs font-mono uppercase text-stone-500 tracking-wider">Trusted by</span>
              <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 font-bold text-stone-400 text-sm tracking-wider">
                <span className="hover:text-stone-700 transition-colors">framer</span>
                <span className="hover:text-stone-700 transition-colors">webflow</span>
                <span className="hover:text-stone-700 transition-colors">slack</span>
                <span className="hover:text-stone-700 transition-colors">Notion</span>
                <span className="hover:text-stone-700 transition-colors">loom</span>
              </div>
            </div>
          </section>

          {/* Selected Work Section */}
          <section id="work" className="space-y-8">
            <div className="flex items-end justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#E06D53] font-semibold">SELECTED WORK</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#2A2928] mt-1">
                  Designing digital experiences that make an impact.
                </h2>
              </div>
              <a href="#projects" className="text-xs font-semibold text-stone-600 hover:text-black flex items-center gap-1">
                <span>View all projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* 3 Work Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-[#FBECE8] rounded-2xl p-5 border border-[#F4DDD6] space-y-4 group">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-white/60 p-4 flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=80"
                    alt="ROSE Skincare"
                    className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-sm text-stone-900">ROSE Skincare</h3>
                    <p className="text-xs text-stone-500">Visual Identity</p>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-stone-700 shadow-xs">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#FBECE8] rounded-2xl p-5 border border-[#F4DDD6] space-y-4 group">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-white/60 p-4 flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80"
                    alt="Helix SaaS"
                    className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-sm text-stone-900">Helix SaaS</h3>
                    <p className="text-xs text-stone-500">Website Design</p>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-stone-700 shadow-xs">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-[#FBECE8] rounded-2xl p-5 border border-[#F4DDD6] space-y-4 group">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-white/60 p-4 flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80"
                    alt="Momentum Mobile App"
                    className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-sm text-stone-900">Momentum</h3>
                    <p className="text-xs text-stone-500">Mobile App</p>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-stone-700 shadow-xs">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonial Quote */}
          <section className="bg-[#FBECE8] rounded-2xl p-8 border border-[#F4DDD6] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <span className="text-4xl font-serif text-[#E06D53] font-bold leading-none">“</span>
              <p className="text-sm sm:text-base text-stone-700 italic max-w-2xl leading-relaxed">
                "Alex is an exceptional designer who delivers clean, strategic work that elevates our brand every time."
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <div className="w-10 h-10 rounded-full bg-stone-300 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80"
                  alt="James Carter"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left text-xs">
                <p className="font-bold text-stone-900">James Carter</p>
                <p className="text-stone-500">Founder, Helix</p>
              </div>
            </div>
          </section>

          {/* Footer Contact */}
          <footer className="pt-8 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-stone-600">
            <div>
              <h3 className="font-serif font-bold text-base text-stone-900">Let's create something amazing together.</h3>
              <p className="text-[11px] text-stone-500 mt-1">hello@alexmorgan.design · +1 (647) 555-0198</p>
            </div>

            <div className="flex items-center gap-4 text-stone-600">
              <div className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center hover:bg-stone-100 cursor-pointer">
                <Linkedin className="w-3.5 h-3.5" />
              </div>
              <div className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center hover:bg-stone-100 cursor-pointer">
                <Globe className="w-3.5 h-3.5" />
              </div>
              <div className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center hover:bg-stone-100 cursor-pointer">
                <Instagram className="w-3.5 h-3.5" />
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};
