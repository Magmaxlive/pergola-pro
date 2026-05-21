import { google } from 'googleapis'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { name, email, phone, service, location } = req.body

    if (!name || !email || !phone || !location) {
      return res.status(400).json({ message: 'Missing required fields' })
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })

    const sheets = google.sheets({ version: 'v4', auth })

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Sheet1!A:F',
      valueInputOption: 'RAW',
      requestBody: {
        values: [[
          new Date().toLocaleString('en-NZ', { timeZone: 'Pacific/Auckland' }),
          email,
          name,
          phone ,
          service || 'Not provided',
          location,
        ]],
      },
    })

    return res.status(200).json({ success: true })

  } catch (error) {
    console.error('Error writing to sheet:', error)
    return res.status(500).json({ success: false, message: 'Error submitting form' })
  }
}
