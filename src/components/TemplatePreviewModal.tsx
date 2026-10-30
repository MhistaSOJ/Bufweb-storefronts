/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TemplateSpec } from '../types';
import { DESIGN_LIBRARY_BY_ID } from '../data/designLibrary300';
import {
  X,
  Monitor,
  Smartphone,
  Wifi,
  WifiOff,
  Sliders,
  CheckCircle2,
  Info,
  Clock,
  Layers,
  Sparkles,
  Phone,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Star,
  MapPin,
  Lock,
} from 'lucide-react';

interface TemplatePreviewModalProps {
  template: TemplateSpec;
  onClose: () => void;
  onCustomize: (template: TemplateSpec) => void;
}

export const TemplatePreviewModal: React.FC<TemplatePreviewModalProps> = ({
  template,
  onClose,
  onCustomize,
}) => {
  const [viewport, setViewport] = useState<'desktop' | 'mobile'>('desktop');
  const [mode, setMode] = useState<'rendered' | 'blueprint'>('rendered');
  const [is3GThrottled, setIs3GThrottled] = useState(false);
  const [showRulesDrawer, setShowRulesDrawer] = useState(false);

  const { dimensions, performanceClass } = template;

  // Retrieve active rules metadata
  const activeRules = template.activeRuleIds
    .map((id) => DESIGN_LIBRARY_BY_ID.get(id))
    .filter(Boolean);

  // Compute theme colors from colourStrategy
  const getThemeClasses = () => {
    switch (dimensions.colourStrategy) {
      case 'dark-luxury-near-black-gold':
        return {
          bg: 'bg-stone-950 text-stone-100',
          surface: 'bg-stone-900 border-amber-900/40 text-stone-100',
          accentBtn: 'bg-amber-400 text-stone-950 hover:bg-amber-300 font-semibold',
          subtext: 'text-stone-400',
          border: 'border-stone-800',
        };
      case 'neo-brutalist-bold-punch':
        return {
          bg: 'bg-yellow-50/50 text-stone-950',
          surface: 'bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-stone-950',
          accentBtn: 'bg-rose-500 text-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5',
          subtext: 'text-stone-700 font-medium',
          border: 'border-black',
        };
      case 'earthy-olive-sand-warm-neutral':
        return {
          bg: 'bg-[#FAF8F5] text-stone-900',
          surface: 'bg-white border-stone-200 shadow-sm text-stone-900',
          accentBtn: 'bg-[#4A5D4E] text-white hover:bg-[#3D4D40]',
          subtext: 'text-stone-600',
          border: 'border-stone-200',
        };
      case 'fresh-terracotta-lilac-soap':
        return {
          bg: 'bg-[#FAF6ED] text-stone-900',
          surface: 'bg-[#F2ECE1] border-stone-200 text-stone-900',
          accentBtn: 'bg-[#B8502F] text-white hover:bg-[#9E4427]',
          subtext: 'text-stone-700',
          border: 'border-stone-300',
        };
      case 'electric-tech-cobalt-slate':
        return {
          bg: 'bg-slate-950 text-slate-100',
          surface: 'bg-slate-900 border-slate-800 text-slate-100',
          accentBtn: 'bg-cyan-500 text-slate-950 hover:bg-cyan-400 font-bold',
          subtext: 'text-slate-400',
          border: 'border-slate-800',
        };
      case 'pastel-soft-mint-butter':
        return {
          bg: 'bg-emerald-50/40 text-stone-900',
          surface: 'bg-white border-emerald-100 text-stone-900 shadow-sm',
          accentBtn: 'bg-emerald-700 text-white hover:bg-emerald-800',
          subtext: 'text-stone-600',
          border: 'border-emerald-200',
        };
      default:
        return {
          bg: 'bg-[#FAF8F5] text-stone-900',
          surface: 'bg-white border-stone-200 text-stone-900',
          accentBtn: 'bg-amber-600 text-white hover:bg-amber-700',
          subtext: 'text-stone-600',
          border: 'border-stone-200',
        };
    }
  };

  const theme = getThemeClasses();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-2 sm:p-4 md:p-6 overflow-hidden">
      <div className="bg-stone-900 text-stone-100 w-full max-w-6xl h-[94vh] rounded-2xl flex flex-col border border-stone-800 shadow-2xl overflow-hidden">
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between p-3 sm:px-6 border-b border-stone-800 bg-stone-950/80 gap-3">
          {/* Template info */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded border border-amber-400/20">
              {template.id}
            </span>
            <div>
              <h2 className="text-sm font-bold text-white line-clamp-1">{template.name}</h2>
              <div className="flex items-center gap-2 text-[11px] text-stone-400">
                <span>{template.industry}</span>
                <span>•</span>
                <span className="capitalize">{dimensions.layoutArchetype.replace(/-/g, ' ')}</span>
              </div>
            </div>
          </div>

          {/* Viewport & Mode Controls */}
          <div className="flex items-center gap-2">
            {/* Desktop / Mobile Toggle */}
            <div className="flex items-center bg-stone-800 p-0.5 rounded-lg border border-stone-700">
              <button
                onClick={() => setViewport('desktop')}
                className={`p-1.5 rounded-md text-xs inline-flex items-center gap-1.5 transition-colors ${
                  viewport === 'desktop'
                    ? 'bg-stone-950 text-white shadow-sm'
                    : 'text-stone-400 hover:text-white'
                }`}
                title="Desktop View (1440px)"
              >
                <Monitor className="w-4 h-4" />
                <span className="hidden sm:inline">Desktop</span>
              </button>

              <button
                onClick={() => setViewport('mobile')}
                className={`p-1.5 rounded-md text-xs inline-flex items-center gap-1.5 transition-colors ${
                  viewport === 'mobile'
                    ? 'bg-stone-950 text-white shadow-sm'
                    : 'text-stone-400 hover:text-white'
                }`}
                title="Mobile View (390px)"
              >
                <Smartphone className="w-4 h-4" />
                <span className="hidden sm:inline">Mobile</span>
              </button>
            </div>

            {/* 3G Network Throttled Mode Simulation */}
            <button
              onClick={() => setIs3GThrottled(!is3GThrottled)}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-mono inline-flex items-center gap-1.5 border transition-colors ${
                is3GThrottled
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 font-bold'
                  : 'bg-stone-800 text-stone-400 border-stone-700 hover:text-white'
              }`}
              title="Test throttled 3G performance (Rule 220 & Skeleton states 119)"
            >
              {is3GThrottled ? <WifiOff className="w-3.5 h-3.5 text-amber-400" /> : <Wifi className="w-3.5 h-3.5" />}
              <span>3G Mode</span>
            </button>

            {/* Rendered vs Blueprint Mode */}
            <div className="flex items-center bg-stone-800 p-0.5 rounded-lg border border-stone-700">
              <button
                onClick={() => setMode('rendered')}
                className={`px-2.5 py-1 rounded-md text-xs transition-colors ${
                  mode === 'rendered' ? 'bg-amber-600 text-white font-medium' : 'text-stone-400 hover:text-white'
                }`}
              >
                Preview
              </button>
              <button
                onClick={() => setMode('blueprint')}
                className={`px-2.5 py-1 rounded-md text-xs transition-colors ${
                  mode === 'blueprint' ? 'bg-amber-600 text-white font-medium' : 'text-stone-400 hover:text-white'
                }`}
              >
                Slot Blueprint
              </button>
            </div>

            {/* Rules Drawer Trigger */}
            <button
              onClick={() => setShowRulesDrawer(!showRulesDrawer)}
              className={`p-1.5 rounded-lg text-xs inline-flex items-center gap-1 border transition-colors ${
                showRulesDrawer
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                  : 'bg-stone-800 text-stone-300 border-stone-700 hover:text-white'
              }`}
              title="Inspect active design rules"
            >
              <Layers className="w-4 h-4" />
              <span className="hidden md:inline font-mono text-[11px]">{template.activeRuleIds.length} Rules</span>
            </button>

            {/* Primary Action Button */}
            <button
              onClick={() => onCustomize(template)}
              className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-stone-950 rounded-lg text-xs font-bold inline-flex items-center gap-1.5 shadow-sm transition-colors"
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Use Template</span>
            </button>

            {/* Close Modal */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 3G Network Banner when active */}
        {is3GThrottled && (
          <div className="bg-amber-950/80 border-b border-amber-800/80 px-4 py-2 flex items-center justify-between text-xs text-amber-200">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span className="font-mono font-medium">3G Throttled Simulation Active</span>
              <span className="text-stone-400">|</span>
              <span className="text-stone-300">Simulating budget phone on 750kbps cellular (Rules 119, 206, 209, 220)</span>
            </div>
            <span className="font-mono text-[11px] text-amber-300 bg-amber-900/60 px-2 py-0.5 rounded">
              Budget: &lt;500 KB Total
            </span>
          </div>
        )}

        {/* Workspace Area: Frame Container + Rules Drawer */}
        <div className="flex-1 flex overflow-hidden relative">
          {/* Live Viewport Frame */}
          <div className="flex-1 overflow-y-auto bg-stone-950 p-2 sm:p-6 flex items-start justify-center">
            <div
              className={`transition-all duration-300 w-full ${
                viewport === 'mobile'
                  ? 'max-w-[390px] rounded-[36px] border-[10px] border-stone-800 shadow-2xl overflow-hidden my-4 bg-white min-h-[780px]'
                  : 'max-w-5xl rounded-xl border border-stone-800 shadow-xl overflow-hidden bg-white min-h-[600px]'
              }`}
            >
              {/* Mobile Notch & Speaker (if mobile view) */}
              {viewport === 'mobile' && (
                <div className="bg-stone-900 h-6 flex items-center justify-between px-6 text-[10px] font-mono text-white/70 select-none">
                  <span>9:41</span>
                  <div className="w-20 h-3 bg-stone-950 rounded-full" />
                  <div className="flex items-center gap-1">
                    <span>3G</span>
                    <div className="w-4 h-2 border border-white/60 rounded-xs flex items-center p-0.5">
                      <div className="h-full w-full bg-white/70 rounded-xs" />
                    </div>
                  </div>
                </div>
              )}

              {/* Viewport Content Canvas */}
              {is3GThrottled ? (
                /* Throttled 3G Skeleton State (matching user image IMG_8031!) */
                <div className="p-6 space-y-6 bg-white min-h-[600px]">
                  <div className="flex items-center justify-between border-b pb-4">
                    <div className="h-6 w-24 bg-stone-200 animate-pulse rounded" />
                    <div className="flex gap-2">
                      <div className="h-6 w-16 bg-stone-200 animate-pulse rounded-full" />
                      <div className="h-6 w-6 bg-stone-200 animate-pulse rounded-full" />
                    </div>
                  </div>

                  <div className="space-y-2 py-4">
                    <div className="h-8 w-3/4 bg-stone-200 animate-pulse rounded" />
                    <div className="h-4 w-1/2 bg-stone-200 animate-pulse rounded" />
                    <div className="h-10 w-32 bg-stone-300 animate-pulse rounded-lg mt-4" />
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="aspect-square bg-stone-200 animate-pulse rounded-xl" />
                    <div className="aspect-square bg-stone-200 animate-pulse rounded-xl" />
                    <div className="aspect-square bg-stone-200 animate-pulse rounded-xl" />
                    <div className="aspect-square bg-stone-200 animate-pulse rounded-xl" />
                  </div>

                  <div className="text-center pt-8 text-xs text-stone-400 font-mono">
                    Simulating skeleton layout reservation (Rule 119) with 0 layout shift (Rule 224).
                  </div>
                </div>
              ) : mode === 'blueprint' ? (
                /* Slot Architecture Blueprint Mode */
                <div className="p-6 space-y-6 bg-stone-50 min-h-[600px]">
                  <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl text-xs text-amber-900 leading-relaxed">
                    <strong>Real Content Architecture (Rule 131 & 186):</strong> Production templates contain no invented business names, fake phone numbers, or dummy prices. Content slots are clearly defined below ready for the owner's genuine materials.
                  </div>

                  <div className="space-y-4">
                    {template.contentSlots.map((slot, idx) => (
                      <div
                        key={slot.id}
                        className="bg-white rounded-xl border-2 border-dashed border-stone-300 p-5 space-y-3"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-stone-100 text-stone-700 font-mono text-xs flex items-center justify-center font-bold">
                              {idx + 1}
                            </span>
                            <h4 className="font-serif font-bold text-stone-900 text-sm">
                              {slot.title}
                            </h4>
                          </div>
                          <span className="text-[10px] uppercase font-mono px-2 py-0.5 bg-stone-100 text-stone-600 rounded">
                            {slot.slotType}
                          </span>
                        </div>

                        <p className="text-xs text-stone-600">{slot.description}</p>

                        <div className="bg-stone-50 rounded-lg p-3 text-xs border border-stone-200 text-stone-700">
                          <div className="font-semibold text-stone-900 mb-1">Empty State Guidance:</div>
                          <div className="italic text-stone-600">{slot.emptyStatePrompt}</div>
                        </div>

                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {slot.requiredAssets.map((asset) => (
                            <span
                              key={asset}
                              className="text-[10px] bg-amber-50 text-amber-800 border border-amber-200 px-2 py-0.5 rounded font-mono"
                            >
                              Requires: {asset}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                /* Rendered Real Preview of the Template */
                <div className={`${theme.bg} min-h-[600px] flex flex-col font-sans transition-colors duration-200`}>
                  {/* Template Header Component */}
                  <header className={`px-6 py-4 border-b ${theme.border} flex items-center justify-between`}>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-stone-800 text-white flex items-center justify-center text-xs font-serif font-bold">
                        {template.name.charAt(0)}
                      </div>
                      <span className="font-serif font-bold text-sm tracking-tight">
                        {template.name.split('-')[0].trim()}
                      </span>
                    </div>

                    <div className="hidden sm:flex items-center gap-6 text-xs font-medium">
                      <span>Services</span>
                      <span>Showcase</span>
                      <span>About</span>
                      <span>Contact</span>
                    </div>

                    <button className={`px-4 py-2 rounded-lg text-xs ${theme.accentBtn} transition-all`}>
                      Get in Touch
                    </button>
                  </header>

                  {/* Template Hero Component */}
                  <section className="px-6 py-12 md:py-16 max-w-4xl mx-auto w-full text-center sm:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-4 bg-stone-100/80 border border-stone-200 text-stone-800">
                      <Sparkles className="w-3 h-3 text-amber-600" />
                      <span>{template.industry}</span>
                    </div>

                    <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                      {template.description.split('.')[0]}.
                    </h1>

                    <p className={`mt-4 text-sm sm:text-base ${theme.subtext} max-w-xl leading-relaxed`}>
                      Thoughtfully crafted for {template.businessTypes[0] || template.industry}.
                      Designed with an authentic {dimensions.layoutArchetype.replace(/-/g, ' ')} structure.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row gap-3">
                      <button className={`px-6 py-3 rounded-lg text-xs sm:text-sm font-semibold ${theme.accentBtn} inline-flex items-center justify-center gap-2`}>
                        <span>Explore Offerings</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <button className="px-6 py-3 rounded-lg text-xs sm:text-sm font-medium border border-stone-300 hover:bg-stone-100 text-stone-800 inline-flex items-center justify-center gap-2">
                        <MessageCircle className="w-4 h-4 text-emerald-600" />
                        <span>Chat on WhatsApp</span>
                      </button>
                    </div>
                  </section>

                  {/* Trust Strip (Rule 88) */}
                  <section className={`border-y ${theme.border} py-4 px-6 bg-stone-50/50`}>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                      <div className="flex items-center justify-center gap-2 text-xs font-medium text-stone-700">
                        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Verified Excellence</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-xs font-medium text-stone-700">
                        <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                        <span>Fast Response Time</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-xs font-medium text-stone-700">
                        <Star className="w-4 h-4 text-amber-500 shrink-0" />
                        <span>5.0 Client Rating</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-xs font-medium text-stone-700">
                        <Lock className="w-4 h-4 text-stone-600 shrink-0" />
                        <span>Transparent Terms</span>
                      </div>
                    </div>
                  </section>

                  {/* Feature Grid / Offerings Section */}
                  <section className="px-6 py-12 max-w-4xl mx-auto w-full">
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <span className="text-xs uppercase font-mono tracking-wider text-amber-700 font-semibold">
                          Our Expertise
                        </span>
                        <h2 className="font-serif text-2xl font-bold mt-1">Core Offerings</h2>
                      </div>
                      <span className="text-xs text-stone-500 font-mono">
                        {dimensions.gridStructure}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {[1, 2, 3].map((num) => (
                        <div
                          key={num}
                          className={`${theme.surface} p-6 rounded-xl border space-y-3 transition-transform hover:-translate-y-1`}
                        >
                          <div className="w-8 h-8 rounded-lg bg-stone-100 flex items-center justify-center text-xs font-mono font-bold text-stone-800">
                            0{num}
                          </div>
                          <h3 className="font-serif font-bold text-base">
                            {template.businessTypes[num - 1] || `Tailored Service ${num}`}
                          </h3>
                          <p className={`text-xs ${theme.subtext} leading-relaxed`}>
                            Delivering dedicated solutions with precision craftsmanship and attentive care.
                          </p>
                          <div className="pt-2 flex items-center gap-1 text-xs font-semibold text-amber-700">
                            <span>Learn more</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Template Footer */}
                  <footer className={`mt-auto px-6 py-8 border-t ${theme.border} bg-stone-900 text-stone-300 text-xs`}>
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div>
                        <div className="font-serif font-bold text-white text-sm">
                          {template.name.split('-')[0].trim()}
                        </div>
                        <div className="text-[11px] text-stone-400 mt-1">
                          Crafted with Design Intelligence • Performance Tier: [{performanceClass}]
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-stone-400">
                        <span>Terms & Policy</span>
                        <span>Privacy</span>
                        <span>WhatsApp</span>
                      </div>
                    </div>
                  </footer>
                </div>
              )}
            </div>
          </div>

          {/* Active 300 Design Rules Drawer */}
          {showRulesDrawer && (
            <div className="w-80 bg-stone-900 border-l border-stone-800 flex flex-col p-4 overflow-y-auto">
              <div className="flex items-center justify-between pb-3 border-b border-stone-800 mb-4">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-amber-400" />
                  <h3 className="font-serif font-bold text-white text-sm">
                    Applied Design Rules
                  </h3>
                </div>
                <span className="text-xs font-mono text-amber-400">
                  {template.activeRuleIds.length} active
                </span>
              </div>

              <p className="text-xs text-stone-400 mb-3 leading-relaxed">
                Rules from the 300-item library actively orchestrating this template's layout, motion, contrast, and UX psychology:
              </p>

              <div className="space-y-2.5">
                {activeRules.map((rule) => {
                  if (!rule) return null;
                  return (
                    <div
                      key={rule.id}
                      className="bg-stone-950 p-3 rounded-lg border border-stone-800 space-y-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-amber-400">
                          #{rule.id} {rule.categoryName}
                        </span>
                        <span
                          className={`text-[9px] font-mono px-1 rounded ${
                            rule.cost === 'L'
                              ? 'bg-emerald-950 text-emerald-300'
                              : rule.cost === 'M'
                              ? 'bg-amber-950 text-amber-300'
                              : rule.cost === 'H'
                              ? 'bg-rose-950 text-rose-300'
                              : 'text-stone-500'
                          }`}
                        >
                          {rule.cost !== 'none' ? `[${rule.cost}]` : 'Zero cost'}
                        </span>
                      </div>

                      <div className="text-xs font-bold text-white leading-snug">
                        {rule.name}
                      </div>

                      <p className="text-[11px] text-stone-400 leading-relaxed">
                        {rule.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
