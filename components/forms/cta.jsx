const CTAFormsOne = () => {

    return (
        <>
            <div
                className="services-widget widget-bg p-4"
                style={{
                    backgroundImage: `url(/assets/img/services/sw_bg.jpg)`,
                    backgroundSize: 'cover',
                    color: '#fff'
                }} >
                <h4 className="widget-title mb-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                    Get a Free Quote
                </h4>
                <form action="#" className="sidebar-form">
                    <div className="form-grp mb-3">
                        <input
                            id="name"
                            type="text"
                            placeholder="Your Name"
                            className="form-control"
                            style={{
                                padding: '10px',
                                borderRadius: '5px',
                                border: 'none',
                                width: '100%'
                            }}
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
                        />
                    </div>
                    <button
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
                        onMouseOver={(e) => e.currentTarget.style.background = '#0056b3'}
                        onMouseOut={(e) => e.currentTarget.style.background = '#FE5D14'} >
                        Contact Us
                    </button>
                </form>
            </div>
        </>
    )
}

export default CTAFormsOne;