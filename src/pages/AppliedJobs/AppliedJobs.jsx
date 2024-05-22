import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";

const AppliedJobs = () => {
  const { user } = useContext(AuthContext);
  const [selectedCategory, setSelectedCategory] = useState("");

  const {
    data: appliedJobs,
    isLoading: appliedLoading,
    isError: appliedError,
  } = useQuery({
    queryKey: ["appliedJobs", user.email],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/applied?email=${user.email}`, {
        withCredentials: true,
      });
      return res.data;
    },
  });

  const {
    data: filteredAppliedJobs,
    isLoading: filteredLoading,
    isError: filteredError,
  } = useQuery({
    queryKey: ["filteredAppliedJobs", user.email, selectedCategory],
    queryFn: async () => {
      if (selectedCategory) {
        const res = await axios.get(
          `http://localhost:5000/applied?email=${user.email}&category=${selectedCategory}`,
          { withCredentials: true }
        );
        return res.data;
      }
    },
    enabled: !!selectedCategory,
  });

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
  };

  const jobsToRender = selectedCategory ? filteredAppliedJobs : appliedJobs;
  const loading = selectedCategory ? filteredLoading : appliedLoading;
  const error = selectedCategory ? filteredError : appliedError;

  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Job Nest || Applied Jobs</title>
      </Helmet>
      <h1 className="text-center text-4xl font-bold my-5">Jobs You Have Applied</h1>
      <div className="flex flex-col items-center justify-center my-5">
        <p className="text-center">Filter Jobs By Category</p>
        <form className="w-[350px] md:w-[480px] border overflow-hidden flex justify-between">
          <select
            name="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="w-full p-3 border-none outline-none"
          >
            <option value="">All</option>
            <option value="On Site">On Site</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Part-Time">Part Time</option>
          </select>
        </form>
      </div>
      <div className="overflow-x-auto">
        {loading && (
          <div className="h-screen flex items-center justify-center font-bold">
            Loading Applied Jobs...
          </div>
        )}
        {error && (
          <div className="h-screen flex items-center justify-center font-bold">
            Error While Loading Applied Jobs!
          </div>
        )}
        {!loading && !error && (
          <table className="table">
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
              {jobsToRender.map((job) => (
                <tr key={job._id}>
                  <th>
                    <div className="h-[40px] w-[200px]">
                      <img
                        className="h-full w-full object-cover object-center"
                        src={job.pictureUrl}
                        alt="Job Banner"
                      />
                    </div>
                  </th>
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
        )}
      </div>
    </div>
  );
};

export default AppliedJobs;
