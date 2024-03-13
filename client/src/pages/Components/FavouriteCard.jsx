

function FavouriteCard(props){
    console.log("user size : ", props.userSize);
    return(
        <div className="space-y-6 mt-6">
            <div className="w-[600px] flex justify-start items-center rounded-md border bg-slate-50 shadow-lg px-6 py-4 space-x-3 md:w-[500px] md2:w-[400px] mobile:w-max mobile:flex-col mobile:gap-2">
                <div className="flex space-x-4 mobile:self-start">
                    <div className="w-40 h-40 md2:w-30 md2:h-30 ">
                        <img src={props.imgLink} alt="shoe" className="object-cover  rounded-md" />
                    </div>
                </div>

                <div className="flex justify-between self-start w-full md2:flex-col md2:space-y-2 mobile:self-start">
                    <div className="self-start">
                        <p className="text-lg font-medium md2:text-base">{props.name}</p>
                        <p className="text-lg text-gray-500 md2:text-base">{props.type}</p>
                        <p className="text-lg text-gray-500 md2:text-base">{props.userSize}</p>
                    </div>
                    <div className="flex flex-col justify-start items-center h-full self-start gap-2 ">
                        <p className="text-lg font-medium font-mono md2:text-base">MRP : ₹{props.price}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F7418F" className="bi bi-heart-fill self-end md2:self-start" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="h-[1.5px] bg-slate-200"></div>
        </div>
        
    )
}

export default FavouriteCard;