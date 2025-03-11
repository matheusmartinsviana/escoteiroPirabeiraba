import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import img1 from "../assets/new-images/banner2.webp";
import img2 from "../assets/new-images/IMG_3388.webp";
import img3 from "../assets/new-images/IMG_6799.webp";
import img4 from "../assets/new-images/IMG-20241130-WA0123.webp";
import img5 from "../assets/new-images/IMG_20241109_103811.webp";

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({
    slidesToScroll: 1,
    containScroll: "trimSnaps",
    breakpoints: {
      "(max-width: 768px)": { slidesToScroll: 1, slidesToShow: 1 },
      "(min-width: 769px)": { slidesToScroll: 1, slidesToShow: 3 },
    },
  });

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide"><img src={img1} alt="Banner 1" /></div>
        <div className="embla__slide"><img src={img2} alt="Banner 2" /></div>
        <div className="embla__slide"><img src={img3} alt="Banner 3" /></div>
        <div className="embla__slide"><img src={img4} alt="Banner 4" /></div>
        <div className="embla__slide"><img src={img5} alt="Banner 5" /></div>
      </div>
    </div>
  );
}
