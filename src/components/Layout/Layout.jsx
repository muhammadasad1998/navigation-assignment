import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import SideDrawer from "../SideDrawer/SideDrawer";
import { Grid } from "@mui/material";

const Layout = () => {
  return (
    <>
      
          <SideDrawer />
       
    </>
  );
};

export default Layout;
