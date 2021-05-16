import React, { useEffect , useState,  useRef,useContext} from "react";
import axios from "axios";
import Header from './shared/Header'
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import Nav from './shared/Nav'
import Welcome from './shared/Welcome'

const SavedPosts = () => {

  var localdata = JSON.parse(localStorage.getItem('userid'));
  const firstRender= useRef(true);

   const[data, setdata]= useState([]);

    const fetchData =() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            console.log(response.data);
            localStorage.setItem("localpostsdata", JSON.stringify(response.data));
            setdata(response.data);
        });
        
    };

    useEffect(() => {
        if(firstRender.current){
            fetchData();
            changedata();
        }
        firstRender.current=false;
    },[]);


    const changedata=()=>{
        setdata(data.filter(todo=>todo.id===1));
        localStorage.setItem("localpostsdata", JSON.stringify(data))

    }

    const removePost=(id)=>{
         setdata(data.filter(todo=>todo.id!==id));
         localStorage.setItem("localpostsdata", JSON.stringify(data))
    }
    

    return (
      <div >
         
            <div className="container">
                <h1>Saved Posts:</h1><hr/>
                {data.map((info) => {
                    if (info.userId === localdata.id){
                        return(    
                                <div className="card" >
                                    <div class="card-body">
                                        
                                        <p class="card-title"><strong>{info.title}</strong><hr/></p>
                                        <p class="card-text"> {info.body}</p>
                                       
                                        <i className="click" onClick={()=>removePost(info.id)}><strong>Delete</strong></i>
                                    
                                    </div>
                                </div>                     
                         )
                    }
                })}
            </div>
      </div>
    );
  };
  
  export default SavedPosts;