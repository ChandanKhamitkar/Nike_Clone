import HighlyRated from "./HighlyRated";
import { useNavigate } from "react-router-dom";

function ProductsCard(props){
    
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/shop", {state:{
            imgLink: props.imgLink,
            name:props.name,
            type:props.type,
            price:props.price,
            highlyRated:props.highlyRated,
            about:props.about,
            colour:props.colour,
            style:props.style,
            availableSize:props.availableSize,
        }});
    };

    return (
        <div key={props.id} onClick={handleClick} className="max-w-[374px] h-auto space-y-1 relative md:mb-3 md:max-w-[250px] mobile:max-w-[190px]">
            <img src={props.imgLink} alt="product" className="w-full mb-2 "/>
                <HighlyRated visibility={props.highlyRated}/>
            <div>
                <p className="text-base font-medium -tracking-wide">{props.name}</p>
                <p className="text-gray-500 ">{props.type}</p>
            </div>
            <p className="font-sans">MRP : ₹ {props.price}.00</p>
        </div>
    )
}

export default ProductsCard;