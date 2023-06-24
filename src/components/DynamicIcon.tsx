import { CSSProperties, SVGAttributes, Suspense, lazy } from "react";
import { IconContext } from "react-icons/lib";

type Props = {
  icon: string;
  library: string;
  color?: string;
  size?: string;
  className?: string;
  style?: CSSProperties;
  attr?: SVGAttributes<SVGElement>;
};
const DynamicIcon: React.FC<Props> = (props) => {
  const library = props.library.toLowerCase();

  const path = `react-icons/${library}`;
  const Icon = lazy(async () => {
    const module = await import(path);
    return { default: module[props.icon] };
  });

  const value: IconContext = {
    color: props.color,
    size: props.size,
    className: props.className,
    style: props.style,
    attr: props.attr,
  };
  return (
    <Suspense>
      <IconContext.Provider value={value}>
        <Icon />
      </IconContext.Provider>
    </Suspense>
  );
};

export default DynamicIcon;
