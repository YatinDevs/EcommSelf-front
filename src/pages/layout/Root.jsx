import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footers";
function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Root;
