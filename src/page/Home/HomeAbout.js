import React from "react";
import styled from "styled-components";
import aboutImg from "../../asset/imgAbout.png";
import ImgBtn from "../../asset/PlayButon.png";

const MainContainer = styled.div`
margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
const MainText = styled.div`
  padding-left: 120px;
  display: flex;
  flex-direction: column;
`;
const HomeAboutTitle = styled.h5`
  text-align: left;
`;
const AboutTextSub = styled.h2`
  /* max-width: 450px; */
  text-align: left;
`;
const AboutTextInf = styled.p`
  /* max-width: 848px; */
  letter-spacing: 1.6px;
  text-align: left;
  margin-bottom: 30px;
  max-width: 480px;
`;
const MainImg = styled.div`
  /* flex: 1; */
  /* margin-top: 50px; */
`;

const Button = styled.button`
  line-height: 24px;
  /* margin-left: 0px; */
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
const ImgWatchBtn = styled.img``;
const ButtonGroup = styled.div`
  display: flex;
  /* justify-content: space-between; */
  gap: 40px;
  align-items: center;
`;
function HomeAbout() {
  return (
    <MainContainer>
      <MainText>
        <HomeAboutTitle>About Us</HomeAboutTitle>
        <AboutTextSub>We are the best beauty clinic</AboutTextSub>
        <AboutTextInf>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam
          suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc,
          ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse
          placerat. Id dui erat sed quam tellus in purus. Pellentesque congue
          fringilla cras tellus enim.
        </AboutTextInf>
        <ButtonGroup>
          <Button>More Detail</Button>
          <ImgWatchBtn src={ImgBtn}></ImgWatchBtn>
        </ButtonGroup>
      </MainText>
      <MainImg>
        <Image src={aboutImg} alt="Image" />
      </MainImg>
    </MainContainer>
  );
}

export default HomeAbout;
