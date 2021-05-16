import React from "react";


const Welcome = () => {
    var localId = JSON.parse(localStorage.getItem('userid'));


    return (
    <div className="welcome">Welcome <strong>{localId.name}</strong><hr/></div> 
  );
};

export default Welcome;
