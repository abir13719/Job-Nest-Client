import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Base = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="pt-16">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Base;
