/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sparkles, Heart, ShoppingBag, ArrowRight, Check } from 'lucide-react';

export const WashHouseReplica: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF6ED] text-[#2C2621] font-sans antialiased selection:bg-[#B8502F] selection:text-white">
      {/* Top Banner */}
      <div className="bg-[#B8502F] text-white text-[11px] font-mono tracking-widest text-center py-2 px-4 uppercase font-bold">
        FREE ORGANIC COTTON SOAP SAVER BAG ON ORDERS OVER $45 · HANDCRAFTED IN SMALL BATCHES
      </div>

      {/* Header */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-serif font-black text-2xl sm:text-3xl tracking-tight text-[#B8502F]">
            Wash House
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-[#4A423A]">
          <a href="#soaps" className="hover:text-[#B8502F] transition-colors">Artisan Bars</a>
          <a href="#body" className="hover:text-[#B8502F] transition-colors">Body Care</a>
          <a href="#story" className="hover:text-[#B8502F] transition-colors">Our Story</a>
          <a href="#club" className="hover:text-[#B8502F] transition-colors">Soap Club</a>
        </nav>

        <div>
          <button className="px-5 py-2 rounded-full bg-[#B8502F] hover:bg-[#9E4124] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-colors shadow-sm">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Bag (0)</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#889B80]/20 text-[#4D6146] text-xs font-mono font-bold uppercase">
            <span>Fresh Batch Cured 6 Weeks</span>
          </div>
          <h1 className="font-serif font-black text-4xl sm:text-6xl text-[#2C2621] leading-[1.1]">
            Gentle soap made <br />
            <span className="text-[#B8502F] italic font-serif">the old-fashioned way.</span>
          </h1>
          <p className="text-[#594F45] text-sm sm:text-base leading-relaxed max-w-lg">
            Cold-processed with organic cold-pressed olive oil, raw shea butter, and wildflower honey. Zero palm oil, zero synthetic fragrances.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <button className="px-7 py-3.5 rounded-full bg-[#B8502F] hover:bg-[#9E4124] text-white font-bold text-xs uppercase tracking-wider shadow-md">
              Shop The Spring Batch
            </button>
            <span className="text-xs text-[#706458] font-mono">100% Biodegradable</span>
          </div>
        </div>

        {/* Circular Stamp + Staged Soaps */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="relative w-72 sm:w-96 aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl bg-[#EFECE1]">
            <img
              src="https://images.unsplash.com/photo-1607006310486-538d585144b6?auto=format&fit=crop&w=800&q=80"
              alt="Artisan handmade soap bars"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Rotating Hand-Made Stamp Badge */}
          <div className="absolute -bottom-4 -left-4 w-28 h-28 rounded-full bg-[#A59EC7] text-white p-2 flex items-center justify-center text-center shadow-lg border-2 border-white rotate-[-12deg]">
            <span className="font-serif font-black text-[10px] leading-tight uppercase tracking-wider">
              HANDMADE WITH LOVE · SMALL BATCH
            </span>
          </div>
        </div>
      </section>

      {/* Terracotta Wave Section */}
      <div className="relative">
        <svg className="w-full h-12 md:h-16 text-[#B8502F] fill-current" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,50 C400,10 800,90 1440,30 L1440,100 L0,100 Z" />
        </svg>

        <section className="bg-[#B8502F] text-white px-6 py-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-1">
              <h3 className="font-serif font-bold text-3xl">6 Weeks</h3>
              <p className="text-xs text-white/80 font-mono uppercase tracking-wider">Natural Air Curing</p>
            </div>
            <div className="space-y-1">
              <h3 className="font-serif font-bold text-3xl">0% Palm</h3>
              <p className="text-xs text-white/80 font-mono uppercase tracking-wider">Rainforest Safe</p>
            </div>
            <div className="space-y-1">
              <h3 className="font-serif font-bold text-3xl">7 Simple</h3>
              <p className="text-xs text-white/80 font-mono uppercase tracking-wider">Organic Ingredients</p>
            </div>
            <div className="space-y-1">
              <h3 className="font-serif font-bold text-3xl">Plastic-Free</h3>
              <p className="text-xs text-white/80 font-mono uppercase tracking-wider">Recycled Paper Wrap</p>
            </div>
          </div>
        </section>

        <svg className="w-full h-12 md:h-16 text-[#B8502F] fill-current rotate-180" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,50 C400,10 800,90 1440,30 L1440,100 L0,100 Z" />
        </svg>
      </div>

      {/* Artisan Soap Grid */}
      <section id="soaps" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B8502F]">OUR FAVORITES</span>
          <h2 className="font-serif font-black text-3xl sm:text-4xl">Handcrafted Cold Process Bars</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-sm space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-stone-100">
              <img
                src="https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=600&q=80"
                alt="Wild Lavender & Oat"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#A59EC7] font-bold">CALMING BAR</span>
              <h3 className="font-serif font-bold text-lg">French Lavender & Colloid Oat</h3>
              <p className="text-xs text-stone-500 mt-1">Soothing for sensitive and dry skin types.</p>
              <div className="flex items-center justify-between pt-4 mt-2 border-t border-stone-100">
                <span className="font-mono font-bold text-sm">$12.00</span>
                <button className="px-4 py-1.5 rounded-full bg-[#B8502F] text-white text-xs font-bold uppercase tracking-wider">
                  Add to Bag
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-sm space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-stone-100">
              <img
                src="https://images.unsplash.com/photo-1607006310486-538d585144b6?auto=format&fit=crop&w=600&q=80"
                alt="Cedarwood & Eucalyptus"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#889B80] font-bold">FOREST INFUSION</span>
              <h3 className="font-serif font-bold text-lg">Atlas Cedar & Crushed Pine</h3>
              <p className="text-xs text-stone-500 mt-1">Invigorating earthy aromatics with French green clay.</p>
              <div className="flex items-center justify-between pt-4 mt-2 border-t border-stone-100">
                <span className="font-mono font-bold text-sm">$12.00</span>
                <button className="px-4 py-1.5 rounded-full bg-[#B8502F] text-white text-xs font-bold uppercase tracking-wider">
                  Add to Bag
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-sm space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-stone-100">
              <img
                src="https://images.unsplash.com/photo-1547793548-710ec861bb69?auto=format&fit=crop&w=600&q=80"
                alt="Honey & Sweet Orange"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#B8502F] font-bold">HYDRATING BAR</span>
              <h3 className="font-serif font-bold text-lg">Wildflower Honey & Sweet Orange</h3>
              <p className="text-xs text-stone-500 mt-1">Rich lather packed with raw local clover honey.</p>
              <div className="flex items-center justify-between pt-4 mt-2 border-t border-stone-100">
                <span className="font-mono font-bold text-sm">$12.00</span>
                <button className="px-4 py-1.5 rounded-full bg-[#B8502F] text-white text-xs font-bold uppercase tracking-wider">
                  Add to Bag
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C2621] text-stone-400 text-xs py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-serif font-bold text-white text-lg">Wash House Apothecary</div>
          <div>© 2026 Wash House. Replicated Line-for-Line.</div>
        </div>
      </footer>
    </div>
  );
};
