import React from "react";
import CardFHome from "./CardFHome";
import tw from "twin.macro";

import img1 from "../../asset/imgItem1.png";
import img2 from "../../asset/imgItem2.png";
import img3 from "../../asset/imgItem3.png";

const Wrap = tw.div`flex flex-col lg:flex-row items-center justify-center gap-[66px] lg:mx-[150px] lg:mt-[70px]`;
const WrapLatest = tw.div``;

const LatestNew = () => {
  return (
    <WrapLatest>
      <Wrap>
        <CardFHome
          imgChange={true}
          isBorder={false}
          isFirstHome={true}
          imgCardHome={img1}
          titleCardHome="How much does a consultation cost at our clinic?"
          textCardHome="A wonderful serenity has taken possession of my entire soul, like these sweet mornings ..."
          widthH2="300px"

        ></CardFHome>
        <CardFHome
          imgChange={true}
          isBorder={false}
          isFirstHome={true}
          imgCardHome={img2}
          titleCardHome="Watch out! don't choose the wrong beauty product"
          textCardHome="A wonderful serenity has taken possession of my entire soul, like these sweet mornings ..."
          widthH2="300px"
        ></CardFHome>
        <CardFHome
          imgChange={true}
          isBorder={false}
          isFirstHome={true}
          imgCardHome={img3}
          titleCardHome="About skin care you need to know"
          textCardHome="A wonderful serenity has taken possession of my entire soul, like these sweet mornings ..."
          widthH2="300px"
        ></CardFHome>
      </Wrap>
    </WrapLatest>
  );
};

export default LatestNew;
