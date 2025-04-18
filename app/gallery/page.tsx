import Image from "next/image";

export default function GalleryPage() {
  const galleryItems = [
    {
      id: 1,
      src: "/assets/gallery/portrait1.jpg",
      alt: "Portrait photo",
      description:
        "Ped molor aspitassita sapicipsum cus sum qui neseniet quo ommmodit endit, int qui omnihinc.",
    },
    {
      id: 2,
      src: "/assets/gallery/couple1.jpg",
      alt: "Couple in vintage van",
      description:
        "Ped molor aspitassita sapicipsum cus sum qui neseniet quo ommmodit endit, int qui omnihinc.",
    },
    {
      id: 3,
      src: "/assets/gallery/nature1.jpg",
      alt: "Nature photo",
      description:
        "Ped molor aspitassita sapicipsum cus sum qui neseniet quo ommmodit endit, int qui omnihinc.",
    },
    {
      id: 4,
      src: "/assets/gallery/portrait2.jpg",
      alt: "Portrait photo",
      description:
        "Ped molor aspitassita sapicipsum cus sum qui neseniet quo ommmodit endit, int qui omnihinc.",
    },
    {
      id: 5,
      src: "/assets/gallery/couple2.jpg",
      alt: "Couple in vintage van",
      description:
        "Ped molor aspitassita sapicipsum cus sum qui neseniet quo ommmodit endit, int qui omnihinc.",
    },
    {
      id: 6,
      src: "/assets/gallery/nature2.jpg",
      alt: "Nature photo",
      description:
        "Ped molor aspitassita sapicipsum cus sum qui neseniet quo ommmodit endit, int qui omnihinc.",
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
