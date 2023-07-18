import React from "react";
import tw, { styled } from "twin.macro";
import ImggWatch from "../../asset/Group4.png";

const WrapBanner = tw.div`flex gap-2 items-center justify-center`;

const WrapLeft = tw.div`
ml-[150px]
flex-1
`;

const WrapRight = tw.div`flex items-center justify-center mr-2 flex-1`;

const TitleBanner = tw.h4`text-[#FFFFFF] text-left font-semibold text-5xl max-w-[600px] mb-4`;

const TextBanner = tw.p`
text-[#D8DCFF] text-base tracking-wider `;

const ImgWatch = tw.img`
w-[30%] h-[30%]
`;
const ButtonWatch = tw.a` text-[#FFFFFF] text-base font-semibold ml-4 cursor-pointer`;

const ButtonBanner = styled.a(({ isHidden }) => [
  tw` border rounded-[15px] text-[#FFFFFF] block px-10 py-3 mt-4 max-w-[227px] tracking-wider`,
    isHidden && tw`hidden`,
]);

const Banner = ({
  height,
  imgBgBanner,
  titleBanner,
  textBanner,
  buttonText,
  textBtnWatch,
  isHidden,
}) => {
  return (
    <>
      <WrapBanner
        style={{
          backgroundImage: `url(${imgBgBanner})`,
          backgroundRepeat: "no-repeat",
          height: `${height}`,
        }}
      >
        <WrapLeft>
          <TitleBanner>{titleBanner}</TitleBanner>
          <TextBanner>{textBanner}</TextBanner>
          <ButtonBanner isHidden={isHidden}>{buttonText}</ButtonBanner>
        </WrapLeft>
        <WrapRight>
          <ImgWatch src={ImggWatch} />
          <ButtonWatch>{textBtnWatch}</ButtonWatch>
        </WrapRight>
      </WrapBanner>
    </>
  );
};

export default Banner;
