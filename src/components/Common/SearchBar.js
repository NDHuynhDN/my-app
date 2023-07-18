import React from "react";
import { styled } from "styled-components";
import tw from "twin.macro";

import imgsearch from "../../asset/search.png";
import imgCall from "../../asset/Vector.svg";

const Search = styled.div`
  /* margin-top: 100px; */
  display: flex;
  /* width: 350px; */
  height: 65px;
`;
const Input = styled.input`
  border-radius: 50px 0px 0px 50px;
  box-shadow: -2px 4px 31px 9px #f2f4ff;
  border: none;
  flex-grow: 1;
  padding: 30px;
  /* border: 1px solid #d9ddfe; */
  background: #fff;
  &::placeholder {
    color: #c5c5c5;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 1.6px;
  }
`;
const BtnPhone = styled.button`
  flex-shrink: 0;
  border-radius: 0px 50px 50px 0px;
  width: 80px;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Img = tw.img`
`;

const SearchBar = ({ width, height, color = "#172176", placeholder, isCall }) => {
  return (
    <>
      <Search>
        <Input
          style={{ width: `${width}`, height: `${height}` }}
          placeholder={placeholder}
        ></Input>
        <BtnPhone style={{backgroundColor: `${color}`}}>
        {isCall 
        ? 
          <Img src={imgsearch} />        
        :
          <Img src={imgCall} />
        }  
        </BtnPhone>
      </Search>
    </>
  );
};

export default SearchBar;
