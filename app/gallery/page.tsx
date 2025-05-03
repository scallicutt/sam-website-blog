"use client";

import Image from "next/image";
import { useState, useCallback, useEffect, useRef } from "react";
import type { KeyboardEvent as ReactKeyboardEvent } from 'react';

export default function GalleryPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Generate array of 113 items for all photos
  const galleryItems = Array.from({ length: 113 }, (_, i) => ({
    id: i + 1,
    src: `/images/photo-gallery/${String(i + 1).padStart(4, '0')}.jpg`,
    alt: `Gallery photo ${i + 1}`,
    description: ""
  }));

  const handlePrevious = useCallback(() => {
    setSelectedImageIndex((current) =>
      current !== null ? (current > 0 ? current - 1 : galleryItems.length - 1) : null
    );
  }, [galleryItems.length]);

  const handleNext = useCallback(() => {
    setSelectedImageIndex((current) =>
      current !== null ? (current < galleryItems.length - 1 ? current + 1 : 0) : null
    );
  }, [galleryItems.length]);

  // Global keyboard handler
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;

      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setSelectedImageIndex(null);
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [selectedImageIndex, handlePrevious, handleNext]);

  // Focus management
  useEffect(() => {
    if (selectedImageIndex !== null) {
      dialogRef.current?.focus();
    }
  }, [selectedImageIndex]);

  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="text-center py-16">
        <h1 className="text-6xl font-light tracking-widest">GALLERY</h1>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="aspect-square relative group cursor-pointer overflow-hidden"
              onClick={() => setSelectedImageIndex(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedImageIndex(index)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                priority={item.id <= 8}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal Dialog */}
      {selectedImageIndex !== null && (
        <dialog
          ref={dialogRef}
          className="fixed inset-0 w-full h-full bg-black/90 z-50 flex items-center justify-center outline-none"
          open
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedImageIndex(null);
          }}
          tabIndex={-1}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
              onClick={() => setSelectedImageIndex(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation buttons */}
            <button
              className="absolute left-4 text-white hover:text-gray-300 z-50"
              onClick={handlePrevious}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              className="absolute right-4 text-white hover:text-gray-300 z-50"
              onClick={handleNext}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Full size image */}
            <div className="relative w-[90vw] h-[90vh]">
              <Image
                src={galleryItems[selectedImageIndex].src}
                alt={galleryItems[selectedImageIndex].alt}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
}
