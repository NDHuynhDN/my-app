import React from "react";
import tw from "twin.macro";
// import imgMain from "../asset/SlideBackground.png";
import HomeAbout from "./HomeAbout";
import HomeContact from "./HomeContact";
import Profess from "./Profess";
import HomeMain from "./HomeMain.js";
import HomeService from "./HomeService";

const Home = () => {
  const WrapSHome = tw.div``;
  return (
    <>
      <HomeMain></HomeMain>
      <HomeService></HomeService>
      <HomeAbout></HomeAbout>
      <Profess></Profess>   
      <HomeContact></HomeContact>
      
    </>
  );
};

export default Home;
