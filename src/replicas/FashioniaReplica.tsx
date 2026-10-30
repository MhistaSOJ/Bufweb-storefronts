/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Search, User, Heart, ShoppingBag, ArrowRight, Truck, ShieldCheck, Sparkles, Headphones } from 'lucide-react';

export const FashioniaReplica: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1C1917] font-sans antialiased selection:bg-[#9A6B43] selection:text-white">
      {/* Top Announcement Bar */}
      <div className="bg-[#1C1917] text-[#E8DFD8] text-[11px] font-mono tracking-widest text-center py-2 px-4 uppercase">
        Complimentary worldwide shipping on orders above $99 · Use code LUXE24
      </div>

      {/* Hero Section Container with Warm Studio Glow */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#8C7360] via-[#A88B74] to-[#BFA793] text-white">
        {/* Header */}
        <header className="relative z-30 max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          {/* Logo with 8-pointed star */}
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
            </svg>
            <span className="font-serif text-2xl tracking-wider font-bold">FashioNia</span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest uppercase text-white/90">
            <a href="#home" className="hover:text-white transition-colors border-b border-white pb-0.5">HOME</a>
            <a href="#shop" className="hover:text-white transition-colors">SHOP</a>
            <a href="#new" className="hover:text-white transition-colors">NEW ARRIVALS</a>
            <a href="#collections" className="hover:text-white transition-colors">COLLECTIONS</a>
            <a href="#about" className="hover:text-white transition-colors">ABOUT</a>
          </nav>

          {/* Action Icons */}
          <div className="flex items-center gap-5 text-white">
            <button className="hover:opacity-80 transition-opacity" title="Search"><Search className="w-4 h-4" /></button>
            <button className="hover:opacity-80 transition-opacity" title="Account"><User className="w-4 h-4" /></button>
            <button className="hover:opacity-80 transition-opacity" title="Wishlist"><Heart className="w-4 h-4" /></button>
            <button className="hover:opacity-80 transition-opacity flex items-center gap-1" title="Bag">
              <ShoppingBag className="w-4 h-4" />
              <span className="text-[10px] font-mono">0</span>
            </button>
          </div>
        </header>

        {/* Hero Visual Area */}
        <div className="relative max-w-7xl mx-auto px-6 pt-10 pb-20 min-h-[580px] md:min-h-[660px] flex flex-col justify-end">
          {/* Giant Outlined Typography "STYLE" in the Background */}
          <div
            className="absolute inset-x-0 top-12 text-center pointer-events-none select-none z-10"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(5rem, 21vw, 17rem)',
              fontWeight: 700,
              lineHeight: 0.9,
              color: 'transparent',
              WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.75)',
              letterSpacing: '0.04em',
            }}
          >
            STYLE
          </div>

          {/* Centered Model Staging */}
          <div className="relative z-20 flex justify-center items-end mt-4">
            <div className="relative w-[280px] sm:w-[360px] md:w-[420px] h-[440px] sm:h-[500px] md:h-[560px]">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80"
                alt="Fashion Model in tailored suit"
                className="w-full h-full object-cover object-top drop-shadow-2xl rounded-t-full"
              />
              {/* Soft Vignette Floor shadow */}
              <div className="absolute -bottom-4 inset-x-8 h-8 bg-black/40 blur-xl rounded-full" />
            </div>

            {/* Editorial Quote Right Callout */}
            <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 max-w-[190px] text-right z-20">
              <p className="font-serif italic text-sm text-white/90 leading-relaxed font-light">
                "Style is a way to say who you are without speaking."
              </p>
              <span className="text-[10px] font-mono tracking-widest text-white/70 uppercase mt-2 block">— Rachel Zoe</span>
            </div>
          </div>

          {/* Frosted Glass Floating Benefit Bar */}
          <div className="relative z-30 mt-8 max-w-5xl mx-auto w-full backdrop-blur-md bg-white/15 border border-white/30 rounded-2xl p-4 sm:p-5 shadow-2xl grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
            <div className="flex items-center gap-3 border-r border-white/20 pr-3">
              <Truck className="w-5 h-5 text-white/90 shrink-0" />
              <div>
                <h4 className="text-xs font-semibold tracking-wide">Free Shipping</h4>
                <p className="text-[10px] text-white/75 font-mono">On Orders Above $99</p>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:border-r border-white/20 sm:pr-3">
              <ShieldCheck className="w-5 h-5 text-white/90 shrink-0" />
              <div>
                <h4 className="text-xs font-semibold tracking-wide">Secure Payment</h4>
                <p className="text-[10px] text-white/75 font-mono">100% Safe & Encrypted</p>
              </div>
            </div>

            <div className="flex items-center gap-3 border-r border-white/20 pr-3">
              <Sparkles className="w-5 h-5 text-white/90 shrink-0" />
              <div>
                <h4 className="text-xs font-semibold tracking-wide">Trendy Collections</h4>
                <p className="text-[10px] text-white/75 font-mono">New Styles Weekly</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Headphones className="w-5 h-5 text-white/90 shrink-0" />
              <div>
                <h4 className="text-xs font-semibold tracking-wide">24/7 Support</h4>
                <p className="text-[10px] text-white/75 font-mono">We're Here For You</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shop By Category Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 sm:py-28">
        <div className="text-center max-w-xl mx-auto mb-14 space-y-2">
          <div className="inline-flex items-center gap-2 text-stone-500 text-xs font-mono tracking-widest uppercase">
            <span>—</span>
            <span>SHOP BY CATEGORY</span>
            <span>—</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-stone-900">
            Find Your Perfect Style
          </h2>
          <p className="text-stone-500 text-xs sm:text-sm font-light">
            Curated collections for every mood, moment and occasion.
          </p>
        </div>

        {/* 4 Cards Grid: Women, Men, Accessories, Footwear */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {/* 1. Women */}
          <div className="group bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-stone-200/80 hover:shadow-xl transition-all duration-300">
            <div className="aspect-[3/4] rounded-xl overflow-hidden bg-stone-100 mb-4 relative">
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=700&q=80"
                alt="Women's Collection"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex items-center justify-between pt-1">
              <h3 className="font-serif font-bold text-base sm:text-lg text-stone-900">Women</h3>
              <div className="w-8 h-8 rounded-full bg-stone-100 group-hover:bg-[#1C1917] group-hover:text-white flex items-center justify-center transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* 2. Men */}
          <div className="group bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-stone-200/80 hover:shadow-xl transition-all duration-300">
            <div className="aspect-[3/4] rounded-xl overflow-hidden bg-stone-100 mb-4 relative">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80"
                alt="Men's Collection"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex items-center justify-between pt-1">
              <h3 className="font-serif font-bold text-base sm:text-lg text-stone-900">Men</h3>
              <div className="w-8 h-8 rounded-full bg-stone-100 group-hover:bg-[#1C1917] group-hover:text-white flex items-center justify-center transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* 3. Accessories */}
          <div className="group bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-stone-200/80 hover:shadow-xl transition-all duration-300">
            <div className="aspect-[3/4] rounded-xl overflow-hidden bg-stone-100 mb-4 relative flex items-center justify-center p-4">
              <img
                src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=80"
                alt="Accessories Collection"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex items-center justify-between pt-1">
              <h3 className="font-serif font-bold text-base sm:text-lg text-stone-900">Accessories</h3>
              <div className="w-8 h-8 rounded-full bg-stone-100 group-hover:bg-[#1C1917] group-hover:text-white flex items-center justify-center transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* 4. Footwear */}
          <div className="group bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-stone-200/80 hover:shadow-xl transition-all duration-300">
            <div className="aspect-[3/4] rounded-xl overflow-hidden bg-stone-100 mb-4 relative flex items-center justify-center p-4">
              <img
                src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80"
                alt="Footwear Collection"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex items-center justify-between pt-1">
              <h3 className="font-serif font-bold text-base sm:text-lg text-stone-900">Footwear</h3>
              <div className="w-8 h-8 rounded-full bg-stone-100 group-hover:bg-[#1C1917] group-hover:text-white flex items-center justify-center transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome to More Than Fashion Studio Section */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#5C4533] to-[#8A6A50] text-white p-8 sm:p-14 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl">
          <div className="space-y-4 max-w-lg">
            <div className="inline-flex items-center gap-2 text-white/70 text-xs font-mono tracking-widest uppercase">
              <span>—</span>
              <span>WELCOME TO</span>
              <span>—</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold leading-tight">
              More Than Fashion
            </h2>
            <p className="text-white/80 text-sm leading-relaxed font-light">
              We blend timeless craftsmanship with sustainable silhouettes. Discover handcrafted wardrobe foundations tailored for conscious modern living.
            </p>
            <div className="pt-2">
              <button className="px-6 py-3 bg-white text-[#1C1917] font-semibold text-xs tracking-wider uppercase rounded-xl hover:bg-stone-100 transition-colors shadow-md">
                Explore The Campaign
              </button>
            </div>
          </div>

          <div className="relative w-full md:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80"
              alt="Fashion Showroom Studio Rack"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 text-xs font-mono tracking-widest text-white/90">
              AUTUMN / WINTER EDITORIAL · STUDIO 04
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1C1917] text-stone-400 text-xs py-12 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-white font-serif font-bold text-lg">
            <span>FashioNia Atelier</span>
          </div>
          <div className="flex items-center gap-6 text-[11px] font-mono tracking-wider">
            <span>PARIS</span>
            <span>·</span>
            <span>MILAN</span>
            <span>·</span>
            <span>NEW YORK</span>
            <span>·</span>
            <span>TOKYO</span>
          </div>
          <div className="text-[11px] text-stone-500">
            © 2026 FashioNia Inc. Replicated Line-for-Line.
          </div>
        </div>
      </footer>
    </div>
  );
};
