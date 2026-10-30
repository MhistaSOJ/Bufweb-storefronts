/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { DESIGN_LIBRARY_300 } from '../data/designLibrary300';
import { DesignRule, CostTag } from '../types';
import {
  BookOpen,
  Search,
  Filter,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  Zap,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

const CATEGORIES = [
  { num: 0, name: 'All 13 Categories (300 Rules)' },
  { num: 1, name: '1. Visual styles (1-25)' },
  { num: 2, name: '2. Typography (26-50)' },
  { num: 3, name: '3. Colour (51-70)' },
  { num: 4, name: '4. Layout and structure (71-100)' },
  { num: 5, name: '5. Motion and interaction (101-130)' },
  { num: 6, name: '6. Imagery and media (131-155)' },
  { num: 7, name: '7. Conversion and trust (156-185)' },
  { num: 8, name: '8. UX psychology (186-205)' },
  { num: 9, name: '9. Mobile and 3G performance (206-225)' },
  { num: 10, name: '10. Accessibility (226-235)' },
  { num: 11, name: '11. Copy and brand voice (236-250)' },
  { num: 12, name: '12. SEO and sharing (251-260)' },
  { num: 13, name: '13. By type of business (261-300)' },
];

export const DesignRulesViewer: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState(0);
  const [selectedCost, setSelectedCost] = useState<'all' | CostTag>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filteredRules = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return DESIGN_LIBRARY_300.filter((rule) => {
      // Category filter
      if (selectedCat !== 0 && rule.categoryNumber !== selectedCat) {
        return false;
      }

      // Cost filter
      if (selectedCost !== 'all') {
        if (rule.cost !== selectedCost) return false;
      }

      // Query filter
      if (q) {
        const matchesNum = String(rule.id) === q || `#${rule.id}` === q;
        const matchesName = rule.name.toLowerCase().includes(q);
        const matchesDesc = rule.description.toLowerCase().includes(q);
        const matchesGuidance = rule.implementationGuidance.toLowerCase().includes(q);
        return matchesNum || matchesName || matchesDesc || matchesGuidance;
      }

      return true;
    });
  }, [selectedCat, selectedCost, searchQuery]);

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-amber-50 text-amber-800 border border-amber-200 mb-2">
            <BookOpen className="w-3.5 h-3.5 text-amber-600" />
            <span>Structured Design Knowledge</span>
          </div>
          <h1 className="font-serif text-2xl font-bold text-stone-900">
            The 300 Design Intelligence Rules
          </h1>
          <p className="text-xs text-stone-600 mt-1 max-w-2xl leading-relaxed">
            The 300-item library provides foundational techniques for international web design.
            Tagged by cost on a slow mobile phone: [L] light, [M] medium, [H] heavy, or zero cost.
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-stone-600 bg-stone-50 px-4 py-2.5 rounded-xl border border-stone-200 shrink-0">
          <span className="font-bold text-amber-600 text-base">{filteredRules.length}</span>
          <span>of 300 rules shown</span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-xl border border-stone-200 p-4 shadow-sm space-y-3">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by rule name, description, keyword, or number (e.g. 71, glassmorphism, 360px)..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-stone-300 text-xs focus:ring-2 focus:ring-amber-500 focus:outline-none"
            />
          </div>

          {/* Cost Filter */}
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-stone-500 font-medium">Cost:</span>
            {(['all', 'none', 'L', 'M', 'H'] as const).map((cost) => (
              <button
                key={cost}
                onClick={() => setSelectedCost(cost)}
                className={`px-2.5 py-1 rounded-md text-xs font-mono font-medium border transition-colors ${
                  selectedCost === cost
                    ? 'bg-stone-900 text-white border-stone-900'
                    : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                }`}
              >
                {cost === 'all' ? 'All' : cost === 'none' ? 'Zero' : `[${cost}]`}
              </button>
            ))}
          </div>
        </div>

        {/* Category Pills Strip */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.num}
              onClick={() => setSelectedCat(cat.num)}
              className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                selectedCat === cat.num
                  ? 'bg-amber-600 text-white font-semibold shadow-xs'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {cat.num === 0 ? 'All Categories' : cat.name.split('(')[0].trim()}
            </button>
          ))}
        </div>
      </div>

      {/* Rules Accordion Grid */}
      <div className="space-y-3">
        {filteredRules.map((rule) => {
          const isExpanded = expandedId === rule.id;

          return (
            <div
              key={rule.id}
              className={`bg-white rounded-xl border transition-all ${
                isExpanded ? 'border-amber-400 ring-1 ring-amber-400/20 shadow-md' : 'border-stone-200 hover:border-stone-300 shadow-xs'
              }`}
            >
              {/* Rule Card Header */}
              <div
                onClick={() => setExpandedId(isExpanded ? null : rule.id)}
                className="p-4 sm:p-5 flex items-start justify-between gap-4 cursor-pointer select-none"
              >
                <div className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-lg bg-stone-100 text-stone-800 font-mono text-xs font-bold flex items-center justify-center shrink-0 border border-stone-200">
                    {rule.id}
                  </span>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-serif font-bold text-stone-900 text-sm sm:text-base">
                        {rule.name}
                      </h3>

                      {rule.cost !== 'none' ? (
                        <span
                          className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded border ${
                            rule.cost === 'L'
                              ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                              : rule.cost === 'M'
                              ? 'bg-amber-50 text-amber-800 border-amber-200'
                              : 'bg-rose-50 text-rose-800 border-rose-200'
                          }`}
                        >
                          [{rule.cost}]
                        </span>
                      ) : (
                        <span className="text-[10px] font-mono text-stone-500 bg-stone-100 px-1.5 py-0.5 rounded">
                          Zero cost
                        </span>
                      )}
                    </div>

                    <div className="text-xs text-stone-500 font-mono mt-0.5">
                      Category {rule.categoryNumber}: {rule.categoryName}
                    </div>

                    <p className="text-xs text-stone-700 mt-2 leading-relaxed">
                      {rule.description}
                    </p>
                  </div>
                </div>

                <button
                  className="p-1 rounded-md text-stone-400 hover:text-stone-700 hover:bg-stone-100 shrink-0"
                  aria-label="Toggle details"
                >
                  {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
              </div>

              {/* Expanded Detail Panel */}
              {isExpanded && (
                <div className="px-5 pb-5 pt-2 border-t border-stone-100 bg-stone-50/50 rounded-b-xl space-y-4 text-xs">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <span className="font-semibold text-stone-900 block mb-1">
                        Selection Criteria:
                      </span>
                      <p className="text-stone-600 leading-relaxed bg-white p-3 rounded-lg border border-stone-200">
                        {rule.selectionCriteria}
                      </p>
                    </div>

                    <div>
                      <span className="font-semibold text-stone-900 block mb-1">
                        Implementation Guidance:
                      </span>
                      <p className="text-stone-600 font-mono bg-white p-3 rounded-lg border border-stone-200">
                        {rule.implementationGuidance}
                      </p>
                    </div>

                    <div>
                      <span className="font-semibold text-stone-900 block mb-1">
                        Accessibility Considerations:
                      </span>
                      <p className="text-stone-600 leading-relaxed bg-white p-3 rounded-lg border border-stone-200">
                        {rule.accessibilityConsiderations}
                      </p>
                    </div>

                    <div>
                      <span className="font-semibold text-stone-900 block mb-1">
                        Performance Classification:
                      </span>
                      <p className="text-stone-600 leading-relaxed bg-white p-3 rounded-lg border border-stone-200">
                        {rule.performanceClassification}
                      </p>
                    </div>
                  </div>

                  {rule.applicableBusinessTypes.length > 0 && (
                    <div>
                      <span className="font-semibold text-stone-900 block mb-1.5">
                        Applicable Business Types:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {rule.applicableBusinessTypes.map((bt) => (
                          <span
                            key={bt}
                            className="bg-stone-200 text-stone-800 px-2 py-0.5 rounded text-[11px]"
                          >
                            {bt}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {rule.potentialConflicts.length > 0 && (
                    <div className="flex items-center gap-2 text-amber-800 bg-amber-50 p-2.5 rounded-lg border border-amber-200">
                      <AlertCircle className="w-4 h-4 shrink-0 text-amber-600" />
                      <span>
                        <strong>Potential Conflicts:</strong> {rule.potentialConflicts.join(', ')}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
