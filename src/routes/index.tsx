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
      <div className="columns-3">
        <nav className="w-full">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/explore">Explore</Link>
            </li>
          </ul>
        </nav>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};
