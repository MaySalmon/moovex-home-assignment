import React from "react";


const Welcome = () => {
    var localdata = JSON.parse(localStorage.getItem('userid'));


    return (
    <div className="welcome">Welcome <strong>{localdata.name}</strong></div> 
  );
};

export default Welcome;
