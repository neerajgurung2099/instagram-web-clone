import { CSSProperties, SVGAttributes, Suspense, lazy } from "react";
import { IconContext } from "react-icons/lib";
import { CiSquareQuestion } from "react-icons/ci";
import * as CI from "react-icons/ci";

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
  // const Icon = lazy(async () => await import(/* webpackMode: "eager" */ path));

  console.log(CI);
  // const Icon = lazy(async () => {
  //   try {
  //     const module = await import(path);
  //     return { default: module[props.icon] };
  //   } catch (ex) {
  //     console.log(ex);
  //     return { default: CiSquareQuestion };
  //   }
  // });

  const value: IconContext = {
    color: props.color,
    size: props.size,
    className: props.className,
    style: props.style,
    attr: props.attr,
  };
  return (
    <Suspense fallback={null}>
      <IconContext.Provider value={value}>
        <CiSquareQuestion />
      </IconContext.Provider>
    </Suspense>
  );
};

export default DynamicIcon;
