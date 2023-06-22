import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Explore from "../pages/Explore";
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
      <div className="flex ">
        <nav className="flex flex-col basis-1/6 justify-center items-center ">
          <div className="">
            <Link to="/"> Home</Link>
          </div>
          <div className="">
            <Link to="/explore">Explore</Link>
          </div>
        </nav>
        <div className="flex basis-4/6 justify-center">
          <Outlet />
        </div>
      </div>
    </>
  );
};
