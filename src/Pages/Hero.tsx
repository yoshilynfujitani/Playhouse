import { useState } from "react";
import Marquee from "react-fast-marquee";

const Hero = () => {
  const [inside, setInside] = useState(false);

  function handleSetIfInside(value: boolean) {
    setInside(value);
  }

  return (
    <div>
      <Marquee
        className="overflow-hidden text-[55px] tracking-tighter text-center text-textmain leading-none md:text-[240px]"
        pauseOnHover={true}
        delay={0.5}
      >
        YOSHILYN FUJITANI<span className="text-transparent">I</span>
      </Marquee>

      <p className="text-textmain text-center  text-[13px] md:text-xl">
        AN INDEPENDENT UI/UX & WEB DEVELOPER WITH 5 YEARS OF EXPERIENCE
        SPECIALIZING IN CREATING WEBSITES FROM SCRATCH. MY APPROACH GOES BEYOND
        MERELY DESIGNING VISUAL ELEMENTS. I IMMERSE MYSELF IN YOUR BUSINESS,
        SEEKING DEEPER MEANING AND WORKING ON THE TEXTUAL CONTENT
      </p>
      {inside && <div className="text-white">Hello</div>}
    </div>
  );
};

export default Hero;
