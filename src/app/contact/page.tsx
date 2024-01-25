import React from "react";
import "./Contact.css";
import Headshot from "../assets/IWHeadshot2.jpg";

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-banner">
        <h1>Drop Me a Line</h1>
      </div>
      <div className="contact-content-wrap">
        <div className="contact-info">
          <h2>Lets work together!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
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
        <div className="contact-photo">
          <img src={Headshot.src} alt="Headshot" width={"400px"} />
        </div>
      </div>
    </div>
  );
}
