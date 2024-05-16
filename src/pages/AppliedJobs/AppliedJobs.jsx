import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const AppliedJobs = () => {
  const [appiledJobs, setAppliedJobs] = useState([]);
  const { user } = useContext(AuthContext);
  const qLink = `http://localhost:5000/jobs/applied`;

  useEffect(() => {
    axios.get(qLink).then((data) => {
      setAppliedJobs(data.data);
    });
  }, [qLink]);
  console.log(appiledJobs);
  return (
    <div className="container mx-auto">
      <h1>This is applied jobs route {appiledJobs.length}</h1>
    </div>
  );
};

export default AppliedJobs;
