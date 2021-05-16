import React, { useEffect , useState,  useRef,useContext} from "react";
import axios from "axios";
import Header from './shared/Header'
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import Nav from './shared/Nav'
import Welcome from './shared/Welcome'

const SavedPosts = () => {


  var localdata = JSON.parse(localStorage.getItem('userid'));


//    const[data, setdata]= useState([]);

  




    const removePost=(id)=>{
        var array=[];
        //console.log('delete item' + id);
         array=(JSON.parse(localStorage.getItem("localpostsdata")).filter(todo=>todo.id!==id));
        //  setdata(array);
         localStorage.setItem("localpostsdata", JSON.stringify(array))
         window.location.reload();
    }


    return (
      <div >

            <div className="container">
                <h1>Saved Posts:</h1><hr/>
                {JSON.parse(localStorage.getItem("localpostsdata")).map((info) => {
                    if (info.userId === localdata.id){
                        return(
                                <div className="card" >
                                    <div class="card-body">

                                        <p class="card-title"><strong>{info.title}</strong><hr/></p>
                                        <p class="card-text"> {info.body}</p>
                                        <p class="card-text"> {info.id}</p>

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