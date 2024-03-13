import Navbar1 from "../../components/Navbars/Navbar1.jsx";
import Navbar2 from "../../components/Navbars/Navbar2.jsx";
import Navbar3 from "../../components/Navbars/Navbar3.jsx";
import Footer from "../../components/Footer.jsx";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductsInfo from "../../liabilities/ProductsInfo.js";
import ProductsCard from "../Components/ProductCard.jsx";

function Products() {
  const [searching, setSearching] = useState("");
  const location = useLocation();
  useEffect(() => {
    if (location.state && location.state.searchword) {
      setSearching(location.state.searchword);
    }
  }, [location.state]);

  return (
    <div>
      <Navbar1 />
      <Navbar2 />
      <Navbar3 />

      <div className="w-full  border-b-2 p-6 my-10 ">
        <p className="text-base text-gray-700 font-normal tracking-wide">
          Search Results for
        </p>
        <p className="text-3xl font-medium">{searching}</p>
      </div>

      <div className="flex justify-center items-center space-x-3 mb-11 flex-wrap md:gap-2 mobile:mx-1">
        {ProductsInfo.filter((val) => {
          if (searching === "") {
            return true; 
          } else if (val.name.toLowerCase().includes(searching.toLowerCase()) || val.type.toLowerCase().includes(searching.toLowerCase())) {
            return true; 
          }
          return false; 
        }).map((val, index) => (
          <ProductsCard
            key={index}
            id={index}
            imgLink={val.imgLink}
            name={val.name}
            type={val.type}
            price={val.price}
            highlyRated={val.highlyRated}
            about={val.about}
            colour={val.colour}
            style={val.style}
            availableSize={val.availableSize}
          />
        ))}
      </div>


      <Footer />
    </div>
  );
}

export default Products;
