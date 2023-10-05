import { useState } from "react";

const Hero = () => {
  const [inside, setInside] = useState(false);

  function handleSetIfInside(value: boolean) {
    setInside(value);
  }

  return (
    <div>
      <h1 className="text-[300px] tracking-tighter text-center text-textmain leading-none">
        I AM Y<span>O</span>
        SHILYN
      </h1>
      <p className="text-textmain text-center  text-2xl ">
        AN INDEPENDENT UI/UX & WEB DESIGNER WITH 5 YEARS OF EXPERIENCE
        SPECIALIZING IN CREATING WEBSITES FROM SCRATCH. MY APPROACH GOES BEYOND
        MERELY DESIGNING VISUAL ELEMENTS. I IMMERSE MYSELF IN YOUR BUSINESS,
        SEEKING DEEPER MEANING AND WORKING ON THE TEXTUAL CONTENT
      </p>
      {inside && <div className="text-white">Hello</div>}
    </div>
  );
};

export default Hero;
