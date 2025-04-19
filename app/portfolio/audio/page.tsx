import Image from "next/image";

interface AudioClip {
  title: string;
  src: string;
  description?: string;
  date: string;
}

export default function AudioPage() {
  const audioClips: AudioClip[] = [
    {
      title: "ADOR Returns",
      src: "/assets/audio/ADOR Returns 7-31 PM.wav",
      description: "Coverage of Arizona Department of Revenue tax returns.",
      date: "July 31, 2024",
    },
    {
      title: "Arizona Gaming",
      src: "/assets/audio/Arizona Gaming 6-3 PM.wav",
      description: "Report on Arizona's gaming industry developments.",
      date: "June 3, 2024",
    },
    {
      title: "Arizona Record Earnings",
      src: "/assets/audio/Arizona Record Earnings 8-5PM.wav",
      description: "Analysis of Arizona's record-breaking economic earnings.",
      date: "August 5, 2024",
    },
    {
      title: "Arizona Unemployment Rate",
      src: "/assets/audio/Arizona Unemployment Rate 8-15 PM.wav",
      description: "Latest updates on Arizona's employment statistics.",
      date: "August 15, 2024",
    },
    {
      title: "Child Well Being",
      src: "/assets/audio/Child Well Being 6-10 PM.wav",
      description: "Report on children's welfare initiatives in Arizona.",
      date: "June 10, 2024",
    },
    {
      title: "Dogs N' Denim",
      src: "/assets/audio/Dogs N_ Denim 10-22 AM.wav",
      description: "Feature story on a unique local event combining fashion and pet adoption.",
      date: "October 22, 2024",
    },
    {
      title: "Gaming Numbers",
      src: "/assets/audio/Gaming Numbers 6-14 PM.wav",
      description: "Analysis of latest gaming industry statistics.",
      date: "June 14, 2024",
    },
    {
      title: "Gas Plant",
      src: "/assets/audio/Gas Plant 6-12 PM.wav",
      description: "Coverage of local gas plant developments.",
      date: "June 12, 2024",
    },
    {
      title: "ICE Arrests Feature",
      src: "/assets/audio/ICE arrests feature 4-3 PM_mixdown.wav",
      description: "In-depth coverage of ICE enforcement operations.",
      date: "April 3, 2024",
    },
    {
      title: "ICE Extreme Show of Force",
      src: "/assets/audio/ICE Extreme Show of Force 03-19 PM.wav",
      description: "Analysis of law enforcement tactics during immigration operations.",
      date: "March 19, 2024",
    },
    {
      title: "Infrastructure Grant",
      src: "/assets/audio/Infrastructure Grant 6-26 PM.wav",
      description: "Report on new infrastructure funding initiatives.",
      date: "June 26, 2024",
    },
    {
      title: "Kelly Solar",
      src: "/assets/audio/kelly solar VO 5-31.wav",
      description: "Coverage of solar energy developments.",
      date: "May 31, 2024",
    },
    {
      title: "Mexican Gray Wolves",
      src: "/assets/audio/Mexican Gray Wolves 6-28 PM.wav",
      description: "Story on Mexican gray wolf conservation efforts.",
      date: "June 28, 2024",
    },
    {
      title: "Move in Economy Boost",
      src: "/assets/audio/Move in Economy Boost 8-22 AM.wav",
      description: "Economic impact of student move-in season.",
      date: "August 22, 2024",
    },
    {
      title: "Nogales International Film Festival",
      src: "/assets/audio/Nogales International Film Festival 2-17 PM.wav",
      description: "Coverage of the international film festival in Nogales.",
      date: "February 17, 2024",
    },
    {
      title: "Pima Heat Ordinance",
      src: "/assets/audio/Pima Heat Ordinance 7-29 AM.wav",
      description: "Updates on Pima County's heat-related regulations.",
      date: "July 29, 2024",
    },
    {
      title: "Pima-Tucson LIGHTHOUSE",
      src: "/assets/audio/PimaTucson LIGHTHOUSE 9-12 AM.wav",
      description: "Coverage of the LIGHTHOUSE initiative in Pima County.",
      date: "September 12, 2024",
    },
    {
      title: "Prop 414 Ballot Deadline",
      src: "/assets/audio/Prop 414 Ballot Deadline 03-03 PM 03-04 AM.wav",
      description: "Updates on Proposition 414 voting deadline.",
      date: "March 3, 2024",
    },
    {
      title: "San Carlos Apache Water",
      src: "/assets/audio/San Carlos Apache Water 9-4 AM.wav",
      description: "Coverage of water rights issues affecting the San Carlos Apache Tribe.",
      date: "September 4, 2024",
    },
    {
      title: "South Tucson ICE Raid",
      src: "/assets/audio/South Tucson ICE Raid 02-27 AM.wav",
      description: "Breaking news coverage of ICE operations in South Tucson.",
      date: "February 27, 2024",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative h-[30vh] w-full">
        <Image
          src="/images/sam/PANA3199.jpg"
          alt="Videos header"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-7xl font-fino-sans tracking-widest">
          AUDIO
        </h1>
      </div>

      {/* Audio Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audioClips.map((clip, index) => (
            <div key={index} className="flex flex-col p-6">

              <h2 className="text-2xl font-fino-sans leading-tight text-center mb-4">
                {clip.title}
              </h2>
              {/* Audio Player */}
              <div className="mb-4">
                <audio
                  controls
                  className="w-full"
                  src={clip.src}
                >
                  Your browser does not support the audio element.
                </audio>
              </div>
              <div className="text-blue-900 font-obviously-light mb-2 text-center">
                {clip.date}
              </div>
              {clip.description && (
                <p className="text-gray-600 text-center font-obviously-light text-sm">
                  {clip.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
