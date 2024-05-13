import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const Registration = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [regisProblem, setRegisProblem] = useState("");

  const handleRegistration = (e) => {
    e.preventDefault();

    // getting form input values
    const form = e.target;
    const name = form.userName.value;
    const email = form.email.value;
    const photo = form.userPicture.value;
    const password = form.password.value;
    const cPassword = form.cPassword.value;

    // reseting problem state
    setRegisProblem("");

    // password validation
    if (password.length < 6) {
      setRegisProblem("Password must be at least 6 characters");
      return;
    } else if (!/[*\d]/.test(password)) {
      setRegisProblem("Password must have a number");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisProblem("Password must have a uppercase letter");
      return;
    } else if (!/[a-z]/.test(password)) {
      setRegisProblem("Password must have a lowercase letter");
      return;
    } else if (password !== cPassword) {
      setRegisProblem("Passwords do not match");
      return;
    }

    // creating new user
    createUser(email, password)
      .then((result) => {
        // setting additional user information
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        });

        // navigating to home page
        navigate("/");

        // reseting form inputs
        e.target.reset();
      })
      .catch((error) => {
        setRegisProblem(error.message.split("Error")[1].replace(/[()-.]/g, " "));
      });
  };

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
            <p className="p-10 text-lg md:text-xl  max-w-md text-center text-violet-100">
              Registered users can save job listings and track their application progress directly
              on the platform.
            </p>
            <Link to="/login">
              <button className="btn h-full md:h-14 border-none rounded-none w-32 text-base text-violet-100 bg-pink-800 hover:bg-pink-700">
                Login
              </button>
            </Link>
          </div>
        </div>

        {/* Form div */}
        <div className="col-span-12 md:col-span-7 p-5 lg:p-16">
          <form onSubmit={handleRegistration} className="grid grid-cols-2 gap-3 h-full ">
            <h1 className="text-4xl md:text-5xl text-pink-600 font-bold col-span-2">
              Registration
            </h1>
            <div className="col-span-2 md:col-span-1 space-y-1">
              <label htmlFor="userName" className="block font-medium">
                Name*
              </label>
              <input
                className="w-full py-3 md:py-4 px-3 outline-none font-medium"
                type="text"
                name="userName"
                id="userName"
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
              {regisProblem && <p className="text-pink-700 font-medium">{regisProblem}</p>}
            </div>

            <div className="col-span-2">
              <input
                className="w-full h-14 md:h-16 btn text-base bg-pink-700 hover:bg-pink-600 text-violet-100 rounded-none"
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
