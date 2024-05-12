import { Link } from "react-router-dom";

const Registration = () => {
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
            <Link to="/login">
              <button className="btn h-full md:h-14 border-none rounded-none w-32 text-base text-violet-200 bg-pink-800 hover:bg-pink-700">
                Login
              </button>
            </Link>
          </div>
        </div>

        {/* Form div */}
        <div className="col-span-12 md:col-span-7 p-5 lg:p-16">
          <form className="grid grid-cols-2 gap-3 h-full ">
            <h1 className="text-4xl md:text-5xl text-pink-600 font-bold col-span-2">
              Registration
            </h1>
            <div className="col-span-2 md:col-span-1 space-y-1">
              <label htmlFor="name" className="block font-medium">
                Name*
              </label>
              <input
                className="w-full py-3 md:py-4 px-3 outline-none font-medium"
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
              />
            </div>

            <div className="col-span-2 md:col-span-1 space-y-1">
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
              <label htmlFor="userPicture" className="block font-medium">
                Profile Picture
              </label>
              <input
                className="w-full py-3 md:py-4 px-3  outline-none font-medium"
                type="text"
                name="userPicture"
                id="userPicture"
                placeholder="Your Profile URL"
              />
            </div>

            <div className="col-span-2 md:col-span-1 space-y-1">
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
            <div className="col-span-2 md:col-span-1 space-y-1">
              <label htmlFor="cPassword" className="block font-medium">
                Confirm Password*
              </label>
              <input
                className="w-full py-3 md:py-4 px-3 outline-none font-medium"
                type="text"
                name="cPassword"
                id="cPassword"
                placeholder="Confirm Password"
              />
            </div>

            <div className="col-span-2">
              <input
                className="w-full h-14 md:h-16 btn text-base bg-pink-700 hover:bg-pink-600 text-violet-200 rounded-none"
                type="submit"
                value="Register"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
