import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { isBefore, parse } from "date-fns";

const JobDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [jobDetails, setJobDetails] = useState({});
  const [isApplied, setIsApplied] = useState(false);
  const [isDeadlineExpired, setIsDeadlineExpired] = useState(false);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/jobs/${id}`);
        const jobData = response.data;
        setJobDetails(jobData);

        const deadlineDate = parse(jobData.applicationDeadline, "dd/MM/yyyy", new Date());
        setIsDeadlineExpired(isBefore(deadlineDate, new Date()));

        if (user?.email) {
          const appliedResponse = await axios.get(
            `http://localhost:5000/applied/${id}/${user.email}`
          );
          setIsApplied(appliedResponse.data.applied);
        }
      } catch (error) {
        console.error("Error fetching job details or applied status:", error);
      }
    };

    fetchJobDetails();
  }, [id, user]);

  const {
    _id,
    title,
    description,
    pictureUrl,
    salaryRange,
    applicantsNumber,
    category,
    postByEmail,
  } = jobDetails;

  const handleApply = () => {
    const modal = document.getElementById("my_modal_3");
    if (modal) {
      modal.showModal();
    }
  };

  const handleApplySubmit = (e) => {
    e.preventDefault();

    const userInfo = {
      jobId: _id,
      title,
      pictureUrl,
      salaryRange,
      category,
      description,
      name: e.target.name.value,
      email: user.email,
      resume: e.target.resume.value,
    };

    fetch("http://localhost:5000/applied", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Application submitted successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
          setIsApplied(true); // Update state to reflect application status
          const modal = document.getElementById("my_modal_3");
          if (modal) {
            modal.close();
          }
          e.target.reset();
        }
      })
      .catch((error) => {
        console.error("Error submitting application:", error);
      });
  };

  return (
    <div className="container mx-auto bg-base-200 my-5 p-5 rounded-xl">
      <div>
        <img
          className="h-[70vh] w-full rounded-xl object-cover object-center"
          src={pictureUrl}
          alt={title}
        />
      </div>
      <h1 className="text-4xl font-bold my-4">{title}</h1>
      <div className="flex gap-3 my-4">
        <p>Salary Range: {salaryRange}</p>
        <p>Applied: {applicantsNumber}</p>
      </div>
      <p>{description}</p>

      {user?.email === postByEmail ? (
        <button
          className="mt-5 btn border-none rounded-none text-base text-gray-500 bg-gray-300 cursor-not-allowed"
          disabled
        >
          You can not apply to your own job
        </button>
      ) : isDeadlineExpired ? (
        <button
          className="mt-5 btn border-none rounded-none text-base text-gray-500 bg-gray-300 cursor-not-allowed"
          disabled
        >
          Application deadline has expired
        </button>
      ) : isApplied ? (
        <button
          className="mt-5 btn border-none rounded-none text-base text-gray-500 bg-gray-300 cursor-not-allowed"
          disabled
        >
          Already applied
        </button>
      ) : (
        <button
          className="mt-5 btn border-none rounded-none text-base text-violet-100 bg-pink-800 hover:bg-pink-700"
          onClick={handleApply}
        >
          Apply Now
        </button>
      )}

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-base-200">
          <h1 className="text-center font-bold text-2xl">Confirm Apply</h1>
          <form onSubmit={handleApplySubmit}>
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => {
                const modal = document.getElementById("my_modal_3");
                if (modal) {
                  modal.close();
                }
              }}
            >
              ✕
            </button>
            <div className="space-y-2 mt-4">
              <input
                className="w-full py-4 px-3 border outline-none font-medium"
                type="text"
                name="name"
                placeholder="User Name"
                defaultValue={user?.displayName}
                readOnly
              />
            </div>
            <div className="space-y-2 mt-4">
              <input
                className="w-full py-4 px-3 border outline-none font-medium"
                type="text"
                name="email"
                placeholder="User Email"
                defaultValue={user?.email}
                readOnly
              />
            </div>
            <div className="space-y-2 mt-4">
              <input
                className="w-full py-4 px-3 border outline-none font-medium"
                type="text"
                name="resume"
                placeholder="Resume Link"
              />
            </div>
            <div>
              <input
                className="w-full my-4 md:h-16 btn text-base bg-pink-700 hover:bg-pink-600 text-violet-100"
                type="submit"
                value="Submit"
              />
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default JobDetails;
