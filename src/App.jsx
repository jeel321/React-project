import { useLocation } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute"; // ✅

import Home from "./Pages/Home";
import Mission from "./Pages/Mission";
import Blog1 from "./Pages/Blog1";
import OurHeroes from "./Pages/OurHeroes";
import AboutUs from "./Pages/AboutUs";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import View from "./Pages/View";
import Blog from "./Pages/Blog";
import HerosDetails from "./Pages/HerosDetails";
import UserProfileCard from "./Pages/UserProfileCard";

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();
  const hideLayoutRoutes = ["/login", "/signup"];

  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname.toLowerCase());

  return (
    <>
      {!shouldHideLayout && <Navbar />}

      <Routes>
        {/* ✅ Public route */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* 🔒 Protected Routes */}
        <Route
          path="/mission"
          element={
            <PrivateRoute>
              <Mission />
            </PrivateRoute>
          }
        />
        <Route
          path="/blog1"
          element={
            <PrivateRoute>
              <Blog1 />
            </PrivateRoute>
          }
        />
        <Route
          path="/ourheroes"
          element={
            <PrivateRoute>
              <OurHeroes />
            </PrivateRoute>
          }
        />
        <Route
          path="/aboutus"
          element={
            <PrivateRoute>
              <AboutUs />
            </PrivateRoute>
          }
        />
        <Route
          path="/view/:slug"
          element={
            <PrivateRoute>
              <View />
            </PrivateRoute>
          }
        />
        <Route
          path="/blog"
          element={
            <PrivateRoute>
              <Blog />
            </PrivateRoute>
          }
        />
        <Route
          path="/herodetails/:id"
          element={
            <PrivateRoute>
              <HerosDetails />
            </PrivateRoute>
          }
        />
        <Route
          path="/UserProfileCard"
          element={
            <PrivateRoute>
              <UserProfileCard />
            </PrivateRoute>
          }
        />
      </Routes>

      {!shouldHideLayout && <Footer />}
    </>
  );
}

export default App;
