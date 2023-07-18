import React from "react";
import tw from "twin.macro";
import { styled } from "styled-components";

import arrowRight from "../../asset/angle-double-right.png";

const WrapAll = styled.div(({ isBorder, isCenter }) => [
  tw`flex flex-col`,
  isBorder
    ? tw`border border-solid border-[#E2E2E2E] rounded-[30px]`
    : tw`border-none rounded-3xl shadow-2xl`,
  isCenter ? tw`` : tw``,
]);
const Wrapbtn = tw.a`
  flex gap-1 items-center mt-[9px] mb-[30px]
`;
const ImgCard = styled.img(({ imgChange, isFirstHome }) => [
  imgChange ? tw`` : tw`w-[64px] h-[64px] ml-5 mt-5`,
]);
const Icon = tw.img`
`;
const TitleCard = styled.h2`
  color: #091156;
  font-size: 18px;
  font-weight: 600;
  line-height: 125%; /* 22.5px */
  /* margin-top: 20px; */
`;
const TextCard = styled.p`
  color: #8b8b8b;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1.4px;
`;
const TextPink = styled.h5`
  font-size: 16px;
  font-weight: 600;
  line-height: 125%; /* 17.5px */
  color: #ff64ae;
  margin: 0;
`;
const CardHomeItem = tw.div`
flex flex-col p-5`;

const CardFHome = ({
  imgCardHome,
  titleCardHome,
  textCardHome,
  isFirstHome,
  isBorder,
  imgChange,
  widthP,
  widthAll,
  widthH2,
  isCenter
}) => {
  return (
    <WrapAll style={{ maxWidth: `${widthAll}`}}>
      <ImgCard src={imgCardHome} imgChange={imgChange}></ImgCard>
      <CardHomeItem isBorder={isBorder}>
        <TitleCard style={{ width: `${widthH2}` }}>
          {titleCardHome}
        </TitleCard>
        <TextCard style={{ width: `${widthP}` }}>{textCardHome}</TextCard>
        {isFirstHome ? (
          <Wrapbtn>
            <TextPink>Learn More</TextPink>
            <Icon src={arrowRight}></Icon>
          </Wrapbtn>
        ) : (
          ""
        )}
      </CardHomeItem>
    </WrapAll>
  );
};

export default CardFHome;
