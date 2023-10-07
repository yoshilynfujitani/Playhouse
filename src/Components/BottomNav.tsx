import AnimatedButtonHover from "./AnimatedButtonHover";

const BottomNav = () => {
  return (
    <div className="text-white my-64 flex justify-around">
      <AnimatedButtonHover Title="WORK" />
      <AnimatedButtonHover Title="ABOUT" />
    </div>
  );
};

export default BottomNav;
