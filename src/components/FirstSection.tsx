import { Box, Grid, Typography, useMediaQuery } from "@mui/material";

export const FirstSection = () => {
  const isMobile = useMediaQuery("(max-width:560px)");

  return (
    <Box
      height={isMobile ? "" : "100vh"}
      sx={{
        backgroundColor: "#78986630",
      }}
    >
      <img
        style={{
          width: "100%",
          height: isMobile ? "20vh" : "100vh",
          objectFit: "cover",
          position: "absolute",
          filter: "blur(5px)",
          top: 0,
          left: 0,
          zIndex: -1,
          content: "",
        }}
        alt=""
        src="../../public/images/bg1.jpg"
      />
      <Grid
        style={{
          position: isMobile ? "relative" : "absolute",
          top: isMobile ? 0 : 180,
          margin: isMobile ? 15 : 50,
          padding: 15,
        }}
      >
        <Typography
          className={isMobile ? "" : " typing-animation "}
          align="center"
          fontSize={isMobile ? 28 : 120}
          color={"secondary"}
        >
          Clínica Bellevita
        </Typography>
        <Typography
          color={"secondary"}
          fontWeight={"bold"}
          className="glass-effect  slide-from-left"
          align="center"
          fontSize={isMobile ? 13 : 40}
          sx={{ letterSpacing: 5 }}
        >
          Fisioterapia dermatofuncional
          {/* Tratamentos exclusivos e eficazes. Nosso objetivo é ajudar você a
            alcançar o bem-estar usando as técnicas mais recentes combinadas com
            produtos naturais personalizados especialmente para você. */}
        </Typography>
      </Grid>
    </Box>
  );
};
