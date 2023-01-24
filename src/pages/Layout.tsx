import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
