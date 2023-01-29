import React,{useState} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './login.css'

const Login = () => {
    let [info, setInfo] = useState({});
    const navigate = useNavigate();

    const handleLogin = (e) => {
        setInfo({
            ...info,
         [e.target.name] : e.target.value
     })
    }
    console.log(info);

    async function sendLogin() {
        let res = await axios.post("http://127.0.0.1:3002/login", info)
        console.log(res.info);
        if (res.data == "Logged in successfully") {
            // console.log("logged in");
            // navigate("/jobcanvas");
            alert("logged in, proceed to enter candidate details if not done yet")
            
        }
        else {
            alert("check password")
        }
    }
    return (
      <div className="loginpg">
        <div className="loginpg_header">
        <h3 >Herovired Sign in page </h3>
        </div>
        <div className="loginpg_container">
        <div className="loginpg_details">
            <input type="text" placeholder='email' name='email'  onChange={handleLogin}/><br></br>
            <input type="text" placeholder='password' name='password' onChange={handleLogin}/><br></br>
            <input type="submit" onClick={sendLogin} /><br></br>

            <Link to="/profile">
            <button >Proceed to enter candidate details for jobs here</button>
            </Link>
            <Link to="/jobcanvas">
            <button >Go to Job details page</button>
            </Link>
        </div>
        </div>
        </div>
    );
}

export default Login;