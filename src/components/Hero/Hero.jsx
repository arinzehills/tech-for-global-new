import React from "react";

import { Link as ScrollLink } from "react-scroll";

import { Button } from "../Button/Button";
import "./Hero.css";
function Hero({
  headline,
  headlineWhite,
  description,
  showButton,
  buttonLabel,
  smallImage,
  img,
  minHeight,
  withBg,
  bgColor,
  imgStart,
  alt1,
  alt2,
}) {
  return (
    <>
      <div
        className="home__hero-section"
        style={{
          background: withBg ? bgColor : "blue",
          minHeight: minHeight ?? "80vh",
        }}
      >
        <div className="hero-container">
          <div
            className="row home__hero-row"
            style={{
              display: "flex",
              marginTop: "6rem",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              {smallImage != null && (
                <div className="col">
                  <div className="home__hero-img-wrapper">
                    <img
                      src={smallImage}
                      alt={alt1}
                      className="small__hero-img"
                    />
                  </div>
                </div>
              )}
              <div className="home__hero-text-wrapper">
                {/* <div className='top-line'>{topLine}</div> */}
                <h1 className={headlineWhite ? "heading withWhite" : "heading"}>
                  {headline}
                </h1>
                <p className="home__hero-subtitle">{description}</p>
                {/* <Link to='/sign-up'> */}
                {showButton ? (
                  <ScrollLink
                    to={"about"}
                    smooth={true}
                    spy={true}
                    offset={160}
                    duration={1500}
                  >
                    <Button
                      buttonColor={"btn--blue-light"}
                      // buttonStyle="btn--outline"
                      rounded={true}
                    >
                      Learn more
                    </Button>
                  </ScrollLink>
                ) : //
                null}

                {/* </Link> */}
              </div>
            </div>
            <div className="col">
              <div className="home__hero-img-wrapper">
                <img src={img} alt={alt2} className="home__hero-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
