import React from "react";
import "../css/applayout.css";
import {Header} from '../../components/jsx/header.jsx'
import { Outlet } from "react-router-dom";
import { Footer } from "../../components/jsx/footer.jsx";

export const Applayout = () => {
  return (<>
  <Header/>
  <div style={{height:"150px"}}></div>
   <Outlet/>
  <Footer />
  </> );
};
