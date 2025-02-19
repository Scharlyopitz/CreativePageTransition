import { motion as m } from "motion/react";
import { animePageContent } from "./Animations";
import Transition from "../components/Transition";

export default function About() {
  return (
    <m.main initial="initial" animate="animate" exit="exit" id="about">
      <m.h1 variants={animePageContent}>about</m.h1>
      <Transition />
    </m.main>
  );
}
