import {
  Button,
  Grid,
  IconButton,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import {
  Instagram,
  Email,
  WhatsApp,
  YouTube,
} from "@mui/icons-material";
import { Link } from "react-scroll";
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
      {isTablet ? null : (
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
              <Link
                to="about-bellevita"
                smooth={true}
                duration={500}
                offset={-50}
              >
                Sobre a Bellevita
              </Link>
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
              <Link to="team" smooth={true} duration={500} offset={-50}>
                Nossa equipe
              </Link>
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
              <Link to="specialties" smooth={true} duration={500} offset={-50}>
                Especialidades
              </Link>
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
              <Link to="localization" smooth={true} duration={500} offset={-50}>
                Localização
              </Link>
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
              <Link to="footer" smooth={true} duration={500} offset={-50}>
                Contato
              </Link>
            </Button>
          </Grid>
          <Grid item>
            <IconButton
              href="https://www.instagram.com/bellevitacg/"
              target="_blank"
              aria-label="instagram"
            >
              <Instagram
                sx={{
                  color: isScrolled ? "#bcccb3" : "#3e4f35",
                  "&:hover": { color: isScrolled ? "#3e4f35" : "#bcccb3" },
                }}
              />
            </IconButton>
            <IconButton>
              <Tooltip title="Em desenvolvimento">
                <YouTube
                  sx={{
                    color: isScrolled ? "#bcccb3" : "#3e4f35",
                    "&:hover": { color: isScrolled ? "#3e4f35" : "#bcccb3" },
                  }}
                />
              </Tooltip>
            </IconButton>
            <IconButton
              onClick={() =>
                window.open("mailto:barbosadesousadvogados@gmail.com")
              }
            >
              <Email
                sx={{
                  color: isScrolled ? "#bcccb3" : "#3e4f35",
                  "&:hover": { color: isScrolled ? "#3e4f35" : "#bcccb3" },
                }}
              />
            </IconButton>
            <IconButton
              href="https://www.instagram.com/bsadvogadoss/"
              target="_blank"
              aria-label="whatsapp"
            >
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
