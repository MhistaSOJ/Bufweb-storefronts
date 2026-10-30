/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Calendar, Users, Heart, BookOpen, Clock, Radio, Video } from 'lucide-react';

export const GraceChurchReplica: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-stone-900 font-sans antialiased selection:bg-[#E86C45] selection:text-white">
      {/* Hero Header Wrapper with Stage Lighting */}
      <div className="relative bg-[#111927] text-white">
        {/* Navigation */}
        <header className="relative z-30 max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border-2 border-[#E86C45] flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-[#E86C45]" />
            </div>
            <span className="font-bold text-lg tracking-wider">CHURCH</span>
          </div>

          <nav className="hidden md:flex items-center gap-7 text-xs font-semibold tracking-wider text-stone-300">
            <a href="#home" className="hover:text-white transition-colors text-white">Home</a>
            <a href="#events" className="hover:text-white transition-colors">Events</a>
            <a href="#pages" className="hover:text-white transition-colors">Pages</a>
            <a href="#give" className="hover:text-white transition-colors">Give Online</a>
            <a href="#messages" className="hover:text-white transition-colors">Past Messages</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          <div>
            <button className="px-6 py-2.5 rounded-md bg-[#E86C45] hover:bg-[#D55A34] text-white font-semibold text-xs tracking-wider uppercase transition-colors shadow-sm">
              Donate
            </button>
          </div>
        </header>

        {/* Hero Visual Area */}
        <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-36">
          <img
            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1600&q=80"
            alt="Worship concert stage lighting"
            className="absolute inset-0 w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111927] via-transparent to-[#111927]/90" />

          <div className="relative z-10 max-w-xl space-y-4">
            <span className="text-[11px] font-mono tracking-widest text-[#E86C45] uppercase font-bold">
              CHURCH LOVE, FAITH LOVE
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold leading-tight tracking-tight">
              Welcome To <br />
              Our Church
            </h1>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-md">
              A community where you can find belonging, grow in your relationship with Christ, and serve our local neighborhoods with grace and joy.
            </p>
            <div className="pt-2">
              <button className="px-6 py-3 rounded-md bg-[#E86C45] hover:bg-[#D55A34] text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-lg">
                I'm New Here
              </button>
            </div>
          </div>
        </div>

        {/* Floating White Banner over the Section Boundary */}
        <div className="relative z-20 max-w-5xl mx-auto px-6 -mb-20">
          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border border-stone-200 text-stone-900 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-5 aspect-[16/10] rounded-xl overflow-hidden bg-stone-100">
              <img
                src="https://images.unsplash.com/photo-1519791883288-dc8bd696e667?auto=format&fit=crop&w=700&q=80"
                alt="Sunday Live Stream Congregation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-600 text-[10px] font-mono uppercase font-bold">
                <Radio className="w-3 h-3 animate-pulse" />
                <span>Live Broadcast</span>
              </div>
              <h3 className="font-bold text-xl sm:text-2xl text-stone-900">
                Join the Sunday Live Stream
              </h3>
              <p className="text-xs text-stone-500 font-mono">
                Every Sunday at 9:00 am & 11:00 am
              </p>
              <div className="flex items-center gap-4 pt-1">
                <button className="px-5 py-2.5 rounded-md bg-[#E86C45] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#D55A34] transition-colors flex items-center gap-1.5 shadow-xs">
                  <span>Join Now</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
                <a href="#messages" className="text-xs font-semibold text-stone-600 hover:text-stone-900">
                  Past Messages
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid Section */}
      <section className="pt-36 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Description */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 font-bold">OUR SERVICES</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
              We Love Serving Our Local Community
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm leading-relaxed">
              From children's ministries and youth group fellowship to compassionate counseling and benevolent food outreaches, our door is always open.
            </p>
            <div>
              <button className="px-6 py-2.5 rounded-md bg-[#E86C45] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#D55A34] transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Right 6 Tile Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="bg-stone-50 hover:bg-stone-100 p-5 rounded-xl border border-stone-200/80 space-y-2 text-center transition-colors">
              <div className="w-9 h-9 rounded-lg bg-white border border-stone-200 mx-auto flex items-center justify-center text-[#E86C45] shadow-xs">
                <Clock className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-xs text-stone-900">Weekly Services</h4>
              <p className="text-[10px] text-stone-500">Sundays & Midweek</p>
            </div>

            <div className="bg-stone-50 hover:bg-stone-100 p-5 rounded-xl border border-stone-200/80 space-y-2 text-center transition-colors">
              <div className="w-9 h-9 rounded-lg bg-white border border-stone-200 mx-auto flex items-center justify-center text-[#E86C45] shadow-xs">
                <Users className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-xs text-stone-900">Youth</h4>
              <p className="text-[10px] text-stone-500">Grades 6–12</p>
            </div>

            <div className="bg-stone-50 hover:bg-stone-100 p-5 rounded-xl border border-stone-200/80 space-y-2 text-center transition-colors">
              <div className="w-9 h-9 rounded-lg bg-white border border-stone-200 mx-auto flex items-center justify-center text-[#E86C45] shadow-xs">
                <BookOpen className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-xs text-stone-900">Kids</h4>
              <p className="text-[10px] text-stone-500">Nursery to Grade 5</p>
            </div>

            <div className="bg-stone-50 hover:bg-stone-100 p-5 rounded-xl border border-stone-200/80 space-y-2 text-center transition-colors">
              <div className="w-9 h-9 rounded-lg bg-white border border-stone-200 mx-auto flex items-center justify-center text-[#E86C45] shadow-xs">
                <Calendar className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-xs text-stone-900">Special Events</h4>
              <p className="text-[10px] text-stone-500">Seasonal Gatherings</p>
            </div>

            <div className="bg-stone-50 hover:bg-stone-100 p-5 rounded-xl border border-stone-200/80 space-y-2 text-center transition-colors">
              <div className="w-9 h-9 rounded-lg bg-white border border-stone-200 mx-auto flex items-center justify-center text-[#E86C45] shadow-xs">
                <Heart className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-xs text-stone-900">Counseling</h4>
              <p className="text-[10px] text-stone-500">Confidential Care</p>
            </div>

            <div className="bg-stone-50 hover:bg-stone-100 p-5 rounded-xl border border-stone-200/80 space-y-2 text-center transition-colors">
              <div className="w-9 h-9 rounded-lg bg-white border border-stone-200 mx-auto flex items-center justify-center text-[#E86C45] shadow-xs">
                <Users className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-xs text-stone-900">Benevolence</h4>
              <p className="text-[10px] text-stone-500">Food & Assistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Series Section */}
      <section className="bg-stone-50 py-20 px-6 border-t border-stone-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#E86C45] font-bold">CURRENT SERIES</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900">Hope for Tomorrow</h2>
            <p className="text-xs text-stone-500 leading-relaxed">
              Get caught up with the current message series! Exploring peace and courage in uncertain times.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl overflow-hidden border border-stone-200 shadow-sm space-y-4 pb-6">
              <div className="aspect-[16/10] bg-stone-200">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=700&q=80"
                  alt="Renewing your Mind"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-6 space-y-2">
                <span className="text-[10px] font-mono text-stone-400 uppercase">HOPE FOR TOMORROW / PART 1</span>
                <h3 className="font-bold text-base text-stone-900">Renewing your Mind</h3>
                <a href="#listen" className="text-xs font-bold text-[#E86C45] uppercase tracking-wider flex items-center gap-1 hover:underline pt-2">
                  <span>LISTEN TO THE MESSAGE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden border border-stone-200 shadow-sm space-y-4 pb-6">
              <div className="aspect-[16/10] bg-stone-200">
                <img
                  src="https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=700&q=80"
                  alt="Having Faith when life is Hard"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-6 space-y-2">
                <span className="text-[10px] font-mono text-stone-400 uppercase">HOPE FOR TOMORROW / PART 2</span>
                <h3 className="font-bold text-base text-stone-900">Having Faith when life is Hard</h3>
                <a href="#listen" className="text-xs font-bold text-[#E86C45] uppercase tracking-wider flex items-center gap-1 hover:underline pt-2">
                  <span>LISTEN TO THE MESSAGE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden border border-stone-200 shadow-sm space-y-4 pb-6">
              <div className="aspect-[16/10] bg-stone-200">
                <img
                  src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=700&q=80"
                  alt="The Hope of His Calling"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-6 space-y-2">
                <span className="text-[10px] font-mono text-stone-400 uppercase">HOPE FOR TOMORROW / PART 3</span>
                <h3 className="font-bold text-base text-stone-900">The Hope of His Calling</h3>
                <a href="#listen" className="text-xs font-bold text-[#E86C45] uppercase tracking-wider flex items-center gap-1 hover:underline pt-2">
                  <span>LISTEN TO THE MESSAGE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 text-xs py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-bold text-white text-sm">Grace Community Church</div>
          <div>Replicated Line-for-Line from reference design image.</div>
        </div>
      </footer>
    </div>
  );
};
