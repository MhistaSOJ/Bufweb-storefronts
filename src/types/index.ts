/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type CostTag = 'L' | 'M' | 'H' | 'none';

export interface DesignRule {
  id: number;
  name: string;
  categoryNumber: number;
  categoryName: string;
  cost: CostTag;
  description: string;
  selectionCriteria: string;
  applicableBusinessTypes: string[];
  compatibilityRequirements: string[];
  accessibilityConsiderations: string;
  performanceClassification: string;
  implementationGuidance: string;
  potentialConflicts: string[];
}

export type LayoutArchetype =
  | 'split-hero-asymmetric-grid'
  | 'bento-grid-showcase'
  | 'swiss-columnar-minimal'
  | 'editorial-magazine-spread'
  | 'stacked-sticky-cards'
  | 'centered-hero-single-action'
  | 'horizontal-rail-scroller'
  | 'layered-organic-canvas'
  | 'zig-zag-narrative'
  | 'big-stat-impact-matrix'
  | 'neo-brutalist-block-grid'
  | 'full-bleed-immersive'
  | 'multi-tab-catalog-suite'
  | 'timeline-process-journey'
  | 'masonry-visual-archive';

export type HeaderNav =
  | 'sticky-minimal-brand'
  | 'floating-island-pill'
  | 'split-logo-center'
  | 'utility-topbar-with-drawer'
  | 'monospace-technical-nav'
  | 'transparent-luxury-overlay'
  | 'neo-brutalist-bordered'
  | 'bottom-tab-mobile-primary'
  | 'editorial-stacked-masthead'
  | 'full-screen-curtain-trigger';

export type HeroComposition =
  | 'split-text-left-media-right'
  | 'giant-serif-headline-cutout'
  | 'centered-single-button-focus'
  | 'bento-quad-preview-tiles'
  | 'full-bleed-dark-overlay'
  | 'organic-curved-frame-blob'
  | 'layered-floating-card-overlap'
  | 'typography-oversized-monochrome'
  | 'stat-strip-under-headline'
  | 'media-strip-horizontal-preview';

export type SectionSequence =
  | 'hero-trust-features-showcase-pricing-faq-footer'
  | 'hero-bento-process-reviews-cta-footer'
  | 'hero-editorial-story-gallery-testimonials-contact-footer'
  | 'hero-stats-initiatives-impact-newsletter-footer'
  | 'hero-catalog-categories-specs-faq-footer'
  | 'hero-services-work-process-pricing-contact-footer'
  | 'hero-split-menu-hours-location-reviews-footer'
  | 'hero-statement-case-studies-clients-contact-footer'
  | 'hero-sermon-ministries-events-give-footer'
  | 'hero-treatments-stylists-before-after-booking-footer';

export type ContentDensity =
  | 'airy-spacious-luxury'
  | 'compact-swiss-density'
  | 'dense-technical-specs'
  | 'balanced-editorial'
  | 'visual-first-immersive';

export type GridStructure =
  | '12-col-asymmetric-rhythm'
  | '3-col-strict-swiss'
  | '4-col-bento-modular'
  | '2-col-balanced-editorial'
  | 'masonry-staggered'
  | '1-col-focused-longform';

export type CardTreatment =
  | 'neo-brutalist-border-hard-shadow'
  | 'frosted-glassmorphism-panel'
  | 'floating-rounded-zero-border'
  | 'minimalist-hairline-neutral'
  | 'dark-luxury-bronze-glow'
  | 'flat-color-block-organic'
  | 'claymorphism-soft-puff'
  | 'editorial-caption-bordered';

export type TypographyPairing =
  | 'serif-headline-sans-body'
  | 'grotesque-bold-display-geometric-sans'
  | 'monospace-technical-clean-sans'
  | 'humanist-sans-warm-serif'
  | 'handwritten-accent-clean-sans'
  | 'strict-swiss-neo-grotesque'
  | 'high-contrast-didone-editorial'
  | 'slab-serif-confident-sans';

export type ColourStrategy =
  | 'earthy-olive-sand-warm-neutral'
  | 'dark-luxury-near-black-gold'
  | 'neo-brutalist-bold-punch'
  | 'japandi-warm-cream-charcoal'
  | 'fresh-terracotta-lilac-soap'
  | 'electric-tech-cobalt-slate'
  | 'pastel-soft-mint-butter'
  | 'monochrome-single-crimson-accent'
  | 'botanical-forest-deep-copper'
  | 'sunlit-coral-peach-glow';

export type ShapeLanguage =
  | 'sharp-zero-radius-geometric'
  | 'organic-curved-wave-dividers'
  | 'soft-pill-rounded-9999px'
  | 'bento-smooth-rounded-24px'
  | 'layered-organic-blobs'
  | 'chamfered-industrial-angles';

export type InteractionPattern =
  | 'hover-lift-scroll-progress-stats'
  | 'staggered-reveal-lightbox-gallery'
  | 'smooth-tabs-counter-accordion'
  | 'before-after-slider-hover-tilt'
  | 'marquee-ticker-sticky-cta'
  | 'countup-numbers-form-micro-animation'
  | 'scroll-indicator-tap-scale-haptic';

export type FooterComposition =
  | 'mega-footer-4col-newsletter-social'
  | 'minimalist-bar-timezone-legal'
  | 'split-contact-hours-interactive-map'
  | 'dark-luxury-brandmark-curated-links'
  | 'action-banner-stacked-directory'
  | 'compact-centered-social-badges';

export interface TemplateDimensions {
  layoutArchetype: LayoutArchetype;
  headerNav: HeaderNav;
  heroComposition: HeroComposition;
  sectionSequence: SectionSequence;
  contentDensity: ContentDensity;
  gridStructure: GridStructure;
  cardTreatment: CardTreatment;
  typographyPairing: TypographyPairing;
  colourStrategy: ColourStrategy;
  shapeLanguage: ShapeLanguage;
  interactionPatterns: InteractionPattern;
  footerComposition: FooterComposition;
}

export interface ContentSlotDefinition {
  id: string;
  title: string;
  slotType: 'header' | 'hero' | 'trust' | 'features' | 'showcase' | 'process' | 'pricing' | 'social-proof' | 'contact' | 'footer';
  description: string;
  requiredAssets: string[];
  suggestedFields: string[];
  emptyStatePrompt: string;
}

export interface TemplateSpec {
  id: string; // e.g. "tpl_0001"
  name: string;
  description: string;
  industry: string;
  industrySynonyms: string[];
  businessTypes: string[];
  visualStyle: string;
  purpose: 'Commerce' | 'Portfolio' | 'Booking & Services' | 'Community & Cause' | 'Lead Generation' | 'Brand Showcase';
  performanceClass: 'L' | 'M' | 'H';
  dimensions: TemplateDimensions;
  activeRuleIds: number[];
  contentSlots: ContentSlotDefinition[];
  firstScreenFingerprint: string;
  tags: string[];
}

export interface DimensionDiffReport {
  pairCount: number;
  minDifferenceFound: number;
  averageDifference: number;
  passedPairwiseCheck: boolean;
  rejectedPairCount: number;
  firstScreenCollisions: number;
  distributionByDifferenceCount: Record<number, number>;
}

export interface ReferenceAnalysis {
  id: string;
  title: string;
  imageUrl: string;
  extractedColors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
  };
  dominantArchetype: LayoutArchetype;
  recommendedTypography: TypographyPairing;
  detectedVisualStyles: string[];
  matchedRuleIds: number[];
  notes: string;
}

export interface DraftWebsite {
  id: string;
  templateId: string;
  name: string;
  businessName: string;
  industry: string;
  customPalette?: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
  };
  customTypography?: TypographyPairing;
  slotValues: Record<string, string>;
  uploadedImages: string[];
  createdAt: string;
  updatedAt: string;
}
