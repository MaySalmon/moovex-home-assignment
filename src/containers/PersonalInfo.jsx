import React from "react";
import Header from './Header'
import Nav from './Nav'
import Welcome from './Welcome'

const PersonalInfo = () => {
  var localdata = JSON.parse(localStorage.getItem('userid'));

  return (
    
     <div >
         <Header/>
         <Welcome name={localdata.name}/>
         <Nav/>
         <ul><strong>Your Name:</strong> {localdata.name}</ul>
         <ul><strong>Your email:</strong> {localdata.email}</ul>
         <ul><strong>Your UserName:</strong> {localdata.username}</ul>

      </div>
    
  );
};

export default PersonalInfo;
