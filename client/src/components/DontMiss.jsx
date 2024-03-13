import DontMissInfo from "../liabilities/DontMissInfo";
import DontMissCard from "./DontMissCard";


function DontMiss(){
    return (
        <div className="flex flex-col justify-center items-center mb-16 select-none mx-8">
        
        <div className="flex justify-center items-center space-x-3 sm:flex-wrap sm:space-y-4">
                {DontMissInfo.map((card, index) => <DontMissCard key={index} imgLink={card.imgLink} title={card.title} btnTxt={card.btnTxt} btnColor={card.btnColor} btnBg={card.btnBg} /> )}
        </div>
    </div>
    )
}

export default DontMiss;