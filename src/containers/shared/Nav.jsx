import React from "react";
import { Link } from 'react-router-dom';

const Nav = () => {
   
  return (
    <nav className="my-2 my-md-0 mr-md-3">
           <Link to={`/home`}>
            <a className="p-2 text-dark" >Home Page</a>
            </Link>
            <Link to={`/posts`}>
            <a className="p-2 text-dark" >Posts</a>
            </Link>
            <Link to={`/personal`}>
            <a className="p-2 text-dark" >Personal info</a>
            </Link>
            <Link to={`/`}>
            <a className="p-2 text-dark" >Log Out</a>
            </Link>
            <hr/>    
        </nav>
  );

};
export default Nav;
