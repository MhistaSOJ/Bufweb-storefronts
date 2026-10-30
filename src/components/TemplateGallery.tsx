/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { TemplateSpec } from '../types';
import { CombinationTemplateSpec } from '../engine/combinationsEngine';
import { TemplateCard } from './TemplateCard';
import { searchTemplates } from '../engine/validator';
import {
  Search,
  Filter,
  Sparkles,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CheckCircle,
  X,
  Zap,
  Layers,
  Star,
} from 'lucide-react';

interface TemplateGalleryProps {
  catalogue: TemplateSpec[];
  onSelectPreview: (template: TemplateSpec) => void;
  onSelectCustomize: (template: TemplateSpec) => void;
}

const REPLICATED_SOURCE_FILTERS = [
  'All Sources',
  'Fashionia',
  'Verdeo Atelier',
  'Devialet',
  'Compatto Living',
  'Alex Morgan',
  'Gospel Sanctuary',
  'Grace Church',
  'Baseline Sample',
];

const PURPOSES = [
  'All Purposes',
  'Commerce',
  'Portfolio',
  'Booking & Services',
  'Community & Cause',
  'Lead Generation',
  'Brand Showcase',
];

export const TemplateGallery: React.FC<TemplateGalleryProps> = ({
  catalogue,
  onSelectPreview,
  onSelectCustomize,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSource, setSelectedSource] = useState('All Sources');
  const [selectedPurpose, setSelectedPurpose] = useState('All Purposes');
  const [selectedPerf, setSelectedPerf] = useState<'all' | 'L' | 'M' | 'H'>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 24;

  // Filtered and searched templates
  const filteredTemplates = useMemo(() => {
    let result = catalogue;

    // Source filter (replicated piece)
    if (selectedSource !== 'All Sources') {
      if (selectedSource === 'Baseline Sample') {
        result = result.filter((t) => t.id === 'sample_tpl_0001');
      } else {
        result = result.filter((t) => {
          const mod = t as CombinationTemplateSpec;
          return mod.sourcesUsed && mod.sourcesUsed.some((s) => s.toLowerCase().includes(selectedSource.toLowerCase()));
        });
      }
    }

    // Purpose filter
    if (selectedPurpose !== 'All Purposes') {
      result = result.filter((t) => t.purpose === selectedPurpose);
    }

    // Performance class filter
    if (selectedPerf !== 'all') {
      result = result.filter((t) => t.performanceClass === selectedPerf);
    }

    // Search query
    if (searchQuery.trim()) {
      result = searchTemplates(result, searchQuery);
    }

    return result;
  }, [catalogue, searchQuery, selectedSource, selectedPurpose, selectedPerf]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredTemplates.length / pageSize) || 1;
  const paginatedTemplates = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredTemplates.slice(start, start + pageSize);
  }, [filteredTemplates, currentPage, pageSize]);

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedSource('All Sources');
    setSelectedPurpose('All Purposes');
    setSelectedPerf('all');
    setCurrentPage(1);
  };

  const hasActiveFilters =
    searchQuery !== '' ||
    selectedSource !== 'All Sources' ||
    selectedPurpose !== 'All Purposes' ||
    selectedPerf !== 'all';

  return (
    <div className="space-y-6">
      {/* Top Banner & Quick Metrics */}
      <div className="bg-gradient-to-r from-stone-900 via-stone-850 to-stone-900 rounded-2xl p-6 text-white border border-stone-800 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Modular Composition Engine</span>
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-stone-100">
              300 Distinct Modular Combinations
            </h1>
            <p className="text-stone-300 text-sm mt-1.5 leading-relaxed">
              Synthesized from authentic building blocks extracted from the 11 line-for-line image replicas
              plus 1 retained procedural baseline sample. Every combination is fully interactive and live-renderable.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 sm:gap-4 shrink-0 bg-stone-950/60 p-4 rounded-xl border border-stone-800/80">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-mono font-bold text-amber-400">
                300
              </div>
              <div className="text-[10px] uppercase font-mono tracking-wider text-stone-400 mt-0.5">
                Combinations
              </div>
            </div>
            <div className="text-center border-x border-stone-800 px-3">
              <div className="text-xl sm:text-2xl font-mono font-bold text-emerald-400">
                11
              </div>
              <div className="text-[10px] uppercase font-mono tracking-wider text-stone-400 mt-0.5">
                Replicas
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-mono font-bold text-sky-400">
                1
              </div>
              <div className="text-[10px] uppercase font-mono tracking-wider text-stone-400 mt-0.5">
                Baseline
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Controls */}
      <div className="bg-white rounded-xl border border-stone-200 p-4 sm:p-5 shadow-sm space-y-4">
        {/* Search Input Bar */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search by combination name, piece (e.g. Verdeo, Devialet, Fashionia), or industry..."
              className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm placeholder:text-stone-400 bg-stone-50/50"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick Filter Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {['Fashionia', 'Verdeo', 'Devialet', 'Compatto', 'Alex Morgan', 'Baseline'].map((kw) => (
              <button
                key={kw}
                onClick={() => {
                  setSearchQuery(kw === 'Baseline' ? 'baseline' : kw);
                  setCurrentPage(1);
                }}
                className="px-2.5 py-1 rounded-md bg-stone-100 hover:bg-amber-100 hover:text-amber-900 text-stone-700 text-xs font-mono transition-colors whitespace-nowrap"
              >
                +{kw}
              </button>
            ))}
          </div>
        </div>

        {/* Filter Dropdowns */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-stone-100">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium text-stone-500 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Filter Piece:
            </span>

            {/* Replicated Source Filter */}
            <select
              value={selectedSource}
              onChange={(e) => {
                setSelectedSource(e.target.value);
                setCurrentPage(1);
              }}
              className="px-3 py-1.5 rounded-lg border border-stone-300 text-xs bg-white text-stone-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              {REPLICATED_SOURCE_FILTERS.map((src) => (
                <option key={src} value={src}>
                  {src}
                </option>
              ))}
            </select>

            {/* Purpose Filter */}
            <select
              value={selectedPurpose}
              onChange={(e) => {
                setSelectedPurpose(e.target.value);
                setCurrentPage(1);
              }}
              className="px-3 py-1.5 rounded-lg border border-stone-300 text-xs bg-white text-stone-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              {PURPOSES.map((purp) => (
                <option key={purp} value={purp}>
                  {purp}
                </option>
              ))}
            </select>

            {/* Performance Filter */}
            <select
              value={selectedPerf}
              onChange={(e) => {
                setSelectedPerf(e.target.value as 'all' | 'L' | 'M' | 'H');
                setCurrentPage(1);
              }}
              className="px-3 py-1.5 rounded-lg border border-stone-300 text-xs bg-white text-stone-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="all">All Costs</option>
              <option value="L">[L] Light</option>
              <option value="M">[M] Medium</option>
              <option value="H">[H] Heavy</option>
            </select>
          </div>

          {hasActiveFilters && (
            <button
              onClick={handleClearFilters}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs text-rose-600 hover:bg-rose-50 font-medium"
            >
              <X className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-stone-500 px-1">
        <div>
          Showing <span className="font-semibold text-stone-900">{filteredTemplates.length}</span> items
          {selectedSource !== 'All Sources' && ` (Source: ${selectedSource})`}
        </div>
        <div className="font-mono text-[11px]">
          Page {currentPage} of {totalPages}
        </div>
      </div>

      {/* Card Grid */}
      {paginatedTemplates.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {paginatedTemplates.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
              onPreview={onSelectPreview}
              onCustomize={onSelectCustomize}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-stone-200 p-12 text-center space-y-3">
          <Layers className="w-10 h-10 text-stone-400 mx-auto" />
          <h3 className="text-base font-semibold text-stone-800">No matching combinations found</h3>
          <p className="text-xs text-stone-500 max-w-sm mx-auto">
            Try adjusting your search keywords or clear your active filters to see all 300 modular combinations.
          </p>
          <button
            onClick={handleClearFilters}
            className="px-4 py-2 rounded-lg bg-stone-900 text-white text-xs font-semibold hover:bg-stone-800"
          >
            Show All 300 Combinations
          </button>
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-6">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-stone-300 text-xs font-medium text-stone-700 hover:bg-stone-100 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <div className="flex items-center gap-1">
            {Array.from({ length: Math.min(7, totalPages) }, (_, i) => {
              let pageNum = i + 1;
              if (totalPages > 7) {
                if (currentPage > 4 && currentPage < totalPages - 2) {
                  pageNum = currentPage - 3 + i;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 6 + i;
                }
              }
              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-8 h-8 rounded-lg text-xs font-mono font-medium transition-colors ${
                    currentPage === pageNum
                      ? 'bg-amber-500 text-stone-950 font-bold'
                      : 'text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-stone-300 text-xs font-medium text-stone-700 hover:bg-stone-100 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
