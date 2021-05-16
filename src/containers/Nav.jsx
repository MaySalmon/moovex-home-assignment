import React from "react";
import { Link } from 'react-router-dom';

const Nav = ({id}) => {
    
  return (
    <nav class="my-2 my-md-0 mr-md-3">
           <Link to={`/home`}>
            <a class="p-2 text-dark" >Home Page</a>
            </Link>
            <Link to={`/posts/${id}`}>
            <a class="p-2 text-dark" >Posts</a>
            </Link>
            <Link to={`/`}>
            <a class="p-2 text-dark" >Log Out</a>
            </Link>
            
        </nav>
  );

};
export default Nav;
