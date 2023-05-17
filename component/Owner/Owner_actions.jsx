import React, { useEffect, useState } from 'react';
import './Owner_actions.css'
import axios from 'axios';
import { Link } from 'react-router-dom';


function Owner_actions() {

    const [manger, setmanager]= useState([])

    useEffect(()=>{
        axios.get("http://localhost:5001/api/company_info")
        .then(res=>setmanager(res.data))
        .catch(err=>console.log(err))
    },[])


    const deletecontact = (id) =>{  
        
        if(window.confirm("are you sure that you want to delete that contact ?"))
        {
            axios.delete(`http://localhost:5001/api/deletelogin/${id}`)
            .then(res=>
                {console.log(res)
                  window.location.reload(true)
                })
            .catch(err=>{console.log(err)})
        }
    }


    // const filteredUsers = manger.filter((manager) => manager.addedby == "owner1@gmail.com");

    return (

        <div  className='backgroundcolor'>
        <div> 

          </div>

          <div className='text-center'>
          <button className=" text-center"><Link className='link' to={'/owner_page/:id/Owner_add_manager'}> Add worker</Link></button> 
          
    {/* <button className='btn btn-outline-primary btn-large my-3 '><Link className='head'   onClick={handleLogout}>Logout</Link></button>  */}

           </div>

        <div  className='container'>{
           manger.map((trade, index)=>{
            return(
              <div className='companynameborder  container card text-center p-4  mt'>
             <div key={trade.id}     >
                 <div> {index+1}</div> 
                <div className='  username h3 card '> {trade.username}</div>
  <div className='buttonborder card d-flex justify-content-center py-3 d-flex justify-content-around'>
 
                <button  className=" button-view btn btn-outline-info px-4"> <Link to={`Owner_update_manager/${trade.id}`} class="nav-link active" aria-current="page" >Update</Link></button>
                <button  className=" button-view btn btn-outline-success px-4 my-2"> <Link to={`Owner_manager_details/${trade.id}`} class="nav-link active" aria-current="page" >View</Link></button>
                <button  className=" button-view btn btn-outline-secondary px-4"> <Link to={`Owner_update_manager/${trade.id}`} class="nav-link active" aria-current="page" >Viesssw</Link></button>
                <button  className=" button-view btn btn btn-outline-danger px-3 my-2" onClick={()=>deletecontact(trade.id)}>Delete</button>
         
  </div>
            
             </div>
              
             </div>
            )
           })
          }
        </div>
    <h1 className='text-light'>ssss</h1>
    <h1 className='text-light'>ssss</h1>
        <div className='fixed-bottom text-center h3 py-4  bg-secondary '>
        Contact ZTS: 9898786798
        </div>


            
        </div>



    );
}

export default Owner_actions; 




//     <div>

// <div className="container-fluid  d-flex justify-contnet-center">
     
//      <table class="table table-bordered table-responsive table-striped table-secondary ">
//  <thead>
//    <tr>
//      <th  scope="col ">sss.no</th>
//      <th scope="col">username</th>
//      <th scope="col">actions</th> 

//    </tr>
//  </thead>
//  <tbody>
//    { manger .map((trade,index)=>{
//         return (
//       <tr key={trade.id}>
//        <th>{index +1}</th>
//        <td>{trade.username}</td>
//        {/* <td>
//        <button className="btn btn btn-outline-primary px-3" onClick={()=>deletecontact(trade.id)}>.delete</button>
//        <button  className="btn btn-outline-primary px-3 " > <Link to={`Admin_update_owner/`+trade.id} class="nav-link active" aria-current="page" >update</Link></button>
//        <button  className="btn btn-outline-primary px-4"> <Link to={`Admin_owner_detials/${trade.id}`} class="nav-link active" aria-current="page" >view</Link></button>
//        </td> */}
//       </tr>
//     ) })
//    }

//  </tbody>
// </table>
//        </div>


//         {/* <div>
//             {
//                 manger.map((man, index)=>{
//                     return(
//                         <div key={man.id}>
//                             <div>{man.username}</div>
//                         </div>
//                     )
//                 })
//             }
//         </div> */}
//    </div>
