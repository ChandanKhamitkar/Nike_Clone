import CoverImg from "../assets/nikeCoverImg.jpg";
import Button from "./Buttons/Button";
import CoverImgMobile  from "../assets/nikeCoverImgMobile.jpg"


function Cover(){
    return (
        <div className="flex flex-col justify-center items-center space-y-6 mb-7">

            <div className="w-[90%] h-auto sm:hidden">
                <img src={CoverImg} alt="Nike Cover" className="object-cover"/>
            </div>

            <div className="hidden w-[90%] h-auto sm:block">
                <img src={CoverImgMobile} alt="Nike Cover" className="object-cover"/>
            </div>

            <div className="text-center flex flex-col justify-center items-center space-y-3 sm:items-start sm:w-[90%]">
                <div className="flex flex-col justify-center items-center space-y-2 sm:items-start sm:w-[90%] sm:text-left">
                    <p className="font-medium ">Air Max 90 LV8</p>
                    <p className="text-6xl font-extrabold tracking-tighter sm:text-4xl">STYLE UP, STAND OUT</p>
                    <p className="w-[70%] text-center sm:text-sm sm:w-[90%] sm:text-left">Meant for the spotlight. Double stacked Air Units turns a classic silhouette into a modern icon. Make a bold statementin the new Air Max 90 LV8, styled by NewJeans.</p>
                </div>

                <div className="flex justify-center items-center space-x-5">
                    <Button text="Shop" color="black" />
                    <Button text="Learn More" color="black" />
                </div>
            </div>
        </div>
    )
}

export default Cover;

