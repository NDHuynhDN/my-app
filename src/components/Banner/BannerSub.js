import React from "react";
import tw, { styled } from "twin.macro";

const TitleBannerSub = styled.h5(({ isHidden }) => [
  tw`
text-amber-50
`,
  isHidden && tw`hidden`,
]);

const WrapBanner = tw.div`flex flex-col gap-2 items-center justify-center `;

const TitleBanner = tw.h4`text-[#FFF] font-semibold text-4xl mb-4 text-center`;

const TextBanner = tw.p`text-center`;

const BannerSub = ({
  titleBannerSub,
  titleBanner,
  textBanner,
  imgBgBanner,
  height,
  isHidden,
  maxh4Width,
  maxpWidth
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
        <TitleBannerSub isHidden={isHidden}>{titleBannerSub}</TitleBannerSub>
        <TitleBanner style={{maxWidth: `${maxh4Width}`}}>{titleBanner}</TitleBanner>
        <TextBanner style={{maxWidth: `${maxpWidth}`}}>{textBanner}</TextBanner>
      </WrapBanner>
    </>
  );
};

export default BannerSub;
