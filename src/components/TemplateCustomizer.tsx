/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { DraftWebsite, TemplateSpec, TypographyPairing, ColourStrategy } from '../types';
import { SAMPLE_REFERENCES } from '../data/sampleReferences';
import {
  Save,
  Check,
  AlertTriangle,
  Upload,
  Sparkles,
  Palette,
  Type,
  Layout,
  Image as ImageIcon,
  ArrowLeft,
  Eye,
} from 'lucide-react';

interface TemplateCustomizerProps {
  template: TemplateSpec;
  onSaveDraft: (draft: DraftWebsite) => void;
  onBack: () => void;
  onPreview: (template: TemplateSpec) => void;
}

const COLOR_OPTIONS: { id: ColourStrategy; label: string; preview: string }[] = [
  { id: 'earthy-olive-sand-warm-neutral', label: 'Earthy Olive & Sand', preview: 'bg-[#4A5D4E]' },
  { id: 'dark-luxury-near-black-gold', label: 'Dark Luxury Gold', preview: 'bg-stone-900 border border-amber-400' },
  { id: 'japandi-warm-cream-charcoal', label: 'Japandi Warm Cream', preview: 'bg-[#F2ECE1] border border-stone-400' },
  { id: 'fresh-terracotta-lilac-soap', label: 'Terracotta & Lavender', preview: 'bg-[#B8502F]' },
  { id: 'neo-brutalist-bold-punch', label: 'Neo-Brutalist Yellow/Pink', preview: 'bg-yellow-400 border-2 border-black' },
  { id: 'electric-tech-cobalt-slate', label: 'Electric Cobalt Slate', preview: 'bg-cyan-500' },
  { id: 'pastel-soft-mint-butter', label: 'Pastel Soft Mint', preview: 'bg-emerald-300' },
  { id: 'monochrome-single-crimson-accent', label: 'Monochrome Crimson', preview: 'bg-rose-700' },
];

const TYPOGRAPHY_OPTIONS: { id: TypographyPairing; label: string; sample: string }[] = [
  { id: 'serif-headline-sans-body', label: 'Serif Headline + Sans Body', sample: 'Editorial Elegance' },
  { id: 'grotesque-bold-display-geometric-sans', label: 'Bold Grotesque + Geometric', sample: 'Devialet & Nord Tech' },
  { id: 'humanist-sans-warm-serif', label: 'Humanist Sans + Warm Serif', sample: 'Alex Morgan Modern' },
  { id: 'monospace-technical-clean-sans', label: 'Monospace Specs + Clean Sans', sample: 'Sweater Weather' },
  { id: 'high-contrast-didone-editorial', label: 'Didone Editorial + Humanist', sample: 'Fashionia Luxury' },
  { id: 'handwritten-accent-clean-sans', label: 'Handwritten Accent + Sans', sample: 'Wash House Natural' },
];

export const TemplateCustomizer: React.FC<TemplateCustomizerProps> = ({
  template,
  onSaveDraft,
  onBack,
  onPreview,
}) => {
  const [businessName, setBusinessName] = useState(template.name.split('-')[0].trim());
  const [industry, setIndustry] = useState(template.industry);
  const [headline, setHeadline] = useState(`Elevate Your Everyday ${template.businessTypes[0] || 'Experience'}`);
  const [valueProposition, setValueProposition] = useState(template.description.split('.')[0] + '.');
  const [phone, setPhone] = useState('+234 803 123 4567');
  const [currencySymbol, setCurrencySymbol] = useState('₦');
  const [address, setAddress] = useState('14 Victoria Island Road, Near Landmark Center, Lagos');
  const [selectedColor, setSelectedColor] = useState<ColourStrategy>(template.dimensions.colourStrategy);
  const [selectedTypo, setSelectedTypo] = useState<TypographyPairing>(template.dimensions.typographyPairing);
  const [selectedReference, setSelectedReference] = useState<string>('');
  const [uploadedPhotos, setUploadedPhotos] = useState<string[]>([]);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  // Handle image upload from user local drive
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      setUploadedPhotos((prev) => [...prev, url]);
    }
  };

  // Execute draft creation
  const handleConfirmSave = () => {
    const draft: DraftWebsite = {
      id: `draft_${Date.now()}`,
      templateId: template.id,
      name: `${businessName} Website`,
      businessName,
      industry,
      customTypography: selectedTypo,
      slotValues: {
        headline,
        valueProposition,
        phone,
        currencySymbol,
        address,
        referenceInspiration: selectedReference,
      },
      uploadedImages: uploadedPhotos,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    onSaveDraft(draft);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-stone-200 shadow-sm">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-600 hover:text-stone-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Templates</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onPreview(template)}
            className="px-3 py-1.5 rounded-lg text-xs font-medium border border-stone-200 text-stone-700 hover:bg-stone-50 transition-colors inline-flex items-center gap-1"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Preview Base</span>
          </button>

          <button
            onClick={() => setShowConfirmModal(true)}
            className="px-4 py-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-bold shadow-sm transition-colors inline-flex items-center gap-1.5"
          >
            <Save className="w-3.5 h-3.5" />
            <span>Create Draft Website</span>
          </button>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl border border-stone-200 space-y-4">
            <div className="flex items-center gap-3 text-amber-600">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
              </div>
              <h3 className="font-serif font-bold text-stone-900 text-lg">
                Create New Draft Website?
              </h3>
            </div>

            <p className="text-xs text-stone-600 leading-relaxed">
              This will create a new draft website based on <strong>{template.name}</strong> for <strong>{businessName}</strong>.
              Your customizations and real content slots will be safely saved in your Drafts library.
            </p>

            <div className="flex justify-end gap-2 pt-3 border-t border-stone-100">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="px-4 py-2 rounded-lg text-xs font-medium text-stone-600 hover:bg-stone-100"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowConfirmModal(false);
                  handleConfirmSave();
                }}
                className="px-4 py-2 rounded-lg text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 shadow-sm"
              >
                Confirm & Create Draft
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Customizer Form Panels */}
      <div className="space-y-6">
        {/* Panel 1: Business Identity & Real Content */}
        <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-sm space-y-4">
          <div className="border-b border-stone-100 pb-3">
            <h2 className="font-serif font-bold text-stone-900 text-base">
              1. Business Identity & Real Content Slots
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              Input your genuine business information. Never use fabricated placeholder data (Rule 131).
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Business Name
              </label>
              <input
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="w-full px-3 py-2 border border-stone-300 rounded-lg text-xs focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Target Industry / Specialization
              </label>
              <input
                type="text"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full px-3 py-2 border border-stone-300 rounded-lg text-xs focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Primary Benefit Headline (Rule 236)
              </label>
              <input
                type="text"
                value={headline}
                onChange={(e) => setHeadline(e.target.value)}
                className="w-full px-3 py-2 border border-stone-300 rounded-lg text-xs focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                One-Line Value Proposition (Rule 242)
              </label>
              <textarea
                rows={2}
                value={valueProposition}
                onChange={(e) => setValueProposition(e.target.value)}
                className="w-full px-3 py-2 border border-stone-300 rounded-lg text-xs focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                WhatsApp & Phone (Rule 157 & 248)
              </label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 border border-stone-300 rounded-lg text-xs font-mono focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Currency Symbol (Rule 247)
              </label>
              <input
                type="text"
                value={currencySymbol}
                onChange={(e) => setCurrencySymbol(e.target.value)}
                className="w-full px-3 py-2 border border-stone-300 rounded-lg text-xs font-mono focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Physical Address with Landmark (Rule 249)
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-3 py-2 border border-stone-300 rounded-lg text-xs focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Panel 2: Color Strategy Switcher */}
        <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-sm space-y-4">
          <div className="border-b border-stone-100 pb-3">
            <h2 className="font-serif font-bold text-stone-900 text-base flex items-center gap-2">
              <Palette className="w-4 h-4 text-amber-600" />
              <span>2. Colour Strategy (Rules 51-70)</span>
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              Choose a harmonious 60-30-10 palette tailored to your brand personality.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {COLOR_OPTIONS.map((col) => (
              <button
                key={col.id}
                onClick={() => setSelectedColor(col.id)}
                className={`p-3 rounded-lg border text-left transition-all ${
                  selectedColor === col.id
                    ? 'border-amber-600 bg-amber-50/50 ring-2 ring-amber-600/20'
                    : 'border-stone-200 hover:border-stone-300 bg-stone-50/50'
                }`}
              >
                <div className={`w-full h-8 rounded-md mb-2 ${col.preview}`} />
                <div className="text-xs font-semibold text-stone-900 leading-snug">
                  {col.label}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Panel 3: Typography Pairings */}
        <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-sm space-y-4">
          <div className="border-b border-stone-100 pb-3">
            <h2 className="font-serif font-bold text-stone-900 text-base flex items-center gap-2">
              <Type className="w-4 h-4 text-amber-600" />
              <span>3. Typography Pairing (Rules 26-50)</span>
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              Maximum 2 font families, strict Latin subsets with font-display: swap.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {TYPOGRAPHY_OPTIONS.map((typo) => (
              <button
                key={typo.id}
                onClick={() => setSelectedTypo(typo.id)}
                className={`p-3.5 rounded-lg border text-left transition-all ${
                  selectedTypo === typo.id
                    ? 'border-amber-600 bg-amber-50/50 ring-2 ring-amber-600/20'
                    : 'border-stone-200 hover:border-stone-300 bg-stone-50/50'
                }`}
              >
                <div className="text-xs font-bold text-stone-900">{typo.label}</div>
                <div className="text-sm italic font-serif text-stone-600 mt-1">
                  "{typo.sample}"
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Panel 4: Link Reference Inspiration & Real Photos */}
        <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-sm space-y-4">
          <div className="border-b border-stone-100 pb-3">
            <h2 className="font-serif font-bold text-stone-900 text-base flex items-center gap-2">
              <ImageIcon className="w-4 h-4 text-amber-600" />
              <span>4. Real Photography & Reference Inspiration</span>
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              Link one of the 18 design inspirations or upload your genuine photos.
            </p>
          </div>

          {/* Reference selector */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-2">
              Select Design Reference Inspiration
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {SAMPLE_REFERENCES.slice(0, 8).map((ref) => (
                <button
                  key={ref.id}
                  onClick={() => setSelectedReference(ref.id)}
                  className={`p-2 rounded-lg border text-left transition-all ${
                    selectedReference === ref.id
                      ? 'border-amber-600 ring-2 ring-amber-500/20 bg-amber-50'
                      : 'border-stone-200 hover:border-stone-300 bg-stone-50'
                  }`}
                >
                  <img
                    src={ref.imageUrl}
                    alt={ref.title}
                    className="w-full h-16 object-cover rounded-md mb-1.5"
                  />
                  <div className="text-[11px] font-bold text-stone-900 line-clamp-1">
                    {ref.title.split('(')[0]}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Upload Real Photos */}
          <div className="pt-3 border-t border-stone-100">
            <label className="block text-xs font-semibold text-stone-700 mb-2">
              Upload Your Real Photos (Rule 131)
            </label>
            <div className="flex items-center gap-3">
              <label className="px-4 py-2 rounded-lg border border-stone-300 bg-stone-50 hover:bg-stone-100 text-stone-700 text-xs font-medium cursor-pointer inline-flex items-center gap-2 transition-colors">
                <Upload className="w-4 h-4 text-stone-500" />
                <span>Upload Photo (.webp / .png / .jpeg)</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>

              <span className="text-xs text-stone-500 font-mono">
                {uploadedPhotos.length} photo(s) added
              </span>
            </div>

            {uploadedPhotos.length > 0 && (
              <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
                {uploadedPhotos.map((url, idx) => (
                  <img
                    key={idx}
                    src={url}
                    alt={`Upload ${idx + 1}`}
                    className="w-16 h-16 object-cover rounded-lg border border-stone-200"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
