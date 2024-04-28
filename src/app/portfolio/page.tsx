import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Portfolio() {
  return (
    <div
      style={{ fontFamily: '"warnock-pro", serif' }}
      className="flex flex-col justify-center items-center"
    >
      <div className="my-4">
        <h1
          style={{ fontFamily: '"beloved-sans", sans-serif' }}
          className="text-7xl font-normal"
        >
          Portfolio
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="flex flex-col items-center p-4 bg-slate-200 rounded-lg">
          <h3 className="text-3xl">KOLD Intern Anchor Intro | April 8, 2024</h3>
          <iframe
            width="500"
            height="280"
            src={"https://www.youtube.com/embed/ewz-h8kvdhA"}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex flex-col items-center p-4 bg-slate-200 rounded-lg">
          <h3 className="text-3xl">UA Theatre Program Shutdown</h3>
          <iframe
            width="500"
            height="280"
            src={
              "https://www.youtube.com/embed/-DUAcD0HZm0?si=9L3igtk-4qfglzkZ"
            }
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex flex-col items-center p-4 bg-slate-200 rounded-lg">
          <h3 className="text-3xl">Tucson Election Night 2023</h3>
          <iframe
            width="500"
            height="280"
            src={
              "https://www.youtube.com/embed/Mkr-dX95304?si=YJjtyq1_4s2l50Aj"
            }
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex flex-col items-center p-4 bg-slate-200 rounded-lg">
          <h3 className="text-3xl">Nightfall at Old Tucson</h3>
          <iframe
            width="500"
            height="280"
            src={
              "https://www.youtube.com/embed/l85FuJvHKMo?si=eWVWibP905YaACkr"
            }
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <Link
          href="https://azluminaria.org/2024/04/01/forced-to-flee-civil-war-this-syrian-mother-found-a-new-home-in-tucson"
          target="_blank"
        >
          <div className="flex flex-col items-center p-4 bg-slate-200 rounded-lg">
            <h3 className="text-3xl">
              Refugee mother finds new home in Tucson
            </h3>
            <Image
              width={500}
              height={280}
              src="/story-cover-01.png"
              alt="People walking"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
