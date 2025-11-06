import React from "react";
import Navber from "../firebase/Navber/Navber";
import { Outlet } from "react-router";
import Footer from "../firebase/Navber/Footer/Footer";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Navber></Navber>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Root;
