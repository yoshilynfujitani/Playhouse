const WorksCard = ({
  Title,
  Year,

  Image,
}: {
  Title: string;
  Year: number;

  Image: string;
}) => {
  return (
    <div className="my-24 rounded-lg">
      <div className="transition-all hover:scale-105 grayscale hover:grayscale-0">
        <img
          src={Image}
          alt=""
          className="transition-all w-auto h-56 rounded-lg lg:h-96 "
        />
        <div className="flex items-center justify-between  text-textmain  ">
          <h1>{Title}</h1>
          <h1>{Year}</h1>
        </div>
      </div>
    </div>
  );
};

export default WorksCard;
