import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

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

// wrappers
import ProtectedRoute from "../components/ProtectedRoute";
import { ToastProvider } from "@/context/ToastContext";
import PageWrapper from "@/components/PageWrapper";

export default function PageRoutes() {
  return (
    <ToastProvider>
      <BrowserRouter>
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
                  <HomePage />
                </PageWrapper>
              }
            />
            <Route
              path="ticket"
              element={
                <PageWrapper title="My Ticket">
                  <MyTicket />
                </PageWrapper>
              }
            />
            <Route
              path="report"
              element={
                <PageWrapper title="Report an Item">
                  <Report />
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
          </Route>

          {/* Catch-all: redirect unknown or unauthenticated routes to /login */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  );
}
