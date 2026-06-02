/* eslint-disable */
import express from 'express'
import nodemailer from 'nodemailer'

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 5176

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body
  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: 'Missing required fields' })
  }

  // Configure transporter using environment variables
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  const receiver = process.env.RECEIVER_EMAIL || 'ettienne06@icloud.com'

  try {
    await transporter.sendMail({
      from: `${name} <${email}>`,
      to: receiver,
      subject: `New contact from ${name}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message}</p>`,
    })

    res.json({ ok: true })
  } catch (err) {
    console.error('Send mail error', err)
    res.status(500).json({ ok: false, error: 'Failed to send' })
  }
})

app.listen(PORT, () => {
  console.log('Contact server listening on port', PORT)
})
