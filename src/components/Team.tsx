import {
  Box,
  Typography,
  Card,
  CardMedia,
  Grid,
  useMediaQuery,
  IconButton,
  CardContent,
} from "@mui/material";
import { professionals } from "../services/api";
import { Instagram, Email, WhatsApp } from "@mui/icons-material";

type ProfessionalProps = {
  name: string;
  crefito: number;
  description: string;
  photo: string;
  socialMedias: {
    instagram: string;
    whatsapp: string;
    email: string;
  };
};

export const Team = () => {
  const isMobile = useMediaQuery("(max-width:430px)");
  const isTablet = useMediaQuery("(max-width:820px)");

  return (
    <Box sx={{ background: "#efefef" }}>
      <Typography
        variant="h3"
        align="center"
        fontSize={isMobile ? 28 : isTablet ? 50 : 60}
        marginBottom={3}
        color={"secondary"}
        marginTop={2}
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
          <Box key={professional.name}>
            <Card sx={{ width: isMobile ? 320 : 500 }} >
              <CardMedia
                className="shine"
                sx={{ height: isMobile ? 250 : 370 }}
                image="images/exemplo.jpg"
                title="green iguana"
              />
              <CardContent sx={{ padding: 0 }}>
                <Grid container justifyContent={"center"}>
                  <IconButton
                    href={`https://www.instagram.com/${professional.socialMedias.instagram}/`}
                    target="_blank"
                    aria-label="instagram"
                  >
                    <Instagram />
                  </IconButton>

                  <IconButton
                    onClick={() =>
                      window.open(`mailto:${professional.socialMedias.email}`)
                    }
                  >
                    <Email />
                  </IconButton>
                  <IconButton
                    href={`https://www.instagram.com/${professional.socialMedias.whatsapp}/`}
                    target="_blank"
                    aria-label="whatsapp"
                  >
                    <WhatsApp />
                  </IconButton>
                </Grid>
              </CardContent>
            </Card>
            <Box
              sx={{
                width: isMobile ? 110 : 150,
                bgcolor: "#fff",
                position: "relative",
                bottom: isMobile ? 140 : 170,
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
