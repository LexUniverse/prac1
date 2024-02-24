import React from "react";

const ContactCard=({netname, tag}) => {
    return(
        <div> 
            <h2>Social network: {netname}</h2>
            <h2>tag: {tag}</h2>
        </div>
    );
};

export default ContactCard;