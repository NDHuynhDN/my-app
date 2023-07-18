import React from "react";
import TitleCommon from "../../components/Common/TitleCommon";
import CardItem from "../../components/Card/CardItem";
import tw from "twin.macro";
import CardFHome from "../FirstHome/CardFHome";

import sv1 from "../../asset/Animation1.png";
import sv2 from "../../asset/Animation2.png";
import sv3 from "../../asset/Animation3.png";

const Title1 = tw.h5``;
const Title2 = tw.h2`w-[450px] mx-auto`;
const Title3 = tw.p`w-[860px] mx-auto`;

const WrapService = tw.div`mt-[100px]`;
const WrapCard = tw.div`flex flex-col lg:flex-row gap-[55px] mx-[150px] mt-[80px]`;
const WrapText = tw.div`text-center`;
const HomeService = () => {
  return (
    <WrapService>
      <WrapText>
        <Title1>Main Services</Title1>
        <Title2>Learn services to focus on your beauty</Title2>
        <Title3>
          Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa.
          Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla
          turpis.
        </Title3>
      </WrapText>
      <WrapCard>
        <CardFHome
          isCenter={true}
          imgCardHome={sv1}
          titleCardHome="Beauty consultation"
          textCardHome="Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis."
        ></CardFHome>
        <CardFHome
          isCenter={true}
          imgCardHome={sv2}
          titleCardHome="Beauty consultation"
          textCardHome="Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis."
        ></CardFHome>
        <CardFHome
          isCenter={true}
          imgCardHome={sv3}
          titleCardHome="Beauty consultation"
          textCardHome="Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis."
        ></CardFHome>
      </WrapCard>
    </WrapService>
  );
};

export default HomeService;
