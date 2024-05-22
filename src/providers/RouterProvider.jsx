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
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoutes from "./PrivateRoutes";
import UpdateJob from "../pages/UpdateJob/UpdateJob";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Base></Base>,
    errorElement: <ErrorPage></ErrorPage>,
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
        element: (
          <PrivateRoutes>
            <AppliedJobs></AppliedJobs>
          </PrivateRoutes>
        ),
      },
      {
        path: "/add-a-job",
        element: (
          <PrivateRoutes>
            <AddAJob></AddAJob>
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-jobs",
        element: (
          <PrivateRoutes>
            <MyJobs></MyJobs>
          </PrivateRoutes>
        ),
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
      {
        path: "/jobs/:id",
        element: (
          <PrivateRoutes>
            <JobDetails></JobDetails>
          </PrivateRoutes>
        ),
      },
      {
        path: "/jobs/update/:id",
        element: (
          <PrivateRoutes>
            <UpdateJob></UpdateJob>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
