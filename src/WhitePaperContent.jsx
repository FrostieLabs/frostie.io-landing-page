import React from 'react';

export const WhitePaperSections = {
  abstract: {
    title: "Abstract",
    content: `The digital publishing landscape is fragmented, centralized, and structurally opaque. Content creators, developers, and decentralized communities alike face significant limitations—from fragile monetization models to siloed infrastructure and unverifiable content ownership. FrostieStack addresses these challenges by introducing a sovereign publishing protocol that combines decentralized storage, blockchain-based ownership verification, and modular content management systems (CMS) into a unified, developer-friendly ecosystem.

Built on principles of transparency, composability, and creator sovereignty, FrostieStack enables developers to build custom publishing applications while ensuring content remains permanently accessible, verifiably owned, and economically sustainable. By leveraging IPFS for distributed storage, smart contracts for ownership and monetization, and a flexible blueprint system for rapid application development, FrostieStack creates a new paradigm for digital content creation and distribution.

This white paper outlines the technical architecture, economic model, and governance framework that will power the next generation of decentralized publishing platforms.`
  },
  
  introduction: {
    title: "1. Introduction",
    content: `The modern web has centralized content creation and distribution into the hands of a few major platforms. While these platforms have enabled unprecedented global connectivity and content sharing, they have also introduced significant limitations:

• Content creators lack true ownership of their work and audiences
• Monetization models favor platform operators over creators
• Content can be censored, removed, or made inaccessible without recourse
• Data portability between platforms is limited or non-existent
• Revenue sharing models are opaque and subject to unilateral changes

FrostieStack emerges as a solution to these fundamental issues by providing a decentralized, sovereign publishing protocol that returns control to creators and developers while maintaining the benefits of modern web infrastructure.`
  },

  vision: {
    title: "2. Vision & Mission",
    content: `FrostieStack envisions a future where content creation and distribution are truly decentralized, where creators maintain sovereign ownership of their work, and where developers can build innovative publishing applications without being constrained by centralized platform limitations.

Our mission is to provide the foundational infrastructure for this vision through:

• A decentralized content management system that ensures permanent accessibility
• Blockchain-based ownership verification and monetization tools
• Developer-friendly APIs and frameworks for building custom publishing applications
• Economic incentives that align the interests of creators, developers, and users
• Governance mechanisms that ensure the protocol evolves in service of its community`
  },

  architecture: {
    title: "3. Technical Architecture",
    content: `FrostieStack is built on a modular architecture that combines several key technologies:

**3.1 Decentralized Storage Layer**
Content is stored on IPFS (InterPlanetary File System), ensuring permanent accessibility and resistance to censorship. Content addressing through cryptographic hashes provides immutable references and enables efficient deduplication.

**3.2 Blockchain Layer**
Smart contracts on Ethereum (with plans for multi-chain support) handle:
• Content ownership verification
• Monetization and revenue distribution
• Access control and permissions
• Governance token distribution

**3.3 Blueprint System**
A modular framework that allows developers to rapidly deploy custom publishing applications with pre-built components for common functionality like user authentication, content management, and payment processing.

**3.4 API Layer**
RESTful and GraphQL APIs provide seamless integration with existing web development workflows while abstracting the complexity of blockchain and IPFS interactions.`
  },

  tokenomics: {
    title: "4. FROSTIE Token Economics",
    content: `The FROSTIE token serves as the native utility token of the FrostieStack ecosystem, facilitating various platform functions:

**4.1 Utility Functions**
• Payment for storage and bandwidth costs
• Staking for content verification and moderation
• Governance voting rights
• Developer incentives and grants

**4.2 Economic Model**
The token economics are designed to create sustainable value accrual while incentivizing positive ecosystem behaviors:

• Content creators earn tokens through engagement and quality metrics
• Developers receive tokens for building and maintaining applications
• Validators earn tokens for providing infrastructure services
• Token holders participate in governance decisions

**4.3 Distribution**
Token distribution follows a fair launch model with allocations for:
• Community rewards (40%)
• Development fund (25%)
• Team and advisors (20%)
• Ecosystem partnerships (15%)`
  },

  governance: {
    title: "5. Governance Framework",
    content: `FrostieStack employs a progressive decentralization model, transitioning from foundation-led development to full DAO governance:

**5.1 Initial Phase**
The Frostie Foundation oversees core development, security audits, and ecosystem growth while establishing governance frameworks.

**5.2 Transition Phase**
Gradual introduction of token-based voting for protocol upgrades, treasury allocation, and strategic decisions.

**5.3 Full DAO Phase**
Complete transition to decentralized governance with:
• Token-weighted voting on all protocol decisions
• Delegated voting mechanisms for improved participation
• Transparent proposal and execution processes
• Community-driven roadmap development`
  },

  roadmap: {
    title: "6. Development Roadmap",
    content: `**Q1 2025 - Foundation**
• Core infrastructure development
• Initial testnet launch
• Developer documentation and tools
• Community building initiatives

**Q2 2025 - Beta Release**
• Public beta with limited access
• Blueprint marketplace launch
• Creator onboarding programs
• Security audits and testing

**Q3 2025 - Mainnet Launch**
• Full mainnet deployment
• Token generation event
• Multi-chain expansion planning
• Enterprise partnerships

**Q4 2025 - Ecosystem Growth**
• Advanced developer tools
• Mobile SDK release
• DAO governance transition
• International expansion`
  },

  risks: {
    title: "7. Risk Factors",
    content: `**7.1 Technical Risks**
Smart contract vulnerabilities, IPFS network stability, and integration challenges may impact platform functionality.

**7.2 Market Volatility**
Token price fluctuations may affect user adoption and economic incentives within the ecosystem.

**7.3 Regulatory Uncertainty**
Evolving regulations around decentralized platforms and utility tokens may require architectural adjustments.

**7.4 Competition**
New Web3 CMS platforms and innovations in content delivery may challenge FrostieStack's competitive position.

**7.5 Operational Risks**
Development delays, governance challenges, and stakeholder misalignment may impact platform growth and adoption.`
  },
  joinUs: {
    title: "Join us",
    content: `**Join the FrostieStack Ecosystem**

Ready to be part of the decentralized publishing revolution? Get early access to FrostieStack and help shape the future of sovereign content creation.

**Why Join Early?**

• **Pioneer Access**: Be among the first to experience the next generation of decentralized publishing

• **Shape the Future**: Your feedback and participation will directly influence platform development

• **Community Benefits**: Join a growing community of creators, developers, and advocates for digital sovereignty

• **Early Adopter Rewards**: Potential benefits and recognition for early supporters of the ecosystem

**Get Started Today**

Take the first step towards content sovereignty and join thousands of creators who are building the future of decentralized publishing.`
  }
};

export default WhitePaperSections;
