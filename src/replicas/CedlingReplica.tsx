/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUpRight, Compass, Layers, ShieldCheck, Sparkles, ChevronDown } from 'lucide-react';

export const CedlingReplica: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#4A3225] via-[#7B5944] to-[#F5EFE9] text-[#2C1D14] font-sans antialiased selection:bg-[#4A3225] selection:text-white pb-24">
      {/* Top Ambient Header */}
      <header className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between text-white/90">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center font-serif text-xs font-bold">
            H
          </div>
          <span className="font-serif text-lg tracking-wider font-light">Herniur Atelier</span>
        </div>

        <nav className="flex items-center gap-6 text-[11px] font-mono tracking-widest uppercase text-white/70">
          <span className="hover:text-white cursor-pointer">Archive</span>
          <span className="hover:text-white cursor-pointer">Spaces</span>
          <span className="hover:text-white cursor-pointer">Tactile</span>
        </nav>
      </header>

      {/* Main Floating 3D Cards Staging */}
      <main className="max-w-4xl mx-auto px-6 pt-6 space-y-12">
        {/* Top Hero Arch Card */}
        <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-b from-[#3E281C] to-[#5A3C2A] p-8 sm:p-14 text-white shadow-2xl border border-white/10">
          <div className="max-w-md space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#D4AF37]">Herniur Form</span>
            <h1 className="font-serif text-4xl sm:text-6xl font-normal leading-tight">
              Herniur
            </h1>
            <p className="text-white/75 text-xs sm:text-sm font-light leading-relaxed">
              Tactile architectural objects sculptured with clay, travertine, and bronze light.
            </p>
          </div>

          {/* Floating Warm Panlirg Card */}
          <div className="mt-8 sm:mt-12 sm:w-72 bg-gradient-to-br from-[#8C5E45] to-[#5C3B29] p-6 rounded-3xl border border-white/20 shadow-2xl space-y-2 backdrop-blur-md">
            <span className="text-[9px] font-mono uppercase tracking-widest text-amber-200">Edition 01</span>
            <h3 className="font-serif text-2xl font-normal text-white">Panlirg</h3>
            <p className="text-[11px] text-white/80 leading-relaxed font-light">
              Cast bronze curvature reflecting ambient warmth.
            </p>
            <div className="pt-2">
              <button className="px-4 py-1.5 rounded-full bg-white/15 text-[10px] font-mono uppercase tracking-wider text-white hover:bg-white/25 transition-colors">
                Explore Series
              </button>
            </div>
          </div>
        </div>

        {/* 2-Column Floating Cards (Famling & Cedling) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left White Frost Card: Famling */}
          <div className="bg-white/95 backdrop-blur-xl p-8 rounded-3xl border border-stone-200/80 shadow-2xl space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#7B5944] font-semibold">Light Study</span>
            <h3 className="font-serif text-3xl font-normal text-[#2C1D14]">Famling</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Organic white plaster vessels molded to hold negative space and ambient shadow.
            </p>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100">
              <img
                src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=700&q=80"
                alt="Famling Vessel"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pt-2 flex items-center justify-between">
              <button className="px-5 py-2 rounded-full border border-stone-300 hover:border-black text-xs font-semibold uppercase tracking-wider transition-colors">
                View Spec
              </button>
              <span className="font-mono text-xs text-stone-400">01 / 04</span>
            </div>
          </div>

          {/* Right Chocolate Bronze Card: Cedling */}
          <div className="bg-gradient-to-br from-[#4A3225] to-[#2C1D14] p-8 rounded-3xl border border-white/15 text-white shadow-2xl space-y-4 md:mt-12">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37]">Dark Tactile</span>
            <h3 className="font-serif text-3xl font-normal">Cedling</h3>
            <p className="text-xs text-white/75 leading-relaxed font-light">
              Smoked walnut plinth with burnished copper inlays. Designed for contemplative spaces.
            </p>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-black/40 border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=700&q=80"
                alt="Cedling Object"
                className="w-full h-full object-cover contrast-125"
              />
            </div>
            <div className="pt-2 flex items-center justify-between">
              <button className="px-5 py-2 rounded-full bg-white text-[#2C1D14] text-xs font-semibold uppercase tracking-wider hover:bg-stone-100 transition-colors">
                Acquire Piece
              </button>
              <div className="flex items-center gap-1.5 text-xs text-amber-300">
                <span>•</span>
                <span>•</span>
                <span>•</span>
              </div>
            </div>
          </div>
        </div>

        {/* Lower White Card: Paride */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-stone-200 shadow-xl space-y-4">
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400">Epilogue</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2C1D14]">Paride</h2>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl font-light">
            A sanctuary where industrial precision yields to the warm softness of organic living. Each piece is crafted in numbered editions.
          </p>
          <div className="pt-4 flex items-center gap-4 text-xs font-mono text-stone-500">
            <span>Edition of 24</span>
            <span>·</span>
            <span>Hand-finished in Milan</span>
          </div>
        </div>
      </main>
    </div>
  );
};
