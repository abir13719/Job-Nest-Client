import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import img from "../../assets/sideImage.jpg";

const JobDetails = () => {
  const { id } = useParams();
  const [JobDetails, setJobDetails] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5000/jobs/${id}`).then((data) => {
      setJobDetails(data.data);
    });
  }, []);
  console.log(JobDetails);
  const { title, pictureUrl, description, salaryRange, applicantsNumber } = JobDetails;
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
    </div>
  );
};

export default JobDetails;
