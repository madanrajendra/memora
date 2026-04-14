import React from 'react';
import { Link } from 'react-router-dom';
import {
  MessageSquare,
  Clock,
  User,
  Repeat,
  Lightbulb,
  BookOpen,
  Mic,
  Zap,
  LogOut,
  LayoutDashboard,
  Heart,
  Archive,
  Scale,
  Bot,
  Sparkles,
} from 'lucide-react';

const sidebarLinks = [
  { icon: MessageSquare, label: 'Neural Chat' },
  { icon: Clock, label: 'Memory Timeline' },
  { icon: User, label: 'Persona Model' },
  { icon: Repeat, label: 'Habit Loop' },
  { icon: Lightbulb, label: 'Decision Assistant' },
  { icon: BookOpen, label: 'Learning Vault' },
];

const quickCategories = [
  { icon: Sparkles, label: 'Memories' },
  { icon: Heart, label: 'Habits' },
  { icon: Archive, label: 'Vault' },
  { icon: Scale, label: 'Decisions' },
  { icon: Mic, label: 'Voice' },
  { icon: Bot, label: 'AI Chats' },
];

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Ambient blue glow */}
      <div className="pointer-events-none absolute left-1/2 top-[320px] h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-[#4bbce4]/20 blur-[140px]" />
      <div className="pointer-events-none absolute left-1/2 top-[560px] h-[500px] w-[1100px] -translate-x-1/2 rounded-full bg-[#5e10ed]/15 blur-[120px]" />

      {/* Logo */}
      <div className="relative z-10 flex items-center gap-2 md:gap-3 px-4 md:px-10 pt-6">
        <img
          src="/assets/logo.png"
          alt="Memora"
          className="h-10 w-10 md:h-12 md:w-12 object-contain"
        />
        <span className="font-orbitron text-[16px] md:text-[20px] uppercase tracking-widest text-white">
          Memora
        </span>
      </div>

      {/* Hero */}
      <section className="relative z-10 mx-auto mt-12 flex max-w-[900px] flex-col items-center px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#444487] bg-white/[0.02] px-4 py-2 backdrop-blur-sm shadow-[inset_0_0_22px_rgba(94,16,237,0.3)]">
          <Zap className="h-4 w-4 text-[#8a7fff]" />
          <span className="font-inter text-[14px] font-medium text-[#f7f7f8]">
            Introducing Our Latest Features
          </span>
        </div>

        <h1 className="mt-8 font-orienta text-[44px] leading-[1.05] text-[#f1f1f3] sm:text-[56px] lg:text-[58px]">
          Everything you think, remembered
        </h1>

        <p className="mt-6 max-w-[630px] font-inter text-[16px] leading-[24px] text-[#aeaeb8]">
          Memora remembers what matters, connects ideas over time, and helps you focus on
          what's important — effortlessly.
        </p>

        <Link
          to="/register"
          className="relative mt-10 inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-b from-[#742aff] to-[#5004db] px-8 py-4 font-inter text-[16px] font-medium text-white shadow-[0_10px_40px_-10px_rgba(116,42,255,0.6)] transition-transform hover:scale-[1.02]"
        >
          <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          Start Your Free Trial
        </Link>
      </section>

      {/* Dashboard preview */}
      <section className="relative z-10 mx-auto mt-16 max-w-[1283px] px-6 pb-24">
        <div className="relative overflow-hidden rounded-[22px] border border-white/5 bg-gradient-to-b from-[#0a0818] to-black p-px shadow-[0_0_120px_-20px_rgba(75,188,228,0.25)]">
          <div className="rounded-[22px] bg-black/80 backdrop-blur-sm">
            <div className="flex min-h-[720px] flex-col lg:flex-row">
              {/* Sidebar */}
              <aside className="flex w-full flex-col border-b border-[#1a1a24] px-6 py-6 lg:w-[280px] lg:border-b-0 lg:border-r">
                <div className="mb-6 flex items-center gap-2">
                  <span className="rounded-full border border-[#444487] bg-white/[0.02] px-3 py-1 font-inter text-[11px] font-semibold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#0175ff] to-white">
                    PHASE 0
                  </span>
                </div>

                <div className="mb-8 flex items-center gap-3">
                  <LayoutDashboard className="h-4 w-4 text-[#d6d7d6]" />
                  <span className="font-inter text-[16px] font-extralight text-[#d6d7d6]">
                    Dashboard
                  </span>
                </div>

                <nav className="flex flex-col gap-5">
                  {sidebarLinks.map(({ icon: Icon, label }) => (
                    <button
                      key={label}
                      type="button"
                      className="flex items-center gap-3 text-left font-inter text-[15px] text-white/90 transition-colors hover:text-white"
                    >
                      <Icon className="h-4 w-4 text-white/70" />
                      {label}
                    </button>
                  ))}
                </nav>

                <div className="mt-auto flex flex-col gap-3 pt-10">
                  <div className="flex items-center gap-3 rounded-full border border-[#444487] px-4 py-2.5">
                    <Mic className="h-4 w-4 text-white" />
                    <span className="font-orienta text-[13px] text-white">Voice Agent</span>
                    <span className="ml-auto font-orienta text-[10px] text-white/70">120s</span>
                  </div>
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 rounded-full border border-[#343232] px-4 py-2.5 font-inter text-[13px] font-medium uppercase tracking-wider text-[#f7f7f8] transition-colors hover:border-[#444487]"
                  >
                    <Zap className="h-4 w-4 text-[#8a7fff]" />
                    Upgrade
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 rounded-full border border-[#343232] px-4 py-2.5 font-inter text-[13px] font-medium uppercase text-white transition-colors hover:border-[#444487]"
                  >
                    <User className="h-4 w-4" />
                    Profile
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 rounded-full border border-[#343232] px-4 py-2.5 font-inter text-[13px] font-light text-white transition-colors hover:border-[#444487]"
                  >
                    <LogOut className="h-4 w-4" />
                    Sign Out
                  </button>
                </div>
              </aside>

              {/* Main content */}
              <div className="flex-1 px-6 py-8 lg:px-10">
                <div className="mb-2 font-inter text-[14px] text-[#8c8c94]">Good evening,</div>
                <h2 className="mb-2 font-inter text-[32px] font-bold text-white">Chandan</h2>
                <p className="mb-10 font-inter text-[14px] text-[#8c8c94]">
                  Your memory, learning, and decisions — all in one evolving AI system.
                </p>

                {/* Quick categories */}
                <div className="mb-10 grid grid-cols-3 gap-4 sm:grid-cols-6">
                  {quickCategories.map(({ icon: Icon, label }) => (
                    <button
                      key={label}
                      type="button"
                      className="group flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.04] to-transparent py-5 transition-all hover:border-[#444487] hover:from-white/[0.08]"
                    >
                      <Icon className="h-6 w-6 text-white/80 transition-colors group-hover:text-white" />
                      <span className="font-inter text-[12px] text-white/90">{label}</span>
                    </button>
                  ))}
                </div>

                {/* Empty cards */}
                <div className="flex flex-col gap-5">
                  {[0, 1].map((i) => (
                    <div
                      key={i}
                      className="relative flex h-[107px] items-center gap-4 overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent px-6"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
                        {i === 0 ? (
                          <MessageSquare className="h-5 w-5 text-white/60" />
                        ) : (
                          <Clock className="h-5 w-5 text-white/60" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="mb-2 h-2 w-1/3 rounded-full bg-white/10" />
                        <div className="h-2 w-2/3 rounded-full bg-white/5" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
