import {
  Box,
  Typography,
  Card,
  CardMedia,
  Grid,
  useMediaQuery,
} from "@mui/material";
import { professionals } from "../services/api";

type ProfessionalProps = {
  name: string;
  crefito: number;
  description: string;
  photo: string;
};

export const Team = () => {
  const isMobile = useMediaQuery("(max-width:430px)");
  const isTablet = useMediaQuery("(max-width:820px)");

  return (
    <Box sx={{ padding: 2, background: "#efefef" }}>
      <Typography
        variant="h3"
        align="center"
        fontSize={isMobile ? 28 : isTablet ? 60 : 70}
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
          <Box>
            <Card
              sx={{ width: isMobile ? 320 : 500, marginBottom: 2 }}
              key={professional.name}
            >
              <CardMedia
                className="shine"
                sx={{ height: isMobile ? 250 : 370, marginBottom: 2 }}
                image="images/exemplo.jpg"
                title="green iguana"
              />
            </Card>
            <Box
              sx={{
                width: isMobile ? 110 : 150,
                bgcolor: "#fff",
                position: "relative",
                bottom: isMobile ? 100 : 130,
                padding: 2,
                borderBottomRightRadius: 10,
              }}
            >
              <Typography
                variant="h5"
                align="center"
                fontSize={isMobile ? 9 : 13}
              >
                {professional.name}
              </Typography>
              <Typography
                variant="body2"
                align="center"
                color="text.secondary"
                fontSize={isMobile ? 8 : 12}
              >
                Crefito: {professional.crefito}
              </Typography>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};
