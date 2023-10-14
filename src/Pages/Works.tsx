import Comsoc from "/ComsocCredit.png";
import BlogStack from "/BlogStack.png";
import WorksCard from "../Components/WorksCard";

const Works = () => {
  return (
    <div>
      <div className="flex items-center justify-between ">
        <h1 className="text-4xl text-textmain md:text-8xl">
          <span className="italic font-serif font-extralight  ">(code)</span>
          FOLIO
        </h1>
        <div className="h-1 w-24 bg-textmain md:w-96 md:h-2"></div>
        <div className="text-4xl text-textmain md:text-8xl">2023</div>
      </div>
      <div className="grid grid-cols-1   place-items-center lg:grid-cols-2">
        <WorksCard Title="Test" Year={1000} Url="test.com" Image={Comsoc} />
        <WorksCard Title="Test" Year={1000} Url="test.com" Image={BlogStack} />
      </div>
      <div className="">More Works At</div>
    </div>
  );
};

export default Works;
