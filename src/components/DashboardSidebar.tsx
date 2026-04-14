import React from 'react';
import { Link } from 'react-router-dom';
import {
  AudioLines,
  BookOpenText,
  BrainCircuit,
  ChevronRight,
  CircleUserRound,
  DatabaseZap,
  GitBranch,
  LayoutDashboard,
  LogOut,
  MessageSquareText,
  ScanSearch,
  Sparkles,
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const navigationItems = [
  { label: 'Dashboard', icon: LayoutDashboard, route: '/dashboard' },
  { label: 'Neural Chat', icon: MessageSquareText, route: '/neural-chat' },
  { label: 'Memory Timeline', icon: DatabaseZap, route: '/memory-timeline' },
  { label: 'Personal Model', icon: BrainCircuit, route: '/personal-model' },
  { label: 'Habit Logic', icon: GitBranch, route: '/habits-goals' },
  { label: 'Decision Assistant', icon: ScanSearch, route: '/decision-lab' },
  { label: 'Learning Vault', icon: BookOpenText, route: '/learning-vault' },
] as const;

type DashboardSidebarProps = {
  activeItem: (typeof navigationItems)[number]['label'];
};

const getInitials = (value: string) =>
  value
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('') || 'ME';

export default function DashboardSidebar({
  activeItem,
}: DashboardSidebarProps) {
  const { currentUser, logout } = useAuth();
  const displayName =
    currentUser?.displayName || currentUser?.email?.split('@')[0] || 'Memora User';
  const email = currentUser?.email || 'Persistent intelligence workspace';

  const handleSignOut = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <aside className="flex flex-col gap-4">
      <div className="relative overflow-hidden rounded-[28px] border border-[#34235c] bg-[linear-gradient(180deg,rgba(42,25,87,0.9),rgba(11,11,19,0.92))] p-[1px] shadow-[0_28px_80px_rgba(32,16,78,0.42)]">
        <div className="relative flex h-full flex-col gap-4 rounded-[27px] bg-[radial-gradient(circle_at_top,rgba(76,53,140,0.28),rgba(7,8,12,0.98)_58%)] p-4">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_18%,transparent_82%,rgba(130,88,255,0.08))]" />

          <div className="relative flex items-center gap-3 rounded-[20px] border border-white/8 bg-white/[0.03] p-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-[linear-gradient(180deg,#7f43ff_0%,#2b1f62_100%)] font-['Space_Grotesk'] text-sm font-semibold tracking-[0.18em] text-white shadow-[0_14px_32px_rgba(95,34,255,0.35)]">
              {getInitials(displayName)}
            </div>

            <div className="min-w-0 flex-1">
              <p className="font-['Instrument_Sans'] text-[10px] uppercase tracking-[0.26em] text-[#c0b7ff]">
                Memory Synced
              </p>
              <h3 className="truncate font-['Space_Grotesk'] text-[16px] font-semibold text-white">
                {displayName}
              </h3>
              <p className="truncate font-['Inter'] text-[11px] text-white/45">
                {email}
              </p>
            </div>
          </div>

          <div className="relative grid grid-cols-[auto,1fr,auto] items-center gap-3 rounded-[18px] border border-[#382d55] bg-[#0a0911]/90 px-3.5 py-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-[radial-gradient(circle,rgba(127,67,255,0.44),rgba(38,24,77,0.95))]">
              <AudioLines className="h-4 w-4 text-white/85" strokeWidth={1.9} />
            </div>

            <div>
              <p className="font-['Instrument_Sans'] text-[10px] uppercase tracking-[0.22em] text-white/35">
                Voice Agent
              </p>
              <p className="font-['Space_Grotesk'] text-[13px] font-medium text-white/86">
                Ready for a 120s sync
              </p>
            </div>

            <span className="rounded-full border border-[#5d49a7] bg-[#171228] px-2.5 py-1 text-[10px] font-medium text-[#ddd6ff]">
              Live
            </span>
          </div>

          <section className="relative rounded-[22px] border border-white/8 bg-black/30 p-3.5 backdrop-blur-xl">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="font-['Instrument_Sans'] text-[10px] uppercase tracking-[0.28em] text-white/32">
                  Workspace Links
                </p>
                <h4 className="mt-1 font-['Space_Grotesk'] text-[15px] font-medium text-white/88">
                  Everything together
                </h4>
              </div>

              <div className="rounded-full border border-white/8 bg-white/[0.04] px-2.5 py-1 text-[10px] text-white/45">
                {navigationItems.length} items
              </div>
            </div>

            <nav className="mt-3 flex flex-col gap-2">
              {navigationItems.map(({ label, icon: Icon, route }) => {
                const isActive = label === activeItem;

                return (
                  <Link
                    key={label}
                    to={route}
                    aria-current={isActive ? 'page' : undefined}
                    className={`group flex items-center gap-3 rounded-[16px] border px-3.5 py-3 transition-all duration-200 ${
                      isActive
                        ? 'border-[#5a4aa8] bg-[linear-gradient(90deg,rgba(93,58,176,0.24),rgba(10,10,17,0.98))] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]'
                        : 'border-transparent bg-white/[0.02] text-white/56 hover:border-white/10 hover:bg-white/[0.06] hover:text-white/90'
                    }`}
                  >
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-[12px] border transition-colors ${
                        isActive
                          ? 'border-[#6b57c9] bg-[#171127] text-white'
                          : 'border-white/7 bg-black/30 text-white/60 group-hover:border-white/12 group-hover:text-white/88'
                      }`}
                    >
                      <Icon className="h-4 w-4" strokeWidth={1.8} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <span className="block truncate font-['Manrope'] text-[12px] font-medium">
                        {label}
                      </span>
                    </div>

                    <ChevronRight
                      className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                        isActive
                          ? 'text-white/70'
                          : 'text-white/28 group-hover:translate-x-0.5 group-hover:text-white/52'
                      }`}
                      strokeWidth={1.8}
                    />
                  </Link>
                );
              })}
            </nav>
          </section>

          <div className="relative grid gap-2.5">
            <Link
              to="/payment"
              className="dashboard-shimmer inline-flex items-center justify-between overflow-hidden rounded-[18px] border border-[#4a4a8f] bg-[linear-gradient(180deg,rgba(20,20,32,0.98),rgba(8,8,14,0.98))] px-3.5 py-3 text-white shadow-[inset_0_0_26px_rgba(79,23,210,0.24)]"
            >
              <div className="flex items-center gap-2.5">
                <div className="rounded-full border border-white/10 bg-white/[0.03] p-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-white/85" strokeWidth={1.8} />
                </div>
                <div>
                  <p className="font-['Instrument_Sans'] text-[10px] uppercase tracking-[0.14em] text-white/46">
                    Premium Tier
                  </p>
                  <span className="font-['Instrument_Sans'] text-[12px] font-medium tracking-[0.08em]">
                    Upgrade Workspace
                  </span>
                </div>
              </div>
              <ChevronRight className="h-4 w-4 text-white/55" strokeWidth={1.8} />
            </Link>

            <button
              type="button"
              className="flex items-center gap-3 rounded-[18px] border border-[#2e2d36] bg-[#08080b] px-3.5 py-3 text-left text-white/72 transition-colors hover:border-white/12 hover:text-white"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[12px] border border-white/8 bg-white/[0.03]">
                <CircleUserRound className="h-4 w-4" strokeWidth={1.8} />
              </div>
              <div>
                <p className="font-['Instrument_Sans'] text-[10px] uppercase tracking-[0.18em] text-white/35">
                  Account
                </p>
                <span className="font-['Inter'] text-[12px]">Profile Settings</span>
              </div>
            </button>

            <button
              type="button"
              onClick={handleSignOut}
              className="flex items-center gap-3 rounded-[18px] border border-[#2e2d36] bg-[#08080b] px-3.5 py-3 text-left text-white/72 transition-colors hover:border-white/12 hover:text-white"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[12px] border border-white/8 bg-white/[0.03]">
                <LogOut className="h-4 w-4" strokeWidth={1.8} />
              </div>
              <div>
                <p className="font-['Instrument_Sans'] text-[10px] uppercase tracking-[0.18em] text-white/35">
                  Session
                </p>
                <span className="font-['Inter'] text-[12px]">Sign Out Securely</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
