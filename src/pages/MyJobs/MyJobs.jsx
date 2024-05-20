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
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/jobs/${_id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire("Deleted!", "Your job has been deleted.", "success");
            const remainingJobs = myJobs.filter((job) => job._id !== _id);
            setMyJobs(remainingJobs);
          }
        });
      }
    });
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-4xl font-bold my-5">Your Jobs To Find Employee</h1>
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
