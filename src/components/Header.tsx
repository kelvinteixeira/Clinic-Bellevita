import { Button, Grid, IconButton, useMediaQuery } from "@mui/material";
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
  const isMobile = useMediaQuery("(max-width:430px)");
  const isTablet = useMediaQuery("(max-width:820px)");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      if (scrollTop > 180) {
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
    <>
      {isTablet  ? null : (
        <Grid
          container
          position={"fixed"}
          justifyContent={"space-around"}
          alignItems={"center"}
          height={isMobile ? 50 : isTablet ? 75 : 80}
          className={isScrolled ? "dark-header" : "normal-header"}
        >
          <Grid>
            <Button
              sx={{
                color: isScrolled ? "#bcccb3" : "#3e4f35",
                fontWeight: "bold",
                fontSize: isTablet ? 14 : 15,
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                  color: isScrolled ? "#3e4f35" : "#bcccb3",
                },
              }}
            >
              Sobre a Bellevita
            </Button>
            <Button
              sx={{
                color: isScrolled ? "#bcccb3" : "#3e4f35",
                fontWeight: "bold",
                fontSize: isTablet ? 14 : 15,
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                  color: isScrolled ? "#3e4f35" : "#bcccb3",
                },
              }}
            >
              Nossa equipe
            </Button>
            <Button
              sx={{
                color: isScrolled ? "#bcccb3" : "#3e4f35",
                fontWeight: "bold",
                fontSize: isTablet ? 14 : 15,
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                  color: isScrolled ? "#3e4f35" : "#bcccb3",
                },
              }}
            >
              Especialidades
            </Button>
            <Button
              sx={{
                color: isScrolled ? "#bcccb3" : "#3e4f35",
                fontWeight: "bold",
                fontSize: isTablet ? 14 : 15,
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                  color: isScrolled ? "#3e4f35" : "#bcccb3",
                },
              }}
            >
              Contato
            </Button>
            <Button
              sx={{
                color: isScrolled ? "#bcccb3" : "#3e4f35",
                fontWeight: "bold",
                fontSize: isTablet ? 14 : 15,
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                  color: isScrolled ? "#3e4f35" : "#bcccb3",
                },
              }}
            >
              Localização
            </Button>
          </Grid>
          <Grid item>
            <IconButton>
              <Instagram
                sx={{
                  color: isScrolled ? "#bcccb3" : "#3e4f35",
                  "&:hover": { color: isScrolled ? "#3e4f35" : "#bcccb3" },
                }}
              />
            </IconButton>
            <IconButton>
              <Facebook
                sx={{
                  color: isScrolled ? "#bcccb3" : "#3e4f35",
                  "&:hover": { color: isScrolled ? "#3e4f35" : "#bcccb3" },
                }}
              />
            </IconButton>
            <IconButton>
              <Twitter
                sx={{
                  color: isScrolled ? "#bcccb3" : "#3e4f35",
                  "&:hover": { color: isScrolled ? "#3e4f35" : "#bcccb3" },
                }}
              />
            </IconButton>
            <IconButton>
              <YouTube
                sx={{
                  color: isScrolled ? "#bcccb3" : "#3e4f35",
                  "&:hover": { color: isScrolled ? "#3e4f35" : "#bcccb3" },
                }}
              />
            </IconButton>
            <IconButton>
              <Email
                sx={{
                  color: isScrolled ? "#bcccb3" : "#3e4f35",
                  "&:hover": { color: isScrolled ? "#3e4f35" : "#bcccb3" },
                }}
              />
            </IconButton>
            <IconButton>
              <WhatsApp
                sx={{
                  color: isScrolled ? "#bcccb3" : "#3e4f35",
                  "&:hover": { color: isScrolled ? "#3e4f35" : "#bcccb3" },
                }}
              />
            </IconButton>
          </Grid>
        </Grid>
      )}
    </>
  );
};
