//Should be usable throughout entire website???
import React from "react";
import "./button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];
//an array of css styles

const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  //To each button, we pass in an object with these parameters

  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  //If we don't pass in a buttonStyle, it'll use what we've hard coded into the array

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  //same thing for button sizes

  //Children parameter referes to any components put within the button
  //the button will render these components

  //We're basically just defining how we want any generic button to render
  //and leaving the contents of the button to be passed in later in some other file
  return (
    <Link to="/" className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
