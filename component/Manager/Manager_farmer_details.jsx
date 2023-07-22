
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";



function Manager_farmer_details() {

    const[traderdetails, settraderdetails]= useState([])

//    const navigate = useNavigate() 

    const{id} = useParams(); 
    console.log(id)
    
    useEffect(()=>{
        axios.get(`http://localhost:5001/api/manager_farmer_details/${id}`)
        .then(res=>{
            settraderdetails({...res.data[0]})
            console.log({...res.data[0]})
        })
    },[id])


    return (
       
            <div class="container vh-100  d-flex justify-content-center align-items-center text-center card  " style={{backgroundColor:'#FEF2F2'}}>
    <div class="row ">
        <h1 className="bg-secondary p-3 border mb-5">Farmer details</h1>
        <span className="col-6 h3 text-center  PT-3"> farm_name   </span>
       <span className="col-6 h4 text-start PT-3">: {traderdetails.farm_name} </span> 
        <span className="col-6 h3 text-center PT-3  "> farmer_name</span>
       <span className="col-6 h4 text-start PT-3">:  {traderdetails.farmer_name} </span> 
       
        <span className="col-6 h3 text-center  "> farmer_number</span>
       <span className="col-6 h4 text-start"> : {traderdetails.farmer_number} </span> 
      
        <span className="col-6 h3 text-center  "> farmer_gender</span>
       <span className="col-6 h4 text-start"> : {traderdetails.farmer_gender} </span> 
      
        <span className="col-6 h3 text-center  "> Adding_time</span>
       <span className="col-6 h4 text-start"> : {traderdetails.timeanddate} </span> 
      <div className="mt-5 py-4  "  style={{backgroundColor: '#E4C2C1'}}>
        <h3 className="col-12 h3 text-center " style={{backgroundColor: '#E4C2C1'}} > Address</h3>
       <span className="col-12 h4 text-start">
        :   {traderdetails.farmer_address}, {traderdetails.city}, {traderdetails.state},{traderdetails.pincode}, {traderdetails.farmer_location} 
         </span> 
         </div>

    </div>
    </div>

//         <div className="container-fluid d-flex justify-content-center bg-secondary">
//           <section class="vh-100" style={{backgroundColor: "#F6F6F2"}}> 
//   <div class="container py-5 h-100">
//     <div class="row d-flex justify-content-center align-items-center h-100">
//       <div class="col col-lg-6 mb-4 mb-lg-0">
//         <div class="card mb-3" >
//           <div class="row g-0">
//             <div class="col-md-4 gradient-custom text-center text-white"
//             >
//               {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
//                 alt="Avatar" class="img-fluid my-5" /> */}
//               <h5 className="text-primary">Marie Horwitz</h5>
//               <p className="text-info">Web Designer</p>
//               <i class="far fa-edit mb-5"></i>
//             </div>
//             <div class="col-md-8">
//               <div class="card-body p-4">
//                 <h6>Information</h6>
//                 <hr class="mt-0 mb-4"/>
//                 <div class="row pt-1">
//                   <div class="col-6 mb-3">
//                     <h6>Email</h6>
//                     <p class="text-muted">info@example.com</p>
//                   </div>
//                   <div class="col-6 mb-3">
//                     <h6>Phone</h6>
//                     <p class="text-muted">123 456 789</p>
//                   </div>
//                 </div>
//                 <h6>Projects</h6>
//                 <hr class="mt-0 mb-4"/>
//                 <div class="row pt-1">
//                   <div class="col-6 mb-3">
//                     <h6>Recent</h6>
//                     <p class="text-muted">Lorem ipsum</p>
//                   </div>
//                   <div class="col-6 mb-3">
//                     <h6>Most Viewed</h6>
//                     <p class="text-muted">Dolor sit amet</p>
//                   </div>
//                 </div>
//                 <div class="d-flex justify-content-start">
//                   <a href="#!"><i class="fab fa-facebook-f fa-lg me-3"></i></a>
//                   <a href="#!"><i class="fab fa-twitter fa-lg me-3"></i></a>
//                   <a href="#!"><i class="fab fa-instagram fa-lg"></i></a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
//         </div>
    );
}

export default Manager_farmer_details; 