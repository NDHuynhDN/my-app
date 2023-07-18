import React from "react";
import tw from "twin.macro";
import Banner from "../../components/Banner/Banner";
import Information from "../../components/Information/Information";
import TitleCommon from "../../components/Common/TitleCommon";
import CardFHome from "./CardFHome";

import imgHome2 from "../../asset/Illustration-1.png";
import bg1Slide from "../../asset/Background1Slider.png";
import imgCard1 from "../../asset/icon-2.png";
import imgCard2 from "../../asset/icon-3.png";
import imgCard3 from "../../asset/icon-4.png";
import BannerFHome from "./BannerFHome";
import LatestNew from "./LatestNew";
import SearchBar from "../../components/Common/SearchBar";
import { styled } from "styled-components";

const Wrap = tw.div`flex flex-col lg:flex-row items-center justify-center gap-[66px] lg:mx-[260px] lg:mt-[70px] `;
const WrapF = tw.div`
flex items-center lg:my-[100px] gap-[90px]`;
const Title = tw.h2`lg:w-[400px]`;
const TextP = styled.p`
  color: #8b8b8b;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 1.6px;
  width: 390px;
`;
const WrapLeft = tw.div`ml-[150px]`;
const WrapRight = tw.div`mr-[150px]`;
const BlueText = styled.span`
  color: #091156;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1.6px;
`;
const FirstHome = () => {
  return (
    <>
      <Banner
        titleBanner="Your beauty center place"
        textBanner="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, massa pellentesque arcu fusce et magna consequat neque vitae lobortis."
        imgBgBanner={bg1Slide}
        height={"950px"}
        textBtnWatch="Tour Video"
        buttonText="More Detail"
      ></Banner>
      <br />
      <br />
      <br />
      <Information
        imgInfo={imgHome2}
        headInfo="About Us"
        titleInfo="We are the best beauty clinic"
        textInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat."
        textBtnInfo="Learn More"
        isReverse={false}
        maxTextWidth="430px"
      ></Information>

      <TitleCommon
        h5TitleSub="Main Services"
        h2Title="Our focus services"
        pTextChild="Lorem ipsum dolor sit amet."
      ></TitleCommon>
      <Wrap>
        <CardFHome
          isBorder={true}
          isFirstHome={true}
          imgCardHome={imgCard1}
          titleCardHome="Beauty consultation"
          textCardHome="Lorem ipsum dolor sit amet, consectetur adipiscing."
          widthH2="190px"
          widthP="190px"
        ></CardFHome>
        <CardFHome
          isBorder={true}
          isFirstHome={true}
          imgCardHome={imgCard2}
          titleCardHome="Beauty consultation"
          textCardHome="Lorem ipsum dolor sit amet, consectetur adipiscing."
          widthH2="190px"
          widthP="190px"
        ></CardFHome>
        <CardFHome
          isBorder={true}
          isFirstHome={true}
          imgCardHome={imgCard3}
          titleCardHome="Beauty consultation"
          textCardHome="Lorem ipsum dolor sit amet, consectetur adipiscing."
          widthH2="190px"
          widthP="190px"
        ></CardFHome>
      </Wrap>
      <BannerFHome></BannerFHome>
      <br />
      <br />
      <br />
      <TitleCommon
        h5TitleSub="The Blog"
        h2Title="Our latest news"
        pTextChild="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      ></TitleCommon>
      <LatestNew></LatestNew>

      <WrapF>
        <WrapLeft>
          <Title>Request call services</Title>
          <TextP>
            Lorem ipsum dolor sit amet, consect adipiscing elit
            <BlueText> Contact Us.</BlueText>
          </TextP>
        </WrapLeft>
        <WrapRight>
          <SearchBar
            isCall={true}
            width="500px"
            placeholder="Insert your phone number here ..."
            color="#ff64ae"
          ></SearchBar>
        </WrapRight>
      </WrapF>
    </>
  );
};

export default FirstHome;
