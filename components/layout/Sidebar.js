import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Sidebar() {
  const router = useRouter();

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About us" },
    { path: "/services", label: "Services" },
    { path: "/gallery", label: "Gallery" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      <ul className="navigation">
        {menuItems.map((item) => (
          <li
            key={item.path}
            className={`menu-item ${
              router.pathname === item.path ? "active" : ""
            }`}
          >
            <Link 
              href={item.path} 
              className={`nav-link ${
                router.pathname === item.path ? "active-link" : ""
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <style jsx global>{`
        .navigation {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .menu-item {
          margin: 0;
        }

        .nav-link {
          display: block;
          padding: 12px 16px;
          font-size: 14px;
          text-decoration: none;
          color: #333;
          transition: all 0.3s ease;
          border: 1px solid transparent;
          background-color: #f8f9fa;
        }

        .nav-link:hover {
          background-color: #e9ecef;
          color: #495057;
        }

        .active-link {
          background-color: #FE5D14;
          color: white;
          border-color: #0056b3;
          font-weight: 600;
          box-shadow: 0 2px 4px rgba(0, 123, 255, 0.3);
        }

        .active-link:hover {
          background-color: #0056b3;
          color: white;
        }
      `}</style>
    </>
  );
}