import Avatar from "./Avatar";
import { Props } from "./Avatar";
const StoryAvatar: React.FC<Props> = (props) => {
  return (
    <div>
      <Avatar size={props.size} image={props.image} />
    </div>
  );
};

export default StoryAvatar;
