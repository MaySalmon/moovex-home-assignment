import React, { useEffect , useState,  useRef,useContext} from "react";
import axios from "axios";
import Header from './Header'
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import Nav from './Nav'
import Welcome from './Welcome'

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
         
            <div>
                <h1>Saved Posts:</h1>
                {data.map((info) => {
                    if (info.userId === localdata.id){
                        return(    
                                <div className="card" >
                                    <div className="card-body">
                                        <div className="card-title">{info.title}</div>
                                        <div className="card-text"> {info.body}</div>
                                        <div className="card-text"> {info.id}</div>
                                       
                                        <i onClick={()=>removePost(info.id)} className="far fa-trash-alt">X</i>
                                    
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