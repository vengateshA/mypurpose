import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

function Owner_page() {

    const[com_name, setcom_name] = useState([])

    const {id} = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:5001/api/company_name/${id}`)
        .then(res=>setcom_name({...res.data[0]}))
      
      },[id])

    return (
        <div> 
        <h1 className='companyname container-fluid card text-center'> {com_name.companyname}Private Limited</h1>
        <div>
            <Outlet/>
            </div>
        </div>

    );
}

export default Owner_page;