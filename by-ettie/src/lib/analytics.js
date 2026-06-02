const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID

const isBrowser = typeof window !== 'undefined'

const ensureGtag = () => {
  if (!isBrowser || !GA_ID) return
  if (window.gtag) return

  window.dataLayer = window.dataLayer || []
  function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag = window.gtag || gtag

  const scriptExists = document.querySelector(`script[src="https://www.googletagmanager.com/gtag/js?id=${GA_ID}"]`)
  if (!scriptExists) {
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
    document.head.appendChild(script)
  }

  window.gtag('js', new Date())
  window.gtag('config', GA_ID, { page_path: window.location.pathname })
}

export const initAnalytics = () => {
  if (!GA_ID || !isBrowser) return
  ensureGtag()
}

export const trackPageView = (path) => {
  if (!GA_ID || !isBrowser || !window.gtag) return
  window.gtag('config', GA_ID, { page_path: path })
}

export const trackEvent = ({ action, category, label, value }) => {
  if (!GA_ID || !isBrowser || !window.gtag) return
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  })
}
