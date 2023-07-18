import React from "react";
import tw from "twin.macro";
import TitleCommon from "../../components/Common/TitleCommon";

import pro1 from "../../asset/prof1.png";
import pro2 from "../../asset/profess2.png";
import pro3 from "../../asset/profess3.png";
import social from "../../asset/SocialMedia.png";
import { styled } from "styled-components";

const WrapProfess = tw.div`mb-[150px] mt-[100px]`;
const WrapIn = tw.div` lg:flex gap-6 items-center mx-[150px] mt-[80px]`;
const WrapCardItem = tw.div`flex flex-col bg-inherit items-center`;
const WrapCardItem2 = tw.div`flex flex-col bg-white border-none rounded-[40px] items-center py-[50px] 
[box-shadow: 0px 25px 50px 25px #F6F7FF] `;
const ProImg = tw.img``;
const ProSocial = tw.img``;
const ProJob = styled.h5`
  color: #ff64ae;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 125%; /* 20px */
  margin-top: 40px;
`;
const ProName = styled.h2`
  color: #091156;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  line-height: 125%; /* 22.5px */
`;
const ProInf = tw.p`text-center mb-[50px] mt-[20px]`;

const Profess = () => {
  return (
    <WrapProfess>
      <TitleCommon
        h5TitleSub="Professional Teams"
        h2Title="The Professional expert"
        pTextChild="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
      ></TitleCommon>
      <WrapIn>
        <WrapCardItem>
          <ProImg src={pro1}></ProImg>
          <ProJob>Surgeon</ProJob>
          <ProName>Briyan Nevalli</ProName>
          <ProInf>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit
          </ProInf>
          <ProSocial src={social}></ProSocial>
        </WrapCardItem>
        <WrapCardItem2>
          <ProImg src={pro2}></ProImg>
          <ProJob>Surgeon</ProJob>
          <ProName>Briyan Nevalli</ProName>
          <ProInf>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit
          </ProInf>
          <ProSocial src={social}></ProSocial>
        </WrapCardItem2>
        <WrapCardItem>
          <ProImg src={pro3}></ProImg>
          <ProJob>Surgeon</ProJob>
          <ProName>Briyan Nevalli</ProName>
          <ProInf>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit
          </ProInf>
          <ProSocial src={social}></ProSocial>
        </WrapCardItem>
      </WrapIn>
    </WrapProfess>
  );
};

export default Profess;
