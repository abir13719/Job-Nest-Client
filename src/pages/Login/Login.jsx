import { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { LoginUser, LoginWithGoogle, LoginWithGitHub } = useContext(AuthContext);
  const [logInProblem, setLogInProblem] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setLogInProblem("");

    LoginUser(email, password)
      .then(() => {
        navigate(location?.state ? location?.state : "/");
        e.target.reset();
      })
      .catch((error) => {
        setLogInProblem(error.message.split("Error")[1].replace(/[()-.]/g, " "));
      });
  };

  // logging in user with google account
  const handleGoogleLogin = () => {
    LoginWithGoogle()
      .then(() => {
        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        setLogInProblem(error.message.split("Error")[1].replace(/[()-.]/g, " "));
      });
  };

  // logging in user with github account
  const handleGithubLogin = () => {
    LoginWithGitHub()
      .then(() => {
        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        setLogInProblem(error.message.split("Error")[1].replace(/[()-.]/g, " "));
      });
  };
  return (
    <div className="py-1 md:py-10">
      <Helmet>
        <title>Job Nest || Login</title>
      </Helmet>
      <div className="h-full md:h-[560px] container mx-auto grid grid-cols-12 bg-base-200 rounded-none md:rounded-3xl overflow-hidden">
        {/* Image div */}
        <div className="col-span-12 md:col-span-5 sideBg">
          <div className="h-full flex flex-col items-center justify-center p-5">
            <h3 className="text-4xl md:text-5xl lg:text-6xl text-center font-extrabold text-violet-100">
              Access to <br />
              Exclusive Job
            </h3>
            <p className="p-10 text-lg md:text-xl  max-w-md text-center text-violet-100">
              Registered users can save job listings and track their application progress directly
              on the platform.
            </p>
            <Link to="/registration">
              <button className="btn h-full md:h-14 w-32 border-none rounded-none text-base text-violet-100 bg-pink-800 hover:bg-pink-700">
                Registration
              </button>
            </Link>
          </div>
        </div>

        {/* Form div */}
        <div className="col-span-12 md:col-span-7 p-5 lg:p-16">
          <form onSubmit={handleLogin} className="grid grid-cols-2 gap-3 h-full">
            <h1 className="text-4xl md:text-5xl font-bold col-span-2 text-pink-600">Login</h1>

            <div className="col-span-2 space-y-1">
              <label htmlFor="email" className="block font-medium">
                Email*
              </label>
              <input
                className="w-full py-3 md:py-4 px-3 outline-none font-medium"
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="col-span-2 space-y-1">
              <label htmlFor="password" className="block font-medium">
                Password*
              </label>
              <input
                className="w-full py-3 md:py-4 px-3 outline-none font-medium"
                type="password"
                name="password"
                id="password"
                placeholder="Your Password"
                required
              />
            </div>
            <div className="col-span-2">
              {logInProblem && <p className="text-pink-700 font-medium">{logInProblem}</p>}
            </div>
            <div className="col-span-2">
              <input
                className="w-full h-14 md:h-16 btn text-base bg-pink-700 hover:bg-pink-600 text-violet-100 rounded-none"
                type="submit"
                value="Login"
              />
            </div>

            <div className="grid grid-cols-2 gap-2 items-center justify-center col-span-2">
              <p className="col-span-2 text-center">or Login with</p>
              <div
                onClick={handleGoogleLogin}
                className="flex gap-2 items-center border-2 p-3 md:p-5 cursor-pointer border-pink-700"
              >
                <FaGoogle />
                Google
              </div>
              <div
                onClick={handleGithubLogin}
                className="flex gap-2 items-center border-2 p-3 md:p-5 cursor-pointer border-pink-700"
              >
                <FaGithub />
                Github
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
