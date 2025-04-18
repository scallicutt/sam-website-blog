"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Section = "documentary" | "gallery" | "text";

export default function CapstonePage() {
  const [activeSection, setActiveSection] = useState<Section>("documentary");

  const galleryImages = [
    "/assets/capstone/gallery1.jpg",
    "/assets/capstone/gallery2.jpg",
    "/assets/capstone/gallery3.jpg",
    "/assets/capstone/gallery4.jpg",
    "/assets/capstone/gallery5.jpg",
    "/assets/capstone/gallery6.jpg",
    "/assets/capstone/gallery7.jpg",
    "/assets/capstone/gallery8.jpg",
    "/assets/capstone/gallery9.jpg",
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section with Navy Background */}
      <div className="bg-[#0A1931] py-16">
        <h1 className="text-white text-7xl font-fino-sans text-center tracking-widest">
          CAPSTONE
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center gap-16 text-xl">
          <button
            onClick={() => setActiveSection("documentary")}
            className={`font-fino-sans transition-all duration-300 ${
              activeSection === "documentary"
                ? "text-[#0A1931] underline underline-offset-4"
                : "text-gray-500 hover:text-[#0A1931]"
            }`}
          >
            Documentary
          </button>
          <button
            onClick={() => setActiveSection("gallery")}
            className={`font-fino-sans transition-all duration-300 ${
              activeSection === "gallery"
                ? "text-[#0A1931] underline underline-offset-4"
                : "text-gray-500 hover:text-[#0A1931]"
            }`}
          >
            Gallery
          </button>
          <button
            onClick={() => setActiveSection("text")}
            className={`font-fino-sans transition-all duration-300 ${
              activeSection === "text"
                ? "text-[#0A1931] underline underline-offset-4"
                : "text-gray-500 hover:text-[#0A1931]"
            }`}
          >
            Text
          </button>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-4 pb-16">
        {/* Documentary Section */}
        <div
          className={`transition-opacity duration-500 ${
            activeSection === "documentary" ? "opacity-100" : "opacity-0 hidden"
          }`}
        >
          <div className="aspect-video w-full max-w-5xl mx-auto">
            <video
              controls
              className="w-full h-full"
              poster="/assets/capstone/documentary-poster.jpg"
            >
              <source src="/assets/capstone/documentary.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Gallery Section */}
        <div
          className={`transition-opacity duration-500 ${
            activeSection === "gallery" ? "opacity-100" : "opacity-0 hidden"
          }`}
        >
          <div className="grid grid-cols-3 gap-4 max-w-5xl mx-auto">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative aspect-square">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Text Section */}
        <div
          className={`transition-opacity duration-500 ${
            activeSection === "text" ? "opacity-100" : "opacity-0 hidden"
          }`}
        >
          <div className="prose prose-lg mx-auto font-obviously-light">
            <h2 className="text-4xl font-fino-sans text-center mb-8">
              Project Description
            </h2>
            <p>
              [Your capstone project text content goes here. This section can
              include your research methodology, findings, analysis, and
              conclusions.]
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto mt-8">
        <h2 className="text-4xl font-fino-sans text-center mb-6">Synopsis</h2>
        <p className="text-center font-obviously-light text-lg mb-8">
          For the past 6 months, I&apos;ve been working on my Master&apos;s
          capstone thesis project for my program at the University of Arizona.
          When I embarked on this project, I had no idea about the incredible
          journey I was about to take and I&apos;m SO proud to reveal my debut
          documentary film, &quot;Drive Like A Girl.&quot; Elvio Anderson, my
          co-pilot, and I have fully dove into not only the truck driving world,
          but the lives, experiences, and challenges of the female truck drivers
          who are breaking social norms and stereotypes. While once a
          predominantly male job, these woman show that driving &quot;big
          ole&apos; big rigs&quot; is a job for EVERYONE.
        </p>
      </div>
    </div>
  );
}
