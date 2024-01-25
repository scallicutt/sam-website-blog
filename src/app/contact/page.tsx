import React from "react";
import "./Contact.css";
import Headshot from "../assets/IWHeadshot2.jpg";

export default function Contact() {
  return (
    <div className="contact-container h-screen">
      <div className="contact-banner">
        <h1>Drop Me a Line</h1>
      </div>
      <div className="contact-content-wrap">
        <div className="contact-info">
          <h2>Lets work together!</h2>
          <p>
            Hello! I'm Samantha, an aspiring journalist and passionate web
            designer. If you're interested in collaborating, discussing
            potential projects, or just want to say hi, I'd love to hear from
            you. Connecting with like-minded individuals and professionals is
            always exciting. Whether it's a journalistic inquiry, a web design
            project, or any creative endeavor, feel free to drop me an email.
            Let's explore how we can work together to create something amazing.
            Don't hesitate to reach out!
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
