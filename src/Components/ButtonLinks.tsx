import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
const ButtonLinks = ({
  SocialName,
  url,
}: {
  SocialName: string;
  url: string;
}) => {
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
            key={SocialName}
            className="absolute bg-white   rounded-lg text-main px-2 py-1 md:w-32 "
            initial={{ x: 10, opacity: 0, width: 0 }} // Initial position and opacity
            animate={{ x: 0, opacity: 1, width: 120 }} // Enter animation
            exit={{ x: -10, opacity: 0, width: 0 }} // Exit animation
            transition={{ type: "spring", duration: 0.3 }}
          >
            <h1 className="text-sm md:text-xl">
              <a href={url} target="_blank">
                {SocialName}
              </a>
            </h1>
          </motion.div>
        ) : (
          ""
        )}
      </AnimatePresence>

      <h1 className="text-sm md:text-xl text-textmain">{SocialName}</h1>
    </button>
  );
};

export default ButtonLinks;
