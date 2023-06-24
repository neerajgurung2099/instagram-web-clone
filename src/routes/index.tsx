import { Outlet, Route, Routes } from "react-router-dom";
import NavItem from "../components/NavItem";
import Explore from "../pages/Explore";
import HomePage from "../pages/HomePage";
import NoMatch from "../pages/NoMatch";
const Index = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/explore" element={<Explore />}></Route>
          <Route path="*" element={<NoMatch />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default Index;

const Layout = () => {
  return (
    <>
      <div className="flex">
        <nav className="flex flex-col basis-1/6  justify-center pl-5">
          <NavItem path="/" icon="AiFillHome" library="ai" />
        </nav>
        <div className="flex basis-4/6 justify-center">
          <Outlet />
        </div>
      </div>
    </>
  );
};
