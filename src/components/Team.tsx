import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  useMediaQuery,
} from "@mui/material";
import { professionals } from "../services/api";

type ProfessionalProps = {
  name: string;
  crefito: number;
  description: string;
  photo: string
};

export const Team = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box sx={{height: '100vh', padding: 2, background: "#efefef" }}>
      <Typography
        align="center"
        fontWeight={"bold"}
        fontSize={isMobile ? 28 : 40}
        marginBottom={3}
      >
        Nossa equipe
      </Typography>
      <Grid
        container
        alignItems={"center"}
        justifyContent={"space-around"}
        wrap="wrap"
      >
        {professionals.map((professional: ProfessionalProps) => (
          <Card sx={{ width: 500, marginBottom: 2 }} key={professional.name}>
            <CardMedia
              className="shine"
              sx={{ height: 400, marginBottom: 2 }}
              image="images/exemplo.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {professional.name}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                Crefito: {professional.crefito}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {professional.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Box>
  );
};
