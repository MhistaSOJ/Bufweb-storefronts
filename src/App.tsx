/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header, ActiveTab } from './components/Header';
import { TemplateGallery } from './components/TemplateGallery';
import { TemplateCustomizer } from './components/TemplateCustomizer';
import { DesignRulesViewer } from './components/DesignRulesViewer';
import { ValidationReportModal } from './components/ValidationReportModal';
import { ReferenceStudio } from './components/ReferenceStudio';
import { DraftsManager } from './components/DraftsManager';
import { ReplicasViewer } from './components/ReplicasViewer';
import { CombinationLiveRenderer } from './components/CombinationLiveRenderer';
import { getCompleteCatalogue } from './engine/combinationsEngine';
import { DraftWebsite, TemplateSpec } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('replicas');
  const [catalogue] = useState<TemplateSpec[]>(() => getCompleteCatalogue());
  const [previewTemplate, setPreviewTemplate] = useState<TemplateSpec | null>(null);
  const [customizingTemplate, setCustomizingTemplate] = useState<TemplateSpec | null>(null);
  const [drafts, setDrafts] = useState<DraftWebsite[]>(() => {
    try {
      const stored = localStorage.getItem('di_draft_websites');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Save drafts to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('di_draft_websites', JSON.stringify(drafts));
    } catch (e) {
      console.error('Failed to save drafts to localStorage', e);
    }
  }, [drafts]);

  const handleSelectPreview = (template: TemplateSpec) => {
    setPreviewTemplate(template);
  };

  const handleSelectCustomize = (template: TemplateSpec) => {
    setPreviewTemplate(null);
    setCustomizingTemplate(template);
  };

  const handleSaveDraft = (draft: DraftWebsite) => {
    setDrafts((prev) => [draft, ...prev]);
    setCustomizingTemplate(null);
    setActiveTab('drafts');
  };

  const handleDeleteDraft = (id: string) => {
    setDrafts((prev) => prev.filter((d) => d.id !== id));
  };

  const handleSelectDraftForEdit = (draft: DraftWebsite) => {
    const originalTemplate = catalogue.find((t) => t.id === draft.templateId) || catalogue[0];
    setCustomizingTemplate(originalTemplate);
  };

  // If currently previewing a combination, show the full live interactive renderer
  if (previewTemplate) {
    return (
      <CombinationLiveRenderer
        template={previewTemplate}
        onBack={() => setPreviewTemplate(null)}
        onCustomize={handleSelectCustomize}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 flex flex-col font-sans antialiased selection:bg-amber-500 selection:text-white">
      {/* Top App Header */}
      <Header
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          setCustomizingTemplate(null);
        }}
        draftCount={drafts.length}
      />

      {/* Main App Content Viewport */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {customizingTemplate ? (
          <TemplateCustomizer
            template={customizingTemplate}
            onSaveDraft={handleSaveDraft}
            onBack={() => setCustomizingTemplate(null)}
            onPreview={handleSelectPreview}
          />
        ) : (
          <>
            {activeTab === 'replicas' && <ReplicasViewer />}

            {activeTab === 'gallery' && (
              <TemplateGallery
                catalogue={catalogue}
                onSelectPreview={handleSelectPreview}
                onSelectCustomize={handleSelectCustomize}
              />
            )}

            {activeTab === 'reference' && (
              <ReferenceStudio
                catalogue={catalogue}
                onSelectPreview={handleSelectPreview}
                onSelectCustomize={handleSelectCustomize}
              />
            )}

            {activeTab === 'rules' && <DesignRulesViewer />}

            {activeTab === 'validator' && (
              <ValidationReportModal catalogue={catalogue} />
            )}

            {activeTab === 'drafts' && (
              <DraftsManager
                drafts={drafts}
                catalogue={catalogue}
                onSelectDraft={handleSelectDraftForEdit}
                onDeleteDraft={handleDeleteDraft}
              />
            )}
          </>
        )}
      </main>

      {/* Grounding Footer */}
      <footer className="bg-stone-900 text-stone-400 text-xs py-8 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-serif font-bold text-white text-sm">
              Templates Studio
            </span>
            <span>•</span>
            <span>300 Modular Combinations</span>
            <span>•</span>
            <span>11 Line-for-Line Replicas</span>
            <span>•</span>
            <span>1 Baseline Sample</span>
            <span>•</span>
            <span>300 Design Rules</span>
          </div>

          <div className="flex items-center gap-4 text-stone-500 font-mono text-[11px]">
            <span>Deterministic Modular Generation</span>
            <span>WCAG AA 4.5:1</span>
            <span>Core Web Vitals [L]/[M]</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
