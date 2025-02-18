import { motion as m } from "motion/react";

import { animePageContent } from "./Animations";

export default function Home() {
  return (
    <m.main
      initial="initial"
      animate="animate"
      exit="exit"
      // variants={animePageContent}
    >
      <h1>Home</h1>
    </m.main>
  );
}
