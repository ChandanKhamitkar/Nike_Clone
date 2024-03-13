import anonymous from "../../assets/anonymousAvatar.png";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Cookies from 'js-cookie';


function ProfileC(){
    const [user, setUser] = useState({});

    useEffect(() => {
        const token = Cookies.get('auth_token');
        const decodedToken = jwtDecode(token);
        setUser(decodedToken);

    }, []);
    
    
    return(
        <div>
        <div className="mx-10 my-10 flex space-x-5 justify-between items-center md:flex-col md:space-y-6 mobile:space-x-0 ">
            
            <div className="w-max flex space-x-5 items-center mobile:self-start">
                <div className="rounded-full ">
                    <img src={anonymous} alt="profile Pic"  className="w-[110px] h-[110px] object-contain mobile:w-[80px] hover:h-[80px]"/>
                </div>
                <div className="mobile:space-y-1">
                    <p className="text-3xl font-semibold tracking-wide text-black mobile:text-xl">{user.firstname} {user.lastname}</p>
                    <p className="font-medium text-gray-400 mobile:text-xs">Nike member since {user.month} {user.year}</p>
                    <p className="font-medium text-slate-900 mobile:text-xs">Email : {user.email}</p>
                </div>
            </div>

            <div className="rounded-xl min-w-[300px] px-4 py-6 space-y-2 border-[1px] shadow-lg mobile:self-start mobile:max-w-[400px]">
                <p className="text-gray-700">Default Address 🚚:</p>
                <div className="h-[1px] bg-gray-900"></div>
                <p className="font-medium">{user.firstname} {user.lastname}</p>
                {user.address && <p>{user.address}</p>}
                {user.pincode && <p>Pincode: {user.pincode}</p>}
            </div>

        </div>
        </div>
    )
}

export default ProfileC;