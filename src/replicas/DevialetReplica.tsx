/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';

export const DevialetReplica: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const products = [
    {
      id: 'phantom-1',
      name: 'Phantom I 108 dB',
      color: 'White & Polished Gold',
      price: '$3,200',
      image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'phantom-2',
      name: 'Phantom II 98 dB Opéra de Paris',
      color: 'Moongold Leaf Accents',
      price: '$1,800',
      image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'gemini-2',
      name: 'Devialet Gemini II',
      color: 'Matte White & Luxury Case',
      price: '$450',
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=700&q=80',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans antialiased selection:bg-black selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md px-8 py-5 border-b border-stone-100 flex items-center justify-between">
        <div className="font-bold tracking-widest text-lg uppercase font-mono">
          DEVIALET
        </div>

        <nav className="hidden md:flex items-center gap-10 text-[11px] font-bold tracking-widest uppercase text-stone-700">
          <a href="#home" className="hover:text-black transition-colors">HOME</a>
          <a href="#about" className="hover:text-black transition-colors">ABOUT</a>
          <a href="#collection" className="hover:text-black transition-colors">COLLECTION</a>
        </nav>

        <div>
          <button className="px-6 py-2 rounded-full border border-black hover:bg-black hover:text-white text-[11px] font-bold tracking-widest uppercase transition-colors">
            BUY
          </button>
        </div>
      </header>

      {/* Main Hero */}
      <section className="relative px-8 pt-10 pb-24 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Massive Bold Grotesque Headline */}
        <div className="space-y-1 mb-8">
          <h1 className="font-black text-6xl sm:text-8xl lg:text-9xl tracking-tighter uppercase leading-none">
            DEVIALET
          </h1>
          <p className="text-xs sm:text-sm font-mono tracking-widest text-stone-500 uppercase">
            Elevate the Sound.
          </p>
        </div>

        {/* Center Plinth & Hovering Speaker */}
        <div className="relative w-full max-w-2xl aspect-[4/3] flex items-center justify-center my-4">
          {/* Concentric sound wave circles */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[380px] h-[380px] rounded-full border border-stone-200/60 animate-pulse" />
            <div className="w-[520px] h-[520px] rounded-full border border-stone-100/80 absolute" />
          </div>

          {/* Sculptural White Plinth */}
          <div className="absolute bottom-6 w-56 h-36 rounded-t-3xl bg-gradient-to-t from-stone-200 to-stone-100 shadow-inner" />

          {/* Spherical Audio Object */}
          <div className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 rounded-full shadow-2xl bg-gradient-to-br from-stone-50 via-white to-stone-200 border-4 border-white flex items-center justify-center p-3">
            <div className="w-full h-full rounded-full border-8 border-amber-600/30 flex items-center justify-center bg-stone-900 shadow-inner">
              <div className="w-24 h-24 rounded-full bg-stone-950 border-4 border-amber-500 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-amber-400 shadow-lg" />
              </div>
            </div>
          </div>
        </div>

        {/* Split Details Below Speaker */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-8 text-left">
          <div>
            <p className="font-serif italic text-base sm:text-lg text-stone-800 leading-relaxed">
              Get Your Sonic Fix: Where Luxury Meets Acoustical Euphoria with Devialet.
            </p>
          </div>
          <div className="flex md:justify-end items-center gap-6 text-stone-600">
            <Instagram className="w-4 h-4 cursor-pointer hover:text-black transition-colors" />
            <Twitter className="w-4 h-4 cursor-pointer hover:text-black transition-colors" />
            <Facebook className="w-4 h-4 cursor-pointer hover:text-black transition-colors" />
            <Linkedin className="w-4 h-4 cursor-pointer hover:text-black transition-colors" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-[#FAF9F6] py-20 px-8 border-y border-stone-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <h2 className="font-bold text-2xl tracking-widest uppercase">ABOUT US</h2>
            <p className="text-xs font-mono tracking-widest text-stone-500 uppercase">Sound in its purest state.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto text-xs sm:text-sm text-stone-600 leading-relaxed">
            <p>
              Devialet is a French audio company renowned for delivering unmatched sound quality through innovative products like the Phantom Speaker. Founded in 2007, Devialet blends advanced technology and elegant design to create an exceptional audio experience.
            </p>
            <p>
              Devialet is renowned for its luxurious products and captivating aesthetics, earning awards for the unique fusion of superior audio quality and appealing design. As a leader in the luxury audio industry, the brand continues to combine top-tier audio technology with beautiful design.
            </p>
          </div>

          {/* 3 Monochromatic Living Room Installations */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="aspect-[16/10] bg-stone-900 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80"
                alt="Acoustic Installation 1"
                className="w-full h-full object-cover grayscale contrast-125"
              />
            </div>
            <div className="aspect-[16/10] bg-stone-900 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                alt="Acoustic Installation 2"
                className="w-full h-full object-cover grayscale contrast-125"
              />
            </div>
            <div className="aspect-[16/10] bg-stone-900 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=800&q=80"
                alt="Acoustic Installation 3"
                className="w-full h-full object-cover grayscale contrast-125"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Devialet Collection Carousel */}
      <section id="collection" className="py-20 px-8 max-w-7xl mx-auto space-y-12">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-2xl sm:text-3xl tracking-widest uppercase">
            DEVIALET COLLECTION
          </h2>
          <div className="flex items-center gap-4 text-xs font-mono tracking-widest uppercase">
            <button
              onClick={() => setActiveSlide((prev) => (prev > 0 ? prev - 1 : products.length - 1))}
              className="flex items-center gap-1 hover:text-stone-500 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Left</span>
            </button>
            <span>/</span>
            <button
              onClick={() => setActiveSlide((prev) => (prev < products.length - 1 ? prev + 1 : 0))}
              className="flex items-center gap-1 hover:text-stone-500 transition-colors"
            >
              <span>Right</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3 Featured Products */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p, idx) => (
            <div
              key={p.id}
              className={`p-6 rounded-2xl border transition-all ${
                activeSlide === idx
                  ? 'border-black bg-stone-50 shadow-lg scale-102'
                  : 'border-stone-200 bg-white hover:border-stone-400'
              }`}
            >
              <div className="aspect-square rounded-xl overflow-hidden bg-stone-100 mb-6 flex items-center justify-center p-6">
                <img src={p.image} alt={p.name} className="w-full h-full object-contain" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-stone-500 uppercase">{p.color}</span>
                <h3 className="font-bold text-base text-black uppercase">{p.name}</h3>
                <p className="font-mono text-sm font-semibold text-stone-800">{p.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Number Indicator: 01 --------- 02 03 04 05 */}
        <div className="pt-8 flex items-center justify-between border-t border-stone-200 text-xs font-mono text-stone-500">
          <div className="flex items-center gap-4">
            <span className="font-bold text-black">01</span>
            <div className="w-32 h-0.5 bg-black" />
            <span>02</span>
            <span>03</span>
            <span>04</span>
            <span>05</span>
          </div>

          <div className="flex items-center gap-4 text-[10px] tracking-widest uppercase">
            <span>TW</span>
            <span>IN</span>
            <span>FB</span>
          </div>
        </div>
      </section>
    </div>
  );
};
