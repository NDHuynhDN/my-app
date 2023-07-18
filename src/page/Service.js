import React from "react";
import tw from "twin.macro";

import Information from "../components/Information/Information";
import TitleCommon from "../components/Common/TitleCommon";
import Banner from "../components/Banner/Banner";

import hinh1 from "../asset/service1.png";
import hinh2 from "../asset/service2.png";
import hinh3 from "../asset/service3.png";
import hinh4 from "../asset/service4.png";
import hinh5 from "../asset/svInfo1.png";
import hinh6 from "../asset/svInfo2.png";
import hinh7 from "../asset/svInfo3.png";
import bnService from "../asset/BannerService.png";
import Collapse from "../components/Common/Collapse";

// tw + styled
const WrapSerive = tw.div`
mt-[230px]`;
const Wrap = tw.div`
flex flex-col gap-y-[68px] mx-[150px] mt-[70px] mb-[140px] justify-center items-center
`;
const WrapT = tw.div`
flex gap-[84px]
`;
const WrapB = tw.div`
flex gap-[84px]
`;
const GridItem1 = tw.img``;
const GridItem2 = tw.img``;
const GridItem3 = tw.img``;
const GridItem4 = tw.img``;

const Service = () => {
  return (
    <WrapSerive>
      <TitleCommon
        h5TitleSub="Our Services"
        h2Title="We focus on your beauty"
        pTextChild="Lorem ipsum dolor sit amet"
      ></TitleCommon>
      <Wrap>
        <WrapT>
          <GridItem1 src={hinh1}></GridItem1>
          <GridItem2 src={hinh2}></GridItem2>
        </WrapT>
        <WrapB>
          <GridItem3 src={hinh3}></GridItem3>
          <GridItem4 src={hinh4}></GridItem4>
        </WrapB>
      </Wrap>
      <Information
        imgInfo={hinh5}
        headInfo="Beauty Consultation"
        titleInfo="We services beauty consultation"
        textInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero."
        isChange={true}
        maxTextWidth="500px"
      ></Information>
      <Information
        imgInfo={hinh6}
        headInfo="Skin Treatements"
        titleInfo="Skin care and treatment by expert"
        textInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero."
        maxTextWidth="500px"
        isReverse={true}
        isChange={true}
      ></Information>
      <Information
        imgInfo={hinh7}
        headInfo="Beauty Product"
        titleInfo="We present quality beauty products"
        textInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero."
        textIcon=">>"
        maxTextWidth="500px"
        isChange={true}
      ></Information>
      <Banner
        titleBanner="Your beauty center place"
        textBanner="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, massa pellentesque arcu fusce et magna consequat neque vitae lobortis."
        imgBgBanner={bnService}
        height={"550px"}
        textBtnWatch="Tour Video"
        buttonText="More Detail"
        // isShow="true"
        isHidden="true"
      ></Banner>
      <Collapse></Collapse>
    </WrapSerive>
  );
};

export default Service;
