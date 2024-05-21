import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useQuery } from "@tanstack/react-query";
import { Container } from "@mui/material";
import userImg from "../../assets/user.png";
import { Link } from "react-router-dom";
import axios from "axios";

// CustomTabPanel component
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      className="container mx-auto"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Container maxWidth={false} disableGutters>
          <Box>{children}</Box>
        </Container>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

// Function to fetch jobs
const fetchJobs = async () => {
  const { data } = await axios.get("http://localhost:5000/jobs");
  return data;
};

export default function JobTabs() {
  const [value, setValue] = React.useState(0);

  const {
    data: jobs = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["jobs"],
    queryFn: fetchJobs,
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (isLoading) {
    return <div className="h-screen flex items-center justify-center font-bold">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="h-screen flex items-center justify-center font-bold">Error loading jobs.</div>
    );
  }

  const onSiteJobs = jobs.filter((job) => job.category === "On Site");
  const remoteJobs = jobs.filter((job) => job.category === "Remote");
  const hybridJobs = jobs.filter((job) => job.category === "Hybrid");
  const partTimeJobs = jobs.filter((job) => job.category === "Part-Time");

  return (
    <div>
      <div className="my-5">
        <h1 className="text-4xl text-center font-bold">Explore Jobs</h1>
      </div>

      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="basic tabs example"
          >
            <Tab label="All Jobs" {...a11yProps(0)} />
            <Tab label="On Site Jobs" {...a11yProps(1)} />
            <Tab label="Remote Jobs" {...a11yProps(2)} />
            <Tab label="Hybrid Jobs" {...a11yProps(3)} />
            <Tab label="Part Time Jobs" {...a11yProps(4)} />
          </Tabs>
        </Box>
        {/* All Jobs */}
        <CustomTabPanel value={value} index={0}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-5">
            {jobs.map((job) => (
              <div key={job._id} className="bg-base-300 p-4 grid gap-2 rounded-xl">
                <div className="flex gap-3 items-center justify-between ">
                  <div className="flex gap-3 items-center">
                    <div className="border rounded-full h-10 w-10 overflow-hidden">
                      <img className="h-10 w-10" src={userImg} alt="User" />
                    </div>
                    <div>
                      <p>{job?.postBy}</p>
                      <p>Post: {job?.postingDate}</p>
                    </div>
                  </div>
                  <div>
                    <p>Applied: {job?.applicantsNumber}</p>
                    <p>Deadline: {job?.applicationDeadline}</p>
                  </div>
                </div>
                <div>
                  <h2 className="text-4xl">{job.title}</h2>
                  <p>Salary Range: {job?.salaryRange}</p>
                </div>
                <Link to={`/jobs/${job._id}`}>
                  <button className="w-fit hover:bg-base-300 p-3 text-blue-400 font-medium rounded-lg">
                    View Details
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </CustomTabPanel>

        {/* OnSite Jobs */}
        <CustomTabPanel value={value} index={1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-5">
            {onSiteJobs.map((job) => (
              <div key={job._id} className="bg-base-300 p-4 grid gap-2 rounded-xl">
                <div className="flex gap-3 items-center justify-between ">
                  <div className="flex gap-3 items-center">
                    <div className="border rounded-full h-10 w-10 overflow-hidden">
                      <img className="h-10 w-10" src={userImg} alt="User" />
                    </div>
                    <div>
                      <p>{job?.postBy}</p>
                      <p>Post: {job?.postingDate}</p>
                    </div>
                  </div>
                  <div>
                    <p>Applied: {job?.applicantsNumber}</p>
                    <p>Deadline: {job?.applicationDeadline}</p>
                  </div>
                </div>
                <div>
                  <h2 className="text-4xl">{job.title}</h2>
                  <p>Salary Range: {job?.salaryRange}</p>
                </div>
                <Link to={`/jobs/${job._id}`}>
                  <button className="w-fit hover:bg-base-300 p-3 text-blue-400 font-medium rounded-lg">
                    View Details
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </CustomTabPanel>

        {/* Remote Jobs */}
        <CustomTabPanel value={value} index={2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-5">
            {remoteJobs.map((job) => (
              <div key={job._id} className="bg-base-300 p-4 grid gap-2 rounded-xl">
                <div className="flex gap-3 items-center justify-between ">
                  <div className="flex gap-3 items-center">
                    <div className="border rounded-full h-10 w-10 overflow-hidden">
                      <img className="h-10 w-10" src={userImg} alt="User" />
                    </div>
                    <div>
                      <p>{job?.postBy}</p>
                      <p>Post: {job?.postingDate}</p>
                    </div>
                  </div>
                  <div>
                    <p>Applied: {job?.applicantsNumber}</p>
                    <p>Deadline: {job?.applicationDeadline}</p>
                  </div>
                </div>
                <div>
                  <h2 className="text-4xl">{job.title}</h2>
                  <p>Salary Range: {job?.salaryRange}</p>
                </div>
                <Link to={`/jobs/${job._id}`}>
                  <button className="w-fit hover:bg-base-300 p-3 text-blue-400 font-medium rounded-lg">
                    View Details
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </CustomTabPanel>

        {/* Hybrid Jobs */}
        <CustomTabPanel value={value} index={3}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-5">
            {hybridJobs.map((job) => (
              <div key={job._id} className="bg-base-300 p-4 grid gap-2 rounded-xl">
                <div className="flex gap-3 items-center justify-between ">
                  <div className="flex gap-3 items-center">
                    <div className="border rounded-full h-10 w-10 overflow-hidden">
                      <img className="h-10 w-10" src={userImg} alt="User" />
                    </div>
                    <div>
                      <p>{job?.postBy}</p>
                      <p>Post: {job?.postingDate}</p>
                    </div>
                  </div>
                  <div>
                    <p>Applied: {job?.applicantsNumber}</p>
                    <p>Deadline: {job?.applicationDeadline}</p>
                  </div>
                </div>
                <div>
                  <h2 className="text-4xl">{job.title}</h2>
                  <p>Salary Range: {job?.salaryRange}</p>
                </div>
                <Link to={`/jobs/${job._id}`}>
                  <button className="w-fit hover:bg-base-300 p-3 text-blue-400 font-medium rounded-lg">
                    View Details
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </CustomTabPanel>

        {/* Part Time Jobs */}
        <CustomTabPanel value={value} index={4}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-5">
            {partTimeJobs.map((job) => (
              <div key={job._id} className="bg-base-300 p-4 grid gap-2 rounded-xl">
                <div className="flex gap-3 items-center justify-between ">
                  <div className="flex gap-3 items-center">
                    <div className="border rounded-full h-10 w-10 overflow-hidden">
                      <img className="h-10 w-10" src={userImg} alt="User" />
                    </div>
                    <div>
                      <p>{job?.postBy}</p>
                      <p>Post: {job?.postingDate}</p>
                    </div>
                  </div>
                  <div>
                    <p>Applied: {job?.applicantsNumber}</p>
                    <p>Deadline: {job?.applicationDeadline}</p>
                  </div>
                </div>
                <div>
                  <h2 className="text-4xl">{job.title}</h2>
                  <p>Salary Range: {job?.salaryRange}</p>
                </div>
                <Link to={`/jobs/${job._id}`}>
                  <button className="w-fit hover:bg-base-300 p-3 text-blue-400 font-medium rounded-lg">
                    View Details
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </CustomTabPanel>
      </Box>
    </div>
  );
}
