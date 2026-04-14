import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Brain,
  DatabaseZap,
  FolderArchive,
  GitBranch,
  AudioLines,
  BotMessageSquare,
  Sparkles,
  ArrowRight,
  User,
  LogOut,
  ChevronRight,
  Mic,
  Settings2,
  Search,
  Plus,
  Bell,
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const navigationItems = [
  { label: 'Dashboard', icon: Brain, route: '/dashboard' },
  { label: 'Neural Chat', icon: BotMessageSquare, route: '/neural-chat' },
  { label: 'Memory Timeline', icon: DatabaseZap, route: '/memory-timeline' },
  { label: 'Persona Model', icon: Sparkles, route: '/personal-model' },
  { label: 'Habit Loop', icon: GitBranch, route: '/habits-goals' },
  { label: 'Decision Assistant', icon: ChevronRight, route: '/decision-lab' },
  { label: 'Learning Vault', icon: FolderArchive, route: '/learning-vault' },
] as const;

const dashboardCards = [
  { label: 'Memories', icon: Brain, description: 'Reconnect moments, ideas, and long-range memory threads.' },
  { label: 'Habits', icon: GitBranch, description: 'Track routines, reinforce streaks, and shape focus loops.' },
  { label: 'Vault', icon: FolderArchive, description: 'Store research, learning assets, and structured knowledge.' },
  { label: 'Decisions', icon: DatabaseZap, description: 'Review branches, trade-offs, and high-signal outcomes.' },
  { label: 'Persona Model', icon: Sparkles, description: 'Map your cognitive architecture, identity layers, and behavioral traits.' },
  { label: 'AI Chats', icon: BotMessageSquare, description: 'Open a conversational workspace for memory-aware guidance.' },
];

export default function UserDashboardLandingPage() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const displayName = currentUser?.displayName || currentUser?.email?.split('@')[0] || 'User';

  const handleSignOut = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-inter selection:bg-[#742aff]/30">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[20%] w-[60%] h-[40%] bg-[#742aff]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[10%] w-[50%] h-[50%] bg-[#0051FF]/10 blur-[150px] rounded-full" />
      </div>

      {/* Header / Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 py-4 md:py-6 backdrop-blur-md bg-black/20">
        <div className="flex items-center gap-2 md:gap-3">
          <img src="/assets/logo.png" alt="Memora" className="h-8 w-auto" />
          <span className="font-orbitron text-xl tracking-[0.2em] uppercase text-white/90">Memora</span>
        </div>
        
        <div className="flex items-center gap-3 md:gap-6">
          <Link to="/home" className="hidden sm:block text-sm font-medium text-white/60 hover:text-white transition-colors">Home</Link>
          <Link to="/payment" className="hidden sm:block text-sm font-medium text-white/60 hover:text-white transition-colors">Pricing</Link>
          <button 
            onClick={handleSignOut}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-all"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-8 flex flex-col items-center text-center">
        {/* Features Badge */}
        <div className="mt-8 mb-6 inline-flex items-center gap-2.5 px-6 py-2 rounded-full border border-[#444487] bg-[#742aff]/5 backdrop-blur-sm shadow-[0_0_20px_rgba(94,16,237,0.2)]">
          <Sparkles className="h-4 w-4 text-[#742aff]" />
          <span className="text-sm font-medium text-[#f7f7f8] tracking-wide">Introducing Our Latest Features</span>
        </div>

        <h1 className="max-w-4xl font-orienta text-4xl sm:text-6xl md:text-7xl font-medium leading-[1.1] mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent px-4">
          Everything you think, remembered
        </h1>
        
        <p className="max-w-2xl text-base md:text-xl text-[#aeaeb8] font-medium leading-relaxed mb-10 px-6">
          Memora remembers what matters, connects ideas over time, and helps you focus on what's important — effortlessly.
        </p>

        <button 
          onClick={() => navigate('/register')}
          className="group relative px-8 py-4 rounded-full bg-gradient-to-b from-[#742aff] to-[#5004db] text-lg font-semibold shadow-[0_10px_40px_rgba(116,42,255,0.4)] hover:shadow-[0_15px_60px_rgba(116,42,255,0.6)] transition-all overflow-hidden"
        >
          <span className="relative z-10">Start Your Free Trial</span>
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>

        {/* Central Orb Visual */}
        <div className="mt-16 relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
          <div className="absolute inset-[-40px] bg-[#742aff]/20 blur-[60px] rounded-full animate-pulse" />
          <img 
            src="/assets/memora-core.png" 
            alt="Memora Core" 
            className="relative z-10 w-full h-full object-contain animate-float drop-shadow-[0_0_50px_rgba(116,42,255,0.5)]" 
          />
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="px-4 md:px-8 pb-32">
        <div className="max-w-[1400px] mx-auto rounded-[24px] md:rounded-[32px] border border-white/10 bg-[#050507]/80 backdrop-blur-2xl shadow-[0_40px_100px_rgba(0,0,0,0.8)] overflow-hidden">
          <div className="flex flex-col md:flex-row h-full">
            
            {/* Sidebar */}
            <aside className="w-full md:w-72 border-r border-white/5 p-6 flex flex-col gap-8 bg-black/20">
              <div className="flex flex-col gap-3">
                <div className="text-[10px] font-bold tracking-[0.25em] text-[#742aff] uppercase mb-2">
                  System Status
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#444487]/30 bg-[#742aff]/5">
                  <div className="w-2 h-2 rounded-full bg-[#742aff] animate-pulse" />
                  <span className="text-xs font-semibold text-[#8ab8ff]">PHASE 0 ONLINE</span>
                </div>
              </div>

              <nav className="flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible gap-2 md:gap-1 pb-2 md:pb-0 scrollbar-hide">
                {navigationItems.map((item) => {
                  const isActive = item.label === 'Dashboard';
                  return (
                    <Link
                      key={item.label}
                      to={item.route}
                      className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all whitespace-nowrap md:whitespace-normal ${
                        isActive 
                          ? 'bg-white/5 text-white border border-white/10' 
                          : 'text-white/40 hover:text-white/70 hover:bg-white/[0.02]'
                      }`}
                    >
                      <item.icon className={`h-5 w-5 shrink-0 ${isActive ? 'text-[#742aff]' : ''}`} />
                      <span className="text-sm font-medium">{item.label}</span>
                      {isActive && <ChevronRight className="ml-auto h-4 w-4 text-white/30 hidden md:block" />}
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-auto flex flex-col gap-4">
                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#742aff]/20 p-2 rounded-lg">
                      <Mic className="h-4 w-4 text-[#742aff]" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-white/40">Voice Agent</div>
                      <div className="text-xs font-semibold text-white/90">120s / Day</div>
                    </div>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-[#742aff]" />
                </div>

                <Link
                  to="/payment"
                  className="flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-gradient-to-r from-[#742aff]/20 to-[#5004db]/20 border border-[#742aff]/30 text-sm font-bold tracking-widest text-[#cdb8ff] hover:from-[#742aff]/30 hover:to-[#5004db]/30 transition-all"
                >
                  <Sparkles className="h-4 w-4" />
                  UPGRADE
                </Link>

                <div className="flex flex-col gap-1 border-t border-white/10 pt-4">
                  <button className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 text-white/60 hover:text-white transition-all text-sm font-medium">
                    <User className="h-4 w-4" />
                    Profile Settings
                  </button>
                  <button 
                    onClick={handleSignOut}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 text-white/60 hover:text-white transition-all text-sm font-medium"
                  >
                    <LogOut className="h-4 w-4" />
                    Sign Out
                  </button>
                </div>
              </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col relative bg-[#050505]">
              {/* Internal Header */}
              <div className="flex items-center justify-between px-8 py-4 border-b border-white/5">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#742aff]" />
                    <span className="text-[10px] font-bold tracking-[0.2em] text-[#8ab8ff] uppercase">Phase 0 Dashboard</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-white/40">
                  <Search className="h-4 w-4 cursor-pointer hover:text-white transition-colors" />
                  <Bell className="h-4 w-4 cursor-pointer hover:text-white transition-colors" />
                  <Settings2 className="h-4 w-4 cursor-pointer hover:text-white transition-colors" />
                </div>
              </div>

              <div className="p-8 md:p-12 overflow-y-auto">
                <div className="mb-12">
                  <div className="text-sm font-medium text-white/40 mb-2">Good evening,</div>
                  <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">{displayName}</h2>
                  <p className="text-[#8c8c94] text-lg max-w-xl leading-relaxed">
                    Your memory, learning, and decisions now live inside a more refined shell, while keeping the same Memora identity intact.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4 md:px-0">
                  {dashboardCards.map((card) => {
                    const cardRoutes: Record<string, string> = {
                      'Memories': '/memory-timeline',
                      'Habits': '/habits-goals',
                      'Vault': '/learning-vault',
                      'Decisions': '/decision-lab',
                      'Persona Model': '/personal-model',
                      'AI Chats': '/neural-chat'
                    };
                    const route = cardRoutes[card.label] || '/dashboard';
                    
                    return (
                      <Link 
                        key={card.label}
                        to={route}
                        className="group relative p-6 rounded-[24px] border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all hover:border-white/10 hover:-translate-y-1 block"
                      >
                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[#742aff]/10 transition-colors">
                          <card.icon className="h-6 w-6 text-white/60 group-hover:text-[#742aff] transition-colors" />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">{card.label}</h3>
                        <p className="text-sm text-white/40 leading-relaxed">{card.description}</p>
                        
                        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                          <ArrowRight className="h-5 w-5 text-white/20" />
                        </div>
                      </Link>
                    );
                  })}
                </div>

                {/* Action Blocks */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 pb-8">
                  <div className="h-40 rounded-[24px] border border-dashed border-white/10 bg-white/[0.01] hover:bg-white/[0.02] transition-colors flex items-center justify-center text-white/20 text-sm font-medium italic">
                    Additional modules loading...
                  </div>
                  <div className="h-40 rounded-[24px] border border-dashed border-white/10 bg-white/[0.01] hover:bg-white/[0.02] transition-colors flex items-center justify-center text-white/20 text-sm font-medium italic">
                    Neural patterns syncing...
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
      
      {/* Footer / Decorative */}
      <footer className="py-12 text-center text-white/20 text-xs font-medium tracking-[0.3em] uppercase">
        Memora Intelligence © 2026 • Phase 0 Active
      </footer>
    </div>
  );
}
