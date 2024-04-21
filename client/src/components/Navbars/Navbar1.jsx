import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import JordanLogo from "../../assets/jordanLogo.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { jwtDecode } from "jwt-decode";
import Cookies from 'js-cookie';


function Navbar1(){

    const navigate = useNavigate();
    const location = useLocation();
    const [firstname, setFirstname] = useState("");

    useEffect(() => {
        if(location.state && location.state.firstname){
            setFirstname(location.state.firstname);
        }
    }, [location.state]);

    const token = Cookies.get('auth_token');
    const decodedToken = jwtDecode(token);

    const handleProfile =  (e) => {
        e.preventDefault();

        try {
            const functionThatReturnPromise = () =>
            new Promise((resolve) => setTimeout(resolve, 3000));
            toast.promise(functionThatReturnPromise, {
            pending: "Taking you to profile.",
          });

          navigate("/profile", {state:{usedId : decodedToken.userId, email : decodedToken.email, year : decodedToken.year, firstname : firstname}});
        
        }  catch (error) {
            toast.error("An error occurred 😞");
            console.log(error);
        }
    }

    const [menuVisible, setMenuVisible] = useState(false);

    const handleMenu = () => {
      setMenuVisible(!menuVisible);
    };

    const handleHome = () =>{
        navigate("/home");
    }

    const handleFavouriteClick = () => {
        navigate("/favourite");
    }

    const handleLogout =  (event) => {
        Cookies.remove('auth_token', { expires: new Date(0) });
        navigate("/");
    }

    return (
        <nav className="bg-gray-100 h-12 w-full flex items-center justify-between px-6 md:hidden">
            <img src={JordanLogo} alt="jordan logo" className="w-[20px] h-[20px]"/>

            <ul className="flex space-x-3 font-bold text-xs items-center">
                <li>Find a store</li>
                <li>|</li>
                <li>Help</li>
                <li>|</li>
                <li>Hi, {decodedToken.firstname}</li>
                <li onClick={handleMenu} className="hover:bg-slate-200 rounded-full p-2 hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="black" className="bi bi-person" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                    </svg>
                </li>
                <ToastContainer />
                {menuVisible && (
                    <div className="w-[10%] absolute right-8 top-10 bg-white border border-gray-300 rounded-lg shadow-md p-2 z-[100] space-y-4 px-3 py-4">
                    {/* Your menu items here */}
                    <p className="text-base font-semibold">Accounts</p>
                    <ul className="text-gray-500 space-y-3">

                        <li onClick={handleHome} className="hover:scale-110 hover:cursor-pointer hover:bg-gray-100 hover:text-gray-600 px-2 py-1">Home</li>
                        <li onClick={handleProfile} className="hover:scale-110 hover:cursor-pointer hover:bg-gray-100 hover:text-gray-600 px-2 py-1">Profile</li>
                        <li onClick={handleFavouriteClick} className="hover:scale-110 hover:cursor-pointer hover:bg-gray-100 hover:text-gray-600 px-2 py-1">Favourite</li>
                        <li onClick={handleLogout} className="hover:scale-110 hover:cursor-pointer hover:bg-gray-100 hover:text-red-500 px-2 py-1">Log Out</li>
                    </ul>
                    <ToastContainer />
                    </div>
                    
                )}

            </ul>
        </nav>
    )
}

export default Navbar1;