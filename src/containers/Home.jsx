import React, { useEffect , useState,  useContext} from "react";
import axios from "axios";
import Header from './Header'
import { Link } from 'react-router-dom';
import Nav from './Nav'

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
         <div className="welcome">Welcome <strong>{data.name}</strong><hr/></div>
        <Nav id={data.id}/>
            
            
         
      </div>
    );
  };
  
  export default Home;