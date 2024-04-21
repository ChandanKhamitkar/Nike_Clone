import Navbar1 from "../../components/Navbars/Navbar1.jsx";
import Navbar2 from "../../components/Navbars/Navbar2.jsx";
import Navbar3 from "../../components/Navbars/Navbar3.jsx";
import Line from "../Components/Line.jsx";
import HighlyRated from "../Components/HighlyRated.jsx";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Footer from "../../components/Footer.jsx";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { jwtDecode } from "jwt-decode";
import Cookies from 'js-cookie';

const baseURL = process.env.REACT_APP_BASE_API_URL;

function Shop() {

    const [productInfo, setProductInfo] = useState({
        imgLink: '',
        name: '',
        type: '',
        price: '',
        highlyRated: false,
        about: '',
        colour: '',
        style: '',
        availableSize: [],
      });


    const location = useLocation();
    useEffect(() => {
        if (location.state) {
          setProductInfo((prevProductInfo) => ({
            ...prevProductInfo,
            ...location.state,
          }));
        }
      }, [location.state]);


    const [showSize, setShowSize] = useState(false);
    const [delivery, setDelivery] = useState(false);

    const [userSize, setUserSize] = useState('');
    const [seleted, setSelected] = useState(false);
    const handleSize = (e) =>{
        setUserSize(e);
        setSelected(!seleted);
    }
    
    
    const token = Cookies.get('auth_token');
    const decodedToken = jwtDecode(token);
    const addBagItem =  {
        userId : decodedToken.userId,
        imgLink : productInfo.imgLink,
        name : productInfo.name,
        type : productInfo.type,
        userSize : userSize,
        price : productInfo.price
    }

    const handleBag = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${baseURL}/api/user/addToBag`, addBagItem);
    
            if (response.status === 201) {
                console.log("Item added to bag.");
                toast.success("Item added to Bag");
            } else {
                console.log("Error in adding item to bag.");
                toast.error("Error in adding item to bag");
            }
        }catch (error) {
            console.log("error :", error);
            toast.error("Error in adding item to bag");
        }

    }
    const handleFavourite = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${baseURL}/api/user/addToFavourite`, addBagItem);
    
            if (response.status === 201) {
                console.log("Item added to favourites.");
                toast.success("Item added to favourites");
            } else {
                console.log("Error in adding item to favourites.");
                toast.error("Error in adding item to favourites");
            }
        }catch (error) {
            console.log("error :", error);
            toast.error("Error in adding item to favourites");
        }

    }


  return (
    <div>
      <Navbar1 />
      <Navbar2 />
      <Navbar3 />

      <div className="flex justify-center items-center mx-auto my-16 space-x-16 md:flex-col md:space-x-0 md:mx-6">
        <div className="hidden space-y-7 md:block md:self-start">
            <div >
                <p className="text-2xl font-medium">{productInfo.name}</p>
                <p className="font-normal">{productInfo.type}</p>
            </div>
            <div>
              <p>MRP: ₹ {productInfo.price}</p>
              <p className="text-gray-400 font-medium">incl. of taxes</p>
              <p className="text-gray-400 font-medium">Also inlcude all aplicalbe duties</p>
            </div>
        </div>
        <div className="max-w-[600px] self-start relative mx-auto">
            <img src={productInfo.imgLink} alt={productInfo.name} className="rounded-lg object-contain"/>
            <HighlyRated visibility={productInfo.highlyRated}/>
        </div>
        <div className="max-w-[400px] space-y-7 self-start md:max-w-full mobile:mx-auto">
                <div className="space-y-7  md:hidden">
                    <div >
                        <p className="text-2xl font-medium">{productInfo.name}</p>
                        <p className="font-normal">{productInfo.type}</p>
                    </div>
                    <div>
                        <p>MRP: ₹ {productInfo.price}</p>
                        <p className="text-gray-400 font-medium">incl. of taxes</p>
                        <p className="text-gray-400 font-medium">Also inlcude all aplicalbe duties</p>
                    </div>
                </div>


            <div className="space-y-2">

                <p className="flex justify-between px-2 font-medium"><span className="">Select Size</span><span className="text-gray-500">Size Guide</span></p>

                <div className="flex flex-wrap gap-2">
                {productInfo.availableSize.map((size, index) => (
                    <label
                    key={index}
                    htmlFor=""
                    className={"px-8 py-4 rounded-md border w-fit border-gray-300 cursor-pointer hover:border-gray-950" + ((seleted) ? 'border-gray-500' : '') }
                    onClick={() => handleSize(size)} // Pass size to handleLabel function
                    >
                    {size}
                    </label>
                ))}
                </div>


            </div>


    
            <div className="flex flex-col space-y-3">
                <button onClick={handleBag} className="px-9 py-3 rounded-3xl font-semibold bg-black text-white  sm:text-sm hover:bg-gray-800 ">Add to Bag</button>
                <button onClick={handleFavourite} className="px-9 py-2 rounded-3xl font-semibold bg-transparent text-black border-2  sm:text-sm flex justify-center items-center space-x-2 hover:border-black"><span>Favourite</span> <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="black" className="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                </svg></button>
            </div>
            <ToastContainer position="top-center" />

            <div className="text-gray-400 font-medium text-center">
                <p>This product is excluded from site promotions and discounts.</p>
            </div>

            <div className="text-left">
                <p>{productInfo.about}
                </p>
            </div>

            <div className="ml-5">
                <ul className="list-disc">
                    <li>Colour : {productInfo.colour}</li>
                    <li>Style : {productInfo.style}</li>
                </ul>
            </div>

            <div>

                <Line />

                <div className="my-7">
                    <p className="flex justify-between px-3 my-4 items-center"><span className="text-xl">Size & Fit</span><svg xmlns="http://www.w3.org/2000/svg" onClick={() => setShowSize(!showSize)} width="18" height="18" fill="black" className="bi bi-caret-down cursor-pointer" viewBox="0 0 16 16">
                        <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659"/>
                        </svg>              
                    </p>

                    <ul className={`ml-4 list-disc text-sm space-y-2 ${showSize ? 'animate-fadeIn' : 'hidden'}`} style={{ transition: 'height 0.5s', height: showSize ? 'auto' : '0' }}>
                        <li>Fits large : we recommend you to order half size a down.</li>
                        <li>Size Guide</li>
                    </ul>
                </div>

                <Line />

                <div className="my-7">
                    <p className="flex justify-between px-3 my-4 items-center"><span className="text-xl">Delivery & Returns</span><svg xmlns="http://www.w3.org/2000/svg" onClick={() => setDelivery(!delivery)} width="18" height="18" fill="black" className="bi bi-caret-down cursor-pointer" viewBox="0 0 16 16">
                        <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659"/>
                        </svg>              
                    </p>

                    <ul className={`ml-4 list-disc text-sm space-y-2 ${delivery ? 'animate-fadeIn' : 'hidden'}`} style={{ transition: 'height 0.5s', height: delivery ? 'auto' : '0' }}>
                        <li>All purchases are subject to delivery fees.</li>
                        <li>Standard delivery 4 to 9 business days</li>
                        <li>Orders are processed and delivered Monday to Friday excluding public holidays</li>
                    </ul>
                </div>

                <Line />


                
            </div>

        </div>
      </div>

    <Footer />
    </div>
  );
}

export default Shop;
