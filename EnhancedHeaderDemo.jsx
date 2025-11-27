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
    <div className="min-h-screen bg-gray-950 text-white p-6">
      {/* View Mode Toggle */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <span className="text-sm text-gray-400">Preview Mode:</span>
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
        className="mx-auto overflow-hidden rounded-2xl border border-gray-700/50 shadow-2xl transition-all duration-500"
        style={{ 
          width: frameWidth, 
          maxWidth: '100%',
          backgroundColor: bgColor
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

            {/* Desktop Nav */}
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
                    className="w-2 h-2 rounded-full bg-emerald-500"
                    style={{ 
                      boxShadow: '0 0 10px rgba(16, 185, 129, 0.6)',
                      animation: 'pulse 2s infinite'
                    }}
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
                    style={{ 
                      transform: isMenuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none'
                    }}
                  />
                  <span 
                    className="h-0.5 bg-white rounded-full transition-all duration-300"
                    style={{ opacity: isMenuOpen ? 0 : 1 }}
                  />
                  <span 
                    className="h-0.5 bg-white rounded-full transition-all duration-300 origin-center"
                    style={{ 
                      transform: isMenuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none'
                    }}
                  />
                </div>
              </button>
            )}
          </div>
        </header>

        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <div 
            className="absolute inset-x-0 z-40 p-5 flex flex-col"
            style={{
              top: '64px',
              bottom: 0,
              background: 'rgba(28, 28, 40, 0.98)',
              backdropFilter: 'blur(20px)'
            }}
          >
            <ul className="flex flex-col gap-2">
              {navItems.map((item, index) => (
                <li 
                  key={item.name}
                  className="opacity-0 animate-[slideIn_0.3s_ease-out_forwards]"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <button
                    onClick={() => {
                      setActiveSection(item.name);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-between p-4 rounded-xl text-lg font-medium transition-all ${
                      activeSection === item.name
                        ? 'bg-purple-500/15 border-purple-500/30 text-white'
                        : 'bg-white/4 border-white/6 text-white/85 hover:bg-white/8'
                    }`}
                    style={{ border: '1px solid' }}
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
                  className="w-2 h-2 rounded-full bg-emerald-500"
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

        {/* Demo Content Area */}
        <div 
          className="relative overflow-hidden"
          style={{ 
            minHeight: '500px',
            background: isMobile 
              ? 'radial-gradient(ellipse 100% 60% at 50% -10%, rgba(168, 85, 247, 0.4) 0%, rgba(236, 72, 153, 0.3) 40%, transparent 70%)'
              : 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(168, 85, 247, 0.25) 0%, rgba(236, 72, 153, 0.15) 40%, transparent 70%)'
          }}
        >
          <div className="flex flex-col items-center justify-center text-center px-6 py-20">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-8"
              style={{
                background: 'rgba(168, 85, 247, 0.1)',
                border: '1px solid rgba(168, 85, 247, 0.2)'
              }}
            >
              <span className="text-purple-400">✨</span>
              <span className="text-purple-300">Available for Frontend & AI Projects</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-white">Sathis Ravishka</span>
              <br />
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-purple-400 bg-clip-text text-transparent">
                Hettiarachchi
              </span>
            </h1>
            
            <p className="text-xl text-white/90 font-medium mb-2">
              Frontend Developer & AI Integration Specialist
            </p>
            <p className="text-white/60 mb-8 max-w-md">
              Building modern web experiences with Next.js, TypeScript, and AI-assisted workflows from Cambridge, UK
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button 
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold transition-all hover:-translate-y-1"
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
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium transition-all hover:bg-white/10"
                style={{
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                Download CV
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-4 px-6 pb-10 max-w-3xl mx-auto">
            {[
              { icon: '🏛️', value: '15+', label: 'PROJECTS DELIVERED' },
              { icon: '</>', value: '3+', label: 'YEARS EXPERIENCE' },
              { icon: '📚', value: '10+', label: 'TECH STACK' }
            ].map((stat, i) => (
              <div 
                key={i}
                className="flex flex-col items-center p-4 md:p-6 rounded-2xl transition-all hover:-translate-y-1"
                style={{
                  background: isMobile ? 'rgba(40, 40, 55, 0.9)' : 'rgba(20, 20, 30, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <div 
                  className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl mb-3 text-lg"
                  style={{ background: 'rgba(168, 85, 247, 0.15)' }}
                >
                  {stat.icon === '</>' ? (
                    <span className="text-purple-400">&lt;/&gt;</span>
                  ) : (
                    <span className="text-purple-400">{stat.icon}</span>
                  )}
                </div>
                <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  {stat.value}
                </span>
                <span className="text-[10px] md:text-xs text-white/50 font-semibold tracking-wider mt-1 text-center">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Info Panel */}
      <div className="mt-8 max-w-2xl mx-auto">
        <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/30">
          <h3 className="text-lg font-semibold text-white mb-3">
            ✨ Key Improvements Made
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-1">•</span>
              <span><strong className="text-white">Desktop Header:</strong> ReactBits-inspired pill navigation container with glassmorphism effect</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-1">•</span>
              <span><strong className="text-white">Active State:</strong> Dot indicator with purple glow, similar to ReactBits style</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-400 mt-1">•</span>
              <span><strong className="text-white">Mobile Theme:</strong> Lighter background (#1C1C28) for better visibility</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-400 mt-1">•</span>
              <span><strong className="text-white">Mobile Aurora:</strong> Increased gradient intensity (40% opacity vs 25%)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 mt-1">•</span>
              <span><strong className="text-white">Mobile Menu:</strong> Full-screen overlay with staggered animations</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 mt-1">•</span>
              <span><strong className="text-white">Cards:</strong> Higher contrast on mobile (rgba(40, 40, 55, 0.9))</span>
            </li>
          </ul>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 8px rgba(16, 185, 129, 0.6); }
          50% { opacity: 0.7; box-shadow: 0 0 16px rgba(16, 185, 129, 0.8); }
        }
      `}</style>
    </div>
  );
}
