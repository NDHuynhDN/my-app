import React, { useState } from "react";
import tw from "twin.macro";
import arrowDown from "../../asset/angle-down.svg";
import arrowUp from "../../asset/angle-up.svg";
import { styled } from "styled-components";
const data = [
  {
    title: "Is beauty consultation handled thoroughly?",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna.\n
    porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla`,
  },
  {
    title: "Can I be beautiful in an instant time?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla",
  },
  {
    title:
      "Are there any side effects to the treatment methods or treatments at this clinic?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla",
  },
  {
    title: "Do professionals have accreditation in their respective fields?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla",
  },
];
const Content = tw.div`
w-[1050px] mx-[150px]`;

const Line = tw.div`
flex mx-auto mt-2 w-[40px] h-[8px] rounded-2xl bg-[#ff64ae]`;
const WrapCollap = tw.div`mt-[40px] `;
const Title = tw.h4`
 relative
`;
const Wrap = tw.div`
mb-8
`;
const WrapLine = tw.div`
flex gap-[10px]`;
const ItemTitle = tw.h6`ml-5`;
const ArrowDown = tw.img`ml-auto`;
const ItemContent = tw.p`
italic 
border-t-4
bg-[#F6F7FF]
p-10
mt-2`;

const Collapse = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [src, setSrc] = useState(arrowDown);

  // Function to toggle the active panel
  const togglePanel = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
    setSrc(index === activeIndex ? arrowDown : arrowUp);
  };

  return (
    <Content>
      <Title>Services FAQ’s</Title>
      <Line></Line>
      <WrapCollap>
        {data.map((item, index) => (
          <Wrap key={index}>
            <WrapLine onClick={() => togglePanel(index)}>
              <ItemTitle>{item.title}</ItemTitle>
              <ArrowDown src={src}></ArrowDown>
            </WrapLine>
            {activeIndex === index && <ItemContent>{item.content}</ItemContent>}
          </Wrap>
        ))}
      </WrapCollap>
    </Content>
  );
};

export default Collapse;
