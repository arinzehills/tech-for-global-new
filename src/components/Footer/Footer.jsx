import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { Button } from "../Button/Button";
import "./Footer.css";
function Footer() {
  return (
    <>
      <div className="footer_wrapper">
        {/* <FooterSvg /> */}
        <div className="footer-container">
          <div className="footer-links">
            <div className="footer-link-wrapper">
              <div className="footer-link-items">
                <h2>Contact Us</h2>
                <p>
                  Email:{" "}
                  <a href="mailto:info@radiantclothings.com">
                    info@techglo.com
                  </a>
                </p>
                <p>
                  Mobile: <a href="tel:+91 9984924444">+91 9984924444</a>
                </p>
              </div>
              <div className="footer-link-items">
                <h2>About Us</h2>
                <Link to="/">Home</Link>
                <Link to="/PrivacyPolicy">Privacy Policy</Link>
                <Link to="/Terms">Terms of Service</Link>
              </div>
            </div>
            <div className="footer-link-wrapper">
              <div className="footer-link-items">
                <h2>Contents</h2>
                {/* <Link to="/">Home</Link> */}
                <ScrollLink to="about">About</ScrollLink>
                <ScrollLink to="programs">Programs</ScrollLink>
                <ScrollLink to="s">What we dp</ScrollLink>
                {/* <a href="https://www.conterize.com/blog">Blog</a> */}
              </div>

              {/* <div className="footer-link-items">
                <h2>More</h2>
                <Link to="/contact">Contact us</Link>
                <Link to="/PrivacyPolicy">Privacy Policy</Link>
                
              </div> */}
            </div>
          </div>
          <section
            className="social-media"
            style={{
              lineHeight: 1,
              // background: "red",
              padding: "0",
              margin: 0,
            }}
          >
            <div className="social-media-wrap">
              <div className="footer-logo">
                <Link to="/" className="social-logo">
                  <img
                    src="images/logo.png"
                    style={{ maxHeight: "70px" }}
                    alt=" logo"
                  />
                </Link>
              </div>
              <p style={{ color: "white" }}>All Rights Reserve</p>
              <br></br>
              <small className="website-rights">Tech For Global © 2023</small>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Footer;
