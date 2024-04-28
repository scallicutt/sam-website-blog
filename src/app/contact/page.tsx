import React from "react";
import "./Contact.css";
import Headshot from "../assets/contact-me-headshot.jpeg";

export default function Contact() {
  return (
    <div className="contact-container h-screen">
      <div className="contact-banner">
        <h1>Connect with Me</h1>
      </div>
      <div className="contact-content-wrap">
        <div className="contact-info">
          <h2>Lets chat!</h2>
          <p>
            Hello! I&apos;m Samantha, a journalist and Master&apos;s degree
            student at the University of Arizona. I specialize in multimedia,
            investigative journalism and I am currently an intern for AZPM,
            Tucon&apos;s local NPR affiliate. In addition to my journalist work,
            I am also an actor. My background is in stage, but I am currently
            working to start exploring the world of film acting. To see more of
            my acting work, please see visit my acting page! If you&apos;re
            interested in collaborating, discussing potential projects, or just
            want to say hi, I&apos;d love to hear from you. Connecting with
            like-minded individuals and professionals is always exciting.
            Whether it&apos;s a journalistic inquiry, an acting project, or any
            creative endeavor, feel free to drop me an email. Let&apos;s explore
            how we can work together to create something amazing. Don&apos;t
            hesitate to reach out!
          </p>
          <div className="flex flex-row">
            <a href="mailto:scallicutt18@gmail.com?subject=Dropping you a line!">
              <button className="btn bg-white text-black border border-black px-4 py-2 hover:bg-black hover:text-white mr-4">
                Send me an email
              </button>
            </a>
            <a href="/samantha-callicutt-resume.pdf" target="_blank">
              <button className="bg-white text-black border border-black px-4 py-2 hover:bg-black hover:text-white">
                Download my résumé
              </button>
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={Headshot.src}
            alt="Headshot"
            className="w-2/3 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
