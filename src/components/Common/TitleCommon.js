import React from "react";
import { styled } from "styled-components";
// import { styled } from "styled-components";
import tw from "twin.macro";

const Wrap = styled.div(({ isLeft }) => [tw`mx-[150px]`, isLeft ? tw`text-left mx-[150px]` : tw`text-center`]);

const TitleSub = tw.h5``;
const Title = tw.h2``;
const Text = tw.p``;

const TitleCommon = ({
  h5TitleSub,
  h2Title,
  pTextChild,
  maxh2Width,
  maxpWidth,
  isLeft,
}) => {
  return (
    <Wrap isLeft={isLeft}>
      <TitleSub>{h5TitleSub}</TitleSub>
      <Title
        style={{
          maxWidth: `${maxh2Width}`,
        }}
      >
        {h2Title}
      </Title>
      <Text
        style={{
          maxWidth: `${maxpWidth}`,
        }}
      >
        {pTextChild}
      </Text>
    </Wrap>
  );
};

export default TitleCommon;
