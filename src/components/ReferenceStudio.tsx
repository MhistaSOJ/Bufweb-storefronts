/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ReferenceAnalysis, TemplateSpec } from '../types';
import { SAMPLE_REFERENCES } from '../data/sampleReferences';
import { analyzeReferenceImage, matchTemplatesForReference } from '../engine/referenceAnalyzer';
import { TemplateCard } from './TemplateCard';
import { DESIGN_LIBRARY_BY_ID } from '../data/designLibrary300';
import {
  Sparkles,
  Upload,
  Palette,
  Layout,
  Type,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Image as ImageIcon,
} from 'lucide-react';

interface ReferenceStudioProps {
  catalogue: TemplateSpec[];
  onSelectPreview: (template: TemplateSpec) => void;
  onSelectCustomize: (template: TemplateSpec) => void;
}

export const ReferenceStudio: React.FC<ReferenceStudioProps> = ({
  catalogue,
  onSelectPreview,
  onSelectCustomize,
}) => {
  const [selectedAnalysis, setSelectedAnalysis] = useState<ReferenceAnalysis>(SAMPLE_REFERENCES[0]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Compute matched templates for the currently selected reference analysis
  const matchedTemplates = matchTemplatesForReference(catalogue, selectedAnalysis);

  const handleSelectSample = (sample: ReferenceAnalysis) => {
    setSelectedAnalysis(sample);
  };

  const handleCustomUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setIsAnalyzing(true);
      try {
        const result = await analyzeReferenceImage(file, file.name.replace(/\.[^/.]+$/, ''));
        setSelectedAnalysis(result);
      } finally {
        setIsAnalyzing(false);
      }
    }
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-stone-900 to-stone-850 rounded-2xl p-6 text-white border border-stone-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Reference-Driven Website Generation</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight">
            Reference Studio & Intelligence Analyzer
          </h1>
          <p className="text-stone-300 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
            Upload any website screenshot, mobile mockup, or brand document — or select from the 18 provided real inspirations below.
            The engine analyzes layout hierarchy, palette, and typography, and binds the appropriate rules from the 300 library.
          </p>
        </div>

        <label className="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-lg text-xs cursor-pointer inline-flex items-center gap-2 shadow-sm transition-colors shrink-0">
          <Upload className="w-4 h-4" />
          <span>{isAnalyzing ? 'Analyzing Image...' : 'Upload Reference Screenshot'}</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleCustomUpload}
            className="hidden"
          />
        </label>
      </div>

      {/* Reference Inspirations Carousel / Grid */}
      <div className="bg-white rounded-xl border border-stone-200 p-5 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-serif font-bold text-stone-900 text-sm">
            Curated Reference Inspirations (From Your Project)
          </h2>
          <span className="text-xs text-stone-500 font-mono">
            {SAMPLE_REFERENCES.length} Real References
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {SAMPLE_REFERENCES.map((ref) => {
            const isSelected = selectedAnalysis.id === ref.id;

            return (
              <button
                key={ref.id}
                onClick={() => handleSelectSample(ref)}
                className={`p-2 rounded-xl border text-left transition-all flex flex-col group ${
                  isSelected
                    ? 'border-amber-600 ring-2 ring-amber-500/20 bg-amber-50/50 shadow-sm'
                    : 'border-stone-200 hover:border-stone-400 bg-stone-50/50'
                }`}
              >
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-stone-100 mb-2 border border-stone-200">
                  <img
                    src={ref.imageUrl}
                    alt={ref.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {isSelected && (
                    <div className="absolute top-1.5 right-1.5 bg-amber-600 text-white p-1 rounded-full shadow-sm">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>

                <div className="text-xs font-serif font-bold text-stone-900 line-clamp-1">
                  {ref.title.split('(')[0]}
                </div>
                <div className="text-[10px] text-stone-500 line-clamp-1 mt-0.5">
                  {ref.title.includes('(') ? ref.title.split('(')[1].replace(')', '') : ref.dominantArchetype}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Reference Analysis Card */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* Reference Image Large Preview */}
          <div className="w-full md:w-64 shrink-0 rounded-xl overflow-hidden border border-stone-200 shadow-sm bg-stone-100">
            <img
              src={selectedAnalysis.imageUrl}
              alt={selectedAnalysis.title}
              className="w-full max-h-80 object-cover"
            />
          </div>

          {/* Extracted Intelligence Details */}
          <div className="flex-1 space-y-4">
            <div>
              <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                Design Intelligence Breakdown
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                {selectedAnalysis.title}
              </h2>
              <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                {selectedAnalysis.notes}
              </p>
            </div>

            {/* Extracted Palette */}
            <div>
              <span className="text-xs font-semibold text-stone-900 block mb-2 flex items-center gap-1.5">
                <Palette className="w-3.5 h-3.5 text-amber-600" />
                <span>Extracted 60-30-10 Palette</span>
              </span>
              <div className="flex items-center gap-2">
                {Object.entries(selectedAnalysis.extractedColors).map(([role, hex]) => (
                  <div key={role} className="text-center">
                    <div
                      style={{ backgroundColor: hex }}
                      className="w-12 h-10 rounded-lg border border-stone-300 shadow-xs mb-1"
                    />
                    <span className="text-[10px] font-mono uppercase text-stone-500 block">
                      {role}
                    </span>
                    <span className="text-[10px] font-mono text-stone-800 font-medium block">
                      {hex}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dominant Archetype & Typography */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="bg-stone-50 p-3 rounded-lg border border-stone-200">
                <span className="text-[10px] font-mono uppercase text-stone-500 block">
                  Detected Layout Archetype
                </span>
                <span className="text-xs font-bold text-stone-900 capitalize mt-0.5 block">
                  {selectedAnalysis.dominantArchetype.replace(/-/g, ' ')}
                </span>
              </div>

              <div className="bg-stone-50 p-3 rounded-lg border border-stone-200">
                <span className="text-[10px] font-mono uppercase text-stone-500 block">
                  Recommended Typography
                </span>
                <span className="text-xs font-bold text-stone-900 capitalize mt-0.5 block">
                  {selectedAnalysis.recommendedTypography.replace(/-/g, ' ')}
                </span>
              </div>
            </div>

            {/* Matched 300 Design Rules */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-stone-900 block mb-1.5 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                <span>Active 300 Design Rules Detected in Reference:</span>
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedAnalysis.matchedRuleIds.map((id) => {
                  const rule = DESIGN_LIBRARY_BY_ID.get(id);
                  if (!rule) return null;
                  return (
                    <span
                      key={id}
                      className="text-[11px] bg-stone-100 text-stone-800 border border-stone-200 px-2 py-0.5 rounded font-medium"
                      title={rule.description}
                    >
                      #{rule.id} {rule.name}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Matching Templates */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-serif font-bold text-stone-900 text-lg">
              Matched Templates from Catalogue
            </h2>
            <p className="text-xs text-stone-500">
              Templates sharing compatible composition, typography, and visual rules:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {matchedTemplates.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
              onPreview={onSelectPreview}
              onCustomize={onSelectCustomize}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
