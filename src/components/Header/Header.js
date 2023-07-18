import React from "react";
import tw from "twin.macro";
import { NavLink } from "react-router-dom";

import hinh1 from "../../asset/Logo.png";
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

const Header = () => {
  const WrapImg = tw.a``;
  const Wrapper = tw.section`flex absolute justify-between h-[63px] left-[150px] right-[150px] gap-[100px] top-2`;
  const Img = tw.img`h-full`;
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
      <WrapImg href="/">
        <Img src={hinh1} />
      </WrapImg>
      <WrapNav>
        {NavItemData.map((item) => (
          <NavLink
            to={item.link}
            key={item.id}
            className={({ isActive }) =>
              isActive
                ? "text-[#414880] text-[16px] tracking-wider font-medium"
                : "text-[#8b8b8b] text-[16px] font-medium tracking-wider"
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

export default Header;
