import ButtonLinks from "./ButtonLinks";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-10 my-1 md:pt-5">
      <ButtonLinks
        SocialName="GITHUB"
        url="https://github.com/yoshilynfujitani"
      />
      <div className="flex gap-20">
        <ButtonLinks
          SocialName="LINKEDIN"
          url="https://www.linkedin.com/in/yoshilyn-fujitani-b3ab72232/"
        />
        <ButtonLinks
          SocialName="FACEBOOK"
          url="https://www.facebook.com/Yowsheee/"
        />
      </div>
    </div>
  );
};

export default Navbar;
