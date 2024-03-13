import ButtonAbsolute from "./Buttons/ButtonAbsolute";

function FeaturedCard(props){
    return (
        <div className="w-full max-w-[467px] h-auto flex flex-col justify-center items-center space-y-4 relative" style={{backgroundImage : `url(${props.imgLink})`, backgroundSize : "cover", backgroundPosition: "center"}}>
            <div className="w-full h-full">
                <img src={props.imgLink} alt={props.title} className="w-full h-auto object-cover" />
            </div>
            <div className="flex flex-col justify-start space-y-4 absolute bottom-8 left-8">
                <p className="font-medium text-xl text-white">{props.title}</p>
                <ButtonAbsolute color="white" text="Shop" txtColor="black" />
            </div>
        </div>


    )
}

export default FeaturedCard;