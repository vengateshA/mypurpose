import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Adminactions() {
    const[traderdetails, settraderdetails]= useState([])


    useEffect(()=>{
        axios.get("http://localhost:5001/api/traderdetails")
        .then(res=>settraderdetails(res.data))
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
    
    return (
        <div className="container-fluid  d-flex justify-contnet-center">
     
      <table class="table table-bordered table-responsive table-striped table-secondary ">
  <thead>
    <tr>
      <th  scope="col ">s.no</th>
      <th scope="col">username</th>
      <th scope="col">actions</th>
      <th scope="col">username</th>
      <th scope="col">actions</th>  
    </tr>
  </thead>
  <tbody>
    { traderdetails.map((trade,index)=>{
         return (
       <tr key={trade.id}>
        <th>{index +1}</th>
        <td>{trade.username}</td>
        <td>
        <button className="btn btn btn-outline-primary" onClick={()=>deletecontact(trade.id)}>delete</button></td>
        <td>
       <button  className="btn btn-outline-primary" > <Link to={`Updatetrader/`+trade.id} class="nav-link active" aria-current="page" >update</Link></button></td>
       <td>
       <button  className="btn btn-outline-primary"> <Link to={`Adminviewtrader/${trade.id}`} class="nav-link active" aria-current="page" >view</Link></button>
       </td>  
       
        
       
       </tr>
     ) })
    }

  </tbody>
</table>
        </div>
    );
}

export default Adminactions;