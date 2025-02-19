import { useState } from "react";
import { motion as m } from "motion/react";
import { animePageContent } from "../pages/Animations";

export default function ImagesLayout() {
  const [layout, setLayout] = useState(1);

  const images = [
    "https://images.pexels.com/photos/262367/pexels-photo-262367.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/911758/pexels-photo-911758.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1774931/pexels-photo-1774931.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1874636/pexels-photo-1874636.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  const handleClick = (e) => {
    setLayout(e.target.dataset.id);
  };

  return (
    <m.div variants={animePageContent} className="imagesLayout">
      {images.map((img, i) => {
        return (
          <img
            src={img}
            alt={`image ${i + 1}`}
            key={i}
            style={{ transitionDelay: `${0.05 * i}s` }}
            className={`layout-${layout}`}
          />
        );
      })}
      <div className="layoutBtn">
        {[...Array(3)].map((_, i) => {
          return (
            <div key={i} onClick={(e) => handleClick(e)} data-id={i + 1}>
              {i + 1}
            </div>
          );
        })}
      </div>
    </m.div>
  );
}
