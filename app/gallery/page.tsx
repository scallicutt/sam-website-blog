import Image from "next/image";

export default function GalleryPage() {
  const galleryItems = [
    {
      id: 1,
      src: "/images/sam/sam-camera-shooting-1.jpg",
      alt: "",
      description: ""
    },
    {
      id: 2,
      src: "/images/sam/sam-camera-shooting-2.jpg",
      alt: "",
      description: ""
    },
    {
      id: 3,
      src: "/images/sam/sam-camera-shooting-3.jpg",
      alt: "",
      description: ""
    },
    {
      id: 4,
      src: "/images/sam/sam-camera-shooting-4.jpg",
      alt: "",
      description: ""
    },
    {
      id: 5,
      src: "/images/sam/sam-camera-shooting-5.jpg",
      alt: "",
      description: ""
    },
    {
      id: 6,
      src: "/images/sam/sam-camera-shooting-6.jpg",
      alt: "",
      description: ""
    },
    {
      id: 7,
      src: "/images/sam/sam-camera-shooting-7.jpg",
      alt: "",
      description: ""
    },
    {
      id: 8,
      src: "/images/sam/sam-camera-shooting-8.jpg",
      alt: "",
      description: ""
    },
    {
      id: 9,
      src: "/images/sam/sam-camera-shooting-9.jpg",
      alt: "",
      description: ""
    },

  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="text-center py-16">
        <h1 className="text-6xl font-light tracking-widest">GALLERY</h1>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div key={item.id} className="flex flex-col">
              <div className="relative h-80 mb-4">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-gray-700 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
