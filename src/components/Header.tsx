import { Box, Button, Grid, IconButton, useMediaQuery } from "@mui/material";
import {
  Instagram,
  Facebook,
  Twitter,
  Email,
  WhatsApp,
  YouTube,
} from "@mui/icons-material";
import { useState, useEffect } from "react";

export const Header = () => {
  const isMobile = useMediaQuery("(max-width:560px)");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      if (scrollTop > 220) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Grid
      position={"fixed"}
      container
      justifyContent={"space-around"}
      alignItems={"center"}
      height={120}
      className={isScrolled ? "dark-header" : "normal-header"}
    >
      <Grid
        item
        xs={9}
        container
        justifyContent={"space-evenly"}
        alignItems={"center"}
      >
        <Button
          sx={{
            color: isScrolled ? "#bcccb3" : "#3e4f35",
            fontWeight: "bold",
            fontSize: 17,
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.1)",
              color: isScrolled ? "#3e4f35" : "#bcccb3",
            },
            letterSpacing: 1,
          }}
        >
          Sobre a Bellevita
        </Button>
        <Button
          sx={{
            color: isScrolled ? "#bcccb3" : "#3e4f35",
            fontWeight: "bold",
            fontSize: 17,
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.1)",
              color: isScrolled ? "#3e4f35" : "#bcccb3",
            },
            letterSpacing: 1,
          }}
        >
          Nossa equipe
        </Button>
        <Button
          sx={{
            color: isScrolled ? "#bcccb3" : "#3e4f35",
            fontWeight: "bold",
            fontSize: 17,
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.1)",
              color: isScrolled ? "#3e4f35" : "#bcccb3",
            },
            letterSpacing: 1,
          }}
        >
          Especialidades
        </Button>
        <Button
          sx={{
            color: isScrolled ? "#bcccb3" : "#3e4f35",
            fontWeight: "bold",
            fontSize: 17,
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.1)",
              color: isScrolled ? "#3e4f35" : "#bcccb3",
            },
            letterSpacing: 1,
          }}
        >
          Contato
        </Button>
        <Button
          sx={{
            color: isScrolled ? "#bcccb3" : "#3e4f35",
            fontWeight: "bold",
            fontSize: 17,
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.1)",
              color: isScrolled ? "#3e4f35" : "#bcccb3",
            },
            letterSpacing: 1,
          }}
        >
          Localização
        </Button>
      </Grid>
      <Grid item>
        <IconButton>
          <Instagram
            id="header-icons"
            sx={{
              color: isScrolled ? "#bcccb3" : "#3e4f35",
              "&:hover": { color: isScrolled ? "#3e4f35" : "#bcccb3" },
            }}
          />
        </IconButton>
        <IconButton>
          <Facebook
            id="header-icons"
            sx={{
              color: isScrolled ? "#bcccb3" : "#3e4f35",
              "&:hover": { color: isScrolled ? "#3e4f35" : "#bcccb3" },
            }}
          />
        </IconButton>
        <IconButton>
          <Twitter
            id="header-icons"
            sx={{
              color: isScrolled ? "#bcccb3" : "#3e4f35",
              "&:hover": { color: isScrolled ? "#3e4f35" : "#bcccb3" },
            }}
          />
        </IconButton>
        <IconButton>
          <YouTube
            id="header-icons"
            sx={{
              color: isScrolled ? "#bcccb3" : "#3e4f35",
              "&:hover": { color: isScrolled ? "#3e4f35" : "#bcccb3" },
            }}
          />
        </IconButton>
        <IconButton>
          <Email
            id="header-icons"
            sx={{
              color: isScrolled ? "#bcccb3" : "#3e4f35",
              "&:hover": { color: isScrolled ? "#3e4f35" : "#bcccb3" },
            }}
          />
        </IconButton>
        <IconButton>
          <WhatsApp
            id="header-icons"
            sx={{
              color: isScrolled ? "#bcccb3" : "#3e4f35",
              "&:hover": { color: isScrolled ? "#3e4f35" : "#bcccb3" },
            }}
          />
        </IconButton>
      </Grid>
    </Grid>
  );
};
