
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";



function Manager_super_details() {

    
    const[traderdetails, settraderdetails]= useState([])

    

   const navigate = useNavigate() 
 
    const{id} = useParams(); 

    useEffect(()=>{
        axios.get(`http://localhost:5001/api/manager_super_details/${id}`)
        .then(res=>{
            settraderdetails({...res.data[0]})
            console.log({...res.data[0]})
        })

    },[id])

    // const deletecontact = (id) =>{ 
        
    //     if(window.confirm("are you sure that you want to delete that contact ?"))
    //     {
    //         axios.delete(`http://localhost:5001/api/deletelogin/${id}`)
    //         .then(res=>
    //             {console.log(res)
    //               window.location.reload(true)
    //             })
    //         .catch(err=>{console.log(err)})
    //     }
    // }



    return (
        <div>
                        {/* <h1>username : {traderdetails.username }</h1> */}

                <div className="container card">
                    <div className="row ">
                        <div className="col p-5 ">
                            <div className="bg-secondary text-center rounded py-1">
                            <h3 className="text-warning ">Username</h3>
                            <h4 className="">{traderdetails.username}</h4>
                            </div>
                            <div className="bg-secondary text-center rounded py-1 mt-1">
                            <h3  className="text-warning " >Password</h3>
                            <h4>{traderdetails.password}</h4>
                            </div>

                            <div className="bg-secondary text-center rounded py-1 mt-1">
                            <h3  className="text-warning ">Companyname</h3>                    
                            <h4>{traderdetails.companyname}</h4>
                            </div>

                            <div className="bg-secondary text-center rounded py-1 mt-1">
                            <h3  className="text-warning ">Personname</h3>
                            <h4>{traderdetails.personname}</h4>
                            </div>
                            <div className="bg-secondary text-center rounded py-1 mt-1">
                            <h3  className="text-warning ">Gender</h3>
                            <h4>{traderdetails.gender}</h4>
                            </div>
                        </div>
                        <div className="col p-5 ">
                        <div className="bg-secondary text-center rounded py-1 mt-1">
                            <h3  className="text-warning ">Phonenumber</h3>
                            <h4>{traderdetails.phonenumber}</h4>
                            </div>
                            <div className="bg-secondary text-center rounded py-1 mt-1">
                            <h3  className="text-warning ">Alternumber</h3>
                            <h4>{traderdetails.alternumber}</h4>
                            </div>
                            <div className="bg-secondary text-center rounded py-1 mt-1">
                            <h3  className="text-warning ">Email</h3>
                            <h4>{traderdetails.email}</h4>
                            </div>
                            <div className="bg-secondary text-center rounded py-1 mt-1">
                            <h3  className="text-warning ">Address</h3>
                            <h4>{traderdetails.address}{traderdetails.city}{traderdetails.state}-{traderdetails.pincode}</h4>
                            </div>
                        </div>
                    </div>
                    {/* <button className="btn btn btn-outline-primary px-3" onClick={()=>deletecontact(traderdetails.id)}>.delete</button> */}
                    <button className='btn btn-danger'  onClick={() => { navigate(-1);   }} type='submit' >back</button>
                </div>       
        </div>
    );
}

export default Manager_super_details;


