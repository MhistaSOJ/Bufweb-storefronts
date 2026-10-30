/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CombinationTemplateSpec } from '../engine/combinationsEngine';
import { TemplateSpec } from '../types';
import {
  Monitor,
  Smartphone,
  ArrowLeft,
  Sliders,
  Download,
  Sparkles,
  Layers,
  CheckCircle,
  ExternalLink,
  ChevronRight,
  Play,
  Heart,
  Star,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  Truck,
  RotateCcw,
  Headphones,
  Search,
  User,
  Compass,
  Calendar,
  Volume2,
  Coffee,
  Sparkle,
} from 'lucide-react';

interface CombinationLiveRendererProps {
  template: CombinationTemplateSpec | TemplateSpec;
  onBack: () => void;
  onCustomize?: (template: TemplateSpec) => void;
}

export const CombinationLiveRenderer: React.FC<CombinationLiveRendererProps> = ({
  template,
  onBack,
  onCustomize,
}) => {
  const [viewport, setViewport] = useState<'desktop' | 'mobile'>('desktop');
  const [showRecipeDetails, setShowRecipeDetails] = useState(false);
  const [copied, setCopied] = useState(false);

  // Check if this is one of our 300 modular combinations
  const isModular = 'isModularCombination' in template && template.isModularCombination;
  const modularTemplate = isModular ? (template as CombinationTemplateSpec) : null;
  const recipe = modularTemplate?.recipe;

  const handleCopyConfig = () => {
    navigator.clipboard.writeText(JSON.stringify(template, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-stone-900 text-stone-100">
      {/* Top Controller Bar */}
      <header className="sticky top-0 z-50 bg-stone-950/95 backdrop-blur-md border-b border-stone-800 px-4 py-3">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800 text-stone-200 hover:bg-stone-700 text-xs font-medium transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold">
                  {template.id}
                </span>
                <h1 className="font-serif font-bold text-sm sm:text-base text-white tracking-tight truncate max-w-xs sm:max-w-md">
                  {template.name}
                </h1>
              </div>
              <p className="text-[11px] text-stone-400 font-sans hidden sm:block truncate">
                {template.industry} • {template.visualStyle}
              </p>
            </div>
          </div>

          {/* Center: Viewport Switcher */}
          <div className="flex items-center bg-stone-900 p-0.5 rounded-lg border border-stone-800">
            <button
              onClick={() => setViewport('desktop')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                viewport === 'desktop'
                  ? 'bg-amber-500 text-stone-950 font-semibold shadow-sm'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Desktop</span>
              <span className="text-[10px] opacity-80">(1440px)</span>
            </button>
            <button
              onClick={() => setViewport('mobile')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                viewport === 'mobile'
                  ? 'bg-amber-500 text-stone-950 font-semibold shadow-sm'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Mobile</span>
              <span className="text-[10px] opacity-80">(390px)</span>
            </button>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowRecipeDetails(!showRecipeDetails)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                showRecipeDetails
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Recipe</span>
            </button>

            {onCustomize && (
              <button
                onClick={() => onCustomize(template)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 text-stone-950 hover:bg-amber-400 text-xs font-semibold shadow-sm transition-colors"
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Customize</span>
              </button>
            )}

            <button
              onClick={handleCopyConfig}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800 text-stone-300 hover:bg-stone-700 text-xs font-medium transition-colors"
              title="Copy JSON Spec"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{copied ? 'Copied!' : 'Spec'}</span>
            </button>
          </div>
        </div>

        {/* Recipe Drawer Banner */}
        {isModular && modularTemplate && (
          <div className="max-w-7xl mx-auto mt-2 pt-2 border-t border-stone-800/80 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-amber-400 font-mono font-medium flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Modular Blend ({modularTemplate.sourcesUsed.join(' + ')}):
            </span>
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="px-2 py-0.5 rounded bg-stone-800 border border-stone-700 text-stone-200">
                Hero: <strong className="text-amber-300">{recipe?.hero.sourceName}</strong> ({recipe?.hero.name})
              </span>
              <span className="px-2 py-0.5 rounded bg-stone-800 border border-stone-700 text-stone-200">
                Trust: <strong className="text-emerald-300">{recipe?.trust.sourceName}</strong>
              </span>
              <span className="px-2 py-0.5 rounded bg-stone-800 border border-stone-700 text-stone-200">
                Showcase: <strong className="text-sky-300">{recipe?.showcase.sourceName}</strong>
              </span>
              <span className="px-2 py-0.5 rounded bg-stone-800 border border-stone-700 text-stone-200">
                Narrative: <strong className="text-purple-300">{recipe?.narrative.sourceName}</strong>
              </span>
              <span className="px-2 py-0.5 rounded bg-stone-800 border border-stone-700 text-stone-200">
                Footer: <strong className="text-rose-300">{recipe?.footer.sourceName}</strong>
              </span>
            </div>
          </div>
        )}
      </header>

      {/* Main Render Area */}
      <div className="flex-1 overflow-y-auto py-8 px-4 flex justify-center bg-stone-950">
        <div
          className={`transition-all duration-300 shadow-2xl bg-white text-stone-900 rounded-xl overflow-hidden border border-stone-800 ${
            viewport === 'desktop' ? 'w-full max-w-6xl' : 'w-[390px] border-4 border-stone-700 rounded-3xl'
          }`}
        >
          {/* If Baseline Sample Template, render baseline view */}
          {template.id === 'sample_tpl_0001' ? (
            <RenderBaselineSample />
          ) : recipe ? (
            /* Render modular combination sections */
            <div>
              {/* Section 1: Hero */}
              <div className="relative group">
                <SectionOriginBadge source={recipe.hero.sourceName} label="Hero Block" />
                {renderHeroBlock(recipe.heroId)}
              </div>

              {/* Section 2: Trust / Social Proof */}
              <div className="relative group">
                <SectionOriginBadge source={recipe.trust.sourceName} label="Trust Proof" />
                {renderTrustBlock(recipe.trustId)}
              </div>

              {/* Section 3: Showcase & Product */}
              <div className="relative group">
                <SectionOriginBadge source={recipe.showcase.sourceName} label="Showcase Grid" />
                {renderShowcaseBlock(recipe.showcaseId)}
              </div>

              {/* Section 4: Narrative & Process */}
              <div className="relative group">
                <SectionOriginBadge source={recipe.narrative.sourceName} label="Process / Story" />
                {renderNarrativeBlock(recipe.narrativeId)}
              </div>

              {/* Section 5: Footer & CTA */}
              <div className="relative group">
                <SectionOriginBadge source={recipe.footer.sourceName} label="Footer / CTA" />
                {renderFooterBlock(recipe.footerId)}
              </div>
            </div>
          ) : (
            <div className="p-12 text-center text-stone-500">No render blueprint available.</div>
          )}
        </div>
      </div>
    </div>
  );
};

// Origin tag helper
const SectionOriginBadge: React.FC<{ source: string; label: string }> = ({ source, label }) => (
  <div className="absolute top-2 right-2 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-black/85 text-amber-300 border border-amber-400/40 shadow-lg backdrop-blur-sm">
      <Sparkles className="w-2.5 h-2.5" />
      {label}: {source}
    </span>
  </div>
);

/* =========================================================================
   1. HERO BLOCKS RENDERERS
   ========================================================================= */
function renderHeroBlock(heroId: string) {
  switch (heroId) {
    case 'hero_fashionia':
      return (
        <section className="relative bg-[#2A2320] text-stone-100 overflow-hidden pt-12 pb-16 px-6 sm:px-12 border-b border-stone-800">
          {/* Subtle Top Nav */}
          <div className="max-w-6xl mx-auto flex items-center justify-between pb-8 border-b border-stone-800/60 mb-10 text-xs text-stone-300">
            <div className="font-serif tracking-widest text-base font-bold text-white flex items-center gap-1.5">
              <span>✳</span> FASHIONIA ATELIER
            </div>
            <div className="hidden sm:flex items-center gap-6 tracking-wider uppercase text-[11px]">
              <span className="text-amber-400">Home</span>
              <span>Shop</span>
              <span>New Arrivals</span>
              <span>Collections</span>
              <span>About</span>
            </div>
            <div className="flex items-center gap-3">
              <Search className="w-4 h-4 text-stone-400" />
              <User className="w-4 h-4 text-stone-400" />
              <ShoppingBag className="w-4 h-4 text-stone-400" />
            </div>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <span className="text-amber-400 text-xs font-mono tracking-widest uppercase mb-2 block">
                Autumn Winter Collection 2026
              </span>
              {/* Massive Outlined STYLE Title */}
              <h1 className="text-6xl sm:text-8xl font-serif font-black tracking-tight leading-none text-transparent stroke-text mb-4 text-stone-200">
                STYLE
              </h1>
              <p className="font-serif italic text-stone-300 text-lg sm:text-xl max-w-lg mb-6">
                “Style is a way to say who you are without speaking.”
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button className="px-6 py-3 rounded-full bg-amber-400 text-stone-950 font-semibold text-xs tracking-wider uppercase hover:bg-amber-300 shadow-md">
                  Explore Collection
                </button>
                <button className="px-6 py-3 rounded-full border border-stone-600 text-stone-200 text-xs tracking-wider uppercase hover:border-white">
                  Atelier Lookbook
                </button>
              </div>
            </div>

            {/* Model Cutout Mockup */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-64 h-80 rounded-2xl overflow-hidden border border-stone-700/60 shadow-2xl bg-gradient-to-b from-stone-800 to-stone-950 flex flex-col justify-end p-4">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/30 via-stone-900/60 to-black/90" />
                <div className="relative z-10">
                  <span className="text-[10px] font-mono uppercase bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30">
                    Couture Look 04
                  </span>
                  <p className="font-serif font-bold text-white text-base mt-1">Linen Silk Ensemble</p>
                  <p className="text-stone-400 text-xs">Milano Fashion Week Preview</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      );

    case 'hero_verdeo':
      return (
        <section className="bg-[#FAF8F5] text-stone-900 pt-10 pb-16 px-6 sm:px-12 border-b border-stone-200">
          <div className="max-w-6xl mx-auto flex items-center justify-between pb-6 mb-8 text-xs text-stone-600 border-b border-stone-200/60">
            <span className="font-serif text-lg tracking-tight font-bold text-stone-800">Verdeo Atelier</span>
            <div className="hidden sm:flex items-center gap-6">
              <span>Home</span>
              <span>About</span>
              <span>Services</span>
              <span>Projects</span>
              <span>Journal</span>
            </div>
            <button className="px-4 py-1.5 rounded-full bg-[#4A5D4E] text-white text-xs font-medium">Let’s Connect</button>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <h1 className="text-4xl sm:text-6xl font-serif text-stone-900 tracking-tight leading-tight mb-4">
                We design <br />
                <span className="italic font-normal">meaningful experiences.</span>
              </h1>
              <p className="text-stone-600 text-sm sm:text-base max-w-md mb-6 leading-relaxed">
                A multidisciplinary studio crafting brands, spaces and objects rooted in nature, purpose and beauty.
              </p>
              <button className="px-6 py-2.5 rounded-full bg-[#4A5D4E] text-white text-xs font-medium hover:bg-[#3d4d40] shadow-sm">
                Explore Our Work ↗
              </button>
            </div>

            {/* Organic Staging Photo Card */}
            <div className="md:col-span-5">
              <div className="relative rounded-[2rem] overflow-hidden bg-[#ECE6DC] p-6 shadow-sm border border-stone-200">
                <div className="w-full h-56 rounded-xl bg-gradient-to-tr from-[#D4C8B5] to-[#EBE4D8] flex items-center justify-center p-4 text-center">
                  <div>
                    <span className="text-xs font-serif uppercase tracking-widest text-stone-700 block mb-1">
                      Kinfolk Edition
                    </span>
                    <p className="font-serif italic text-stone-800 text-lg">“Live Beautifully”</p>
                    <p className="text-[11px] text-stone-600 mt-2">Ceramic Vessel & Botanical Flora</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );

    case 'hero_devialet':
      return (
        <section className="bg-white text-stone-900 pt-12 pb-16 px-6 sm:px-12 border-b border-stone-200">
          <div className="max-w-6xl mx-auto flex items-center justify-between pb-6 mb-8 text-xs text-stone-600 border-b border-stone-100">
            <span className="font-mono font-bold tracking-widest text-sm text-black">DEVIALET</span>
            <div className="hidden sm:flex items-center gap-6 uppercase tracking-wider text-[11px]">
              <span>Home</span>
              <span>About</span>
              <span>Collection</span>
            </div>
            <button className="px-4 py-1 rounded-full border border-black text-black text-xs font-mono uppercase">Buy</button>
          </div>

          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-6xl sm:text-9xl font-black font-sans tracking-tighter uppercase text-stone-950 mb-2">
              DEVIALET
            </h1>
            <p className="font-mono text-xs uppercase tracking-widest text-stone-500 mb-8">
              Elevate the sound. Paris, France.
            </p>

            {/* Floating Speaker Pedestal Graphic */}
            <div className="relative max-w-md mx-auto py-8">
              <div className="w-48 h-48 sm:w-56 sm:h-56 mx-auto rounded-full bg-gradient-to-b from-stone-100 to-stone-200 border border-stone-300 shadow-xl flex items-center justify-center relative">
                <div className="w-28 h-28 rounded-full border-4 border-amber-600/40 bg-stone-900 flex items-center justify-center text-amber-400 font-mono text-xs font-bold">
                  PHANTOM I
                </div>
              </div>
              <div className="mt-6">
                <p className="text-xs font-serif italic text-stone-600">
                  Where luxury meets acoustical euphoria. 108 dB SPL • 14Hz - 27kHz.
                </p>
              </div>
            </div>
          </div>
        </section>
      );

    case 'hero_compatto':
      return (
        <section className="bg-[#FAF8F5] text-stone-900 pt-8 pb-14 px-6 sm:px-12 border-b border-stone-200">
          <div className="max-w-6xl mx-auto">
            {/* Top rounded interior box */}
            <div className="w-full rounded-2xl bg-[#2D2A26] text-white p-8 sm:p-12 relative overflow-hidden shadow-lg">
              <div className="relative z-10 max-w-xl">
                <span className="font-mono text-[10px] uppercase tracking-widest text-amber-300/80 mb-2 block">
                  All-Inclusive Boutique Furnishing
                </span>
                <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-4">
                  Bringing Simplicity <br />
                  In The Furnishing Market
                </h1>
                <p className="text-stone-300 text-xs sm:text-sm mb-6 leading-relaxed">
                  Compatto simplifies the complex process of furnishing luxury hotels, residences and boutique villas in Greece & Cyprus.
                </p>
                <button className="px-5 py-2.5 rounded-lg bg-amber-400 text-stone-950 text-xs font-semibold hover:bg-amber-300 transition-colors">
                  Start Your Furnishing Journey
                </button>
              </div>
            </div>
          </div>
        </section>
      );

    case 'hero_alex_morgan':
      return (
        <section className="bg-[#FFF8F5] text-stone-900 pt-8 pb-14 px-6 sm:px-12 border-b border-rose-100">
          {/* macOS Safari Chrome */}
          <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md border border-stone-200 overflow-hidden">
            <div className="bg-stone-100 px-4 py-2 border-b border-stone-200 flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
              <div className="flex-1 text-center font-mono text-[11px] text-stone-500 bg-white mx-4 py-0.5 rounded border border-stone-200 truncate">
                alexmorgan.design
              </div>
            </div>

            <div className="p-6 sm:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-gradient-to-br from-[#FFF5F0] via-white to-[#FFF0EA]">
              <div className="md:col-span-7">
                <span className="text-[#E25B3C] font-mono text-xs uppercase tracking-wider block mb-1 font-semibold">
                  Brand & Web Designer
                </span>
                <h1 className="text-4xl sm:text-5xl font-sans font-bold tracking-tight text-stone-950 mb-3">
                  Hi, I’m <span className="text-[#E25B3C]">Alex Morgan.</span>
                </h1>
                <p className="text-stone-600 text-sm max-w-md mb-6 leading-relaxed">
                  Based in Toronto, Canada. I help startups and creative brands build thoughtful identities and digital experiences that connect.
                </p>
                <div className="flex items-center gap-3">
                  <button className="px-5 py-2.5 rounded-full bg-[#E25B3C] text-white text-xs font-semibold hover:bg-[#cf4f32] shadow-sm">
                    View my work →
                  </button>
                  <button className="px-5 py-2.5 rounded-full border border-stone-300 text-stone-700 text-xs font-medium hover:bg-white">
                    About me
                  </button>
                </div>
              </div>

              <div className="md:col-span-5 flex justify-center">
                <div className="relative">
                  <div className="w-48 h-48 rounded-full bg-[#FCECE6] border-4 border-white shadow-xl flex items-center justify-center text-center p-4">
                    <div>
                      <User className="w-12 h-12 text-[#E25B3C] mx-auto mb-1 opacity-80" />
                      <span className="text-xs font-serif font-bold text-stone-800">Alex Morgan</span>
                      <p className="text-[10px] text-stone-500">Toronto, ON</p>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-rose-200 shadow-md text-[11px]">
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-1.5 animate-pulse" />
                    <span className="text-stone-800 font-medium">Available for work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );

    case 'hero_gospel':
      return (
        <section className="relative bg-[#1A1615] text-white pt-14 pb-20 px-6 sm:px-12 border-b border-stone-800">
          <div className="max-w-4xl mx-auto text-center">
            <span className="font-serif italic text-amber-300 text-sm block mb-2">Sacred Sanctuary & Faith</span>
            <h1 className="text-4xl sm:text-6xl font-serif font-normal tracking-wide leading-tight mb-4 text-stone-100">
              Life-Changing <br />
              <span className="font-bold">Journey to God</span>
            </h1>
            <p className="font-serif text-stone-300 text-xs sm:text-sm max-w-lg mx-auto mb-8 leading-relaxed">
              Our common creed is our belief in the Bible, our deep faith in Jesus Christ, and our acceptance of unconditional love.
            </p>
            <button className="px-6 py-2.5 rounded-full bg-[#7A1C28] text-white text-xs font-serif tracking-widest uppercase hover:bg-[#631620] shadow-md border border-[#942736]">
              Explore Now
            </button>
          </div>
        </section>
      );

    case 'hero_grace_church':
      return (
        <section className="bg-[#0B1528] text-white pt-12 pb-16 px-6 sm:px-12 border-b border-blue-950">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-blue-400 font-mono text-[11px] uppercase tracking-widest block mb-2 font-semibold">
              Church Love • Faith Love
            </span>
            <h1 className="text-4xl sm:text-6xl font-sans font-black tracking-tight mb-4 text-white">
              Welcome To <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-amber-200">
                Our Church
              </span>
            </h1>
            <p className="text-blue-200 text-xs sm:text-sm max-w-md mx-auto mb-6 leading-relaxed">
              A loving, multigenerational community dedicated to sharing grace, hope, and worship across our city.
            </p>
            <button className="px-6 py-2.5 rounded-lg bg-orange-500 text-white text-xs font-bold uppercase tracking-wider hover:bg-orange-600 shadow-lg">
              I’m New Here
            </button>
          </div>
        </section>
      );

    default:
      // Swiss, Cedling, Soap, or Fallback
      return (
        <section className="bg-stone-50 text-stone-900 pt-12 pb-16 px-6 sm:px-12 border-b border-stone-200">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs font-mono uppercase tracking-widest text-stone-500 block mb-2">
              Modular Architecture
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-stone-950 mb-4">
              Carefully Composed Design Systems
            </h1>
            <p className="text-stone-600 text-sm max-w-lg mx-auto mb-6">
              Synthesizing real brand craft, typography harmony, and tactile layouts into cohesive digital spaces.
            </p>
            <button className="px-6 py-2.5 rounded-full bg-stone-900 text-white text-xs font-medium hover:bg-stone-800">
              Explore Architecture
            </button>
          </div>
        </section>
      );
  }
}

/* =========================================================================
   2. TRUST BLOCKS RENDERERS
   ========================================================================= */
function renderTrustBlock(trustId: string) {
  switch (trustId) {
    case 'trust_fashionia_frosted':
      return (
        <div className="bg-[#241E1C] py-5 px-6 sm:px-12 border-b border-stone-800">
          <div className="max-w-5xl mx-auto bg-stone-900/60 backdrop-blur-md rounded-2xl border border-stone-700/60 p-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-stone-200">
            <div className="flex items-center gap-2.5">
              <Truck className="w-4 h-4 text-amber-400" />
              <div>
                <p className="text-xs font-semibold leading-tight">Free Shipping</p>
                <p className="text-[10px] text-stone-400">On Orders Above $100</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <div>
                <p className="text-xs font-semibold leading-tight">Secure Payment</p>
                <p className="text-[10px] text-stone-400">100% Safe & Encrypted</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <div>
                <p className="text-xs font-semibold leading-tight">Trendy Collections</p>
                <p className="text-[10px] text-stone-400">New Styles Weekly</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Headphones className="w-4 h-4 text-amber-400" />
              <div>
                <p className="text-xs font-semibold leading-tight">24/7 Support</p>
                <p className="text-[10px] text-stone-400">We’re Here For You</p>
              </div>
            </div>
          </div>
        </div>
      );

    case 'trust_alex_brand_logos':
      return (
        <div className="bg-white py-6 px-6 sm:px-12 border-b border-stone-100">
          <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-6 text-stone-400">
            <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500 font-semibold">
              Trusted by
            </span>
            <div className="flex flex-wrap items-center gap-8 font-sans font-bold text-sm tracking-tight text-stone-700">
              <span>frame</span>
              <span>webflow</span>
              <span>slack</span>
              <span>Notion</span>
              <span>loom</span>
            </div>
          </div>
        </div>
      );

    case 'trust_compatto_bento_stats':
      return (
        <div className="bg-[#FAF8F5] py-8 px-6 sm:px-12 border-b border-stone-200">
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#EAE3D8] rounded-xl p-5 border border-stone-300/80 flex items-center justify-between">
              <div>
                <p className="text-3xl font-serif font-bold text-stone-900">150+</p>
                <p className="text-xs text-stone-700 font-medium">Furniture Suppliers</p>
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-stone-500/30 flex items-center justify-center font-serif text-stone-700 font-bold">
                C
              </div>
            </div>
            <div className="bg-[#EAE3D8] rounded-xl p-5 border border-stone-300/80 flex items-center justify-between">
              <div>
                <p className="text-3xl font-serif font-bold text-stone-900">15+</p>
                <p className="text-xs text-stone-700 font-medium">Years Industry Experience</p>
              </div>
              <div className="text-[11px] font-mono text-stone-600 bg-white/60 px-3 py-1 rounded">
                Greece & Cyprus
              </div>
            </div>
          </div>
        </div>
      );

    case 'trust_gospel_sanctuary_video':
      return (
        <div className="bg-[#7A1C28] text-white py-6 px-6 sm:px-12 border-b border-[#631620]">
          <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                <Play className="w-4 h-4 fill-white text-white ml-0.5" />
              </div>
              <div>
                <p className="font-serif font-bold text-sm">Discover Christ And Find Peace</p>
                <p className="text-xs text-stone-200 font-light">Watch Sunday Service Broadcast</p>
              </div>
            </div>
            <button className="text-xs font-serif underline hover:text-amber-200 tracking-wider">
              Learn more →
            </button>
          </div>
        </div>
      );

    case 'trust_grace_livestream':
      return (
        <div className="bg-stone-100 py-6 px-6 sm:px-12 border-b border-stone-200">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md border border-stone-200 p-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-blue-900 text-white flex items-center justify-center font-mono text-xs font-bold">
                LIVE
              </div>
              <div>
                <p className="font-bold text-sm text-stone-900">Join the Sunday Live Stream</p>
                <p className="text-xs text-stone-500">Every Sunday at 9:00 am & 11:00 am</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 rounded-lg bg-orange-500 text-white text-xs font-bold hover:bg-orange-600">
                Join Now →
              </button>
              <button className="text-xs text-stone-600 font-medium hover:text-stone-900">
                Past Messages
              </button>
            </div>
          </div>
        </div>
      );

    default:
      // Standard Metric Bar
      return (
        <div className="bg-stone-50 py-6 px-6 sm:px-12 border-b border-stone-200">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold font-mono text-stone-900">99.8%</p>
              <p className="text-xs text-stone-500">System Reliability</p>
            </div>
            <div>
              <p className="text-2xl font-bold font-mono text-stone-900">45k+</p>
              <p className="text-xs text-stone-500">Global Users</p>
            </div>
            <div>
              <p className="text-2xl font-bold font-mono text-stone-900">4.9/5</p>
              <p className="text-xs text-stone-500">Satisfaction Score</p>
            </div>
            <div>
              <p className="text-2xl font-bold font-mono text-stone-900">24/7</p>
              <p className="text-xs text-stone-500">Priority Support</p>
            </div>
          </div>
        </div>
      );
  }
}

/* =========================================================================
   3. SHOWCASE BLOCKS RENDERERS
   ========================================================================= */
function renderShowcaseBlock(showcaseId: string) {
  switch (showcaseId) {
    case 'showcase_fashionia_categories':
      return (
        <section className="bg-white py-14 px-6 sm:px-12 border-b border-stone-200">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-mono uppercase tracking-widest text-stone-400 block mb-1">
                Shop By Category
              </span>
              <h2 className="text-3xl font-serif font-bold text-stone-900">Find Your Perfect Style</h2>
              <p className="text-xs text-stone-500 mt-1">Curated collections for every mood, moment and occasion.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                { title: 'Women', tag: 'Dresses & Tops', color: 'from-amber-100 to-amber-50' },
                { title: 'Men', tag: 'Shirts & Tailoring', color: 'from-stone-200 to-stone-100' },
                { title: 'Accessories', tag: 'Leather Handbags', color: 'from-orange-100 to-orange-50' },
                { title: 'Footwear', tag: 'Stiletto & Boots', color: 'from-rose-100 to-rose-50' },
              ].map((cat, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-stone-200 p-4 bg-stone-50/50 hover:shadow-md transition-shadow group flex flex-col justify-between h-56"
                >
                  <div className={`w-full h-32 rounded-lg bg-gradient-to-tr ${cat.color} flex items-center justify-center`}>
                    <ShoppingBag className="w-8 h-8 text-stone-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div>
                      <p className="font-serif font-bold text-sm text-stone-900">{cat.title}</p>
                      <p className="text-[10px] text-stone-500">{cat.tag}</p>
                    </div>
                    <span className="w-6 h-6 rounded-full bg-stone-200 flex items-center justify-center text-xs text-stone-700 group-hover:bg-amber-400 group-hover:text-stone-950 transition-colors">
                      →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );

    case 'showcase_verdeo_services_wave':
      return (
        <section className="bg-[#4A5D4E] text-white py-14 px-6 sm:px-12 border-b border-[#3d4d40]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-200 block mb-1">
                What We Do
              </span>
              <h2 className="text-3xl font-serif font-bold text-white">Our Services</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { title: 'Brand Design', desc: 'Thoughtful identities and visual stories that connect and inspire.' },
                { title: 'Interior Design', desc: 'Spaces that blend function, beauty and a deep sense of place.' },
                { title: 'Product Design', desc: 'Purposeful objects and collections, designed with care and intention.' },
                { title: 'Creative Direction', desc: 'Concepts and content that bring ideas to life across every touchpoint.' },
              ].map((serv, i) => (
                <div key={i} className="border-t border-emerald-400/30 pt-4">
                  <span className="text-emerald-300 font-mono text-xs block mb-1">0{i + 1}</span>
                  <h3 className="font-serif font-bold text-base text-white mb-2">{serv.title}</h3>
                  <p className="text-xs text-emerald-100 font-light leading-relaxed">{serv.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );

    case 'showcase_compatto_why_bento':
      return (
        <section className="bg-[#FAF8F5] py-14 px-6 sm:px-12 border-b border-stone-200">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                Why <span className="italic font-normal">Choose Compatto</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#EFE8DD] rounded-xl p-6 border border-stone-300/60 flex flex-col justify-between h-52">
                <div>
                  <span className="text-xs font-mono uppercase text-stone-500 block mb-1">Reliability</span>
                  <h3 className="font-serif font-bold text-lg text-stone-900">End-to-End Solutions</h3>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  We manage every aspect of your furnishing project, saving you time, stress, and resources from initial blueprint to final staging.
                </p>
              </div>

              <div className="bg-[#EFE8DD] rounded-xl p-6 border border-stone-300/60 flex flex-col justify-between h-52">
                <div>
                  <span className="text-xs font-mono uppercase text-stone-500 block mb-1">Warranty</span>
                  <h3 className="font-serif font-bold text-lg text-stone-900">After-Sales Support</h3>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Dedicated concierge support and after-sales maintenance to address any future hospitality or private residence needs.
                </p>
              </div>

              <div className="bg-[#2D2A26] text-white rounded-xl p-6 border border-stone-800 flex flex-col justify-between h-52">
                <div>
                  <span className="text-xs font-mono uppercase text-amber-300 block mb-1">Tailor-Made</span>
                  <h3 className="font-serif font-bold text-lg text-white">Bespoke Furniture</h3>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Custom-made artisanal pieces crafted by European masters that match your unique vision and architectural requirements.
                </p>
              </div>
            </div>
          </div>
        </section>
      );

    case 'showcase_alex_selected_work':
      return (
        <section className="bg-white py-14 px-6 sm:px-12 border-b border-stone-100">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-[#E25B3C] font-mono text-xs uppercase tracking-wider block font-semibold">
                  Selected Work
                </span>
                <h2 className="text-2xl sm:text-3xl font-sans font-bold text-stone-950 mt-1">
                  Designing digital experiences that make an impact.
                </h2>
              </div>
              <button className="text-xs text-stone-600 hover:text-stone-950 font-medium flex items-center gap-1">
                View all projects →
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'ROSE Skincare', tag: 'Branding', desc: 'Visual identity and packaging system for clean skincare.' },
                { title: 'Helix SaaS', tag: 'Web Design', desc: 'High-conversion marketing site and interactive demo app.' },
                { title: 'Momentum App', tag: 'UI/UX', desc: 'Habit tracking mobile app with thoughtful micro-interactions.' },
              ].map((proj, i) => (
                <div key={i} className="rounded-xl border border-stone-200 overflow-hidden bg-[#FFFDFB] group hover:shadow-md transition-shadow">
                  <div className="h-40 bg-gradient-to-tr from-rose-100 via-orange-50 to-amber-50 flex items-center justify-center p-4">
                    <span className="text-xs font-mono uppercase bg-white/80 px-2.5 py-1 rounded-full text-stone-700 shadow-sm">
                      {proj.tag}
                    </span>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-sm text-stone-900">{proj.title}</h3>
                      <span className="text-xs text-stone-400 group-hover:text-[#E25B3C] transition-colors">↗</span>
                    </div>
                    <p className="text-xs text-stone-500 mt-1">{proj.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );

    default:
      // Generic clean feature cards
      return (
        <section className="bg-white py-14 px-6 sm:px-12 border-b border-stone-200">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-serif font-bold text-stone-900">Engineered for Excellence</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['Intuitive Architecture', 'Uncompromising Quality', 'Enduring Reliability'].map((title, i) => (
                <div key={i} className="p-6 rounded-xl border border-stone-200 bg-stone-50/50">
                  <div className="w-8 h-8 rounded-lg bg-stone-900 text-white flex items-center justify-center text-xs font-bold mb-3">
                    0{i + 1}
                  </div>
                  <h3 className="font-serif font-bold text-base text-stone-900 mb-1">{title}</h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Designed to withstand heavy demands with elegant simplicity and performance.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
  }
}

/* =========================================================================
   4. NARRATIVE BLOCKS RENDERERS
   ========================================================================= */
function renderNarrativeBlock(narrativeId: string) {
  switch (narrativeId) {
    case 'narrative_verdeo_timeline':
      return (
        <section className="bg-[#FAF8F5] py-14 px-6 sm:px-12 border-b border-stone-200">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10">
              <span className="text-xs font-mono uppercase tracking-widest text-stone-500 block mb-1">
                How We Work
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">A thoughtful process.</h2>
              <p className="text-xs text-stone-600 mt-1 max-w-md">
                We guide each project with intention and clarity from the first idea to the final details.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 relative">
              {[
                { num: '01', title: 'DISCOVER', desc: 'Listen, learn and understand your vision.' },
                { num: '02', title: 'DEFINE', desc: 'Shape the concept and creative direction.' },
                { num: '03', title: 'DESIGN', desc: 'Craft with care, refining every detail.' },
                { num: '04', title: 'DEVELOP', desc: 'Bring ideas to life with precision.' },
                { num: '05', title: 'DELIVER', desc: 'Launch with thoughtfulness and support.' },
              ].map((step, i) => (
                <div key={i} className="bg-white rounded-xl p-4 border border-stone-200 shadow-sm text-center">
                  <div className="w-8 h-8 mx-auto rounded-full bg-[#4A5D4E] text-white flex items-center justify-center font-mono text-xs font-bold mb-2">
                    {step.num}
                  </div>
                  <h3 className="font-serif font-bold text-xs text-stone-900 mb-1">{step.title}</h3>
                  <p className="text-[11px] text-stone-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );

    case 'narrative_devialet_manifesto':
      return (
        <section className="bg-white py-14 px-6 sm:px-12 border-b border-stone-200">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="font-mono text-xs uppercase tracking-widest text-stone-400 block mb-1">About Us</span>
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight text-stone-950">
                Sound in its purest state.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-stone-600 leading-relaxed">
              <p>
                Devialet is a French audio technology company renowned for delivering unmatched acoustic purity through innovative engineering like the Phantom speaker. Founded in Paris, we blend acoustic excellence with avant-garde design.
              </p>
              <p>
                Renowned for our luxurious audio products, we hold over 200 patents in amplification and signal processing, earning international awards for pure fidelity without distortion, saturation or background noise.
              </p>
            </div>
          </div>
        </section>
      );

    case 'narrative_gospel_events':
      return (
        <section className="bg-[#FBF9F5] py-14 px-6 sm:px-12 border-b border-stone-200">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <span className="font-serif italic text-xs text-stone-400 block mb-1">Coming Soon</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">Upcoming Events</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { title: 'Suicide Loss Support Group', date: 'November 4, 2026', loc: 'Worship Center' },
                { title: 'Rise and Shine Stretch', date: 'November 19, 2026', loc: 'Virtual & Pavilion' },
                { title: 'Community Gatherings', date: 'December 10, 2026', loc: 'Town Square Plaza' },
              ].map((ev, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-stone-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase bg-[#7A1C28]/10 text-[#7A1C28] px-2 py-0.5 rounded font-semibold">
                      {ev.date}
                    </span>
                    <h3 className="font-serif font-bold text-base text-stone-900 mt-2 mb-1">{ev.title}</h3>
                    <p className="text-xs text-stone-500 font-light">Location: {ev.loc}</p>
                  </div>
                  <button className="text-xs font-serif text-[#7A1C28] mt-4 font-semibold hover:underline flex items-center gap-1">
                    Register →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      );

    default:
      // Standard FAQ Accordion
      return (
        <section className="bg-stone-50 py-14 px-6 sm:px-12 border-b border-stone-200">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-serif font-bold text-stone-900">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-3">
              {[
                { q: 'How does the modular architecture ensure performance?', a: 'All components adhere to lightweight DOM guidelines with [L] and [M] cost ceilings.' },
                { q: 'Can each component be independently styled?', a: 'Yes, styles inherit theme variables while preserving distinct proportional typography.' },
                { q: 'Are these designs responsive across mobile viewports?', a: 'Every layout has been verified for both 1440px desktop and 390px mobile screens.' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-lg border border-stone-200 p-4">
                  <p className="font-semibold text-xs text-stone-900">{item.q}</p>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
  }
}

/* =========================================================================
   5. FOOTER BLOCKS RENDERERS
   ========================================================================= */
function renderFooterBlock(footerId: string) {
  switch (footerId) {
    case 'footer_verdeo_terracotta':
      return (
        <footer className="bg-[#B8502F] text-white py-12 px-6 sm:px-12">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5">
              <h2 className="text-3xl font-serif font-bold leading-tight mb-2">
                Let’s create something <br />
                <span className="italic font-normal">beautiful together.</span>
              </h2>
              <p className="text-xs text-rose-100 font-light leading-relaxed">
                Have a project in mind? We’d love to hear about it and explore how we can bring your vision to life.
              </p>
            </div>

            <div className="md:col-span-7 bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-white/20 border border-white/30 rounded-lg px-3 py-2 text-xs text-white placeholder-rose-200 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-white/20 border border-white/30 rounded-lg px-3 py-2 text-xs text-white placeholder-rose-200 focus:outline-none"
                />
              </div>
              <textarea
                rows={2}
                placeholder="Tell us about your project"
                className="w-full bg-white/20 border border-white/30 rounded-lg px-3 py-2 text-xs text-white placeholder-rose-200 focus:outline-none mb-3"
              />
              <button className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-white text-[#B8502F] font-semibold text-xs hover:bg-rose-50 shadow-md">
                Send Message ↗
              </button>
            </div>
          </div>
          <div className="max-w-5xl mx-auto mt-8 pt-6 border-t border-white/20 flex flex-wrap items-center justify-between text-[11px] text-rose-200">
            <span>© 2026 Verdeo Atelier. All rights reserved.</span>
            <span>Made with intention & purpose.</span>
          </div>
        </footer>
      );

    case 'footer_alex_safari':
      return (
        <footer className="bg-[#FFF8F5] text-stone-900 py-10 px-6 sm:px-12 border-t border-rose-100">
          <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="text-xl font-bold font-sans text-stone-950">Let’s create something amazing together.</h2>
              <p className="text-xs text-stone-500 mt-1">Available for freelance and collaborative projects worldwide.</p>
            </div>
            <div className="flex items-center gap-4 text-xs font-medium text-stone-700">
              <span className="hover:text-[#E25B3C] cursor-pointer">hello@alexmorgan.design</span>
              <span className="text-stone-300">•</span>
              <span className="hover:text-[#E25B3C] cursor-pointer">+1 (647) 555-0198</span>
            </div>
          </div>
        </footer>
      );

    case 'footer_fashionia_atelier':
      return (
        <footer className="bg-[#171717] text-white py-12 px-6 sm:px-12 border-t border-stone-800">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-xs text-stone-400">
            <div>
              <p className="font-serif font-bold text-white text-sm mb-2">PARIS ATELIER</p>
              <p>Rue Saint-Honoré, 75001</p>
              <p className="text-[10px] text-stone-500 mt-1">Tue - Sat: 10:00 - 19:00</p>
            </div>
            <div>
              <p className="font-serif font-bold text-white text-sm mb-2">MILANO SHOWROOM</p>
              <p>Via Monte Napoleone, 8</p>
              <p className="text-[10px] text-stone-500 mt-1">Mon - Sat: 10:00 - 19:30</p>
            </div>
            <div>
              <p className="font-serif font-bold text-white text-sm mb-2">LONDON STUDIO</p>
              <p>New Bond Street, Mayfair</p>
              <p className="text-[10px] text-stone-500 mt-1">Mon - Sat: 10:00 - 18:30</p>
            </div>
            <div>
              <p className="font-serif font-bold text-white text-sm mb-2">TOKYO FLAGSHIP</p>
              <p>Ginza 6-Chome, Chuo-Ku</p>
              <p className="text-[10px] text-stone-500 mt-1">Daily: 11:00 - 20:00</p>
            </div>
          </div>
          <div className="max-w-5xl mx-auto mt-8 pt-6 border-t border-stone-800 text-center text-[10px] text-stone-500 font-mono">
            © 2026 FASHIONIA LUXURY ATELIER • ALL RIGHTS RESERVED
          </div>
        </footer>
      );

    default:
      // Standard 4-Column SaaS Mega Footer
      return (
        <footer className="bg-stone-900 text-stone-400 py-10 px-6 sm:px-12 border-t border-stone-800">
          <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs">
            <span className="font-serif text-white font-bold text-sm">Design Intelligence Studio</span>
            <div className="flex items-center gap-6">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>System Status</span>
              <span>Support</span>
            </div>
            <span>© 2026. All rights reserved.</span>
          </div>
        </footer>
      );
  }
}

/* =========================================================================
   6. BASELINE SAMPLE VIEW (Retained from previous 1,000)
   ========================================================================= */
function RenderBaselineSample() {
  return (
    <div className="bg-white text-stone-900">
      {/* Top Notice Ribbon */}
      <div className="bg-amber-50 border-b border-amber-200 px-4 py-2 text-center text-xs text-amber-900 font-medium">
        ⭐ Baseline Sample #1 (Retained from the previous 1,000 procedural templates for direct comparison)
      </div>

      {/* Classic Centered Hero */}
      <header className="py-16 px-6 text-center border-b border-stone-200 max-w-4xl mx-auto">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-100 text-blue-800 mb-3">
          Software & Technology • B2B SaaS
        </span>
        <h1 className="text-4xl sm:text-5xl font-sans font-bold tracking-tight text-stone-900 mb-4">
          Accelerate Your Enterprise Workflow
        </h1>
        <p className="text-stone-600 text-base max-w-lg mx-auto mb-8 leading-relaxed">
          The procedural baseline template illustrating clean symmetry, high contrast, and standard SaaS component hierarchy.
        </p>
        <div className="flex items-center justify-center gap-3">
          <button className="px-6 py-2.5 rounded-lg bg-blue-600 text-white font-medium text-xs hover:bg-blue-700 shadow-sm">
            Start Free Trial
          </button>
          <button className="px-6 py-2.5 rounded-lg border border-stone-300 text-stone-700 font-medium text-xs hover:bg-stone-50">
            Book Live Demo
          </button>
        </div>
      </header>

      {/* 4-Metric Bar */}
      <div className="py-6 border-b border-stone-200 bg-stone-50">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold font-mono text-stone-900">99.8%</p>
            <p className="text-xs text-stone-500">Service Uptime</p>
          </div>
          <div>
            <p className="text-2xl font-bold font-mono text-stone-900">45k+</p>
            <p className="text-xs text-stone-500">Active Companies</p>
          </div>
          <div>
            <p className="text-2xl font-bold font-mono text-stone-900">4.9/5</p>
            <p className="text-xs text-stone-500">G2 Customer Rating</p>
          </div>
          <div>
            <p className="text-2xl font-bold font-mono text-stone-900">&lt;5 min</p>
            <p className="text-xs text-stone-500">Average Support SLA</p>
          </div>
        </div>
      </div>

      {/* 3 Feature Cards */}
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-stone-900">Core Capabilities</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-5 rounded-xl border border-stone-200 bg-white shadow-sm">
            <div className="w-8 h-8 rounded bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs mb-3">
              01
            </div>
            <h3 className="font-bold text-sm text-stone-900 mb-1">Instant Provisioning</h3>
            <p className="text-xs text-stone-500 leading-relaxed">
              Automated environment setup with pre-configured schemas and instant zero-downtime rollouts.
            </p>
          </div>
          <div className="p-5 rounded-xl border border-stone-200 bg-white shadow-sm">
            <div className="w-8 h-8 rounded bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs mb-3">
              02
            </div>
            <h3 className="font-bold text-sm text-stone-900 mb-1">Enterprise Security</h3>
            <p className="text-xs text-stone-500 leading-relaxed">
              End-to-end encryption, SOC2 certified controls, and automated compliance auditing out of the box.
            </p>
          </div>
          <div className="p-5 rounded-xl border border-stone-200 bg-white shadow-sm">
            <div className="w-8 h-8 rounded bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs mb-3">
              03
            </div>
            <h3 className="font-bold text-sm text-stone-900 mb-1">Collaborative Canvases</h3>
            <p className="text-xs text-stone-500 leading-relaxed">
              Real-time multiplayer editing with granular permission rings and audit logging across teams.
            </p>
          </div>
        </div>
      </section>

      {/* Standard Mega Footer */}
      <footer className="bg-stone-900 text-stone-400 py-8 px-6 text-xs text-center border-t border-stone-800">
        <p>© 2026 Procedural Baseline Sample • Retained #1 of 1000</p>
      </footer>
    </div>
  );
}
