import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Sidebar from "./Sidebar";

export default function Header({ headerCls, headerTop }) {
  const [scroll, setScroll] = useState(0);
  const [isToggled, setToggled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [mobileServicesDropdown, setMobileServicesDropdown] = useState(false);
  const router = useRouter();

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
                        aria-expanded="false"
                      >
                        <img src="assets/img/icon/united-states.jpg" alt="" />{" "}
                        English
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
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
                          alt="Logo"
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
                            onMouseLeave={() => item.dropdown && setServicesDropdown(false)}
                          >
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
                        <li className="header-btn">
                          <Link href="/contact" className="btn" style={{ fontSize: "14px" }}>
                            Get a Quote
                          </Link>
                        </li>
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
                      <Sidebar />
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