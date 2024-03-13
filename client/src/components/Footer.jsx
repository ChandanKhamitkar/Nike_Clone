import {FooterInfo01, FooterInfo02, FooterInfoLogos} from  "../liabilities/FooterInfo.js";
import LinksCard from "./LinksCard.jsx";

function Footer(){
    return(
        <footer className="w-full min-h-96 pt-8 pb-3 px-11 flex flex-col justify-between bg-black mt-auto "> 

            <div className="flex justify-between space-x-4 md2:flex-col md2:space-x-0 md2:space-y-14">
                <div className="w-[75%] flex space-x-[100px] items-center self-start md2:flex-col md2:space-x-0 md2:space-y-7 md2:w-full">
                    <ul className="space-y-3 self-start">
                        {FooterInfo01.map((item, index) => <li key={index} className="font-semibold tracking-tight text-white md2:text-xs">{item.txt}</li>)}
                    </ul>

                    <div className="hidden md2:block w-full border border-gray-600"></div>

                    <div className="w-full flex mb-10 space-x-[100px] self-start md2:flex-col md2:space-x-0 md2:space-y-10 ">
                        {FooterInfo02.map((row,index) => <LinksCard key={index} id={index} title={row.title} subLinks={row.service} titleColor="white" alignSelf="flex-start" btnColor={"white  "} />)}
                    </div>

                </div>

                <div className="flex space-x-4 md:flex-wrap-">
                    {FooterInfoLogos.map((logo, index) => (<div key={index} className="bg-gray-500 rounded-full w-[34px] h-[34px] relative flex justify-center items-center">
                            <img key={index} src={logo.imgLink} alt="social logos" className=" px-1  py-1 w-[28px] h-[28px] absolute" />
                        </div>))}
                </div>
            </div>

            <div className="flex justify-between items-center md2:flex-col md2:justify-start md2:items-start md2:mt-10 md2:space-y-8">
                <div className="flex space-x-4 items-center md2:flex-col md2:items-start md2:space-x-0 md2:space-y-2">
                    <p className="text-white font-semibold tracking-tight flex space-x-2 items-center "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                        </svg> <span>India</span>
                    </p>

                    <p className="text-gray-400 font-medium text-xs">© 2023 Nike, Inc. All Rights Reserved</p>
                </div>

                <ul className="flex space-x-4 text-gray-400 font-medium text-xs md2:flex-col md2:space-x-0 md2:space-y-6">
                    <li>Guides</li>
                    <li>Terms of Sale</li>
                    <li>Terms of Use</li>
                    <li>Nike Privacy Policy</li>
                </ul>
            </div>


        </footer>
    )
}

export default Footer;