import Link from "next/link"
import { useState } from "react"

export default function Sidebar() {
   
    return (
        <>

            <ul className="navigation">
                <li className="active menu-item"  ><Link href="/" style={{ fontSize: "14px" }}>Home</Link>
                </li>
                <li ><Link href="/about" style={{ fontSize: "14px" }}>About us</Link></li>
                <li className="menu-item"><Link href="/services" style={{ fontSize: "14px" }}>Services</Link>
                </li>
                <li className="menu-item"><Link href="/gallery" style={{ fontSize: "14px" }}>Gallery</Link></li>
                <li className="menu-item"><Link href="/blog" style={{ fontSize: "14px" }}>Blog</Link>
                </li>
                <li><Link href="/contact" style={{ fontSize: "14px" }}>Contact</Link></li>
            </ul>

        </>
    )
}
