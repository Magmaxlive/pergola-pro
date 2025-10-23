import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Sidebar({ handleToggled }) {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About us" },
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
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSubmenuClick = () => {
    handleToggled(false);
    setDropdownOpen(false);
  };

  const isActive = (path) => {
    return router.pathname === path || 
           (path === "/services" && menuItems.find(item => item.dropdown)?.submenu?.some(subItem => router.pathname === subItem.path));
  };

  return (
    <>
      <ul className="list-unstyled">
        {menuItems.map((item) => (
          <li
            key={item.path}
            className={`mb-1 ${isActive(item.path) ? "active" : ""}`}  >
            {item.dropdown ? (
              <div className="dropdown">
                <button
                  className={`btn w-100 text-start d-flex justify-content-between align-items-center ${
                    isActive(item.path) ? "btn-primary text-white" : "btn-light"
                  }`}
                  type="button"
                  onClick={toggleDropdown}
                  aria-expanded={dropdownOpen} >
                  {item.label}
                  {/* <span className={`dropdown-toggle ${dropdownOpen ? "show" : ""}`}></span> */}
                </button>
                
                <div className={`dropdown-menu ${dropdownOpen ? "show d-block" : ""} w-100`}>
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.path}
                      href={subItem.path}
                      className={`dropdown-item ${
                        router.pathname === subItem.path ? "active bg-warning text-dark" : ""
                      }`}
                      onClick={handleSubmenuClick}  >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                href={item.path}
                className={`btn w-100 text-start ${
                  isActive(item.path) ? "btn-primary text-white" : "btn-light"
                }`}
                onClick={() => handleToggled(false)}  >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/* Optional: Custom styles to enhance Bootstrap */}
      <style jsx global>{`
        .btn {
          padding: 12px 16px;
          font-size: 14px;
          border: 1px solid #dee2e6;
          transition: all 0.3s ease;
        }
        
        .btn-light {
          background-color: #f8f9fa;
          color: #333;
        }
        
        .btn-light:hover {
          background-color: #e9ecef;
          color: #495057;
        }
        
        .btn-primary {
          background-color: #FE5D14 !important;
          border-color: #FE5D14 !important;
          font-weight: 600;
        }
        
        .btn-primary:hover {
          background-color: #e55312 !important;
          border-color: #e55312 !important;
        }
        
        .dropdown-menu {
          border: 1px solid #dee2e6;
          border-top: none;
          border-radius: 0 0 0.375rem 0.375rem;
          box-shadow: none;
        }
        
        .dropdown-item {
          padding: 10px 16px;
          font-size: 13px;
          border-left: 3px solid transparent;
          transition: all 0.2s ease;
        }
        
        .dropdown-item:hover {
          background-color: #e9ecef;
          border-left-color: #FE5D14;
        }
        
        .dropdown-item.active {
          background-color: #fff3cd;
          color: #856404;
          border-left-color: #FE5D14;
          font-weight: 500;
        }
        
       
        
     
        
        .list-unstyled {
          margin: 0;
          padding: 0;
        }
        
        .mb-1 {
          margin-bottom: 0.5rem !important;
        }
      `}</style>
    </>
  );
}