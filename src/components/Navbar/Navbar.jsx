import { Link, NavLink } from "react-router-dom";
import DarkMode from "./DarkMode/DarkMode";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all-jobs">All Jobs</NavLink>
      </li>
      <li>
        <NavLink to="/applied-jobs">Applied Jobs</NavLink>
      </li>
      <li>
        <NavLink to="/add-a-job">Add A Job</NavLink>
      </li>
      <li>
        <NavLink to="/my-jobs">My Jobs</NavLink>
      </li>
      <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-300">
      {/* Navbar start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[100] p-2 pr-6 ml-[-8px] bg-base-300 w-screen"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="flex items-center pr-2 rounded-lg cursor-pointer">
          <img className="w-14 h-14" src="/public/logo.png" />
          <h1 className="text-xl ml-[-10px] font-bold text-cyan-700">obNest</h1>
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base font-medium gap-1">{navLinks}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end gap-1">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
        <div>
          <DarkMode></DarkMode>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
