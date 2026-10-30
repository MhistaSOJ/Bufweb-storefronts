/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { DESIGN_REPLICAS, DesignReplicaMeta } from '../replicas';
import {
  Monitor,
  Smartphone,
  Columns,
  Sparkles,
  ExternalLink,
  Download,
  Info,
  CheckCircle2,
  ArrowRight,
  Eye,
} from 'lucide-react';

export const ReplicasViewer: React.FC = () => {
  const [selectedReplicaId, setSelectedReplicaId] = useState<string>('fashionia');
  const [viewMode, setViewMode] = useState<'full' | 'side-by-side' | 'mobile'>('full');

  const activeReplica = DESIGN_REPLICAS.find((r) => r.id === selectedReplicaId) || DESIGN_REPLICAS[0];
  const ActiveComponent = activeReplica.component;

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-amber-50 text-amber-800 border border-amber-200 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Line-for-Line Replications</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
            Replicated Reference Websites
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl leading-relaxed">
            Every reference design image you provided has been replicated line-for-line into a fully interactive, production-grade website. Switch between designs below or compare side-by-side against your original reference image.
          </p>
        </div>

        {/* View Controls */}
        <div className="flex items-center gap-2 bg-stone-100 p-1.5 rounded-xl border border-stone-200 self-start md:self-auto shrink-0">
          <button
            onClick={() => setViewMode('full')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              viewMode === 'full'
                ? 'bg-white text-stone-900 shadow-sm'
                : 'text-stone-600 hover:text-stone-900'
            }`}
            title="Full Page Live View"
          >
            <Monitor className="w-4 h-4" />
            <span className="hidden sm:inline">Full Site</span>
          </button>

          <button
            onClick={() => setViewMode('side-by-side')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              viewMode === 'side-by-side'
                ? 'bg-white text-stone-900 shadow-sm'
                : 'text-stone-600 hover:text-stone-900'
            }`}
            title="Compare Side-by-Side with Uploaded Image"
          >
            <Columns className="w-4 h-4" />
            <span className="hidden sm:inline">Side-by-Side</span>
          </button>

          <button
            onClick={() => setViewMode('mobile')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              viewMode === 'mobile'
                ? 'bg-white text-stone-900 shadow-sm'
                : 'text-stone-600 hover:text-stone-900'
            }`}
            title="Mobile 390px Viewport"
          >
            <Smartphone className="w-4 h-4" />
            <span className="hidden sm:inline">Mobile (390px)</span>
          </button>
        </div>
      </div>

      {/* Design Selector Pill Carousel */}
      <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-sm">
        <div className="text-[11px] font-mono uppercase tracking-wider text-stone-400 mb-3 px-1">
          Select Replicated Design ({DESIGN_REPLICAS.length} Line-For-Line Models)
        </div>
        <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-thin">
          {DESIGN_REPLICAS.map((replica) => (
            <button
              key={replica.id}
              onClick={() => setSelectedReplicaId(replica.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold shrink-0 transition-all text-left flex items-center gap-3 border ${
                selectedReplicaId === replica.id
                  ? 'bg-stone-900 text-white border-stone-900 shadow-md ring-2 ring-stone-900/10'
                  : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200'
              }`}
            >
              <div className="w-8 h-8 rounded-lg overflow-hidden bg-stone-200 shrink-0 border border-stone-300">
                <img
                  src={replica.originalImage}
                  alt={replica.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <div className="font-bold whitespace-nowrap">{replica.title}</div>
                <div
                  className={`text-[10px] font-mono ${
                    selectedReplicaId === replica.id ? 'text-stone-300' : 'text-stone-400'
                  }`}
                >
                  {replica.category}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Active Design Meta Pill Bar */}
      <div className="bg-stone-50 rounded-xl p-4 border border-stone-200 text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-bold text-stone-900 text-sm font-serif">{activeReplica.title}</span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-stone-200 text-stone-700">
              {activeReplica.category}
            </span>
          </div>
          <p className="text-stone-600 text-xs leading-relaxed max-w-3xl">
            {activeReplica.summary}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5 self-start sm:self-auto shrink-0">
          {activeReplica.keyElements.map((el, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-white border border-stone-200 text-stone-600 rounded text-[10px] font-mono"
            >
              ✓ {el}
            </span>
          ))}
        </div>
      </div>

      {/* Main Display Area */}
      <div className="border border-stone-200 rounded-3xl overflow-hidden shadow-sm bg-stone-100">
        {viewMode === 'full' && (
          <div className="w-full overflow-x-hidden bg-white">
            <ActiveComponent />
          </div>
        )}

        {viewMode === 'side-by-side' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-stone-300 bg-stone-200">
            {/* Left: Original Reference Image */}
            <div className="bg-stone-900 p-4 sm:p-6 flex flex-col items-center">
              <div className="w-full flex items-center justify-between pb-3 text-white text-xs font-mono">
                <span className="font-bold uppercase tracking-wider text-amber-400">
                  Original Reference Image
                </span>
                <span className="text-stone-400">Uploaded by User</span>
              </div>
              <div className="max-h-[850px] overflow-y-auto w-full rounded-2xl border border-stone-700 bg-black flex justify-center p-2">
                <img
                  src={activeReplica.originalImage}
                  alt={activeReplica.title}
                  className="w-full h-auto object-contain rounded-xl shadow-2xl"
                />
              </div>
            </div>

            {/* Right: Interactive Replicated Website */}
            <div className="bg-white p-2 sm:p-4 flex flex-col">
              <div className="w-full flex items-center justify-between pb-3 px-2 text-stone-800 text-xs font-mono">
                <span className="font-bold uppercase tracking-wider text-emerald-700">
                  Interactive Live Code Replica
                </span>
                <span className="text-stone-500">React + Tailwind v4</span>
              </div>
              <div className="max-h-[850px] overflow-y-auto w-full rounded-2xl border border-stone-200 shadow-inner bg-white">
                <ActiveComponent />
              </div>
            </div>
          </div>
        )}

        {viewMode === 'mobile' && (
          <div className="py-12 bg-stone-900 flex justify-center items-center">
            {/* Mobile Frame Container (390px) */}
            <div className="w-[390px] h-[820px] rounded-[3.5rem] p-3.5 bg-black border-4 border-stone-700 shadow-2xl flex flex-col overflow-hidden relative">
              {/* Dynamic Island Notch */}
              <div className="absolute top-4 inset-x-0 flex justify-center z-50 pointer-events-none">
                <div className="w-32 h-6 bg-black rounded-full border border-stone-800" />
              </div>

              {/* Viewport Screen */}
              <div className="w-full h-full rounded-[2.5rem] overflow-y-auto bg-white pt-6">
                <ActiveComponent />
              </div>

              {/* Bottom Home indicator */}
              <div className="absolute bottom-2 inset-x-0 flex justify-center pointer-events-none">
                <div className="w-32 h-1 bg-white/40 rounded-full" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
