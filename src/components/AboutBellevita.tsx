import {
  Card,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";

export const AboutBellevita = () => {
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
    <Grid
      padding={2}
      sx={{ background: "linear-gradient(to top, #7898664f, #e0dddd)" }}
    >
      <Grid container spacing={2} justifyContent={"center"} alignItems={'center'}>
        {isMobile || isTablet ? (
          <Typography
            fontSize={isMobile ? 28 : isTablet ? 60 : ""}
            variant="h3"
            align="center"
          >
            Sobre a Bellevita
          </Typography>
        ) : null}
        <Grid item xs={isMobile ? 11 : 6}>
          <Card>
            <CardMedia
              sx={{
                height: isMobile ? 200 : isTablet ? 300 : 450,
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
              image="images/equipe.jpg"
              title="green iguana"
            />
          </Card>
        </Grid>
        <Grid item xs={isMobile ? 11 : isTablet ? 6 : 6}>
          <Grid sx={{ overflow: "hidden", textOverflow: "ellipsis" }}>
            {!isMobile && !isTablet ? (
              <Typography
                variant="h3"
                align="center"
                className={isScrolled ? "slide-from-right" : ""}
                sx={{
                  display: isScrolled ? "block" : "none",
                  animation: "slideLeft 1s forwards",
                }}
                color={"secondary"}
                marginTop={2}
              >
                Sobre a Bellevita
              </Typography>
            ) : null}
            <Typography
              variant={isMobile || isTablet ? "body2" : "body1"}
              color={"secondary"}
              marginBottom={isTablet || isMobile ? 1 : 3}
              className={
                isScrolled || isMobile || isTablet ? "" : "slide-from-right"
              }
              sx={{
                display: isScrolled || isMobile || isTablet ? "block" : "none",
                animation:
                  isMobile || isTablet ? "" : "slideLeft 1.5s forwards",
              }}
            >
              Localizada em um oásis urbano, a clínica de fisioterapia dermatofuncional Bellevita é um refúgio para quem busca harmonia entre saúde e beleza. Seu ambiente acolhedor convida à jornada de autocuidado, com tons suaves e detalhes elegantes.
            </Typography>
            <Typography
              color={"secondary"}
              variant={isMobile || isTablet ? "body2" : "body1"}
              marginBottom={isTablet || isMobile ? 1 : 3}
              className={
                isScrolled || isMobile || isTablet ? "" : "slide-from-right"
              }
              sx={{
                display: isScrolled || isMobile || isTablet ? "block" : "none",
                animation: isMobile || isTablet ? "" : "slideLeft 2s forwards",
              }}
            >
              Com uma equipe dedicada de fisioterapeutas especializados, a Bellevita oferece uma variedade de tratamentos personalizados para cuidar da pele e promover o bem-estar físico. Cada serviço é projetado para realçar a beleza natural e restaurar a confiança dos pacientes.
            </Typography>
            <Typography
              color={"secondary"}
              variant={isMobile || isTablet ? "body2" : "body1"}
              marginBottom={isTablet || isMobile ? 1 : 3}
              className={
                isScrolled || isMobile || isTablet ? "" : "slide-from-right"
              }
              sx={{
                display: isScrolled || isMobile || isTablet ? "block" : "none",
                animation:
                  isMobile || isTablet ? "" : "slideLeft 2.5s forwards",
              }}
            >
             Na Bellevita, a excelência clínica se une a uma abordagem holística, considerando não apenas a superfície da pele, mas também o equilíbrio interno do corpo. Os profissionais realizam uma avaliação minuciosa.
            </Typography>
            <Typography
              color={"secondary"}
              variant={isMobile || isTablet ? "body2" : "body1"}
              marginBottom={isTablet || isMobile ? 1 : 3}
              className={
                isScrolled || isMobile || isTablet ? "" : "slide-from-right"
              }
              sx={{
                display: isScrolled || isMobile || isTablet ? "block" : "none",
                animation: isMobile || isTablet ? "" : "slideLeft 3s forwards",
              }}
            >
              Mais do que uma clínica de tratamento, a Bellevita é um espaço de rejuvenescimento e renovação, integrando técnicas inovadoras para maximizar os benefícios para a pele e o corpo. Proporcionando uma experiência excepcional de relaxamento e revitalização.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
