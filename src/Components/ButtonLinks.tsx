const ButtonLinks = ({
  SocialName,
  url,
}: {
  SocialName: string;
  url: string;
}) => {
  return (
    <button className="rounded-lg border px-4 py-1 text-white">
      <a href={url} target="_blank">
        {SocialName}
      </a>
    </button>
  );
};

export default ButtonLinks;
