import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';


function Super_page() {

  const[com_name, setcom_name] = useState([])

  const {id} = useParams();
  useEffect(()=>{
      axios.get(`http://localhost:5001/api/company_branch_name/${id}`)
      .then(res=>setcom_name({...res.data[0]}))
    
    },[id])

  
return (
  <div>
    <div>
    <h1 className='companyname container-fluid card text-center'> {com_name.companyname}Private Limited <br /> <span className='text-secondary h6 '> {com_name.branchname}  </span></h1>


  <Outlet/>
</div>
</div>
            
)
}

export default Super_page;


