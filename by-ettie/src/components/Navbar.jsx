import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-white/20 bg-white/75 backdrop-blur-2xl shadow-[0_25px_60px_rgba(25,23,22,0.10)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 px-8 py-5">
        <a href="#work" className="flex items-center gap-4">
          <div className="relative h-12 w-12 rounded-full border border-[#C97357] bg-gradient-to-br from-[#FFF4EA] via-[#F8E2D2] to-[#C97357]/20 shadow-[0_20px_50px_rgba(201,115,87,0.14)]">
            <span className="absolute inset-0 flex items-center justify-center text-xs font-black tracking-[0.35em] text-[#3A322C]">BE</span>
          </div>
          <div className="space-y-0.5">
            <p className="text-sm uppercase tracking-[0.4em] text-[#8A6E58]">By Ettienne</p>
            <p className="text-xs text-[#6C5B4D]">Creative studio</p>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8 text-[#2D2A26]">
          <a href="#work" className="transition hover:text-[#C97357]">Work</a>
          <a href="#services" className="transition hover:text-[#C97357]">Services</a>
          <a href="#portfolio" className="transition hover:text-[#C97357]">Portfolio</a>
          <a href="#about" className="transition hover:text-[#C97357]">About</a>
          <a href="#process" className="transition hover:text-[#C97357]">Process</a>
          <a href="/schedule" className="transition hover:text-[#C97357]">Schedule</a>
          <a href="#contact" className="transition hover:text-[#C97357]">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="#contact" className="hidden md:inline-flex rounded-full bg-[#C97357] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#AF5F40]">
            Start a Project
          </a>
          <button
            className="inline-flex md:hidden items-center justify-center rounded-full border border-[#2D2A26] px-4 py-3 text-[#2D2A26]"
            type="button"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-white/80 bg-[#F8F4EE] px-8 py-5">
          <div className="flex flex-col gap-4 text-[#2D2A26]">
            <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#process" onClick={() => setMenuOpen(false)}>Process</a>
            <a href="/schedule" onClick={() => setMenuOpen(false)}>Schedule</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar