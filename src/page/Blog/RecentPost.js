import React from "react";
import Information from "../../components/Information/Information";

import post1 from "../../asset/recentP1.png";
import post2 from "../../asset/recentP2.png";
import post3 from "../../asset/recentP3.png";
import tw from "twin.macro";
import { styled } from "styled-components";

const Wrap = styled.div`
  border-radius: 50px;
  box-shadow: -2px 4px 31px 9px #f2f4ff;
  padding: 60px 30px 63px 50px;
  margin-top: 76px;
`;

const WrapText = tw.div`
flex flex-col`;
const WrapPost = tw.div`flex items-center gap-[26px] mb-[20px]`;
const ImgPost = styled.img``;
const TitlePost = styled.h5`
  color: #ff64ae;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1.4px;
`;
const TextPost = styled.p`
  color: #8b8b8b;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 1.2px;
`;
const Title = styled.h2`
  color: #091156;
  font-size: 16px;
  font-weight: 600;
  line-height: 125%; /* 20px */
`;

const RecentPost = () => {
  return (
    <Wrap>
      <Title>Recent Posts</Title>
      <WrapPost>
        <ImgPost src={post1}></ImgPost>
        <WrapText>
          <TitlePost>01 jan 2021</TitlePost>
          <TextPost>
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </TextPost>
        </WrapText>
      </WrapPost>
      <WrapPost>
        <ImgPost src={post2}></ImgPost>
        <WrapText>
          <TitlePost>01 jan 2021</TitlePost>
          <TextPost>
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </TextPost>
        </WrapText>
      </WrapPost>
      <WrapPost>
        <ImgPost src={post3}></ImgPost>
        <WrapText>
          <TitlePost>01 jan 2021</TitlePost>
          <TextPost>
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </TextPost>
        </WrapText>
      </WrapPost>
    </Wrap>
  );
};

export default RecentPost;
