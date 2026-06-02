function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#1a1410] to-[#0f0a07] text-[#B7B0A6] py-16">
      <div className="pointer-events-none absolute -right-32 top-0 h-48 w-48 rounded-full bg-[#C97357]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-48 w-48 rounded-full bg-[#8A6E58]/10 blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-8 grid gap-12 md:grid-cols-[1.3fr_0.9fr] mb-12">
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full border border-[#C97357] bg-gradient-to-br from-[#FFF4EA]/20 to-[#C97357]/10" />
              <p className="text-lg font-bold text-white">By Ettienne</p>
            </div>
            <p className="text-sm leading-relaxed text-[#B7B0A6]">Creating premium websites for service businesses that want to look polished, clear, and professional.</p>
          </div>

          <div className="glass-card rounded-[1.8rem] border border-white/10 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-[#C97357] mb-4">Contact</p>
            <a className="block text-base text-white underline decoration-[#C97357]/30 hover:text-[#F1E6DA] transition" href="mailto:ettienne06@icloud.com">ettienne06@icloud.com</a>
            <a className="block mt-2 text-base text-white underline decoration-[#C97357]/30 hover:text-[#F1E6DA] transition" href="tel:0630232145">063 023 2145</a>
            <p className="mt-4 text-xs text-[#8A7F70] leading-relaxed">Available for new projects. Response time: 1 business day.</p>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-lg font-semibold text-white mb-4">Explore</p>
            <ul className="space-y-3 text-[#B7B0A6]">
              <li><a className="hover:text-[#C97357] transition duration-300" href="#work">Work</a></li>
              <li><a className="hover:text-[#C97357] transition duration-300" href="#services">Services</a></li>
              <li><a className="hover:text-[#C97357] transition duration-300" href="#portfolio">Portfolio</a></li>
              <li><a className="hover:text-[#C97357] transition duration-300" href="#about">About</a></li>
            </ul>
          </div>
          <div>
            <p className="text-lg font-semibold text-white mb-4">More</p>
            <ul className="space-y-3 text-[#B7B0A6]">
              <li><a className="hover:text-[#C97357] transition duration-300" href="#process">Process</a></li>
              <li><a className="hover:text-[#C97357] transition duration-300" href="/schedule">Schedule</a></li>
              <li><a className="hover:text-[#C97357] transition duration-300" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 pt-8 text-sm text-[#8A7F70] text-center">
        <p>© {new Date().getFullYear()} By Ettienne Creative Studio. Handcrafted for ambition.</p>
      </div>
    </footer>
  )
}

export default Footer
