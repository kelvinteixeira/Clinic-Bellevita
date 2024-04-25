import { Grid } from "@mui/material";
import { FirstSection } from "../components/FirstSection";
import { Header } from "../components/Header";
import { Team } from "../components/Team";
import { Specialties } from "../components/specialties";

export const Home = () => {
  return (
    <Grid container direction={"column"}>
      <Header />
      <FirstSection />
      {/* <Team /> */}
      {/* <Specialties /> */}
    </Grid>
  );
};
