import React from "react";
import tw from "twin.macro";

import TitleCommon from "../components/Common/TitleCommon";

import imgMap from "../asset/map.png";
import imgCard from "../asset/Address.png";
import imgContact from "../asset/ContactAnimations.png";
import FormContact from "../components/Form/Form";

const WrapContact = tw.div`mt-[230px]`;
const WrapT = tw.div`
flex lg:flex-row items-center lg:mx-[150px] lg:mb-[75px] lg:gap-[140px]`;
const WrapB = tw.div`flex flex-col-reverse lg:flex-row items-center justify-center`;
const TitleSubContact = tw.h5``;
const TitleContact = tw.h2`
w-[500px]`;
const WrapLeft = tw.div`
flex-col items-center`;
const WrapRight = tw.p`mt-5`;

const WrapCard = tw.div``;
const Map = tw.img`mb-[145px]`;
const ImgContact = tw.img``;
const ImgCard = tw.img`mx-auto mt-[60px]`;

const Contact = () => {
  return (
    <WrapContact>
      <WrapT>
        <WrapLeft>
          <TitleSubContact>Contact Us</TitleSubContact>
          <TitleContact>Contact service for our customers</TitleContact>
        </WrapLeft>
        <WrapRight>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis
        </WrapRight>
      </WrapT>
      <WrapB>
        <ImgContact src={imgContact}></ImgContact>
        <FormContact></FormContact>
      </WrapB>
      <Map src={imgMap}></Map>
      <TitleCommon
        h5TitleSub={"Get in Touch"}
        h2Title={"Get direct handling by us"}
        pTextChild={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
        }
      ></TitleCommon>
      <WrapCard>
        <ImgCard src={imgCard}></ImgCard>
      </WrapCard>
    </WrapContact>
  );
};

export default Contact;
