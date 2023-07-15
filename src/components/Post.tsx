import StoryAvatar from "./StoryAvatar";
import { AiOutlineEllipsis } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai";
import { AiOutlineTag } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import Avatar from "./Avatar";
const Post = () => {
  return (
    <div className="flex w-full flex-col gap-2">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <div className="flex w-full">
      <div className="flex grow gap-2">
        <StoryAvatar
          size={50}
          image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
        />
        <div>
          <span className="text-sm font-medium">User Name</span>
          <span className="text-slate-400 text-sm"> · Time</span>
        </div>
      </div>
      <div>
        <AiOutlineEllipsis size={20} />
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <div className="flex w-full border-sm ">
      <img
        style={{ width: "100%" }}
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
      />
    </div>
  );
};

const Footer = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full ">
        <div className="flex grow">
          <AiOutlineHeart size={25} />
          <AiOutlineComment size={25} />
          <AiOutlineTag size={25} />
        </div>
        <div>
          <BsBookmark size={22} />
        </div>
      </div>
      <div className="flex w-full">
        <Avatar
          size={20}
          image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
        />
        <span>Liked by Neeraj Gurung and others</span>
      </div>
    </div>
  );
};

export default Post;
