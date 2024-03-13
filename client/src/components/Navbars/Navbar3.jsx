import NikeLogo from "../../assets/nikeLogo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { jwtDecode } from "jwt-decode";
import Cookies from 'js-cookie';

function Navbar3(){

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

    const [searchVisible, setSearchVisible] = useState(false);

    const handleSearch = () => {
        setSearchVisible(!searchVisible);
    };

    const [searchTerm, setSearchTerm] = useState("");
    const [toggle, setToggle] = useState(false);
    const handleSearchTerm = (e) => {
        setSearchTerm(e.target.value);
      };
    
      const handleSearchClick = () => {
        setToggle(!toggle);
        navigate("/products", { state: { searchword: searchTerm } });
      };
      
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

    const handleCheckoutClick = () => {
        navigate("/bag");
      }

    const handleFavouriteClick = () => {
        navigate("/favourite");
    }

    const handleLogout =  (event) => {
        Cookies.remove('auth_token', { expires: new Date(0) });
        navigate("/");
    }
    return (
        <nav className="hidden bg-white w-full md:flex  justify-between items-center px-5">
            <img src={NikeLogo} alt="Nike logo" className="w-[60px] h-[60px]" />

            <div className="flex items-center justify-end space-x-7">
                <svg onClick={handleSearch} xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>  
                {searchVisible && (
                                <div className="flex items-center justify-center p-5 absolute right-7 top-9">
                                <div className="rounded-lg ">
                                  <div className="flex shadow-md rounded-xl">
                                    <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white">
                                      <svg viewBox="0 0 20 20" aria-hidden="true" className="pointer-events-none absolute w-5 fill-gray-500 transition">
                                        <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                                      </svg>
                                    </div>
                                    <input onChange={handleSearchTerm} type="text" className="w-full max-w-[160px] bg-white pl-2 text-base font-semibold outline-0" placeholder="Search something.." id="" value={searchTerm} />
                                    <input onClick={handleSearchClick} type="button" value="Search" className="bg-gray-400 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-gray-500 transition-colors" />
                                  </div>
                                </div>
                              </div>
                )}

                <svg onClick={handleCheckoutClick} xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                </svg>

                <div onClick={handleProfile}  className="active:bg-slate-200 rounded-full p-2 active:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="black" className="bi bi-person" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                    </svg>
                </div>

                <button onClick={handleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="black" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>
                </button>
                {menuVisible && (
                    <div className="min-w-[150px] absolute right-6 top-12 bg-white border border-gray-300 rounded-lg shadow-md p-2 z-[100] space-y-4 px-3 py-4">
                    <p className="text-base font-semibold">Accounts</p>
                    <ul className="text-gray-500 space-y-3">

                        <li onClick={handleHome} className="hover:scale-110 hover:cursor-pointer hover:bg-gray-100 hover:text-gray-600 px-2 py-1">Home</li>
                        <li onClick={handleProfile} className="hover:scale-110 hover:cursor-pointer hover:bg-gray-100 hover:text-gray-600 px-2 py-1">Profile</li>
                        <li onClick={handleFavouriteClick} className="hover:scale-110 hover:cursor-pointer hover:bg-gray-100 hover:text-gray-600 px-2 py-1">Favourite</li>
                        <li onClick={handleLogout} className="hover:scale-110 hover:cursor-pointer hover:bg-gray-100 text-red-500 px-2 py-1">Log Out</li>
                    </ul>
                    <ToastContainer />
                    </div>
                    
                )}

            </div>

        </nav>
    )
}

export default Navbar3;
