import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Brain,
  DatabaseZap,
  FolderArchive,
  GitBranch,
  BotMessageSquare,
  Sparkles,
  LogOut,
  ChevronRight,
  Mic,
  Settings2,
  Search,
  Plus,
  Upload,
  Fingerprint,
  Cpu,
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

export default function PersonalModelLandingPage() {
  const { logout } = useAuth();
  const navigate = useNavigate();

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
      <section className="relative pt-32 pb-12 px-8 flex flex-col items-center text-center">
        {/* Features Badge */}
        <div className="mt-8 mb-6 inline-flex items-center gap-2.5 px-6 py-2 rounded-full border border-[#444487] bg-[#742aff]/5 backdrop-blur-sm shadow-[0_0_20px_rgba(94,16,237,0.2)]">
          <Sparkles className="h-4 w-4 text-[#742aff]" />
          <span className="text-sm font-medium text-[#f7f7f8] tracking-wide">Introducing Our Latest Features</span>
        </div>

        <h1 className="max-w-4xl font-orienta text-4xl sm:text-6xl md:text-7xl font-medium leading-[1.1] mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent px-4">
          Everything you think, remembered
        </h1>
        
        <p className="max-w-2xl text-base md:text-xl text-[#aeaeb8] font-medium leading-relaxed mb-8 px-6">
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
        <div className="mt-12 relative w-40 h-40 md:w-52 md:h-52 flex items-center justify-center">
          <div className="absolute inset-[-40px] bg-[#742aff]/20 blur-[60px] rounded-full animate-pulse" />
          <img 
            src="/assets/memora-core.png" 
            alt="Memora Core" 
            className="relative z-10 w-full h-full object-contain animate-float drop-shadow-[0_0_50px_rgba(116,42,255,0.5)]" 
          />
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="px-8 pb-32">
        <div className="max-w-[1400px] mx-auto rounded-[32px] border border-white/10 bg-[#050507]/80 backdrop-blur-2xl shadow-[0_40px_100px_rgba(0,0,0,0.8)] overflow-hidden">
          <div className="flex flex-col md:flex-row h-full min-h-[750px]">
            
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
                  const isActive = item.label === 'Persona Model';
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
                    <Settings2 className="h-4 w-4" />
                    Settings
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

            {/* Main Content Area - Persona Model */}
            <main className="flex-1 flex flex-col relative bg-[#050505]">
              {/* Internal Header */}
              <div className="flex items-center justify-between px-8 py-4 border-b border-white/5">
                <div className="flex items-center gap-4">
                  <Settings2 className="h-4 w-4 text-white/40 cursor-pointer hover:text-white transition-colors" />
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#742aff] uppercase">Phase 0</span>
                  <div className="w-2.5 h-2.5 border border-white/20 rotate-45 rounded-[1px]" />
                </div>
                <div className="flex items-center gap-4 text-white/40">
                  <Search className="h-4 w-4 cursor-pointer hover:text-white transition-colors" />
                  <Upload className="h-4 w-4 cursor-pointer hover:text-white transition-colors" />
                  <Plus className="h-4 w-4 cursor-pointer hover:text-white transition-colors" />
                </div>
              </div>

              {/* Persona Viewport */}
              <div className="flex-1 flex flex-col p-8 overflow-y-auto custom-scrollbar">
                <div className="mb-12 animate-fade-in">
                  <h2 className="font-orienta text-4xl md:text-5xl font-medium tracking-tight text-white mb-4 uppercase">
                    Persona Model.
                  </h2>
                  <p className="text-[#8c8c94] text-lg max-w-2xl leading-relaxed">
                    Mapping the cognitive architecture of your digital identity and behavioral traits.
                  </p>
                </div>

                {/* Persona Modules */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
                  {/* Digital Identity Layers */}
                  <div className="p-8 rounded-[24px] border border-white/5 bg-white/[0.02] backdrop-blur-sm group hover:border-white/10 transition-all">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 rounded-xl bg-[#742aff]/10 flex items-center justify-center">
                        <Fingerprint className="h-6 w-6 text-[#742aff]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">Digital Identity</h3>
                        <p className="text-sm text-white/40">Multi-layer behavioral authentication</p>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      {[
                        { label: 'Cognitive Pattern', value: '98.4%', color: '#742aff', status: 'Optimal' },
                        { label: 'Semantic Style', value: '92.1%', color: '#0051FF', status: 'Stable' },
                        { label: 'Affective Range', value: '88.7%', color: '#49a9ee', status: 'Active' },
                        { label: 'Decision Logic', value: '95.2%', color: '#742aff', status: 'Optimizing' },
                      ].map((stat) => (
                        <div key={stat.label}>
                          <div className="flex justify-between text-[10px] font-bold mb-2 uppercase tracking-widest">
                            <span className="text-white/40">{stat.label}</span>
                            <span className="text-white flex items-center gap-2">
                              <span className="text-[9px] text-white/20 font-medium px-1.5 py-0.5 rounded-sm border border-white/5 bg-white/5">{stat.status}</span>
                              <span className="font-mono">{stat.value}</span>
                            </span>
                          </div>
                          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                            <div 
                              className="h-full rounded-full bg-gradient-to-r from-transparent" 
                              style={{ width: stat.value, backgroundColor: stat.color }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Behavioral Analysis */}
                  <div className="p-8 rounded-[24px] border border-white/5 bg-white/[0.02] backdrop-blur-sm group hover:border-white/10 transition-all flex flex-col items-center justify-center text-center">
                    <div className="w-full flex items-center justify-between mb-8">
                       <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[#0051FF]/10 flex items-center justify-center">
                          <Cpu className="h-6 w-6 text-[#0051FF]" />
                        </div>
                        <div className="text-left">
                          <h3 className="text-xl font-bold text-white">Cognitive Mapping</h3>
                          <p className="text-sm text-white/40">Real-time behavior trace</p>
                        </div>
                      </div>
                      <div className="px-3 py-1 rounded-full border border-[#742aff]/20 bg-[#742aff]/5 text-[10px] font-bold text-[#742aff] tracking-wider uppercase">
                        Active Trace
                      </div>
                    </div>

                    <div className="relative w-56 h-56 flex items-center justify-center">
                       {/* Multiple Orbital Rings */}
                       <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_10s_linear_infinite]" />
                       <div className="absolute inset-4 border border-[#742aff]/20 rounded-full animate-[spin_7s_linear_infinite_reverse]" />
                       <div className="absolute inset-8 border border-[#0051FF]/10 rounded-full animate-[spin_15s_linear_infinite]" />
                       
                       <div className="absolute inset-0 bg-[#742aff]/5 blur-[40px] rounded-full animate-pulse" />
                       
                       <div className="relative z-10 flex flex-col items-center">
                         <div className="bg-white/5 p-4 rounded-3xl border border-white/10 backdrop-blur-xl shadow-2xl">
                           <Brain className="h-16 w-16 text-[#742aff] drop-shadow-[0_0_15px_rgba(116,42,255,0.5)]" />
                         </div>
                         <div className="mt-4 text-[10px] font-bold text-white/40 tracking-[0.3em] uppercase">Neural Core</div>
                       </div>
                    </div>

                    <div className="mt-8 grid grid-cols-2 gap-4 w-full">
                      <div className="p-4 rounded-2xl border border-white/5 bg-white/[0.01]">
                        <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest mb-1">Identity Sync</div>
                        <div className="text-lg font-bold text-white font-mono tracking-tighter">99.9%</div>
                      </div>
                      <div className="p-4 rounded-2xl border border-white/5 bg-white/[0.01]">
                        <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest mb-1">Latency</div>
                        <div className="text-lg font-bold text-white font-mono tracking-tighter">12ms</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chat Input Area (Unified) */}
                <div className="w-full max-w-[750px] mt-auto mb-4 mx-auto">
                   <div className="relative group rounded-[20px] p-[1.5px] bg-gradient-to-r from-white/10 via-white/20 to-[#49a9ee]/40 shadow-[0_0_40px_rgba(54,163,229,0.1)] focus-within:shadow-[0_0_60px_rgba(73,169,238,0.2)] transition-all">
                      <div className="rounded-[19px] bg-[#050505] p-4 flex flex-col gap-4">
                        <div className="flex flex-wrap gap-2">
                          {['Analyze Persona', 'Identity Scan', 'Update Logic'].map((mode) => (
                            <button
                              key={mode}
                              className="px-4 py-1.5 rounded-lg border border-white/5 bg-white/[0.03] text-[11px] font-medium text-white/60 hover:text-white hover:bg-white/10 hover:border-white/10 transition-all font-mono tracking-wider uppercase"
                            >
                              {mode}
                            </button>
                          ))}
                        </div>
                        <div className="flex items-center justify-between gap-4 mt-2">
                          <input 
                            className="bg-transparent border-none outline-none text-white/50 text-sm placeholder:text-white/20 flex-1"
                            placeholder="Map your digital identity architecture..."
                          />
                          <button className="px-6 py-2 rounded-lg bg-gradient-to-b from-[#0b3952] to-[#06141f] border border-[#3a97c3]/30 text-xs font-bold tracking-widest text-[#49a9ee] hover:brightness-125 transition-all shadow-[0_0_15px_rgba(58,151,195,0.2)]">
                            SEND
                          </button>
                        </div>
                      </div>
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
