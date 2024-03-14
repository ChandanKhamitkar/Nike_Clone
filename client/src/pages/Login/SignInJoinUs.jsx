import { useNavigate } from "react-router-dom";
import NikeLogo from "../../assets/nikeLogo.png";
import JordanLogo from "../../assets/jordanLogo.png";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignInJoinUs() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const handleEmailChange = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(inputEmail));
  };

  const [selectedcountry, setSelectedCountry] = useState("India");
  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const navigate = useNavigate();

  const submit = async (event) => {
    event.preventDefault();

    try {

      const functionThatReturnPromise = () =>
        new Promise((resolve) => setTimeout(resolve, 3000));
      toast.promise(functionThatReturnPromise, {
        pending: "Request is pending",
        success: "Request successfull 👌",
        error: "Request rejected 🤯",
      });

      await axios
        .post("https://nike-clone-backend.vercel.app/api/user/checkUser", {
          email: email,
          country: selectedcountry,
        })
        .then((res) => {
          if (res.data.message === "You are not a member." || res.data.message === "Email registered succesfully.") {
            navigate("/signup", {state:{email : email, OTP : res.data.OTP}});
          }
          else if(res.data.message === "You are already a user."){
            navigate("/login", {state:{email : email}});
          }
        });
    } catch (error) {
      toast.error("An error occurred 😞");
      console.log(error);
    }
  };

  return (
    <div className="w-[30%] flex flex-col justify-center items-center mt-8 space-y-10 mx-auto md:w-[40%] mobile:w-[70%] mobile:space-y-7">
      <div className="flex space-x-4 self-start">
        <img src={NikeLogo} alt="Nike Logo" className="w-[50px] h-[50px]  md:w-[30px] md:h-[30px]" />
        <img src={JordanLogo} alt="Jordan Logo" className="w-[50px] h-[50px] md:w-[30px] md:h-[30px]" />
      </div>

      <p className="text-left text-3xl font-semibold md:text-2xl mobile:text-xl">
        Enter your email to join us or sign in.
      </p>
      <div className="flex space-x-4 self-start">
        <p className="font-semibold">{selectedcountry}</p>
        <select
          name="country"
          id="country"
          value={selectedcountry}
          onChange={handleCountryChange}
          className="underline text-gray-400 font-medium appearance-none mobile:text-sm"
        >
          <option value="" >Change</option>
          <option value="America">America</option>
          <option value="Germany">Germany</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="Newzland">Newzland</option>
        </select>
      </div>

      <form action="POST" onSubmit={submit} className="self-start space-y-10">
        <div className="w-full flex flex-col space-y-0 self-start">
          <label
            htmlFor="email"
            className="text-gray-400 text-base font-medium mobile:text-sm"
          >
            Email*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            required
            maxLength="50"
            className="outline-none border border-gray-400 px-5 py-3 rounded-xl w-full active:shadow-inner font-medium tracking-wide mobile:py-2 mobile:text-sm"
            onChange={handleEmailChange}
            style={{ borderColor: isValidEmail ? "#9CA3AF" : "#EF4444" }}
          />
        </div>

        <p className="text-gray-500 self-start font-medium text-base mobile:text-sm">
          By continuing, I agree to Nike's{" "}
          <span className="underline">Privacy Policy</span> and{" "}
          <span className="underline">Terms of Use.</span>
        </p>

        <div className="float-right">
          <button
            type="submit"
            value="submit"
            className="px-6 py-2 rounded-3xl font-semibold bg-black text-white sm:px-4 sm:py-1 sm:text-sm"
          >
            Continue
          </button>
          <ToastContainer position="bottom-center"/>
        </div>
      </form>
    </div>
  );
}

export default SignInJoinUs;
