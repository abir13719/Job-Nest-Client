import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import axios from "axios";
import { Container } from "@mui/material";
import JobCard from "../FeatureJobs/JobCard";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Container>
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
    <div className="">
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
          <div>
            {jobs.map((job) => {
              return (
                <div key={job._id}>
                  <JobCard job={job}></JobCard>
                </div>
              );
            })}
          </div>
        </CustomTabPanel>

        {/* OnSite Jobs */}
        <CustomTabPanel value={value} index={1}>
          <div>
            {onSiteJobs.map((job) => {
              return (
                <div key={job._id}>
                  <h1>{job.title}</h1>
                </div>
              );
            })}
          </div>
        </CustomTabPanel>

        {/* Remote Jobs */}
        <CustomTabPanel value={value} index={2}>
          <div>
            {RemoteJobs.map((job) => {
              return (
                <div key={job._id}>
                  <h1>{job.title}</h1>
                </div>
              );
            })}
          </div>
        </CustomTabPanel>

        {/* Hybrid Jobs */}
        <CustomTabPanel value={value} index={3}>
          <div>
            {HybridJobs.map((job) => {
              return (
                <div key={job._id}>
                  <h1>{job.title}</h1>
                </div>
              );
            })}
          </div>
        </CustomTabPanel>

        {/* Part Time Jobs */}
        <CustomTabPanel value={value} index={4}>
          <div>
            {PartTimeJobs.map((job) => {
              return (
                <div key={job._id}>
                  <h1>{job.title}</h1>
                </div>
              );
            })}
          </div>
        </CustomTabPanel>
      </Box>
    </div>
  );
}
