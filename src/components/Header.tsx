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
      {isMobile ? (
        <img
          style={{ width: 100 }}
          src="../../public/images/logo-without-bg.png"
          alt=""
        />
      ) : (
        <Grid
          maxWidth={650}
          container
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Button>Equipe</Button>
          <Button>Especialidades</Button>
          <img
            style={{ width: 100 }}
            src="../../public/images/logo-without-bg.png"
            alt="Logo bellavite"
          />
          <Button>Contato</Button>
          <Button sx={{ fontFamily: "roboto important" }}>Localização</Button>
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
