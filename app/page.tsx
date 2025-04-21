import React from "react";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center mt-8 mx-auto">
      <div className="grid grid-cols-2 gap-8 mb-8">
        {/* Left Column - Text */}
        <div className="flex flex-col justify-center">
          <h1 className="text-8xl font-light mb-4">
            samantha
            <br />
            callicutt
          </h1>
          <h2 className="text-2xl font-light tracking-wide">
            Journalist | Producer | Story Teller
          </h2>
        </div>

        {/* Right Column - Image */}
        <div className="relative">
          <Image
            src="/images/sam/sam-camera-shooting-6.jpg"
            alt="Samantha Callicutt"
            width={300}
            height={400}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
}
