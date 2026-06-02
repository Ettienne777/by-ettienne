function Hero() {
  return (
    <section id="work" className="relative overflow-hidden bg-[#F8F4EE] py-24 min-h-screen">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.95)_0%,rgba(248,244,238,0.0)_72%)]" />
      <div className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-[#C97357]/12 blur-3xl animate-float" />
      <div className="pointer-events-none absolute left-16 top-44 h-48 w-48 rounded-full bg-[#8A6E58]/15 blur-3xl animate-float" />

      <div className="relative max-w-7xl mx-auto px-8">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-[#C97357]/20 bg-white/60 px-4 py-2 text-sm text-[#8A6E58] shadow-[0_20px_50px_rgba(0,0,0,0.05)] backdrop-blur-xl">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#C97357]" />
              Premium websites with motion, personality, and polish.
            </div>

            <h1 className="relative overflow-hidden text-5xl md:text-7xl font-black tracking-[-0.04em] text-[#2D2A26] leading-tight">
              <span className="block">Luxury digital experiences</span>
              <span className="block">that feel</span>
              <span className="block text-[#C97357]">bold, confident,</span>
              <span className="block text-[#2D2A26]">and unmistakably you.</span>
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-[#6C5B4D]">
              We craft websites for service brands who want to feel <span className="font-semibold text-[#C97357]">premium</span>, <span className="font-semibold text-[#8A6E58]">memorable</span>, and <span className="font-semibold text-[#2D2A26]">human</span> — with motion, layered layouts, and thoughtful strategy baked into every page.
            </p>

            <div className="relative overflow-hidden rounded-full border border-[#E8E2DC] bg-white/90 px-4 py-3 shadow-sm shadow-[#bfa189]/10">
              <div className="kinetic-marquee flex gap-8 whitespace-nowrap text-sm uppercase tracking-[0.3em] text-[#6C5B4D]">
                <span className="inline-flex items-center gap-2">Creative direction</span>
                <span className="inline-flex items-center gap-2">Website storytelling</span>
                <span className="inline-flex items-center gap-2">Signature motion</span>
                <span className="inline-flex items-center gap-2">Client-first flows</span>
                <span className="inline-flex items-center gap-2">Elegant systems</span>
                <span className="inline-flex items-center gap-2">High-end brand identity</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="#portfolio" className="inline-flex items-center justify-center rounded-full bg-[#C97357] px-8 py-4 text-base font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#AF5F40]">
                Explore the portfolio
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-[#2D2A26] bg-white px-8 py-4 text-base font-semibold text-[#2D2A26] transition duration-300 hover:-translate-y-1 hover:bg-[#2D2A26] hover:text-white">
                Start a project
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-[2rem] border border-[#E8E2DC] bg-white/90 p-5 shadow-xl">
                <p className="text-sm text-[#8A6E58] uppercase tracking-[0.4em] mb-3">Designer-led</p>
                <p className="text-lg font-semibold text-[#2D2A26]">Elegant systems that sell services with clarity.</p>
              </div>
              <div className="rounded-[2rem] border border-[#E8E2DC] bg-white/90 p-5 shadow-xl">
                <p className="text-sm text-[#8A6E58] uppercase tracking-[0.4em] mb-3">Systems-first</p>
                <p className="text-lg font-semibold text-[#2D2A26]">Clear pages that turn visitors into clients.</p>
              </div>
              <div className="rounded-[2rem] border border-[#E8E2DC] bg-white/90 p-5 shadow-xl">
                <p className="text-sm text-[#8A6E58] uppercase tracking-[0.4em] mb-3">Boutique energy</p>
                <p className="text-lg font-semibold text-[#2D2A26]">A premium feel for ambitious service brands.</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-14 top-10 h-28 w-28 rounded-full bg-[#C97357]/15 blur-3xl animate-float" />
            <div className="absolute right-0 top-24 h-24 w-24 rounded-full bg-[#8A6E58]/20 blur-3xl animate-float" />

            <div className="glass-card relative rounded-[3rem] border border-white/80 bg-white/80 p-8 shadow-[0_40px_80px_rgba(25,23,22,0.12)] backdrop-blur-xl">
              <div className="absolute -left-10 top-10 h-12 w-12 rounded-full bg-[#C97357]/20 shadow-[0_20px_40px_rgba(201,115,87,0.18)]" />
              <div className="absolute right-6 top-10 h-12 w-12 rounded-full border border-[#C97357]/20 bg-white/80" />

              <div className="space-y-6">
                <div className="rounded-[2.5rem] bg-gradient-to-br from-[#FDF5EE] to-[#FFF8F2] p-6 shadow-[0_35px_65px_rgba(255,201,115,0.14)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_45px_80px_rgba(255,201,115,0.18)]">
                  <span className="inline-flex rounded-full bg-[#C97357]/10 px-3 py-1 text-xs uppercase tracking-[0.35em] text-[#C97357]">Featured</span>
                  <h2 className="mt-6 text-3xl font-semibold text-[#2D2A26]">Wren Studio</h2>
                  <p className="mt-4 text-sm leading-7 text-[#6C5B4D]">A high-end service website with a playful editorial rhythm, premium spacing, and expressive motion.</p>
                  <div className="mt-6 flex flex-wrap gap-2 text-xs uppercase tracking-[0.3em] text-[#6C5B4D]">
                    <span className="rounded-full bg-[#F7E6D8] px-3 py-1">Branding</span>
                    <span className="rounded-full bg-[#F7E6D8] px-3 py-1">Web design</span>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[2rem] border border-[#E8E2DC] bg-white/90 p-5 shadow-lg transition duration-300 hover:-translate-y-1">
                    <p className="text-sm uppercase tracking-[0.4em] text-[#C97357]">Impact</p>
                    <p className="mt-4 text-2xl font-bold text-[#2D2A26]">+42%</p>
                    <p className="mt-2 text-sm text-[#6C5B4D]">more qualified leads</p>
                  </div>
                  <div className="rounded-[2rem] border border-[#E8E2DC] bg-white/90 p-5 shadow-lg transition duration-300 hover:-translate-y-1">
                    <p className="text-sm uppercase tracking-[0.4em] text-[#C97357]">Mood</p>
                    <p className="mt-4 text-2xl font-bold text-[#2D2A26]">Luxe</p>
                    <p className="mt-2 text-sm text-[#6C5B4D]">modern, approachable, warm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
