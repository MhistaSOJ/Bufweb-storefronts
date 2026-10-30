/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Leaf, Sparkles, Compass, Layers, PenTool, Send, Instagram } from 'lucide-react';

export const VerdeoAtelierReplica: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F6F4EF] text-[#2C332D] font-sans antialiased selection:bg-[#4A5D4E] selection:text-white">
      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-[#F6F4EF]/90 backdrop-blur-md px-6 py-5 border-b border-[#E7E2D7]/60">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Leaf className="w-5 h-5 text-[#4A5D4E]" />
            <div>
              <span className="font-serif font-bold text-xl tracking-tight text-[#2C332D] block">Verdeo Atelier</span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#6F776F] font-mono">DESIGN · BRAND · SPACE</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-xs font-medium tracking-wider uppercase text-[#525B53]">
            <a href="#home" className="hover:text-[#2C332D] transition-colors border-b border-[#2C332D]">HOME</a>
            <a href="#about" className="hover:text-[#2C332D] transition-colors">ABOUT</a>
            <a href="#services" className="hover:text-[#2C332D] transition-colors">SERVICES</a>
            <a href="#projects" className="hover:text-[#2C332D] transition-colors">PROJECTS</a>
            <a href="#process" className="hover:text-[#2C332D] transition-colors">PROCESS</a>
            <a href="#journal" className="hover:text-[#2C332D] transition-colors">JOURNAL</a>
            <a href="#contact" className="hover:text-[#2C332D] transition-colors">CONTACT</a>
          </nav>

          <div>
            <button className="px-5 py-2.5 rounded-full bg-[#4A5D4E] hover:bg-[#3B4B3F] text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-sm">
              LET'S CONNECT
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section with Organic Blob and Kinfolk Staging */}
      <section className="relative overflow-hidden pt-12 pb-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="font-serif text-4xl sm:text-6xl font-light leading-[1.12] text-[#2C332D] tracking-tight">
              We design <br />
              <span className="italic font-normal">meaningful</span> <br />
              experiences.
            </h1>
            <p className="text-[#5E6860] text-sm sm:text-base leading-relaxed max-w-lg">
              A multidisciplinary studio crafting brands, spaces and products rooted in nature, purpose and beauty.
            </p>
            <div className="pt-2">
              <button className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#4A5D4E] hover:bg-[#3D4C40] text-white text-xs font-medium tracking-wider uppercase transition-all">
                <span>EXPLORE OUR WORK</span>
                <span>🌿</span>
              </button>
            </div>
          </div>

          {/* Right Organic Ceramic Composition */}
          <div className="lg:col-span-6 relative">
            {/* Organic Asymmetric Mask Shape */}
            <div className="relative rounded-[60%_40%_70%_30%/40%_50%_60%_50%] overflow-hidden bg-[#EBE6DC] shadow-xl aspect-[4/3] p-1 border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80"
                alt="Verdeo Ceramic Vase and Kinfolk Still Life"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating botanical badge */}
            <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-[#E7E2D7] shadow-lg max-w-[200px] text-xs space-y-1">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#4A5D4E] font-bold">Studio Collection</span>
              <p className="text-[#6F776F] text-[11px] leading-tight">Live beautifully with thoughtful tactile objects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-t border-[#E7E2D7]">
        <div className="md:col-span-5 aspect-[4/3] rounded-3xl overflow-hidden bg-[#E9E4DB]">
          <img
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80"
            alt="Terra velvet armchair"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:col-span-7 space-y-4 md:pl-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#4A5D4E] font-semibold">
            <span>OUR STORY</span>
            <span>🌿</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#2C332D]">
            Rooted in nature. <br />
            <span className="italic">Designed for living.</span>
          </h2>
          <p className="text-[#5E6860] text-sm leading-relaxed max-w-xl">
            Verdeo Atelier is a multidisciplinary studio working across brand, space and product design. We believe in slow creativity, intentional choices and timeless aesthetics that nurture both people and planet.
          </p>
          <div className="pt-2">
            <a href="#about" className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#4A5D4E] hover:underline underline-offset-4">
              <span>READ OUR STORY</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Wave Section Divider: Olive Green Services */}
      <div className="relative">
        <svg className="w-full h-12 md:h-20 text-[#4A5D4E] fill-current" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,40 C320,100 480,10 720,50 C960,90 1200,20 1440,60 L1440,100 L0,100 Z" />
        </svg>

        <section className="bg-[#4A5D4E] text-white px-6 py-16 md:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-200">WHAT WE DO 🌿</span>
              <h2 className="font-serif text-3xl sm:text-5xl font-light">Our Services</h2>
            </div>

            {/* 4 Columns with delicate botanical line art */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="space-y-3 border-t border-white/20 pt-6">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-emerald-200">
                  <Leaf className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-lg tracking-wide uppercase text-sm">BRAND DESIGN</h3>
                <p className="text-white/80 text-xs leading-relaxed">
                  Thoughtful identities and visual stories that connect and inspire.
                </p>
              </div>

              <div className="space-y-3 border-t border-white/20 pt-6">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-emerald-200">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-lg tracking-wide uppercase text-sm">INTERIOR DESIGN</h3>
                <p className="text-white/80 text-xs leading-relaxed">
                  Spaces that blend function, beauty and a deep sense of place.
                </p>
              </div>

              <div className="space-y-3 border-t border-white/20 pt-6">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-emerald-200">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-lg tracking-wide uppercase text-sm">PRODUCT DESIGN</h3>
                <p className="text-white/80 text-xs leading-relaxed">
                  Purposeful objects and collections, designed with care and intention.
                </p>
              </div>

              <div className="space-y-3 border-t border-white/20 pt-6">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-emerald-200">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-lg tracking-wide uppercase text-sm">CREATIVE DIRECTION</h3>
                <p className="text-white/80 text-xs leading-relaxed">
                  Concepts and content that bring ideas to life across every touchpoint.
                </p>
              </div>
            </div>
          </div>
        </section>

        <svg className="w-full h-12 md:h-20 text-[#4A5D4E] fill-current rotate-180" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,40 C320,100 480,10 720,50 C960,90 1200,20 1440,60 L1440,100 L0,100 Z" />
        </svg>
      </div>

      {/* Selected Projects / Recent Work */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#4A5D4E] font-semibold">SELECTED PROJECTS 🌿</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#2C332D] mt-1">Recent Work</h2>
          </div>
          <a href="#projects" className="text-xs font-bold tracking-wider uppercase text-[#4A5D4E] hover:underline underline-offset-4 flex items-center gap-1">
            <span>VIEW ALL PROJECTS</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 4 Arched/Pill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group space-y-3">
            <div className="aspect-[3/4] rounded-t-full rounded-b-2xl overflow-hidden bg-[#EAE5DC] shadow-md">
              <img
                src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=700&q=80"
                alt="Verdeo Botanicals"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div>
              <h3 className="font-serif font-bold text-sm tracking-wider uppercase text-[#2C332D]">VERDEO BOTANICALS</h3>
              <p className="text-xs text-[#6F776F]">Brand Identity & Packaging</p>
            </div>
          </div>

          <div className="group space-y-3">
            <div className="aspect-[3/4] rounded-t-full rounded-b-2xl overflow-hidden bg-[#EAE5DC] shadow-md">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=700&q=80"
                alt="Terra House"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div>
              <h3 className="font-serif font-bold text-sm tracking-wider uppercase text-[#2C332D]">TERRA HOUSE</h3>
              <p className="text-xs text-[#6F776F]">Interior Design</p>
            </div>
          </div>

          <div className="group space-y-3">
            <div className="aspect-[3/4] rounded-t-full rounded-b-2xl overflow-hidden bg-[#EAE5DC] shadow-md">
              <img
                src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=700&q=80"
                alt="Lumen Collection"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div>
              <h3 className="font-serif font-bold text-sm tracking-wider uppercase text-[#2C332D]">LUMEN COLLECTION</h3>
              <p className="text-xs text-[#6F776F]">Product Design</p>
            </div>
          </div>

          <div className="group space-y-3">
            <div className="aspect-[3/4] rounded-t-full rounded-b-2xl overflow-hidden bg-[#EAE5DC] shadow-md">
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=700&q=80"
                alt="Aurora Retreat"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div>
              <h3 className="font-serif font-bold text-sm tracking-wider uppercase text-[#2C332D]">AURORA RETREAT</h3>
              <p className="text-xs text-[#6F776F]">Brand & Creative Direction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process: 5 Connected Steps */}
      <section className="bg-[#EFECE5] py-20 px-6 border-y border-[#E7E2D7]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#4A5D4E] font-semibold">HOW WE WORK 🌿</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#2C332D]">A thoughtful process.</h2>
            <p className="text-[#6F776F] text-xs">We guide each project with intention and clarity from the first idea to the final details.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-full border-2 border-[#4A5D4E] mx-auto flex items-center justify-center font-mono text-xs font-bold text-[#4A5D4E]">01</div>
              <h4 className="font-serif font-bold text-sm uppercase text-[#2C332D]">DISCOVER</h4>
              <p className="text-[11px] text-[#6F776F] leading-tight">We listen, learn and understand your vision and goals.</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-full border-2 border-[#4A5D4E] mx-auto flex items-center justify-center font-mono text-xs font-bold text-[#4A5D4E]">02</div>
              <h4 className="font-serif font-bold text-sm uppercase text-[#2C332D]">DEFINE</h4>
              <p className="text-[11px] text-[#6F776F] leading-tight">We shape the concept and creative direction.</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-full border-2 border-[#4A5D4E] mx-auto flex items-center justify-center font-mono text-xs font-bold text-[#4A5D4E]">03</div>
              <h4 className="font-serif font-bold text-sm uppercase text-[#2C332D]">DESIGN</h4>
              <p className="text-[11px] text-[#6F776F] leading-tight">We craft with care, refining every detail.</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-full border-2 border-[#4A5D4E] mx-auto flex items-center justify-center font-mono text-xs font-bold text-[#4A5D4E]">04</div>
              <h4 className="font-serif font-bold text-sm uppercase text-[#2C332D]">DEVELOP</h4>
              <p className="text-[11px] text-[#6F776F] leading-tight">We bring ideas to life with precision.</p>
            </div>
            <div className="space-y-2 col-span-2 md:col-span-1">
              <div className="w-12 h-12 rounded-full border-2 border-[#4A5D4E] mx-auto flex items-center justify-center font-mono text-xs font-bold text-[#4A5D4E]">05</div>
              <h4 className="font-serif font-bold text-sm uppercase text-[#2C332D]">DELIVER</h4>
              <p className="text-[11px] text-[#6F776F] leading-tight">We launch with thoughtfulness and support.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="px-6 py-3 rounded-full bg-[#4A5D4E] text-white text-xs font-semibold uppercase tracking-wider">
              WORK WITH US 🌿
            </button>
          </div>
        </div>
      </section>

      {/* Kind Words / What Clients Say */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#4A5D4E] font-semibold">KIND WORDS 🌿</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#2C332D]">What Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-[#E7E2D7] shadow-sm space-y-4">
            <span className="text-3xl text-[#4A5D4E] font-serif leading-none">“</span>
            <p className="text-xs text-[#5E6860] italic leading-relaxed">
              Verdeo Atelier transformed our vision into a brand and space that feels calm, intentional and truly aligned with who we are.
            </p>
            <div className="pt-2 border-t border-[#F2ECE1]">
              <h4 className="font-serif font-bold text-xs uppercase text-[#2C332D]">NATALIE S.</h4>
              <p className="text-[10px] text-[#8C958D]">Founder, Aurora Retreat</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#E7E2D7] shadow-sm space-y-4">
            <span className="text-3xl text-[#4A5D4E] font-serif leading-none">“</span>
            <p className="text-xs text-[#5E6860] italic leading-relaxed">
              Their creativity, attention to detail and collaborative process were exceptional from start to finish.
            </p>
            <div className="pt-2 border-t border-[#F2ECE1]">
              <h4 className="font-serif font-bold text-xs uppercase text-[#2C332D]">JAMES L.</h4>
              <p className="text-[10px] text-[#8C958D]">Founder, Terra House</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#E7E2D7] shadow-sm space-y-4">
            <span className="text-3xl text-[#4A5D4E] font-serif leading-none">“</span>
            <p className="text-xs text-[#5E6860] italic leading-relaxed">
              Every element feels considered and timeless. We couldn't have asked for a better partner.
            </p>
            <div className="pt-2 border-t border-[#F2ECE1]">
              <h4 className="font-serif font-bold text-xs uppercase text-[#2C332D]">SOPHIE M.</h4>
              <p className="text-[10px] text-[#8C958D]">Founder, Verdeo Botanicals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Terracotta Wave Footer CTA Section */}
      <section className="bg-[#B85E42] text-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6 space-y-4">
            <h2 className="font-serif text-3xl sm:text-5xl font-light leading-snug">
              Let's create <br />
              <span className="italic">something beautiful</span> <br />
              together.
            </h2>
            <p className="text-white/80 text-xs sm:text-sm leading-relaxed max-w-md">
              Have a project in mind? We'd love to hear about it and explore how we can bring your vision to life.
            </p>
          </div>

          <div className="md:col-span-6">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase font-mono tracking-wider mb-1 text-white/80">Name</label>
                  <input type="text" placeholder="Your name" className="w-full bg-white/10 border border-white/30 rounded-lg p-2.5 text-white placeholder-white/50 focus:outline-none focus:border-white" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-mono tracking-wider mb-1 text-white/80">Email</label>
                  <input type="email" placeholder="Your email" className="w-full bg-white/10 border border-white/30 rounded-lg p-2.5 text-white placeholder-white/50 focus:outline-none focus:border-white" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] uppercase font-mono tracking-wider mb-1 text-white/80">Tell us about your project</label>
                <textarea rows={3} placeholder="Scope, timeline, and goals..." className="w-full bg-white/10 border border-white/30 rounded-lg p-2.5 text-white placeholder-white/50 focus:outline-none focus:border-white" />
              </div>
              <button type="submit" className="w-full py-3 rounded-full bg-white text-[#B85E42] font-bold text-xs uppercase tracking-wider hover:bg-white/90 transition-all shadow-sm">
                SEND MESSAGE 🌿
              </button>
            </form>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between text-[11px] text-white/70">
          <div>© 2024 Verdeo Atelier. All rights reserved.</div>
          <div className="tracking-widest uppercase font-mono">MADE WITH INTENTION</div>
        </div>
      </section>
    </div>
  );
};
