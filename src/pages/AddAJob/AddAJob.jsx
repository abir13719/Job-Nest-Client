import { useContext, useState } from "react";
import addIcon from "../../assets/add-96.png";
import { AuthContext } from "../../providers/AuthProvider";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const AddAJob = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [deadline, setDeadline] = useState(new Date());
  const { user } = useContext(AuthContext);

  const mutation = useMutation({
    mutationFn: async (newJob) => {
      return await axios.post("http://localhost:5000/jobs", newJob).then((data) => data.data);
    },
    onSuccess: (data) => {
      if (data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Job added successfully",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
    },
    onError: () => {
      Swal.fire({
        title: "Error!",
        text: "There was an issue adding the job",
        icon: "error",
        confirmButtonText: "OK",
      });
    },
  });

  const handleAddJob = (e) => {
    e.preventDefault();
    // getting form input values
    const form = e.target;
    const newJob = {
      title: form.jobTitle.value,
      salaryRange: form.salary.value,
      pictureUrl: form.jobPicture.value,
      category: form.category.value,
      applicantsNumber: form.applicants.value,
      postingDate: startDate ? format(startDate, "dd/MM/yyyy") : null,
      applicationDeadline: deadline ? format(deadline, "dd/MM/yyyy") : null,
      postBy: form.userName.value,
      postByEmail: form.ownerEmail.value,
      description: form.description.value,
    };
    mutation.mutate(newJob);
    form.reset();
  };

  return (
    <div className="py-1 md:py-10">
      <Helmet>
        <title>Job Nest || Add Job</title>
      </Helmet>
      <div className="h-full container mx-auto grid grid-cols-12 bg-base-200 rounded-none md:rounded-3xl overflow-hidden">
        {/* Image div */}
        <div className="col-span-12 md:col-span-5 addBg">
          <div className="h-full flex flex-col items-center justify-center p-5">
            <img className="my-2" src={addIcon} />
            <h3 className="text-4xl md:text-5xl lg:text-6xl text-center font-extrabold text-violet-300">
              Post Job
            </h3>
            <p className="p-10 text-lg md:text-xl  max-w-md text-center text-violet-100">
              Let the world know, you need someone skilled to help you
            </p>
          </div>
        </div>

        {/* Form div */}
        <div className="col-span-12 md:col-span-7 p-5 lg:p-16">
          <form onSubmit={handleAddJob} className="grid grid-cols-2 gap-3 h-full ">
            <h1 className="text-2xl md:text-3xl text-pink-600 font-bold col-span-2">
              Add Job&apos;s Descriptions
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
              />
            </div>

            <div className="col-span-2 md:col-span-1 space-y-1">
              <label htmlFor="salary" className="block font-medium">
                Salary Range
              </label>
              <input
                className="w-full py-3 md:py-4 px-3 font-medium"
                type="number"
                name="salary"
                id="salary"
                placeholder="Salary Range"
              />
            </div>

            <div className="col-span-2 space-y-1">
              <label htmlFor="jobPicture" className="block font-medium">
                Job Banner
              </label>
              <input
                className="w-full py-3 md:py-4 px-3  font-medium"
                type="url"
                name="jobPicture"
                id="jobPicture"
                placeholder="URL of Your Job Banner"
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
                type="number"
                name="applicants"
                id="applicants"
                defaultValue={0}
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
                  dateFormat="dd/MM/yyyy"
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
                  dateFormat="dd/MM/yyyy"
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
                type="email"
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
              ></textarea>
            </div>

            <div className="col-span-2">
              <input
                className="w-full h-14 md:h-16 btn text-base bg-pink-700 hover:bg-pink-600 text-violet-100 rounded-none"
                type="submit"
                value="Add Job"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAJob;
