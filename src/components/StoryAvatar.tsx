import Avatar from "./Avatar";
import { Props } from "./Avatar";
const StoryAvatar: React.FC<Props> = (props) => {
  return (
    <div className="rounded-full p-0.5 border-black border ">
      <Avatar size={props.size} image={props.image} />
    </div>
  );
};

export default StoryAvatar;
