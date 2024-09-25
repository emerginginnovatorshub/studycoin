import { useEffect, useRef } from 'react';

const CardSlider = ({ title, cards }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft += 1;
      }
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card-slider">
      <h2>{title}</h2>
      <div className="cards" ref={sliderRef}>
        {cards.map((card, index) => (
          <div className="card" key={index}>
            {card}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;