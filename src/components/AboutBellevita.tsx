import {
  Card,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";

export const AboutBellevita = () => {
  const isMobile = useMediaQuery("(max-width:430px)");
  const isTablet = useMediaQuery("(max-width:820px)");
  return (
    <Grid
      padding={2}
      sx={{ background: "linear-gradient(to top, #7898664f, #e0dddd)" }}
    >
      <Grid container spacing={2} justifyContent={"center"}>
        {isMobile || isTablet ? (
          <Typography
            fontSize={isMobile ? 28 : isTablet ? 60 : ""}
            variant="h3"
            align="center"
            gutterBottom
          >
            Sobre a Bellevita
          </Typography>
        ) : null}
        <Grid item xs={isMobile ? 11 : 6}>
          <Card>
            <CardMedia
              sx={{
                height: isMobile ? 200 : isTablet ? 300 : 450,
              }}
              image="images/equipe.jpg"
              title="green iguana"
            />
          </Card>
        </Grid>
        <Grid item xs={isMobile ? 11 : isTablet ? 6 : 6}>
          <Grid sx={{ overflow: "hidden", textOverflow: "ellipsis" }}>
            {!isMobile && !isTablet ? (
              <Typography variant="h3" align="center" gutterBottom>
                Sobre a Bellevita
              </Typography>
            ) : null}
            <Typography
              variant={isMobile || isTablet ? "body2" : "body1"}
              marginBottom={isTablet || isMobile ? 1 : 3}
            >
              Somos um Centro Integrado que atende todas as áreas da
              fisioterapia. Trabalhamos com equipe multiprofissional composta
              por médicos, nutricionistas, psicólogos, psicopedagogos,
              educadores físicos, terapeutas ocupacionais e fonoaudiólogos.
            </Typography>
            <Typography
              variant={isMobile || isTablet ? "body2" : "body1"}
              marginBottom={isTablet || isMobile ? 1 : 3}
            >
              Em 2011, nascemos através do sonho do fisioterapeuta Erivan Ângelo
              Pereira. Desde a fundação, já atendemos mais de 6 mil pacientes,
              entre crianças, adolescentes, adultos e idosos.
            </Typography>
            <Typography
              variant={isMobile || isTablet ? "body2" : "body1"}
              marginBottom={isTablet || isMobile ? 1 : 3}
            >
              O Setor de Dermatofuncional, pioneiro na nossa construção, foi um
              sucesso: em apenas 6 meses passamos a ser referência em
              tratamentos estéticos em Campina Grande.
            </Typography>
            <Typography
              variant={isMobile || isTablet ? "body2" : "body1"}
              marginBottom={isTablet || isMobile ? 1 : 3}
            >
              Em 2013, unificamos nossas unidades em um espaço maior e mais
              confortável, e hoje estamos entre os mais bem conceituados centros
              de fisioterapia do mercado. Temos o reconhecimento de nossos
              clientes e planos de saúde parceiros.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
