function ButtonAbsolute(props){
    return (
        <button className="w-fit px-6 py-2 rounded-3xl font-semibold sm:px-4  sm:text-sm " style={{backgroundColor : props.color, color : props.txtColor }}>{props.text}</button>
    )
}

export default ButtonAbsolute;