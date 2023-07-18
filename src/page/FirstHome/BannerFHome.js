import React from "react";
import { styled } from "styled-components";
import tw from "twin.macro";

import imgBanner from "../../asset/Group3.png";
import bgBanner from "../../asset/Group13.png";

const Wrap = tw.div`mt-[128px] h-[700px] flex items-center gap-[140px]`;
const WrapL = tw.div`ml-[150px]`;
const WrapR = tw.div`mr-[150px]`;
const Title = styled.h4`
  color: #fff;
  font-size: 36px;
  font-weight: 600;
  line-height: 125%; /* 45px */
  text-align: left;
`;
const Text = styled.p`
  color: #d8dcff;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 1.6px;
  width: 480px;
`;
const Img = tw.img``;
const BannerFHome = () => {
  return (
    <Wrap style={{backgroundImage: `url(${bgBanner})`}}>
      <WrapL>
        <Title>Why choosing us?</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis.
        </Text>
      </WrapL>
      <WrapR>
        <Img src={imgBanner}></Img>
      </WrapR>
    </Wrap>
  );
};

export default BannerFHome;
