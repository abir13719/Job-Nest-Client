import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllJobs = () => {
  const [allJobs, setAllJobs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/jobs").then((data) => setAllJobs(data.data));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const srcTxt = e.target.searchTxt.value;
    console.log(srcTxt);
  };
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-4xl font-bold my-5">Find Your Dream Job</h1>
      <div className="flex justify-center my-5">
        <form
          onSubmit={handleSearch}
          className="w-[350px] md:w-[480px] border rounded-full overflow-hidden flex justify-between"
        >
          <input
            className="py-3 pl-5 pr-2 w-full text-base outline-none"
            type="search"
            name="searchTxt"
            id=""
          />
          <input
            className="btn bg-base-300 rounded-none border-none outline-none h-full p-3"
            type="submit"
            value="Search"
          />
        </form>
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
