import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { services } from "../services/api";

type ServiceProps = {
  title: string;
  image: string;
};

export const OurServices = () => {
  const isMobile = useMediaQuery("(max-width:430px)");
  const isTablet = useMediaQuery("(max-width:820px)");

  return (
    <Box sx={{ background: "linear-gradient(to top, #7898664f, #e0dddd)" }}>
      <Typography
        color={"secondary"}
        align="center"
        fontSize={isMobile ? 28 : isTablet ? 50 : 60}
      >
        Nossas especialidades
      </Typography>
      <ImageList sx={{ padding: 4 }} cols={isMobile ? 2 : 3}>
        {services.map((item: ServiceProps) => (
          <ImageListItem key={item.title}>
            <img
              style={{
                height: isMobile ? 120 : 250,
              }}
              srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.image}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              position={isMobile ? "top" : "bottom"}
              sx={{ height: isMobile ? 30 : null }}
              title={item.title}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};
