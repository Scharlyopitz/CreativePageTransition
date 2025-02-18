import { motion as m } from "motion/react";

export default function About() {
  const animePageContent = {
    initial: {
      y: "102%",
    },
    animate: {
      y: 0,
      transition: {
        duration: 2,
      },
    },
    exit: {
      y: 0,
    },
  };
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
