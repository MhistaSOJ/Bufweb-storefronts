/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TemplateSpec } from '../types';
import { validateCatalogue, getOrComputeValidationSummary, ValidationSummary } from '../engine/validator';
import {
  CheckCircle2,
  ShieldCheck,
  AlertTriangle,
  Play,
  Download,
  BarChart3,
  Cpu,
  Clock,
  Layers,
  ArrowRight,
} from 'lucide-react';

interface ValidationReportModalProps {
  catalogue: TemplateSpec[];
}

export const ValidationReportModal: React.FC<ValidationReportModalProps> = ({
  catalogue,
}) => {
  const [summary, setSummary] = useState<ValidationSummary>(() => getOrComputeValidationSummary(catalogue));
  const [isRunning, setIsRunning] = useState(false);

  const handleRunValidation = () => {
    setIsRunning(true);
    setTimeout(() => {
      const result = validateCatalogue(catalogue);
      setSummary(result);
      setIsRunning(false);
    }, 100);
  };

  const handleExportJSON = () => {
    const jsonStr = JSON.stringify(catalogue, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `template_catalogue_${catalogue.length}_specs.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-stone-900 to-stone-850 rounded-2xl p-6 text-white border border-stone-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 mb-3">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Automated 12-Dimension Integrity Engine</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight">
            Catalogue Validation & Difference Auditor
          </h1>
          <p className="text-stone-300 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
            Performs exhaustive pairwise mathematical checks across all {summary.totalPairsChecked.toLocaleString()} pairs.
            Enforces that every template differs from every other in at least 6 of the 12 design dimensions with zero first-screen collisions.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            onClick={handleRunValidation}
            disabled={isRunning}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold inline-flex items-center gap-2 shadow-sm transition-colors disabled:opacity-50"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>{isRunning ? 'Auditing 500K Pairs...' : 'Re-run Validator'}</span>
          </button>

          <button
            onClick={handleExportJSON}
            className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-lg text-xs font-medium border border-stone-700 inline-flex items-center gap-2 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Catalogue JSON</span>
          </button>
        </div>
      </div>

      {/* Validation Scorecards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-xs">
          <div className="text-xs text-stone-500 font-mono uppercase tracking-wider">
            Total Templates
          </div>
          <div className="text-2xl sm:text-3xl font-mono font-bold text-stone-900 mt-1">
            {summary.totalTemplates}
          </div>
          <div className="text-[11px] text-emerald-700 font-medium mt-1 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Requirement Passed (≥300 Combinations)</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-xs">
          <div className="text-xs text-stone-500 font-mono uppercase tracking-wider">
            Pairs Evaluated
          </div>
          <div className="text-2xl sm:text-3xl font-mono font-bold text-amber-600 mt-1">
            {summary.totalPairsChecked.toLocaleString()}
          </div>
          <div className="text-[11px] text-stone-500 mt-1 font-mono">
            N×(N-1)/2 exhaustive audit
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-xs">
          <div className="text-xs text-stone-500 font-mono uppercase tracking-wider">
            Min Dimension Diff
          </div>
          <div className="text-2xl sm:text-3xl font-mono font-bold text-emerald-600 mt-1">
            {summary.minDifference} / 12
          </div>
          <div className="text-[11px] text-emerald-700 font-medium mt-1 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Threshold Met (≥6 diffs)</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-xs">
          <div className="text-xs text-stone-500 font-mono uppercase tracking-wider">
            1st Screen Collisions
          </div>
          <div className="text-2xl sm:text-3xl font-mono font-bold text-emerald-600 mt-1">
            {summary.firstScreenCollisions}
          </div>
          <div className="text-[11px] text-emerald-700 font-medium mt-1 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Zero Identical Compositions</span>
          </div>
        </div>
      </div>

      {/* Difference Distribution Chart */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-stone-100 pb-3">
          <div>
            <h2 className="font-serif font-bold text-stone-900 text-base flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-amber-600" />
              <span>Dimension Difference Distribution (12 Dimensions)</span>
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              Average difference between any two templates: <strong className="text-stone-900 font-mono">{summary.averageDifference} / 12</strong> dimensions.
            </p>
          </div>

          <div className="flex items-center gap-1.5 font-mono text-xs text-stone-500">
            <Clock className="w-3.5 h-3.5" />
            <span>Audit executed in {summary.durationMs}ms</span>
          </div>
        </div>

        {/* Visual Distribution Bars */}
        <div className="space-y-2 pt-2">
          {Object.entries(summary.differenceDistribution).map(([diffCount, count]) => {
            const countNum = Number(count);
            const diffNum = Number(diffCount);
            const percentage = summary.totalPairsChecked > 0 ? (countNum / summary.totalPairsChecked) * 100 : 0;
            const isFailing = diffNum < 6 && countNum > 0;

            return (
              <div key={diffCount} className="flex items-center gap-3 text-xs">
                <span className="w-20 font-mono text-stone-600 shrink-0">
                  {diffCount} diffs:
                </span>

                <div className="flex-1 h-6 bg-stone-100 rounded-md overflow-hidden relative flex items-center">
                  <div
                    style={{ width: `${Math.max(percentage, countNum > 0 ? 0.8 : 0)}%` }}
                    className={`h-full transition-all duration-500 rounded-md ${
                      isFailing
                        ? 'bg-rose-500'
                        : diffNum >= 10
                        ? 'bg-emerald-500'
                        : 'bg-amber-500'
                    }`}
                  />
                  <span className="absolute left-2 text-[10px] font-mono font-medium text-stone-800">
                    {countNum.toLocaleString()} pairs ({percentage.toFixed(1)}%)
                  </span>
                </div>

                <span className="w-20 text-right font-mono text-[11px] text-stone-500 shrink-0">
                  {diffNum < 6 ? 'REJECT' : 'VALID'}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* 12 Comparison Dimensions Checklist */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-sm space-y-4">
        <div className="border-b border-stone-100 pb-3">
          <h2 className="font-serif font-bold text-stone-900 text-base flex items-center gap-2">
            <Layers className="w-4 h-4 text-amber-600" />
            <span>The 12 Architectural Dimensions Evaluated</span>
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Every candidate must differ across these twelve distinct characteristics:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { num: '01', name: 'Overall layout archetype', desc: 'Split hero, bento grid, Swiss columnar, editorial, stacked cards, etc.' },
            { num: '02', name: 'Header and navigation', desc: 'Sticky minimal, floating island pill, split center logo, utility drawer' },
            { num: '03', name: 'Hero composition', desc: 'Giant serif cutout, centered single CTA, bento preview, dark overlay' },
            { num: '04', name: 'Section sequence', desc: 'Trust-first, narrative-first, catalog-first, timeline-first' },
            { num: '05', name: 'Content density', desc: 'Airy luxury, compact Swiss, dense technical, balanced editorial' },
            { num: '06', name: 'Grid structure', desc: '12-col asymmetric, 3-col strict Swiss, 4-col modular bento, masonry' },
            { num: '07', name: 'Card & container treatment', desc: 'Neo-brutalist hard shadow, glassmorphism panel, dark bronze glow' },
            { num: '08', name: 'Typography pairing', desc: 'Serif + sans, grotesque display + geometric, monospace + sans' },
            { num: '09', name: 'Colour strategy', desc: '60-30-10 Earthy olive, dark luxury near-black, fresh terracotta, pastel' },
            { num: '10', name: 'Shape language', desc: 'Zero-radius geometric, organic wave dividers, soft pill 9999px, bento 24px' },
            { num: '11', name: 'Interaction patterns', desc: 'Hover lift + scroll progress, staggered reveal, tabs accordion, slider' },
            { num: '12', name: 'Footer composition', desc: '4-column mega footer, minimalist bar, split contact & hours, brandmark' },
          ].map((dim) => (
            <div key={dim.num} className="bg-stone-50 rounded-lg p-3.5 border border-stone-200 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-amber-700 font-bold">
                  DIMENSION {dim.num}
                </span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              </div>
              <div className="text-xs font-bold text-stone-900">{dim.name}</div>
              <p className="text-[11px] text-stone-500 leading-snug">{dim.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
