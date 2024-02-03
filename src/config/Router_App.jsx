import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../pages/Homepage/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import About from "../pages/Dashboard/About";
import Layout from "../components/Layout/Layout";

const Router_App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout/>}>
        <Route path="" element={<Home />} />
        <Route path="dashboard">
          <Route path="" element={<Dashboard />} />
          <Route path="about" element={<About />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Router_App;
