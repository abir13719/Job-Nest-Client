import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col gap-7 items-center justify-center h-screen errorPage">
      <h1 className="text-5xl lg:text-8xl text-center font-black">Something Wrong!</h1>

      <Link to="/">
        <button className="btn bg-pink-400 hover:bg-pink-500 border-none text-black text-base">
          Back To Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
