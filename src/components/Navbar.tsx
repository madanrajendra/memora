import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={() => navigate('/')}
        >
          <img
            src="/assets/logo.png"
            alt="Memora"
            className="h-[32px] w-[36px] object-contain opacity-95 group-hover:scale-105 transition-transform"
            onError={(e) => {
              // Fallback to text if image fails to load
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
          <span className="font-orbitron font-semibold text-xl uppercase tracking-widest text-white group-hover:text-blue-400 transition-colors">
            Memora
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 font-poppins text-[15px] font-medium text-white/90">
          <button className="hover:text-[#49A9EE] transition-colors" onClick={() => navigate('/')}>Home</button>
          <button className="hover:text-[#49A9EE] transition-colors">About</button>
          <button className="hover:text-[#49A9EE] transition-colors">Feature</button>
          <button className="hover:text-[#49A9EE] transition-colors">Price</button>
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <button 
            onClick={() => navigate(currentUser ? '/dashboard' : '/login')}
            className="relative px-6 py-2.5 rounded-full font-medium text-sm text-white overflow-hidden group border border-[#49A9EE] hover:border-transparent transition-all"
          >
            <span className="absolute inset-0 w-full h-full bg-[#49A9EE] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative z-10">{currentUser ? 'Dashboard' : 'Login'}</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:text-[#49A9EE] transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#000915]/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6 md:hidden shadow-2xl">
          <button 
            className="text-lg font-medium text-white text-left hover:text-[#49A9EE] transition-colors" 
            onClick={() => { navigate('/'); setIsMobileMenuOpen(false); }}
          >
            Home
          </button>
          <button 
            className="text-lg font-medium text-white text-left hover:text-[#49A9EE] transition-colors" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </button>
          <button 
            className="text-lg font-medium text-white text-left hover:text-[#49A9EE] transition-colors" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Feature
          </button>
          <button 
            className="text-lg font-medium text-white text-left hover:text-[#49A9EE] transition-colors" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Price
          </button>
          <button 
            onClick={() => {
              navigate(currentUser ? '/dashboard' : '/login');
              setIsMobileMenuOpen(false);
            }}
            className="bg-[#49A9EE] text-white px-6 py-3 rounded-full font-semibold text-center mt-4 w-full active:scale-95 transition-transform"
          >
            {currentUser ? 'Dashboard' : 'Login'}
          </button>
        </div>
      )}
    </nav>
  );
}
