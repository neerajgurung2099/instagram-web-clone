import Post from "../components/Post";
import StoryAvatar from "../components/StoryAvatar";
const HomePage = () => {
  const renderStory = () => {
    const components = [];
    for (let i = 0; i < 10; i++) {
      components.push(
        <StoryAvatar
          image="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          key={i}
          size={65}
        />
      );
    }
    return components;
  };
  return (
    <div className="w-full">
      <div>
        <div className="flex gap-1">{renderStory()}</div>
        <div className="flex max-w-md">
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
