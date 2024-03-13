import Navbar1 from "../../components/Navbars/Navbar1";
import Navbar2 from "../../components/Navbars/Navbar2";
import Navbar3 from "../../components/Navbars/Navbar3";
import error404 from "../../assets/errorPage.jpg";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

function ErrorPage() {

    const navigate = useNavigate();

  return (
    <div>
      <Navbar1 />
      <Navbar2 />
      <Navbar3 />

        <div className="max-w-[400px] mx-auto my-16 space-y-4 flex flex-col justify-center items-center">
            <img src={error404} alt="Error 404 " className="object-cover shadow-lg"/>
             <button onClick={() => navigate("/signin")} className="font-medium tracking-wide px-6 py-3 rounded-3xl bg-yellow-300 border-2 border-orange-500 mx-auto hover:bg-yellow-400 shadow-xl" >Back To Home</button>
        </div>
        <Footer/>
    </div>
  );
}

export default ErrorPage;

