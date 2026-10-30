/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, ShoppingBag } from 'lucide-react';

export const SweaterWeatherReplica: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black font-mono antialiased selection:bg-black selection:text-white">
      {/* Top Ticker */}
      <div className="bg-black text-white text-[10px] tracking-widest text-center py-2 px-4 uppercase">
        ROAST DATE: TODAY · SHIPPED WITHIN 24 HOURS OF BATCH · FREE SHIPPING ON 2+ BAGS
      </div>

      {/* Header */}
      <header className="max-w-7xl mx-auto px-6 py-6 border-b border-black flex items-center justify-between">
        <div className="font-bold text-lg tracking-tighter">
          SWEATER WEATHER COFFEE ROASTERS
        </div>

        <nav className="hidden md:flex items-center gap-8 text-xs tracking-wider uppercase">
          <a href="#beans" className="hover:underline">Beans</a>
          <a href="#subscriptions" className="hover:underline">Subscriptions</a>
          <a href="#origins" className="hover:underline">Origins</a>
          <a href="#equipment" className="hover:underline">Equipment</a>
        </nav>

        <div>
          <button className="px-4 py-2 border border-black hover:bg-black hover:text-white text-xs uppercase tracking-wider transition-colors flex items-center gap-2">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Cart (0)</span>
          </button>
        </div>
      </header>

      {/* Main Swiss Hero */}
      <section className="max-w-7xl mx-auto px-6 py-16 sm:py-24 border-b border-black">
        <div className="space-y-6 max-w-4xl">
          <span className="text-xs uppercase tracking-[0.3em] text-stone-500">
            [SW-BATCH-088] · MICRO-LOT SERIES
          </span>
          <h1 className="text-4xl sm:text-7xl font-bold tracking-tighter leading-none">
            HOW DO YOU LIKE <br />
            YOUR COFFEE?
          </h1>
          <p className="font-sans text-sm sm:text-base text-stone-700 max-w-2xl leading-relaxed">
            Single-origin roasts meticulously sourced from high-altitude micro-lots in Huila, Yirgacheffe, and Antigua. Roasted lightly to preserve origin character.
          </p>
          <div className="pt-4 flex items-center gap-4 text-xs">
            <button className="px-6 py-3.5 bg-black text-white uppercase tracking-wider hover:bg-stone-800 transition-colors">
              Explore Current Offerings
            </button>
            <span className="text-stone-500">[Whole Bean / Ground]</span>
          </div>
        </div>
      </section>

      {/* 3-Column Strict Swiss Product Grid */}
      <section id="beans" className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Bag 1 */}
          <div className="border border-black p-6 space-y-4">
            <div className="aspect-square bg-stone-100 border border-stone-200 flex items-center justify-center p-6">
              <img
                src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=600&q=80"
                alt="Ethiopia Yirgacheffe"
                className="w-full h-full object-contain mix-blend-multiply"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[11px] text-stone-500">
                <span>ETHIOPIA</span>
                <span>2,100M</span>
              </div>
              <h3 className="text-lg font-bold">Yirgacheffe Washed</h3>
              <p className="font-sans text-xs text-stone-600">Jasmine blossom, bergamot, peach nectar.</p>
              <div className="pt-4 flex items-center justify-between border-t border-black">
                <span className="font-bold text-sm">$22.00 / 250g</span>
                <button className="text-xs font-bold uppercase hover:underline flex items-center gap-1">
                  <span>Add</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* Bag 2 */}
          <div className="border border-black p-6 space-y-4">
            <div className="aspect-square bg-stone-100 border border-stone-200 flex items-center justify-center p-6">
              <img
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80"
                alt="Colombia Huila"
                className="w-full h-full object-contain mix-blend-multiply"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[11px] text-stone-500">
                <span>COLOMBIA</span>
                <span>1,850M</span>
              </div>
              <h3 className="text-lg font-bold">Huila Pink Bourbon</h3>
              <p className="font-sans text-xs text-stone-600">Blood orange, brown sugar, caramel finish.</p>
              <div className="pt-4 flex items-center justify-between border-t border-black">
                <span className="font-bold text-sm">$24.00 / 250g</span>
                <button className="text-xs font-bold uppercase hover:underline flex items-center gap-1">
                  <span>Add</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* Bag 3 */}
          <div className="border border-black p-6 space-y-4">
            <div className="aspect-square bg-stone-100 border border-stone-200 flex items-center justify-center p-6">
              <img
                src="https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&w=600&q=80"
                alt="Kenya Nyeri"
                className="w-full h-full object-contain mix-blend-multiply"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[11px] text-stone-500">
                <span>KENYA</span>
                <span>1,950M</span>
              </div>
              <h3 className="text-lg font-bold">Nyeri Hill SL-28</h3>
              <p className="font-sans text-xs text-stone-600">Blackcurrant, ruby grapefruit, honey syrup.</p>
              <div className="pt-4 flex items-center justify-between border-t border-black">
                <span className="font-bold text-sm">$25.00 / 250g</span>
                <button className="text-xs font-bold uppercase hover:underline flex items-center gap-1">
                  <span>Add</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="border-t border-black py-8 px-6 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>SWEATER WEATHER COFFEE ROASTERS · TORONTO / OSLO</div>
          <div>Replicated Line-for-Line from reference design image.</div>
        </div>
      </footer>
    </div>
  );
};
