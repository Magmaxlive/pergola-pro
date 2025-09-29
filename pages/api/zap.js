
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { name, email, phone, subject, message, location, service } = req.body

    // Basic validation
    const errors = []
    if (!name || name.trim() === '') errors.push('Name is required')
    if (!email || email.trim() === '') errors.push('Email is required')
    if (!message || message.trim() === '') errors.push('Message is required')

    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors
      })
    }

    // Send data to Zapier Webhook
    const zapierWebhookUrl = "https://hooks.zapier.com/hooks/catch/18518563/u1nng6j/"

    if (!zapierWebhookUrl) {
      console.error('Zapier webhook URL not configured')
      return res.status(500).json({
        success: false,
        message: 'Server configuration error'
      })
    }

    const zapierPayload = {
      name: name,
      email: email,
      phone: phone || 'Not provided',
      subject: subject || 'No subject',
      message: message,
      timestamp: new Date(),
      source: 'PergolaPro Website',
      location: location || 'Not provided',
    }

    const zapierResponse = await fetch(zapierWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(zapierPayload),
    })

    if (!zapierResponse.ok) {
      throw new Error(`Zapier webhook failed: ${zapierResponse.status}`)
    }

    res.status(200).json({
      success: true,
      message: 'Message sent successfully! We will get back to you soon.'
    })

  } catch (error) {
    console.error('Contact form error:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.'
    })
  }
}