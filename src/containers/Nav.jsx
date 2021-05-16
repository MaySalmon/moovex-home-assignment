import React from "react";
import { Link } from 'react-router-dom';

const Nav = ({id}) => {
  return (
    <nav class="my-2 my-md-0 mr-md-3">
            <Link to={`/posts/${id}`}>
            <a class="p-2 text-dark" >Posts</a>
            </Link>
            <a class="p-2 text-dark" >Contcat</a>
        </nav>
  );

};
export default Nav;
