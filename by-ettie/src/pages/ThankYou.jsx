import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { trackPageView } from '../lib/analytics'

function ThankYou() {
  const location = useLocation()
  const source = location.state?.source || 'form'

  useEffect(() => {
    trackPageView('/thank-you')
  }, [])

  const heading = source === 'booking' ? 'Thanks for scheduling' : 'Thanks for reaching out'
  const message = source === 'booking'
    ? 'Your booking is confirmed. I’ll follow up with a proposal and next steps soon.'
    : 'Your message is on its way. I’ll review your brief and reply within one business day.'

  return (
    <main className="bg-[#F8F4EE] py-24">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <div className="inline-flex rounded-[2rem] border border-[#E8E2DC] bg-white p-14 shadow-xl">
          <div className="space-y-6">
            <p className="uppercase tracking-[0.4em] text-sm text-[#C97357]">Thank you</p>
            <h1 className="text-4xl font-bold text-[#2D2A26]">{heading}</h1>
            <p className="text-lg text-[#8A6E58]">{message}</p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                to="/"
                className="inline-flex rounded-full bg-[#C97357] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#AF5F40]"
              >
                Return home
              </Link>
              <a
                href="mailto:ettienne06@icloud.com"
                className="inline-flex rounded-full border border-[#2D2A26] bg-white px-8 py-4 text-sm font-semibold text-[#2D2A26] transition hover:bg-[#F8F4EE]"
              >
                Email me directly
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ThankYou
