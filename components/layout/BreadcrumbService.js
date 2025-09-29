import Link from "next/link";

export default function Breadcrumb({ breadcrumbTitle, pageTitle, imageURL }) {
    return (
        <>
            <section 
                className="breadcrumb-area breadcrumb-bg position-relative" 
                style={{ 
                    backgroundImage: `url(${imageURL})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '400px',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '60px 0',
                    objectFit: "cover"
                }}  >
                <div 
                    className="breadcrumb-shape" 
                    style={{ 
                        backgroundImage: `url(/assets/img/images/breadcrumb_shape.png)`,
                        opacity: 0.3,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundSize: 'cover'
                    }} 
                />
                <div className="container position-relative">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
                            <div className="breadcrumb-content text-center text-lg-start">
                                <h2 className="title mb-3" style={{ color: '#fff', fontSize: '2.5rem', fontWeight: '700' }}>
                                    {breadcrumbTitle}
                                </h2>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb mb-0 d-flex justify-content-center justify-content-lg-start">
                                        <li className="breadcrumb-item">
                                            <Link href="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.1rem' }}>
                                                Home
                                            </Link>
                                        </li>
                                        <li 
                                            className="breadcrumb-item active" 
                                            aria-current="page" 
                                            style={{ color: '#ddd', fontSize: '1.1rem' }}  >
                                            {pageTitle}
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <aside className=" p-4">
                                
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
                                            className="btn btn-two w-100"
                                            style={{ 
                                                padding: '10px', 
                                                background: '#FE5D14', 
                                                color: '#fff', 
                                                borderRadius: '5px',
                                                border: 'none',
                                                transition: 'background 0.3s'
                                            }}
                                            onMouseOver={(e) => e.currentTarget.style.background = '#0056b3'}
                                            onMouseOut={(e) => e.currentTarget.style.background = '#007bff'} >
                                            Contact Us
                                        </button>
                                    </form>
                                </div>
                               
                            </aside>
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    @media (max-width: 991px) {
                        .breadcrumb-area {
                            min-height: auto !important;
                            padding: 40px 0 !important;
                        }
                        .breadcrumb-content {
                            text-align: center !important;
                        }
                        .breadcrumb-content h2 {
                            font-size: 2rem !important;
                        }
                        .services-sidebar {
                            margin-top: 30px;
                            padding: 20px !important;
                        }
                        .form-control {
                            font-size: 0.9rem !important;
                        }
                        .btn-two {
                            font-size: 0.9rem !important;
                            padding: 8px !important;
                        }
                    }
                    @media (max-width: 576px) {
                        .breadcrumb-content h2 {
                            font-size: 1.5rem !important;
                        }
                        .breadcrumb-item {
                            font-size: 0.9rem !important;
                        }
                        .services-sidebar {
                            padding: 15px !important;
                        }
                        .widget-title {
                            font-size: 1.2rem !important;
                        }
                    }
                `}</style>
            </section>
        </>
    );
}