import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './profile.css'
import { useNavigate } from "react-router-dom";

const Profile = () => {
    let [info, setInfo] = useState({});
    const navigate = useNavigate();

    const handleProfile = (e) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        })
    }
    console.log(info);

    async function sendProfile() {
        let res = await axios.post("http://127.0.0.1:3002/candidateprofile", info)
        console.log(res.info);
        if (res.data == "Data Added") {
            console.log("candidate profile created");
            navigate("/jobcanvas");
            // navigate("/login");
        }
        else {
            alert("problem in posting candidate details,try again")
        }
    }
    return (
        // <div>
        <div className="profilepg">
            <div className="profilepg_header">
                <h5 >Fill in candidate profile details </h5>
            </div>
            {/* <div className="profilepg_container"> */}
            <div className="profilepg_details">
                <label for="fname">First name:</label>
                <input type="text" placeholder='firstName' name='firstName' onChange={handleProfile} />
                <label for="lname">Last name:</label>
                <input type="text" placeholder='lastName' name='lastName' onChange={handleProfile} />
                <label for="email">Email:</label>
                <input type="text" placeholder='email' name='email' onChange={handleProfile} />
                <label for="contact">Contact number:</label>
                <input type="text" placeholder='contact' name='contact' onChange={handleProfile} />
                <label for="address">Adress:</label>
                <input type="text" placeholder='address' name='address' onChange={handleProfile} />
                <label for="about">About:</label>
                <input type="text" placeholder='about' name='about' onChange={handleProfile} />
                <label for="prpiclink">Profile picture link:</label>
                <input type="text" placeholder='profilepiclink' name='profilepiclink' onChange={handleProfile} />
                <label for="currentcompany">Current Company:</label>
                <input type="text" placeholder='currentcompany' name='currentcompany' onChange={handleProfile} />
                <label for="ctc">Current CTC:</label>
                <input type="number" placeholder='ctc' name='ctc' onChange={handleProfile} />
                <label for="experience">Experience in years:</label>
                <input type="number" placeholder='experience in years' name='experience' onChange={handleProfile} />
                <label for="role">Current Role:</label>
                <input type="text" placeholder='currentrole' name='currentrole' onChange={handleProfile} />
                <label for="skill">Select Skill:</label>
                {/* <input type="text" placeholder='addskills' name='addskills' onChange={handleProfile} /> */}
                <select name="addskills" id="profileskills">
                    <option value="react">React</option>
                    <option value="ruby on rails">Ruby on rails</option>
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                </select>
                <label for="resumelink">Resume link:</label>
                <input type="text" placeholder='resume link' name='resumelink' onChange={handleProfile} />
                <label for="expectedctc">Expected CTC:</label>
                <input type="number" placeholder='expected salary' name='expectedsalary' onChange={handleProfile} />
                <label for="location">Preferred Location:</label>
                <input type="text" placeholder='preferred location' name='preferredlocation' onChange={handleProfile} />

                <input type="submit" onClick={sendProfile} /><br></br>
                <Link to="/JobCanvas">
                    <button>Click here to go to Job Canvas </button>
                </Link>
            </div>
            {/* </div> */}
        </div>
        // </div>
    );
}

export default Profile;
