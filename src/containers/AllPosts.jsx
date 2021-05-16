import React, { useEffect , useState,  useContext} from "react";
import axios from "axios";
import Header from './Header'
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import Nav from './Nav'
import Welcome from './Welcome'

const AllPosts = () => {

  var localdata = JSON.parse(localStorage.getItem('userid'));

   const[data, setdata]= useState([]);

    const fetchData =() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
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
         
            <div>
                <h1>Posts:</h1>
                {data.map((info) => {
                    if (info.userId !== localdata.id){
                        return(
                            <div className="card" >
                                    <div className="card-body">
                                        <div className="card-title">{info.title}</div>
                                        <div className="card-text"> {info.body}</div>
                                    </div>
                                </div> 
                         )
                    }
                })}
            </div>
      </div>
    );
  };
  
  export default AllPosts;