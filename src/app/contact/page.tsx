import React from "react";
import "./Contact.css";
import Headshot from "../assets/IWHeadshot2.jpg";
// import Resume from "../documents/";
// import "./samantha-callicutt-resume.pdf";
// import Resume from "../assets/samantha-callicutt-resume.pdf";

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
          <div className="buttons">
            <a
              href="mailto:scallicutt18@gmail.com?subject=Dropping you a line!"
              className="email-button"
              role="button"
            >
              Send me an email
            </a>
            {/* <a
              href="/api/v1/print/example.pdf"
              target="_blank"
              rel="noopener noreferrer"
            ></a> */}
            <a
              className="resume-button"
              href="./assets/samantha-callicutt-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download my résumé
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
