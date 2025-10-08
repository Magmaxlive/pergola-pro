import { useState } from "react";

const CTAFormsOne = () => {

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        message: '',
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [response, setResponse] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setResponse(null)

        // Client-side validation
        if (!formData.fullName || !formData.phone || !formData.email || !formData.message) {
            setResponse({
                success: false,
                message: 'Please fill in all required fields',
                errors: []
            })
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
                    message: '',
                })
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
            <div
                className="services-widget widget-bg p-4"
                style={{
                    backgroundImage: `url(/assets/img/services/sw_bg.jpg)`,
                    backgroundSize: 'cover',
                    color: '#fff',
                    maxWidth: "600px"
                }} >
                <h4 className="widget-title mb-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                    Get a Free Quote
                </h4>

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


                <form onSubmit={handleSubmit} className="sidebar-form">
                    <div className="form-grp mb-3">
                        <input
                            id="fullName"
                            type="text"
                            placeholder="Your Name"
                            className="form-control"
                            style={{
                                padding: '10px',
                                borderRadius: '5px',
                                border: 'none',
                                width: '100%'
                            }}
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting}
                        />
                    </div>
                    <div className="form-grp mb-3">
                        <input
                            id="email"
                            type="email"
                            placeholder="Your Email Address"
                            className="form-control"
                            style={{
                                padding: '10px',
                                borderRadius: '5px',
                                border: 'none',
                                width: '100%'
                            }}
                            value={formData.email}
                            onChange={handleChange}
                            disabled={isSubmitting}
                        />
                    </div>

                    <div className="form-grp mb-3">
                        <input
                            id="phone"
                            type="number"
                            placeholder="Your Phone Number"
                            className="form-control"
                            style={{
                                padding: '10px',
                                borderRadius: '5px',
                                border: 'none',
                                width: '100%'
                            }}
                            value={formData.phone}
                            onChange={handleChange}
                            disabled={isSubmitting}
                        />
                    </div>

                    <div className="form-grp mb-3">
                        <textarea
                            id="message"
                            placeholder="Your Message"
                            className="form-control"
                            style={{
                                padding: '10px',
                                borderRadius: '5px',
                                border: 'none',
                                minHeight: '100px',
                                width: '100%'
                            }}
                            value={formData.message}
                            onChange={handleChange}
                            disabled={isSubmitting}
                        />
                    </div>
                    <button
                    onClick={handleSubmit}
                        type="submit"
                        className="btn w-100"
                        style={{
                            padding: '10px',
                            background: '#FE5D14',
                            color: '#fff',
                            borderRadius: '5px',
                            border: 'none',
                            transition: 'background 0.3s'
                        }}
                        disabled={isSubmitting}
                        onMouseOver={(e) => e.currentTarget.style.background = '#0056b3'}
                        onMouseOut={(e) => e.currentTarget.style.background = '#FE5D14'} >
                        {isSubmitting ? 'Sending Message...' : 'Contact Us'}
                    </button>
                </form>
            </div>
        </>
    )
}

export default CTAFormsOne;