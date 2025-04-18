"use client";
import React from "react";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { finoSans, obviouslyRegular, obviouslyLight } from "@/components/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={`h-full ${finoSans.variable} ${obviouslyRegular.variable} ${obviouslyLight.variable}`}
    >
      <head>
        <title>Samantha Callicutt</title>
        <meta
          name="description"
          content="Samantha Callicutt's personal website"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${obviouslyLight.className} antialiased min-h-full flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow bg-white text-black">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
