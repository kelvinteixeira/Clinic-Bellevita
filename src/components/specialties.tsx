import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Box, Card, CardContent, Typography, useMediaQuery } from "@mui/material";
import { services } from "../services/api";

type ServiceProps = {
  title: string;
  image: string;
  description: string;
};

export const Specialties = () => {
  const isMobile = useMediaQuery("(max-width:430px)");
  const isTablet = useMediaQuery("(max-width:820px)");

  return (
    <Box sx={{ background: "linear-gradient(to top, #7898664f, #e0dddd)" }}>
      <Typography
        align="center"
        fontSize={isMobile ? 28 : isTablet ? 60 : 70}
      >
        Nossas especialidades
      </Typography>
      <ImageList sx={{ padding: 4 }}>
        {services.map((item: ServiceProps) => (
          <ImageListItem key={item.title}>
            <img
              style={{ height: isMobile ? 120 : 300 }}
              srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.image}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              position={isMobile ? "top" : "bottom"}
              sx={{ height: isMobile ? 30 : null }}
              title={item.title}
              subtitle={isMobile ? null : item.description}
            />
            {isMobile ? (
              <Card>
                <CardContent sx={{ height: 100 }}>
                  <Typography variant="body2" fontSize={12}>
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            ) : null}
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};
