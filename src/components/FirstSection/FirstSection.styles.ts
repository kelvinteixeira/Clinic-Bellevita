import { Typography, styled } from "@mui/material";

export const Title = styled(Typography)`
  font-size: 100px;
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    font-size: 80px;
  }
  @media only screen and (min-width: 688px) and (max-width: 768px) {
    font-size: 70px;
  }
  @media only screen and (min-width: 601px) and (max-width: 687px) {
    font-size: 60px;
  }
  @media only screen and (min-width: 524px) and (max-width: 600px) {
    font-size: 40px;
  }
  @media only screen and (min-width: 370px) and (max-width: 523px) {
    font-size: 33px;
  }
  @media only screen and (max-width: 320px) and (max-width: 369px) {
    font-size: 28px;
  }
`;
export const SubtTitle = styled(Typography)`
  /* font-size: 30px;
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    font-size: 26px;
  }
  @media only screen and (min-width: 688px) and (max-width: 768px) {
    font-size: 22px;
  }
  @media only screen and (min-width: 585px) and (max-width: 687px) {
    font-size: 17px;
  }
  @media only screen and (min-width: 321px) and (max-width: 584px) {
    font-size: 10px;
  }
  @media only screen and (max-width: 370px) {
    font-size: 10px;
  } */
`;
