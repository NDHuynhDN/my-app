import React from "react";
import tw from "twin.macro";

import TitleCommon from "../components/Common/TitleCommon";
import BannerSub from "../components/Banner/BannerSub";
import Information from "../components/Information/Information";

import g8 from "../asset/Group8.png";
import g5 from "../asset/Group5.png";
import a1 from "../asset/Illustration-1.png";
import a2 from "../asset/Illustration-2.png";
import groupLogo from "../asset/groupLogo.png";
import Profess from "./Home/Profess";

const WrapAbout = tw.div`mt-[230px]`
const Video = tw.img`cursor-pointer w-[90%] ml-[80px]`;
const Wrap = tw.div``;
const Group = tw.img`mx-auto mt-[100px]`;

const About = () => {
  return (
    <WrapAbout>
      <TitleCommon
        isLeft={true}
        h5TitleSub="About"
        h2Title="We are a leading beauty clinic that has been around since 2002"
        pTextChild="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"
        maxh2Width={"750px"}
        maxpWidth={"650px"}
      ></TitleCommon>
      <Video src={g8}></Video>
      <Profess></Profess>
      <BannerSub
        titleBannerSub="Business Slogan"
        titleBanner="Best responsibility and service for our customers"
        textBanner="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"
        imgBgBanner={g5}
        height={"550px"}
        maxh4Width={"700px"}
        maxpWidth={"680px"}
      ></BannerSub>
      <br/>
      <br/>
      <br/>
      <Information
        imgInfo={a1}
        headInfo="Our Vision"
        titleInfo="Be the best and go international"
        textInfo={
          <>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam
            suscipit purus donec amet. Egestas volutpat facilisi eu libero.
            <br />
            <br />
            Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in
            suspendisse placerat.
          </>
        }
        isChange={false}
        isHidden={true}
      ></Information>
      <Information
        imgInfo={a2}
        headInfo="Our Mission"
        titleInfo="Special & premium service to any clients"
        textInfo={
          <>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam
            suscipit purus donec amet. Egestas volutpat facilisi eu libero.
            <br />
            <br />
            Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in
            suspendisse placerat.
          </>
        }
        isChange={false}
        isHidden={true}
        isReverse={true}
        maxTextWidth="500px"
      ></Information>
      <Wrap>
        <TitleCommon
          h5TitleSub="Our Clients"
          h2Title="Well-known agencies"
          pTextChild="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        ></TitleCommon>
        <Group src={groupLogo}></Group>
      </Wrap>
    </WrapAbout>
  );
};

export default About;
