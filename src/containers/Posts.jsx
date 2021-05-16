import React, { useEffect , useState,  useContext} from "react";
import axios from "axios";
import Header from './Header'
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
const Posts = () => {


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
         <Header/>
            <div>
                <h1>Saved Posts:</h1>
                {data.map((info) => {
                    if (info.userId ===1){
                        return(
                            <li><strong>{info.title}</strong> - {info.body}</li>                   
                         )
                    }
                })}
            </div>
      </div>
    );
  };
  
  export default Posts;