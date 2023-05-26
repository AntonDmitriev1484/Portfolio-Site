import React from "react";
import { Button } from "../components/button";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">Smample text Smample text</p>
        <p className="footer-subscription-text">WEwewewewewewewewewewew</p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div classname="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About us</h2>
            <Link to="/projects">Bababooey</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              TRVL <i className="fabfa-typo3" />
            </Link>
          </div>
          <small className="website-rights">TRVL 2020</small>
          <div
            className="social-icons"
            to="/"
            targets="_blank"
            aria-label="Facebook"
          ></div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
