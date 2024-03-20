import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Cards from "./Components/Cards";
import About from "./Components/About";
import Contact from "./Components/Contact";
import PasswordGen from "./Components/PasswordGen";

function Layout() {
  return (
    <>
      <Navbar />
      <PasswordGen />
      <Outlet />

      <About />
      <Cards />
      <Contact />
      <Footer />
    </>
  );
}

export default Layout;
