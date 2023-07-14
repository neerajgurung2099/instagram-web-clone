import Avatar from "../components/Avatar";
import Post from "../components/Post";
const HomePage = () => {
  const renderStory = () => {
    const components = [];
    for (let i = 0; i < 1; i++) {
      components.push(
        <Avatar
          image="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          key={i}
          size={50}
        />
      );
    }
    return components;
  };
  return (
    <div className="w-full">
      <div>
        <div className="flex gap-1">{renderStory()}</div>
        <div className="flex">
          <Post />
        </div>
      </div>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default HomePage;
