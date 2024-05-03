import { Grid, Typography, useMediaQuery } from "@mui/material";

export const Localization = () => {
  const isMobile = useMediaQuery("(max-width:430px)");
  const isTablet = useMediaQuery("(max-width:820px)");
  return (
    <Grid
      height={isMobile || isTablet ? "70vh" : "100vh"}
      padding={2}
      sx={{ padding: 2, background: "#efefef" }}
    >
      <Typography
        color={"secondary"}
        align="center"
        fontSize={isMobile ? 28 : isTablet ? 50 : 60}
        marginTop={2}
      >
        Localização
      </Typography>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.1681446605767!2d-35.895092326324644!3d-7.221653492784232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ac1ff452032dab%3A0x558fdc60565612dc!2sCoworking%20Buriti%20-%20R.%20Siqueira%20Campos%2C%20306%20-%20S%C3%A3o%20Jos%C3%A9%2C%20Campina%20Grande%20-%20PB%2C%2058400-453!5e0!3m2!1spt-BR!2sbr!4v1714566181320!5m2!1spt-BR!2sbr"
        style={{ border: 0, width: "100%", height: 450 }}
        loading="lazy"
      ></iframe>
    </Grid>
  );
};
