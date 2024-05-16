import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import img from "../../assets/sideImage.jpg";
import { AuthContext } from "../../providers/AuthProvider";

const JobDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [JobDetails, setJobDetails] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5000/jobs/${id}`).then((data) => {
      setJobDetails(data.data);
    });
  }, [id]);

  console.log(JobDetails);

  const { _id, title, description, pictureUrl, salaryRange, applicantsNumber } = JobDetails;

  const handleApplyConfirmed = (e) => {
    const userInfo = {
      jobId: _id,
      title: title,
      pictureUrl: pictureUrl,
      salaryRange: salaryRange,
      description: description,
      name: e.target.name.value,
      email: e.target.email.value,
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
        console.log(data);
        if (data.insertedId) {
          alert("Applied successfully");
          e.target.reset();
        }
      });
  };

  return (
    <div className="container mx-auto bg-base-200 my-5 p-5 rounded-xl">
      <div>
        <img className="h-[70vh] w-full rounded-xl object-cover object-center" src={img} alt="" />
      </div>
      <h1 className="text-4xl font-bold my-4">{title}</h1>
      <div className="flex gap-3 my-4">
        <p>Salary Range: {salaryRange}</p>
        <p>Applied: {applicantsNumber}</p>
      </div>
      <p>{description}</p>

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="mt-5 btn border-none rounded-none text-base text-violet-100 bg-pink-800 hover:bg-pink-700"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Apply Now
      </button>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-base-200">
          <h1 className="text-center font-bold text-2xl">Confirm Apply</h1>
          <form onSubmit={handleApplyConfirmed} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
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
