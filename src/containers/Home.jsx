import React, { useEffect , useState,  useContext} from "react";
import axios from "axios";
import Header from './Header'
import { Link } from 'react-router-dom';

const Home = () => {


   const[data, setdata]= useState([]);

    const fetchData =() => {
        axios.get("https://jsonplaceholder.typicode.com/users/1")
        .then((response)=>{
            console.log(response.data);
            setdata(response.data);
        });
        
    };

    useEffect(() => {
        fetchData();
    },[]);


    return (
      <div >
         <Header/>
         <div>Welcome </div>
         <div>  {data.name}</div>
        <Link to={`/posts/${data.id}`}>
            <button className="btn btn-primary">
                Posts
            </button>
        </Link>
         
      </div>
    );
  };
  
  export default Home;