import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import workInfo from "./workData";

import WorksCard from "../Components/WorksCard";

const Example = () => {
  return (
    <div className="bg-neutral-800">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {workInfo.map((item) => {
            return (
              <WorksCard
                Title={item.Title}
                Year={item.Year}
                Image={item.Image}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Example;
