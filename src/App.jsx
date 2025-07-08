import { useLocation } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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
  const hideLayoutRoutes = ["/login", "/signup"]; // 👈 Include /signup here

  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname.toLowerCase());

  return (
    <>
      {!shouldHideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/blog1" element={<Blog1 />} />
        <Route path="/ourheroes" element={<OurHeroes />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/view/:slug" element={<View />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/herodetails/:id" element={<HerosDetails />} />
        <Route path="/UserProfileCard" element={< UserProfileCard/>} />
        </Routes>

      {!shouldHideLayout && <Footer />}
    </>
  );
}

export default App;
