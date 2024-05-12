import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="py-1 md:py-10">
      <div className="h-full md:h-[560px] container mx-auto grid grid-cols-12 bg-base-200 rounded-none md:rounded-3xl overflow-hidden">
        {/* Image div */}
        <div className="col-span-12 md:col-span-5 sideBg">
          <div className="h-full flex flex-col items-center justify-center p-5">
            <h3 className="text-4xl md:text-5xl lg:text-6xl text-center font-extrabold text-violet-300">
              Access to <br />
              Exclusive Job
            </h3>
            <p className="p-10 text-lg md:text-xl  max-w-md text-center text-violet-200">
              Registered users can save job listings and track their application progress directly
              on the platform.
            </p>
            <Link to="/registration">
              <button className="btn h-full md:h-14 border-none rounded-none w-32 text-base text-violet-200 bg-pink-800 hover:bg-pink-700">
                Registration
              </button>
            </Link>
          </div>
        </div>

        {/* Form div */}
        <div className="col-span-12 md:col-span-7 p-5 lg:p-16">
          <form className="grid grid-cols-2 gap-3 h-full">
            <h1 className="text-4xl md:text-5xl font-bold col-span-2 text-pink-600">Login</h1>

            <div className="col-span-2 space-y-1">
              <label htmlFor="email" className="block font-medium">
                Email*
              </label>
              <input
                className="w-full py-3 md:py-4 px-3 outline-none font-medium"
                type="text"
                name="email"
                id="email"
                placeholder="Your Email"
              />
            </div>

            <div className="col-span-2 space-y-1">
              <label htmlFor="password" className="block font-medium">
                Password*
              </label>
              <input
                className="w-full py-3 md:py-4 px-3 outline-none font-medium"
                type="text"
                name="password"
                id="password"
                placeholder="Your Password"
              />
            </div>

            <div className="col-span-2">
              <input
                className="w-full h-14 md:h-16 btn text-base bg-pink-700 hover:bg-pink-600 text-violet-200 rounded-none"
                type="submit"
                value="Login"
              />
            </div>

            <div className="grid grid-cols-2 gap-2 items-center justify-center col-span-2">
              <p className="col-span-2 text-center">or Login with</p>
              <div className="flex gap-2 items-center border-2 p-3 md:p-5 cursor-pointer border-pink-700">
                <FaGoogle />
                Google
              </div>
              <div className="flex gap-2 items-center border-2 p-3 md:p-5 cursor-pointer border-pink-700">
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
