import React from "react";
import NavbarCom from "../components/NavbarCom";
// import SlickSliderCom from "../components/SlickSliderCom";
import FooterCom from "../components/FooterCom";

function Home() {
  return (
    <>
      <NavbarCom val="home" disp={true} sfs={true} />

      {/* <SlickSliderCom/> */}

      <FooterCom />
    </>
  );
}

export default Home;
