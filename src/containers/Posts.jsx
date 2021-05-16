import React, { useEffect , useState,  useContext} from "react";
import axios from "axios";
import Header from './Header'
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import Nav from './Nav'
import Welcome from './Welcome'
import SavePosts from './SavedPosts'
import AllPosts from './AllPosts'

const Posts = () => {

    return (
      <div >
         <Header />
         <Welcome/>
         <Nav/>
         <SavePosts/>
         <AllPosts/>
      </div>
    );
  };
  
  export default Posts;