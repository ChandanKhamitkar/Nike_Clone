import { useLocation, useNavigate } from "react-router-dom";
import NikeLogo from "../../assets/nikeLogo.png";
import JordanLogo from "../../assets/jordanLogo.png";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from 'js-cookie';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login(){

    const navigate = useNavigate();
    const location = useLocation();
    const [email, setEmali] = useState("");

    useEffect(() => {
        if(location.state && location.state.email){
            setEmali(location.state.email);
        }
    }, [location.state]);

    const [password, setPassword] = useState("");
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const submit = async(event) => {
        event.preventDefault();

        try {
            const functionThatReturnPromise = () =>
            new Promise((resolve) => setTimeout(resolve, 3000));
            toast.promise(functionThatReturnPromise, {
            pending: "Matching Password",
          });

          await axios.post("https://nike-clone-backend.vercel.app/api/user/loginUser", {
            email : email,
            password : password
          })
          .then((res) => {
            if(res.data.message === "Login Successfull."){
                toast.success("Login Successfully");
                
                // Set the token as a cookie
                Cookies.set("auth_token", res.data.token);

                setTimeout(() => {
                  navigate("/home", {state:{firstname : res.data.firstname}});
                },3000);
            }
            else{
                toast.error("Invalid password");
            }
          })
        } catch (error) {
            toast.error("An error occurred 😞");
            console.log(error);
        }
    };


    return(
        <div className="w-[30%] flex flex-col justify-center items-center mt-8 space-y-10 mx-auto md:w-[40%] mobile:w-[70%] mobile:space-y-5">
        <div className="flex space-x-4 self-start">
          <img src={NikeLogo} alt="Nike Logo" className="w-[50px] h-[50px] md:w-[30px] md:h-[30px]" />
          <img src={JordanLogo} alt="Jordan Logo" className="w-[50px] h-[50px] md:w-[30px] md:h-[30px]" />
        </div>
  
        <p className="text-left text-3xl font-semibold self-start md:text-2xl mobile:text-xl">
          What's your password?
        </p>
  
        <form action="POST" onSubmit={submit} className="self-start space-y-10">
          <div className="w-full flex flex-col space-y-0 self-start">
            <label
              htmlFor="password"
              className="text-gray-400 text-base font-medium mobile:text-sm"
            >
              Password*
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              autoComplete="new-password"
              placeholder="Enter your password"
              required
              className="outline-none border border-gray-400 px-5 py-3 rounded-xl w-full active:shadow-inner font-medium tracking-wide mobile:py-2 mobile:text-sm"
              onChange={handlePasswordChange}
            />
          </div>
  
  
          <div className="float-start">
            <button
              type="submit"
              value="submit"
              className="px-6 py-2 rounded-3xl font-semibold bg-black text-white sm:px-4 sm:py-1 sm:text-sm"
            >
              Sign in
            </button>
            <ToastContainer position="bottom-center"/>
          </div>
        </form>
      </div>
    )
}

export default Login;