/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  TemplateSpec,
  TemplateDimensions,
  ContentSlotDefinition,
  LayoutArchetype,
  HeaderNav,
  HeroComposition,
  SectionSequence,
  ContentDensity,
  GridStructure,
  CardTreatment,
  TypographyPairing,
  ColourStrategy,
  ShapeLanguage,
  InteractionPattern,
  FooterComposition,
} from '../types';
import {
  HERO_BLOCKS,
  TRUST_BLOCKS,
  SHOWCASE_BLOCKS,
  NARRATIVE_BLOCKS,
  FOOTER_BLOCKS,
  ModularBlockDefinition,
} from './modularBlocks';

export interface ModularRecipe {
  heroId: string;
  trustId: string;
  showcaseId: string;
  narrativeId: string;
  footerId: string;
  hero: ModularBlockDefinition;
  trust: ModularBlockDefinition;
  showcase: ModularBlockDefinition;
  narrative: ModularBlockDefinition;
  footer: ModularBlockDefinition;
}

export interface CombinationTemplateSpec extends TemplateSpec {
  isModularCombination: true;
  recipe: ModularRecipe;
  sourcesUsed: string[];
  combinationNumber: number;
}

// 1. The Single Baseline Sample retained from the previous 1,000 templates
export const SAMPLE_BASELINE_TEMPLATE: TemplateSpec = {
  id: 'sample_tpl_0001',
  name: 'Procedural Baseline Sample #1 (From Previous Set)',
  description:
    'The single representative baseline retained from the previous 1,000 procedural templates. Demonstrates standard centered hero, feature cards, and clean SaaS structure for direct contrast against the 300 rich modular combinations.',
  industry: 'Software & Technology',
  industrySynonyms: ['tech', 'saas', 'software', 'cloud', 'digital', 'developer', 'startup'],
  businessTypes: ['B2B SaaS', 'Cloud Platform', 'Developer Tools', 'Tech Startup'],
  visualStyle: 'Classic SaaS Clean Modern',
  purpose: 'Commerce',
  performanceClass: 'L',
  dimensions: {
    layoutArchetype: 'split-hero-asymmetric-grid',
    headerNav: 'sticky-minimal-brand',
    heroComposition: 'centered-single-button-focus',
    sectionSequence: 'hero-trust-features-showcase-pricing-faq-footer',
    contentDensity: 'balanced-editorial',
    gridStructure: '12-col-asymmetric-rhythm',
    cardTreatment: 'floating-rounded-zero-border',
    typographyPairing: 'grotesque-bold-display-geometric-sans',
    colourStrategy: 'electric-tech-cobalt-slate',
    shapeLanguage: 'soft-pill-rounded-9999px',
    interactionPatterns: 'hover-lift-scroll-progress-stats',
    footerComposition: 'mega-footer-4col-newsletter-social',
  },
  activeRuleIds: [3, 20, 26, 52, 73, 85, 88, 101, 103, 112, 171, 191],
  contentSlots: [
    {
      id: 'slot_header',
      title: 'Navigation Header',
      slotType: 'header',
      description: 'Standard brand mark with product, solutions, and sign in links',
      requiredAssets: ['brand_logo'],
      suggestedFields: ['brand_name', 'nav_links', 'cta_button'],
      emptyStatePrompt: 'Enter company name and menu links',
    },
    {
      id: 'slot_hero',
      title: 'Hero Section',
      slotType: 'hero',
      description: 'Centered headline with value proposition and dual action buttons',
      requiredAssets: ['hero_preview'],
      suggestedFields: ['headline', 'subheadline', 'cta_primary', 'cta_secondary'],
      emptyStatePrompt: 'Write a punchy headline under 8 words',
    },
    {
      id: 'slot_trust',
      title: 'Trust Metrics Bar',
      slotType: 'trust',
      description: '4-column quantitative proof points (Uptime, Users, Rating, Support)',
      requiredAssets: [],
      suggestedFields: ['metric_1', 'metric_2', 'metric_3', 'metric_4'],
      emptyStatePrompt: 'Add key quantifiable company metrics',
    },
    {
      id: 'slot_features',
      title: 'Feature Cards Grid',
      slotType: 'features',
      description: '3 cards showcasing core product capabilities and icons',
      requiredAssets: ['feature_icons'],
      suggestedFields: ['feature_titles', 'descriptions'],
      emptyStatePrompt: 'Detail your 3 best features',
    },
    {
      id: 'slot_faq',
      title: 'Interactive FAQ Accordion',
      slotType: 'process',
      description: 'Common buyer questions with interactive expander',
      requiredAssets: [],
      suggestedFields: ['questions', 'answers'],
      emptyStatePrompt: 'Provide 4 helpful FAQ answers',
    },
    {
      id: 'slot_footer',
      title: 'Mega Directory Footer',
      slotType: 'footer',
      description: 'Standard 4-column organized links and legal statements',
      requiredAssets: [],
      suggestedFields: ['columns', 'copyright'],
      emptyStatePrompt: 'Add directory links and copyright',
    },
  ],
  firstScreenFingerprint: 'centered-single-button-focus|sticky-minimal-brand|electric-tech-cobalt-slate',
  tags: ['baseline', 'sample', 'procedural', 'saas', 'tech', 'classic'],
};

// Curated Industry and Style pairings for the 300 combinations
const CURATED_THEMES = [
  {
    industry: 'Fashion & Luxury Apparel',
    synonyms: ['clothing', 'style', 'boutique', 'couture', 'lookbook', 'wardrobe', 'model'],
    purpose: 'Commerce' as const,
    style: 'Luxury Editorial & Outlined Serif',
    colourStrategy: 'earthy-olive-sand-warm-neutral' as ColourStrategy,
    typography: 'high-contrast-didone-editorial' as TypographyPairing,
    archetype: 'editorial-magazine-spread' as LayoutArchetype,
  },
  {
    industry: 'Architecture & Interior Staging',
    synonyms: ['furniture', 'living', 'home', 'decor', 'interior', 'spatial', 'villa'],
    purpose: 'Brand Showcase' as const,
    style: 'Contemporary Warm Slate & Bento Architecture',
    colourStrategy: 'japandi-warm-cream-charcoal' as ColourStrategy,
    typography: 'grotesque-bold-display-geometric-sans' as TypographyPairing,
    archetype: 'bento-grid-showcase' as LayoutArchetype,
  },
  {
    industry: 'Acoustic Engineering & Audio Hardware',
    synonyms: ['speaker', 'audio', 'sound', 'hifi', 'music', 'headphones', 'hardware'],
    purpose: 'Commerce' as const,
    style: 'French Monumental Grotesque & Plinth Showcase',
    colourStrategy: 'monochrome-single-crimson-accent' as ColourStrategy,
    typography: 'grotesque-bold-display-geometric-sans' as TypographyPairing,
    archetype: 'split-hero-asymmetric-grid' as LayoutArchetype,
  },
  {
    industry: 'Digital Product Design & Creative Studio',
    synonyms: ['design', 'portfolio', 'ui', 'ux', 'product', 'agency', 'framer', 'webflow'],
    purpose: 'Portfolio' as const,
    style: 'Silicon Valley Safari & Coral Mesh Glow',
    colourStrategy: 'sunlit-coral-peach-glow' as ColourStrategy,
    typography: 'humanist-sans-warm-serif' as TypographyPairing,
    archetype: 'centered-hero-single-action' as LayoutArchetype,
  },
  {
    industry: 'Botanical Apothecary & Handcrafted Goods',
    synonyms: ['soap', 'organic', 'skincare', 'natural', 'handmade', 'artisan', 'botanical'],
    purpose: 'Commerce' as const,
    style: 'Terracotta Wavy Color-Block & Organic Seal',
    colourStrategy: 'fresh-terracotta-lilac-soap' as ColourStrategy,
    typography: 'serif-headline-sans-body' as TypographyPairing,
    archetype: 'layered-organic-canvas' as LayoutArchetype,
  },
  {
    industry: 'Specialty Coffee Roastery & Cafe',
    synonyms: ['coffee', 'roaster', 'beans', 'espresso', 'cafe', 'brew', 'single-origin'],
    purpose: 'Commerce' as const,
    style: 'Strict Swiss Monospace & Altitude Data Matrix',
    colourStrategy: 'monochrome-single-crimson-accent' as ColourStrategy,
    typography: 'monospace-technical-clean-sans' as TypographyPairing,
    archetype: 'swiss-columnar-minimal' as LayoutArchetype,
  },
  {
    industry: 'Community Fellowship & Sacred Spaces',
    synonyms: ['church', 'worship', 'community', 'fellowship', 'gospel', 'sanctuary', 'faith'],
    purpose: 'Community & Cause' as const,
    style: 'Cathedral Crimson & Classical Engravings',
    colourStrategy: 'dark-luxury-near-black-gold' as ColourStrategy,
    typography: 'serif-headline-sans-body' as TypographyPairing,
    archetype: 'full-bleed-immersive' as LayoutArchetype,
  },
  {
    industry: 'Modern Worship & Outreach Ministries',
    synonyms: ['ministry', 'outreach', 'service', 'sermon', 'gathering', 'volunteer'],
    purpose: 'Community & Cause' as const,
    style: 'Stage Lighting Concert & Live Stream Broadcast',
    colourStrategy: 'electric-tech-cobalt-slate' as ColourStrategy,
    typography: 'slab-serif-confident-sans' as TypographyPairing,
    archetype: 'zig-zag-narrative' as LayoutArchetype,
  },
  {
    industry: 'Multidisciplinary Creative Atelier',
    synonyms: ['atelier', 'branding', 'art', 'curation', 'spatial', 'sculpture'],
    purpose: 'Portfolio' as const,
    style: 'Kinfolk Curved Waves & Olive Green Staging',
    colourStrategy: 'earthy-olive-sand-warm-neutral' as ColourStrategy,
    typography: 'serif-headline-sans-body' as TypographyPairing,
    archetype: 'timeline-process-journey' as LayoutArchetype,
  },
  {
    industry: 'High-End Spatial Object Gallery',
    synonyms: ['sculpture', 'gallery', 'bronze', 'ceramic', '3d', 'luxury', 'museum'],
    purpose: 'Brand Showcase' as const,
    style: 'Warm Caramel 3D Spatial & Architectural Arches',
    colourStrategy: 'botanical-forest-deep-copper' as ColourStrategy,
    typography: 'high-contrast-didone-editorial' as TypographyPairing,
    archetype: 'bento-grid-showcase' as LayoutArchetype,
  },
  {
    industry: 'Executive Consulting & Strategy Advisory',
    synonyms: ['consulting', 'advisory', 'strategy', 'finance', 'management', 'corporate'],
    purpose: 'Lead Generation' as const,
    style: 'Architectural Bento & Verified Endorsements',
    colourStrategy: 'japandi-warm-cream-charcoal' as ColourStrategy,
    typography: 'grotesque-bold-display-geometric-sans' as TypographyPairing,
    archetype: 'big-stat-impact-matrix' as LayoutArchetype,
  },
  {
    industry: 'Sustainable Wellness & Mindful Retreats',
    synonyms: ['retreat', 'wellness', 'yoga', 'mindfulness', 'spa', 'nature', 'healing'],
    purpose: 'Booking & Services' as const,
    style: 'Organic Waves & 5-Step Thoughtful Journey',
    colourStrategy: 'pastel-soft-mint-butter' as ColourStrategy,
    typography: 'serif-headline-sans-body' as TypographyPairing,
    archetype: 'layered-organic-canvas' as LayoutArchetype,
  },
];

// Generates exactly 300 unique combinations
export function generate300Combinations(): CombinationTemplateSpec[] {
  const combinations: CombinationTemplateSpec[] = [];
  const recipeSet = new Set<string>();

  const heroes = HERO_BLOCKS;
  const trusts = TRUST_BLOCKS;
  const showcases = SHOWCASE_BLOCKS;
  const narratives = NARRATIVE_BLOCKS;
  const footers = FOOTER_BLOCKS;

  let index = 0;

  // Interleaved permutation guaranteeing 300 unique combinations with rich variety
  for (let h = 0; h < heroes.length && combinations.length < 300; h++) {
    for (let s = 0; s < showcases.length && combinations.length < 300; s++) {
      for (let t = 0; t < trusts.length && combinations.length < 300; t++) {
        for (let n = 0; n < narratives.length && combinations.length < 300; n++) {
          for (let f = 0; f < footers.length && combinations.length < 300; f++) {
            if (combinations.length >= 300) break;

            const hero = heroes[(h + s * 2 + t) % heroes.length];
            const trust = trusts[(t + n * 3 + f) % trusts.length];
            const showcase = showcases[(s + f * 5 + h) % showcases.length];
            const narrative = narratives[(n + h * 7 + s) % narratives.length];
            const footer = footers[(f + t * 11 + n) % footers.length];

            const recipeKey = `${hero.id}|${trust.id}|${showcase.id}|${narrative.id}|${footer.id}`;

            const sourcesUsed = Array.from(
              new Set([hero.sourceName, trust.sourceName, showcase.sourceName, narrative.sourceName, footer.sourceName])
            );

            // Require blending at least 2 distinct sources
            if (sourcesUsed.length < 2) continue;

            if (!recipeSet.has(recipeKey)) {
              recipeSet.add(recipeKey);
              index++;

              const theme = CURATED_THEMES[(index - 1) % CURATED_THEMES.length];
              const combId = `comb_${String(index).padStart(4, '0')}`;

      // Determine highest performance class (H > M > L)
      const perfList = [hero.performance, trust.performance, showcase.performance, narrative.performance, footer.performance];
      const performanceClass = perfList.includes('H') ? 'H' : perfList.includes('M') ? 'M' : 'L';

      // Pick descriptive name highlighting the primary blend
      const name = `${hero.sourceName} × ${showcase.sourceName} (${theme.industry.split('&')[0].trim()})`;

      const description = `Modular composition blending ${hero.sourceName}'s ${hero.name.toLowerCase()} with ${trust.sourceName}'s ${trust.name.toLowerCase()}, ${showcase.sourceName}'s ${showcase.name.toLowerCase()}, ${narrative.sourceName}'s ${narrative.name.toLowerCase()}, and ${footer.sourceName}'s ${footer.name.toLowerCase()}.`;

      // Active rules selected from the 300 rules library corresponding to these features
      const activeRuleIds = [
        hero.id.includes('fashionia') ? 41 : hero.id.includes('verdeo') ? 8 : hero.id.includes('devialet') ? 27 : 3,
        trust.id.includes('frosted') ? 1 : trust.id.includes('logos') ? 88 : trust.id.includes('bento') ? 6 : 87,
        showcase.id.includes('categories') ? 76 : showcase.id.includes('wave') ? 82 : showcase.id.includes('accordion') ? 93 : 71,
        narrative.id.includes('timeline') ? 89 : narrative.id.includes('manifesto') ? 37 : narrative.id.includes('events') ? 90 : 86,
        footer.id.includes('terracotta') ? 100 : footer.id.includes('safari') ? 97 : footer.id.includes('atelier') ? 61 : 52,
        26, // Serif headline with sans-serif body
        33, // Line length 45-75 chars
        51, // 60-30-10 rule
        55, // 4.5:1 contrast
        85, // Max content width 1100-1200px
        101, // Button hover lift
        103, // Tap press-scale
      ];

      const dimensions: TemplateDimensions = {
        layoutArchetype: theme.archetype,
        headerNav: 'sticky-minimal-brand',
        heroComposition: 'split-text-left-media-right',
        sectionSequence: 'hero-trust-features-showcase-pricing-faq-footer',
        contentDensity: 'balanced-editorial',
        gridStructure: '12-col-asymmetric-rhythm',
        cardTreatment: 'floating-rounded-zero-border',
        typographyPairing: theme.typography,
        colourStrategy: theme.colourStrategy,
        shapeLanguage: hero.id.includes('verdeo') || hero.id.includes('washhouse') ? 'organic-curved-wave-dividers' : 'soft-pill-rounded-9999px',
        interactionPatterns: 'hover-lift-scroll-progress-stats',
        footerComposition: 'split-contact-hours-interactive-map',
      };

      const contentSlots: ContentSlotDefinition[] = [
        {
          id: 'slot_hero',
          title: hero.name,
          slotType: 'hero',
          description: hero.tagline,
          requiredAssets: ['hero_media'],
          suggestedFields: hero.features,
          emptyStatePrompt: `Configure ${hero.name}`,
        },
        {
          id: 'slot_trust',
          title: trust.name,
          slotType: 'trust',
          description: trust.tagline,
          requiredAssets: [],
          suggestedFields: trust.features,
          emptyStatePrompt: `Configure ${trust.name}`,
        },
        {
          id: 'slot_showcase',
          title: showcase.name,
          slotType: 'showcase',
          description: showcase.tagline,
          requiredAssets: ['showcase_media'],
          suggestedFields: showcase.features,
          emptyStatePrompt: `Configure ${showcase.name}`,
        },
        {
          id: 'slot_narrative',
          title: narrative.name,
          slotType: 'process',
          description: narrative.tagline,
          requiredAssets: [],
          suggestedFields: narrative.features,
          emptyStatePrompt: `Configure ${narrative.name}`,
        },
        {
          id: 'slot_footer',
          title: footer.name,
          slotType: 'footer',
          description: footer.tagline,
          requiredAssets: [],
          suggestedFields: footer.features,
          emptyStatePrompt: `Configure ${footer.name}`,
        },
      ];

      const combination: CombinationTemplateSpec = {
        id: combId,
        combinationNumber: index,
        isModularCombination: true,
        name,
        description,
        industry: theme.industry,
        industrySynonyms: [...theme.synonyms, ...sourcesUsed.map((s) => s.toLowerCase())],
        businessTypes: [theme.industry, ...sourcesUsed],
        visualStyle: theme.style,
        purpose: theme.purpose,
        performanceClass,
        dimensions,
        activeRuleIds,
        contentSlots,
        firstScreenFingerprint: `${hero.id}|${trust.id}|${theme.colourStrategy}`,
        tags: [
          'modular',
          'combination',
          ...sourcesUsed.map((s) => s.toLowerCase().replace(/\s+/g, '-')),
          hero.slot,
          showcase.slot,
          theme.purpose.toLowerCase(),
        ],
        recipe: {
          heroId: hero.id,
          trustId: trust.id,
          showcaseId: showcase.id,
          narrativeId: narrative.id,
          footerId: footer.id,
          hero,
          trust,
          showcase,
          narrative,
          footer,
        },
        sourcesUsed,
      };

      combinations.push(combination);
            }
          }
        }
      }
    }
  }

  return combinations;
}

// Singleton cache of the 300 generated combinations
let CACHED_300_COMBINATIONS: CombinationTemplateSpec[] | null = null;

export function get300Combinations(): CombinationTemplateSpec[] {
  if (!CACHED_300_COMBINATIONS) {
    CACHED_300_COMBINATIONS = generate300Combinations();
  }
  return CACHED_300_COMBINATIONS;
}

// Complete catalogue: Exactly 300 Modular Combinations + 1 Baseline Sample = 301 items
export function getCompleteCatalogue(): TemplateSpec[] {
  const combinations = get300Combinations();
  return [...combinations, SAMPLE_BASELINE_TEMPLATE];
}

export function getCombinationById(id: string): CombinationTemplateSpec | TemplateSpec | undefined {
  if (id === SAMPLE_BASELINE_TEMPLATE.id) {
    return SAMPLE_BASELINE_TEMPLATE;
  }
  const all = get300Combinations();
  return all.find((c) => c.id === id);
}
