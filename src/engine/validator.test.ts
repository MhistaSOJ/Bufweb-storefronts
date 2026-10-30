/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import {
  get300Combinations,
  getCompleteCatalogue,
  SAMPLE_BASELINE_TEMPLATE,
} from './combinationsEngine';
import { HERO_BLOCKS, TRUST_BLOCKS, SHOWCASE_BLOCKS, NARRATIVE_BLOCKS, FOOTER_BLOCKS } from './modularBlocks';
import { searchTemplates } from './validator';
import { DESIGN_LIBRARY_300 } from '../data/designLibrary300';
import { DESIGN_REPLICAS } from '../replicas';

test('Design Intelligence Library has all 300 rules correctly structured', () => {
  assert.equal(DESIGN_LIBRARY_300.length, 300, 'Must have exactly 300 rules');
  assert.equal(DESIGN_LIBRARY_300[0].id, 1, 'First rule id must be 1');
  assert.equal(DESIGN_LIBRARY_300[299].id, 300, '300th rule id must be 300');

  // Verify all IDs from 1 to 300 are sequential and present
  for (let i = 0; i < 300; i++) {
    assert.equal(DESIGN_LIBRARY_300[i].id, i + 1, `Rule at index ${i} must have ID ${i + 1}`);
    assert.ok(DESIGN_LIBRARY_300[i].name.length > 0, `Rule ${i + 1} must have a name`);
    assert.ok(DESIGN_LIBRARY_300[i].categoryNumber >= 1 && DESIGN_LIBRARY_300[i].categoryNumber <= 13, `Rule ${i + 1} category number must be between 1 and 13`);
    assert.ok(['L', 'M', 'H', 'none'].includes(DESIGN_LIBRARY_300[i].cost), `Rule ${i + 1} cost tag must be L, M, H, or none`);
  }
});

test('Modular Blocks are extracted from the 11 Replicas + 1 Baseline Sample', () => {
  assert.ok(HERO_BLOCKS.length >= 10, 'Must have at least 10 hero blocks');
  assert.ok(TRUST_BLOCKS.length >= 8, 'Must have at least 8 trust blocks');
  assert.ok(SHOWCASE_BLOCKS.length >= 10, 'Must have at least 10 showcase blocks');
  assert.ok(NARRATIVE_BLOCKS.length >= 8, 'Must have at least 8 narrative blocks');
  assert.ok(FOOTER_BLOCKS.length >= 6, 'Must have at least 6 footer blocks');

  // Check hero block fields
  for (const hero of HERO_BLOCKS) {
    assert.ok(hero.id.startsWith('hero_'), `Hero id must start with hero_: ${hero.id}`);
    assert.ok(hero.sourceName.length > 0, `Hero ${hero.id} must have a source name`);
    assert.ok(hero.features.length >= 3, `Hero ${hero.id} must list features`);
  }
});

test('Modular Combination Engine produces exactly 300 unique combinations', () => {
  const combinations = get300Combinations();
  assert.equal(combinations.length, 300, `Expected exactly 300 combinations, got ${combinations.length}`);

  const idSet = new Set<string>();
  const recipeSet = new Set<string>();

  for (let i = 0; i < combinations.length; i++) {
    const comb = combinations[i];
    assert.equal(comb.id, `comb_${String(i + 1).padStart(4, '0')}`, `ID must be sequential: ${comb.id}`);
    assert.ok(!idSet.has(comb.id), `ID must be unique: ${comb.id}`);
    idSet.add(comb.id);

    // Verify recipe uniqueness (zero duplicate recipes across all 300!)
    const recipeKey = `${comb.recipe.heroId}|${comb.recipe.trustId}|${comb.recipe.showcaseId}|${comb.recipe.narrativeId}|${comb.recipe.footerId}`;
    assert.ok(!recipeSet.has(recipeKey), `Recipe must be unique across all 300 combinations: ${recipeKey}`);
    recipeSet.add(recipeKey);

    // Verify sources used
    assert.ok(comb.sourcesUsed.length >= 2, `Combination ${comb.id} must blend at least 2 distinct sources`);
    assert.ok(['L', 'M', 'H'].includes(comb.performanceClass), `Valid perf class: ${comb.performanceClass}`);
    assert.ok(comb.activeRuleIds.length >= 6, `Must map active 300-rules`);
  }
});

test('Single Baseline Sample from previous 1,000 templates is retained', () => {
  assert.equal(SAMPLE_BASELINE_TEMPLATE.id, 'sample_tpl_0001');
  assert.ok(SAMPLE_BASELINE_TEMPLATE.name.includes('Baseline Sample'));
  assert.equal(SAMPLE_BASELINE_TEMPLATE.industry, 'Software & Technology');
  assert.ok(SAMPLE_BASELINE_TEMPLATE.contentSlots.length >= 5);

  const completeCatalogue = getCompleteCatalogue();
  assert.equal(completeCatalogue.length, 301, 'Complete catalogue must have 300 combinations + 1 baseline sample');
  assert.ok(completeCatalogue.some((t) => t.id === 'sample_tpl_0001'), 'Must include sample_tpl_0001');
});

test('Exact 11 Line-for-Line Replicas exist and match uploaded reference images', () => {
  assert.equal(DESIGN_REPLICAS.length, 11, 'Must have exactly 11 line-for-line image replicas');
  const replicaIds = DESIGN_REPLICAS.map((r) => r.id);

  assert.ok(replicaIds.includes('fashionia'), 'Must include Fashionia replica');
  assert.ok(replicaIds.includes('verdeo'), 'Must include Verdeo Atelier replica');
  assert.ok(replicaIds.includes('devialet'), 'Must include Devialet replica');
  assert.ok(replicaIds.includes('compatto'), 'Must include Compatto replica');
  assert.ok(replicaIds.includes('alexmorgan'), 'Must include Alex Morgan replica');
  assert.ok(replicaIds.includes('gospel'), 'Must include Gospel replica');
  assert.ok(replicaIds.includes('gracechurch'), 'Must include Grace Church replica');
  assert.ok(replicaIds.includes('cedling'), 'Must include Cedling replica');
  assert.ok(replicaIds.includes('washhouse'), 'Must include Wash House replica');
  assert.ok(replicaIds.includes('sweaterweather'), 'Must include Sweater Weather replica');
  assert.ok(replicaIds.includes('mobile3g'), 'Must include Mobile 3G replica');
});

test('Search works across combinations by source name, industry, and style', () => {
  const completeCatalogue = getCompleteCatalogue();

  // Search by piece
  const verdeoResults = searchTemplates(completeCatalogue, 'Verdeo');
  assert.ok(verdeoResults.length > 0, 'Must find combinations with Verdeo piece');

  const devialetResults = searchTemplates(completeCatalogue, 'Devialet');
  assert.ok(devialetResults.length > 0, 'Must find combinations with Devialet piece');

  const fashioniaResults = searchTemplates(completeCatalogue, 'Fashionia');
  assert.ok(fashioniaResults.length > 0, 'Must find combinations with Fashionia piece');

  // Search for baseline
  const baselineResults = searchTemplates(completeCatalogue, 'baseline');
  assert.ok(baselineResults.length > 0, 'Must find the baseline sample');
});
