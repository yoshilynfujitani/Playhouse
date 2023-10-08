import Marquee from "react-fast-marquee";
import { useState } from "react";

const Hero = () => {
  const evenLetterImages: {
    src: string;
    position: { left: number; top: number };
  }[] = [
    { src: "image1.jpg", position: { left: 100, top: 100 } },
    { src: "image2.jpg", position: { left: 500, top: 200 } },
    { src: "image3.jpg", position: { left: 300, top: 200 } },
    { src: "image4.jpg", position: { left: 800, top: 200 } },
    { src: "image5.jpg", position: { left: 400, top: 600 } },
    { src: "image6.jpg", position: { left: 400, top: 900 } },
    { src: "image7.jpg", position: { left: 800, top: 200 } },

    // Add more image objects with src and position
  ];
  const text: string = "YOSHILYNFUJITANI ";
  const [hoveredLetter, setHoveredLetter] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    if (index % 2 === 0) {
      setHoveredLetter(index / 2 - 1);
    }
  };

  const handleMouseLeave = () => {
    setHoveredLetter(null);
  };
  return (
    <div>
      <Marquee
        className="overflow-hidden text-[55px] tracking-tighter text-center text-textmain leading-none md:text-[240px]"
        pauseOnHover={false}
        delay={0.5}
      >
        {text.split("").map((letter, index) => (
          <span
            key={index}
            className={index % 2 === 0 ? "even-letter" : ""}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {letter}
          </span>
        ))}
      </Marquee>
      <div className="absolute">
        {evenLetterImages.map((image, index) => (
          <div
            key={index}
            className={`image-container absolute ${
              hoveredLetter === index ? "visible" : "hidden"
            }`}
            style={{
              left: `${image.position.left}px`,
              top: `${image.position.top}px`,
            }}
          >
            <div className="w-40 h-40 bg-white">{image.src}</div>
          </div>
        ))}
      </div>
      <p className="text-textmain text-center  text-[13px] md:text-xl">
        AN INDEPENDENT UI/UX & WEB DEVELOPER WITH 5 YEARS OF EXPERIENCE
        SPECIALIZING IN CREATING WEBSITES FROM SCRATCH. MY APPROACH GOES BEYOND
        MERELY DESIGNING VISUAL ELEMENTS. I IMMERSE MYSELF IN YOUR BUSINESS,
        SEEKING DEEPER MEANING AND WORKING ON THE TEXTUAL CONTENT
      </p>
    </div>
  );
};

export default Hero;
