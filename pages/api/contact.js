// For Pages Router: pages/api/submit-contact.js
// For App Router: app/api/submit-contact/route.js

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, message, subject } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // WordPress REST API credentials
    const WORDPRESS_URL = "https://server.pergolapro.co.nz";
    const WORDPRESS_USERNAME = "perfolaadmin";
    const WORDPRESS_APPLICATION_PASSWORD = "6txi-YEMe-XbHa-cjHq-6IXH-aCTp";


    const CF7_FORM_ID = "2194"; // Replace with your actual CF7 form ID

    // Simulate CF7 form submission
    const formData = new URLSearchParams();
    
    // Field names must match your CF7 form field names
    formData.append('your-name', name);
    formData.append('your-email', email);
    // formData.append('your-phone', phone);
    formData.append('your-subject', subject || '');
    formData.append('your-message', message);
    
    // CF7 required fields
    formData.append('_wpcf7', CF7_FORM_ID);
    formData.append('_wpcf7_version', '5.8');
    formData.append('_wpcf7_locale', 'en_US');
    formData.append('_wpcf7_unit_tag', `wpcf7-f${CF7_FORM_ID}-p2187-o1`);
    formData.append('_wpcf7_container_post', '2187');


    // Send to WordPress
    const response = await fetch(`${WORDPRESS_URL}/wp-json/contact-form-7/v1/contact-forms/${CF7_FORM_ID}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + Buffer.from(`${WORDPRESS_USERNAME}:${WORDPRESS_APPLICATION_PASSWORD}`).toString('base64'),
      },
       body: formData
    });

    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status}`);
    }

    const result = await response.json();

    console.log(result);
    
    return res.status(200).json({ 
      success: true, 
      message: 'Contact submitted successfully',
      postId: result.id 
    });

  } catch (error) {
    console.error('Error submitting contact:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Error submitting contact form' 
    });
  }
}


