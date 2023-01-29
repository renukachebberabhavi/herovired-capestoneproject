import React, { useState, useEffect } from 'react';
import axios from "axios"
import Searchbox from './Searchbox';


export default function Content() {
        // useEffect ,dependency array should be empty
        //axios 
        // store the data in state and than we will map it inside our react component
        let [data, setData] = useState([]);
        let [inputValue, setinputValue] = useState('')
        //     let [adddata, setaddedData] = useState([]);
        //     let [iddata, setidData] = useState([]);
        //     let [uiupdatecnter,setuiupdate] = useState(0)
        useEffect(() => {
                const fetchData = async () => {
                        let res = await axios.get("http://127.0.0.1:3002/jobdetail");
                        console.log(res.data);
                        setData(res.data)

                        // arryay of objects
                }
                fetchData()
        }, [])
        //     }, [uiupdatecnter])
        console.log(data);
        console.log(inputValue);


        // console.log(data.filter)
        let filterData = data.filter((ele) => ele.companyname.toLowerCase() == inputValue.toLowerCase() || ele.location.toLowerCase() == inputValue.toLowerCase());

        return (
                <div>
                        <Searchbox setinputValue={setinputValue} />
                        <h1 ><i> Job description</i></h1>

                        {filterData.length ? filterData.map((ele) => (
                                <div>
                                        <div>jobcode: {ele.jobcode}</div>
                                        <div>company name: {ele.companyname}</div>
                                        <div>Location: {ele.location}</div>
                                        <div>-----------------------------------</div>

                                </div>
                        ))
                                :
                                data.length && data.map((ele) => (
                                        <div>
                                                <div>jobcode: {ele.jobcode}</div>
                                                <div>company name: {ele.companyname}</div>
                                                <div>Location: {ele.location}</div>
                                                <div>-----------------------------------</div>
                                        </div>
                                ))
                        }

                </div>
        )
}
