
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



function Adminviewtrader() {

    
    const[traderdetails, settraderdetails]= useState([])

    const{id} = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:5001/api/view/${id}`)
        .then(res=>settraderdetails({...res.data[0]}))

    },[id])
    return (
        <div>
                        <h1>username : {traderdetails.username }</h1>
            
        </div>
    );
}

export default Adminviewtrader;