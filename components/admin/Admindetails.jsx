import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Admindetails() {

    const[traderdetails, settraderdetails]= useState([])

    const{id} = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:5001/api/view/${id}`)
        .then(res=>settraderdetails(...res.data[0]))

    },[id])
    return (
        <div>

            <h1>username : {traderdetails.username   }</h1>

            {/* {
                traderdetails.map((trade,index)=>{
                    return(
                        <div key={trade.id}>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                           <h6>username:   {trade.username}</h6>
                                </div>
                                <div className="col">
                           <h6>password:{trade.password}</h6>
                                </div>
                            </div>
                        </div>


                             <div className="card">
                            <h6>username:{trade.username}</h6>
                            <h6>password:{trade.password}</h6>
                            </div> 


                        </div>
                    )
                })
            } */}

      
        </div>
    );
}

export default Admindetails;