import React from "react";
import AreaofFocus from "../../components/AreaofFocus/AreaofFocus";
import Hero from "../../components/Hero/Hero";

import Programs from "../../components/Programs/Programs";
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo";

const Home = () => {
  const slides = [
    {
      title: "WELCOME TO TECH FOR GLOBAL ",
      description:
        "Building, Inspiring and Supporting technology founders in developing countries for global innovations, expansion and impact.      ",
      image: "/images/techsupport3.jpg",
    },

    {
      title: "ACCELARATING INNOVATIONS ",
      description:
        "Tech For Global is the world's largest ecosystem dedicated to accelerating international growth for innovative tech startups in developing countries.",
      image: "/images/techsupport1.jpg",
    },
    {
      title: "TECH FOR GLOBAL",
      description:
        "Tech For Global is the world's largest ecosystem dedicated to accelerating international growth for innovative tech startups in developing countries.",
      image: "/images/techsupport2.jpg",
    },
  ];
  const homeData = {
    headline: "WELCOME TO TECH FOR GLOBAL",
    headlineWhite: true,
    description:
      "Building, Inspiring and Supporting technology founders in developing countries for global innovations, expansion and impact.",
    img: "/images/techsupport1.jpg",
    imgalt1: "consistent content creation and content marketing",
    withBg: true,
    showButton: true,
    buttonLabel: "Book now",
    // imgStart: "start",
    buttonColor: "btn--orange",
  };
  const homeData3 = {
    headline: "ABOUT US",
    headlineWhite: true,
    description:
      "Tech For Global is a global innovation advancement initiative for founders and Startups in developing regions of the world. Tech For Global is on a mission to inspire and support startups and entrepreneurs in developing countries to succeed in the global stage",
    img: "/images/techsupport1.jpg",
    imgalt1: "consistent content creation and content marketing",
    withBg: true,
    // showButton: true,
    buttonLabel: "Book now",
    // imgStart: "start",
    buttonColor: "btn--orange",
  };
  return (
    <div style={{ margin: 0, padding: 0 }}>
      {/* <ImageSlider slides={slides} showCenterText={true} />
       */}
      <Hero
        {...homeData}
        bgheight="450px"
        bgColor="var(--blue-text)"
        withBg={true}
      />

      <AreaofFocus />
      <WhatWeDo />
      <div id="about">
        <Hero
          {...homeData3}
          bgheight="450px"
          bgColor="var(--blue-text)"
          withBg={true}
        />
      </div>
      <Programs />
    </div>
  );
};

export default Home;
