import { createBrowserRouter } from "react-router-dom";
import Base from "../pages/Base";
import Home from "../pages/Home/Home";
import AllJobs from "../pages/AllJobs/AllJobs";
import AppliedJobs from "../pages/AppliedJobs/AppliedJobs";
import AddAJob from "../pages/AddAJob/AddAJob";
import MyJobs from "../pages/MyJobs/MyJobs";
import Blogs from "../pages/Blogs/Blogs";
import Registration from "../pages/Registration/Registration";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Base></Base>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all-jobs",
        element: <AllJobs></AllJobs>,
      },
      {
        path: "/applied-jobs",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "/add-a-job",
        element: <AddAJob></AddAJob>,
      },
      {
        path: "/my-jobs",
        element: <MyJobs></MyJobs>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
