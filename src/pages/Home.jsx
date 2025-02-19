import { motion as m } from "motion/react";

import { animePageContent } from "./Animations";
import Transition from "../components/Transition";

export default function Home() {
  return (
    <m.main initial="initial" animate="animate" exit="exit">
      <m.h1 variants={animePageContent}>Home</m.h1>
      <Transition />
    </m.main>
  );
}
