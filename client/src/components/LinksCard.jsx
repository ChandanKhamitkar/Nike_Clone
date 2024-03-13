import React, { useState } from 'react';

function LinksCard(props){
    const [showSubLinks, setShowSubLinks] = useState(true);
    return(
        <div className="self-start space-y-6 select-none ">
            <div className="hidden  md2:flex md2:w-full md2:justify-end md2:space-x-6 md2:items-center">
                <p className="font-medium md2:text-xs md2:w-full" style={{color : (props.titleColor) ? "white" : "black"}}>{props.title}</p>

                <button  onClick={() => setShowSubLinks(!showSubLinks)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={props.btnColor} className="bi bi-plus" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                    </svg>
                </button>
            </div>
            <p className="font-medium md2:hidden" style={   {color : (props.titleColor) ? "white" : "black"}}>{props.title}</p>
            <ul className="space-y-4 md2:hidden md2:w-full" style={{display : (showSubLinks) ? '' : 'block'}}>
                {props.subLinks.map((link, index) => <li key={index} className="text-gray-500 font-medium text-sm">{link}</li> )}
                <div className="hidden md2:block w-full border border-gray-600"></div>
            </ul>
        </div>
    )
}   

export default LinksCard;