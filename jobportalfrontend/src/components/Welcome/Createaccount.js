import React, { useState } from "react"
import axios from 'axios';
import { Link } from "react-router-dom";
import './createacc.css'
import { useNavigate } from "react-router-dom";


export default function CreateAccount() {

  let [data, setData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };
  const sendData = async () => {
    let res = await axios.post("http://127.0.0.1:3002/user", data)
    console.log(res.data);
    if(res.data == "Data Added to user")
    {
    console.log("user account created");
    // navigate("/jobcanvas");
    navigate("/login");
    }
    else{
      alert("problem in account creation,try again")
    }
  };

  return (
    <div className="createacpage" >
      <div className="createaccountheader" >
        <h3 >Create account for JobPortal </h3>
      </div>
      <div className="createaccontainer">
        <div className="createaclogin">
          <input type="text" placeholder='username' name='name' onChange={handleChange} /><br></br>
          <input type="text" placeholder='email' name='email' onChange={handleChange} /> <br></br>
          <input type="text" placeholder='password' name='password' onChange={handleChange} /><br></br>
          <input type="text" placeholder='phone_number' name='phone_number' onChange={handleChange} /><br></br>
          <input type="text" placeholder='role_id' name='role_id' onChange={handleChange} /><br></br><br></br>
          <input type="submit" placeholder="Create Account" onClick={sendData} />
        </div>
      </div>
    </div>

  )
}

