import Image from "next/image";
import Link from "next/link";

export default function PortfolioPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full">
        <Image
          src="/images/sam/PANA3104.JPG"
          alt="Portfolio header"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-7xl font-light tracking-widest">
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
                  src="/portfolio/articles-thumb.jpg"
                  alt="Print Articles"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-3xl font-light mb-3">Print Articles</h2>
              <p className="text-gray-700">
                Ped molor aspitassita sapicipsum cus sum qui neseniet quo ommdit
                endit, int qui omnihi iment, ut
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
                  src="/portfolio/videos-thumb.jpg"
                  alt="Videos"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-3xl font-light mb-3">Videos</h2>
              <p className="text-gray-700">
                Ex et laccatamus et int asped que porume reseque pos enis
                doluptio quidistio intiam, optaqui conectus
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
                  src="/portfolio/audio-thumb.jpg"
                  alt="Audio Recordings"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-3xl font-light mb-3">Audios</h2>
              <p className="text-gray-700">
                Tem. Tat. Temporempos dolores cidelipendis aut aut quos dem
                aliquam altate imquiam repratur sume et eos
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
