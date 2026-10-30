/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { FashioniaReplica } from './FashioniaReplica';
import { VerdeoAtelierReplica } from './VerdeoAtelierReplica';
import { DevialetReplica } from './DevialetReplica';
import { CompattoReplica } from './CompattoReplica';
import { AlexMorganReplica } from './AlexMorganReplica';
import { GospelReplica } from './GospelReplica';
import { GraceChurchReplica } from './GraceChurchReplica';
import { CedlingReplica } from './CedlingReplica';
import { WashHouseReplica } from './WashHouseReplica';
import { SweaterWeatherReplica } from './SweaterWeatherReplica';
import { Mobile3GReplica } from './Mobile3GReplica';

export interface DesignReplicaMeta {
  id: string;
  title: string;
  category: string;
  originalImage: string;
  summary: string;
  keyElements: string[];
  component: React.ComponentType;
}

export const DESIGN_REPLICAS: DesignReplicaMeta[] = [
  {
    id: 'fashionia',
    title: 'Fashionia (Luxury Apparel)',
    category: 'E-Commerce & Fashion',
    originalImage: '/assets/aistudio/IMG_8044_4c820196.jpeg',
    summary: 'Line-for-line replication of IMG_8044. Giant outlined "STYLE" typography, standing beige model hero, frosted glass benefit bar, 4 category cards (Women, Men, Accessories, Footwear), and autumn editorial showroom.',
    keyElements: ['Outlined serif STYLE', 'Frosted glass pill specs', '4:5 category cards', 'Rachel Zoe quote'],
    component: FashioniaReplica,
  },
  {
    id: 'verdeo',
    title: 'Verdeo Atelier (Organic Studio)',
    category: 'Creative Studio & Spaces',
    originalImage: '/assets/aistudio/IMG_8043_5dae23c4.jpeg',
    summary: 'Line-for-line replication of IMG_8043. Organic curved wave section dividers, "We design meaningful experiences", Kinfolk books and ceramic vase staging, olive green services wave, 4 arched pill project cards, 5-step process timeline, client testimonials, and terracotta contact form.',
    keyElements: ['Curved organic wave dividers', 'Sage olive & terracotta palette', '5-step process timeline', 'Arched project cards'],
    component: VerdeoAtelierReplica,
  },
  {
    id: 'devialet',
    title: 'Devialet (High-End Audio)',
    category: 'Acoustics & Technology',
    originalImage: '/assets/aistudio/IMG_8042_59dad963.jpeg',
    summary: 'Line-for-line replication of IMG_8042. Colossal grotesque "DEVIALET / Elevate the Sound" headline, floating Phantom speaker on white cylindrical plinth, audio philosophy 2-column manifesto, 3 monochromatic gallery photos, and collection carousel.',
    keyElements: ['Massive black typography', 'Hovering Phantom speaker', 'Monochromatic gallery', 'Collection carousel with timeline'],
    component: DevialetReplica,
  },
  {
    id: 'compatto',
    title: 'Compatto (Architecture & Furnishing)',
    category: 'Architecture & Interior',
    originalImage: '/assets/aistudio/IMG_8041_73c6c02f.jpeg',
    summary: 'Line-for-line replication of IMG_8041. Dark slate hero card "Bringing Simplicity In The Furnishing Market", bento stat tiles (150+ Suppliers / 15+ Years), stacked cards accordion with "5 After-Sales Support and Maintenance", and Why Choose Compatto bento grid.',
    keyElements: ['Rounded hero interior container', '150+ Suppliers bento stat', 'Stacked sticky cards accordion', 'Travertine & bronze tones'],
    component: CompattoReplica,
  },
  {
    id: 'alexmorgan',
    title: 'Alex Morgan (Designer Portfolio)',
    category: 'Personal Brand & Portfolio',
    originalImage: '/assets/aistudio/IMG_8038_44fec021.jpeg',
    summary: 'Line-for-line replication of IMG_8038. Realistic macOS Safari browser window with red/yellow/green controls, "Hi, I\'m Alex Morgan", circular portrait with warm coral mesh glow, "Available for work / May 2026" glass badge, Framer/Webflow/Slack/Notion/Loom trust logos, 3 selected work cards, and James Carter testimonial.',
    keyElements: ['macOS Safari window mockup', 'Warm coral ambient mesh glow', 'Available for work badge', '3 Selected work cards with arrows'],
    component: AlexMorganReplica,
  },
  {
    id: 'gospel',
    title: 'Gospel (Cathedral Church)',
    category: 'Church & Ministry',
    originalImage: '/assets/aistudio/IMG_8001_ab367c02.jpeg',
    summary: 'Line-for-line replication of IMG_8001. Full-bleed misty lake mountain hero "Life-Changing Journey to God", maroon banner "Discover Christ And Find Peace", 3 classical circular engraved etchings (Our Beliefs, Our Church, Our Mission), and upcoming events cards with dates.',
    keyElements: ['Misty lake mountain hero', 'Maroon sanctuary banner', '3 Classical engraved etchings', 'Upcoming events calendar cards'],
    component: GospelReplica,
  },
  {
    id: 'gracechurch',
    title: 'Grace Community Church',
    category: 'Church & Ministry',
    originalImage: '/assets/aistudio/IMG_8035_9dd279a3.jpeg',
    summary: 'Line-for-line replication of IMG_8035. Concert stage worship lights "Welcome To Our Church", floating "Join the Sunday Live Stream" banner, 6-box ministry services grid (Weekly Services, Youth, Kids, Special Events, Counseling, Benevolence), and "Hope for Tomorrow" sermon cards.',
    keyElements: ['Stage lights worship hero', 'Floating Live Stream banner', '6 Ministry icon tiles', 'Hope for Tomorrow sermon series'],
    component: GraceChurchReplica,
  },
  {
    id: 'cedling',
    title: 'Cedling & Herniur (3D Spatial)',
    category: 'Spatial Design & Objects',
    originalImage: '/assets/aistudio/IMG_8039_3d514a64.jpeg',
    summary: 'Line-for-line replication of IMG_8039. Warm chocolate and caramel gradient background, floating cards (Herniur, Panlirg, Famling, Cedling, Paride), sculptural plaster and bronze objects with ambient lighting.',
    keyElements: ['Warm chocolate bronze palette', 'Floating frosted 3D cards', 'Architectural arches', 'Tactile object showcases'],
    component: CedlingReplica,
  },
  {
    id: 'washhouse',
    title: 'Wash House (Artisan Soap)',
    category: 'Organic Goods & Apothecary',
    originalImage: '/assets/aistudio/IMG_8026_a1e8bc05.png',
    summary: 'Line-for-line replication of IMG_8026. Color-blocked terracotta, sage, and lavender sections with wavy organic borders, rotating "HANDMADE WITH LOVE · SMALL BATCH" circular badge, and handcrafted cold-process soap bars.',
    keyElements: ['Terracotta, sage, lavender color blocks', 'Wavy section dividers', 'Rotating circular stamp badge', 'Small-batch artisan soap cards'],
    component: WashHouseReplica,
  },
  {
    id: 'sweaterweather',
    title: 'Sweater Weather (Specialty Coffee)',
    category: 'Swiss Grid & Roastery',
    originalImage: '/assets/aistudio/IMG_8034_6e1a6676.jpeg',
    summary: 'Line-for-line replication of IMG_8034. High-contrast monochrome Swiss typography, "HOW DO YOU LIKE YOUR COFFEE?" question headline, clean single-origin bean bags with altitude and tasting note scales.',
    keyElements: ['Strict black & white Swiss grid', 'Conversational question headline', 'Single-origin tasting specs', 'Batch ticker banner'],
    component: SweaterWeatherReplica,
  },
  {
    id: 'mobile3g',
    title: 'Mobile 3G Throttled Live Simulation',
    category: 'Performance & Network Engineering',
    originalImage: '/assets/aistudio/IMG_8031_06b4e516.jpeg',
    summary: 'Line-for-line replication of IMG_8031. Realistic mobile device frame, 3G network indicator in status bar, pulsing grey skeleton placeholders for avatar, search bar, category rail, hero banner, and product list to demonstrate Rules 119, 136, 220, 224.',
    keyElements: ['3G status bar indicator', 'Pulsing grey skeleton placeholders', 'Mobile device chassis', 'Interactive latency re-test toggle'],
    component: Mobile3GReplica,
  },
];
