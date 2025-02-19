export default function ImagesLayout() {
  const numberOfImages = 4;
  return (
    <div className="imagesLayout">
      {[...Array(numberOfImages)].map((_, i) => {
        return (
          <div key={i} className="image">
            {i + 1}
          </div>
        );
      })}
    </div>
  );
}
