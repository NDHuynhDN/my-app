import React from "react";
import tw from "twin.macro";

import FormContact from "../../components/Form/Form";
import imgContact from "../../asset/ContactAnimations.png";
const WrapT = tw.div`
flex lg:flex-row items-center lg:mx-[150px] lg:mb-[20px] lg:gap-[140px]`;
const WrapB = tw.div`flex flex-col-reverse lg:flex-row items-center justify-center`;
const WrapTitle = tw.div`ml-[538px]`;
const ImgContact = tw.img``;
const Title1 = tw.h5``;
const Title2 = tw.h2``;
const Title3 = tw.p``;

const HomeContact = () => {
  return (
    <>
      <WrapT>
        <WrapTitle>
          <Title1>Contact Us</Title1>
          <Title2>Send your inquiry to our expert team</Title2>
          <Title3>Lorem ipsum dolor sit amet nulla turapis tellus.</Title3>
        </WrapTitle>
      </WrapT>
      <WrapB>
        <ImgContact src={imgContact}></ImgContact>
        <FormContact></FormContact>
      </WrapB>
    </>
  );
};

export default HomeContact;
