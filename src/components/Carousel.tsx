import { Grid, useMediaQuery } from "@mui/material";
import { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const images = [
  "../images/carousel1.jpeg",
  "../images/carousel6.jpg",
  "../images/carousel4.jpg",
  "../images/carousel3.jpg",
  "../images/carousel2.jpg",
  "../images/carousel5.jpg",
];

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const Carousel = () => {
  const isMobile = useMediaQuery("(max-width:500px)");

  const [index, setIndex] = useState(0);
  const handleChangeIndex = (index: number) => {
    setIndex(index);
  };
  return (
    <AutoPlaySwipeableViews index={index} onChangeIndex={handleChangeIndex}>
      {images.map((image: string, i: number) => (
        <Grid
          sx={{
            width: "100%",
            height: isMobile ? "auto" : "75vh",
            overflow: "hidden",
          }}
          key={i}
        >
          {Math.abs(index - i) <= 2 ? (
            <img
              style={{
                width: "100%",
                height: isMobile ? "50%" : "100%",
                filter: "blur(4px)",
                objectFit: "cover",
              }}
              src={image}
              alt={`Slide ${i}`}
            />
          ) : null}
        </Grid>
      ))}
    </AutoPlaySwipeableViews>
  );
};
