import Navbar1 from "../../components/Navbars/Navbar1";
import Navbar2 from "../../components/Navbars/Navbar2";
import Navbar3 from "../../components/Navbars/Navbar3";
import Footer from "../../components/Footer";
import orderPlacedGif from "../../assets/orderPlaced.gif";
import NikeLogo from "../../assets/nikeLogo.png";


export default function OrderPlaced() {
  return (
    <div>
      <Navbar1 />
      <Navbar2 />
      <Navbar3 />

        <div className="flex flex-col bg-slate-50 justify-center items-center mx-auto w-3/4 border border-gray-800 rounded-lg px-6 py-5 my-11">
            <img src={orderPlacedGif} alt="orderplacedGIF" />
            <p className="text-2xl text-green-500 drop-shadow-md font-medium">
                ThankYou for placing order with <span className="text-black">Nike.</span>
            </p>
            <img src={NikeLogo} alt="Nike logo" className="w-[70px] h-[70px]"/>
        </div>

      <Footer />
    </div>
  );
}
