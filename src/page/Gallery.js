import React from "react";
import BannerSub from "../components/Banner/BannerSub";
import galleryImg from "../asset/BannerGallery.png";
import tw from "twin.macro";

import a1 from "../asset/a1.png";
import a2 from "../asset/a2.png";
import a3 from "../asset/a3.png";
import a4 from "../asset/a4.png";
import a5 from "../asset/a5.png";
import a6 from "../asset/a6.png";
import a7 from "../asset/a7.png";
import a8 from "../asset/a8.png";
import a9 from "../asset/a9.png";
import bannerGallery from "../asset/BannerGallery.png";
import imgWatch from "../asset/Group4.png";
import { styled } from "styled-components";

const ImgArray = [a1, a2, a3, a4, a5, a6, a7, a8, a9];

const Wrap = tw.div`mt-[230px]`;

const WrapF1 = tw.div`
flex items-center mx-[150px] mb-[75px] gap-5`;

const WrapF = tw.div`
flex items-center mx-[150px] mb-[75px] `;

const TitleSubGallery = tw.h5``;
const TitleGallery = styled.h2`
  color: #091156;
  font-size: 36px;
  font-weight: 600;
  line-height: 125%; /* 45px */
  width: 620px;
`;
const WrapLeft = tw.div`
flex-col items-center`;
const WrapRight = tw.p`mt-5 w-[400px] `;
const GridItem = tw.img``;
const WrapGrid = tw.div`
 grid grid-cols-3 grid-rows-3 mx-[150px] gap-y-[38px] gap-x-[36px] mb-[120px]
`;
const WrapS = tw.p`
mx-[150px] w-[660px] mt-[-25px] mb-[126px]`;

const StyleText = tw.span``;

const ButtonMake = tw.button`lg:ml-[100px]`;

const WrapBanner = tw.div`flex flex-col gap-2 items-center justify-center h-[700px]`;

const TitleBanner = tw.h4`text-[#FFFFFF] font-semibold text-4xl mb-3 w-[600px] text-center`;

const TextBanner = tw.p`
w-[650px] text-center`;

const ButtonWatch = tw.img`
`;

const Gallery = () => {
  return (
    <Wrap>
      <WrapF1>
        <WrapLeft>
          <TitleSubGallery>Our Gallery</TitleSubGallery>
          <TitleGallery>
            Check out the collection pictures from our clinic
          </TitleGallery>
        </WrapLeft>
        <WrapRight>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis
        </WrapRight>
      </WrapF1>

      <WrapGrid>
        {ImgArray.map((img, index) => (
          <GridItem key={index} src={img}></GridItem>
        ))}
      </WrapGrid>
      <WrapS>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
        rhoncus dolor purus non enim <StyleText>our teams.</StyleText>
      </WrapS>

      <WrapBanner
        style={{
          backgroundImage: `url(${bannerGallery})`,
          backgroundRepeat: "no-repeat",
          //   height: `${height}`,
        }}
      >
        <TitleBanner>Watch the video tour</TitleBanner>
        <TextBanner>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis
        </TextBanner>
        <ButtonWatch src={imgWatch}></ButtonWatch>
      </WrapBanner>
      <WrapF>
        <WrapLeft>
          <TitleSubGallery>Get The Quota</TitleSubGallery>
          <TitleGallery>
            Want to be handled by our professional team immediately?
          </TitleGallery>
          <TextBanner style={{ textAlign: "left", width: "550px" }}>
            Id dui erat sed quam tellus in purus. Pellentesque congue fringilla
            cras tellus enim.
          </TextBanner>
        </WrapLeft>
        <WrapRight>
          <ButtonMake>Make an Appointment</ButtonMake>
        </WrapRight>
      </WrapF>
    </Wrap>
  );
};

export default Gallery;
