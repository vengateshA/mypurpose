import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';



function Super_actions() {


    
const [work, setwork] = useState([])
const[getid, setgetid] = useState([])



const {id} = useParams();
console.log(id)

useEffect(()=>{
axios.get(`http://localhost:5001/api/work/${id}`)
.then(res=>setwork(res.data))
.then(error=>console.log(error))
}, [id])


useEffect(()=>{
  axios.get(`http://localhost:5001/api/allgetinfo/${id}`) 
  .then(res=>
      {
      setgetid({...res.data[0]})
      console.log({...res.data[0]})   
  }
      ) 
},[id])


    return (
      <div >
        <div className=' d-flex bg-secondary align-items- p-3'>
        <div>{getid.username}</div>
<a class="nav-link" href="#"><Link className='link' to={`super_farmer_details/${getid.id}`}><button className=" btn btn-outline-info btn-large "> farmer details</button></Link></a>
</div>
        <div className='container-fluid d-flex align-items-center justify-content-center pt-5 card'>
          <div>

<div>



</div>
                    <div className='container'>
                      {
                work.map((works)=>{
                    return(
                        <div>
                        <div className='h5'> task : {works.work}  </div>
                        <div className='h5'> farmer details : {works.farm_name} </div>
                        <div className='h5'>date ant time : {works.time} </div>
                    
                        <div>
          </div> 
          </div>
                    )
                })
            }
            </div>
            </div>
            </div>
            </div>
    );
}

export default Super_actions;