import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



function Super_farm_details() {

 const [view, setview] = useState([])
 const[getid, setgetid] = useState([])
 const[search, setsearch] = useState('')

const {id} = useParams()
console.log(id, 'its me')

 useEffect   (()=>{
    axios.get(`http://localhost:5001/api/super_farmer_details`)
    .then(res =>setview(res.data))
    .then(err=>console.log(err))
 }, [])


 const handleMapClick = (e, farmer_location) => {
    e.preventDefault();
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(farmer_location)}`);
  };
  

 useEffect(()=>{
    axios.get(`http://localhost:5001/api/allgetinfo/${id}`) 
    .then(res=>
        {
        setgetid({...res.data[0]})
        console.log({...res.data[0]})   
    }
        ) 
},[id])

const user = getid.addedby
console.log(user)

 const filteredUsers = view.filter((manager) => manager.addedby === user );
 console.log(filteredUsers)


    return (
        <div  className='container-fluid d-flex justify-content-center align-items-center background'>
<div className='card p-3 '>
<form class="d-flex">
        <input class="form-control bg-light me-2" type="search" placeholder="Search" aria-label="Search"   onChange={(e) => {
    setsearch(e.target.value)
  }}/>
        {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
      </form>
    <div className='h3 text-center'>farm details</div>
        {
            filteredUsers
            .filter((val) => {
                if (search === "") {
                  return val;
                }
                else if (
                  val.farm_name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return val;
                }
              })
            .map((farm, index)=>{
                return(
                    <div className='card p-2 text-center '>                   
                         <div className='fw-bold bg-secondary text-light'>
                        {farm.farm_name}
                    </div>
                    <div className='fw-bold'>
                      {farm.farmer_name}
                      </div>
                      <div className='fw-bold'>
                        {farm.farmer_number}
                      </div>
                      <div className='fw-bold'>
                        {farm.farmer_address}, {farm.city}, {farm.state}, {farm.pincode} 
                      </div>
                      <div className='fw-bold'>
                             

                      <a href="#" onClick={(e) => handleMapClick(e, farm.farmer_location)}>location in google map </a>



                      </div>
                    </div>
                    

                )
            })
        }
        </div>
        </div>
    );
}

export default Super_farm_details;    


