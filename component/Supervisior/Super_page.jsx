import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Super_page() {

const [work, setwork] = useState([])

const {id} = useParams();
useEffect(()=>{
axios.get(`http://localhost:5001/api/work/${id}`)
.then(res=>setwork(res.data))
.then(error=>console.log(error))
}, [id])

const[maps, setmap] = useState([])

useEffect(()=>{
    axios.get(`http://localhost:5001/api/farmer_info`)
    .then(res=>setmap(res.data))
    .then(err=>console.log(err))
}, [id])



// const mapStyles = {
//     height: '400px',
//     width: '100%'
//   };

//   const defaultCenter = {
//     lat: 37.7749,
//     lng: -122.4194
//   };
    return (
        <div>
            {/* <div>
            <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      />
    </LoadScript>
            </div>
              */}
              <div>

            {
                work.map((works)=>{
                    return(
                        <div>
                        <h1>{works.work}</h1>
                        <h1>{works.work_id}</h1>
                        </div>
        
                    )
                })
            }
            </div>
     
            
        </div>
    );
}

export default Super_page;