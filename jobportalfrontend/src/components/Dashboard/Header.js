import React, { useEffect, useState } from 'react'
import "./header.css"

export default function Header() {
        let [hover, setHover] = useState(false)
    
        //inline style attrubute takes an object ;
           let myStyles = {
              backgroundColor :"grey"
           }
           let hoverstyle = {
               border:hover ?"1px solid black" :"none"
           }
       
           const handleHoverin = () => {
               setHover(true)
           }
           const handleHoverout = () => {
               setHover(false)
           }
       
           useEffect(() => {
               let section2 = document.querySelector(".section2")
               console.log(section2.children);
               let childofsection2 = section2.children;
               for (let i = 0; i < childofsection2.length; i++){
                childofsection2[i].addEventListener("mouseenter", () => {
                        childofsection2[i].style.border="1px solid black"
                   })
                   childofsection2[i].addEventListener("mouseout", () => {
                        childofsection2[i].style.border="none"
                   })
               }
       
           },[])
       
        return (
                <div className="header">
                        <div className="section1">
                                <div className="logo">
                                        <img src="/images/hvlogo.png" alt="herovired_logo" />
                                </div>
                        </div>
                        <div className="section2">

                                {/* <div onMouseEnter={handleHoverin} onMouseLeave={handleHoverout} style={hoverstyle}>All</div> */}
                                <div onMouseEnter={handleHoverin} onMouseLeave={handleHoverout} style={hoverstyle}>Dashboard</div>
                                <div onMouseEnter={handleHoverin} onMouseLeave={handleHoverout} style={hoverstyle}>Application Profile</div>
                                <div onMouseEnter={handleHoverin} onMouseLeave={handleHoverout} style={hoverstyle}>Applied Jobs</div>
                                <div onMouseEnter={handleHoverin} onMouseLeave={handleHoverout} style={hoverstyle}>Activity</div>
                                <div onMouseEnter={handleHoverin} onMouseLeave={handleHoverout} style={hoverstyle}>Job Agent</div>


                        </div>
                        <div className="section3">
                                <div className="signinimg">
                                        <img src="/images/renu.png" alt="renu_profile" />
                                </div>

                        </div>
                </div>
        )
}