function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-24">
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-[#C97357]/8 blur-3xl" />
      <div className="pointer-events-none absolute left-0 bottom-0 h-48 w-48 rounded-full bg-[#8A6E58]/10 blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-8 grid gap-16 lg:grid-cols-2 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#C97357]/20 bg-[#F8F4EE]/60 px-4 py-2 text-sm text-[#8A6E58]">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#C97357]" />
            About the studio
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D2A26] leading-tight">
            Thoughtful design with a <span className="text-[#C97357]">real business</span> focus.
          </h2>
          
          <p className="text-lg text-[#6C5B4D] leading-relaxed">
            I create websites that feel polished and perform reliably. Every page is designed to earn trust, highlight your services, and make it simple for customers to take the next step.
          </p>
          
          <p className="text-lg text-[#6C5B4D] leading-relaxed">
            From strategy and design to launch support, the goal is to make your online presence work harder for your business. Each project is a collaboration — your insight, my expertise, refined together into something that feels distinctly <span className="font-semibold text-[#2D2A26]">yours</span>.
          </p>

          <div className="flex gap-6 pt-4">
            <div>
              <p className="text-3xl font-bold text-[#C97357]">7+</p>
              <p className="text-sm text-[#6C5B4D] uppercase tracking-[0.3em]">Years</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#C97357]">50+</p>
              <p className="text-sm text-[#6C5B4D] uppercase tracking-[0.3em]">Projects</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#C97357]">100%</p>
              <p className="text-sm text-[#6C5B4D] uppercase tracking-[0.3em]">Happy clients</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-card rounded-[2.5rem] border border-white/80 p-10 shadow-[0_40px_80px_rgba(25,23,22,0.08)] transition duration-500 hover:-translate-y-2">
            <h3 className="text-2xl font-semibold text-[#2D2A26] mb-8">How I work</h3>
            <ul className="space-y-6 text-[#6C5B4D]">
              <li className="flex gap-4">
                <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-[#C97357]/10 text-[#C97357] font-semibold flex-shrink-0">1</span>
                <div>
                  <p className="font-semibold text-[#2D2A26] mb-1">Discovery</p>
                  <p className="text-sm">Understand your business, audience, and goals to build the right foundation.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-[#C97357]/10 text-[#C97357] font-semibold flex-shrink-0">2</span>
                <div>
                  <p className="font-semibold text-[#2D2A26] mb-1">Design</p>
                  <p className="text-sm">Create clean, professional pages with premium visuals backed by conversion logic.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-[#C97357]/10 text-[#C97357] font-semibold flex-shrink-0">3</span>
                <div>
                  <p className="font-semibold text-[#2D2A26] mb-1">Launch & support</p>
                  <p className="text-sm">Deliver a fast, reliable website with the guidance you need to feel confident.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-[2rem] border border-[#E8E2DC] bg-[#F8F4EE] p-8">
            <p className="text-sm uppercase tracking-[0.4em] text-[#C97357] mb-3">Philosophy</p>
            <p className="text-[#6C5B4D] leading-relaxed">Great design isn't about making things fancy — it's about making them work better. A website should feel intentional, clear, and welcoming.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
