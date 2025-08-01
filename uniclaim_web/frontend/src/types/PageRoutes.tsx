import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

// screens
import AdminLogin from "../routes/admin-routes/AdminLogin";
import Login from "../routes/user-routes/Login";
import Register from "../routes/user-routes/Register";
import HomePage from "../routes/user-routes/HomePage";
import MainHome from "../routes/user-routes/MainHome";
import GeoLocation from "../routes/user-routes/GeolocationWithMap";
import SendEmail from "../routes/user-routes/SendEmail";
import Success from "../routes/user-routes/Success";
import MyTicket from "../routes/user-routes/MyTicket";
import Report from "../routes/user-routes/ReportPage";
import Profile from "@/routes/user-routes/Profile";
import ContactUs from "@/routes/user-routes/Contact";
import AboutUniClaim from "@/routes/user-routes/AboutUniClaim";

// wrappers
import ProtectedRoute from "../components/ProtectedRoute";
import { ToastProvider } from "@/context/ToastContext";
import PageWrapper from "@/components/PageWrapper";
import type { Post } from "@/types/Post";
import type { User } from "@/types/User";
import ScrollToTop from "@/context/ScrollTop";

export default function PageRoutes() {
  const [posts, setPosts] = useState<Post[]>([]);

  // temporary user
  const [currentUser, setCurrentUser] = useState<User>({
    firstName: "Paul Niño",
    lastName: "Salaan",
    email: "paul@example.com",
    contactNum: "09123456789",
  });

  return (
    <ToastProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Public routes */}
          <Route
            path="/login"
            element={
              <PageWrapper title="User Login">
                <Login />
              </PageWrapper>
            }
          />
          <Route
            path="/register"
            element={
              <PageWrapper title="Register">
                <Register />
              </PageWrapper>
            }
          />
          <Route
            path="/adminlogin"
            element={
              <PageWrapper title="Admin Login">
                <AdminLogin />
              </PageWrapper>
            }
          />

          {/* Protected routes using MainHome as layout */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <MainHome />
              </ProtectedRoute>
            }
          >
            <Route
              index
              element={
                <PageWrapper title="Home">
                  <HomePage posts={posts} setPosts={setPosts} />
                </PageWrapper>
              }
            />
            <Route
              path="report"
              element={
                <PageWrapper title="Report ">
                  <Report setPosts={setPosts} currentUser={currentUser} />
                </PageWrapper>
              }
            />
            <Route
              path="ticket"
              element={
                <PageWrapper title="My Ticket">
                  <MyTicket
                    posts={posts}
                    setPosts={setPosts}
                    currentUser={currentUser}
                  />
                </PageWrapper>
              }
            />
            <Route
              path="sendemail"
              element={
                <PageWrapper title="Send Email">
                  <SendEmail />
                </PageWrapper>
              }
            />
            <Route
              path="success"
              element={
                <PageWrapper title="Success">
                  <Success />
                </PageWrapper>
              }
            />
            <Route
              path="geolocation"
              element={
                <PageWrapper title="Geolocation">
                  <GeoLocation />
                </PageWrapper>
              }
            />
            <Route
              path="profile"
              element={
                <PageWrapper title="My Profile">
                  <Profile user={currentUser} />
                </PageWrapper>
              }
            />
            <Route
              path="contact_us"
              element={
                <PageWrapper title="Contact Us">
                  <ContactUs />
                </PageWrapper>
              }
            />
            <Route
              path="aboutuniclaim"
              element={
                <PageWrapper title="About UniClaim">
                  <AboutUniClaim />
                </PageWrapper>
              }
            />
          </Route>

          {/* Catch-all: redirect unknown or unauthenticated routes to /login */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  );
}
