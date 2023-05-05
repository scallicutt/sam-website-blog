import React from "react";
import "./globals.css";
import "./Home.css";

export default function Home() {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1 id="first-name">Samantha</h1>
        <h1 id="last-name">Callicutt</h1>
        <p className="hero-subtext">
          <span className="subtext">Aspiring Journalist</span> |{" "}
          <span className="subtext">Writer</span> |
          <span className="subtext"> Performer</span>
        </p>
      </div>
      {/* for when I want a video hero */}
      {/* <video src={HeroVideo} autoPlay loop muted /> */}
    </div>
  );
}
