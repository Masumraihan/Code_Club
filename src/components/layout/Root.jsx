import React from "react";
import Navbar from "../Header/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <div>
      <Navbar />
      <div className="md:min-h-[calc(100vh-442px)]">
        <Outlet />
      </div>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Root;
