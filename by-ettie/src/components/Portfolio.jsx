import { Link } from 'react-router-dom'
import projects from '../data/projects'

function Portfolio() {
  return (
    <section id="portfolio" className="bg-[#F8F4EE] py-24 animate-fade-up">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.4em] text-sm text-[#C97357] mb-4">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D2A26]">Luxury websites designed to capture attention and convert.</h2>
          <p className="mt-6 text-lg text-[#6C5B4D] max-w-2xl mx-auto">Each project is built with premium aesthetics, thoughtful motion, and a clear path from first impression to inquiry.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <article key={project.slug} className="group relative overflow-hidden rounded-[2.5rem] border border-[#E8E2DC] bg-white p-6 shadow-[0_30px_60px_rgba(39,33,28,0.08)] transition duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_35px_75px_rgba(39,33,28,0.12)]">
              <Link to={`/projects/${project.slug}`} className="block">
                <div className="relative mb-6 overflow-hidden rounded-[2.25rem] border border-[#F0E7DC] shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C97357] via-[#D89E73] to-[#8A6E58] opacity-90" />
                  <div className="absolute inset-x-0 top-4 flex justify-between px-5">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/90" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/60" />
                  </div>
                  <div className="absolute bottom-5 left-5 w-[60%] space-y-2">
                    <div className="h-3 w-28 rounded-full bg-white/70" />
                    <div className="h-3 w-20 rounded-full bg-white/50" />
                  </div>
                  <div className="relative h-52" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-[#2D2A26]">{project.title}</h3>
                  <p className="text-[#6C5B4D] leading-relaxed">{project.summary}</p>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-[#6C5B4D]">
                    <span className="rounded-full bg-[#F7E6D8] px-3 py-1">{project.services[0]}</span>
                    <span className="rounded-full border border-[#E8E2DC] px-3 py-1">{project.duration || 'Timely launch'}</span>
                  </div>
                </div>
                <div className="mt-8 flex items-center justify-between text-sm font-semibold text-[#C97357]">
                  <span>View case study</span>
                  <span className="text-[#6C5B4D] transition group-hover:text-[#2D2A26]">⟶</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
