export default function ImagesLayout() {
  const numberOfImages = 4;
  return (
    <div className="imagesLayout">
      {[...Array(numberOfImages)].map((_, i) => {
        return (
          <div key={i} className="image layout-2">
            {i + 1}
          </div>
        );
      })}
    </div>
  );
}
