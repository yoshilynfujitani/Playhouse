import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { DiSass } from "react-icons/di";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BiLogoReact } from "react-icons/bi";
import { BiLogoNodejs } from "react-icons/bi";
import { BiLogoPostgresql } from "react-icons/bi";
import { BiLogoRedux } from "react-icons/bi";
import { FaBootstrap } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";

const BottomHero = () => {
  return (
    <div className="overflow-clip md:mx-5">
      <div className="text-5xl md:text-8xl text-textmain">
        <h1 className="py-5">
          <span className="font-serif italic ">(tech)</span>STACK
        </h1>
        <div className="mx-5 text-5xl md:text-6xl grid grid-cols-4 md:grid-cols-7  gap-5 content-center place-content-center  md:place-items-center text-gray-300">
          <AiFillHtml5 className="transition-colors hover:text-orange-600" />
          <DiCss3 className="transition-colors hover:text-blue-600" />
          <DiSass className="transition-colors hover:text-pink-600" />
          <BiLogoTailwindCss className="transition-colors hover:text-sky-300" />
          <FaBootstrap className="transition-colors hover:text-purple-600" />
          <DiJavascript className="transition-colors hover:text-yellow-300" />
          <BiLogoNodejs className="transition-colors hover:text-green-500" />
          <BiLogoReact className="transition-colors hover:text-sky-400" />
          <BiLogoRedux className="transition-colors hover:text-purple-400" />
          <SiExpress className="transition-colors hover:text-white" />
          <SiMysql className="transition-colors hover:text-blue-600" />
          <RiSupabaseFill className="transition-colors hover:text-green-500" />
          <BiLogoPostgresql className="transition-colors hover:text-blue-500" />
        </div>
      </div>

      {/* Last */}
      <div className=" text-textmain text-6xl my-20 md:text-[180px] leading-none ">
        <div className="flex flex-col">
          <p className="text-sm text-gray-400 flex justify-between md:text-lg">
            WEB DEVELOPER <div className="">CV</div>
          </p>
          <h1>YOSHILYN</h1>
        </div>
        <div className="text-right flex flex-col">
          <h1>FUJITANI</h1>
          <div className="text-lg italic flex self-end gap-10 font-serif  md:text-4xl">
            <h1>(github)</h1>
            <h1>(linkedin)</h1>
            <h1>(instagram)</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomHero;
