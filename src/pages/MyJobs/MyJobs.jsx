import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { Helmet } from "react-helmet-async";

const JobApplicationPdf = ({ job }) => {
  const styles = StyleSheet.create({
    page: {
      flexDirection: "column",
      backgroundColor: "#E4E4E4",
      padding: 20,
    },
    section: {
      margin: 5,
      padding: 5,
      flexGrow: 1,
    },
  });

  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.section}>
          <Text>Job Title: {job.title}</Text>
        </View>
        <View style={styles.section}>
          <Text>Posting Date: {job.postingDate}</Text>
        </View>
        <View style={styles.section}>
          <Text>Application Deadline: {job.applicationDeadline}</Text>
        </View>
        <View style={styles.section}>
          <Text>Salary: {job.salaryRange}</Text>
        </View>
        <View style={styles.section}>
          <Text>Description: {job.description}</Text>
        </View>
      </Page>
    </Document>
  );
};

const MyJobs = () => {
  const { user } = useContext(AuthContext);

  const fetchJobs = async () => {
    const response = await axios.get(`http://localhost:5000/jobs?postByEmail=${user?.email}`);
    return response.data;
  };

  const {
    data: myJobs = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["myJobs", user?.email],
    queryFn: fetchJobs,
    refetchOnWindowFocus: true,
  });

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
            refetch();
          }
        });
      }
    });
  };

  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Job Nest || My Jobs</title>
      </Helmet>
      <h1 className="text-center text-4xl font-bold my-5">Your Jobs To Find Employee</h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Posting Date</th>
              <th>Deadline</th>
              <th>Salary</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan="7" className="text-center font-bold">
                  Loading Your Jobs...
                </td>
              </tr>
            ) : isError ? (
              <tr>
                <td colSpan="7" className="text-center font-bold">
                  Error While Loading Your Jobs!
                </td>
              </tr>
            ) : (
              myJobs.map((job) => (
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
                  <th>
                    <PDFDownloadLink
                      document={<JobApplicationPdf job={job} />}
                      fileName={`job-${job.title}.pdf`}
                    >
                      {({ loading }) =>
                        loading ? (
                          <button className="w-fit hover:bg-base-300 p-3 text-blue-500 font-medium rounded-lg">
                            Generating PDF...
                          </button>
                        ) : (
                          <button className="w-fit hover:bg-base-300 p-3 text-blue-500 font-medium rounded-lg">
                            Download Application
                          </button>
                        )
                      }
                    </PDFDownloadLink>
                  </th>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyJobs;
