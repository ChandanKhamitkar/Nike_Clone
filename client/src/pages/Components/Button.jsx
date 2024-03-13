function Button(props){
    return (
        <button className="px-6 py-2 rounded-3xl font-semibold bg-black text-white sm:px-4 sm:py-1 sm:text-sm" style={{backgroundColor : props.color, position : (props.place) ? "absolute" : null}}>{props.text}</button>
    )
}

export default Button;