import { useState } from "react";

export default function Appointment3() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        address: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [response, setResponse] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setResponse(null);

        // Client-side validation
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
            setResponse({
                success: false,
                message: 'Please fill in all required fields',
                errors: []
            });
            setIsSubmitting(false);
            return;
        }

        try {
            const res = await fetch('/api/zap', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: `${formData.firstName} ${formData.lastName}`.trim(),
                    email: formData.email,
                    phone: formData.phone,
                    address: formData.address,
                    message: formData.message,
                    location: formData.address
                }),
            });

            const data = await res.json();

            setResponse({
                success: data.success,
                message: data.message,
                errors: data.errors || []
            });

            if (data.success) {
                // Reset form on success
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: '',
                    address: ''
                });
            }
        } catch (error) {
            setResponse({
                success: false,
                message: 'Network error. Please try again.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }));
    };

    return (
        <>
            <section className="appointment-area pt-115">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title white-title mb-60">
                                <span className="sub-title">The Best Outdoor Solutions</span>
                                <h2 className="title">Book Your Appointment</h2>
                            </div>
                        </div>
                    </div>
                    <div className="appointment-inner" style={{ backgroundImage: 'url("/assets/img/bg/appointment_bg.jpg")' }}>
                        <div className="row">
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

                            <div className="col-xl-7">
                                <div className="appointment-form">
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <input
                                                        id="firstName" // Changed from id="name"
                                                        type="text"
                                                        placeholder="First Name"
                                                        value={formData.firstName}
                                                        onChange={handleChange}
                                                        required
                                                        disabled={isSubmitting}
                                                    />
                                                    <label htmlFor="firstName"><i className="fas fa-user" /></label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <input
                                                        id="lastName"
                                                        type="text"
                                                        placeholder="Last Name"
                                                        value={formData.lastName}
                                                        onChange={handleChange}
                                                        required
                                                        disabled={isSubmitting}
                                                    />
                                                    <label htmlFor="lastName"><i className="fas fa-user" /></label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <input
                                                        id="phone"
                                                        type="text"
                                                        placeholder="Phone Number"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        required
                                                        disabled={isSubmitting}
                                                    />
                                                    <label htmlFor="phone"><i className="fas fa-phone-alt" /></label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <input
                                                        id="email"
                                                        type="text"
                                                        placeholder="Email Address"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        required
                                                        disabled={isSubmitting}
                                                    />
                                                    <label htmlFor="email"><i className="fas fa-envelope" /></label>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-grp">
                                                    <input
                                                        id="address" // Changed from id="location"
                                                        type="text"
                                                        placeholder="Address"
                                                        value={formData.address}
                                                        onChange={handleChange}
                                                        disabled={isSubmitting}
                                                    />
                                                    <label htmlFor="address"><i className="fas fa-map-marker-alt" /></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-grp">
                                            <textarea
                                                id="message" // Added id="message"
                                                name="message"
                                                placeholder="Message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                disabled={isSubmitting}
                                            />
                                        </div>
                                        <button type="submit" className="btn" disabled={isSubmitting}>
                                            {isSubmitting ? 'Sending Message...' : 'Send Message'}
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-xl-5">
                                <div className="appointment-img">
                                    <img src="/assets/img/images/appointment_img.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}