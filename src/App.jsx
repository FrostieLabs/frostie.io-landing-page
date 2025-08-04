import React, { useEffect, useState, useRef } from 'react';
import logo from './assets/frostielabs-full.svg';
import WhitePaper from './WhitePaper.jsx';

// Mock logo component since we can't import actual SVG in this environment
const Logo = () => (
  <div className="text-xl font-bold font-mono">
    <img src={logo} alt="Logo" className="h-24" />
  </div>
);

function Card({ title, content, titleColor, bgColor }) {
  return (
    <div className={`w-full max-w-sm ${bgColor} p-6 rounded-2xl shadow-lg transform transition hover:scale-105 hover:shadow-2xl`}>
      <div className="space-y-4">
        <h3 className={`text-lg font-bold font-mono ${titleColor} px-3 py-2 rounded-lg inline-block`}>{title}</h3>
        <p className="text-sm font-mono leading-relaxed text-gray-800">{content}</p>
      </div>
    </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' or 'whitepaper'
  const [showNav, setShowNav] = useState(true);
  const scrollRef = useRef(null);
  const page2Ref = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    const onScroll = () => setShowNav(container.scrollTop === 0);
    container.addEventListener('scroll', onScroll);
    return () => container.removeEventListener('scroll', onScroll);
  }, []);

  // Handle page routing
  if (currentPage === 'whitepaper') {
    return <WhitePaper onBackToHome={() => setCurrentPage('home')} />;
  }

  return (
    <div className="relative h-full w-full">
      {/* Animated floating background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 opacity-95" />

        {/* Floating geometric shapes */}
        <div className="absolute inset-0">
          {/* Large floating circles */}
          <div
            className="absolute w-96 h-96 bg-gradient-to-r from-teal-400/20 to-blue-500/20 rounded-full blur-xl"
            style={{
              top: '10%',
              left: '10%',
              animation: 'float 8s ease-in-out infinite',
              animationDelay: '0s'
            }}
          />
          <div
            className="absolute w-80 h-80 bg-gradient-to-r from-green-400/15 to-teal-500/15 rounded-full blur-xl"
            style={{
              top: '60%',
              right: '15%',
              animation: 'float 6s ease-in-out infinite reverse',
              animationDelay: '2s'
            }}
          />
          <div
            className="absolute w-64 h-64 bg-gradient-to-r from-blue-400/25 to-purple-500/25 rounded-full blur-xl"
            style={{
              bottom: '20%',
              left: '20%',
              animation: 'float 10s ease-in-out infinite',
              animationDelay: '4s'
            }}
          />

          {/* Medium floating squares */}
          <div
            className="absolute w-32 h-32 bg-gradient-to-r from-teal-300/30 to-cyan-400/30 rounded-lg blur-lg rotate-45"
            style={{
              top: '30%',
              right: '30%',
              animation: 'floatRotate 7s ease-in-out infinite',
              animationDelay: '1s'
            }}
          />
          <div
            className="absolute w-24 h-24 bg-gradient-to-r from-green-300/35 to-emerald-400/35 rounded-lg blur-lg rotate-12"
            style={{
              bottom: '40%',
              right: '10%',
              animation: 'floatRotate 9s ease-in-out infinite reverse',
              animationDelay: '3s'
            }}
          />

          {/* Small floating dots */}
          <div
            className="absolute w-16 h-16 bg-white/20 rounded-full blur-sm"
            style={{
              top: '80%',
              left: '70%',
              animation: 'float 5s ease-in-out infinite',
              animationDelay: '2.5s'
            }}
          />
          <div
            className="absolute w-12 h-12 bg-teal-400/40 rounded-full blur-sm"
            style={{
              top: '25%',
              left: '80%',
              animation: 'float 4s ease-in-out infinite reverse',
              animationDelay: '1.5s'
            }}
          />
          <div
            className="absolute w-20 h-20 bg-blue-400/30 rounded-full blur-sm"
            style={{
              bottom: '60%',
              left: '60%',
              animation: 'float 6s ease-in-out infinite',
              animationDelay: '0.5s'
            }}
          />
        </div>
      </div>

      {/* Nav bar on Page 1 */}
      {showNav && (
        <nav className="fixed top-0 left-0 right-0 z-50 px-8 lg:px-32 py-4 flex justify-between items-center bg-transparent">
          <div className="text-xl font-bold font-mono">
            <Logo />
          </div>
          <div className="space-x-4">
            <button
              onClick={() =>
                window.open(
                  'https://forms.gle/5QerzN2BoYjfAFQm9',
                  '_blank',
                  'noopener,noreferrer'
                )
              }
              className="px-4 py-2 border border-white rounded-lg font-mono hover:bg-white/10 transition-colors text-white cursor-pointer relative z-10">
              Get Early Access
            </button>
          </div>
        </nav>
      )}

      <div
        ref={scrollRef}
        className="relative h-full w-full overflow-y-scroll snap-y snap-mandatory z-10"
      >
        {/* Page 1 */}
        <section id="page-1" className="h-screen snap-start flex flex-col justify-center items-center px-8 lg:px-32 pt-24 space-y-6 text-center text-white">
          <h1 className="text-8xl lg:text-9xl font-extrabold">Content, Owned.</h1>
          <p className="text-2xl lg:text-3xl font-mono max-w-6xl">
            A decentralized CMS engine. Built on SUI and WALRUS.
          </p>
          <div className="space-x-4">
              <button
                onClick={() => page2Ref.current?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-white font-medium hover:scale-105 transition-transform"
              >
                Explore
              </button>
              <button
                onClick={() => setCurrentPage('whitepaper')}
                className="px-6 py-3 border border-white rounded-lg text-white font-medium hover:bg-white/10 transition-colors"
              >
                Whitepaper
              </button>
          </div>
        </section>

        {/* Page 2 */}
        <section id="page-2" ref={page2Ref} className="h-screen snap-start flex flex-col justify-center items-center px-8 lg:px-32 space-y-8 text-white relative">
          {/* Additional floating orbs for this page */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="page2-orb-1 absolute w-32 h-32 bg-blue-400/30 rounded-full blur-lg" />
            <div className="page2-orb-2 absolute w-24 h-24 bg-teal-400/25 rounded-full blur-md" />
            <div className="page2-orb-3 absolute w-40 h-40 bg-green-400/20 rounded-full blur-xl" />
          </div>

          <div className="text-center space-y-8 max-w-4xl">
            <h2 className="text-5xl lg:text-6xl font-bold">Composable CMS Infrastructure</h2>
            <p className="text-lg font-mono leading-relaxed max-w-3xl mx-auto">
              FrostieStack is a decentralized CMS engine designed to empower the future of publishing. Developers and creators collaborate through customizable blueprints, powerful publishing flows, and shared token incentives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center font-mono text-sm lg:text-base max-w-4xl">
            <div className="p-4 bg-white/5 rounded-lg backdrop-blur-sm">
              Custom Static Site Generator Backend
            </div>
            <div className="p-4 bg-white/5 rounded-lg backdrop-blur-sm">
              Customizable CMS Schema
            </div>
            <div className="p-4 bg-white/5 rounded-lg backdrop-blur-sm">
              ZK-Based Permissions
            </div>
            <div className="p-4 bg-white/5 rounded-lg backdrop-blur-sm">
              Addon Features
            </div>
            <div className="p-4 bg-white/5 rounded-lg backdrop-blur-sm">
              Automated Publishing to Walrus Sites
            </div>
            <div className="p-4 bg-white/5 rounded-lg backdrop-blur-sm">
              Versioning & Rollbacks
            </div>
          </div>
        </section>

        {/* Page 3 */}
        <section id="page-3" className="h-screen snap-start flex flex-col justify-center items-center px-8 lg:px-32 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl">
            <Card
              title="Blueprint Authoring"
              content="Developers publish schema-based content blueprints for creators to build upon — enabling reusable templates and publishing logic."
              titleColor="bg-teal-600 text-white"
              bgColor="bg-gray-100"
            />
            <Card
              title="Creator-Focused CMS"
              content="A low-code (no-code) CMS for content creators to manage, preview, and publish directly to decentralized Walrus Sites."
              titleColor="bg-white text-gray-800"
              bgColor="bg-teal-400"
            />
            <Card
              title="FROSTIE Token"
              content="$FROSTIE (along with widely adopted tokens in the Sui ecosystem) powers monetization, blueprint licensing, tipping, and governance across Frostie-enabled products."
              titleColor="bg-gray-800 text-white"
              bgColor="bg-gray-100"
            />
            <Card
              title="Future-Proof Engine"
              content="From blogs to docs to full project hubs — FrostieStack is built to power any modular CMS product in the decentralized future."
              titleColor="bg-teal-600 text-white"
              bgColor="bg-gray-100"
            />
          </div>
        </section>

        {/* Page 4 - Footer */}
        <section id="page-4" className="h-screen snap-start flex flex-col justify-center px-8 lg:px-32 py-12 text-white">
          <div className="max-w-7xl mx-auto w-full">
            {/* Main Footer Content - Updated Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-8">
              {/* Logo and Brand */}
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <Logo/>
                </div>
              </div>

              {/* Build Column */}
              <div className="col-span-1">
                <h4 className="text-white font-semibold mb-4">Build</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">Get Started</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                  <li><a href="https://github.com/FrostieLabs" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
                </ul>
              </div>

              {/* Community Column */}
              <div className="col-span-1">
                <h4 className="text-white font-semibold mb-4">Community</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="https://discord.gg/Rg4NsndKMS" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Discord</a></li>
                  <li><a href="https://x.com/FrostieLabs" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">X</a></li>
                  <li><a href="https://t.me/frostie_io" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Telegram</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
                </ul>
              </div>

              {/* About Column */}
              <div className="col-span-1">
                <h4 className="text-white font-semibold mb-4">About</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><button onClick={() => setCurrentPage('whitepaper')} className="hover:text-white transition-colors cursor-pointer">Whitepaper</button></li>
                  <li><a href="https://www.linkedin.com/company/frostie" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Careers</a></li>
                </ul>
              </div>

              {/* Action Buttons - Now in the grid on the right */}
              <div className="col-span-1 flex flex-col gap-3">
                {/* <button className="px-6 py-2 bg-teal-400 hover:bg-teal-500 text-white rounded-lg font-medium transition-colors text-sm">
                  SIGN IN
                </button>
                <button className="px-6 py-2 border border-gray-600 hover:border-gray-500 text-white rounded-lg font-medium transition-colors text-sm">
                  CREATE
                </button> */}
                <button
                  onClick={() =>
                    window.open(
                      'https://forms.gle/5QerzN2BoYjfAFQm9',
                      '_blank',
                      'noopener,noreferrer'
                    )
                  }
                  className="px-6 py-2 border border-gray-600 hover:border-gray-500 text-white rounded-lg font-medium transition-colors text-sm">
                  Get Early Access
                </button>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center text-gray-400 text-sm">
              <p>© 2025 Copyright Frostie Labs All Rights Reserved</p>
              <div className="flex space-x-6 mt-4 sm:mt-0">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms and Conditions</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}