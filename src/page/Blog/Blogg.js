import React from "react";
import tw from "twin.macro";

import bannerImg from "../../asset/bannerBlog.png";
import { styled } from "styled-components";

import CardItem from "../../components/Card/CardItem";
import folder from "../../asset/folder.png";

import imgItem1 from "../../asset/imgItem1.png";
import imgItem2 from "../../asset/imgItem2.png";
import imgItem3 from "../../asset/imgItem3.png";
import SearchBar from "../../components/Common/SearchBar";
import RecentPost from "./RecentPost";
import Category from "./Category";
import CloudTag from "./CloudTag";
import Social from "./Social";

const WrapBlog = tw.div`lg:mt-[140px]`;
const BannerWrap = tw.div`flex items-center justify-between`;
const BannerWrapTextL = styled.p`
  color: #fff;
  font-size: 36px;
  font-weight: 600;
  margin-left: 150px;
`;
const BannerWrapTextR = styled.p`
  color: #d9d9d9;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 1.6px;
  margin-right: 150px;
`;
const Wrap = tw.div`flex mx-[150px] gap-10`;
const Wraph5 = tw.div`flex gap-3 items-center`;
const Text = tw.h4`text-[#ff64ae] text-[16px]`;

const WrapL = tw.div`w-[730px]`;
const WrapR = tw.div`w-[350px] mt-[100px]`;
const Pagination = tw.div`flex items-center justify-center gap-7 mt-[30px]`;

const PageItem1 = tw.div`flex items-center justify-center bg-[#172176] w-[50px] h-[50px] overflow-hidden rounded-full text-[#ffffff] shadow-lg`;
const PageItem = tw.div`text-[#C7C7C7] shadow-sm`;

const Blogg = () => {
  return (
    <WrapBlog>
      <BannerWrap
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundRepeat: "no-repeat",
          height: "300px",
        }}
      >
        <BannerWrapTextL>Blog</BannerWrapTextL>
        <BannerWrapTextR>Home • Blog</BannerWrapTextR>
      </BannerWrap>
      <Wrap>
        <WrapL>
          <CardItem
            imgItem={imgItem1}
            itemH5text={
              <Wraph5>
                <img src={folder} alt="" />
                <Text>Consultation</Text>
              </Wraph5>
            }
            itemh2text="How much does a consultation cost at our clinic?"
            itemPtext="A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…"
            maxWidth2={"600px"}
            maxWidthp={"600px"}
          ></CardItem>
          <CardItem
            imgItem={imgItem2}
            itemH5text={
              <Wraph5>
                <img src={folder} alt="" />
                <Text>Beauty</Text>
              </Wraph5>
            }
            itemh2text="Watch out! don't choose the wrong beauty product"
            itemPtext="A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…"
            maxWidth2={"600px"}
            maxWidthp={"600px"}
          ></CardItem>
          <CardItem
            imgItem={imgItem3}
            itemH5text={
              <Wraph5>
                <img src={folder} alt="" />
                <Text>Treatments</Text>
              </Wraph5>
            }
            itemh2text="About skin care you need to know"
            itemPtext="A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…"
            maxWidth2={"600px"}
            maxWidthp={"600px"}
          ></CardItem>
        </WrapL>
        <WrapR>
          <SearchBar placeholder="Search here ..."></SearchBar>
          <RecentPost></RecentPost>
          <Category></Category>
          <CloudTag></CloudTag>
          <Social></Social>
        </WrapR>
      </Wrap>
      <Pagination>
        <PageItem1>1</PageItem1>
        <PageItem>2</PageItem>
        <PageItem>3</PageItem>
      </Pagination>
    </WrapBlog>
  );
};

export default Blogg;
