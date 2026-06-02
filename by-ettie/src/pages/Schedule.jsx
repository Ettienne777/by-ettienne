import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { trackPageView, trackEvent } from '../lib/analytics'

const bookingUrl = import.meta.env.VITE_BOOKING_URL || 'https://calendly.com/byettienne/discovery-call'
const isCalendly = bookingUrl.includes('calendly.com')

function Schedule() {
  const navigate = useNavigate()

  useEffect(() => {
    trackPageView('/schedule')
  }, [])

  useEffect(() => {
    if (!isCalendly || typeof window === 'undefined') return

    if (!window.Calendly) {
      const script = document.createElement('script')
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true
      document.body.appendChild(script)
      return () => {
        document.body.removeChild(script)
      }
    }
  }, [])

  const handleOpenScheduler = () => {
    trackEvent({ action: 'booking_click', category: 'booking', label: 'Schedule page open scheduler' })
    window.open(bookingUrl, '_blank')
  }

  const handleConfirmBooking = () => {
    trackEvent({ action: 'booking_confirmed', category: 'booking', label: 'Schedule page confirmed' })
    navigate('/thank-you', { state: { source: 'booking' } })
  }

  return (
    <main className="bg-[#F8F4EE] py-20">
      <div className="max-w-6xl mx-auto px-8">
        <div className="rounded-[2rem] border border-[#E8E2DC] bg-white p-10 shadow-xl">
          <div className="mb-10 text-center">
            <p className="uppercase tracking-[0.4em] text-sm text-[#C97357] mb-4">Schedule a call</p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#2D2A26]">Book a discovery call with By Ettienne</h1>
            <p className="mt-6 text-lg text-[#8A6E58] max-w-3xl mx-auto">Choose a time that fits your schedule, then return here to confirm your booking and move to the next step.</p>
          </div>

          {isCalendly ? (
            <div className="mb-10 rounded-[2rem] overflow-hidden border border-[#E8E2DC] bg-[#F8F4EE] text-black">
              <div className="calendly-inline-widget" data-url={bookingUrl} style={{ minWidth: '320px', height: '700px' }} />
            </div>
          ) : (
            <div className="mb-10 rounded-[2rem] border border-dashed border-[#C97357] bg-[#FFFAF5] p-8 text-[#2D2A26]">
              <p className="text-lg font-semibold">Booking is ready.</p>
              <p className="mt-3 text-[#8A6E58]">Set your `VITE_BOOKING_URL` environment variable to a valid Calendly or SavvyCal scheduling page, then reload this page.</p>
            </div>
          )}

          <div className="grid gap-6 sm:grid-cols-2">
            <button
              type="button"
              onClick={handleOpenScheduler}
              className="inline-flex items-center justify-center rounded-full bg-[#C97357] px-8 py-4 text-base font-semibold text-white transition hover:bg-[#AF5F40]"
            >
              Open scheduler
            </button>
            <button
              type="button"
              onClick={handleConfirmBooking}
              className="inline-flex items-center justify-center rounded-full border border-[#2D2A26] bg-white px-8 py-4 text-base font-semibold text-[#2D2A26] transition hover:bg-[#F8F4EE]"
            >
              I’ve booked, continue
            </button>
          </div>

          <div className="mt-10 rounded-[2rem] border border-white/10 bg-[#171717] p-8 text-[#D0C5B7]">
            <h2 className="text-xl font-semibold text-white mb-4">Next step after booking</h2>
            <p>After you confirm your call, I’ll review your brief and send a follow-up with a scope estimate and next step plan.</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Schedule
