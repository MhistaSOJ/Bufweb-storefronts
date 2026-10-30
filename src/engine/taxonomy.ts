/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface IndustryDefinition {
  id: string;
  name: string;
  synonyms: string[];
  businessTypes: string[];
  defaultPurpose: 'Commerce' | 'Portfolio' | 'Booking & Services' | 'Community & Cause' | 'Lead Generation' | 'Brand Showcase';
  preferredArchetypes: string[];
  preferredStyles: string[];
  coreRuleIds: number[];
  slotTypes: string[];
}

export const INDUSTRIES: IndustryDefinition[] = [
  {
    id: 'church',
    name: 'Church & Religious Organisation',
    synonyms: ['church', 'worship', 'ministry', 'religious organisation', 'religious organization', 'faith', 'parish', 'cathedral', 'fellowship', 'congregation', 'temple', 'sanctuary', 'mosque', 'spiritual'],
    businessTypes: ['Community Church', 'Evangelistic Ministry', 'Parish Cathedral', 'Faith Fellowship', 'Youth Ministry'],
    defaultPurpose: 'Community & Cause',
    preferredArchetypes: ['split-hero-asymmetric-grid', 'full-bleed-immersive', 'editorial-magazine-spread', 'centered-hero-single-action'],
    preferredStyles: ['Editorial / magazine', 'Warm-tinted neutrals', 'Earthy natural palette', 'Minimalism'],
    coreRuleIds: [277, 26, 72, 88, 143, 160, 185],
    slotTypes: ['header', 'hero', 'trust', 'features', 'showcase', 'social-proof', 'contact', 'footer']
  },
  {
    id: 'bakery',
    name: 'Bakery & Artisan Food',
    synonyms: ['bakery', 'cafe', 'bread', 'food business', 'pastry', 'patisserie', 'boulangerie', 'bakehouse', 'confectionery', 'dessert', 'coffee shop', 'roastery'],
    businessTypes: ['Artisan Sourdough Bakery', 'French Patisserie', 'Specialty Coffee & Bakehouse', 'Custom Cake Studio'],
    defaultPurpose: 'Commerce',
    preferredArchetypes: ['split-hero-asymmetric-grid', 'bento-grid-showcase', 'layered-organic-canvas', 'horizontal-rail-scroller'],
    preferredStyles: ['Paper texture', 'Organic shapes', 'Warm-tinted neutrals', 'Pastel soft'],
    coreRuleIds: [265, 8, 9, 76, 148, 157, 164, 167],
    slotTypes: ['header', 'hero', 'trust', 'showcase', 'process', 'contact', 'footer']
  },
  {
    id: 'salon',
    name: 'Beauty Salon & Personal Care',
    synonyms: ['salon', 'beauty', 'hair', 'personal care', 'barber', 'spa', 'aesthetics', 'hairstylist', 'skincare', 'cosmetics', 'manicure', 'barbershop', 'lash studio'],
    businessTypes: ['Luxury Hair Salon', 'Boutique Beauty Bar', 'Men Grooming Parlour', 'Medical Aesthetics Lounge'],
    defaultPurpose: 'Booking & Services',
    preferredArchetypes: ['layered-organic-canvas', 'split-hero-asymmetric-grid', 'stacked-sticky-cards', 'editorial-magazine-spread'],
    preferredStyles: ['Organic shapes', 'Pastel soft', 'Earthy natural palette', 'Dark luxury'],
    coreRuleIds: [270, 271, 116, 145, 147, 158, 170],
    slotTypes: ['header', 'hero', 'features', 'showcase', 'process', 'social-proof', 'contact', 'footer']
  },
  {
    id: 'real-estate',
    name: 'Real Estate & Properties',
    synonyms: ['real estate', 'property', 'properties', 'realtor', 'rentals', 'apartments', 'homes', 'housing', 'architecture', 'land', 'short-let', 'estates'],
    businessTypes: ['Luxury Real Estate Brokerage', 'Property Management Firm', 'Short-Let Booking Agency', 'Commercial Developer'],
    defaultPurpose: 'Lead Generation',
    preferredArchetypes: ['split-hero-asymmetric-grid', 'bento-grid-showcase', 'swiss-columnar-minimal', 'full-bleed-immersive'],
    preferredStyles: ['Minimalism', 'Swiss grid', 'Dark luxury', 'Editorial / magazine'],
    coreRuleIds: [261, 262, 263, 283, 76, 144, 157, 159, 166],
    slotTypes: ['header', 'hero', 'trust', 'features', 'showcase', 'contact', 'footer']
  },
  {
    id: 'fashion',
    name: 'Fashion & Apparel',
    synonyms: ['fashion', 'clothing', 'apparel', 'boutique', 'streetwear', 'footwear', 'shoes', 'luxury goods', 'wardrobe', 'couture', 'tailoring', 'textiles'],
    businessTypes: ['High Fashion Atelier', 'Minimalist Footwear Brand', 'Urban Streetwear Label', 'Bespoke Native Tailor'],
    defaultPurpose: 'Commerce',
    preferredArchetypes: ['editorial-magazine-spread', 'bento-grid-showcase', 'masonry-visual-archive', 'horizontal-rail-scroller'],
    preferredStyles: ['Editorial / magazine', 'Dark luxury', 'Neo-brutalism', 'Swiss grid'],
    coreRuleIds: [267, 295, 41, 76, 109, 149, 150, 163],
    slotTypes: ['header', 'hero', 'trust', 'showcase', 'pricing', 'footer']
  },
  {
    id: 'restaurant',
    name: 'Restaurant & Dining',
    synonyms: ['restaurant', 'dining', 'bistro', 'eatery', 'culinary', 'catering', 'food', 'chef', 'gastronomy', 'grill', 'lounge', 'bar'],
    businessTypes: ['Fine Dining Bistro', 'Farm-to-Table Eatery', 'Gourmet Grillhouse', 'Artisan Cocktail Lounge'],
    defaultPurpose: 'Booking & Services',
    preferredArchetypes: ['split-hero-asymmetric-grid', 'full-bleed-immersive', 'editorial-magazine-spread', 'horizontal-rail-scroller'],
    preferredStyles: ['Dark luxury', 'Warm-tinted neutrals', 'Editorial / magazine', 'Paper texture'],
    coreRuleIds: [264, 266, 94, 148, 157, 167, 247],
    slotTypes: ['header', 'hero', 'features', 'showcase', 'process', 'contact', 'footer']
  },
  {
    id: 'electronics',
    name: 'Electronics & Audio Hardware',
    synonyms: ['electronics', 'hardware', 'audio', 'hi-fi', 'sound', 'speakers', 'gadgets', 'tech store', 'appliances', 'gear', 'acoustics', 'devices'],
    businessTypes: ['High-End Audio Lab', 'Consumer Gadgets Store', 'Smart Home Systems', 'Acoustic Engineering Boutique'],
    defaultPurpose: 'Commerce',
    preferredArchetypes: ['swiss-columnar-minimal', 'bento-grid-showcase', 'split-hero-asymmetric-grid', 'centered-hero-single-action'],
    preferredStyles: ['Swiss grid', 'Minimalism', 'Dark luxury', 'Monochrome plus one accent colour'],
    coreRuleIds: [268, 5, 27, 40, 48, 149, 164],
    slotTypes: ['header', 'hero', 'trust', 'features', 'pricing', 'footer']
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Medical Clinic',
    synonyms: ['healthcare', 'clinic', 'medical', 'wellness', 'doctor', 'dental', 'dentist', 'pharmacy', 'hospital', 'therapy', 'health', 'physician', 'specialist'],
    businessTypes: ['Specialist Dental Practice', 'Family Medical Center', 'Holistic Wellness Clinic', 'Compound Pharmacy'],
    defaultPurpose: 'Booking & Services',
    preferredArchetypes: ['split-hero-asymmetric-grid', 'big-stat-impact-matrix', 'swiss-columnar-minimal', 'stacked-sticky-cards'],
    preferredStyles: ['Minimalism', 'Swiss grid', 'Pastel soft', 'Earthy natural palette'],
    coreRuleIds: [273, 274, 145, 147, 158, 162, 170],
    slotTypes: ['header', 'hero', 'trust', 'features', 'process', 'social-proof', 'contact', 'footer']
  },
  {
    id: 'education',
    name: 'Education & Academies',
    synonyms: ['school', 'education', 'academy', 'tutoring', 'courses', 'tutor', 'university', 'college', 'learning', 'institute', 'training', 'classes', 'kindergarten'],
    businessTypes: ['Private Preparatory Academy', 'STEM Tutoring Collective', 'Executive Design Institute', 'International Montessori'],
    defaultPurpose: 'Lead Generation',
    preferredArchetypes: ['split-hero-asymmetric-grid', 'timeline-process-journey', 'big-stat-impact-matrix', 'bento-grid-showcase'],
    preferredStyles: ['Editorial / magazine', 'Swiss grid', 'Flat illustration', 'Warm-tinted neutrals'],
    coreRuleIds: [275, 276, 87, 89, 90, 160, 171],
    slotTypes: ['header', 'hero', 'trust', 'features', 'process', 'pricing', 'contact', 'footer']
  },
  {
    id: 'ngo',
    name: 'Charity & NGO',
    synonyms: ['ngo', 'charity', 'non-profit', 'nonprofit', 'foundation', 'conservation', 'cause', 'humanitarian', 'donations', 'volunteering', 'wildlife', 'relief'],
    businessTypes: ['Reforestation Alliance', 'Ocean Plastic Initiative', 'Child Welfare Foundation', 'Community Empowerment Trust'],
    defaultPurpose: 'Community & Cause',
    preferredArchetypes: ['big-stat-impact-matrix', 'full-bleed-immersive', 'split-hero-asymmetric-grid', 'zig-zag-narrative'],
    preferredStyles: ['Earthy natural palette', 'Organic shapes', 'Editorial / magazine', 'Pastel soft'],
    coreRuleIds: [278, 87, 107, 143, 174, 192, 236],
    slotTypes: ['header', 'hero', 'trust', 'features', 'showcase', 'social-proof', 'footer']
  },
  {
    id: 'portfolio',
    name: 'Portfolio & Creative Professionals',
    synonyms: ['portfolio', 'freelancer', 'designer', 'developer', 'art director', 'photographer', 'copywriter', 'creative director', 'resume', 'cv', 'personal brand', 'studio'],
    businessTypes: ['Product Designer Portfolio', 'Brand Identity Studio', 'Full-Stack Engineer Archive', 'Creative Director Showcase'],
    defaultPurpose: 'Portfolio',
    preferredArchetypes: ['editorial-magazine-spread', 'masonry-visual-archive', 'bento-grid-showcase', 'split-hero-asymmetric-grid'],
    preferredStyles: ['Minimalism', 'Neo-brutalism', 'Mesh gradients', 'Editorial / magazine'],
    coreRuleIds: [287, 288, 109, 115, 173, 176, 185],
    slotTypes: ['header', 'hero', 'trust', 'showcase', 'process', 'social-proof', 'contact', 'footer']
  },
  {
    id: 'fitness',
    name: 'Fitness & Sports',
    synonyms: ['gym', 'fitness', 'sports', 'athletics', 'crossfit', 'yoga', 'personal trainer', 'workout', 'pilates', 'martial arts', 'boxing', 'wellness studio'],
    businessTypes: ['Performance CrossFit Box', 'Boutique Hot Yoga Sanctuary', 'Elite Personal Training Club', 'MMA & Boxing Academy'],
    defaultPurpose: 'Booking & Services',
    preferredArchetypes: ['zig-zag-narrative', 'big-stat-impact-matrix', 'bento-grid-showcase', 'split-hero-asymmetric-grid'],
    preferredStyles: ['Neo-brutalism', 'Dark luxury', 'Monochrome plus one accent colour', 'Swiss grid'],
    coreRuleIds: [292, 83, 91, 92, 147, 159, 179],
    slotTypes: ['header', 'hero', 'trust', 'features', 'pricing', 'social-proof', 'contact', 'footer']
  },
  {
    id: 'law-finance',
    name: 'Legal & Financial Services',
    synonyms: ['law', 'legal', 'lawyer', 'attorney', 'solicitor', 'barrister', 'accounting', 'finance', 'bookkeeping', 'tax', 'audit', 'advisory', 'wealth', 'wealth management'],
    businessTypes: ['Corporate Law Chambers', 'Chartered Accounting Practice', 'Private Wealth Advisory', 'Litigation & Dispute Firm'],
    defaultPurpose: 'Lead Generation',
    preferredArchetypes: ['editorial-magazine-spread', 'swiss-columnar-minimal', 'split-hero-asymmetric-grid', 'big-stat-impact-matrix'],
    preferredStyles: ['Editorial / magazine', 'Dark luxury', 'Swiss grid', 'Minimalism'],
    coreRuleIds: [290, 291, 26, 37, 88, 162, 178],
    slotTypes: ['header', 'hero', 'trust', 'features', 'process', 'social-proof', 'contact', 'footer']
  },
  {
    id: 'architecture-furniture',
    name: 'Architecture & Furniture Craft',
    synonyms: ['architecture', 'furniture', 'interior design', 'joinery', 'woodwork', 'homeware', 'craft', 'renovation', 'builder', 'decor', 'contractor', 'cabinetry'],
    businessTypes: ['Bespoke Timber Atelier', 'Architectural Design Firm', 'Boutique Interior Studio', 'Custom Joinery Workshop'],
    defaultPurpose: 'Brand Showcase',
    preferredArchetypes: ['editorial-magazine-spread', 'layered-organic-canvas', 'stacked-sticky-cards', 'split-hero-asymmetric-grid'],
    preferredStyles: ['Editorial / magazine', 'Warm-tinted neutrals', 'Earthy natural palette', 'Minimalism'],
    coreRuleIds: [294, 299, 81, 90, 148, 150, 174],
    slotTypes: ['header', 'hero', 'trust', 'showcase', 'process', 'social-proof', 'contact', 'footer']
  },
  {
    id: 'logistics',
    name: 'Logistics & Supply Chain',
    synonyms: ['logistics', 'clearing', 'freight', 'shipping', 'cargo', 'transport', 'supply chain', 'customs', 'haulage', 'warehouse', 'courier', 'delivery'],
    businessTypes: ['International Freight Forwarder', 'Maritime Customs Clearing Agent', 'Regional Cold-Chain Haulage', 'Express Courier Network'],
    defaultPurpose: 'Lead Generation',
    preferredArchetypes: ['swiss-columnar-minimal', 'big-stat-impact-matrix', 'bento-grid-showcase', 'split-hero-asymmetric-grid'],
    preferredStyles: ['Swiss grid', 'Monochrome plus one accent colour', 'Minimalism'],
    coreRuleIds: [286, 87, 88, 163, 178, 206],
    slotTypes: ['header', 'hero', 'trust', 'features', 'process', 'contact', 'footer']
  },
  {
    id: 'agriculture',
    name: 'Agriculture & Farm Produce',
    synonyms: ['agriculture', 'farm', 'farming', 'produce', 'organic', 'harvest', 'agro-business', 'livestock', 'crops', 'horticulture', 'botanical', 'plantation'],
    businessTypes: ['Organic Avocado & Macadamia Farm', 'Sustainable Poultry Cooperative', 'Artisan Coffee Plantation', 'Commercial Greenhouse Produce'],
    defaultPurpose: 'Commerce',
    preferredArchetypes: ['zig-zag-narrative', 'split-hero-asymmetric-grid', 'layered-organic-canvas', 'big-stat-impact-matrix'],
    preferredStyles: ['Earthy natural palette', 'Paper texture', 'Organic shapes', 'Pastel soft'],
    coreRuleIds: [293, 15, 64, 88, 148, 157, 162],
    slotTypes: ['header', 'hero', 'trust', 'showcase', 'process', 'contact', 'footer']
  },
  {
    id: 'hospitality',
    name: 'Hotels & Resorts',
    synonyms: ['hotel', 'resort', 'hospitality', 'lodge', 'guesthouse', 'villa', 'vacation', 'boutique hotel', 'inn', 'stay', 'accommodations'],
    businessTypes: ['Coastal Boutique Resort', 'Mountain Eco-Lodge', 'Heritage City Guesthouse', 'Safari Glamping Sanctuary'],
    defaultPurpose: 'Booking & Services',
    preferredArchetypes: ['full-bleed-immersive', 'split-hero-asymmetric-grid', 'editorial-magazine-spread', 'stacked-sticky-cards'],
    preferredStyles: ['Dark luxury', 'Editorial / magazine', 'Warm-tinted neutrals', 'Organic shapes'],
    coreRuleIds: [282, 72, 84, 142, 167, 170],
    slotTypes: ['header', 'hero', 'trust', 'features', 'showcase', 'contact', 'footer']
  },
  {
    id: 'events',
    name: 'Events & Entertainment',
    synonyms: ['events', 'entertainment', 'venue', 'wedding', 'tickets', 'concert', 'festival', 'conference', 'music', 'dj', 'performer', 'artist', 'shows'],
    businessTypes: ['Boutique Wedding Garden', 'Music Festival Experience', 'Annual Tech Summit', 'Live Arts Performance Hall'],
    defaultPurpose: 'Booking & Services',
    preferredArchetypes: ['full-bleed-immersive', 'bento-grid-showcase', 'timeline-process-journey', 'centered-hero-single-action'],
    preferredStyles: ['Dark luxury', 'Retro / Y2K', 'Neo-brutalism', 'Monochrome plus one accent colour'],
    coreRuleIds: [279, 280, 281, 300, 50, 89, 183],
    slotTypes: ['header', 'hero', 'trust', 'showcase', 'pricing', 'contact', 'footer']
  },
  {
    id: 'saas-tech',
    name: 'SaaS & Modern Technology',
    synonyms: ['saas', 'software', 'technology', 'tech', 'app', 'platform', 'cloud', 'developer', 'startup', 'ai', 'data', 'tools', 'automation'],
    businessTypes: ['B2B Analytics Platform', 'Developer Workflow Tool', 'Cloud Security Suite', 'AI Content Engine'],
    defaultPurpose: 'Lead Generation',
    preferredArchetypes: ['bento-grid-showcase', 'split-hero-asymmetric-grid', 'big-stat-impact-matrix', 'centered-hero-single-action'],
    preferredStyles: ['Bento grid', 'Minimalism', 'Swiss grid', 'Mesh gradients', 'Glassmorphism'],
    coreRuleIds: [1, 6, 91, 92, 107, 173, 176],
    slotTypes: ['header', 'hero', 'trust', 'features', 'pricing', 'social-proof', 'footer']
  },
  {
    id: 'automotive',
    name: 'Automotive & Mechanics',
    synonyms: ['car', 'automotive', 'dealer', 'mechanic', 'auto repair', 'vehicles', 'towing', 'motors', 'dealership', 'garage', 'detailing'],
    businessTypes: ['Pre-Owned Luxury Dealership', 'Certified Auto Repair Center', 'Mobile Diagnostic Service', 'Vehicle Detailing Studio'],
    defaultPurpose: 'Lead Generation',
    preferredArchetypes: ['split-hero-asymmetric-grid', 'bento-grid-showcase', 'zig-zag-narrative', 'big-stat-impact-matrix'],
    preferredStyles: ['Neo-brutalism', 'Swiss grid', 'Dark luxury', 'Monochrome plus one accent colour'],
    coreRuleIds: [284, 285, 116, 158, 164, 178],
    slotTypes: ['header', 'hero', 'trust', 'features', 'pricing', 'contact', 'footer']
  }
];

export const INDUSTRY_BY_ID = new Map<string, IndustryDefinition>(
  INDUSTRIES.map((ind) => [ind.id, ind])
);
