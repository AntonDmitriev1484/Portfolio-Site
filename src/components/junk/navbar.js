import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./button";

import "./navbar.css";

//Curly braces are used when the module has more than one export
//Named importing
//We're importing a specific thing 'Link' by its name
//So we put the name of what we want to import into the curly braces
//we can rename this import using 'as'

function Navbar() {
  const [click, setClick] = useState(false);
  //useState object decomposition, first name is a variable, second name is a function which manipulates
  //this variable

  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //https://www.youtube.com/watch?v=iEVcCdbF1WQ

  //example of react hooks
  const [count, setCount] = useState(0);
  //Second parameter, function, is always a SETTER

  //Each time this react component gets rendered, we will increment the count once.
  //useEffect just runs any function, each time a functional react component is called.

  //This useEffect function runs once
  // useEffect(() => {
  //   {
  //     setCount(count + 1);
  //   }
  // }, []);

  //This useEffect function runs each time the mobile dropdown menu button is pressed
  //Each time the state of its dependency changes

  // useEffect(() => {
  //   {
  //     setCount(count + 1);
  //   }
  // }, [click]);

  //React is looking at the state of our click hook externally
  //and then uses this useEffect() function to update the navbar component
  //whenever the state is changed.

  //      <h1> {count} </h1>

  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  //Each time the menu-icon div is clicked, it toggles the boolean value for click
  //to be reversed
  const closeMobileMenu = () => setClick(false);

  //Depending on the value of click, or divs will use different css

  //onClick functions are wrapped in curly braces like objects

  //Determines buttonSize for mobile
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  //with  {button && <Button buttonStyle="btn--outline">TEMP</Button>}
  //we conditionally render our Button component, based on the value of our button state

  //useEffect() causes our button to only render once
  //this way when we refresh on mobile the button wont re-appear

  //We added a listener which constantly runs showButton check
  //when we resize the window.
  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Anton Dmitriev <i className="fab fa-typo3"></i>
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/projects"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                to="/temp"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li> */}
          </ul>
          {button && <Button buttonStyle="btn--outline">Contact</Button>}
          <div className="menu-icon"></div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
