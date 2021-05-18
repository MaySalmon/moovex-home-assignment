import React from "react";


const SavedPosts = () => {


  var localdata = JSON.parse(localStorage.getItem('userid'));

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
                                <div key={info.id} className="card" >
                                    <div className="card-body">
                                        <div className="card-title"><strong>{info.id}) {info.title}</strong><hr/></div>
                                        <div className="card-text"> {info.body}</div>
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