import {
  Box,
  Button,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import {
  Instagram,
  Facebook,
  Twitter,
  Email,
  WhatsApp,
  YouTube,
} from "@mui/icons-material";

export const Header = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box height={"100vh"}>
      <Grid
        container
        direction={"column"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <img
          style={{
            width: "100%",
            height: isMobile ? "18%" : "100vh",
            filter: "blur(4px)",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
          alt=""
          src="../../public/images/testebg.jpg"
        />
        {isMobile ? (
          <img
            style={{ width: 100 }}
            src="..//images/logo-without-bg.png"
            alt=""
          />
        ) : (
          <Grid
            maxWidth={900}
            container
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            <Button
              sx={{
                fontSize: 15,
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              Equipe
            </Button>
            <Button
              sx={{
                fontSize: 15,
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              Especialidades
            </Button>
            <img
              style={{ width: 150 }}
              src="../images/logo-without-bg.png"
              alt="Logo bellavite"
            />
            <Button
              sx={{
                fontSize: 15,
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              Contato
            </Button>
            <Button
              sx={{
                fontSize: 15,
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              Localização
            </Button>
          </Grid>
        )}
        <Grid
          width={300}
          container
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <IconButton>
            <Instagram id="header-icons" color="primary" />
          </IconButton>
          <IconButton>
            <Facebook id="header-icons" color="primary" />
          </IconButton>
          <IconButton>
            <Twitter id="header-icons" color="primary" />
          </IconButton>
          <IconButton>
            <YouTube id="header-icons" color="primary" />
          </IconButton>
          <IconButton>
            <Email id="header-icons" color="primary" />
          </IconButton>
          <IconButton>
            <WhatsApp id="header-icons" color="primary" />
          </IconButton>
        </Grid>
        <Grid
          className={isMobile ? "" : "glass-effect  slide-from-left "}
          maxWidth={800}
          style={{
            position: isMobile ? "relative" : "absolute",
            top: isMobile ? 0 : 180,
            margin: isMobile ? 20 : 50,
            padding: isMobile ? 20 : 50,
          }}
        >
          <Typography align="center" fontSize={isMobile ? 20 : 50}>
            Clínica Bellevita
          </Typography>
          <Typography align="center" fontSize={isMobile ? 12 : 20}>
            Tratamentos exclusivos e eficazes. Nosso objetivo é ajudar você a
            alcançar o bem-estar usando as técnicas mais recentes combinadas com
            produtos naturais personalizados especialmente para você.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
