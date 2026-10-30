/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TemplateSpec } from '../types';
import { CombinationTemplateSpec } from '../engine/combinationsEngine';
import { Eye, Sliders, Sparkles, Layers, ShieldCheck, Star } from 'lucide-react';

interface TemplateCardProps {
  template: TemplateSpec;
  onPreview: (template: TemplateSpec) => void;
  onCustomize: (template: TemplateSpec) => void;
}

export const TemplateCard: React.FC<TemplateCardProps> = ({
  template,
  onPreview,
  onCustomize,
}) => {
  const isBaseline = template.id === 'sample_tpl_0001';
  const isModular = 'isModularCombination' in template && (template as CombinationTemplateSpec).isModularCombination;
  const modularTemplate = isModular ? (template as CombinationTemplateSpec) : null;
  const recipe = modularTemplate?.recipe;

  const getPerfBadge = () => {
    switch (template.performanceClass) {
      case 'L':
        return { label: '[L] Light', color: 'bg-emerald-100 text-emerald-800 border-emerald-200' };
      case 'M':
        return { label: '[M] Medium', color: 'bg-amber-100 text-amber-800 border-amber-200' };
      case 'H':
        return { label: '[H] Heavy', color: 'bg-rose-100 text-rose-800 border-rose-200' };
    }
  };

  const perf = getPerfBadge();

  // Get color accents
  const getCardHeaderStyle = () => {
    if (isBaseline) {
      return {
        bg: 'bg-gradient-to-br from-blue-900 to-indigo-950 text-white',
        border: 'border-blue-700',
        accent: 'bg-blue-500',
      };
    }
    if (recipe?.heroId.includes('fashionia')) {
      return { bg: 'bg-[#2A2320] text-stone-100', border: 'border-stone-800', accent: 'bg-amber-400' };
    }
    if (recipe?.heroId.includes('verdeo')) {
      return { bg: 'bg-[#FAF8F5] text-stone-900', border: 'border-stone-300', accent: 'bg-[#4A5D4E]' };
    }
    if (recipe?.heroId.includes('devialet')) {
      return { bg: 'bg-white text-stone-950', border: 'border-stone-300', accent: 'bg-black' };
    }
    if (recipe?.heroId.includes('compatto')) {
      return { bg: 'bg-[#2D2A26] text-white', border: 'border-stone-700', accent: 'bg-amber-400' };
    }
    if (recipe?.heroId.includes('alex')) {
      return { bg: 'bg-[#FFF5F0] text-stone-900', border: 'border-rose-200', accent: 'bg-[#E25B3C]' };
    }
    if (recipe?.heroId.includes('gospel')) {
      return { bg: 'bg-[#7A1C28] text-white', border: 'border-[#942736]', accent: 'bg-amber-400' };
    }
    if (recipe?.heroId.includes('grace')) {
      return { bg: 'bg-[#0B1528] text-white', border: 'border-blue-900', accent: 'bg-orange-500' };
    }
    return { bg: 'bg-stone-50 text-stone-900', border: 'border-stone-200', accent: 'bg-amber-600' };
  };

  const headerStyle = getCardHeaderStyle();

  return (
    <div className={`rounded-xl border shadow-sm hover:shadow-md transition-all flex flex-col overflow-hidden group bg-white ${
      isBaseline ? 'border-amber-400 ring-2 ring-amber-300/40' : 'border-stone-200 hover:border-stone-400'
    }`}>
      {/* Visual Header / Micro Preview */}
      <div className={`p-4 ${headerStyle.bg} border-b ${headerStyle.border} relative h-36 flex flex-col justify-between overflow-hidden`}>
        {/* Top Badges */}
        <div className="flex items-center justify-between z-10">
          <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-black/40 text-white backdrop-blur-sm">
            {isBaseline ? '⭐ Baseline Sample' : template.id}
          </span>
          <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded border ${perf.color}`}>
            {perf.label}
          </span>
        </div>

        {/* Micro Visual Layout Graphic */}
        <div className="my-auto z-10">
          {isBaseline ? (
            <div className="text-center py-1">
              <span className="text-[10px] uppercase tracking-wider text-blue-200 font-mono block">Previous 1,000 Set</span>
              <p className="font-bold text-xs text-white">Representative Procedural Template</p>
            </div>
          ) : recipe ? (
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-[10px] opacity-90 truncate">
                <span className="font-mono text-amber-300 font-bold">Hero:</span>
                <span className="truncate">{recipe.hero.sourceName} ({recipe.hero.aesthetic.split('&')[0]})</span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] opacity-80 truncate">
                <span className="font-mono text-emerald-300 font-bold">Grid:</span>
                <span className="truncate">{recipe.showcase.sourceName}</span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] opacity-70 truncate">
                <span className="font-mono text-sky-300 font-bold">Story:</span>
                <span className="truncate">{recipe.narrative.sourceName}</span>
              </div>
            </div>
          ) : (
            <div className="h-6 w-3/4 bg-white/20 rounded" />
          )}
        </div>

        {/* Bottom micro metadata */}
        <div className="flex items-center justify-between text-[10px] opacity-75 z-10">
          <span className="truncate max-w-[180px]">{template.purpose}</span>
          <span>{template.activeRuleIds.length} Rules</span>
        </div>
      </div>

      {/* Body Information */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <div className="flex items-center gap-1.5 mb-1">
            <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 truncate">
              {template.industry}
            </span>
          </div>

          <h3 className="font-serif font-bold text-stone-900 text-sm leading-snug group-hover:text-amber-800 transition-colors line-clamp-1">
            {template.name}
          </h3>

          <p className="text-xs text-stone-600 line-clamp-2 mt-1 leading-relaxed">
            {template.description}
          </p>

          {/* Modular Recipe Sources Bar */}
          {isModular && modularTemplate && (
            <div className="mt-2.5 pt-2 border-t border-stone-100 flex flex-wrap gap-1">
              {modularTemplate.sourcesUsed.map((src, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 text-[10px] font-mono bg-stone-100 text-stone-700 px-1.5 py-0.5 rounded border border-stone-200"
                >
                  <Sparkles className="w-2.5 h-2.5 text-amber-600" />
                  {src}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="pt-2 border-t border-stone-100 flex items-center gap-2">
          <button
            onClick={() => onPreview(template)}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-stone-900 text-white hover:bg-stone-800 text-xs font-semibold shadow-sm transition-all"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Preview</span>
          </button>
          <button
            onClick={() => onCustomize(template)}
            className="inline-flex items-center justify-center gap-1.5 p-2 rounded-lg border border-stone-300 text-stone-700 hover:bg-stone-50 hover:text-stone-950 text-xs font-medium transition-colors"
            title="Customize slots and palette"
          >
            <Sliders className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
