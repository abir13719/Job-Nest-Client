import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Base = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="pt-16">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Base;
