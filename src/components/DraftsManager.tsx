/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { DraftWebsite, TemplateSpec } from '../types';
import {
  FolderKanban,
  ExternalLink,
  Trash2,
  Calendar,
  Sparkles,
  ArrowRight,
  Download,
  Copy,
  Check,
} from 'lucide-react';

import { generateStandaloneHtml } from '../engine/htmlExporter';

interface DraftsManagerProps {
  drafts: DraftWebsite[];
  catalogue: TemplateSpec[];
  onSelectDraft: (draft: DraftWebsite) => void;
  onDeleteDraft: (id: string) => void;
}

export const DraftsManager: React.FC<DraftsManagerProps> = ({
  drafts,
  catalogue,
  onSelectDraft,
  onDeleteDraft,
}) => {
  const [copiedId, setCopiedId] = React.useState<string | null>(null);

  const handleCopyJSON = (draft: DraftWebsite) => {
    navigator.clipboard.writeText(JSON.stringify(draft, null, 2));
    setCopiedId(draft.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDownloadHTML = (draft: DraftWebsite) => {
    const baseTemplate = catalogue.find((t) => t.id === draft.templateId);
    const html = generateStandaloneHtml(draft, baseTemplate);
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${draft.businessName.toLowerCase().replace(/[^a-z0-9]/g, '-')}-website.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm flex items-center justify-between">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-amber-50 text-amber-800 border border-amber-200 mb-2">
            <FolderKanban className="w-3.5 h-3.5 text-amber-600" />
            <span>Project Management</span>
          </div>
          <h1 className="font-serif text-2xl font-bold text-stone-900">
            My Draft Websites
          </h1>
          <p className="text-xs text-stone-600 mt-1 max-w-2xl leading-relaxed">
            All draft websites generated and customized from your chosen templates.
            Every draft holds your genuine business copy, uploaded photos, and design configuration.
          </p>
        </div>

        <div className="text-right font-mono text-xs text-stone-600 bg-stone-50 px-4 py-2.5 rounded-xl border border-stone-200">
          <span className="font-bold text-amber-600 text-base">{drafts.length}</span> Drafts Saved
        </div>
      </div>

      {/* Drafts List */}
      {drafts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {drafts.map((draft) => {
            const baseTemplate = catalogue.find((t) => t.id === draft.templateId);

            return (
              <div
                key={draft.id}
                className="bg-white rounded-xl border border-stone-200 hover:border-stone-400 p-5 shadow-sm transition-all flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase bg-amber-50 text-amber-800 border border-amber-200 px-2 py-0.5 rounded">
                      {draft.templateId}
                    </span>
                    <span className="text-[10px] text-stone-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(draft.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-stone-900 text-base line-clamp-1">
                    {draft.businessName}
                  </h3>

                  <p className="text-xs text-stone-600 line-clamp-2 mt-1">
                    "{draft.slotValues.headline}"
                  </p>

                  <div className="mt-3 bg-stone-50 p-2.5 rounded-lg border border-stone-100 text-[11px] text-stone-600 space-y-1">
                    <div><strong>Industry:</strong> {draft.industry}</div>
                    <div><strong>Phone:</strong> {draft.slotValues.phone}</div>
                    <div><strong>Photos:</strong> {draft.uploadedImages.length} uploaded</div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-stone-100">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleDownloadHTML(draft)}
                      className="p-1.5 rounded-md text-stone-600 hover:text-amber-800 hover:bg-amber-50 border border-stone-200 transition-colors"
                      title="Download standalone HTML file"
                      aria-label="Download standalone HTML file"
                    >
                      <Download className="w-4 h-4 text-stone-700" />
                    </button>
                    <button
                      onClick={() => handleCopyJSON(draft)}
                      className="p-1.5 rounded-md text-stone-500 hover:text-stone-900 hover:bg-stone-100 transition-colors"
                      title="Copy draft JSON"
                      aria-label="Copy draft JSON"
                    >
                      {copiedId === draft.id ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                    <button
                      onClick={() => onDeleteDraft(draft.id)}
                      className="p-1.5 rounded-md text-stone-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                      title="Delete draft"
                      aria-label="Delete draft"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <button
                    onClick={() => onSelectDraft(draft)}
                    className="px-3 py-1.5 bg-stone-900 hover:bg-black text-white rounded-lg text-xs font-semibold inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Edit Draft</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-stone-200 p-12 text-center max-w-md mx-auto space-y-3">
          <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mx-auto text-stone-400">
            <FolderKanban className="w-6 h-6" />
          </div>
          <h3 className="font-serif font-bold text-stone-900 text-lg">No Draft Websites Yet</h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Browse the template library, pick any design that fits your business, and click "Customize" to start building your draft.
          </p>
        </div>
      )}
    </div>
  );
};
