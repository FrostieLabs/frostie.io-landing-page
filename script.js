const { useEffect, useState, useRef } = React;

function App() {
  const [showNav, setShowNav] = useState(true);
  const scrollRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    const onScroll = () => {
      // Show nav only when at top of Page 1
      setShowNav(container.scrollTop === 0);
    };
    container.addEventListener('scroll', onScroll);
    return () => container.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="relative h-full w-full">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 opacity-95"></div>

      {/* Conditional fixed nav */}
      {showNav && (
        <nav className="fixed top-0 left-0 right-0 z-10 px-8 lg:px-32 py-4 flex justify-between items-center bg-transparent">
          <div className="text-xl font-bold font-mono">Frostie Lab</div>
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
        <section className="h-screen snap-start flex flex-col justify-center items-center px-8 lg:px-32 pt-20 space-y-6 text-center">
          <h1 className="text-8xl lg:text-9xl font-extrabold">Content, Owned.</h1>
          <p className="text-2xl lg:text-3xl font-mono">A decentralized CMS engine — built on SUI and Walrus.</p>
          <div className="space-x-4">
            <button className="px-6 py-3 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-white font-medium">Explore</button>
            <button className="px-6 py-3 border border-white rounded-lg text-white font-medium">Whitepaper</button>
          </div>
        </section>

        {/* Page 2 */}
        <section className="h-screen snap-start flex flex-col lg:flex-row justify-center items-center px-8 lg:px-32 space-y-6 lg:space-y-0">
          <div className="lg:w-1/2 w-full flex flex-col items-start space-y-6">
            <h2 className="text-5xl font-bold">Composable CMS Infrastructure</h2>
            <p className="text-lg font-mono max-w-2xl">
              Frostie Labs is building the future of publishing. Developers and creators collaborate on FrostieStack through customizable blueprints, powerful publishing flows, and shared token incentives.
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
        <section className="h-screen snap-start flex flex-col justify-center items-center px-8 lg:px-8">
          <div className="flex justify-evenly items-start gap-32 px-8 lg:px-32 flex-nowrap">
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
              content="$FROSTIE (along with other widely adopted tokens in the Sui ecosystem) powers monetization, blueprint licensing, tipping. Governance across all Frostie-enabled products is exclusively driven by the $FROSTIE token."
            />
            <Card
              title="Future-Proof Engine"
              content="From blogs to docs to full project hubs — FrostieStack is built to power any modular CMS product in the decentralized future."
            />
          </div>
        </section>
      </div>
    </div>
  );
}

function Card({ title, content }) {
  return (
    <div className="float w-full lg:w-64 h-[32rem] bg-gray-800 bg-opacity-60 p-8 rounded-xl shadow-lg transform transition hover:scale-105 hover:shadow-2xl hover:bg-opacity-80">
      <div className="max-w-prose mx-auto text-left space-y-4">
        <h3 className="text-xl font-bold font-mono">{title}</h3>
        <p className="text-base font-mono leading-relaxed">{content}</p>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
