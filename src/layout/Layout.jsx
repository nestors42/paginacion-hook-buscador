import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
  const navigation = useNavigation();// esto lo uso para hacer un loading
  return (
    <div>
      <Navbar />
      {/* {navigation.state === "loading" ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <Outlet />
      )} */}
      <Outlet />
      <Header />
    </div>
  );
};

export default Layout;
