import { Link } from "react-router-dom";
import DynamicIcon from "./DynamicIcon";
type Props = {
  icon: string;
  library: string;
  path: string;
};

const NavItem: React.FC<Props> = (props) => {
  return (
    <Link to={props.path} className="flex items-center ">
      <DynamicIcon
        icon={props.icon}
        library={props.library}
        className="inline-block mr-2"
      />
      <span className="font-normal">Home</span>
    </Link>
  );
};

export default NavItem;
