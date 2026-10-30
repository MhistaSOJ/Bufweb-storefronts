/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReferenceAnalysis, TemplateSpec } from '../types';
import { SAMPLE_REFERENCES } from '../data/sampleReferences';

/**
 * Simulates intelligent design analysis of an uploaded image / screenshot.
 * Extracts palette, detects composition style, and maps to the 300 design rules.
 */
export async function analyzeReferenceImage(
  imageSource: string | File,
  title = 'Uploaded Reference'
): Promise<ReferenceAnalysis> {
  // If it's a known sample reference image, return the pre-analyzed profile
  if (typeof imageSource === 'string') {
    const existing = SAMPLE_REFERENCES.find((ref) => ref.imageUrl === imageSource || ref.id === imageSource);
    if (existing) {
      return existing;
    }
  }

  // Otherwise, analyze dynamic uploaded image
  // Extract colors using an offscreen canvas
  const extracted = await extractColorsFromImage(imageSource);

  return {
    id: `ref_custom_${Date.now()}`,
    title,
    imageUrl: typeof imageSource === 'string' ? imageSource : URL.createObjectURL(imageSource),
    extractedColors: extracted,
    dominantArchetype: 'split-hero-asymmetric-grid',
    recommendedTypography: 'serif-headline-sans-body',
    detectedVisualStyles: ['Editorial / magazine', 'Warm-tinted neutrals', 'Organic shapes'],
    matchedRuleIds: [4, 15, 26, 35, 51, 55, 71, 88, 131, 156, 187],
    notes: 'Image analyzed: Balanced visual weight, natural warm lighting, editorial headline hierarchy, and prominent call to action.',
  };
}

async function extractColorsFromImage(
  source: string | File
): Promise<{ primary: string; secondary: string; accent: string; background: string; surface: string }> {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';

    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(getDefaultPalette());
          return;
        }

        ctx.drawImage(img, 0, 0, 64, 64);
        const imgData = ctx.getImageData(0, 0, 64, 64).data;

        // Sample top-left for background and center for primary
        const bgR = imgData[0];
        const bgG = imgData[1];
        const bgB = imgData[2];

        const centerIdx = (32 * 64 + 32) * 4;
        const pR = imgData[centerIdx];
        const pG = imgData[centerIdx + 1];
        const pB = imgData[centerIdx + 2];

        resolve({
          primary: `rgb(${pR}, ${pG}, ${pB})`,
          secondary: `rgba(${pR}, ${pG}, ${pB}, 0.15)`,
          accent: '#D97706',
          background: `rgb(${bgR}, ${bgG}, ${bgB})`,
          surface: '#FFFFFF',
        });
      } catch (e) {
        resolve(getDefaultPalette());
      }
    };

    img.onerror = () => {
      resolve(getDefaultPalette());
    };

    if (typeof source === 'string') {
      img.src = source;
    } else {
      const reader = new FileReader();
      reader.onload = (e) => {
        img.src = e.target?.result as string;
      };
      reader.readAsDataURL(source);
    }
  });
}

function getDefaultPalette() {
  return {
    primary: '#1C1917',
    secondary: '#E7E5E4',
    accent: '#D97706',
    background: '#FAF8F5',
    surface: '#FFFFFF',
  };
}

/**
 * Suggests templates from the catalogue matching a reference analysis
 */
export function matchTemplatesForReference(
  catalogue: TemplateSpec[],
  analysis: ReferenceAnalysis
): TemplateSpec[] {
  return catalogue
    .map((tpl) => {
      let score = 0;
      if (tpl.dimensions.layoutArchetype === analysis.dominantArchetype) score += 30;
      if (tpl.dimensions.typographyPairing === analysis.recommendedTypography) score += 20;

      // Count matched rule overlap
      const overlap = tpl.activeRuleIds.filter((id) => analysis.matchedRuleIds.includes(id)).length;
      score += overlap * 4;

      return { tpl, score };
    })
    .sort((a, b) => b.score - a.score)
    .map((item) => item.tpl)
    .slice(0, 8);
}
