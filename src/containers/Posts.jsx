import React, { useEffect , useState,  useContext} from "react";
import axios from "axios";
import Header from './shared/Header'
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
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