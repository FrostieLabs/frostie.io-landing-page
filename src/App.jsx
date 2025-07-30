import React, { useEffect, useState, useRef } from 'react';
import logo from './assets/frostielabs-full.svg';
import './index.css';

function Card({ title, content }) {
  return (
    <div className="float w-full lg:w-64 h-96 bg-gray-800 bg-opacity-60 p-8 rounded-xl shadow-lg transform transition hover:scale-105 hover:shadow-2xl hover:bg-opacity-80">
      <div className="max-w-prose mx-auto text-left space-y-4">
        <h3 className="text-xl font-bold font-mono">{title}</h3>
        <p className="text-base font-mono leading-relaxed">{content}</p>
      </div>
    </div>
  );
}

export default function App() {
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

  return (
    <div className="relative h-full w-full">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 opacity-95" />

      {/* Nav bar on Page 1 */}
      {showNav && (
        <nav className="fixed top-0 left-0 right-0 z-10 px-8 lg:px-32 py-4 flex justify-between items-center bg-transparent">
          <div className="text-xl font-bold font-mono">
            <img src={logo} alt="Logo" className="h-24" />
          </div>
          <div className="space-x-6 font-mono">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Learn</a>
            <a href="#" className="hover:underline">Build</a>
            <a href="#" className="hover:underline">Connection</a>
          </div>
          <div className="space-x-4">
            <button className="px-4 py-2 border border-white rounded-lg font-mono">Create</button>
            <button className="px-4 py-2 font-mono">Sign In</button>
          </div>
        </nav>
      )}

      <div
        ref={scrollRef}
        className="relative h-full w-full overflow-y-scroll snap-y snap-mandatory"
      >
        {/* Page 1 */}
        <section id="page-1" className="h-screen snap-start flex flex-col justify-center items-center px-8 lg:px-32 pt-24 space-y-6 text-center">
          <h1 className="text-8xl lg:text-9xl font-extrabold">Content, Owned.</h1>
          <p className="text-2xl lg:text-3xl font-mono max-w-6xl">
            A decentralized CMS engine. Built on Sui and Walrus.
          </p>
          <div className="space-x-4">
              <button
                onClick={() => page2Ref.current?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-white font-medium"
              >
                Explore
              </button>
              <button
                onClick={() =>
                  window.open(
                    'https://docs.google.com/document/d/1xP0Wx3tHvkbRr0ESgH3G1IN5XgUj7Zd1s4fiklJdxkA/edit?tab=t.0#heading=h.71d6ccciikwa',
                    '_blank',
                    'noopener,noreferrer'
                  )
                }
                className="px-6 py-3 border border-white rounded-lg text-white font-medium"
              >
                Whitepaper
              </button>
          </div>
        </section>

        {/* Page 2 */}
        <section id="page-2" ref={page2Ref} className="h-screen snap-start flex flex-col lg:flex-row justify-center items-center px-8 lg:px-32 space-y-6 lg:space-y-0">
          <div className="lg:w-1/2 w-full space-y-6">
            <h2 className="text-5xl font-bold">Composable CMS Infrastructure</h2>
            <p className="text-lg font-mono max-w-2xl">
              FrostieStack is a decentralized CMS engine designed to empower the future of publishing. Developers and creators collaborate through customizable blueprints, powerful publishing flows, and shared token incentives.
            </p>
          </div>
          <div className="lg:w-1/2 w-full h-80 flex justify-center items-center">
            <div className="spin-slow space-y-4 text-lg font-mono text-center">
              <p>Custom Static Site Generator Backend</p>
              <p>Customizable CMS Schema</p>
              <p>Wallet-Based Permissions</p>
              <p>Addon Features</p>
              <p>Automated Publishing to Walrus Sites</p>
              <p>Versioning & Rollbacks</p>
            </div>
          </div>
        </section>

        {/* Page 3 */}
        <section id="page-3" className="h-screen snap-start flex flex-wrap justify-evenly items-start gap-24 px-8 lg:px-32 py-16">
          <Card
            title="Blueprint Authoring"
            content="Developers publish schema-based content blueprints for creators to build upon — enabling reusable templates and publishing logic."
          />
          <Card
            title="Creator-Focused CMS"
            content="A low-code (no-code) CMS for content creators to manage, preview, and publish directly to decentralized Walrus Sites."
          />
          <Card
            title="FROSTIE Token"
            content="$FROSTIE (along with widely adopted tokens in the Sui ecosystem) powers monetization, blueprint licensing, tipping, and governance across Frostie-enabled products."
          />
          <Card
            title="Future-Proof Engine"
            content="From blogs to docs to full project hubs — FrostieStack is built to power any modular CMS product in the decentralized future."
          />
        </section>
      </div>
    </div>
  );
}
