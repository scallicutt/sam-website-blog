"use client";
import Link from "next/link";
import React, { useState } from "react";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  // const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  // window.addEventListener("resize", showButton);
  return (
    <html>
      <head>
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <link rel="stylesheet" href="https://use.typekit.net/iod5vog.css" />
        <script
          src="https://kit.fontawesome.com/611b21c2eb.js"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        <main>
          <nav className="navbar">
            <div className="navbar-container">
              <div className="menu-icon">
                <i className={click ? "fas fa-times" : "fas fa-bars"} />
              </div>
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                  <Link href="/" className="nav-links home">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/about" className="nav-links about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/blog" className="nav-links writing">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/gallery" className="nav-links gallery">
                    Gallery
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/contact" className="nav-links contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
