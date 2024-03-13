import ButtonAbsolute from "./Buttons/ButtonAbsolute";

function DontMissCard(props){
    return (
        <div className="w-full max-w-[705px] h-auto flex flex-col justify-center items-center space-y-4 relative" style={{backgroundImage : `url(${props.imgLink})`, backgroundSize : "cover"}}>
        <div className="w-full h-full">
            <img src={props.imgLink} alt={props.title} className="w-full h-auto object-cover" />
        </div>
        <div className="flex flex-col justify-start space-y-4 absolute bottom-4 left-4">
            <p className="font-medium text-xl sm:text-base" style={{color : props.btnBg}}>{props.title}</p>
            <ButtonAbsolute color={props.btnBg} text={props.btnTxt} txtColor={props.btnColor} />
        </div>
    </div>
    )
}

export default DontMissCard;
