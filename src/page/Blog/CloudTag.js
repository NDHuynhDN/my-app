import React from "react";
import { styled } from "styled-components";
import tw from "twin.macro";

const Wrap = styled.div`
  border-radius: 50px;
  box-shadow: -2px 4px 31px 9px #f2f4ff;
  padding: 60px 30px 63px 50px;
  margin-top: 76px;
`;

const Title = styled.h2`
  color: #091156;
  font-size: 16px;
  font-weight: 600;
  line-height: 125%; /* 20px */
  margin-bottom: 22px;
`;
const WrapText = tw.div`grid grid-cols-3 grid-rows-3 gap-x-[14px] gap-y-[21px]`;
const Text = styled.p`
  color: #8b8b8b;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1.4px;
  margin-bottom: 3px;
  background-color: #ffffff;
  border-radius: 50px;
  background: #fff;
  box-shadow: 0px 4px 17px 0px #eef0ff;
  text-align: center;
`;

const CloudTag = () => {
  return (
    <>
      <Wrap>
        <Title>Cloud Tags</Title>
        <WrapText>
          <Text>beauty</Text>
          <Text>cute</Text>
          <Text>skin</Text>
          <Text>glow</Text>
          <Text>style</Text>
          <Text>clinic</Text>
          <Text>style</Text>
          <Text>great</Text>
          <Text>cute</Text>
        </WrapText>
      </Wrap>
    </>
  );
};

export default CloudTag;
