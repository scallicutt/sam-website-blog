import React from "react";

export default function HomePage() {
  return (
    <div
      className="relative h-[120vh] w-full flex items-center justify-start bg-cover bg-center bg-no-repeat shadow-[inset_0_0_0_1000px_rgba(0,0,0,0.2)]"
      style={{ backgroundImage: "url(/assets/home-headshot.jpeg)" }}
    >
      <div className="absolute top-[150px] left-[300px] text-center text-white">
        <div className="animate-fadeInRight">
          <h1 className="text-[68px] leading-[80px] tracking-[5px] font-normal font-[beloved-sans]">
            Samantha
          </h1>
          <h1
            className="text-[65px] leading-[80px] tracking-[5px] font-normal font-[beloved-sans]"
            id="last-name"
          >
            Callicutt
          </h1>
        </div>
        <div className="animate-fadeIn">
          <p className="text-[20px] text-white text-center">
            <span className="italic font-[warnock-pro] font-normal">
              Journalist
            </span>{" "}
            |{" "}
            <span className="italic font-[warnock-pro] font-normal">
              Producer
            </span>{" "}
            |{" "}
            <span className="italic font-[warnock-pro] font-normal">
              Performer
            </span>
          </p>
        </div>
      </div>

      {/* for when you want a video hero instead of background image */}
      {/* <video className="fixed w-full h-full object-cover -z-10" src={HeroVideo} autoPlay loop muted /> */}
    </div>
  );
}
