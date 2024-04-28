"use client";
import Link from "next/link";
import React, { useState } from "react";
import "./globals.css";
import Footer from "./components/Post/Footer";
import { inter } from "./ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  return (
    <html>
      <head>
        <title>Samantha Callicutt</title>
        <meta
          name="description"
          content="Samantha Callicutt's personal website"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} antialiased`}>
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
                  <Link href="/portfolio" className="nav-links about">
                    Portfolio
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
        <Footer />
      </body>
    </html>
  );
}
