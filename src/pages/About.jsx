import { motion as m } from "motion/react";
import { animePageContent } from "./Animations";

export default function About() {
  return (
    <m.main
      initial="initial"
      animate="animate"
      exit="exit"
      variants={animePageContent}
      id="about"
    >
      <h1>about</h1>
    </m.main>
  );
}
