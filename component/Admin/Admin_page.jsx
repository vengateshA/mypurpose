import React, { useEffect } from 'react';
import { Link,Outlet, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Admin_page.css'

 
function Admin_page() {

    // const {id} = useParams()
    // useEffect(()=>{
    //     axios.get(`http://localhost:5001/api/company_name/${id}`)
    //     .then(res=>console.log({...res.data[0]}))
      
    //   },[id])

const navigate = useNavigate();
const handleLogout = () =>{
    axios.get("http://localhost:5001/api/logout")
    .then(res=>{
        if(res.data.Status ==="success"){
      navigate("/")
        } 
        else{
            alert("error")
        }
    })
    .catch(err => console.log(err))
}

    return (
        <div className='bg-secondary'>
 
              {/* <div className='pb-5' style={{ 
      backgroundImage: `url("https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg?auto=compress&cs=tinysrgb&w=1600")`, 
      height:'100%',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundsize: '100%',
      backgroundposition: 'center bottom'
    }}> 
      </div> */}


<h1 className=' container text-center py-5 bg-light text-primary border border-5 border-secondary h1'>ZEEKERS Technology Solutions pvt ltd</h1>

      <div className='container-fluid'>
     
      </div>
<div className='container-fluid  d-flex justify-content-center '>
 <div className='row '>
  <div className=' col-6'>
  <button className=' btn btn-outline-light btn-large text-center my-3  '>  <Link className='head' to='/Adminpage/:id/Admin_add_owner' >AddTrader</Link></button>
  </div>
  <div className='col-6'>
  <button className='btn btn-outline-light btn-large my-3 '><Link className='head'   onClick={handleLogout}>Logout</Link></button>
  </div>
 </div>

</div>

      <div >    

</div>
<div>

</div>
<div>
    <Outlet/>
</div>
</div>


    
    );
}

export default Admin_page;