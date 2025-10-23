import { NextResponse } from 'next/server';

// Simple rate limiting
const rateLimitMap = new Map();

function checkRateLimit(ip) {
  const now = Date.now();
  const windowStart = now - 15 * 60 * 1000;
  const requests = rateLimitMap.get(ip) || [];
  
  const recentRequests = requests.filter(time => time > windowStart);
  
  if (recentRequests.length >= 5) {
    return false;
  }
  
  recentRequests.push(now);
  rateLimitMap.set(ip, recentRequests);
  return true;
}

export async function POST(request) {
  const ip = request.headers.get('x-forwarded-for') || 'unknown';
  
  // Rate limiting
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      {
        success: false,
        message: 'Too many requests. Please try again later.'
      },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const { name, email, phone, subject, message, honeypot } = body;

    // Honeypot spam detection
    if (honeypot) {
      return NextResponse.json({
        success: true,
        message: 'Thank you for your submission!'
      });
    }

    // Validation
    const errors = [];
    if (!name?.trim()) errors.push('Name is required');
    if (!email?.trim()) errors.push('Email is required');
    if (!phone?.trim()) errors.push('Phone number is required');
    if (!message?.trim()) errors.push('Message is required');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) errors.push('Invalid email format');

    if (errors.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please fix the validation errors',
          errors: errors
        },
        { status: 400 }
      );
    }

    // WordPress submission
    const WORDPRESS_URL = "https://server.pergolapro.co.nz";
    const WORDPRESS_USERNAME = "perfolaadmin";
    const WORDPRESS_APPLICATION_PASSWORD = "6txi-YEMe-XbHa-cjHq-6IXH-aCTp";

    if (!WORDPRESS_URL || !WORDPRESS_USERNAME || !WORDPRESS_APPLICATION_PASSWORD) {
      return NextResponse.json(
        {
          success: false,
          message: 'Server configuration error'
        },
        { status: 500 }
      );
    }

    const postData = {
      title: subject || `Contact from ${name}`,
      content: `
        <div class="contact-submission">
          <h3>New Contact Form Submission</h3>
          <table>
            <tr><td><strong>Name:</strong></td><td>${name}</td></tr>
            <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
            <tr><td><strong>Phone:</strong></td><td>${phone}</td></tr>
            <tr><td><strong>Subject:</strong></td><td>${subject || 'No subject'}</td></tr>
            <tr><td colspan="2"><strong>Message:</strong></td></tr>
            <tr><td colspan="2">${message.replace(/\n/g, '<br>')}</td></tr>
            <tr><td colspan="2"><em>Submitted on: ${new Date().toLocaleString()} from IP: ${ip}</em></td></tr>
          </table>
        </div>
      `,
      status: 'publish', // Change to 'draft' if you want to review first
      meta: {
        contact_email: email,
        contact_phone: phone,
        submission_ip: ip
      }
    };

    const wpResponse = await fetch(`${WORDPRESS_URL}/wp-json/wp/v2/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + Buffer.from(`${WORDPRESS_USERNAME}:${WORDPRESS_APPLICATION_PASSWORD}`).toString('base64'),
      },
      body: JSON.stringify(postData),
    });

    if (!wpResponse.ok) {
      throw new Error('WordPress API error');
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you for your message! We will get back to you soon.'
    });

  } catch (error) {
    console.error('Contact submission error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to submit your message. Please try again.'
      },
      { status: 500 }
    );
  }
}