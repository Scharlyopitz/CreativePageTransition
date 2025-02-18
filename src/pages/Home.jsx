import { motion as m } from "motion/react";

export default function Home() {
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
    >
      <h1>Home</h1>
    </m.main>
  );
}
