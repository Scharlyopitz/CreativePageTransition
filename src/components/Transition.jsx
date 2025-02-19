import { motion as m } from "motion/react";
import { useLocation } from "react-router-dom";

export default function Transition() {
  const { pathname } = useLocation();

  const colors = {
    "/": "#000000",

    "/about": "#ffffff",
  };

  const animeBlock = {
    initial: {
      background: colors[pathname],
      transform: "scale(0) skew(12deg)",
    },
    exit: (i) => ({
      transform: "scale(1.2) skew(12deg)",
      transition: { duration: 0.5, delay: 0.02 * i, ease: [0.65, 0, 0.35, 1] },
    }),
  };

  const numberOfColumns = 20;

  const getBlocks = (columsIndex) => {
    const { innerWidth, innerHeight } = window;

    const blockSize = innerWidth * 0.05;

    const amountOfBlock = Math.ceil(innerHeight / blockSize);

    return [...Array(amountOfBlock)].map((_, i) => {
      return (
        <m.div
          variants={animeBlock}
          key={i}
          custom={numberOfColumns - columsIndex - i}
          className="block"
        />
      );
    });
  };

  return (
    <m.div
      initial="initial"
      animate="animate"
      exit="exit"
      className="transition"
    >
      {[...Array(numberOfColumns)].map((_, i) => {
        return (
          <div key={i} className="column">
            {getBlocks(i)}
          </div>
        );
      })}
    </m.div>
  );
}
