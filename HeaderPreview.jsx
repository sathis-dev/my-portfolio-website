import React, { useState } from 'react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function EnhancedHeaderDemo() {
  const [viewMode, setViewMode] = useState('desktop');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  const isMobile = viewMode === 'mobile';
  const frameWidth = isMobile ? '390px' : '100%';
  const bgColor = isMobile ? '#1C1C28' : '#0A0A0F';

  return (
    <div className="min-h-screen bg-gray-950 text-white p-4 md:p-6">
      {/* View Mode Toggle */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <span className="text-sm text-gray-400">Preview:</span>
        <div className="flex bg-gray-800/50 rounded-full p-1 border border-gray-700/50">
          <button
            onClick={() => { setViewMode('desktop'); setIsMenuOpen(false); }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              viewMode === 'desktop'
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            🖥️ Desktop
          </button>
          <button
            onClick={() => setViewMode('mobile')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              viewMode === 'mobile'
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            📱 Mobile
          </button>
        </div>
      </div>

      {/* Device Frame */}
      <div 
        className="mx-auto overflow-hidden rounded-2xl border border-gray-700/50 shadow-2xl transition-all duration-500 relative"
        style={{ 
          width: frameWidth, 
          maxWidth: '100%',
          backgroundColor: bgColor,
          minHeight: isMobile ? '700px' : 'auto'
        }}
      >
        {/* Header */}
        <header 
          className="relative z-50 transition-all duration-300"
          style={{
            height: isMobile ? '64px' : '72px',
            background: isMobile 
              ? 'rgba(28, 28, 40, 0.95)' 
              : 'rgba(10, 10, 15, 0.85)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          <div 
            className="h-full flex items-center justify-between mx-auto"
            style={{ 
              padding: isMobile ? '0 20px' : '0 48px',
              maxWidth: '1400px'
            }}
          >
            {/* Logo */}
            <a href="#" className="flex items-center gap-0.5 font-semibold" style={{ fontSize: isMobile ? '1rem' : '1.125rem' }}>
              <span className="text-purple-500 font-mono">&lt;</span>
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-purple-400 bg-clip-text text-transparent">SATHIS</span>
              <span className="text-purple-500 font-mono">/&gt;</span>
            </a>

            {/* Desktop Nav - Pill Container (ReactBits Style) */}
            {!isMobile && (
              <nav 
                className="flex items-center gap-1 px-1.5 py-1.5 rounded-full"
                style={{
                  background: 'rgba(30, 30, 42, 0.9)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                }}
              >
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => setActiveSection(item.name)}
                    className={`relative px-4 py-2.5 rounded-full text-sm font-medium transition-all ${
                      activeSection === item.name
                        ? 'text-white bg-purple-500/20 shadow-[inset_0_0_0_1px_rgba(168,85,247,0.3)]'
                        : 'text-white/70 hover:text-white hover:bg-white/8'
                    }`}
                    style={{ paddingLeft: activeSection === item.name ? '24px' : '16px' }}
                  >
                    {activeSection === item.name && (
                      <span 
                        className="absolute left-2.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-purple-500"
                        style={{ boxShadow: '0 0 8px rgba(168, 85, 247, 0.6)' }}
                      />
                    )}
                    {item.name}
                  </button>
                ))}
              </nav>
            )}

            {/* Desktop Right Section */}
            {!isMobile && (
              <div className="flex items-center gap-3">
                <div 
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-emerald-500"
                  style={{
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.25)'
                  }}
                >
                  <span 
                    className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"
                    style={{ boxShadow: '0 0 10px rgba(16, 185, 129, 0.6)' }}
                  />
                  <span>Available for Projects</span>
                </div>
                <button 
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
                  style={{
                    background: 'linear-gradient(135deg, #A855F7 0%, #EC4899 100%)',
                    boxShadow: '0 4px 15px rgba(168, 85, 247, 0.3)'
                  }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                  </svg>
                  CV
                </button>
              </div>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center justify-center w-11 h-11 rounded-xl transition-all"
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="flex flex-col gap-1.5 w-5">
                  <span 
                    className="h-0.5 bg-white rounded-full transition-all duration-300 origin-center"
                    style={{ transform: isMenuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }}
                  />
                  <span 
                    className="h-0.5 bg-white rounded-full transition-all duration-300"
                    style={{ opacity: isMenuOpen ? 0 : 1 }}
                  />
                  <span 
                    className="h-0.5 bg-white rounded-full transition-all duration-300 origin-center"
                    style={{ transform: isMenuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }}
                  />
                </div>
              </button>
            )}
          </div>
        </header>

        {/* Mobile Menu Overlay */}
        {isMobile && isMenuOpen && (
          <div 
            className="absolute inset-x-0 z-40 p-5 flex flex-col animate-fadeIn"
            style={{
              top: '64px',
              bottom: 0,
              background: 'rgba(28, 28, 40, 0.98)',
              backdropFilter: 'blur(20px)'
            }}
          >
            <ul className="flex flex-col gap-2">
              {navItems.map((item, index) => (
                <li key={item.name} style={{ animationDelay: `${index * 0.05}s` }} className="animate-slideIn">
                  <button
                    onClick={() => { setActiveSection(item.name); setIsMenuOpen(false); }}
                    className={`w-full flex items-center justify-between p-4 rounded-xl text-lg font-medium transition-all ${
                      activeSection === item.name
                        ? 'bg-purple-500/15 text-white'
                        : 'bg-white/4 text-white/85 hover:bg-white/8'
                    }`}
                    style={{ 
                      border: activeSection === item.name 
                        ? '1px solid rgba(168, 85, 247, 0.3)' 
                        : '1px solid rgba(255, 255, 255, 0.06)'
                    }}
                  >
                    <span>{item.name}</span>
                    <svg 
                      className={`w-5 h-5 transition-colors ${activeSection === item.name ? 'text-purple-500' : 'text-white/50'}`}
                      fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-6 border-t border-white/8 flex flex-col gap-3">
              <div 
                className="flex items-center justify-center gap-2.5 p-3.5 rounded-xl text-emerald-500"
                style={{
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.2)'
                }}
              >
                <span 
                  className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"
                  style={{ boxShadow: '0 0 10px rgba(16, 185, 129, 0.6)' }}
                />
                <span className="font-medium">Available for Projects</span>
              </div>
              <button 
                className="flex items-center justify-center gap-2.5 p-4 rounded-xl text-base font-semibold text-white"
                style={{
                  background: 'linear-gradient(135deg, #A855F7 0%, #EC4899 100%)',
                  boxShadow: '0 4px 15px rgba(168, 85, 247, 0.3)'
                }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                Download CV
              </button>
            </div>
          </div>
        )}

        {/* Hero Content */}
        {!isMenuOpen && (
          <div 
            className="relative overflow-hidden"
            style={{ 
              minHeight: isMobile ? '550px' : '500px',
              background: isMobile 
                ? 'radial-gradient(ellipse 100% 60% at 50% -10%, rgba(168, 85, 247, 0.4) 0%, rgba(236, 72, 153, 0.3) 40%, transparent 70%)'
                : 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(168, 85, 247, 0.25) 0%, rgba(236, 72, 153, 0.15) 40%, transparent 70%)'
            }}
          >
            <div className="flex flex-col items-center justify-center text-center px-6 py-16">
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-6"
                style={{
                  background: 'rgba(168, 85, 247, 0.1)',
                  border: '1px solid rgba(168, 85, 247, 0.2)'
                }}
              >
                <span className="text-purple-400">✨</span>
                <span className="text-purple-300 text-xs md:text-sm">Available for Frontend & AI Projects</span>
              </div>
              
              <h1 className={`font-bold mb-4 ${isMobile ? 'text-3xl' : 'text-5xl'}`}>
                <span className="text-white">Sathis Ravishka</span>
                <br />
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-purple-400 bg-clip-text text-transparent">
                  Hettiarachchi
                </span>
              </h1>
              
              <p className={`font-medium mb-2 ${isMobile ? 'text-lg text-white/90' : 'text-xl text-white/90'}`}>
                Frontend Developer & AI Integration Specialist
              </p>
              <p className={`mb-8 max-w-md ${isMobile ? 'text-sm text-white/70' : 'text-white/60'}`}>
                Building modern web experiences with Next.js, TypeScript, and AI-assisted workflows
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <button 
                  className={`flex items-center gap-2 rounded-xl text-white font-semibold transition-all hover:-translate-y-1 ${isMobile ? 'px-5 py-3 text-sm' : 'px-6 py-3'}`}
                  style={{
                    background: 'linear-gradient(135deg, #A855F7 0%, #EC4899 100%)',
                    boxShadow: '0 4px 20px rgba(168, 85, 247, 0.4)'
                  }}
                >
                  View Projects
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <button 
                  className={`flex items-center gap-2 rounded-xl text-white font-medium transition-all hover:bg-white/10 ${isMobile ? 'px-5 py-3 text-sm' : 'px-6 py-3'}`}
                  style={{ border: '1px solid rgba(255, 255, 255, 0.2)' }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                  </svg>
                  Download CV
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className={`grid grid-cols-3 gap-3 px-4 pb-8 max-w-2xl mx-auto ${isMobile ? 'gap-2' : 'gap-4 px-6'}`}>
              {[
                { icon: '🏛️', value: '15+', label: 'PROJECTS' },
                { icon: '</>', value: '3+', label: 'YEARS' },
                { icon: '📚', value: '10+', label: 'TECH STACK' }
              ].map((stat, i) => (
                <div 
                  key={i}
                  className={`flex flex-col items-center rounded-2xl transition-all ${isMobile ? 'p-3' : 'p-5'}`}
                  style={{
                    background: isMobile ? 'rgba(40, 40, 55, 0.9)' : 'rgba(20, 20, 30, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                  }}
                >
                  <div 
                    className={`flex items-center justify-center rounded-xl mb-2 ${isMobile ? 'w-8 h-8 text-sm' : 'w-10 h-10'}`}
                    style={{ background: 'rgba(168, 85, 247, 0.15)' }}
                  >
                    {stat.icon === '</>' ? (
                      <span className="text-purple-400 text-xs">&lt;/&gt;</span>
                    ) : (
                      <span className="text-purple-400">{stat.icon}</span>
                    )}
                  </div>
                  <span className={`font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent ${isMobile ? 'text-xl' : 'text-2xl'}`}>
                    {stat.value}
                  </span>
                  <span className={`text-white/50 font-semibold tracking-wider mt-0.5 text-center ${isMobile ? 'text-[8px]' : 'text-[10px]'}`}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Comparison Info */}
      <div className="mt-6 max-w-2xl mx-auto grid md:grid-cols-2 gap-4">
        <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-4">
          <h4 className="text-sm font-semibold text-purple-400 mb-2">🖥️ Desktop Changes</h4>
          <ul className="text-xs text-gray-300 space-y-1">
            <li>• Pill navigation container (ReactBits style)</li>
            <li>• Glowing dot indicator for active state</li>
            <li>• Glassmorphism backdrop blur effect</li>
            <li>• Refined spacing and shadows</li>
          </ul>
        </div>
        <div className="bg-pink-500/10 border border-pink-500/20 rounded-xl p-4">
          <h4 className="text-sm font-semibold text-pink-400 mb-2">📱 Mobile Changes</h4>
          <ul className="text-xs text-gray-300 space-y-1">
            <li>• Lighter background (#1C1C28 vs #0A0A0F)</li>
            <li>• Brighter aurora gradient (40% opacity)</li>
            <li>• Higher contrast cards and text</li>
            <li>• Professional slide-out menu with animations</li>
          </ul>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
        .animate-slideIn { animation: slideIn 0.3s ease-out forwards; opacity: 0; }
      `}</style>
    </div>
  );
}
