import { useParams, Link } from 'react-router-dom'
import projects from '../data/projects'

function Project() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-2xl font-bold">Project not found</h2>
          <p className="mt-4">Sorry, we couldn't find that project.</p>
          <Link to="/" className="mt-6 inline-block text-[#C97357]">Back home</Link>
        </div>
      </section>
    )
  }

  return (
    <main className="bg-[#F8F4EE]">
      <section className="bg-white py-20 shadow-sm">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <p className="uppercase tracking-[0.4em] text-sm text-[#C97357] mb-4">{project.hero.eyebrow}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D2A26] mb-4">{project.hero.title}</h1>
          <p className="text-lg text-[#8A6E58] max-w-3xl mx-auto">{project.hero.intro}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-8 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <div>
            <div className="mb-10 rounded-[2rem] border border-[#E8E2DC] bg-white p-10 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Project overview</h2>
              <p className="text-[#8A6E58] leading-relaxed mb-6">{project.summary}</p>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="text-sm uppercase tracking-[0.3em] text-[#C97357] mb-3">Challenge</h3>
                  <p className="text-[#6C5B4D] leading-relaxed">{project.challenge}</p>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-[0.3em] text-[#C97357] mb-3">Solution</h3>
                  <p className="text-[#6C5B4D] leading-relaxed">{project.solution}</p>
                </div>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-[2rem] bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Services provided</h3>
                <ul className="list-disc pl-5 space-y-3 text-[#8A6E58]">
                  {project.services.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[2rem] bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Design process</h3>
                <ol className="list-decimal pl-5 space-y-3 text-[#8A6E58]">
                  {project.process.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link to="/" className="inline-flex items-center justify-center rounded-full border border-[#2D2A26] px-8 py-3 text-sm font-semibold text-[#2D2A26] transition hover:bg-[#2D2A26] hover:text-white">
                Back to portfolio
              </Link>
              <a href="/#contact" className="inline-flex items-center justify-center rounded-full bg-[#C97357] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#AF5F40]">
                Start a project
              </a>
            </div>
          </div>

          <aside className="space-y-6 rounded-[2rem] border border-[#E8E2DC] bg-[#2D2A26] p-8 text-white shadow-xl">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#C97357] mb-3">Project details</p>
              <div className="space-y-4 text-sm text-[#D0C5B7]">
                <div>
                  <p className="font-semibold text-white">Technology</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm">{tech}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-white">Timeline</p>
                  <p className="mt-2 text-[#D0C5B7]">{project.duration}</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Focus</p>
                  <p className="mt-2 text-[#D0C5B7]">{project.services.join(', ')}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Key outcomes</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {project.results.map((result) => (
                  <div key={result.label} className="rounded-[1.5rem] bg-white/10 p-5">
                    <p className="text-sm uppercase tracking-[0.2em] text-[#C97357]">{result.label}</p>
                    <p className="mt-3 text-2xl font-semibold text-white">{result.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="uppercase tracking-[0.4em] text-sm text-[#C97357] mb-4">Visual direction</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D2A26]">Screenshot previews and interface direction</h2>
            </div>
            <a href="/#contact" className="inline-flex items-center justify-center rounded-full bg-[#C97357] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#AF5F40]">
              Book a consultation
            </a>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {project.screenshots.map((shot) => (
              <article key={shot.title} className="rounded-[2rem] border border-[#E8E2DC] bg-[#F8F4EE] p-6 shadow-sm">
                <div className="h-52 rounded-3xl bg-gradient-to-br from-[#D0A27B] via-[#C97357] to-[#8A6E58] p-6 text-white shadow-inner">
                  <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.35em] opacity-90">
                    <span className="h-2 w-2 rounded-full bg-white/90" /> Screen preview
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 w-32 rounded-full bg-white/70" />
                    <div className="h-4 w-24 rounded-full bg-white/60" />
                    <div className="mt-8 h-28 rounded-3xl bg-white/15 p-4 text-sm leading-relaxed">
                      <p>{shot.caption}</p>
                    </div>
                  </div>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-[#2D2A26]">{shot.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Project
