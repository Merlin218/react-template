import CustomLayout from "@/components/layout";
import Login from "@/pages/Login";
import  { FC } from "react";
import { Routes,Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

const RouteConfig:FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<CustomLayout style={{height:'100vh'}} />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </BrowserRouter>
  )

export default RouteConfig;
