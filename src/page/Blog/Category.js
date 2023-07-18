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
const WrapText = tw.div``;
const Text = styled.p`
  color: #8b8b8b;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1.4px;
  margin-bottom: 3px ;
`;

const Category = () => {
  return (
    <Wrap>
      <Title>Categories</Title>
      <WrapText>
        <Text>Consultation</Text>
        <Text>Beauty</Text>
        <Text>Treatments</Text>
        <Text>News</Text>
      </WrapText>
    </Wrap>
  );
};

export default Category;
