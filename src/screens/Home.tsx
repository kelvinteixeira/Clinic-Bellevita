import { Header } from "../components/Header";
import { Team } from "../components/Team";
import { Specialties } from "../components/Specialties";
import { Box } from "@mui/material";
import { FirstSection } from "../components/FirstSection";

export const Home = () => {
  return (
    <Box >
      <Header />
      <FirstSection/>
      <Team />
      {/* <Specialties /> */}
    </Box>
  );
};
