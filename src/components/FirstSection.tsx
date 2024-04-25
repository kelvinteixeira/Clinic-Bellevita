import { Box, Grid, Typography, useMediaQuery } from "@mui/material";

export const FirstSection = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Grid
      className={isMobile ? "" : "glass-effect  slide-from-left "}
      style={{
        position: isMobile ? "relative" : "absolute",
        top: isMobile ? 0 : 180,
        margin: isMobile ? 10 : 50,
      }}
    >
      <Typography align="center" fontSize={isMobile ? 25 : 60}>
        Clínica Bellevita
      </Typography>
      <Typography align="center" maxWidth={800} fontSize={isMobile ? 12 : 20}>
        Tratamentos exclusivos e eficazes. Nosso objetivo é ajudar você a
        alcançar o bem-estar usando as técnicas mais recentes combinadas com
        produtos naturais personalizados especialmente para você.
      </Typography>
    </Grid>
  );
};
