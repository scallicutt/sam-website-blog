import Image from "next/image";

export default function VideosPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full">
        <Image
          src="/assets/PANA3104.JPG"
          alt="Videos header"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-7xl font-light tracking-widest">
          VIDEOS
        </h1>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        {/* Add your videos grid/list here */}
      </div>
    </div>
  );
}
