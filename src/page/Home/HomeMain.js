// import React from 'react';
// import tw from 'twin.macro';

// const WrapMain = tw.div`

// `

// const HomeMain = () => {
//     return (
//         <WrapMain>

//         </WrapMain>
//     );
// };

// export default HomeMain;

import React from "react";
import styled from "styled-components";
import mainImg from "../../asset/Animation-1.png";

const MainContainer = styled.div`
  margin-top: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const MainText = styled.div`
  padding-left: 80px;
  display: flex;
  flex-direction: column;
`;

const MainImg = styled.div`
  /* flex: 1; */
  margin-top: 50px;
`;
const Title = styled.h3`
  color: #091156;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 125%;
  text-align: left;
  margin-bottom: 20px;
`;
const Text = styled.p`
  width: 474px;
  color: #091156;
  font-weight: 500;
  letter-spacing: 1.6px;
  text-align: left;
  margin-bottom: 30px;
`;
const Button = styled.button`
  line-height: 24px;
  max-width: 200px;
  /* margin-left: 0px; */
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

function HomeMain() {
  return (
    <MainContainer>
      <MainText>
        <Title>
          Clinic & beauty <br></br> consultant
        </Title>
        <Text>
          It is a long established fact that a reader will be by the readable
          content of a page.
        </Text>
        <Button>More Detail</Button>
      </MainText>
      <MainImg>
        <Image src={mainImg} alt="Image" />
      </MainImg>
    </MainContainer>
  );
}

export default HomeMain;
