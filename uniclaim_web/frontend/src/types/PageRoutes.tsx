import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//auth screens
import Login from "../routes/user-routes/Login";
import Register from "../routes/user-routes/Register";
import HomePage from "../routes/user-routes/HomePage";
import MainHome from "../routes/user-routes/MainHome";
import GeoLocation from "../routes/user-routes/GeolocationWithMap";
import SendEmail from "../routes/user-routes/SendEmail";
import Success from "../routes/user-routes/Success";

//admin screens
import AdminLogin from "../routes/admin-routes/AdminLogin";

export default function PageRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/mainhome" element={<MainHome />} />
          <Route path="/sendemail" element={<SendEmail />} />
          <Route path="/success" element={<Success />} />
          <Route path="/geolocation" element={<GeoLocation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
