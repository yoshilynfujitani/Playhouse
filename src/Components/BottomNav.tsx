import AnimatedButtonHover from "./AnimatedButtonHover";

const BottomNav = () => {
  return (
    <div className="text-white my-48 flex gap-10 justify-between pr-44 ">
      <AnimatedButtonHover Title="WORK" />
      <div className="flex items-center gap-20 md:gap-40">
        <AnimatedButtonHover Title="ABOUT" />
        <AnimatedButtonHover Title="CONTACT" />
      </div>
    </div>
  );
};

export default BottomNav;
