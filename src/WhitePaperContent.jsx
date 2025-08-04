import roadMap from './assets/FrostieStack Development Roadmap.png';
import arch from './assets/FrostieStack Architecture.png';
import workflow from './assets/FrostieStack Workflow.png';

export const WhitePaperSections = {
  abstract: {
    title: "Abstract",
    content: `The digital publishing landscape is fragmented, centralized, and structurally opaque. Content creators, developers, and decentralized communities alike face significant limitations—from fragile monetization models to siloed infrastructure and unverifiable content ownership. FrostieStack addresses these challenges by introducing a sovereign publishing protocol that combines Walrus decentralized storage, Sui blockchain-based ownership verification, and modular blueprint-driven content management systems into a unified, developer-friendly ecosystem.

Built on principles of transparency, composability, and creator sovereignty, FrostieStack enables developers to define and deploy custom publishing blueprints while ensuring content remains permanently accessible, verifiably owned, and economically sustainable. By leveraging Walrus for distributed storage and content delivery, Move smart contracts for permissions and governance, and a flexible blueprint system for rapid CMS development, FrostieStack creates a new paradigm for digital content creation and distribution.

Every action in FrostieStack is cryptographically verifiable—authorship is tied to wallet identity, permissions are enforced on-chain, and content evolves through traceable, auditable updates. This unlocks transparent knowledge systems where DAOs, teams, and individual creators can collaborate, govern collectively, and participate in programmable content economies.

This white paper outlines the technical architecture, blueprint framework, token economics, and governance model that will power the next generation of decentralized publishing infrastructure.`
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
    preImage: {
      src: workflow,
      caption: "FrostieStack Workflow"
    },
    content: `FrostieStack envisions a future where content creation and distribution are truly decentralized, where creators maintain sovereign ownership of their work, and where developers can build innovative publishing applications without being constrained by centralized platform limitations.

Our mission is to provide the foundational infrastructure for this vision through:

• A blueprint-driven content management framework that enables developers to define customizable publishing schemas and workflows
• Walrus-powered decentralized storage ensuring permanent accessibility and censorship resistance
• Sui blockchain-based ownership verification, role-based permissions, and transparent governance
• Developer-friendly CLI tools and SDKs for rapidly deploying custom CMS applications
• Economic incentives through FROSTIE token utility that align the interests of creators, developers, and users
• Governance mechanisms that ensure the protocol evolves in service of its community through decentralized decision-making

By combining the composability of modern development frameworks with the permanence and transparency of blockchain technology, FrostieStack creates a new paradigm for digital publishing—one where sovereignty, collaboration, and innovation flourish without the constraints of centralized control.`
  },

  architecture: {
    title: "3. Technical Architecture",
    postImage: {
      src: arch,
      caption: "FrostieStack Architecture"
    },
    content: `FrostieStack is built on a modular architecture that combines several key technologies:

**3.1 Decentralized Storage Layer**

Content is stored on Walrus Blob Storage, ensuring permanent accessibility and resistance to censorship. Content addressing through cryptographic hashes provides immutable references and enables efficient content delivery through the Walrus Sites protocol.

**3.2 Blockchain Layer**

• Smart contracts on Sui blockchain (built with Move) handle:
• Content ownership verification and authorship tracking
• Role-based access control (Admin, Editor, Viewer)
• Blueprint registry and licensing
• Version control and content history

**3.3 Blueprint System**

A modular framework that allows developers to rapidly deploy custom publishing applications using the FrostieStack CLI. Pre-built blueprints include content schemas, UI templates, and publishing workflows for platforms like Hugo, NextJS, and Docusaurus.

**3.4 Publishing Pipeline**

Static site generators and Kubernetes-native deployment flows automatically render and deploy content to Walrus Sites. The pipeline includes schema validation, content compilation, and verifiable publishing endpoints that operate without centralized servers.`
  },

  tokenomics: {
    title: "4. FROSTIE Token Economics",
    content: `**4. FROSTIE Token Economics**

The FROSTIE token serves as the native utility token of the FrostieStack ecosystem, facilitating various platform functions while supporting multi-asset payments including $SUI, $WAL, and $USDC.

**4.1 Utility Functions**

• Creator monetization through gated content, tips, and subscription models
• Blueprint economy for licensing developer templates and components
• Community contribution rewards for moderators, curators, and content reviewers
• Protocol services including advanced publishing tools and AI-assisted features
• Governance voting rights for protocol upgrades and treasury decisions

**4.2 Economic Model**

The token economics are designed to create sustainable value accrual while incentivizing positive ecosystem behaviors:

• Content creators earn tokens through quality content and community engagement
• Developers receive tokens for building and licensing popular blueprints
• Community contributors earn tokens for moderation, curation, and ecosystem support
• Token holders participate in governance decisions and protocol direction
• Multi-asset support ensures accessibility while $FROSTIE provides enhanced utility

**4.3 Distribution**

Token distribution follows a community-focused model with allocations for:

• Community rewards and creator incentives
• Development fund and ecosystem grants
• Team and early contributors
• Strategic partnerships and integrations

Exact details of tokenomics will be released in 2026 Q2 alongside the Token Generation Event (TGE).`
  },

  governance: {
    title: "5. Governance Framework",
    content: `FrostieStack employs a progressive decentralization model, transitioning from foundation-led development to full DAO governance while ensuring protocol stability and community empowerment throughout the evolution.

**5.1 Foundation Phase**

The Frostie Foundation oversees core protocol development, security audits, and initial ecosystem growth. During this phase, the Foundation maintains decision-making authority over critical infrastructure while establishing transparent governance frameworks and community feedback mechanisms for future decentralization.

**5.2 Hybrid Transition Phase**

Gradual introduction of $FROSTIE token-based voting for specific protocol areas including community grants, blueprint marketplace policies, and feature prioritization. The Foundation retains control over security-critical decisions while delegating ecosystem development choices to token holder governance.

**5.3 Full DAO Phase**

Complete transition to decentralized governance with:

• Token-weighted voting on all protocol decisions, upgrades, and treasury allocation
• Delegated voting mechanisms enabling improved community participation and specialized expertise
• Transparent proposal and execution processes with on-chain tracking and accountability
• Community-driven roadmap development for ecosystem products like FrostieBlogs and FrostieNotion
• Multi-signature treasury management with community oversight and regular transparency reporting
`
  },

  roadmap: {
    title: "6. Development Roadmap",
    preImage: {
      src: roadMap,
      caption: "FrostieStack Development Roadmap"
    },
    content: `**Q3 2025 - Foundation**

• Core infrastructure development
• Initial testnet launch
• Developer documentation and tools
• Community building initiatives

**Q4 2025 - MVP Launch on Testnet**

• NextJS Blueprint
• Developer Blueprint Portal
• Creator Admin Portal
• Walrus Site Support
• Basic RBAC

**Q1 2026 - MVP Improvements & Testnet Tokenization**

• Hugo Blueprint
• Docusaurus Blueprint
• Fine Grained RBAC
• Low-code Content Editing
• Testnet Tokenization

**Q2 2026 - Pre-Mainnet Preparation**

• Governance Implementation
• Tokenomics Finalization
• Security Audits

**Q3 2026 - Mainnet (TGE)**

• Production Deployment
• Real-time Editing
• Full Token Integration
• Validator - Decentralized Static Site Generator (Future)`
  },

  risks: {
    title: "7. Risk Factors",
    content: `**7.1 Technical Risks**

Complex smart contracts, cryptographic systems, and third-party integrations may introduce vulnerabilities such as contract bugs, integration failures, or decentralized storage network downtime that could cause data access issues or content disruptions.

**7.2 Market Volatility**

FROSTIE token price fluctuations due to crypto market volatility may impact user behavior, platform adoption, and economic incentives. Liquidity constraints or shifts in token demand may reduce rewards for developers and creators.

**7.3 Regulatory Uncertainty**

Evolving regulations for decentralized content platforms and utility tokens may affect platform operations, restrict token utility, impose compliance requirements, or limit access in certain jurisdictions.

**7.4 Competition & Technological Shifts**

New Web3 CMS platforms or innovations in content delivery may reduce FrostieStack's competitive advantage as blockchain tooling matures and alternative ecosystems emerge with different features.

**7.5 Operational & Governance Risks**

Stakeholder misalignment, development delays, low governance participation, or challenges transitioning to DAO governance may introduce operational inefficiencies and reduce platform responsiveness.

**7.6 Force Majeure & External Disruptions**

Natural disasters, cyberattacks, market shocks, or geopolitical events may affect development timelines, infrastructure access, or user activity, as decentralized systems remain subject to broader real-world disruptions.`
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
