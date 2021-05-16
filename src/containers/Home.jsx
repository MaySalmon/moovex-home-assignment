import React, { useEffect , useState,  useContext} from "react";
import axios from "axios";
import Header from './shared/Header'
import { Link } from 'react-router-dom';
import Nav from './shared/Nav'
import Welcome from './shared/Welcome'
const Home = () => {


   const[data, setdata]= useState([]);
  var localdata = JSON.parse(localStorage.getItem('userid'));
   
   const fetchData =() => {
        axios.get("https://jsonplaceholder.typicode.com/users/1")
        .then((response)=>{
            console.log(response.data);
            localStorage.setItem("userid", JSON.stringify(response.data));
            setdata(response.data);
            console.log(data);
        });
       
    };

    useEffect(() => {
        fetchData();
    
    },[]);

    const fetchData2 =() => {

        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            console.log(response.data);
            localStorage.setItem("localpostsdata", JSON.stringify(response.data));
            setdata(response.data);
        });

    };

    useEffect(() => {
        if(localStorage.getItem('localbool') === "true")
        {
            fetchData2();
            localStorage.setItem('localbool',false);
        }

    },[]);

    return (
      <div >
         <Header/>
         <Welcome name={data.name}/>
         <Nav/>
      </div>
    );
  };
  
  export default Home;