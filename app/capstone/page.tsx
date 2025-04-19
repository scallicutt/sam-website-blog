"use client";
import { useState } from "react";
import Image from "next/image";

type Section = "documentary" | "gallery" | "text";

export default function CapstonePage() {
  const [activeSection, setActiveSection] = useState<Section>("documentary");

  const galleryImages = [
    "/images/sam/sam-camera-shooting-1.jpg",
    "/images/sam/sam-camera-shooting-2.jpg",
    "/images/sam/sam-camera-shooting-3.jpg",
    "/images/sam/sam-camera-shooting-4.jpg",
    "/images/sam/sam-camera-shooting-5.jpg",
    "/images/sam/sam-camera-shooting-6.jpg",
    "/images/sam/sam-camera-shooting-7.jpg",
    "/images/sam/sam-camera-shooting-8.jpg",
    "/images/sam/sam-camera-shooting-9.jpg",
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section with Navy Background */}
      <div className="bg-[#0A1931] py-16 flex items-center justify-center">
        <h1 className="text-white text-7xl font-fino-sans text-center tracking-widest">
          CAPSTONE
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center gap-16 text-xl">
          <button
            onClick={() => setActiveSection("documentary")}
            className={`font-fino-sans transition-all duration-300 cursor-pointer ${activeSection === "documentary"
              ? "text-[#0A1931] underline underline-offset-4"
              : "text-gray-500 hover:text-[#0A1931]"
              }`}
          >
            Documentary
          </button>
          <button
            onClick={() => setActiveSection("gallery")}
            className={`font-fino-sans transition-all duration-300 cursor-pointer ${activeSection === "gallery"
              ? "text-[#0A1931] underline underline-offset-4"
              : "text-gray-500 hover:text-[#0A1931]"
              }`}
          >
            Gallery
          </button>
          <button
            onClick={() => setActiveSection("text")}
            className={`font-fino-sans transition-all duration-300 cursor-pointer ${activeSection === "text"
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
          className={`transform transition-all duration-500 ${activeSection === "documentary"
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
          className={`transform transition-all duration-500 ${activeSection === "gallery"
            ? "opacity-100 translate-y-0 visible max-h-[2000px]"
            : "opacity-0 translate-y-4 invisible max-h-0 overflow-hidden"
            }`}
        >
          <div className="grid grid-cols-3 gap-4 max-w-5xl mx-auto">
            {galleryImages.map((image, index) => (
              <div key={index} className="aspect-square w-full h-auto relative">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="object-cover w-full h-full"
                  width={400}
                  height={400}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Text Section */}
        <div
          className={`transform transition-all duration-500 ${activeSection === "text"
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
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae vitae
                dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                dolores eos qui ratione voluptatem sequi nesciunt.
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
                assumenda est, omnis dolor repellendus. Temporibus autem quibusdam
                et aut officiis debitis aut rerum necessitatibus saepe eveniet
                ut et voluptates repudiandae sint et molestiae non recusandae.
                Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                reiciendis voluptatibus maiores alias consequatur aut perferendis
                doloribus asperiores repellat.
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
    </div >
  );
}
