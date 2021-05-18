import React from "react";

const AllPosts = () => {

  var localdata = JSON.parse(localStorage.getItem('userid'));

    const addPost=(info)=>{
        const newObject=info;
        const arr = JSON.parse(localStorage.getItem('localpostsdata')).filter(todo=>todo.id!==info.id);
        localStorage.setItem("localpostsdata", JSON.stringify(arr))
        window.location.reload();
        newObject.userId=1;
        arr.push(newObject);
        localStorage.setItem("localpostsdata", JSON.stringify(arr))
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
                                        <i className="click" onClick={()=>addPost(info)}><strong>Add Post</strong></i>
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