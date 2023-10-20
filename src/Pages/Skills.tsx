const Skills = () => {
  return (
    <div
      className="grid  grid-cols-1 md:grid-cols-2 text-5xl md:text-8xl"
      id="workskillsect"
    >
      <div className="flex flex-col">
        <h1 className="text-textmain ">
          <span className="italic font-serif font-light">(soft)</span>SKILLS
        </h1>
        <div className="my-5 px-5 space-y-1 text-lg">
          <p className="text-textmain">/ COLLABORATION</p>
          <p className="text-textmain">/ COMMUNICATION</p>
          <p className="text-textmain">/ PROBLEM SOLVING</p>
          <p className="text-textmain">/ ATTENTION TO DETAILS</p>
          <p className="text-textmain">/ TIME MANAGEMENT</p>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-textmain ">
          <span className="italic font-serif font-light">(key)</span>SKILLS
        </h1>
        <div className="my-5 px-5 space-y-1 text-lg">
          <p className="text-textmain">/ UI/UX Design</p>
          <p className="text-textmain">/ WEB DEVELOPMENT</p>
          <p className="text-textmain">/ DATABASE MANAGEMENT</p>
          <p className="text-textmain">/ REACTJS SPECIALIST</p>
        </div>
      </div>
      <div className=""></div>
      <div className="flex flex-col">
        <h1 className="text-textmain ">
          <span className="italic font-serif font-light">(self)</span>
          INFO
        </h1>
        <div className="my-5 px-5 space-y-5 text-lg  text-textmain">
          <div className="flex flex-col md:flex-row ">
            <div className="w-1/2">EDUCATION</div>
            <div className="flex flex-col justify-between w-full">
              <div className="flex justify-between w-full items-center">
                <h1>Bachelor of Science in Computer Science</h1>
                <p className="text-gray-400">2021-2025</p>
              </div>
              <div className="flex justify-between w-full items-center">
                <h1>Accountany and Business Management</h1>
                <p className=" text-gray-400">2019-2021</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row ">
            <div className="w-1/2">CONTACTS</div>
            <div className="flex flex-col justify-between w-full">
              <div className="flex justify-between w-full items-center">
                <h1>fujitaniyoshilynp@gmail.com</h1>
                <p className="text-gray-400">Email</p>
              </div>
              <div className="flex justify-between w-full items-center">
                <h1>+639760954898</h1>
                <p className=" text-gray-400">Phone Number</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
