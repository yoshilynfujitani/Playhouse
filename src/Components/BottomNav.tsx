import { Link } from "react-scroll";
import AnimatedButtonHover from "./AnimatedButtonHover";

const BottomNav = () => {
  return (
    <div className="text-white my-48 flex gap-10 justify-between pr-44">
      <Link to="work" smooth={true} duration={500}>
        <AnimatedButtonHover Title="WORK" />
      </Link>
      <div className="flex items-center gap-20 md:gap-40">
        <Link to="workskillsect" smooth={true} duration={500}>
          <AnimatedButtonHover Title="ABOUT" />
        </Link>
        <Link to="workskillsect" smooth={true} duration={500}>
          <AnimatedButtonHover Title="CONTACT" />
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;
