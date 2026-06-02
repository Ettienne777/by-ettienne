/* eslint-disable no-undef */
import nodemailer from 'nodemailer'

const createTransporter = () => {
  if (process.env.SENDGRID_API_KEY) {
    return nodemailer.createTransport({
      service: 'SendGrid',
      auth: {
        user: 'apikey',
        pass: process.env.SENDGRID_API_KEY,
      },
    })
  }

  const host = process.env.SMTP_HOST
  const port = Number(process.env.SMTP_PORT || 587)
  const secure = process.env.SMTP_SECURE === 'true'
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS

  if (!host || !user || !pass) {
    throw new Error('Missing SMTP configuration for email delivery.')
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  })
}

const buildEmailBody = ({ name, email, company, website, projectType, budget, timeline, message }) => {
  return `
    <h2>New inquiry from ${name}</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
    ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
    ${website ? `<p><strong>Website:</strong> <a href="${website}" target="_blank" rel="noreferrer">${website}</a></p>` : ''}
    <p><strong>Project type:</strong> ${projectType || 'Not specified'}</p>
    <p><strong>Budget range:</strong> ${budget || 'Not specified'}</p>
    <p><strong>Timeline:</strong> ${timeline || 'Not specified'}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, '<br/>')}</p>
  `
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ ok: false, error: 'Method not allowed' })
  }

  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: 'Missing required fields' })
  }

  let transporter
  try {
    transporter = createTransporter()
  } catch (error) {
    console.error('Email transporter error:', error)
    return res.status(500).json({ ok: false, error: 'Email provider not configured' })
  }

  const receiver = process.env.RECEIVER_EMAIL || 'ettienne06@icloud.com'

  try {
    await transporter.sendMail({
      from: `${name} <${email}>`,
      to: receiver,
      replyTo: email,
      subject: `New agency inquiry from ${name}`,
      text: `${name} <${email}>\n\n${message}`,
      html: buildEmailBody(req.body),
    })

    return res.status(200).json({ ok: true })
  } catch (error) {
    console.error('Send mail error:', error)
    return res.status(500).json({ ok: false, error: 'Failed to send email' })
  }
}
