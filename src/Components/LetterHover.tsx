import { useState } from "react";

const LetterHover = ({ letter, state }: { letter: string; state: boolean }) => {
  return (
    <span
      onMouseEnter={() => setInside(true)}
      onMouseLeave={() => setInside(false)}
    >
      {letter}
    </span>
  );
};

export default LetterHover;
