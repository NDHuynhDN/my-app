import React from "react";
import { styled } from "styled-components";
import tw from "twin.macro";

import sc1 from "../../asset/Socical.png";

const Wrap = styled.div`
  border-radius: 50px;
  box-shadow: -2px 4px 31px 9px #f2f4ff;
  padding: 60px 30px 40px 50px;
  margin-top: 76px;
`;

const WrapImg = tw.img`
ml-[-35px]
`;

const Title = styled.h2`
  color: #091156;
  font-size: 16px;
  font-weight: 600;
  line-height: 125%; /* 20px */
  margin-bottom: 22px;
`;

const Social = () => {
  return (
    <>
      <Wrap>
        <Title>Social Connect</Title>
        <WrapImg src={sc1}></WrapImg>
      </Wrap>
    </>
  );
};

export default Social;
