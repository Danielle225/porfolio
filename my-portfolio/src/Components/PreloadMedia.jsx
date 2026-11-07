import { useEffect, useState } from "react";
import Loader from "./Loader";

const PreloadMedia = ({ images, children }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const sources = images.filter(Boolean);

    if (sources.length === 0) {
      setLoaded(true);
      return undefined;
    }

    let cancelled = false;
    let remaining = sources.length;

    const handleSettled = () => {
      remaining -= 1;
      if (remaining <= 0 && !cancelled) {
        setLoaded(true);
      }
    };

    const imageElements = sources.map((src) => {
      const img = new Image();
      img.onload = handleSettled;
      img.onerror = handleSettled;
      img.src = src;
      return img;
    });

    return () => {
      cancelled = true;
      imageElements.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [images]);

  return loaded ? children : <Loader />;
};

export default PreloadMedia;
