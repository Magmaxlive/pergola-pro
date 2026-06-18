import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Sidebar from "./Sidebar";
import { usePathname } from "next/navigation"


export default function Header({ headerCls, headerTop }) {
  const [isActive, setIsActive] = useState({ status: false, key: "" })
    const [showModal, setShowModal] = useState(false)
    const [formData, setFormData] = useState({ name: '', email: '', phone: '' , service:'', location:''})
    const [submitting, setSubmitting] = useState(false)
    const [error, setError] = useState('')

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({ status: false })
        } else {
            setIsActive({ status: true, key })
        }
    }

    const openModal = () => {
        setError('')
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
        setFormData({ name: '', email: '', phone: '', location: '', service: '' })
        setError('')
    }

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setSubmitting(true)
        try {
            const res = await fetch('/api/catalogue', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    service: formData.service,
                    location: formData.location,
                }),
            })
            if (!res.ok) throw new Error('Submission failed')
            closeModal()
            const link = document.createElement('a')
            link.href = '/assets/catalogue.pdf'
            link.download = 'Pergola-Pro-Catalogue.pdf'
            link.click()
        } catch {
            setError('Something went wrong. Please try again.')
        } finally {
            setSubmitting(false)
        }
    }

  const [scroll, setScroll] = useState(0);
  const [isToggled, setToggled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [mobileServicesDropdown, setMobileServicesDropdown] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleToggled = () => {
    setToggled(!isToggled);
    !isToggled
      ? document.body.classList.add("mobile-menu-visible")
      : document.body.classList.remove("mobile-menu-visible");
  };

  const toggleServicesDropdown = () => {
    setServicesDropdown(!servicesDropdown);
  };

  const toggleMobileServicesDropdown = () => {
    setMobileServicesDropdown(!mobileServicesDropdown);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, [scroll]);

  // Define menu items with their paths
  const menuItems = [
    { path: "/", label: "Home" },
    { 
      path: "/services", 
      label: "Services",
      dropdown: true,
      submenu: [
        { path: "/pergolas", label: "Pergolas" },
        { path: "/roller-blinds", label: "Roller Blinds" },
        { path: "/carports", label: "Carports" },
        { path: "/louvre-roof-systems", label: "Louvre Roof Systems" },
        { path: "/canopies", label: "Canopies" },
        { path: "/fencing-decking", label: "Fencing & Decking" },
      ]
    },
    { path: "/gallery", label: "Gallery" },
    { path: "/about", label: "About us" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
    
  ];

  return (
    <>
      {headerTop && (
        <div className="header-top-wrap">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-9">
                <div className="header-top-left">
                  <ul className="list-wrap">
                    <li>Pergola Pro</li>
                    <li>
                      <i className="fas fa-phone-alt" />
                      <Link href="tel:0123456789">+88 ( 5548 ) 6548</Link>
                    </li>
                    <li>
                      <i className="fas fa-envelope" />
                      <Link href="mailto:infoyour@gmail.com">
                        infoyour@gmail.com
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-3">
                <div className="header-top-right">
                  <div className="header-lang">
                    <div className="dropdown">
                      <button
                        className="dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false" >
                        <img src="assets/img/icon/united-states.jpg" alt="" />{" "}
                        English
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1" >
                        <Link className="dropdown-item" href="/">
                          <img src="assets/img/icon/india.jpg" alt="" /> India
                        </Link>
                        <Link className="dropdown-item" href="/">
                          <img src="assets/img/icon/bangladesh.jpg" alt="" />{" "}
                          Bangla
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="header-social">
                    <ul className="list-wrap">
                      <li>
                        <Link href="#">
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-youtube" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <header>
        <div
          id="sticky-header"
          className={`menu-area ${scroll ? "sticky-menu" : ""} ${headerCls ? headerCls : ""}`}
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="mobile-nav-toggler" onClick={handleToggled}>
                  <i className="fas fa-bars" />
                </div>
                <div className="menu-wrap">
                  <nav className="menu-nav">
                    <div className="logo different-logo">
                      <Link href="/">
                        <img
                          src="/assets/img/logo/logo_02.png"
                          alt="Pergola Pro Logo"
                          style={{ width: "120px" }}
                        />
                      </Link>
                    </div>
                    <div className="navbar-wrap main-menu d-none d-lg-flex">
                      <ul className="navigation">
                        {menuItems.map((item) => (
                          <li
                            key={item.path}
                            className={`menu-item ${router.pathname === item.path ? "active" : ""} ${item.dropdown ? 'menu-item-has-children' : ''}`}
                            onMouseEnter={() => item.dropdown && setServicesDropdown(true)}
                            onMouseLeave={() => item.dropdown && setServicesDropdown(false)} >
                            <Link href={item.path} style={{ fontSize: "14px" }}>
                              {item.label}
                              {item.dropdown}
                            </Link>
                            {item.dropdown && (
                              <ul className={`sub-menu ${servicesDropdown ? 'show' : ''}`}>
                                {item.submenu.map((subItem) => (
                                  <li key={subItem.path}>
                                    <Link href={subItem.path}>{subItem.label}</Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="header-action d-none d-md-block">
                      <ul className="list-wrap">
                        {pathname !== "/catalogue/" && (
                          <li className="header-btn">
                            <div onClick={openModal} className="btn" style={{ fontSize: "14px" }}>
                              Download Catalogue 
                            </div>
                          </li>
                        )}
                        
                      </ul>
                    </div>
                  </nav>
                </div>
                
                  {/* Mobile Menu  */}
                <div className="mobile-menu">
                  <nav className="menu-box">
                    <div className="close-btn" onClick={handleToggled}>
                      <i className="fas fa-times" />
                    </div>
                    <div className="nav-logo">
                      <Link href="/">
                        <img src="/assets/img/logo/logo_02.png" alt="Logo" />
                      </Link>
                    </div>
                    <div className="menu-outer">
                      <Sidebar handleToggled={handleToggled} />
                    </div>
                    <div className="social-links">
                      <ul className="clearfix list-wrap">
                        <li><a href="https://www.facebook.com/Pergolapronz?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f" /></a></li>
                        <li><a href="https://www.instagram.com/pergolapronz/?igsh=ajFxemh2OXphNDh6#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" /></a></li>
                        <li><a href="https://www.linkedin.com/company/pergola-pro/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in" /></a></li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="menu-backdrop" />
                {/* End Mobile Menu */}
              </div>
            </div>
          </div>
        </div>
      </header>

       {showModal && (
                <div
                    onClick={closeModal}
                    style={{position:'fixed',inset:0,backgroundColor:'rgba(0,0,0,0.55)',zIndex:1050,display:'flex',alignItems:'center',justifyContent:'center',padding:'1rem'}}
                >
                    <div
                        onClick={e => e.stopPropagation()}
                        style={{backgroundColor:'#fff',borderRadius:'12px',padding:'2rem',width:'100%',maxWidth:'460px',position:'relative'}}
                    >
                        <button
                            onClick={closeModal}
                            style={{position:'absolute',top:'1rem',right:'1rem',background:'none',border:'none',fontSize:'1.4rem',lineHeight:1,cursor:'pointer',color:'#666'}}
                            aria-label="Close"
                        >
                            &times;
                        </button>

                        <h4 className="fw-bold mb-1">Get the Free Catalogue</h4>
                        <p className="text-muted mb-4" style={{fontSize:'0.9rem'}}>20 pages. Straight to your inbox. Enter your details and we'll send it right away.</p>

                        <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                            <div>
                                <label className="form-label fw-bold">Name <span style={{color:'#fe5d14'}}>*</span></label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    placeholder="Your full name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label className="form-label fw-bold">Email <span style={{color:'#fe5d14'}}>*</span></label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="you@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label className="form-label fw-bold">Phone <span style={{color:'#fe5d14'}}>*</span></label>
                                <input
                                    type="tel"
                                    name="phone"
                                    className="form-control"
                                    placeholder="021 000 0000"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div>
                                <label className="form-label fw-bold">Service <span>(Optional)</span></label>
                                <input
                                    type="text"
                                    name="service"
                                    className="form-control"
                                    placeholder="Describe the service you're interested in"
                                    value={formData.service}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label className="form-label fw-bold">Location <span style={{color:'#fe5d14'}}>*</span></label>
                                <input
                                    type="text"
                                    name="location"
                                    className="form-control"
                                    placeholder="Enter your location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            
                            {error && <p style={{color:'red',fontSize:'0.875rem',margin:0}}>{error}</p>}

                            <button
                                type="submit"
                                disabled={submitting}
                                className="fw-bold text-white border-0 rounded-3 py-2"
                                style={{backgroundColor: submitting ? '#ccc' : '#fe5d14', cursor: submitting ? 'not-allowed' : 'pointer'}}
                            >
                                {submitting ? 'Sending...' : 'Download Now'}
                            </button>
                        </form>
                    </div>
                </div>
            )}

      <style jsx>{`
        .menu-item-has-children {
          position: relative;
        }
        
        .sub-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background: #fff;
          min-width: 220px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          border-radius: 4px;
          padding: 10px 0;
          opacity: 0;
          visibility: hidden;
          transform: translateY(10px);
          transition: all 0.3s ease;
          z-index: 1000;
        }
        
        .sub-menu.show {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        
        .sub-menu li {
          margin: 0;
        }
        
        .sub-menu a {
          display: block;
          padding: 8px 20px;
          color: #333;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 14px;
        }
        
        .sub-menu a:hover {
          background: #f8f9fa;
          color: #007bff;
        }
        
        /* Mobile sub-menu styles */
        .mobile-navigation .sub-menu {
          position: static;
          background: transparent;
          box-shadow: none;
          padding-left: 20px;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }
        
        .mobile-navigation .sub-menu.show {
          max-height: 500px;
        }
        
        .mobile-navigation .sub-menu a {
          padding: 8px 0;
          color: #666;
        }
        
        .menu-link {
          padding: 10px 0;
          color: #333;
          text-decoration: none;
        }
      `}</style>
    </>
  );
}