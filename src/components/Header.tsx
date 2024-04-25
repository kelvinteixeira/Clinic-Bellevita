import { Button, Grid, IconButton, useMediaQuery } from "@mui/material";
import {
  Instagram,
  Facebook,
  Twitter,
  Email,
  WhatsApp,
  YouTube,
} from "@mui/icons-material";

export const Header = () => {
  const isMobile = useMediaQuery("(max-width:500px)");

  return (
    <Grid
      container
      direction={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <img
        style={{
          width: "100%",
          height: isMobile ? "25%" : "100vh",
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
              fontWeight: "bold",
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
              fontWeight: "bold",
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
              fontWeight: "bold",
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
              fontWeight: "bold",
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
    </Grid>
  );
};
