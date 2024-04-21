import { useNavigate, useLocation } from "react-router-dom";
import NikeLogo from "../../assets/nikeLogo.png";
import JordanLogo from "../../assets/jordanLogo.png";
import { useState, useEffect } from "react";
import Button from "../Components/Button";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const baseURL = process.env.REACT_APP_BASE_API_URL;

function SignUp() {

    const navigate = useNavigate();
    const location = useLocation();
    const [email , setEmail] = useState("");
    const [actualOTP, setActualOTP] = useState(0);


    useEffect(() => {
        if (location.state && location.state.email) {
            setEmail(location.state.email);
        }
        if(location.state && location.state.OTP){
          setActualOTP(location.state.OTP);
        }
    }, [location.state]);



    const [enteredOTP , setEnteredOTP] = useState(0);
    const handleOTP = (e) => {
      setEnteredOTP(e.target.value);
    }


  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    dob: "",
    pincode : "",
    address : ""
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const [password, setPassword] = useState("");
  const [isvalidPassword, setValidPassword] = useState(false);
  const [conditionPass, setConditionPass] = useState("X");
  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    setValidPassword(passwordRegex.test(inputPassword));
    if(isvalidPassword){
      setConditionPass("✅");
    }
  };


  const signUp = async (event) => {
    event.preventDefault();

    try {

      if(enteredOTP !== actualOTP){
        console.log(`Entered otp is = ${enteredOTP}`);
        toast.error("Opps.. entered OTP is not correct. ❌");
      }
      else{
        console.log(`Entered correct otp is = ${enteredOTP} and actual OTP is --- ${actualOTP}`);

        await axios.post(`${baseURL}/api/user/signUp`, {
          email : email,
          firstname: formData.firstname,
          lastname: formData.lastname,
          password: password,
          pincode : formData.pincode,
          address : formData.address,
          dob: formData.dob,
          verified : true,
        })
        .then((res) => {
          if(res.data.message === "Successfully Registered."){
            toast.success("Successfully Registered");
              console.log("Loading...");

              toast.info("You will be redirected to login page.")
              setTimeout(() => {
                  console.log("Loading complete!");
                  navigate("/signin");  
                }, 3000);
              
          }
        })
      }
    } catch (error) {
      toast.error("An error occurred 😞");
      console.log(error);
    }
  };

  return (
    <div className="w-[30%] flex flex-col justify-center items-center mt-8 space-y-10 mx-auto select-none md:w-[40%] mobile:w-[70%] mobile:space-y-5">
      <div className="flex space-x-4 self-start">
        <img src={NikeLogo} alt="Nike Logo" className="w-[50px] h-[50px] md:w-[30px] md:h-[30px]" />
        <img src={JordanLogo} alt="Jordan Logo" className="w-[50px] h-[50px] md:w-[30px] md:h-[30px]" />
      </div>

      <p className="self-start text-3xl font-semibold md:text-2xl mobile:text-xl">
        Now lets make you a Nike member.
      </p>
      <div className="self-start flex space-x-2 mobile:flex-col mobile:space-x-0">
        <p className="text-left text-base ">We've sent code to</p>
        <p className="text-left text-base font-semibold">{email}</p>
      </div>

      <form className="space-y-6 w-full" onSubmit={signUp}>
        <div>
          <label
            htmlFor="code"
            className="block text-sm font-medium leading-6 text-gray-900 mobile:text-sm"
          >
            Code*
          </label>
          <div className="mt-2">
            <input
            onChange={(e) => handleOTP(e)}
              id="code"
              name="code"
              type="number"
              autoComplete="off"
              maxLength={6}
              required
              className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 [&::-webkit-inner-spin-button]:appearance-none [appearance:textfield] mobile:py-2 mobile:text-sm"
            />
          </div>
        </div>

        <div className="flex justify-between space-x-3">
          <div className="w-1/2">
            <label
              htmlFor="firstname"
              className="block text-sm font-medium leading-6 text-gray-900 mobile:text-sm"
            >
              First Name*
            </label>
            <div className="mt-2">
              <input
                onChange={handleInputChange}
                value={formData.firstname}
                id="firstname"
                name="firstname"
                type="text"
                autoComplete="off"
                required
                className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mobile:py-2 mobile:text-sm"
              />
            </div>
          </div>

          <div className="w-1/2">
            <label
              htmlFor="lastname"
              className="block text-sm font-medium leading-6 text-gray-900 mobile:text-sm"
            >
              Last Name*
            </label>
            <div className="mt-2">
              <input
                onChange={handleInputChange}
                value={formData.lastname}
                id="lastname"
                name="lastname"
                type="text"
                autoComplete="off"
                required
                className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mobile:py-2 mobile:text-sm"
              />
            </div>
          </div>
        </div>

        <div className="flex space-x-3 justify-between">

            <div className="w-1/2">
              <label
                htmlFor="address"
                className="block text-sm font-medium leading-6 text-gray-900 mobile:text-sm"
              >
                Address*
              </label>
              <div className="mt-2">
                <textarea
                  onChange={handleInputChange}
                  value={formData.address}
                  id="address"
                  placeholder='Enter your address'
                  name="address"
                  type="text"
                  rows={3}
                  cols={30}
                  autoComplete="off"
                  required
                  className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mobile:py-2 mobile:text-sm"
                />
              </div>
            </div>

            <div className="w-1/2">
            <label
              htmlFor="pincode"
              className="block text-sm font-medium leading-6 text-gray-900 mobile:text-sm"
            >
              Pincode*
            </label>
            <div className="mt-2">
              <input
                onChange={handleInputChange}
                value={formData.pincode}
                id="pincode"
                name="pincode"
                type="text"
                autoComplete="off"
                required
                className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mobile:py-2 mobile:text-sm"
              />
            </div>
          </div>
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900 mobile:text-sm"
          >
            Password*
          </label>
          <div className="mt-2">
            <input
              onChange={handlePasswordChange}
              value={password}
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              minLength={8}
              required
              className="outline-none block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 mobile:py-2 mobile:text-sm"
              style={{ borderColor: isvalidPassword ? "#9CA3AF" : "#EF4444" }}
            />
          </div>
          <div className="text-sm font-normal text-gray-500">
            <p style={{color : isvalidPassword ? "#00FF00" : "#6b7280"}}>
              <span>{conditionPass}</span> Minimum of 8 Characters, Uppercase, Lowercase and one number.
            </p>
          </div>
        </div>

        <div>
          <label
            htmlFor="dob"
            className="block text-sm font-medium leading-6 text-gray-900 mobile:text-sm"
          >
            Date Of Birth*
          </label>
          <div className="mt-2">
            <input
              onChange={handleInputChange}
              value={formData.dob}
              id="dob"
              name="dob"
              type="date"
              required
              className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mobile:py-2 mobile:text-sm"
            />
          </div>
        </div>

        <div className="w-full self-end select-none">
          <Button text="Create Account" />
        </div>
        <ToastContainer />
      </form>
    </div>
  );
}

export default SignUp;
