import userImg from "../../assets/user.png";

const JobCard = () => {
  return (
    <div className="border bg-base-200 my-5 p-4 grid gap-4">
      <div className="flex gap-3 items-center justify-between ">
        <div className="flex gap-3 items-center">
          <div className="border rounded-full h-10 w-10 overflow-hidden">
            <img className="h-10 w-10" src={userImg} />
          </div>
          <div>
            <p>username</p>
            <p>post: 03-03-24</p>
          </div>
        </div>
        <div>
          <p>Applied: 0</p>
          <p>Deadline: 03-03-24</p>
        </div>
      </div>
      <div className="">
        <h2 className="text-4xl">Marketing Manager</h2>
        <p>salary: 40k-50k</p>
      </div>
      <button className="w-fit hover:bg-base-300 p-3 text-blue-400 font-medium rounded-lg">
        View Details
      </button>
    </div>
  );
};

export default JobCard;
