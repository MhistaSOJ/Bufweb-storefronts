/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Search, Play, ArrowRight, Calendar, MapPin } from 'lucide-react';

export const GospelReplica: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FDFBF9] text-[#2D2A26] font-serif antialiased selection:bg-[#7D2228] selection:text-white">
      {/* Top Header */}
      <header className="absolute inset-x-0 top-0 z-30 px-8 py-6 flex items-center justify-between text-white/90">
        <div className="font-serif text-2xl tracking-wider font-light">
          Gospel
        </div>

        <nav className="hidden md:flex items-center gap-8 text-xs font-sans tracking-widest uppercase">
          <a href="#demos" className="hover:text-white transition-colors">Demos</a>
          <a href="#church" className="hover:text-white transition-colors">Our Church</a>
          <a href="#donations" className="hover:text-white transition-colors">Donations</a>
          <a href="#events" className="hover:text-white transition-colors">Events</a>
          <a href="#news" className="hover:text-white transition-colors">News</a>
          <a href="#pages" className="hover:text-white transition-colors">All Pages</a>
        </nav>

        <div className="flex items-center gap-4">
          <button title="Search" className="hover:text-white transition-colors"><Search className="w-4 h-4" /></button>
          <button className="px-5 py-2 rounded-full border border-white/50 hover:bg-white hover:text-black font-sans text-xs tracking-wider uppercase transition-all">
            Donate
          </button>
        </div>
      </header>

      {/* Hero Section: Misty Lake & Mountain */}
      <section className="relative min-h-[580px] sm:min-h-[660px] flex items-center justify-center text-center px-6 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80"
          alt="Misty mountain valley"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

        <div className="relative z-10 max-w-2xl mx-auto space-y-6 text-white pt-16">
          <h1 className="font-serif text-4xl sm:text-6xl font-normal leading-tight tracking-tight">
            Life-Changing <br />
            Journey to God
          </h1>
          <p className="text-white/80 font-sans text-xs sm:text-sm leading-relaxed max-w-lg mx-auto font-light">
            Our common creed is our belief in the Bible, our deep faith in Jesus Christ, and our acceptance of the unconditional love of God.
          </p>
          <div>
            <button className="px-7 py-3 rounded-md bg-[#7D2228] hover:bg-[#681B20] text-white font-sans text-xs uppercase tracking-widest transition-all shadow-lg">
              Explore now
            </button>
          </div>
        </div>
      </section>

      {/* Maroon Banner: Discover Christ And Find Peace */}
      <section className="bg-[#7D2228] text-white py-14 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 aspect-video rounded-lg overflow-hidden relative shadow-xl bg-black">
            <img
              src="https://images.unsplash.com/photo-1543807535-eceef0bc6599?auto=format&fit=crop&w=800&q=80"
              alt="Church Sanctuary"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white border border-white/40 cursor-pointer hover:scale-105 transition-transform">
                <Play className="w-5 h-5 fill-current ml-0.5" />
              </div>
            </div>
          </div>

          <div className="md:col-span-8 space-y-3">
            <h2 className="font-serif text-2xl sm:text-3xl font-light">Discover Christ And Find Peace</h2>
            <p className="font-sans text-xs text-white/80 leading-relaxed max-w-xl font-light">
              No matter what struggles you're facing in life, we want you to know you don't have to walk through them alone.
            </p>
            <div className="pt-1">
              <a href="#about" className="font-sans text-xs uppercase tracking-widest text-white/90 hover:text-white inline-flex items-center gap-1">
                <span>+ Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are: 3 Classical Etchings */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center space-y-16">
        <div className="space-y-2">
          <span className="font-sans text-[10px] tracking-[0.25em] text-stone-500 uppercase">Who we are</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2D2A26]">A Church That Loves God And People</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Card 1 */}
          <div className="space-y-4">
            <div className="w-36 h-36 mx-auto rounded-full overflow-hidden border border-stone-200 p-2 flex items-center justify-center bg-white shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&w=400&q=80"
                alt="Our Beliefs"
                className="w-full h-full object-cover rounded-full grayscale"
              />
            </div>
            <h3 className="font-serif text-lg font-bold">Our Beliefs</h3>
            <p className="font-sans text-xs text-stone-500 leading-relaxed font-light">
              Worry Ends When Faith Begins. The Magnificent Story of a Life Changing Journey to God.
            </p>
            <a href="#beliefs" className="font-sans text-[11px] uppercase tracking-wider text-[#7D2228] hover:underline">
              • Read more
            </a>
          </div>

          {/* Card 2 */}
          <div className="space-y-4">
            <div className="w-36 h-36 mx-auto rounded-full overflow-hidden border border-stone-200 p-2 flex items-center justify-center bg-white shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1548625361-195fe5787e91?auto=format&fit=crop&w=400&q=80"
                alt="Our Church"
                className="w-full h-full object-cover rounded-full grayscale"
              />
            </div>
            <h3 className="font-serif text-lg font-bold">Our Church</h3>
            <p className="font-sans text-xs text-stone-500 leading-relaxed font-light">
              Worry Ends When Faith Begins. The Magnificent Story of a Life Changing Journey to God.
            </p>
            <a href="#church" className="font-sans text-[11px] uppercase tracking-wider text-[#7D2228] hover:underline">
              • Read more
            </a>
          </div>

          {/* Card 3 */}
          <div className="space-y-4">
            <div className="w-36 h-36 mx-auto rounded-full overflow-hidden border border-stone-200 p-2 flex items-center justify-center bg-white shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=400&q=80"
                alt="Our Mission"
                className="w-full h-full object-cover rounded-full grayscale"
              />
            </div>
            <h3 className="font-serif text-lg font-bold">Our Mission</h3>
            <p className="font-sans text-xs text-stone-500 leading-relaxed font-light">
              Worry Ends When Faith Begins. The Magnificent Story of a Life Changing Journey to God.
            </p>
            <a href="#mission" className="font-sans text-[11px] uppercase tracking-wider text-[#7D2228] hover:underline">
              • Read more
            </a>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="bg-[#F8F5F0] py-20 px-6 border-y border-stone-200">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <span className="font-sans text-[10px] tracking-[0.25em] text-stone-500 uppercase">Coming Soon</span>
            <h2 className="font-serif text-3xl sm:text-4xl">Upcoming Events</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm space-y-3">
              <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#7D2228]">November 4, 2022</span>
              <h4 className="font-serif font-bold text-base">Suicide Loss Support Group</h4>
              <p className="font-sans text-xs text-stone-500 leading-relaxed font-light">
                A supportive group for those who have lost a loved one to suicide.
              </p>
              <div className="text-[11px] font-sans text-stone-400 flex items-center gap-1.5 pt-2">
                <MapPin className="w-3.5 h-3.5 text-stone-500" />
                <span>Worship Center</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm space-y-3">
              <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#7D2228]">November 19, 2022</span>
              <h4 className="font-serif font-bold text-base">Rise and Shine Stretch</h4>
              <p className="font-sans text-xs text-stone-500 leading-relaxed font-light">
                Kick off the day with stretching into the glorious beauty of God's abundance.
              </p>
              <div className="text-[11px] font-sans text-stone-400 flex items-center gap-1.5 pt-2">
                <MapPin className="w-3.5 h-3.5 text-stone-500" />
                <span>Virtual Event</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm space-y-3">
              <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#7D2228]">December 10, 2022</span>
              <h4 className="font-serif font-bold text-base">Community Gatherings</h4>
              <p className="font-sans text-xs text-stone-500 leading-relaxed font-light">
                We will gather together to worship, seek God, and build life-giving friendships.
              </p>
              <div className="text-[11px] font-sans text-stone-400 flex items-center gap-1.5 pt-2">
                <MapPin className="w-3.5 h-3.5 text-stone-500" />
                <span>Terr. 1 Lake Forest</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1C1817] text-stone-400 text-xs py-12 px-6 font-sans">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-serif text-lg text-white">Gospel Church</div>
          <div className="text-stone-500">Replicated Line-for-Line from reference image.</div>
        </div>
      </footer>
    </div>
  );
};
