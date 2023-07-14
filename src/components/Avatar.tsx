export type Props = {
  image: string;
  size: number;
};
const Avatar: React.FC<Props> = (props) => {
  return (
    <>
      <img
        className="rounded-full"
        style={{ height: `${props.size}px`, width: `${props.size}px` }}
        src={props.image}
      />
    </>
  );
};

export default Avatar;
