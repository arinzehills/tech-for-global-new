import { Icon } from "@iconify/react";
import React, { useEffect } from "react";
import "./AreaofFocus.css";
import AOS from "aos";
import "aos/dist/aos.css";

const AreaofFocus = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const areas = [
    {
      area: "BlockChain",
      details: "",
      icon: "eos-icons:blockchain",
      image: "/images/bl.jpg",
    },
    {
      area: "AI & Machine Learning",
      details: "",
      icon: "carbon:machine-learning-model",
      image: "/images/ai.jpg",
    },
    {
      area: "Fintech",
      details: "",
      icon: "mdi:finance",
      image: "/images/fintech.jpg",
    },
    {
      area: "Saas",
      details: "",
      icon: "simple-icons:jirasoftware",
      image: "/images/saas.jpg",
    },
    {
      area: "Web3",
      details: "",
      icon: "simple-icons:hive-blockchain",
      image: "/images/web3.jpg",
    },
    {
      area: "Cybersecurity",
      details: "",
      icon: "icon-park-solid:blockchain",
      image: "/images/css.jpg",
    },
    {
      area: "Internet of Things",
      details: "",
      icon: "simple-icons:iota",
      image: "/images/iot.jpg",
    },
    {
      area: "HealthTech",
      details: "",
      icon: "material-symbols:menstrual-health-sharp",
      image: "/images/hlt.jpg",
    },
  ];
  return (
    <div
      style={{
        marginBottom: "3rem",
      }}
    >
      <div>
        <h1 style={{ color: "var(--blue-text)" }} className="centerClass">
          Area of Focus
        </h1>
      </div>
      <div className="centerClass withColumn">
        <div
          style={{
            backgroundColor: "transparent",
          }}
          className="grid_class "
          data-aos={window.innerWidth < 760 ? "fade-right" : "fade-left"}
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          // ref={rightDivRef}
          // className={window.innerWidth < 760 && "centerClass withColumn"}
        >
          {areas.map((area, index) => (
            <div
              key={area}
              style={{
                height: "250px",
                // margin: "10px",
                color: "white",
                width: window.innerWidth < 760 ? "230px" : "200px",
                marginTop: "3rem",
              }}
              className="  focus-content__container"
            >
              <div
                className="transparentGlass withBlur"
                style={{
                  padding: "0.5rem",
                  marginTop: "-1.8rem",
                  height: "60px",
                  width: "60px",
                  borderRadius: "20px",
                }}
              >
                <div
                  style={{
                    background: "#2255ff",
                    height: "60px",
                    width: "60px",
                  }}
                  className="iconClass"
                >
                  <Icon
                    icon={area.icon ?? "eos-icons:blockchain"}
                    fontSize="25px"
                  />
                </div>
              </div>
              <img
                src={area.image ?? "/images/techsupport1.jpg"}
                height="150px"
                alt=""
                style={{
                  borderRadius: "20px",
                  width: "100%",
                  marginTop: "1rem",
                }}
              />
              <h3 style={{ color: "var(--blue-text)" }}> {area.area}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AreaofFocus;
