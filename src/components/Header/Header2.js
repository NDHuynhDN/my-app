import React from "react";
import tw from "twin.macro";
import { NavLink } from "react-router-dom";

import hinh2 from "../../asset/WLogo.png";
import { styled } from "styled-components";

const NavItemData = [
  {
    id: 1,
    page: "Home",
    link: "/home",
  },

  {
    id: 2,
    page: "About",
    link: "/about",
  },
  {
    id: 3,
    page: "Service",
    link: "/service",
  },
  {
    id: 4,
    page: "Gallery",
    link: "/gallery",
  },
  {
    id: 5,
    page: "Blog",
    link: "/blog",
  },
];

const Header2 = () => {
  const Wrapper = tw.section`flex absolute h-[63px] left-[150px] right-[150px] gap-[190px] top-2`;
  const WrapImg = tw.img``;
  const WrapNav = tw.div`flex items-center gap-[45px] `;
  const ButtonContact = styled.a`
    display: block;
    padding: 14px 35px;
    border-radius: 50px;
    background: #ff64ae;
    flex-shrink: 0;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1.6px;
  `;

  return (
    <Wrapper>
      <a href="/">
        <WrapImg src={hinh2}></WrapImg>
      </a>
      <WrapNav>
        {NavItemData.map((item) => (
          <NavLink
            to={item.link}
            key={item.id}
            className={({ isActive }) =>
              isActive
                ? "text-[#ff64ae] text-[16px] tracking-wider font-medium"
                : "text-[#ffffff] text-[16px] font-medium tracking-wider"
            }
          >
            {item.page}
          </NavLink>
        ))}
        <ButtonContact href="/contact">Contact</ButtonContact>
      </WrapNav>
    </Wrapper>
  );
};

export default Header2;
