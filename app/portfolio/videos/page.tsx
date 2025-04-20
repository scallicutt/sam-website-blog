import Image from "next/image";

interface Video {
  title: string;
  src: string;
  description: string;
  date: string;
}

export default function VideosPage() {
  const videos: Video[] = [
    {
      title: "Drive Like A Girl Trailer",
      src: "https://www.youtube.com/embed/7t5k8ZiI3Qg?si=chfHP1ZquwVkeiTB",
      description: `For the past 6 months, I've been working on my Master's capstone thesis project for my program at the University of Arizona. When I embarked on this project, I had no idea about the incredible journey I was about to take and I'm SO proud to reveal my debut documentary film, "Drive Like A Girl."Elvio Anderson, my co-pilot, and I have fully dove into not only the truck driving world, but the lives, experiences, and challenges of the female truck drivers who are breaking social norms and stereotypes. While once a predominantly male job, these woman show that driving "big ole' big rigs" is a job for EVERYONE.`,
      date: "April 14, 2025",
    },
    {
      title: "Tucson Election Night 2023",
      src: "https://www.youtube.com/embed/Mkr-dX95304?si=HH_zAc-Z58oAvFK8",
      description: ``,
      date: "November 29, 2023",
    },
    {
      title: "KOLD Intern Anchor Intro",
      src: "https://www.youtube.com/embed/ewz-h8kvdhA?si=Dyns8RCjySugzDfv",
      description: `First shot at anchoring for KOLD news. This is the A block for our 9am show on April 8, 2024.`,
      date: "April 8, 2024",
    },
    {
      title: "Standup Reel",
      src: "https://www.youtube.com/embed/p8fu12ygMGU?si=dae7lOSCCNAF1Dmp",
      description: ``,
      date: "May 2, 2024",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative h-[30vh] w-full">
        <Image
          src="/images/sam/banner-videos.jpg"
          alt="Videos header"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-7xl font-fino-sans tracking-widest">
          VIDEOS
        </h1>
      </div>

      {/* Videos Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div key={index} className="flex flex-col">
              {/* Video Embed */}
              <div className="aspect-video w-full mb-4">
                <iframe
                  width="100%"
                  height="100%"
                  src={video.src}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>

              {/* Video Info */}
              <div className="text-blue-900 font-obviously-light mb-2 text-center">
                {video.date}
              </div>
              <h2 className="text-3xl font-fino-sans leading-tight text-center mb-4">
                {video.title}
              </h2>
              <p className="text-gray-600 text-center font-obviously-light">
                {video.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
