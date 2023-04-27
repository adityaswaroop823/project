import React from "react";
import { data } from "../../data/data";

import { useState,useEffect  } from "react";
import "./styles.css";
const UserCard = ({ firstname, gender, photo, avialable,domain,handleButtonClick }) => {
    const [isAvialable, setIsAvialable] = useState(null);
    useEffect(() => {
        if (avialable === true) {
            setIsAvialable(true);
        } else {
            setIsAvialable(false);
        }
    }, []);
    return (
        <div className="userCard">
            <div className="imagediv">
                <img className="image" src={photo} alt="User" />{" "}
            </div>
            <div className="user-details">
            <hr style={{opacity:"0.2"}}/>

                <div className="namediv">
                    <p className="firstname"><span style={{fontSize:"16px",fontWeight:"bold",}}>Name:</span> {firstname}</p>
                    <p className="gender"> <span style={{fontSize:"16px",fontWeight:"bold"}}>Gender:</span> {gender}</p>
                    <p className="domain"> <span style={{fontSize:"16px",fontWeight:"bold"}}>Domain:</span> {domain}</p>

                  
                   <div className="CreateButtonDiv">
                   {isAvialable &&(
                    <p className="avilabletext"> *Available</p>
                   )} 
                    {!isAvialable &&(
                    <p className="unavilabletext"> *Not Available</p>
                   )} 
                     <button className="button" onClick={handleButtonClick}>Create Team</button>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
