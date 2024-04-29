import { Container } from "@mui/material";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectDoneOf from "./components/ProjectDoneOf";
import Services from "./components/Services";
import ProjectWithDesc from "./components/ProjectWithDesc";
import SkillAtGlance from "./components/SkillAtGlance";
import LevelUp from "./components/LevelUp";
import Ready from "./components/Ready";
import Footer from "./components/Footer";


export default function App() {

  return (
    <>
      {/* This container is to allocate space for navbar, do not remove it */}
      <Container
        sx={{
          mt: "100px"
        }}
      ></Container>
      <Navbar />
      <HeroSection />
      <ProjectDoneOf />
      <Services />
      <ProjectWithDesc />
      <SkillAtGlance />
      <LevelUp />
      <Ready />
      <Footer />
    </>
  )
}
