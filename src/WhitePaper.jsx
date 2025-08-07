import React, { useState } from 'react';
import logo from './assets/frostielabs-full.svg';
import pdf from './assets/FrostieLabs - Whitepaper.pdf';
import { WhitePaperSections } from './WhitePaperContent.jsx';

// Mock logo component
const Logo = () => (
  <div className="text-xl font-bold font-mono">
    <img src={logo} alt="Logo" className="h-24" />
  </div>
);

// Table of Contents Component
const TableOfContents = ({ sections, activeSection, onSectionClick }) => {
  const sectionKeys = Object.keys(sections);

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 sticky top-24 z-40">
      <h3 className="text-lg font-bold text-white mb-4 font-mono">Table of Contents</h3>
      <nav className="space-y-2">
        {sectionKeys.map((key) => (
          <button
            key={key}
            onClick={() => onSectionClick(key)}
            className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
              activeSection === key
                ? 'bg-teal-400/20 text-teal-400 border-l-2 border-teal-400'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {sections[key].title}
          </button>
        ))}
      </nav>
    </div>
  );
};

// Helper function to format markdown text
const formatMarkdownText = (text) => {
  // Split text by ** to find bold sections
  const parts = text.split(/\*\*(.*?)\*\*/g);

  return parts.map((part, index) => {
    // Every odd index is bold text (between **)
    if (index % 2 === 1) {
      return <strong key={index} className="font-bold text-white">{part}</strong>;
    }
    return part;
  });
};

// Section Component
const Section = ({ section, isActive }) => {
  if (!isActive) return null;

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 lg:p-12 border border-white/10">
      <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 font-mono">
        {section.title}
      </h2>
      {/* Pre Image rendering right after title */}
      {section.preImage && (
        <div className="mb-8">
          <img
            src={section.preImage.src}
            className="w-full mx-auto"
          />
          {section.preImage.caption && (
            <p className="text-center text-sm text-gray-400 mt-3 font-mono">
              {section.preImage.caption}
            </p>
          )}
        </div>
      )}

      <div className="prose prose-lg prose-invert max-w-none">
        {section.content.split('\n\n').map((paragraph, index) => {
          if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
            // Handle bold headings
            return (
              <h3 key={index} className="text-xl font-bold text-teal-400 mt-8 mb-4 font-mono">
                {paragraph.replace(/\*\*/g, '')}
              </h3>
            );
          } else if (paragraph.startsWith('•')) {
            // Handle bullet points
            const items = paragraph.split('\n').filter(item => item.trim());
            return (
              <ul key={index} className="list-disc list-inside space-y-2 mb-6 text-gray-300">
                {items.map((item, itemIndex) => {
                  const cleanItem = item.replace('• ', '');
                  return (
                    <li key={itemIndex} className="leading-relaxed">
                      {formatMarkdownText(cleanItem)}
                    </li>
                  );
                })}
              </ul>
            );
          } else {
            // Handle regular paragraphs
            return (
              <p key={index} className="text-gray-300 mb-6 leading-relaxed">
                {formatMarkdownText(paragraph)}
              </p>
            );
          }
        })}
      </div>

      {/* Post Image rendering right after title */}
      {section.postImage && (
        <div className="mb-8">
          <img
            src={section.postImage.src}
            className="w-full mx-auto"
          />
          {section.postImage.caption && (
            <p className="text-center text-sm text-gray-400 mt-3 font-mono">
              {section.postImage.caption}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default function WhitePaper({ onBackToHome }) {
  const [activeSection, setActiveSection] = useState('abstract');

  return (
    <div className="relative h-full w-full">
      {/* Animated floating background - same as main page */}
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
        </div>
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 p-6">
        <div className="flex justify-between items-center">
          <Logo />
          <button
            onClick={onBackToHome}
            className="px-4 py-2 border border-white rounded-lg font-mono hover:bg-white/10 transition-colors text-white cursor-pointer">
            Back to Home
          </button>
        </div>
      </nav>

      {/* White Paper Content */}
      <div className="relative z-10 h-full overflow-y-auto">
        <div className="container mx-auto px-4 lg:px-8 pt-32 pb-16">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-5xl lg:text-7xl font-bold font-mono text-white mb-6">
                <div>Frostie Stack</div>
                <div>Whitepaper</div>
              </h1>
              <p className="text-xl text-gray-300 font-mono max-w-3xl mx-auto">
                A Sovereign Publishing Protocol for Decentralized Content Creation and Distribution
              </p>
              <div className="mt-8 text-sm text-gray-400 font-mono">
                Version 1.0 | Frostie Labs | 2025
              </div>
            </div>

            {/* Content Layout */}
            <div className="grid lg:grid-cols-5 gap-8">
              {/* Table of Contents - Sidebar */}
              <div className="lg:col-span-1">
                <TableOfContents
                  sections={WhitePaperSections}
                  activeSection={activeSection}
                  onSectionClick={setActiveSection}
                />
              </div>

              {/* Main Content */}
              <div className="lg:col-span-4">
                <Section
                  section={WhitePaperSections[activeSection]}
                  isActive={true}
                />

                {/* Call to Action */}
                {activeSection === 'joinUs' && (
                  <div className="mt-12 bg-gradient-to-r from-teal-400/10 to-blue-500/10 rounded-xl p-8 border border-teal-400/20">
                    <h3 className="text-2xl font-bold text-white mb-4 font-mono">Join the FrostieStack Ecosystem</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      Ready to be part of the decentralized publishing revolution? Get early access to FrostieStack
                      and help shape the future of sovereign content creation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        onClick={() =>
                          window.open(
                            'https://forms.gle/5QerzN2BoYjfAFQm9',
                            '_blank',
                            'noopener,noreferrer'
                          )
                        }
                        className="px-8 py-3 bg-teal-400 hover:bg-teal-500 text-white rounded-lg font-medium transition-colors">
                        Get Early Access
                      </button>
                      <button
                        onClick={() =>
                          window.open(
                            pdf,
                            '_blank',
                            'noopener,noreferrer'
                          )
                        }
                        className="px-8 py-3 border border-gray-600 hover:border-gray-500 text-white rounded-lg font-medium transition-colors">
                        View Full PDF
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
