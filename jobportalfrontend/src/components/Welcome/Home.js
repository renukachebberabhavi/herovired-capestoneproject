import React from 'react';
import { Link } from "react-router-dom";
import './home.css' 

const Home = () => {

    let myStyles = {
        backgroundColor: "grey"
    }
    return (
        <div className="homepg">
            <div className="homepg_header">
                <h3 >Renu job portal home page </h3>
            </div>
            <div className="homepg_container">
                <div className="homepg_details">
                    <h1 > Welcome to Job Portal Page </h1>
                    <p> Are you searching for job? </p>
                    <p> If new user please create your account </p>
                    <Link to="/createaccount">
                        <button>Proceed to create user account here</button>
                    </Link>
                    <p> If already have account,proceed to login</p>
                    <Link to="/login">
                        <button>Go to Login page</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;