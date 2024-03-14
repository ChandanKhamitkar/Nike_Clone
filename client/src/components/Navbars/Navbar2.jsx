import Cookies from "js-cookie";
import NikeLogo from "../../assets/nikeLogo.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

function Navbar2() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [toggle, setToggle] = useState(false);
  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    setToggle(!toggle);
    navigate("/products", { state: { searchword: searchTerm } });
  };

  const handleCheckoutClick = () => {
    navigate("/bag");
  }

  const handleFavouriteClick = () => {
    navigate("/favourite");
  }

  const [bagSize, setBagSize] = useState(0);

  
  useEffect(() => {
    console.log('Effect running...');
    const token = Cookies.get("auth_token");
    const decodedToken = jwtDecode(token);
    const userId = decodedToken.userId;
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://vercel.com/chandans-projects-ead61204/nike-clone-backend/GnP81VJ38KfFsb4TWCpCK5J9JzNr/api/user/getBagItemsSize",
          { userId }
        );
        setBagSize(response.data.bagSize);
        console.log("Successfully fetched bag items size.");
      } catch (error) {
        console.error("Error:", error);
        console.log("Error occured while fetching bag items size.");
      } 
    };

    fetchData();
  }, []);

  return (
    <nav className="bg-white w-full h-16 px-6 flex justify-between items-center shadow-sm relative md:hidden">
      <img
        src={NikeLogo}
        alt="Nike logo"
        className="w-[60px] h-[60px] md:w-[40px] md:h-[40px]"
      />

      <ul className="w-full flex justify-center items-center space-x-5 font-semibold tracking-wider text-base text-center absolute">
        <li className="lg2:hidden">New & Featured</li>
        <li className="lg2:hidden">Men</li>
        <li className="lg2:hidden">Women</li>
        <li className="lg2:hidden">Kids</li>
        <li className="lg2:hidden">Sale</li>
        <li className="lg2:hidden">Customise</li>
        <li className="lg2:hidden">SNKRS</li>
      </ul>

      <div className="flex items-center justify-end space-x-7 z-50">
            <div className="flex items-center justify-center">
              <div className="rounded-lg ">
                <div className="flex shadow-md rounded-xl">
                  <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white">
                    <svg viewBox="0 0 20 20" aria-hidden="true" className="pointer-events-none absolute w-5 fill-gray-500 transition">
                      <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                    </svg>
                  </div>
                  <input onChange={handleSearchTerm} type="text" className="w-full max-w-[160px] bg-white pl-2 text-base font-semibold outline-0" placeholder="Search something.." id="" value={searchTerm} />
                  <input onClick={handleSearchClick} type="button" value="Search" className="bg-gray-400 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-gray-500 transition-colors text-sm" />
                </div>
              </div>
            </div>
        {/* </div> */}

        <div className="hover:bg-gray-100 p-2 rounded-full hover:shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            onClick={handleFavouriteClick}
            className="bi bi-heart"
            viewBox="0 0 16 16"
          >
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
          </svg>
        </div>

        <div className="hover:bg-gray-100 p-2 rounded-full hover:shadow-md relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            onClick={handleCheckoutClick}
            className="bi bi-bag"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            fill="red"
            className={
              "bi bi-circle-fill absolute top-2 right-1" +
              (bagSize > 0 ? " active" : "")
            }
            viewBox="0 0 16 16"
          >
            <circle cx="8" cy="8" r="8" />
          </svg>
        </div>
      </div>
    </nav>
  );
}

export default Navbar2;
