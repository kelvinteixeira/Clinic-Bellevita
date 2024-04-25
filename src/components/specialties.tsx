import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Container, Grid, useMediaQuery } from "@mui/material";
import { services } from "../services/api";

type ServiceProps = {
  title: string;
  image: string;
  description: string;
};

export const Specialties = () => {
  const isMobile = useMediaQuery("(max-width:500px)");

  return (
    <Box
      sx={{
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          width: "100%",
          height: "100%",
          background: "linear-gradient(to top, #fff, #fff)",
          filter: "blur(10px)",
          zIndex: -1,
        },
      }}
    >
      <Container>
        <Typography align="center" fontSize={isMobile ? 25 : 40}>
          Nossas especialidades
        </Typography>
        <Grid container wrap="wrap" justifyContent={"space-evenly"}>
          {services.map((service: ServiceProps) => (
            <Card
              sx={{
                width: 250,
                borderRadius: 10,
                marginBottom: 3,
                marginTop: 1,
                background: "#BECEB4",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <CardHeader title={service.title} />
              <CardMedia
                component="img"
                height="150"
                image={service.image}
                alt="foto do serviço"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
