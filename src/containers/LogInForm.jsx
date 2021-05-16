import React, {useState} from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from 'react-router-dom';

const LoginInForm =()=>{

    const [email,setEmail]= useState('');
    const [password, setPassword]= useState('');


    return(
        <div className="login">
            <form className="login_form"  >
            <h1>Login Here</h1>
            <input 
                type="email" 
                placeholder="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
            <input 
                type="password" 
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
             />
            <Link to={`/home/${email}`}>
            <button className="btn btn-primary"
                        type="submit">
                Login
            </button>
            </Link>
            </form>
        </div>
    );
};

export default LoginInForm;