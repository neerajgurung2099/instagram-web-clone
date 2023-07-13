import { Link } from "react-router-dom";
import DynamicIcon from "./DynamicIcon";
type Props = {
  path: string;
  name: string;
  children: any;
};

const NavItem: React.FC<Props> = (props) => {
  return (
    <Link
      to={props.path}
      className="flex items-center m-3 hover:bg-gray-200 p-2 rounded-lg "
    >
      {props.children}
      <span className="text-lg">{props.name}</span>
    </Link>
  );
};

export default NavItem;
