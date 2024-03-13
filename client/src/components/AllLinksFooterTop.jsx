import AllLinksInfo from "../liabilities/AllLinksInfo"
import LinksCard from "./LinksCard"

function AllLinksFooterTop(){
    return (
        <div className=" flex  justify-evenly items-center mt-12 mb-10 space-x-5 md2:flex-col md2:items-start md2:space-x-0 md2:mx-11 md2:space-y-5">
            {AllLinksInfo.map((row,index) => (<LinksCard key={index} id={index} title={row.title} subLinks={row.subLinks} btnColor={"black"}/>))}
        </div>
    )
}

export default AllLinksFooterTop;