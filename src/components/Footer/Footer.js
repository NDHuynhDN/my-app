import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import social5 from "../../asset/SocialMedia5.png";
import footerbg from "../../asset/BgFooter.png";
import Footerlogo from "../../asset/FooterLogo.png";

const WrapFooter = tw.div`
mt-[60px]`;

const FooterContainer = styled.footer``;

const Footerblock1 = styled.div`
  margin-top: 100px;
  display: flex;
  text-align: center;
  justify-content: center;
  gap: 150px;
  .footerlogo {
    margin-bottom: 30px;
  }
`;
const Footerblock2 = styled.div`
  margin-left: 160px;
  margin-top: 100px;
  display: flex;
  gap: 350px;
`;
const Footerbl = styled.div`
  font-style: itaLic;
  display: flex;
  gap: 15px;
  justify-content: space-between;
`;
const Box = styled.div`
  background-image: url(${footerbg});
  background-repeat: no-repeat;
  max-width: 1440px;
  height: 705px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Tagp1 = styled.p`
  color: #d7dbff;
  margin-left: 20px;
`;
const Tagp = styled.p`
  color: #d7dbff;
  margin-left: 20px;
`;
const Tagp2 = styled.p`
  font-style: itaLic;
  margin-top: 20px;
  color: #d7dbff;
  margin-left: 20px;
`;
const Taga = styled.a`
  color: #d7dbff;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 1.6px;
`;
const Box1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;
const Box2 = styled.ul`
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  list-style-type: none;
  .triangle::before {
    content: "> ";
    height: 0px;
    width: 0px;
  }
`;
const Li = styled.li`
  :before {
    content: "> ";
  }
`;
const LiT = styled.p`
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 1.8px;
  margin-bottom: 12px;
`;
const Box4 = styled.img``;
const Img = styled.img``;
const Box5 = styled.div``;

const Footer = () => {
  return (
    <WrapFooter>
      <FooterContainer>
        <Box>
          <Footerblock1>
            <Box1>
              <Img className="footerlogo" src={Footerlogo} />
              <Tagp1>
                <strong>Beautice</strong> is a Beauty CLinic WordPress Theme.
              </Tagp1>
              <Tagp2> Baker Steet 101, NY, United States.</Tagp2>
              <Footerbl>
                <Tagp>+521 569 8966. </Tagp>
                <Tagp> mail@company.com.</Tagp>
              </Footerbl>
            </Box1>
            <Box2>
              <LiT>Pages</LiT>
              <Li>
                <Taga>Home</Taga>
              </Li>
              <Li>
                <Taga>About</Taga>
              </Li>
              <Li>
                <Taga>Services</Taga>
              </Li>
              <Li>
                <Taga>Gallery</Taga>
              </Li>
              <Li>
                <Taga href="/team">Team</Taga>
              </Li>
            </Box2>
            <Box2>
              <LiT>Informations</LiT>
              <Li>
                <Taga>Terms & conditions</Taga>
              </Li>
              <Li>
                <Taga>Privacy poLicy</Taga>
              </Li>
              <Li>
                <Taga>Blog</Taga>
              </Li>
              <Li>
                <Taga>Contact</Taga>
              </Li>
            </Box2>
          </Footerblock1>
          <Footerblock2>
            <Box4 src={social5}></Box4>
            <Box5>
              <Tagp>© AltDesain Studio 2021 - All right reserved.</Tagp>
            </Box5>
          </Footerblock2>
        </Box>
      </FooterContainer>
    </WrapFooter>
  );
};

export default Footer;
