import React, { useEffect , useState,  useContext} from "react";
import axios from "axios";
import Header from './shared/Header'
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import Nav from './shared/Nav'
import Welcome from './shared/Welcome'

const AllPosts = () => {

  var localdata = JSON.parse(localStorage.getItem('userid'));

//    const[data, setdata]= useState([]);

//     const fetchData =() => {
//         axios.get("https://jsonplaceholder.typicode.com/posts")
//         .then((response)=>{
//             console.log(response.data);
//             setdata(response.data);
//         });
        
//     };

//     useEffect(() => {
//         fetchData();
//     },[]);

    const addPost=(id)=>{
        var object = [];
        const arr = JSON.parse(localStorage.getItem('localpostsdata'));
        object=arr[id];
        object.userId=1;
         arr.push(object);
         localStorage.setItem("localpostsdata", JSON.stringify(arr));
         window.location.reload();
    }

    return (
      <div >
         
            <div className="container">
                <h1>Posts:</h1><hr/>
                {JSON.parse(localStorage.getItem("localpostsdata")).map((info) => {
                    if (info.userId !== localdata.id){
                        return(
                            <div className="card" >
                                    <div className="card-body">
                                        <div className="card-title"><strong>{info.title}</strong><hr/></div>
                                        <div className="card-text"> {info.body}</div>
                                        <i className="click" onClick={()=>addPost(info.id)}><strong>Add Post</strong></i>
                                        
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