import React from "react";
import tw from "twin.macro";
import { styled } from "styled-components";

import imgArrow from "../../asset/caret-right.png";

const Wrap = styled.div`
  display: flex;
  margin-top: 100px;
  flex-direction: column;
  overflow: hidden;
`;
const WrapIn = styled.div`
  /* box-shadow: 10px 13px 80px 14px #f2f4ff; */
  box-shadow: -2px 4px 31px 9px #f2f4ff;
  border-radius: 0px 0px 50px 50px;
  background: #fff;
  padding: 56px 0 100px 46px;
  margin-bottom: 60px;
`;
const ImgItem = styled.img`
  box-shadow: 10px 13px 80px 14px #f2f4ff;
`;
const ItemTitleSub = tw.h5`
`;
const ItemTitle = tw.h2``;
const ItemText = tw.p`
`;
const ButtonItem = tw.button`max-w-[250px] flex gap-2 items-center mt-5`;
const ImgArrow = tw.img``;
const Text = tw.h4`text-[16px] text-[#fff]`;

const CardItem = ({
  itemH5text,
  itemh2text,
  itemPtext,
  imgItem,
  maxWidth2,
  maxWidthp,
}) => {
  return (
    <>
      <Wrap>
        <ImgItem src={imgItem}></ImgItem>
        <WrapIn>
          <ItemTitleSub>{itemH5text}</ItemTitleSub>
          <ItemTitle style={{ maxWidth: `${maxWidth2}` }}>
            {itemh2text}
          </ItemTitle>
          <ItemText style={{ maxWidth: `${maxWidthp}` }}>{itemPtext}</ItemText>
          <ButtonItem>
            <Text>Read More</Text>
            <ImgArrow src={imgArrow}></ImgArrow>
          </ButtonItem>
        </WrapIn>
      </Wrap>
    </>
  );
};

export default CardItem;
