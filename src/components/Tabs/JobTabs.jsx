import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import axios from "axios";
import { Container } from "@mui/material";
import userImg from "../../assets/user.png";
import { Link } from "react-router-dom";

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

export default function JobTabs() {
  const [value, setValue] = React.useState(0);
  const [jobs, setJob] = React.useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    axios.get("http://localhost:5000/jobs").then((data) => {
      setJob(data.data);
    });
  }, []);

  const onSiteJobs = jobs.filter((job) => job.category === "On Site");
  const RemoteJobs = jobs.filter((job) => job.category === "Remote");
  const HybridJobs = jobs.filter((job) => job.category === "Hybrid");
  const PartTimeJobs = jobs.filter((job) => job.category === "Part-Time");

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
                      <img className="h-10 w-10" src={userImg} />
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
              <div key={job._id} className="bg-base-200 p-4 grid gap-2 rounded-xl">
                <div className="flex gap-3 items-center justify-between ">
                  <div className="flex gap-3 items-center">
                    <div className="border rounded-full h-10 w-10 overflow-hidden">
                      <img className="h-10 w-10" src={userImg} />
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
                <button className="w-fit hover:bg-base-300 p-3 text-blue-400 font-medium rounded-lg">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </CustomTabPanel>

        {/* Remote Jobs */}
        <CustomTabPanel value={value} index={2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-5">
            {RemoteJobs.map((job) => (
              <div key={job._id} className="bg-base-200 p-4 grid gap-2 rounded-xl">
                <div className="flex gap-3 items-center justify-between ">
                  <div className="flex gap-3 items-center">
                    <div className="border rounded-full h-10 w-10 overflow-hidden">
                      <img className="h-10 w-10" src={userImg} />
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
                <button className="w-fit hover:bg-base-300 p-3 text-blue-400 font-medium rounded-lg">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </CustomTabPanel>

        {/* Hybrid Jobs */}
        <CustomTabPanel value={value} index={3}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-5">
            {HybridJobs.map((job) => (
              <div key={job._id} className="bg-base-200 p-4 grid gap-2 rounded-xl">
                <div className="flex gap-3 items-center justify-between ">
                  <div className="flex gap-3 items-center">
                    <div className="border rounded-full h-10 w-10 overflow-hidden">
                      <img className="h-10 w-10" src={userImg} />
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
                <button className="w-fit hover:bg-base-300 p-3 text-blue-400 font-medium rounded-lg">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </CustomTabPanel>

        {/* Part Time Jobs */}
        <CustomTabPanel value={value} index={4}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-5">
            {PartTimeJobs.map((job) => (
              <div key={job._id} className="bg-base-200 p-4 grid gap-2 rounded-xl">
                <div className="flex gap-3 items-center justify-between ">
                  <div className="flex gap-3 items-center">
                    <div className="border rounded-full h-10 w-10 overflow-hidden">
                      <img className="h-10 w-10" src={userImg} />
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
                <button className="w-fit hover:bg-base-300 p-3 text-blue-400 font-medium rounded-lg">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </CustomTabPanel>
      </Box>
    </div>
  );
}
