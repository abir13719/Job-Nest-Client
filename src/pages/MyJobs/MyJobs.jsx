import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyJobs = () => {
  const { user } = useContext(AuthContext);
  const [myJobs, setMyJobs] = useState([]);

  const url = `http://localhost:5000/jobs?postByEmail=${user?.email}`;
  useEffect(() => {
    axios.get(url).then((data) => {
      setMyJobs(data.data);
    });
  }, [url]);

  const handleDelete = (_id) => {
    fetch(`http://localhost:5000/jobs/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Job deleted successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
          const remainingJob = myJobs.filter((job) => job._id !== _id);
          setMyJobs(remainingJob);
        }
      });
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-4xl font-bold my-5">Find Your Dream Job</h1>
      <div className="flex justify-center my-5">
        <form className="w-[350px] md:w-[480px] border rounded-full overflow-hidden flex justify-between">
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
              <th></th>
            </tr>
          </thead>
          <tbody>
            {myJobs.map((job) => (
              <tr key={job._id}>
                <th>{job.title}</th>
                <td>{job.postingDate}</td>
                <td>{job.applicationDeadline}</td>
                <td>{job.salaryRange}</td>
                <td>
                  <Link to={`/jobs/update/${job._id}`}>
                    <button className="w-fit hover:bg-base-300 p-3 text-green-500 font-medium rounded-lg">
                      Update
                    </button>
                  </Link>
                </td>
                <th>
                  <button
                    onClick={() => handleDelete(job._id)}
                    className="w-fit hover:bg-base-300 p-3 text-red-500 font-medium rounded-lg"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyJobs;
