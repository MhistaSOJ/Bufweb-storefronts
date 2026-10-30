/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Shield, Layers, Award } from 'lucide-react';

export const CompattoReplica: React.FC = () => {
  const [activeStep, setActiveStep] = useState(5);

  return (
    <div className="min-h-screen bg-[#F8F7F4] text-[#2C2723] font-sans antialiased selection:bg-[#785A46] selection:text-white pb-20">
      {/* Top Header */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-serif text-2xl font-bold tracking-tight text-[#2C2723]">c⚡mpatto</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-[#7D7670]">
          <a href="#who" className="hover:text-black transition-colors">Who we are</a>
          <a href="#challenges" className="hover:text-black transition-colors">The challenges</a>
          <a href="#process" className="hover:text-black transition-colors">Our process</a>
          <a href="#why" className="hover:text-black transition-colors">Why choose us</a>
        </nav>

        <div>
          <button className="px-5 py-2 rounded-full border border-[#D5CFC7] bg-white hover:bg-stone-50 text-xs font-semibold text-[#2C2723] transition-colors shadow-sm">
            Contact us
          </button>
        </div>
      </header>

      {/* Hero Rounded Container */}
      <section className="max-w-7xl mx-auto px-6 mb-12">
        <div className="relative rounded-3xl overflow-hidden aspect-[16/9] md:aspect-[21/9] shadow-2xl bg-stone-900 flex flex-col justify-end p-6 sm:p-12 text-white">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80"
            alt="Compatto luxury interior with Japanese paper lamps"
            className="absolute inset-0 w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
            <div className="md:col-span-7 space-y-2">
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-white leading-tight">
                Bringing Simplicity <br />
                <span className="font-normal">In The Furnishing Market</span>
              </h1>
            </div>

            <div className="md:col-span-5 space-y-4 md:text-right">
              <p className="text-white/85 text-xs sm:text-sm leading-relaxed max-w-md ml-auto">
                Compatto simplifies the complex process of furnishing all-inclusive, boutique & high-end hotels, and luxury residences in Greece & Cyprus.
              </p>
              <div>
                <button className="px-6 py-3 rounded-full bg-white text-[#2C2723] font-semibold text-xs tracking-wide uppercase hover:bg-stone-100 transition-colors shadow-lg">
                  Start Your Furnishing Journey
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid: Stats + Who We Are */}
      <section id="who" className="max-w-7xl mx-auto px-6 mb-16 grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Stat Tile */}
        <div className="md:col-span-4 bg-[#E5DFD7] rounded-3xl p-8 flex flex-col justify-between shadow-sm">
          <div className="flex items-center justify-between text-xs font-mono uppercase text-[#7D7670]">
            <span>OUR COMPANY IN NUMBERS</span>
            <div className="w-8 h-8 rounded-full border border-[#7D7670] flex items-center justify-center font-serif text-sm">
              C
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div>
              <div className="font-serif text-4xl sm:text-5xl font-light text-[#2C2723]">150+</div>
              <p className="text-xs text-[#7D7670] mt-1">Furniture Suppliers</p>
            </div>
            <div>
              <div className="font-serif text-4xl sm:text-5xl font-light text-[#2C2723]">15+</div>
              <p className="text-xs text-[#7D7670] mt-1">Years of Industry Experience</p>
            </div>
          </div>
        </div>

        {/* Right Who We Are Tile with Arched Photo */}
        <div className="md:col-span-8 bg-[#EFECE6] rounded-3xl p-8 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center shadow-sm">
          <div className="sm:col-span-7 space-y-3">
            <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#2C2723]">Who We Are</h2>
            <p className="text-xs sm:text-sm text-[#5E5852] leading-relaxed">
              At Compatto, we understand the challenges of creating exceptional spaces that blend elegance, quality, and functionality.
            </p>
            <p className="text-xs text-[#7D7670] leading-relaxed">
              As Greece's premier furniture solutions provider, we've made it our mission to simplify the furnishing process, ensuring that every project is executed flawlessly from initial consultation to final installation.
            </p>
          </div>

          <div className="sm:col-span-5 aspect-[4/3] rounded-2xl rounded-tr-[4rem] overflow-hidden bg-stone-300">
            <img
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=700&q=80"
              alt="Compatto architectural team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* How We Simplify Your Furnishing Experience (Stacked Cards) */}
      <section id="process" className="max-w-7xl mx-auto px-6 mb-20">
        <div className="mb-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#2C2723]">
            How We <span className="font-serif italic font-normal text-[#8A6A50]">Simplify</span> Your Furnishing Experience
          </h2>
        </div>

        {/* Stacked Cards Simulation */}
        <div className="relative rounded-3xl bg-white border border-[#E5DFD7] p-8 sm:p-12 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 space-y-6">
            <div className="text-6xl font-serif text-[#D5CFC7] font-light">5</div>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#2C2723]">
              After-Sales Support and Maintenance
            </h3>
            <p className="text-xs sm:text-sm text-[#5E5852] leading-relaxed">
              Our commitment to your satisfaction extends beyond the final installation. We conduct a thorough final walkthrough to ensure your satisfaction, and also offer comprehensive after-sales support for warranty claims, maintenance, and care instructions.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  onClick={() => setActiveStep(num)}
                  className={`w-8 h-8 rounded-full text-xs font-mono font-bold transition-all ${
                    activeStep === num
                      ? 'bg-[#2C2723] text-white shadow-md'
                      : 'bg-stone-100 text-stone-500 hover:bg-stone-200'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          <div className="md:col-span-6 aspect-[4/3] rounded-2xl overflow-hidden bg-stone-200 shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=80"
              alt="Luxury hotel lobby after-sales support"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Compatto Bento Section */}
      <section id="why" className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#2C2723]">
            Why <span className="font-serif italic font-normal text-[#8A6A50]">Choose</span> Compatto
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#EFECE6] p-6 rounded-3xl space-y-3">
            <span className="text-[10px] font-mono uppercase text-[#7D7670]">01 / PROCESS</span>
            <h4 className="font-serif font-bold text-lg text-[#2C2723]">End-to-End Solutions</h4>
            <p className="text-xs text-[#5E5852] leading-relaxed">
              We manage every aspect of your furnishing project, saving you time and resources.
            </p>
          </div>

          <div className="bg-[#EFECE6] p-6 rounded-3xl space-y-3">
            <span className="text-[10px] font-mono uppercase text-[#7D7670]">02 / CARE</span>
            <h4 className="font-serif font-bold text-lg text-[#2C2723]">After-Sales Support</h4>
            <p className="text-xs text-[#5E5852] leading-relaxed">
              We provide ongoing care and warranty coverage to protect your investment for years to come.
            </p>
          </div>

          <div className="bg-[#3D2E24] text-white p-6 rounded-3xl space-y-3">
            <span className="text-[10px] font-mono uppercase text-white/60">03 / CATALOG</span>
            <h4 className="font-serif font-bold text-lg">No Variety Restrictions</h4>
            <p className="text-xs text-white/80 leading-relaxed">
              Direct relationships with 150+ European factories give you limitless material and finish choices.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
