import React from "react";
import Header from './shared/Header'
import Nav from './shared/Nav'
import Welcome from './shared/Welcome'
import SavePosts from './SavedPosts'
import AllPosts from './AllPosts'

const Posts = () => {
  var localdata = JSON.parse(localStorage.getItem('userid'));


    return (
      <div >
         <Header />
         <Welcome name={localdata.name}/>
         <Nav/>
         <SavePosts/>
         <AllPosts/>
      </div>
    );
  };
  
  export default Posts;