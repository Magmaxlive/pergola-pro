import { useState } from "react"

const ContactMain = ({ onSuccess }) => {

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [response, setResponse] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setResponse(null)

        // Client-side validation
        if (!formData.fullName || !formData.email || !formData.message) {
            setResponse({
                success: false,
                message: 'Please fill in all required fields',
                errors: []
            });
            setIsSubmitting(false)
            return
        }

        try {
            const res = await fetch('/api/zap', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: `${formData.fullName}`,
                    email: formData.email,
                    phone: formData.phone,
                    subject: formData.subject,
                    message: formData.message,
                }),
            })

            const data = await res.json()

            setResponse({
                success: data.success,
                message: data.message,
                errors: data.errors || []
            })

            if (data.success) {
                // Reset form on success
                setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: '',
                });

                setTimeout(() => {
                    onSuccess();
                }, 1500);
            }
        } catch (error) {
            setResponse({
                success: false,
                message: 'Network error. Please try again.'
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
    }

    return (
        <>

            <div className="contact-form-wrap" data-background="/assets/img/images/contact_form_bg.jpg">
                <h2 className="title">Contact With Us</h2>
                <p>Send us a message and we'll respond as soon as possible</p>

                {/* Response Messages */}
                {response && (
                    <div className={`alert ${response.success ? 'alert-success' : 'alert-danger'} mb-4`}>
                        {response.message}
                        {response.errors && response.errors.length > 0 && (
                            <ul className="mt-2 mb-0">
                                {response.errors.map((error, index) => (
                                    <li key={index}>{error}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-grp">
                                <input
                                    id="fullName"
                                    type="text"
                                    placeholder="Full Name*"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-grp">
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Email Address*"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-grp">
                                <input
                                    id="phone"
                                    type="text"
                                    placeholder="Phone Number*"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-grp">
                        <input
                            id="subject"
                            type="text"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            disabled={isSubmitting}
                        />
                    </div>
                    <div className="form-grp">
                        <textarea
                            id="message"
                            placeholder="Your Message here*"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting}
                            rows="5"
                        />
                    </div>
                    <button
                        className="btn"
                        type="submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Sending Message...' : 'Send Message'}
                    </button>
                </form>
            </div>
        </>
    )
}

export default ContactMain;