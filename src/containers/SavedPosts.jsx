import React from "react";


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
                                <div key={info.id} className="card" >
                                    <div className="card-body">

                                        <p className="card-title"><strong>{info.title}</strong><hr/></p>
                                        <p className="card-text"> {info.body}</p>

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