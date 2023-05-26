import React from "react";
import { Button } from "./button";
import "./hero.css";
import "../App.css";

//make sure not to misspell className lmao

function Hero() {
  return (
    <div className="hero-container">
      <video
        className="video"
        src="/video/Black - 13495.mp4"
        autoPlay
        loop
        muted
      />
      <h1> Anton Dmitriev</h1>
      <p> Portfolio </p>

      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Start
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Watch trailer <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default Hero;
