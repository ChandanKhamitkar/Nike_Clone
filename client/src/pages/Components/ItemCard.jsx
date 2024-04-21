

function ItemCard(props){
    return(
        <div className="space-y-6 mt-6">
            <div className="min-w-[600px] flex justify-between items-center md:min-w-[300px]">
                <div className="flex space-x-4">
                    <div className="w-40 h-40 sm:w-28 sm:h-28">
                        <img src={props.imgLink} alt="shoe" className="object-cover" />
                    </div>
                    <div>
                        <p className="hidden text-lg font-medium font-mono self-start md:block">MRP : ₹{props.price}</p>
                        <p className="text-lg font-medium sm:text-base">{props.name}</p>
                        <p className="text-lg text-gray-500 sm:text-base">{props.type}</p>
                        <p className="text-lg text-gray-500 sm:text-base">{props.userSize}</p>
                    </div>
                </div>

                <p className="text-lg font-medium font-mono self-start md:hidden">MRP : ₹{props.price}</p>
            </div>
            <div className="h-[1.5px] bg-slate-200"></div>
        </div>
        
    )
}

export default ItemCard;