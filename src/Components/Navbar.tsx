import ButtonLinks from "./ButtonLinks";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-2 my-1 md:mt-5">
      <ButtonLinks
        SocialName="GitHub"
        url="https://github.com/yoshilynfujitani"
      />
      <div className="">
        <ButtonLinks
          SocialName="GitHub"
          url="https://github.com/yoshilynfujitani"
        />
        <ButtonLinks
          SocialName="GitHub"
          url="https://github.com/yoshilynfujitani"
        />
      </div>
    </div>
  );
};

export default Navbar;
