/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Wifi, Battery, Signal, RefreshCw, Zap } from 'lucide-react';

export const Mobile3GReplica: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(3);

  useEffect(() => {
    if (!isLoaded && secondsRemaining > 0) {
      const timer = setTimeout(() => setSecondsRemaining((s) => s - 1), 1000);
      return () => clearTimeout(timer);
    } else if (secondsRemaining === 0) {
      setIsLoaded(true);
    }
  }, [secondsRemaining, isLoaded]);

  const handleReset = () => {
    setIsLoaded(false);
    setSecondsRemaining(3);
  };

  return (
    <div className="min-h-screen bg-[#1E293B] p-4 sm:p-8 flex flex-col items-center justify-center font-sans antialiased text-stone-900">
      {/* Simulation Info Card */}
      <div className="max-w-md w-full mb-6 bg-slate-800 text-slate-200 p-4 rounded-2xl border border-slate-700 flex items-center justify-between shadow-xl">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
            <span>RULE 119 & 220 DISCIPLINE</span>
          </div>
          <h3 className="font-bold text-sm text-white">IMG_8031 3G Skeleton Replica</h3>
          <p className="text-xs text-slate-400">
            {isLoaded ? 'Content loaded after 3G simulation.' : `Simulating slow 3G network latency (${secondsRemaining}s)...`}
          </p>
        </div>

        <button
          onClick={handleReset}
          className="px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-xs font-mono font-bold text-white flex items-center gap-1.5 transition-colors shrink-0"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Re-test 3G</span>
        </button>
      </div>

      {/* Realistic Mobile Device Frame (iPhone / Pixel Shell) */}
      <div className="w-[375px] sm:w-[390px] h-[780px] bg-white rounded-[3rem] p-3 shadow-2xl border-8 border-slate-900 flex flex-col overflow-hidden relative">
        {/* Top Speaker / Dynamic Island */}
        <div className="absolute top-4 inset-x-0 flex justify-center z-40 pointer-events-none">
          <div className="w-28 h-5 bg-black rounded-full" />
        </div>

        {/* Mobile OS Status Bar */}
        <div className="pt-3 px-6 pb-2 flex items-center justify-between text-xs font-mono font-semibold text-stone-800 z-30">
          <span>09:41</span>
          <div className="flex items-center gap-2">
            <Signal className="w-3.5 h-3.5" />
            <span className="text-[10px] bg-amber-100 text-amber-900 font-bold px-1 rounded border border-amber-300">3G</span>
            <Wifi className="w-3.5 h-3.5" />
            <Battery className="w-4 h-4" />
          </div>
        </div>

        {/* Inner Phone Screen Content */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-6">
          {/* Header Bar */}
          <div className="flex items-center justify-between">
            {isLoaded ? (
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-xs">
                  NL
                </div>
                <div>
                  <h4 className="font-bold text-xs text-stone-900">Nile Marketplace</h4>
                  <p className="text-[10px] text-stone-500 font-mono">Lagos, NG</p>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2 animate-pulse">
                <div className="w-9 h-9 rounded-full bg-stone-200" />
                <div className="space-y-1">
                  <div className="w-24 h-3 bg-stone-200 rounded" />
                  <div className="w-16 h-2.5 bg-stone-100 rounded" />
                </div>
              </div>
            )}

            {isLoaded ? (
              <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-xs">
                🛒
              </div>
            ) : (
              <div className="w-8 h-8 rounded-full bg-stone-200 animate-pulse" />
            )}
          </div>

          {/* Search Pill */}
          {isLoaded ? (
            <div className="bg-stone-100 rounded-xl p-2.5 text-xs text-stone-400 border border-stone-200 flex items-center gap-2">
              <span>🔍 Search fresh bread, provisions, services...</span>
            </div>
          ) : (
            <div className="w-full h-10 bg-stone-200/80 rounded-xl animate-pulse" />
          )}

          {/* Horizontal Category Rail */}
          <div className="flex items-center gap-3 overflow-x-auto pb-1">
            {isLoaded ? (
              <>
                <span className="px-3 py-1 rounded-full bg-black text-white text-xs font-bold shrink-0">All</span>
                <span className="px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs shrink-0">Bakery</span>
                <span className="px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs shrink-0">Organic</span>
                <span className="px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs shrink-0">Services</span>
              </>
            ) : (
              <>
                <div className="w-14 h-7 bg-stone-200 rounded-full shrink-0 animate-pulse" />
                <div className="w-20 h-7 bg-stone-200 rounded-full shrink-0 animate-pulse" />
                <div className="w-20 h-7 bg-stone-200 rounded-full shrink-0 animate-pulse" />
                <div className="w-20 h-7 bg-stone-200 rounded-full shrink-0 animate-pulse" />
              </>
            )}
          </div>

          {/* Hero Banner Card */}
          {isLoaded ? (
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] shadow-sm bg-stone-900 text-white p-5 flex flex-col justify-end">
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80"
                alt="Fresh Sourdough Bread"
                className="absolute inset-0 w-full h-full object-cover opacity-70"
              />
              <div className="relative z-10 space-y-1">
                <span className="text-[10px] font-mono uppercase bg-amber-500 text-black font-bold px-2 py-0.5 rounded">
                  TODAY'S SPECIAL
                </span>
                <h3 className="font-bold text-base">Wood-Fired Hearth Sourdough</h3>
                <p className="text-xs text-white/80">₦ 3,500 · Baked fresh this morning</p>
              </div>
            </div>
          ) : (
            <div className="w-full aspect-[16/9] bg-stone-200 rounded-2xl animate-pulse flex flex-col justify-end p-5 space-y-2">
              <div className="w-20 h-4 bg-stone-300 rounded" />
              <div className="w-48 h-5 bg-stone-300 rounded" />
              <div className="w-32 h-3 bg-stone-300/80 rounded" />
            </div>
          )}

          {/* Card Feed */}
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="bg-stone-50 rounded-2xl p-4 border border-stone-200/80 space-y-3">
                {isLoaded ? (
                  <div className="flex gap-4 items-center">
                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-stone-200 shrink-0">
                      <img
                        src={
                          i === 1
                            ? 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=400&q=80'
                            : 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80'
                        }
                        alt="Product Item"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-xs text-stone-900">
                        {i === 1 ? 'Almond Croissant & Espresso' : 'Artisan Olive Focaccia'}
                      </h4>
                      <p className="text-[11px] text-stone-500 leading-tight">
                        {i === 1 ? 'Flaky French butter pastry' : 'Organic rosemary & sea salt'}
                      </p>
                      <div className="pt-1 flex items-center justify-between">
                        <span className="font-mono font-bold text-xs">₦ {i === 1 ? '2,800' : '4,200'}</span>
                        <button className="px-3 py-1 rounded bg-black text-white text-[10px] font-bold">
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex gap-4 items-center animate-pulse">
                    <div className="w-20 h-20 bg-stone-200 rounded-xl shrink-0" />
                    <div className="space-y-2 flex-1">
                      <div className="w-3/4 h-3.5 bg-stone-200 rounded" />
                      <div className="w-1/2 h-3 bg-stone-200 rounded" />
                      <div className="w-1/3 h-4 bg-stone-300 rounded pt-2" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Home Bar indicator */}
        <div className="h-4 flex justify-center items-center pb-1">
          <div className="w-32 h-1 bg-stone-300 rounded-full" />
        </div>
      </div>
    </div>
  );
};
