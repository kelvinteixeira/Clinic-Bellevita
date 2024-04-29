import { Grid, Typography, useMediaQuery } from "@mui/material";

export const FirstSection = () => {
  const isMobile = useMediaQuery("(max-width:430px)");
  const isTablet = useMediaQuery("(max-width:820px)");
  return (
    <Grid
      height={isMobile ? "15vh" : isTablet ? "40vh" : "100vh"}
      sx={{
        backgroundColor: "#78986630",
      }}
    >
      <img
        style={{
          width: "100%",
          height: isMobile ? "15vh" : isTablet ? "40vh" : "100vh",
          objectFit: "cover",
          position: "absolute",
          filter: "blur(5px)",
          top: 0,
          left: 0,
          zIndex: -1,
          content: "",
        }}
        alt=""
        src="../images/bg1.jpg"
      />
      <Grid
        style={{
          position: isMobile ? "relative" : "absolute",
          top: isMobile ? 0 : isTablet ? 50 : 120,
          margin: isMobile ? 15 : 50,
          padding: 10,
        }}
      >
        <Typography
          className={isMobile ? "" : " typing-animation "}
          fontSize={isMobile ? 30 : isTablet ? 65 : 90}
          align="center"
          color={"secondary"}
        >
          Clínica Bellevita
        </Typography>
        <Typography
          color={"secondary"}
          fontWeight={"bold"}
          className={isMobile ? "glass-effect" : "glass-effect slide-from-left"}
          align="center"
          fontSize={isMobile ? 15 : isTablet ? 20 : 30}
          sx={{ letterSpacing: 5 }}
        >
          Fisioterapia dermatofuncional
          {/* Tratamentos exclusivos e eficazes. Nosso objetivo é ajudar você a
            alcançar o bem-estar usando as técnicas mais recentes combinadas com
            produtos naturais personalizados especialmente para você. */}
        </Typography>
      </Grid>
    </Grid>
  );
};
