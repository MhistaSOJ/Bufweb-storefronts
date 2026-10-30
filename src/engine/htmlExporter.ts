/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { DraftWebsite, TemplateSpec } from '../types';

export function generateStandaloneHtml(draft: DraftWebsite, template?: TemplateSpec): string {
  const primary = draft.customPalette?.primary || '#18181b';
  const accent = draft.customPalette?.accent || '#d97706';
  const bg = draft.customPalette?.background || '#fafaf9';
  const name = draft.businessName || draft.name || 'My Business';
  const tagline = draft.slotValues.tagline || 'Crafting quality experiences';
  const headline = draft.slotValues.headline || 'Welcome to our business';
  const story = draft.slotValues.story || 'We are dedicated to providing the highest standard of service.';
  const phone = draft.slotValues.phone || '+1 555-0199';
  const email = draft.slotValues.email || 'hello@example.com';
  const address = draft.slotValues.address || '123 Main Street';
  const hours = draft.slotValues.hours || 'Mon–Sat: 9:00 AM – 6:00 PM';
  const heroImage = draft.uploadedImages[0] || 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${name} — ${tagline}</title>
  <meta name="description" content="${headline}">
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Space+Mono&display=swap" rel="stylesheet">
  <style>
    :root {
      --primary: ${primary};
      --accent: ${accent};
      --bg: ${bg};
    }
    body {
      background-color: var(--bg);
      color: #1c1917;
      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
    }
    .font-serif {
      font-family: 'Playfair Display', Georgia, serif;
    }
    .font-mono {
      font-family: 'Space Mono', monospace;
    }
  </style>
</head>
<body class="min-h-screen antialiased flex flex-col justify-between selection:bg-amber-100 selection:text-amber-900">

  <!-- Header -->
  <header class="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-stone-200/80 px-6 py-4">
    <div class="max-w-6xl mx-auto flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-9 h-9 rounded-lg flex items-center justify-center font-serif font-bold text-white shadow-sm" style="background-color: ${primary};">
          ${name.charAt(0)}
        </div>
        <div>
          <span class="font-serif font-bold text-xl tracking-tight block" style="color: ${primary};">${name}</span>
          <span class="text-[10px] uppercase tracking-widest text-stone-500 font-mono">${draft.industry}</span>
        </div>
      </div>
      <nav class="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600">
        <a href="#about" class="hover:text-stone-900 transition-colors">About</a>
        <a href="#services" class="hover:text-stone-900 transition-colors">Services</a>
        <a href="#contact" class="hover:text-stone-900 transition-colors">Contact</a>
      </nav>
      <div>
        <a href="tel:${phone.replace(/\s+/g, '')}" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white shadow-sm transition-transform active:scale-95" style="background-color: ${accent};">
          <span>Call Us</span>
        </a>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <main class="flex-1">
    <section class="max-w-6xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
      <div class="md:col-span-7 space-y-6">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium border" style="background-color: ${primary}10; color: ${primary}; border-color: ${primary}30;">
          <span>${tagline}</span>
        </div>
        <h1 class="font-serif text-4xl md:text-6xl font-bold leading-[1.15] text-stone-900 tracking-tight">
          ${headline}
        </h1>
        <p class="text-stone-600 text-base md:text-lg leading-relaxed max-w-xl">
          ${story}
        </p>
        <div class="flex flex-wrap items-center gap-4 pt-2">
          <a href="#contact" class="px-6 py-3.5 rounded-xl font-semibold text-white shadow-sm transition-all hover:opacity-95" style="background-color: ${accent};">
            Get in Touch
          </a>
          <a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}" target="_blank" rel="noopener noreferrer" class="px-6 py-3.5 rounded-xl font-semibold border border-stone-300 hover:border-stone-400 text-stone-700 bg-white/70 shadow-sm transition-all">
            Chat on WhatsApp
          </a>
        </div>
      </div>
      <div class="md:col-span-5">
        <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-200/80 aspect-[4/5] bg-stone-100">
          <img src="${heroImage}" alt="${name}" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent"></div>
          <div class="absolute bottom-4 left-4 right-4 text-white text-xs backdrop-blur-sm bg-black/30 p-3 rounded-lg border border-white/20">
            <p class="font-medium">${name} · ${draft.industry}</p>
            <p class="text-[11px] opacity-80">${address}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust / Highlights strip -->
    <section class="border-y border-stone-200/70 bg-white/50 py-10">
      <div class="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div class="space-y-1">
          <div class="font-serif font-bold text-2xl" style="color: ${primary};">Authentic</div>
          <div class="text-xs text-stone-500 uppercase tracking-wider font-mono">Real Expertise</div>
        </div>
        <div class="space-y-1">
          <div class="font-serif font-bold text-2xl" style="color: ${primary};">Dedicated</div>
          <div class="text-xs text-stone-500 uppercase tracking-wider font-mono">Personal Service</div>
        </div>
        <div class="space-y-1">
          <div class="font-serif font-bold text-2xl" style="color: ${primary};">Local</div>
          <div class="text-xs text-stone-500 uppercase tracking-wider font-mono">Community Focused</div>
        </div>
        <div class="space-y-1">
          <div class="font-serif font-bold text-2xl" style="color: ${primary};">Verified</div>
          <div class="text-xs text-stone-500 uppercase tracking-wider font-mono">5-Star Quality</div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="max-w-6xl mx-auto px-6 py-20 space-y-12">
      <div class="max-w-2xl space-y-3">
        <span class="text-xs font-mono uppercase tracking-widest font-semibold" style="color: ${accent};">About Our Work</span>
        <h2 class="font-serif text-3xl md:text-4xl font-bold text-stone-900">Built with purpose and care</h2>
        <p class="text-stone-600 leading-relaxed">${story}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-3">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white" style="background-color: ${primary};">01</div>
          <h3 class="font-serif font-bold text-stone-900 text-lg">Our Commitment</h3>
          <p class="text-xs text-stone-600 leading-relaxed">We deliver attentive service tailored to every unique need, ensuring reliability and honest value.</p>
        </div>
        <div class="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-3">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white" style="background-color: ${primary};">02</div>
          <h3 class="font-serif font-bold text-stone-900 text-lg">Clear Process</h3>
          <p class="text-xs text-stone-600 leading-relaxed">No guesswork or surprises. We communicate transparently at every step from first contact to completion.</p>
        </div>
        <div class="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-3">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white" style="background-color: ${primary};">03</div>
          <h3 class="font-serif font-bold text-stone-900 text-lg">Long-Term Value</h3>
          <p class="text-xs text-stone-600 leading-relaxed">Building relationships that last, backed by pride in our work and ongoing customer care.</p>
        </div>
      </div>
    </section>

    <!-- Contact & Details Section -->
    <section id="contact" class="bg-stone-900 text-stone-200 py-20 px-6">
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div class="space-y-6">
          <span class="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">Connect With Us</span>
          <h2 class="font-serif text-3xl md:text-4xl font-bold text-white">We'd love to hear from you</h2>
          <p class="text-stone-400 text-sm leading-relaxed">
            Reach out via phone, email, or visit our location. We are here to answer questions and assist you.
          </p>

          <div class="space-y-4 pt-4 text-sm">
            <div class="flex items-center gap-3">
              <span class="text-amber-400 font-bold font-mono">Phone:</span>
              <a href="tel:${phone.replace(/\s+/g, '')}" class="hover:text-white underline underline-offset-4">${phone}</a>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-amber-400 font-bold font-mono">Email:</span>
              <a href="mailto:${email}" class="hover:text-white underline underline-offset-4">${email}</a>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-amber-400 font-bold font-mono">Location:</span>
              <span>${address}</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-amber-400 font-bold font-mono">Hours:</span>
              <span>${hours}</span>
            </div>
          </div>
        </div>

        <div class="bg-stone-800/80 p-8 rounded-2xl border border-stone-700 space-y-4">
          <h3 class="font-serif font-bold text-white text-xl">Quick Message</h3>
          <form onsubmit="event.preventDefault(); alert('Message sent! Thank you for reaching out to ${name}.');" class="space-y-4 text-xs">
            <div>
              <label class="block text-stone-400 font-mono uppercase mb-1">Your Name</label>
              <input type="text" required placeholder="Jane Doe" class="w-full bg-stone-900 border border-stone-700 rounded-lg p-2.5 text-stone-200 focus:outline-none focus:border-amber-400">
            </div>
            <div>
              <label class="block text-stone-400 font-mono uppercase mb-1">Your Email</label>
              <input type="email" required placeholder="jane@example.com" class="w-full bg-stone-900 border border-stone-700 rounded-lg p-2.5 text-stone-200 focus:outline-none focus:border-amber-400">
            </div>
            <div>
              <label class="block text-stone-400 font-mono uppercase mb-1">Message</label>
              <textarea rows="3" required placeholder="How can we help you?" class="w-full bg-stone-900 border border-stone-700 rounded-lg p-2.5 text-stone-200 focus:outline-none focus:border-amber-400"></textarea>
            </div>
            <button type="submit" class="w-full py-3 rounded-lg font-bold text-white transition-all shadow-sm" style="background-color: ${accent};">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer class="bg-stone-950 text-stone-400 text-xs py-8 border-t border-stone-800 px-6">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div>
        © ${new Date().getFullYear()} ${name}. All rights reserved.
      </div>
      <div class="flex items-center gap-6 font-mono text-[11px]">
        <span>Privacy</span>
        <span>Terms</span>
        <span>Crafted from Template ${template?.id || draft.templateId}</span>
      </div>
    </div>
  </footer>

  <!-- Floating WhatsApp CTA (Rule 97) -->
  <a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}" target="_blank" rel="noopener noreferrer" class="fixed bottom-6 right-6 z-50 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-full shadow-xl hover:scale-105 transition-transform flex items-center justify-center" title="Chat on WhatsApp">
    <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
      <path d="M12.031 2C6.5 2 2 6.5 2 12.031c0 1.954.562 3.824 1.625 5.437L2 22l4.688-1.594A9.98 9.98 0 0012.031 22C17.562 22 22 17.5 22 12.031 22 6.5 17.562 2 12.031 2zm0 18.25c-1.688 0-3.281-.469-4.656-1.344l-.344-.219-2.781.938.938-2.719-.219-.344a8.13 8.13 0 01-1.312-4.531c0-4.563 3.719-8.281 8.374-8.281 4.563 0 8.281 3.718 8.281 8.281 0 4.563-3.718 8.219-8.281 8.219zm4.531-6.188c-.25-.125-1.469-.719-1.688-.812-.219-.094-.375-.125-.531.125-.156.25-.625.813-.781.969-.156.188-.313.188-.563.063-.25-.125-1.063-.375-2.031-1.25-.75-.688-1.25-1.531-1.406-1.781-.156-.25-.031-.406.094-.531.125-.125.25-.313.375-.469.125-.156.188-.25.281-.438.094-.188.031-.344-.031-.469-.063-.125-.531-1.281-.719-1.75-.188-.469-.375-.406-.531-.406h-.438c-.156 0-.406.063-.625.313-.219.25-.844.813-.844 2 0 1.188.875 2.344 1 2.5.125.156 1.719 2.625 4.156 3.688.594.25 1.063.406 1.438.531.625.188 1.188.156 1.625.094.5-.063 1.469-.625 1.688-1.219.219-.594.219-1.094.156-1.219-.063-.125-.219-.188-.469-.313z"/>
    </svg>
  </a>

</body>
</html>`;
}
