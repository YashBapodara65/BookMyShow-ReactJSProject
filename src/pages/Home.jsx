import React from "react";
import NavbarCom from "../components/NavbarCom"
import SwiperSliderCom from "../components/SwiperSliderCom";
import SlickSliderCom from "../components/SlickSliderCom";
import FooterCom from "../components/FooterCom";

function Home() {
  return (
    <>

      <NavbarCom val="home" />

      <SwiperSliderCom/>

      <SlickSliderCom/>

      <FooterCom/>

    </>
  );
}

export default Home;
