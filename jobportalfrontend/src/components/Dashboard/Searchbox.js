import React, { useState, useEffect } from 'react';
import './searchbox.css'
export default function Searchbox({ setinputValue }) {


    function handleChange(e) {
        setinputValue(e.target.value)
    }
    function msg() {
        alert("Searching");
    }

    return (

        <div className="searchbox_container" >
            <br></br>
            <div>All jobs</div>
            <br></br>
            <div className="searchbox_searchsection">
                <input className="search_input" type="text" placeholder='title client location' onChange={handleChange} />
                <input className="search_button" type="button" value="Search" onclick="msg()" />

            </div>
            <div className="searchbox_dropdownlist">
                
                <select name="Alljobs" >
                    <option value="all jobs">All jobs</option>
                  
                </select>
                <select name="Industry" >
                    <option value="industry">Industry</option>
                  
                </select>
                <select name="Location">
                    <option value="location">Location</option>
                  
                </select>
                <select name="Jobtype" >
                    <option value="job type">Job type</option>
                  
                </select>
                <select name="posteddate">
                    <option value="Posted date">Posted date</option>
                  
                </select>
            </div>
        </div>

    )
}
