import Avatar from "./Avatar";

type Props = {
  image: string;
};
const StoryIcons: React.FC<Props> = (props) => {
  return (
    <div className="">
      <Avatar image={props.image} />
    </div>
  );
};

export default StoryIcons;
