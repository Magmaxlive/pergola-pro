import Link from "next/link";
import { useRouter } from "next/router"; // Import useRouter
import { useState } from "react";

export default function Sidebar() {
  const router = useRouter(); // Initialize useRouter

  // Define menu items with their paths
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
            <Link href={item.path} style={{ fontSize: "14px" }}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}