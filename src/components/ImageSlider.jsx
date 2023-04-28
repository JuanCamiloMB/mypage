import { useState, useEffect } from 'react';

function ImageSlider({ image1, image2, interval = 1000 }) {
  const [currentImage, setCurrentImage] = useState(image1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === image1 ? image2 : image1
      );
    }, interval);
    return () => clearInterval(intervalId);
  }, [image1, image2, interval]);

  return <img src={currentImage} alt="slider" />;
}

export default ImageSlider;