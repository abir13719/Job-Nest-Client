import { useContext, useState } from "react";
import addIcon from "../../assets/add-96.png";
import { AuthContext } from "../../providers/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateJob = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [deadline, setDeadline] = useState(new Date());
  const { user } = useContext(AuthContext);
  const loadedJobData = useLoaderData();
  console.log(loadedJobData);

  const handleUpdateJob = (e) => {
    e.preventDefault();

    // getting form input values
    const form = e.target;
    const updatedJob = {
      title: form.jobTitle.value,
      salaryRange: form.salary.value,
      pictureUrl: form.jobPicture.value,
      category: form.category.value,
      applicantsNumber: form.applicants.value,
      postingDate: startDate,
      applicationDeadline: deadline,
      postBy: form.userName.value,
      postByEmail: form.ownerEmail.value,
      description: form.description.value,
    };

    // Updating Database
    fetch(`http://localhost:5000/jobs/${loadedJobData._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedJob),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Job updated successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };

  return (
    <div className="py-1 md:py-10">
      <div className="h-full container mx-auto grid grid-cols-12 bg-base-200 rounded-none md:rounded-3xl overflow-hidden">
        {/* Image div */}
        <div className="col-span-12 md:col-span-5 addBg">
          <div className="h-full flex flex-col items-center justify-center p-5">
            <img className="my-2" src={addIcon} />
            <h3 className="text-4xl md:text-5xl lg:text-6xl text-center font-extrabold text-violet-300">
              Update Job
            </h3>
            <p className="p-10 text-lg md:text-xl  max-w-md text-center text-violet-100">
              Accurate and more information can make the process easy to find a skilled employee
            </p>
          </div>
        </div>

        {/* Form div */}
        <div className="col-span-12 md:col-span-7 p-5 lg:p-16">
          <form onSubmit={handleUpdateJob} className="grid grid-cols-2 gap-3 h-full ">
            <h1 className="text-2xl md:text-3xl text-pink-600 font-bold col-span-2">
              Update Information
            </h1>
            <div className="col-span-2 md:col-span-1 space-y-1">
              <label htmlFor="jobTitle" className="block font-medium">
                Job Title
              </label>
              <input
                className="w-full py-3 md:py-4 px-3 font-medium"
                type="text"
                name="jobTitle"
                id="jobTitle"
                placeholder="Title of Your Job"
                defaultValue={loadedJobData?.title}
              />
            </div>

            <div className="col-span-2 md:col-span-1 space-y-1">
              <label htmlFor="salary" className="block font-medium">
                Salary Range
              </label>
              <input
                className="w-full py-3 md:py-4 px-3 font-medium"
                type="text"
                name="salary"
                id="salary"
                placeholder="Salary Range"
                defaultValue={loadedJobData?.salaryRange}
              />
            </div>

            <div className="col-span-2 space-y-1">
              <label htmlFor="jobPicture" className="block font-medium">
                Job Banner
              </label>
              <input
                className="w-full py-3 md:py-4 px-3  font-medium"
                type="text"
                name="jobPicture"
                id="jobPicture"
                placeholder="URL of Your Job Banner"
                defaultValue={loadedJobData?.pictureUrl}
              />
            </div>

            <div className="col-span-2 md:col-span-1 space-y-1">
              <label htmlFor="category" className="block font-medium">
                Category
              </label>
              <select
                id="category"
                name="category"
                className="w-full py-3 md:py-4 px-3 font-medium"
                defaultValue={loadedJobData?.category}
              >
                <option value="On Site">On Site</option>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Part-Time">Part Time</option>
              </select>
            </div>

            <div className="col-span-2 md:col-span-1 space-y-1">
              <label htmlFor="applicants" className="block font-medium">
                Job Applicants
              </label>
              <input
                className="w-full py-3 md:py-4 px-3 font-medium"
                type="text"
                name="applicants"
                id="applicants"
                defaultValue={loadedJobData?.applicantsNumber}
              />
            </div>

            <div className="col-span-2 md:col-span-1 space-y-1">
              <label htmlFor="postDate" className="block font-medium">
                Posting Date
              </label>
              <div className="customDatePickerWidth">
                <DatePicker
                  className="block w-full py-3 md:py-4 px-3 font-medium"
                  minDate={new Date()}
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  defaultValue={loadedJobData?.postingDate}
                />
              </div>
            </div>
            <div className="col-span-2 md:col-span-1 space-y-1">
              <label htmlFor="postDate" className="block font-medium">
                Applicants Deadline
              </label>
              <div className="customDatePickerWidth">
                <DatePicker
                  className="block w-full py-3 md:py-4 px-3 font-medium"
                  minDate={new Date()}
                  selected={deadline}
                  onChange={(date) => setDeadline(date)}
                  defaultValue={loadedJobData?.applicationDeadline}
                />
              </div>
            </div>

            <div className="col-span-2 md:col-span-1 space-y-1">
              <label htmlFor="userName" className="block font-medium">
                Owner Name
              </label>
              <input
                className="w-full py-3 md:py-4 px-3 font-medium"
                type="text"
                name="userName"
                id="userName"
                defaultValue={user?.displayName}
                readOnly
              />
            </div>

            <div className="col-span-2 md:col-span-1 space-y-1">
              <label htmlFor="ownerEmail" className="block font-medium">
                Owner Email
              </label>
              <input
                className="w-full py-3 md:py-4 px-3 font-medium"
                type="text"
                name="ownerEmail"
                id="ownerEmail"
                defaultValue={user?.email}
                readOnly
              />
            </div>

            <div className="col-span-2 space-y-1">
              <label htmlFor="description" className="block font-medium">
                Description
              </label>
              <textarea
                name="description"
                id="description"
                rows="3"
                className="w-full py-2 px-3 font-medium"
                defaultValue={loadedJobData?.description}
              ></textarea>
            </div>

            <div className="col-span-2">
              <input
                className="w-full h-14 md:h-16 btn text-base bg-pink-700 hover:bg-pink-600 text-violet-100 rounded-none"
                type="submit"
                value="Update Job"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateJob;
