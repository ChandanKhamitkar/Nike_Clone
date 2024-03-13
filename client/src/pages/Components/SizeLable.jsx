
function SizeLabel(props){
    return (
        <label htmlFor="" className="px-8 py-4 rounded-md border w-fit border-gray-300" onClick={handleLable}>{props.size}</label>
    )
}

export default SizeLabel;