import React from "react";
import { styled } from "styled-components";

import TitleCommon from "../components/Common/TitleCommon";
import Information from "../components/Information/Information";

import team1 from "../asset/team1.png";
import team2 from "../asset/team2.png";
import team3 from "../asset/team3.png";
import g9 from "../asset/Group9.png";
import BannerSub from "../components/Banner/BannerSub";

import imgStar from "../asset/Star.png";
import imgSmall from "../asset/teamImgSmall.png";
import tw from "twin.macro";

import arrowL from "../asset/arrow-left.svg";
import arrowR from "../asset/arrow-right.svg";
import Profess from "./Home/Profess";

const TextBlue = styled.span`
  color: #091156;
  font-size: 18px;
  font-weight: 600;
  line-height: 125%; /* 22.5px */
  letter-spacing: 0;
`;
const TextItalic = styled.span`
  color: #8b8b8b;
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  line-height: 125%;
`;
const SlideText = tw.p`text-center mx-[10px]`;
const Wrap = tw.div`w-[1000px] mx-auto flex items-center justify-center gap-[70px]`;
const WrapAll = tw.div`mt-[230px]`;
const WrapIn = tw.div`w-[640px]`;
const ImgSmall = tw.img`mx-auto my-4`;
const ImgStar = tw.img`mx-auto my-4`;
const ArrowL = tw.img``;
const ArrowR = tw.img``;

const Team = () => {
  return (
    <WrapAll>
      <Profess></Profess>
      <TitleCommon
        h5TitleSub="Assistance Team"
        h2Title="Meet the pro assistance"
        pTextChild="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
      />
      <br />
      <br />
      <Information
        isHidden={true}
        team={true}
        imgInfo={team1}
        textTeam={
          <>
            <TextBlue>Lina Gustav /</TextBlue>
            <TextItalic>Pharmacist</TextItalic>
          </>
        }
        textInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque."
      />
      <Information
        isHidden={true}
        team={true}
        imgInfo={team2}
        textTeam={
          <>
            <TextBlue>Adam White /</TextBlue>
            <TextItalic>Finance</TextItalic>
          </>
        }
        textInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque."
      />
      <Information
        isHidden={true}
        team={true}
        imgInfo={team3}
        textTeam={
          <>
            <TextBlue>Jane Doe /</TextBlue>
            <TextItalic>Marketer</TextItalic>
          </>
        }
        textInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque."
      />
      <BannerSub
        titleBannerSub="Business Slogan"
        titleBanner="Customer satisfaction is our main goal"
        textBanner="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"
        imgBgBanner={g9}
        height={"550px"}
        maxh4Width={"600px"}
        maxpWidth={"680px"}
      ></BannerSub>
      <br />
      <br />
      <TitleCommon
        h5TitleSub="Our Testimonials"
        h2Title="What our customer says"
        pTextChild="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
      />
      <Wrap>
        <ArrowL src={arrowL}></ArrowL>
        <WrapIn>
          <ImgSmall src={imgSmall}></ImgSmall>
          <SlideText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
            metus tincidunt laoreet ultricies condimentum ac integer aliquam.
            Lorem diam dignissim amet fermentum elementum dui dui. Aliquam sem
            elementum morbi imperdiet suscipit erat ut. Purus volutpat in turpis
            gravida blandit.
          </SlideText>
          <ImgStar src={imgStar}></ImgStar>
        </WrapIn>
        <ArrowR src={arrowR}></ArrowR>
      </Wrap>
    </WrapAll>
  );
};

export default Team;
