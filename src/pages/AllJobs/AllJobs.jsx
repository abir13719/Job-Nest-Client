import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllJobs = () => {
  const [allJobs, setAllJobs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/jobs").then((data) => setAllJobs(data.data));
  }, []);

  console.log(allJobs);
  return (
    <div className="container mx-auto">
      <h1>This is all jobs route</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Posting Date</th>
              <th>Deadline</th>
              <th>Salary</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allJobs.map((job) => (
              <tr key={job._id}>
                <th>{job.title}</th>
                <td>{job.postingDate}</td>
                <td>{job.applicationDeadline}</td>
                <td>{job.salaryRange}</td>
                <th>
                  <Link to={`/jobs/${job._id}`}>
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

export default AllJobs;
