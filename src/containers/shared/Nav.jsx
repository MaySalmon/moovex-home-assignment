import React from "react";
import { Link } from 'react-router-dom';

const Nav = () => {
   
  return (
    <nav class="my-2 my-md-0 mr-md-3">
           <Link to={`/home`}>
            <a class="p-2 text-dark" >Home Page</a>
            </Link>
            <Link to={`/posts`}>
            <a class="p-2 text-dark" >Posts</a>
            </Link>
            <Link to={`/personal`}>
            <a class="p-2 text-dark" >Personal info</a>
            </Link>
            <Link to={`/`}>
            <a class="p-2 text-dark" >Log Out</a>
            </Link>
            <hr/>    
        </nav>
        
  );

};
export default Nav;
