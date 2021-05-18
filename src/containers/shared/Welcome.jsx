import React from "react";


const Welcome = ({name}) => {
    // var localdata = JSON.parse(localStorage.getItem('userid'));


    return (
    <div className="welcome">Welcome <strong>{name}</strong></div> 
  );
};

export default Welcome;
