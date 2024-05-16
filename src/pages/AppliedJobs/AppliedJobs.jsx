import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/applied").then((data) => setAppliedJobs(data.data));
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-4xl font-bold my-5">Jobs You Have Applied</h1>
      <div className="flex flex-col items-center justify-center my-5">
        <p className="text-center">Filter Jobs By Category</p>
        <form className="w-[350px] md:w-[480px] border overflow-hidden flex justify-between">
          <select name="" id="" className="w-full p-3 border-none outline-none">
            <option value="On Site">On Site</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Part-Time">Part Time</option>
          </select>
        </form>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Banner</th>
              <th>Job Title</th>
              <th>Salary</th>
              <th>Resume</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {appliedJobs.map((job) => (
              <tr key={job._id}>
                <th>{job.pictureUrl}</th>
                <td>{job.title}</td>
                <td>{job.salaryRange}</td>
                <td>{job.resume}</td>
                <th>
                  <Link to={`/jobs/${job.jobId}`}>
                    <button className="w-fit hover:bg-base-300 p-3 text-blue-400 font-medium rounded-lg">
                      View Details
                    </button>
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppliedJobs;
