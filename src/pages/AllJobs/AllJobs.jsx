import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";

const fetchAllJobs = async ({ queryKey }) => {
  const [_, searchText] = queryKey;
  const res = await axios.get(`https://job-nest-server-seven.vercel.app/jobs?title=${searchText}`);
  return res.data;
};

const AllJobs = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const queryClient = useQueryClient();

  const { data: allJobs = [] } = useQuery({
    queryKey: ["allJobs", searchTxt],
    queryFn: fetchAllJobs,
    keepPreviousData: true,
  });

  useEffect(() => {
    queryClient.invalidateQueries(["allJobs", searchTxt]);
  }, [searchTxt, queryClient]);

  const handleInputChange = (event) => {
    setSearchTxt(event.target.value);
  };

  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Job Nest || All Jobs</title>
      </Helmet>
      <h1 className="text-center text-4xl font-bold my-5">Find Your Dream Job</h1>
      <div className="flex justify-center my-5">
        <div className="w-[350px] md:w-[480px] p-3 border rounded-full overflow-hidden flex items-center gap-2">
          <div className="text-2xl">
            <GoSearch />
          </div>
          <input
            className="w-full bg-transparent text-base outline-none"
            type="search"
            name="searchTxt"
            value={searchTxt}
            onChange={handleInputChange}
            placeholder="Search here"
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
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
