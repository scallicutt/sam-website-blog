import React from "react";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center mt-4 md:mt-8 mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 w-full max-w-6xl">
        {/* Left Column - Text */}
        <div className="flex flex-col justify-center order-2 md:order-1">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-4 text-center md:text-left">
            samantha
            <br />
            callicutt
          </h1>
          <h2 className="text-xl md:text-2xl font-light tracking-wide text-center md:text-left">
            Journalist | Producer | Story Teller
          </h2>
        </div>

        {/* Right Column - Image */}
        <div className="relative order-1 md:order-2">
          <Image
            src="/images/sam/sam-camera-shooting-6.jpg"
            alt="Samantha Callicutt"
            width={300}
            height={400}
            className="w-full h-auto rounded-lg shadow-lg"
            priority
          />
        </div>
      </div>
    </div>
  );
}
