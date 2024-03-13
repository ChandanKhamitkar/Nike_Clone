import Navbar1 from "../../components/Navbars/Navbar1";
import Navbar2 from "../../components/Navbars/Navbar2";
import Navbar3 from "../../components/Navbars/Navbar3";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import FavouriteCard from "../Components/FavouriteCard";
import Loader from "../Bag/Loader";

function Favourite() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get("auth_token");
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.userId;
        const response = await axios.post(
          `http://localhost:3010/api/user/favourite`,
          { userId }
        );
        setData(response.data.favourite);
        console.log("Successfully fetched favourites data.");
      } catch (error) {
        console.log("Error : ", error);
        console.log("Error in fetching favourite data...");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar1 />
      <Navbar2 />
      <Navbar3 />

      {!data ? (
        <Loader />
      ) : (
        <>
          <div className="flex justify-center items-center mt-10 mb-14 w-[70%] mx-auto gap-10">
            <div className="flex flex-col space-y-6 ">
              <p className="text-2xl w-full md2:text-center">Favourites</p>
              <div className="self-start">
                {data.map((item, index) => (
                  <FavouriteCard
                    key={index}
                    imgLink={item.imgLink}
                    name={item.name}
                    type={item.type}
                    price={item.price}
                    userSize={item.userSize}
                  />
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      <Footer />
    </div>
  );
}

export default Favourite;
