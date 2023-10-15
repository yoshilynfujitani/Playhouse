import Example from "./Sample";

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
      <Example />
      <div className="">More Works At</div>
    </div>
  );
};

export default Works;
