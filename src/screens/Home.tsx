import { Header } from "../components/Header";
import { Team } from "../components/Team";
import { Specialties } from "../components/Specialties";
import { FirstSection } from "../components/FirstSection";
import { AboutBellevita } from "../components/AboutBellevita";
import { Localization } from "../components/Localization";
import { Footer } from "../components/Footer";
import { WhatsAppButton } from "../components/WhatsappButton";

export const Home = () => {
  return (
    <>
      <Header />
      <FirstSection />
      <AboutBellevita />
      <Team />
      <Specialties />
      <Localization />
      <Footer />
      <WhatsAppButton />
    </>
  );
};
