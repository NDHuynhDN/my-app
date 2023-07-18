import React from "react";
import { styled } from "styled-components";
import tw from "twin.macro";
import arrowRight from "../../asset/angle-double-right.png";

const WrapInfor = styled.div(({ isReverse }) => [
  tw`flex items-center gap-[160px] justify-center lg:mx-[150px] mb-[100px]`,
  isReverse ? tw`flex-row-reverse` : tw`flex`,
]);

const ContentInfo = tw.div`
`;
const HeadInfo = tw.h5`
`;
const TitleInfo = tw.h2`

`;
const TextInfo = tw.p`
tracking-wider
`;
const ImgInfo = tw.img`
`;
const ButtonInfo = styled.button(({ isHidden }) => [
  tw`px-10 py-3 rounded-3xl mt-4`,
  isHidden && tw`hidden`,
]);

const Wrapbtn = tw.a`
  flex gap-1 items-center mt-[9px]
`;
const Icon = tw.img`
text-[#ff64ae] 
`;
const Text = styled.p`
  color: #091156;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 1.6px;
`;
const TextTeam = tw.h3`
`;

const Information = ({
  imgInfo,
  headInfo,
  titleInfo,
  textInfo,
  textTeam,
  textBtnInfo,
  isReverse,
  isChange,
  isHidden,
  team,
  maxTextWidth = "350px",
}) => {
  return (
    <>
      <WrapInfor isReverse={isReverse}>
        <ImgInfo src={imgInfo}></ImgInfo>
        <ContentInfo>
          <HeadInfo>{headInfo}</HeadInfo>
          {team ? <TextTeam>{textTeam}</TextTeam> : ""} 
          <TitleInfo style={{ width: `${maxTextWidth}` }}>
            {titleInfo}
          </TitleInfo>
          <TextInfo>{textInfo}</TextInfo>
          {isChange ? (
            <Wrapbtn>
              <Text>Make an Appointment</Text>
              <Icon src={arrowRight}></Icon>
            </Wrapbtn>
          ) : (
            <ButtonInfo isHidden={isHidden}>{textBtnInfo}</ButtonInfo>
          )}
        </ContentInfo>
      </WrapInfor>
    </>
  );
};

export default Information;
