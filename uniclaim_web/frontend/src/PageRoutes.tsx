import { BrowserRouter, Routes, Route } from "react-router-dom";

//auth screens
import Login from "../src/auth/Login";
import Register from "../src/auth/Register";
import AdminLogin from "../src/auth/AdminLogin";

//screens
import Home from "./screens/Home";

export default function PageRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
