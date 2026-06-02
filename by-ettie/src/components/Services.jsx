function Services() {
  return (
    <section id="services" className="bg-[#FEF7F1] py-24 animate-fade-up">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.4em] text-sm text-[#C97357] mb-4">Services</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D2A26]">Luxury design services for ambitious service brands.</h2>
          <p className="mt-6 text-lg text-[#6C5B4D] max-w-2xl mx-auto">From premium website design to conversion-led brand systems, every service is designed to help your offer feel elevated and irresistible.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <article className="group relative overflow-hidden rounded-[2.5rem] border border-[#E8E2DC] bg-white p-8 shadow-[0_30px_60px_rgba(39,33,28,0.08)] transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_35px_75px_rgba(39,33,28,0.12)]">
            <div className="absolute inset-x-8 top-0 h-1 rounded-full bg-gradient-to-r from-[#C97357] via-[#D89E73] to-[#8A6E58]" />
            <p className="text-sm uppercase tracking-[0.4em] text-[#C97357] mb-4">Brand strategy</p>
            <h3 className="text-2xl font-semibold text-[#2D2A26] mb-4">Brand strategy</h3>
            <p className="text-[#6C5B4D] leading-relaxed">Define the premium positioning, visual system, and brand voice that makes your services feel confident and memorable.</p>
          </article>

          <article className="group relative overflow-hidden rounded-[2.5rem] border border-[#E8E2DC] bg-white p-8 shadow-[0_30px_60px_rgba(39,33,28,0.08)] transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_35px_75px_rgba(39,33,28,0.12)]">
            <div className="absolute inset-x-8 top-0 h-1 rounded-full bg-gradient-to-r from-[#8A6E58] via-[#D89E73] to-[#C97357]" />
            <p className="text-sm uppercase tracking-[0.4em] text-[#C97357] mb-4">Web design</p>
            <h3 className="text-2xl font-semibold text-[#2D2A26] mb-4">Web design</h3>
            <p className="text-[#6C5B4D] leading-relaxed">Crafted page experiences with premium spacing, thoughtful motion, and conversion paths that feel effortless for visitors.</p>
          </article>

          <article className="group relative overflow-hidden rounded-[2.5rem] border border-[#E8E2DC] bg-white p-8 shadow-[0_30px_60px_rgba(39,33,28,0.08)] transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_35px_75px_rgba(39,33,28,0.12)]">
            <div className="absolute inset-x-8 top-0 h-1 rounded-full bg-gradient-to-r from-[#F0D4B9] via-[#D89E73] to-[#C97357]" />
            <p className="text-sm uppercase tracking-[0.4em] text-[#C97357] mb-4">Growth support</p>
            <h3 className="text-2xl font-semibold text-[#2D2A26] mb-4">Growth support</h3>
            <p className="text-[#6C5B4D] leading-relaxed">Ongoing optimization, messaging refreshes, and strategic updates so your website keeps converting higher-value leads.</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Services
