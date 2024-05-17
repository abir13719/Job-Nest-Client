import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";

const AllJobs = () => {
  const [allJobs, setAllJobs] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/jobs").then((data) => {
      setAllJobs(data.data);
    });
  }, []);

  const handleInputChange = (value) => {
    setSearchTxt(value);
    handleSearch(value);
  };
  const handleSearch = (value) => {
    axios.get(`http://localhost:5000/jobs?title=${value}`).then((data) => setAllJobs(data.data));
  };
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-4xl font-bold my-5">Find Your Dream Job</h1>
      <div className="flex justify-center my-5">
        <div className="w-[350px] md:w-[480px] p-3 border rounded-full overflow-hidden flex items-center gap-2">
          <div className="text-2xl">
            <GoSearch />
          </div>
          <input
            className="w-full text-base outline-none"
            type="search"
            name="searchTxt"
            value={searchTxt}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder="Search here"
          />
        </div>
      </div>
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
