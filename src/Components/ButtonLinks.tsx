const ButtonLinks = ({
  SocialName,
  url,
}: {
  SocialName: string;
  url: string;
}) => {
  return (
    <button>
      <a href={url} target="_blank">
        {SocialName}
      </a>
    </button>
  );
};

export default ButtonLinks;
