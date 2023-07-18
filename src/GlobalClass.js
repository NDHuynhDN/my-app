import { css } from "styled-components";
export const GlobalClass = css`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
    padding: 0;
    font: inherit;
  }
  img,
  picture,
  svg,
  video {
    display: block;
    max-width: 100%;
  }
  input,
  select,
  textarea {
    background-color: transparent;
    outline: none;
  }

  /* cssss */
  body {
  }

  input,textarea {
    border-radius: 15px;
    border: 1px solid #d9ddfe;
    background: #fff;
    color: #c5c5c5;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 1.6px;
    padding: 18px;
  }

  button {
    max-width: 400px;
    color: #fff;
    background-color: #ff64ae;
    padding: 15px 40px;
    border-radius: 50px;
    background: #ff64ae;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1.6px;
    cursor: pointer;
    &:hover {
      background-color: #fcfcfc;
      color: #ff64ae;
    }
  }
  body {
    font-family: "Poppins";
  }
  a {
    text-decoration: none;
    color: #8b8b8b;
    font-weight: 500;
  }

  p {
    color: #8b8b8b;
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.6px;
  }
  span {
    color: #091156;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1.6px;
  }
  /* title-2-xanhdam */
  h2 {
    color: #091156;
    font-size: 36px;
    font-weight: 600;
    line-height: 45px;
    margin-bottom: 12px;
  }
  h1 {
    font-size: 48px;
    color: #091156;
    font-weight: 600;
  }
  h4 {
    color: #091156;
    text-align: center;
    font-family: Poppins;
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: 125%; /* 45px */
  }
  /* title-1-pink */
  h5 {
    color: #ff64ae;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    margin-bottom: 12px;
  }
  h6 {
    color: #091156;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 1.6px;
  }
`;
