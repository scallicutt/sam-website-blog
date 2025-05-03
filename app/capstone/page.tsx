"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

type Section = "documentary" | "gallery" | "text";
type GalleryCategory =
  | "trucks"
  | "On The Road"
  | "HDS"
  | "Editing"
  | "Bloopers";

export default function CapstonePage() {
  const [activeSection, setActiveSection] = useState<Section>("documentary");
  const [activeGalleryCategory, setActiveGalleryCategory] =
    useState<GalleryCategory>("trucks");

  const galleryImages = {
    trucks: Array.from(
      { length: 15 },
      (_, i) =>
        `/images/capstone/trucks/trucks_${String(i + 1).padStart(4, "0")}.jpg`
    ),
    ontheroad: Array.from(
      { length: 18 },
      (_, i) =>
        `/images/capstone/ontheroad/ontheroad_${String(i + 1).padStart(
          4,
          "0"
        )}.jpg`
    ),
    HDS: Array.from(
      { length: 54 },
      (_, i) => `/images/capstone/hds/hds_${String(i + 1).padStart(4, "0")}.jpg`
    ),
    editing: Array.from(
      { length: 45 },
      (_, i) =>
        `/images/capstone/editing/editing_${String(i + 1).padStart(4, "0")}.jpg`
    ),
    bloopers: Array.from(
      { length: 3 },
      (_, i) =>
        `/images/capstone/bloopers/bloopers_${String(i + 1).padStart(
          4,
          "0"
        )}.jpg`
    ),
  };

  // Gallery pagination state
  const imagesPerPage = 9;
  const [galleryPage, setGalleryPage] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const currentCategoryImages = galleryImages[activeGalleryCategory];
  const totalPages = Math.ceil(currentCategoryImages.length / imagesPerPage);
  const startIdx = galleryPage * imagesPerPage;
  const endIdx = startIdx + imagesPerPage;
  const currentImages = currentCategoryImages.slice(startIdx, endIdx);

  const handlePrevPage = () =>
    setGalleryPage((p) => (p > 0 ? p - 1 : totalPages - 1));
  const handleNextPage = () =>
    setGalleryPage((p) => (p < totalPages - 1 ? p + 1 : 0));

  // Reset gallery page when changing categories
  useEffect(() => {
    setGalleryPage(0);
    setSelectedImageIndex(null);
  }, [activeGalleryCategory]);

  // Keyboard navigation for modal
  useEffect(() => {
    if (selectedImageIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setSelectedImageIndex((idx) =>
          idx !== null
            ? (idx - 1 + currentCategoryImages.length) %
              currentCategoryImages.length
            : null
        );
      } else if (e.key === "ArrowRight") {
        setSelectedImageIndex((idx) =>
          idx !== null ? (idx + 1) % currentCategoryImages.length : null
        );
      } else if (e.key === "Escape") {
        setSelectedImageIndex(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, currentCategoryImages.length]);

  return (
    <div className="flex flex-col flex-1">
      {/* Hero Section */}
      <div className="relative h-[30vh] w-full">
        <Image
          src="/images/sam/banner-capstone.jpg"
          alt="Capstone header"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-7xl font-fino-sans tracking-widest">
          CAPSTONE
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center gap-16 text-xl">
          <button
            onClick={() => setActiveSection("documentary")}
            className={`font-fino-sans transition-all duration-300 cursor-pointer ${
              activeSection === "documentary"
                ? "text-[#0A1931] underline underline-offset-4"
                : "text-gray-500 hover:text-[#0A1931]"
            }`}
          >
            Documentary
          </button>
          <button
            onClick={() => setActiveSection("gallery")}
            className={`font-fino-sans transition-all duration-300 cursor-pointer ${
              activeSection === "gallery"
                ? "text-[#0A1931] underline underline-offset-4"
                : "text-gray-500 hover:text-[#0A1931]"
            }`}
          >
            Gallery
          </button>
          <button
            onClick={() => setActiveSection("text")}
            className={`font-fino-sans transition-all duration-300 cursor-pointer ${
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
          className={`transform transition-all duration-500 ${
            activeSection === "documentary"
              ? "opacity-100 translate-y-0 visible max-h-[2000px]"
              : "opacity-0 translate-y-4 invisible max-h-0 overflow-hidden"
          }`}
        >
          <div className="max-w-5xl mx-auto">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/7t5k8ZiI3Qg?si=chfHP1ZquwVkeiTB"
                title="Drive Like A Girl Documentary"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div
          className={`transform transition-all duration-500 ${
            activeSection === "gallery"
              ? "opacity-100 translate-y-0 visible max-h-[2000px]"
              : "opacity-0 translate-y-4 invisible max-h-0 overflow-hidden"
          }`}
        >
          <div className="relative max-w-5xl mx-auto">
            {/* Gallery Category Navigation */}
            <div className="flex justify-center gap-8 mb-8">
              {Object.keys(galleryImages).map((category) => (
                <button
                  key={category}
                  onClick={() =>
                    setActiveGalleryCategory(category as GalleryCategory)
                  }
                  className={`font-fino-sans transition-all duration-300 cursor-pointer capitalize ${
                    activeGalleryCategory === category
                      ? "text-[#0A1931] underline underline-offset-4"
                      : "text-gray-500 hover:text-[#0A1931]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Left Arrow */}
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-20 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow"
              onClick={handlePrevPage}
              aria-label="Previous"
              style={{ display: totalPages > 1 ? "block" : "none" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            {/* Right Arrow */}
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-20 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow"
              onClick={handleNextPage}
              aria-label="Next"
              style={{ display: totalPages > 1 ? "block" : "none" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            <div className="grid grid-cols-3 gap-4">
              {currentImages.map((image, idx) => (
                <div
                  key={startIdx + idx}
                  className="aspect-square w-full h-auto relative cursor-pointer group"
                  onClick={() => setSelectedImageIndex(startIdx + idx)}
                  tabIndex={0}
                  role="button"
                  onKeyDown={(e) =>
                    e.key === "Enter" && setSelectedImageIndex(startIdx + idx)
                  }
                >
                  <Image
                    src={image}
                    alt={`Gallery image ${startIdx + idx + 1}`}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-200"
                    width={400}
                    height={400}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Modal Dialog */}
          {selectedImageIndex !== null && (
            <dialog
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                {/* Navigation buttons */}
                <button
                  className="absolute left-4 text-white hover:text-gray-300 z-50"
                  onClick={() =>
                    setSelectedImageIndex(
                      (selectedImageIndex! - 1 + currentCategoryImages.length) %
                        currentCategoryImages.length
                    )
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  className="absolute right-4 text-white hover:text-gray-300 z-50"
                  onClick={() =>
                    setSelectedImageIndex(
                      (selectedImageIndex! + 1) % currentCategoryImages.length
                    )
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
                {/* Full size image */}
                <div className="relative w-[90vw] h-[90vh]">
                  <Image
                    src={currentCategoryImages[selectedImageIndex]}
                    alt={`Gallery image ${selectedImageIndex + 1}`}
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

        {/* Text Section */}
        <div
          className={`transform transition-all duration-500 ${
            activeSection === "text"
              ? "opacity-100 translate-y-0 visible max-h-[2000px]"
              : "opacity-0 translate-y-4 invisible max-h-0 overflow-hidden"
          }`}
        >
          <div className="prose prose-lg mx-auto font-obviously-light">
            <h2 className="text-4xl font-fino-sans text-center mb-8">
              Project Description
            </h2>
            <div className="flex flex-col gap-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt.
              </p>
              <p>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur? Quis autem vel eum iure reprehenderit qui in ea
                voluptate velit esse quam nihil molestiae consequatur, vel illum
                qui dolorem eum fugiat quo voluptas nulla pariatur?
              </p>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus id quod maxime placeat facere possimus, omnis voluptas
                assumenda est, omnis dolor repellendus. Temporibus autem
                quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                eveniet ut et voluptates repudiandae sint et molestiae non
                recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
                ut aut reiciendis voluptatibus maiores alias consequatur aut
                perferendis doloribus asperiores repellat.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Synopsis Section */}
      <div className="max-w-3xl mx-auto mt-8 px-4 pb-16">
        <h2 className="text-4xl font-fino-sans text-center mb-6">Synopsis</h2>
        <p className="text-center font-obviously-light text-lg">
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
