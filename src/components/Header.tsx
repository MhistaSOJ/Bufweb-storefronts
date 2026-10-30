/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  LayoutTemplate,
  Sparkles,
  BookOpen,
  CheckCircle2,
  FolderKanban,
  Layers,
} from 'lucide-react';

export type ActiveTab = 'replicas' | 'gallery' | 'reference' | 'rules' | 'validator' | 'drafts';

interface HeaderProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
  draftCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onTabChange,
  draftCount,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-stone-900 text-stone-100 border-b border-stone-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Mark */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center text-stone-950 font-bold text-lg shadow-inner">
              DI
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif font-bold text-base tracking-tight text-white">
                  Templates Studio
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  300 Combinations + 11 Replicas
                </span>
              </div>
              <p className="text-[11px] text-stone-400 font-sans hidden sm:block">
                Composed from replicated design pieces + 1 procedural baseline sample
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex items-center space-x-1 overflow-x-auto py-2">
            <button
              onClick={() => onTabChange('replicas')}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'replicas'
                  ? 'bg-amber-500 text-stone-950 shadow-sm font-semibold'
                  : 'text-stone-300 hover:text-white hover:bg-stone-800'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>11 Image Replicas</span>
            </button>

            <button
              onClick={() => onTabChange('gallery')}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'gallery'
                  ? 'bg-amber-500 text-stone-950 shadow-sm font-semibold'
                  : 'text-stone-300 hover:text-white hover:bg-stone-800'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>300 Combinations</span>
              <span className="ml-0.5 px-1.5 py-0.2 rounded-full text-[10px] font-mono bg-stone-800 text-amber-300 border border-stone-700">
                300
              </span>
            </button>

            <button
              onClick={() => onTabChange('reference')}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'reference'
                  ? 'bg-amber-500 text-stone-950 shadow-sm font-semibold'
                  : 'text-stone-300 hover:text-white hover:bg-stone-800'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Reference Studio</span>
            </button>

            <button
              onClick={() => onTabChange('rules')}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'rules'
                  ? 'bg-amber-500 text-stone-950 shadow-sm font-semibold'
                  : 'text-stone-300 hover:text-white hover:bg-stone-800'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>300 Rules</span>
            </button>

            <button
              onClick={() => onTabChange('validator')}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'validator'
                  ? 'bg-amber-500 text-stone-950 shadow-sm font-semibold'
                  : 'text-stone-300 hover:text-white hover:bg-stone-800'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Validator</span>
            </button>

            <button
              onClick={() => onTabChange('drafts')}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'drafts'
                  ? 'bg-amber-500 text-stone-950 shadow-sm font-semibold'
                  : 'text-stone-300 hover:text-white hover:bg-stone-800'
              }`}
            >
              <FolderKanban className="w-4 h-4" />
              <span>Drafts</span>
              {draftCount > 0 && (
                <span className="ml-0.5 px-1.5 py-0.2 rounded-full text-[10px] font-mono bg-stone-700 text-amber-300">
                  {draftCount}
                </span>
              )}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};
