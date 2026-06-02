import React from 'react'
import { useNavigate } from 'react-router-dom'
import { trackEvent } from '../lib/analytics'

function Cta() {
  const [status, setStatus] = React.useState('idle')
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = new FormData(event.target)
    const payload = Object.fromEntries(form.entries())
    setStatus('sending')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (res.ok) {
        trackEvent({ action: 'form_submission', category: 'contact', label: 'Contact form submitted' })
        setStatus('sent')
        event.target.reset()
        navigate('/thank-you', { state: { source: 'form' } })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const handleOpenScheduler = () => {
    trackEvent({ action: 'booking_click', category: 'booking', label: 'Contact page booking link' })
    navigate('/schedule')
  }

  return (
    <section id="contact" className="bg-gradient-to-br from-[#19100d] via-[#2D2A26] to-[#302a22] py-24 text-white animate-fade-up">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-[#C97357]/20 bg-white/10 px-4 py-2 text-sm text-[#D0C5B7] mb-4 backdrop-blur-xl">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#C97357]" />
                High-touch, premium website design.
              </div>
              <p className="uppercase tracking-[0.4em] text-sm text-[#C97357] mb-4">Let’s build</p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Ready to create a website that makes a strong first impression?
              </h2>
              <p className="text-lg text-[#D0C5B7] max-w-2xl leading-relaxed">
                Share your project goals and I’ll help you launch a website that looks polished, converts visitors, and supports business growth.
              </p>
            </div>

            <div className="glass-card rounded-[2rem] border border-white/10 p-8 shadow-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-[#C97357] mb-4">Connect with me</p>
              <a className="block text-base text-white underline decoration-[#C97357]/30 hover:text-[#F1E6DA]" href="mailto:ettienne06@icloud.com">ettienne06@icloud.com</a>
              <a className="block mt-2 text-base text-white underline decoration-[#C97357]/30 hover:text-[#F1E6DA]" href="tel:0630232145">063 023 2145</a>
              <p className="mt-6 text-sm text-[#D0C5B7] leading-relaxed">I typically respond within one business day. Your details stay private and are only used to plan your project.</p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-[#C97357] mb-4">Schedule a discovery call</p>
              <p className="text-[#D0C5B7] leading-relaxed">Book a dedicated time for a strategy call and we’ll discuss your website goals in detail.</p>
              <button
                type="button"
                onClick={handleOpenScheduler}
                className="mt-6 inline-flex rounded-full bg-[#C97357] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#AF5F40]"
              >
                Go to booking page
              </button>
              <p className="mt-4 text-sm text-[#D0C5B7]">If you already have a scheduling link, you can access it on the next page.</p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-[#C97357] mb-4">What happens next</p>
              <ol className="space-y-6 text-[#D0C5B7]">
                <li className="space-y-3 rounded-[1.5rem] border border-white/10 bg-[#171717] p-5">
                  <p className="text-sm uppercase tracking-[0.25em] text-[#C97357]">1</p>
                  <p className="text-lg font-semibold text-white">Review your brief</p>
                  <p>We look at your project details and goals so the first call is focused and efficient.</p>
                </li>
                <li className="space-y-3 rounded-[1.5rem] border border-white/10 bg-[#171717] p-5">
                  <p className="text-sm uppercase tracking-[0.25em] text-[#C97357]">2</p>
                  <p className="text-lg font-semibold text-white">Schedule a call</p>
                  <p>Choose a time that works for you and we’ll talk through scope, priorities, and next steps.</p>
                </li>
                <li className="space-y-3 rounded-[1.5rem] border border-white/10 bg-[#171717] p-5">
                  <p className="text-sm uppercase tracking-[0.25em] text-[#C97357]">3</p>
                  <p className="text-lg font-semibold text-white">Proposal & estimate</p>
                  <p>After our call, I’ll send a clear proposal with scope, timeline, and cost.</p>
                </li>
              </ol>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-[2rem] p-8 shadow-2xl" aria-live="polite">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#2D2A26] mb-2">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className="w-full rounded-3xl border border-gray-200 bg-[#F8F4EE] px-5 py-4 text-[#2D2A26] outline-none transition focus:border-[#C97357] focus:ring-4 focus:ring-[#C97357]/10"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#2D2A26] mb-2">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="Your email"
                  className="w-full rounded-3xl border border-gray-200 bg-[#F8F4EE] px-5 py-4 text-[#2D2A26] outline-none transition focus:border-[#C97357] focus:ring-4 focus:ring-[#C97357]/10"
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-[#2D2A26] mb-2">Company</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Company name"
                  className="w-full rounded-3xl border border-gray-200 bg-[#F8F4EE] px-5 py-4 text-[#2D2A26] outline-none transition focus:border-[#C97357] focus:ring-4 focus:ring-[#C97357]/10"
                />
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-semibold text-[#2D2A26] mb-2">Website</label>
                <input
                  id="website"
                  name="website"
                  type="url"
                  placeholder="Your website"
                  className="w-full rounded-3xl border border-gray-200 bg-[#F8F4EE] px-5 py-4 text-[#2D2A26] outline-none transition focus:border-[#C97357] focus:ring-4 focus:ring-[#C97357]/10"
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="projectType" className="block text-sm font-semibold text-[#2D2A26] mb-2">Project type</label>
                <select
                  id="projectType"
                  name="projectType"
                  className="w-full rounded-3xl border border-gray-200 bg-[#F8F4EE] px-5 py-4 text-[#2D2A26] outline-none transition focus:border-[#C97357] focus:ring-4 focus:ring-[#C97357]/10"
                >
                  <option value="">Select a type</option>
                  <option value="Website redesign">Website redesign</option>
                  <option value="New website">New website</option>
                  <option value="Landing page">Landing page</option>
                  <option value="Ongoing support">Ongoing support</option>
                </select>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-semibold text-[#2D2A26] mb-2">Budget range</label>
                <select
                  id="budget"
                  name="budget"
                  className="w-full rounded-3xl border border-gray-200 bg-[#F8F4EE] px-5 py-4 text-[#2D2A26] outline-none transition focus:border-[#C97357] focus:ring-4 focus:ring-[#C97357]/10"
                >
                  <option value="">Select range</option>
                  <option value="Under $3k">Under $3k</option>
                  <option value="$3k–$6k">$3k–$6k</option>
                  <option value="$6k+">$6k+</option>
                  <option value="Need guidance">Need guidance</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="timeline" className="block text-sm font-semibold text-[#2D2A26] mb-2">Timeline</label>
              <select
                id="timeline"
                name="timeline"
                className="w-full rounded-3xl border border-gray-200 bg-[#F8F4EE] px-5 py-4 text-[#2D2A26] outline-none transition focus:border-[#C97357] focus:ring-4 focus:ring-[#C97357]/10"
              >
                <option value="">Select timeline</option>
                <option value="1-2 months">1-2 months</option>
                <option value="3-4 months">3-4 months</option>
                <option value="Flexible">Flexible</option>
                <option value="Need help planning">Need help planning</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-[#2D2A26] mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                minLength={20}
                placeholder="Tell me about your project"
                className="w-full rounded-3xl border border-gray-200 bg-[#F8F4EE] px-5 py-4 text-[#2D2A26] outline-none transition focus:border-[#C97357] focus:ring-4 focus:ring-[#C97357]/10"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex w-full justify-center rounded-full bg-[#C97357] px-10 py-4 text-base font-semibold text-white shadow-xl transition hover:bg-[#af5f40] hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message sent' : 'Send message'}
            </button>

            <p className="text-sm text-[#D0C5B7]">
              {status === 'sent'
                ? 'Thanks — I’ll follow up within one business day.'
                : status === 'error'
                ? 'Submission failed. Please try again or email me directly.'
                : 'Your message will be reviewed personally, and I’ll be in touch soon.'}
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Cta
