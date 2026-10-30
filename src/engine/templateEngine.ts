/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  CardTreatment,
  ColourStrategy,
  ContentDensity,
  ContentSlotDefinition,
  FooterComposition,
  GridStructure,
  HeaderNav,
  HeroComposition,
  InteractionPattern,
  LayoutArchetype,
  SectionSequence,
  ShapeLanguage,
  TemplateDimensions,
  TemplateSpec,
  TypographyPairing,
} from '../types';
import { INDUSTRIES, IndustryDefinition } from './taxonomy';

// Deterministic PRNG (Mulberry32)
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const ARCHETYPES: LayoutArchetype[] = [
  'split-hero-asymmetric-grid',
  'bento-grid-showcase',
  'swiss-columnar-minimal',
  'editorial-magazine-spread',
  'stacked-sticky-cards',
  'centered-hero-single-action',
  'horizontal-rail-scroller',
  'layered-organic-canvas',
  'zig-zag-narrative',
  'big-stat-impact-matrix',
  'neo-brutalist-block-grid',
  'full-bleed-immersive',
  'multi-tab-catalog-suite',
  'timeline-process-journey',
  'masonry-visual-archive',
];

const HEADERS: HeaderNav[] = [
  'sticky-minimal-brand',
  'floating-island-pill',
  'split-logo-center',
  'utility-topbar-with-drawer',
  'monospace-technical-nav',
  'transparent-luxury-overlay',
  'neo-brutalist-bordered',
  'bottom-tab-mobile-primary',
  'editorial-stacked-masthead',
  'full-screen-curtain-trigger',
];

const HEROES: HeroComposition[] = [
  'split-text-left-media-right',
  'giant-serif-headline-cutout',
  'centered-single-button-focus',
  'bento-quad-preview-tiles',
  'full-bleed-dark-overlay',
  'organic-curved-frame-blob',
  'layered-floating-card-overlap',
  'typography-oversized-monochrome',
  'stat-strip-under-headline',
  'media-strip-horizontal-preview',
];

const SEQUENCES: SectionSequence[] = [
  'hero-trust-features-showcase-pricing-faq-footer',
  'hero-bento-process-reviews-cta-footer',
  'hero-editorial-story-gallery-testimonials-contact-footer',
  'hero-stats-initiatives-impact-newsletter-footer',
  'hero-catalog-categories-specs-faq-footer',
  'hero-services-work-process-pricing-contact-footer',
  'hero-split-menu-hours-location-reviews-footer',
  'hero-statement-case-studies-clients-contact-footer',
  'hero-sermon-ministries-events-give-footer',
  'hero-treatments-stylists-before-after-booking-footer',
];

const DENSITIES: ContentDensity[] = [
  'airy-spacious-luxury',
  'compact-swiss-density',
  'dense-technical-specs',
  'balanced-editorial',
  'visual-first-immersive',
];

const GRIDS: GridStructure[] = [
  '12-col-asymmetric-rhythm',
  '3-col-strict-swiss',
  '4-col-bento-modular',
  '2-col-balanced-editorial',
  'masonry-staggered',
  '1-col-focused-longform',
];

const CARDS: CardTreatment[] = [
  'neo-brutalist-border-hard-shadow',
  'frosted-glassmorphism-panel',
  'floating-rounded-zero-border',
  'minimalist-hairline-neutral',
  'dark-luxury-bronze-glow',
  'flat-color-block-organic',
  'claymorphism-soft-puff',
  'editorial-caption-bordered',
];

const TYPOGRAPHIES: TypographyPairing[] = [
  'serif-headline-sans-body',
  'grotesque-bold-display-geometric-sans',
  'monospace-technical-clean-sans',
  'humanist-sans-warm-serif',
  'handwritten-accent-clean-sans',
  'strict-swiss-neo-grotesque',
  'high-contrast-didone-editorial',
  'slab-serif-confident-sans',
];

const COLOURS: ColourStrategy[] = [
  'earthy-olive-sand-warm-neutral',
  'dark-luxury-near-black-gold',
  'neo-brutalist-bold-punch',
  'japandi-warm-cream-charcoal',
  'fresh-terracotta-lilac-soap',
  'electric-tech-cobalt-slate',
  'pastel-soft-mint-butter',
  'monochrome-single-crimson-accent',
  'botanical-forest-deep-copper',
  'sunlit-coral-peach-glow',
];

const SHAPES: ShapeLanguage[] = [
  'sharp-zero-radius-geometric',
  'organic-curved-wave-dividers',
  'soft-pill-rounded-9999px',
  'bento-smooth-rounded-24px',
  'layered-organic-blobs',
  'chamfered-industrial-angles',
];

const INTERACTIONS: InteractionPattern[] = [
  'hover-lift-scroll-progress-stats',
  'staggered-reveal-lightbox-gallery',
  'smooth-tabs-counter-accordion',
  'before-after-slider-hover-tilt',
  'marquee-ticker-sticky-cta',
  'countup-numbers-form-micro-animation',
  'scroll-indicator-tap-scale-haptic',
];

const FOOTERS: FooterComposition[] = [
  'mega-footer-4col-newsletter-social',
  'minimalist-bar-timezone-legal',
  'split-contact-hours-interactive-map',
  'dark-luxury-brandmark-curated-links',
  'action-banner-stacked-directory',
  'compact-centered-social-badges',
];

// Compatibility rules: ensure harmonious combinations
function isCoherentCombination(dim: TemplateDimensions): boolean {
  // 1. Neo-brutalist archetype should not have dark-luxury or pastel-soft styling
  if (dim.layoutArchetype === 'neo-brutalist-block-grid') {
    if (dim.cardTreatment !== 'neo-brutalist-border-hard-shadow') return false;
    if (dim.colourStrategy === 'dark-luxury-near-black-gold') return false;
  }
  // 2. Swiss columnar minimal should not use organic blobs or playful claymorphism
  if (dim.layoutArchetype === 'swiss-columnar-minimal') {
    if (dim.shapeLanguage === 'layered-organic-blobs' || dim.shapeLanguage === 'organic-curved-wave-dividers') return false;
    if (dim.cardTreatment === 'claymorphism-soft-puff') return false;
  }
  // 3. Dark luxury cards pair best with dark luxury or monochrome colors
  if (dim.cardTreatment === 'dark-luxury-bronze-glow') {
    if (dim.colourStrategy !== 'dark-luxury-near-black-gold' && dim.colourStrategy !== 'monochrome-single-crimson-accent') return false;
  }
  // 4. Glassmorphism shouldn't combine with neo-brutalist hard borders
  if (dim.cardTreatment === 'frosted-glassmorphism-panel') {
    if (dim.shapeLanguage === 'sharp-zero-radius-geometric') return false;
    if (dim.colourStrategy === 'neo-brutalist-bold-punch') return false;
  }
  // 5. Monospace technical nav pairs best with monospace or grotesque typography
  if (dim.headerNav === 'monospace-technical-nav') {
    if (dim.typographyPairing === 'handwritten-accent-clean-sans') return false;
  }
  // 6. Editorial stacked masthead pairs best with serif typography
  if (dim.headerNav === 'editorial-stacked-masthead') {
    if (dim.typographyPairing !== 'serif-headline-sans-body' && dim.typographyPairing !== 'high-contrast-didone-editorial') return false;
  }
  return true;
}

// Calculate the number of dimension differences between two sets of dimensions
export function countDimensionDifferences(a: TemplateDimensions, b: TemplateDimensions): number {
  let diff = 0;
  if (a.layoutArchetype !== b.layoutArchetype) diff++;
  if (a.headerNav !== b.headerNav) diff++;
  if (a.heroComposition !== b.heroComposition) diff++;
  if (a.sectionSequence !== b.sectionSequence) diff++;
  if (a.contentDensity !== b.contentDensity) diff++;
  if (a.gridStructure !== b.gridStructure) diff++;
  if (a.cardTreatment !== b.cardTreatment) diff++;
  if (a.typographyPairing !== b.typographyPairing) diff++;
  if (a.colourStrategy !== b.colourStrategy) diff++;
  if (a.shapeLanguage !== b.shapeLanguage) diff++;
  if (a.interactionPatterns !== b.interactionPatterns) diff++;
  if (a.footerComposition !== b.footerComposition) diff++;
  return diff;
}

// Generates standard content slots according to archetype and sequence
function createContentSlotsForTemplate(
  archetype: LayoutArchetype,
  sequence: SectionSequence,
  industry: IndustryDefinition
): ContentSlotDefinition[] {
  return [
    {
      id: 'slot-header',
      title: 'Header & Navigation Slot',
      slotType: 'header',
      description: 'Brandmark logo asset, primary navigation links, contact telephone / WhatsApp button.',
      requiredAssets: ['brand-logo-svg', 'navigation-menu-items'],
      suggestedFields: ['Logo image or text mark', 'Call-to-action button label', 'Contact channel link'],
      emptyStatePrompt: 'Upload your brandmark SVG/PNG logo and specify 3-5 main page destinations.'
    },
    {
      id: 'slot-hero',
      title: 'Hero Stage Slot',
      slotType: 'hero',
      description: 'Primary value proposition, eyebrow category badge, lead headline, supporting statement, main CTA.',
      requiredAssets: ['primary-hero-photo-or-showcase-visual'],
      suggestedFields: ['Eyebrow badge text', 'Lead H1 benefit headline', '15-word value proposition', 'Primary action label'],
      emptyStatePrompt: 'Add your business headline and upload one authentic high-resolution photo.'
    },
    {
      id: 'slot-trust',
      title: 'Trust & Proof Bar Slot',
      slotType: 'trust',
      description: 'Four verifiable customer promises, certifications, or statistics placed right under the hero.',
      requiredAssets: ['4-trust-claims-with-icons'],
      suggestedFields: ['Claim 1 (e.g. Free delivery)', 'Claim 2 (Licensed & Insured)', 'Claim 3 (Real reviews)', 'Claim 4 (Response promise)'],
      emptyStatePrompt: 'Specify your four core customer reassurance claims or verified credentials.'
    },
    {
      id: 'slot-features',
      title: 'Features & Offerings Slot',
      slotType: 'features',
      description: 'Core services, products, or department categories presented in the configured grid architecture.',
      requiredAssets: ['offering-item-titles', 'offering-item-descriptions', 'offering-photos'],
      suggestedFields: ['Card 1 title & body', 'Card 2 title & body', 'Card 3 title & body', 'Action links'],
      emptyStatePrompt: 'Provide details for 3-6 of your primary services, products, or core offerings.'
    },
    {
      id: 'slot-showcase',
      title: 'Showcase / Gallery Slot',
      slotType: 'showcase',
      description: 'Real portfolio work, signature dishes, room photos, or transformation results.',
      requiredAssets: ['owner-real-photos'],
      suggestedFields: ['Gallery titles', 'Descriptive captions for alt tags', 'Filter tags'],
      emptyStatePrompt: 'Upload real photographs of your actual craft, venue, dishes, or completed projects.'
    },
    {
      id: 'slot-contact',
      title: 'Direct Action & Booking Slot',
      slotType: 'contact',
      description: 'Direct WhatsApp inquiry, appointment scheduler, or simple 3-field contact form.',
      requiredAssets: ['official-phone-or-whatsapp-number', 'physical-address'],
      suggestedFields: ['Phone number with country code', 'Physical address & landmark', 'Operating hours'],
      emptyStatePrompt: 'Enter your WhatsApp/phone number, physical address with landmark, and weekly hours.'
    },
    {
      id: 'slot-footer',
      title: 'Footer & Legal Slot',
      slotType: 'footer',
      description: 'Full business credentials, opening hours, social handles, and copyright notice.',
      requiredAssets: ['social-handles', 'operating-schedule'],
      suggestedFields: ['Weekly operating hours table', 'Official social handles', 'Registration/licence numbers'],
      emptyStatePrompt: 'Add your social handles, weekly hours, and physical address.'
    }
  ];
}

// Calculate performance classification [L], [M], [H]
function calculatePerformanceClass(dim: TemplateDimensions): 'L' | 'M' | 'H' {
  if (
    dim.cardTreatment === 'frosted-glassmorphism-panel' ||
    dim.heroComposition === 'full-bleed-dark-overlay' ||
    dim.interactionPatterns === 'before-after-slider-hover-tilt'
  ) {
    return 'H';
  }
  if (
    dim.cardTreatment === 'claymorphism-soft-puff' ||
    dim.interactionPatterns === 'marquee-ticker-sticky-cta' ||
    dim.layoutArchetype === 'stacked-sticky-cards'
  ) {
    return 'M';
  }
  return 'L';
}

// Active rule IDs mapping
function deriveActiveRuleIds(dim: TemplateDimensions, industry: IndustryDefinition): number[] {
  const rules = new Set<number>(industry.coreRuleIds);

  // Layout rules
  if (dim.layoutArchetype === 'split-hero-asymmetric-grid') rules.add(71);
  if (dim.layoutArchetype === 'bento-grid-showcase') rules.add(6);
  if (dim.layoutArchetype === 'swiss-columnar-minimal') rules.add(5);
  if (dim.layoutArchetype === 'editorial-magazine-spread') rules.add(4);
  if (dim.layoutArchetype === 'stacked-sticky-cards') rules.add(80);
  if (dim.layoutArchetype === 'centered-hero-single-action') rules.add(73);
  if (dim.layoutArchetype === 'horizontal-rail-scroller') rules.add(77);
  if (dim.layoutArchetype === 'layered-organic-canvas') rules.add(8);
  if (dim.layoutArchetype === 'zig-zag-narrative') rules.add(86);
  if (dim.layoutArchetype === 'big-stat-impact-matrix') rules.add(87);
  if (dim.layoutArchetype === 'neo-brutalist-block-grid') rules.add(2);
  if (dim.layoutArchetype === 'full-bleed-immersive') rules.add(72);
  if (dim.layoutArchetype === 'timeline-process-journey') rules.add(89);
  if (dim.layoutArchetype === 'masonry-visual-archive') rules.add(75);

  // Header rules
  if (dim.headerNav === 'sticky-minimal-brand') rules.add(78);
  if (dim.headerNav === 'bottom-tab-mobile-primary') rules.add(96);
  if (dim.headerNav === 'full-screen-curtain-trigger') rules.add(98);
  if (dim.headerNav === 'monospace-technical-nav') rules.add(40);

  // Typography rules
  if (dim.typographyPairing === 'serif-headline-sans-body') rules.add(26);
  if (dim.typographyPairing === 'grotesque-bold-display-geometric-sans') rules.add(27);
  if (dim.typographyPairing === 'monospace-technical-clean-sans') rules.add(40);
  if (dim.typographyPairing === 'handwritten-accent-clean-sans') rules.add(39);

  // Colour rules
  if (dim.colourStrategy === 'earthy-olive-sand-warm-neutral') rules.add(15);
  if (dim.colourStrategy === 'dark-luxury-near-black-gold') rules.add(7);
  if (dim.colourStrategy === 'neo-brutalist-bold-punch') rules.add(2);
  if (dim.colourStrategy === 'fresh-terracotta-lilac-soap') rules.add(59);
  if (dim.colourStrategy === 'pastel-soft-mint-butter') rules.add(14);
  if (dim.colourStrategy === 'monochrome-single-crimson-accent') rules.add(13);

  // Interaction rules
  if (dim.interactionPatterns === 'hover-lift-scroll-progress-stats') {
    rules.add(101);
    rules.add(111);
  }
  if (dim.interactionPatterns === 'staggered-reveal-lightbox-gallery') {
    rules.add(105);
    rules.add(115);
  }
  if (dim.interactionPatterns === 'before-after-slider-hover-tilt') {
    rules.add(116);
    rules.add(123);
  }
  if (dim.interactionPatterns === 'marquee-ticker-sticky-cta') {
    rules.add(50);
    rules.add(125);
  }
  if (dim.interactionPatterns === 'countup-numbers-form-micro-animation') {
    rules.add(107);
    rules.add(118);
  }

  // Universal quality rules applied across every template
  rules.add(33); // Line length 45-75 chars
  rules.add(35); // text-wrap: balance
  rules.add(44); // 2 font families max
  rules.add(49); // One H1 per page
  rules.add(55); // 4.5:1 contrast
  rules.add(78); // Sticky header
  rules.add(131); // Real photos only
  rules.add(156); // One primary action per screen
  rules.add(157); // WhatsApp click to chat
  rules.add(187); // 44px+ touch targets
  rules.add(206); // Design at 360px first
  rules.add(209); // First-load budget under 500KB
  rules.add(226); // Visible focus states
  rules.add(239); // Buttons start with verb

  return Array.from(rules).sort((a, b) => a - b);
}

// Generate style-based name
const STYLE_PREFIXES = [
  'Aura', 'Nordic', 'Atelier', 'Verve', 'Studio', 'Kanso', 'Kinfolk', 'Lumina',
  'Nexus', 'Haven', 'Apex', 'Sol', 'Maison', 'Forma', 'Vanguard', 'Elysian',
  'Zenith', 'Prism', 'Terra', 'Verdant', 'Craft', 'Monolith', 'Origin', 'Pulse',
  'Nova', 'Brio', 'Epoch', 'Meridian', 'Echo', 'Strata', 'Modus', 'Scribe'
];

const STYLE_SUFFIXES = [
  'Editorial', 'Minimal', 'Bento', 'Atelier', 'Canvas', 'Sphere', 'Rhythm',
  'Collective', 'Grid', 'Archive', 'Suite', 'Gazette', 'Matrix', 'Journal',
  'Foundry', 'Exhibit', 'Index', 'Sanctuary', 'Chamber', 'Space'
];

/**
 * Deterministically generates AT LEAST 1,000 distinct template specifications.
 * Each template differs from every other template in at least 6 out of 12 dimensions.
 * Near-identical first-screen compositions are strictly rejected.
 */
export function generateTemplateCatalogue(targetCount = 1008, seed = 42): TemplateSpec[] {
  const rand = mulberry32(seed);
  const templates: TemplateSpec[] = [];
  const firstScreenSignatures = new Set<string>();

  let idCounter = 1;
  let attempts = 0;
  const maxAttempts = 1500000;

  while (templates.length < targetCount && attempts < maxAttempts) {
    attempts++;

    // Sample each dimension using deterministic PRNG across the 72.5 billion combinations
    const arch = ARCHETYPES[Math.floor(rand() * ARCHETYPES.length)];
    const head = HEADERS[Math.floor(rand() * HEADERS.length)];
    const hero = HEROES[Math.floor(rand() * HEROES.length)];
    const seq = SEQUENCES[Math.floor(rand() * SEQUENCES.length)];
    const dens = DENSITIES[Math.floor(rand() * DENSITIES.length)];
    const grid = GRIDS[Math.floor(rand() * GRIDS.length)];
    const card = CARDS[Math.floor(rand() * CARDS.length)];
    const typo = TYPOGRAPHIES[Math.floor(rand() * TYPOGRAPHIES.length)];
    const col = COLOURS[Math.floor(rand() * COLOURS.length)];
    const shape = SHAPES[Math.floor(rand() * SHAPES.length)];
    const inter = INTERACTIONS[Math.floor(rand() * INTERACTIONS.length)];
    const foot = FOOTERS[Math.floor(rand() * FOOTERS.length)];

    const dims: TemplateDimensions = {
      layoutArchetype: arch,
      headerNav: head,
      heroComposition: hero,
      sectionSequence: seq,
      contentDensity: dens,
      gridStructure: grid,
      cardTreatment: card,
      typographyPairing: typo,
      colourStrategy: col,
      shapeLanguage: shape,
      interactionPatterns: inter,
      footerComposition: foot,
    };

    // 1. Compatibility check
    if (!isCoherentCombination(dims)) {
      continue;
    }

    // 2. First-screen uniqueness check:
    // Reject templates with identical layoutArchetype + headerNav + heroComposition + cardTreatment
    const firstScreenSig = `${dims.layoutArchetype}|${dims.headerNav}|${dims.heroComposition}|${dims.cardTreatment}`;
    if (firstScreenSignatures.has(firstScreenSig)) {
      continue;
    }

    // 3. Difference check against existing accepted templates:
    // Must differ in at least 6 out of 12 dimensions from EVERY already accepted template!
    let passesDifferenceCheck = true;
    for (let i = 0; i < templates.length; i++) {
      const diff = countDimensionDifferences(dims, templates[i].dimensions);
      if (diff < 6) {
        passesDifferenceCheck = false;
        break;
      }
    }

    if (!passesDifferenceCheck) {
      continue;
    }

    // Candidate passed all checks! Register template
    firstScreenSignatures.add(firstScreenSig);

    const indIndex = (templates.length) % INDUSTRIES.length;
    const ind = INDUSTRIES[indIndex];
    const prefix = STYLE_PREFIXES[Math.floor(rand() * STYLE_PREFIXES.length)];
    const suffix = STYLE_SUFFIXES[Math.floor(rand() * STYLE_SUFFIXES.length)];
    const id = `tpl_${String(idCounter).padStart(4, '0')}`;
    idCounter++;

    const templateName = `${prefix} ${suffix} - ${ind.name.split('&')[0].trim()}`;
    const description = `A distinct ${dims.contentDensity.replace(/-/g, ' ')} ${ind.name} website template built around a ${dims.layoutArchetype.replace(/-/g, ' ')} structure, ${dims.typographyPairing.replace(/-/g, ' ')}, and a ${dims.colourStrategy.replace(/-/g, ' ')} palette.`;

    const activeRules = deriveActiveRuleIds(dims, ind);
    const perfClass = calculatePerformanceClass(dims);
    const contentSlots = createContentSlotsForTemplate(dims.layoutArchetype, dims.sectionSequence, ind);

    const spec: TemplateSpec = {
      id,
      name: templateName,
      description,
      industry: ind.name,
      industrySynonyms: ind.synonyms,
      businessTypes: ind.businessTypes,
      visualStyle: dims.layoutArchetype.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
      purpose: ind.defaultPurpose,
      performanceClass: perfClass,
      dimensions: dims,
      activeRuleIds: activeRules,
      contentSlots,
      firstScreenFingerprint: firstScreenSig,
      tags: [
        ...ind.synonyms,
        ind.id,
        dims.layoutArchetype,
        dims.colourStrategy,
        dims.typographyPairing,
        dims.cardTreatment,
        perfClass.toLowerCase(),
      ],
    };

    templates.push(spec);
  }

  return templates;
}

// Singleton cache of the 1,000+ generated templates so it is computed once
let cachedCatalogue: TemplateSpec[] | null = null;

export function getTemplateCatalogue(): TemplateSpec[] {
  if (!cachedCatalogue) {
    cachedCatalogue = generateTemplateCatalogue(1008, 42);
  }
  return cachedCatalogue;
}
