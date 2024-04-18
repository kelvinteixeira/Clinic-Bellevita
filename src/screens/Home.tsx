import { Grid } from "@mui/material";
import { FirstSection } from "../components/FirstSection";
import { Header } from "../components/Header";

export const Home = () => {
  return (
    <Grid container direction={"column"} justifyContent={"center"}>
      <Header />
      <FirstSection />
    </Grid>
  );
};
