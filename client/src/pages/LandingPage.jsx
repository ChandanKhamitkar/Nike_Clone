import Navbar1 from "../components/Navbars/Navbar1";
import Navbar2 from "../components/Navbars/Navbar2";
import Navbar3 from "../components/Navbars/Navbar3";
import Aware from "../components/Aware";
import Cover from "../components/Cover";
import IconsOfAir from "../components/IconsOfAir";
import Featured from "../components/Featured";
import DontMiss from "../components/DontMiss";
import SubTitle from "../components/SubTtitle";
import AlwaysIconic from "../components/AlwaysIconic";
import AllLinksFooterTop from "../components/AllLinksFooterTop";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <div>
      <Navbar1 />
      <Navbar2 />
      <Navbar3 />
      
      <Aware />
      <Cover />

      <SubTitle text="Icons Of Air" />
      <IconsOfAir />

      <SubTitle text="Featured" />
      <Featured />

      <SubTitle text="Don't Miss" />
      <DontMiss />

      <SubTitle text="Always Iconic" />
      <AlwaysIconic />

      <AllLinksFooterTop />
      <Footer />


    </div>
  );
}

