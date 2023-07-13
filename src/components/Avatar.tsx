type Props = {
  image: string;
};
const Avatar: React.FC<Props> = (props) => {
  return (
    <div className="rounded-full inline-block border p-[1.5px] border-gray-300">
      <img className="rounded-full w-[50px] h-[50px]" src={props.image} />
    </div>
  );
};

export default Avatar;
