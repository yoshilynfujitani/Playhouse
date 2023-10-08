import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const AnimatestButtonHover = ({ Title }: { Title: string }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <button
      className="flex items-center gap-2 "
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <AnimatePresence>
        {isHover ? (
          <motion.div
            key={Title}
            className="absolute bg-white w-32 rounded-lg text-main px-2 py-1 "
            initial={{ x: -10, opacity: 0, width: 0 }} // Initial position and opacity
            animate={{ x: 0, opacity: 1, width: 120 }} // Enter animation
            exit={{ x: -10, opacity: 0, width: 0 }} // Exit animation
            transition={{ type: "spring", duration: 0.3 }}
          >
            <h1 className="text-xl">{Title}</h1>
          </motion.div>
        ) : (
          ""
        )}
      </AnimatePresence>
      <div className="w-2 h-2 rounded-full bg-white"></div>
      <h1 className="text-xl text-textmain">{Title}</h1>
    </button>
  );
};

export default AnimatestButtonHover;
