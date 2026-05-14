export default function BeyondBrandLandingPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden font-sans">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10rem] left-[-10rem] h-[30rem] w-[30rem] rounded-full bg-lime-400/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-[-10rem] right-[-10rem] h-[30rem] w-[30rem] rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />
      </div>

      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold tracking-wider">
            BEYOND <span className="text-lime-400">BRAND</span>
          </h1>

          <nav className="hidden md:flex gap-10 text-sm uppercase tracking-widest text-zinc-300">
            <a href="#services" className="hover:text-lime-400 transition">Services</a>
            <a href="#work" className="hover:text-lime-400 transition">Work</a>
            <a href="#about" className="hover:text-lime-400 transition">About</a>
            <a href="#contact" className="hover:text-lime-400 transition">Contact</a>
          </nav>

         
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-32">
        <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 animate-fadeInUp">
            <p className="uppercase tracking-[0.3em] text-lime-400 text-sm">
              Social Media Creative Agency
            </p>

            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight">
              We Build <span className="text-lime-400">Brands</span> Beyond Limits.
            </h2>

            <p className="text-zinc-400 text-lg max-w-xl leading-relaxed">
              Beyond Brand creates cinematic content, social media campaigns,
              AI-generated videos, photo shoots, graphic design, and advertising
              systems that help modern brands dominate online.
            </p>

            <div className="flex flex-wrap gap-5 pt-4">
              <button className="bg-lime-400 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform shadow-[0_0_40px_rgba(132,255,91,0.4)]">
                Book A Call
              </button>

              <button className="border border-white/20 px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all">
                View Portfolio
              </button>
            </div>
          </div>

          {/* 3D Styled Visual */}
          <div className="relative flex items-center justify-center h-[500px]">
            <div className="absolute h-72 w-72 rounded-full border border-lime-400/50 animate-spin-slow" />
            <div className="absolute h-96 w-96 rounded-full border border-cyan-500/30 animate-spin-reverse" />

            <div className="relative h-56 w-56 bg-gradient-to-br from-lime-400 to-cyan-500 rounded-[3rem] rotate-12 shadow-[0_0_100px_rgba(132,255,91,0.4)] animate-float" />

            <div className="absolute top-10 right-10 bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-5 animate-floatSlow">
              <p className="text-sm text-zinc-300">Campaign Reach</p>
              <h3 className="text-4xl font-black">500M+</h3>
            </div>

            <div className="absolute bottom-10 left-10 bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-5 animate-float">
              <p className="text-sm text-zinc-300">Brands Managed</p>
              <h3 className="text-4xl font-black">120+</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-32 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <p className="text-lime-400 uppercase tracking-[0.3em] text-sm mb-5">
              Services
            </p>
            <h2 className="text-5xl md:text-6xl font-black max-w-3xl leading-tight">
              Creative Systems Built For Modern Brands.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Social Media Management",
              "Graphic Design",
              "AI Video Generation",
              "Photo Shoots",
              "Video Production",
              "Paid Advertising",
            ].map((service, i) => (
              <div
                key={i}
                className="group bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:border-lime-400/50 hover:-translate-y-2 transition-all duration-500"
              >
                <div className="h-14 w-14 rounded-2xl bg-lime-400/10 border border-lime-400/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <div className="h-6 w-6 rounded-full bg-lime-400" />
                </div>

                <h3 className="text-2xl font-bold mb-4">{service}</h3>

                <p className="text-zinc-400 leading-relaxed">
                  Premium creative execution designed to help your brand scale,
                  engage audiences, and dominate social platforms.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="work" className="py-32 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
            <div>
              <p className="text-lime-400 uppercase tracking-[0.3em] text-sm mb-5">
                Featured Work
              </p>
              <h2 className="text-5xl md:text-6xl font-black leading-tight">
                Campaigns That Create Attention.
              </h2>
            </div>

            <p className="max-w-md text-zinc-400 text-lg">
              We produce high-end visual campaigns, social media systems, and
              viral content strategies for ambitious brands.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="group relative overflow-hidden rounded-[2rem] bg-zinc-900 h-[500px]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-lime-400/20 to-cyan-500/20 group-hover:scale-110 transition-transform duration-700" />

                <div className="absolute inset-0 bg-black/30" />

                <div className="relative h-full flex flex-col justify-end p-8">
                  <p className="uppercase text-sm tracking-[0.3em] text-lime-400 mb-3">
                    Brand Campaign
                  </p>

                  <h3 className="text-4xl font-black mb-4">
                    Luxury Social Launch
                  </h3>

                  <p className="text-zinc-300 leading-relaxed">
                    AI-generated campaigns and cinematic production crafted for
                    premium audience engagement.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-32 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          {[
            ["120+", "Brands Managed"],
            ["500M+", "Organic Reach"],
            ["300+", "Campaigns Delivered"],
          ].map(([num, label], i) => (
            <div key={i} className="space-y-4">
              <h2 className="text-6xl md:text-7xl font-black text-lime-400">
                {num}
              </h2>
              <p className="uppercase tracking-[0.2em] text-zinc-400 text-sm">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <p className="text-lime-400 uppercase tracking-[0.3em] text-sm">
              About Beyond Brand
            </p>

            <h2 className="text-5xl md:text-6xl font-black leading-tight">
              We Create Digital Influence.
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed">
              Beyond Brand is a creative-first social media agency focused on
              helping brands grow through strategy, cinematic content, AI-driven
              production, and premium visual storytelling.
            </p>
          </div>

          <div className="relative h-[500px] rounded-[3rem] bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(132,255,91,0.15),transparent_70%)]" />

            <div className="absolute top-10 left-10 bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/10 animate-float">
              <p className="text-zinc-300 text-sm">Creative Direction</p>
              <h3 className="text-3xl font-black mt-2">Design + Motion</h3>
            </div>

            <div className="absolute bottom-10 right-10 bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/10 animate-floatSlow">
              <p className="text-zinc-300 text-sm">AI Production</p>
              <h3 className="text-3xl font-black mt-2">Next Gen Content</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-40 px-6 border-t border-white/10 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-lime-400 uppercase tracking-[0.3em] text-sm mb-6">
            Ready To Scale?
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-tight mb-8">
            Let’s Build Your Brand Beyond Limits.
          </h2>

          <p className="text-zinc-400 text-lg mb-12 max-w-2xl mx-auto">
            High-performance creative systems, cinematic campaigns, and social
            strategies designed for modern brands.
          </p>

          <button className="bg-lime-400 text-black px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_60px_rgba(132,255,91,0.4)]">
            Start Your Project
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-zinc-500 text-sm">
          <p>© 2026 Beyond Brand. All Rights Reserved.</p>

          <div className="flex gap-6 uppercase tracking-widest">
            <a href="#" className="hover:text-lime-400 transition">Instagram</a>
            <a href="#" className="hover:text-lime-400 transition">Behance</a>
            <a href="#" className="hover:text-lime-400 transition">LinkedIn</a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }

        .animate-floatSlow {
          animation: float 7s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin 15s linear infinite;
        }

        .animate-spin-reverse {
          animation: spinReverse 20s linear infinite;
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease forwards;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes spinReverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0px);
          }
        }
      `}</style>
    </div>
  );
}
