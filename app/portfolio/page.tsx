import Image from "next/image";
import Link from "next/link";

export default function PortfolioPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative h-[30vh] w-full">
        <Image
          src="/images/sam/banner-portfolio.jpg"
          alt="Portfolio header"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-7xl font-fino-sans tracking-widest">
          PORTFOLIO
        </h1>
      </div>

      {/* Categories Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-3 gap-8">
          {/* Print Articles Section */}
          <div className="flex flex-col">
            <Link href="/portfolio/articles" className="group">
              <div className="relative h-64 mb-4">
                <Image
                  src="/images/stories/yoleidy-and-her-son-hero.jpg"
                  alt="Print Articles"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-3xl font-light mb-3 text-center">
                Print Articles
              </h2>
              <p className="text-gray-700">
                A collection of print articles that I have written for various
                publications.
              </p>
              <div className="mt-4 text-gray-500 group-hover:underline">
                View Articles
              </div>
            </Link>
          </div>

          {/* Videos Section */}
          <div className="flex flex-col">
            <Link href="/portfolio/videos" className="group">
              <div className="relative h-64 mb-4">
                <Image
                  src="/images/sam/sam-camera-shooting-3.jpg"
                  alt="Videos"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-3xl font-light mb-3 text-center">Videos</h2>
              <p className="text-gray-700">
                A collection of videos that I have produced, edited, or appeared
                in.
              </p>
              <div className="mt-4 text-gray-500 group-hover:underline">
                View Videos
              </div>
            </Link>
          </div>

          {/* Audios Section */}
          <div className="flex flex-col">
            <Link href="/portfolio/audio" className="group">
              <div className="relative h-64 mb-4">
                <Image
                  src="/images/stories/broadcasting-microphone.jpg"
                  alt="Audio Recordings"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-3xl font-light mb-3 text-center">Audios</h2>
              <p className="text-gray-700">
                A collection of audio clips that showcase my work as a
                journalist.
              </p>
              <div className="mt-4 text-gray-500 group-hover:underline">
                View Audio Recordings
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
