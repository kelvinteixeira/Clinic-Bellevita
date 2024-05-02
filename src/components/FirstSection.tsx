import { Grid, Typography, useMediaQuery } from "@mui/material";

export const FirstSection = () => {
  const isMobile = useMediaQuery("(max-width:430px)");
  const isTablet = useMediaQuery("(max-width:820px)");
  return (
    <Grid
      width={"100%"}
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
          align="center"
          className="glass-effect"
          fontSize={isMobile ? 15 : isTablet ? 20 : 30}
          sx={{
            letterSpacing: 5,
            animation: isMobile ? "" : "slideRight 1s forwards",
          }}
        >
          Fisioterapia dermatofuncional
        </Typography>
      </Grid>
    </Grid>
  );
};
