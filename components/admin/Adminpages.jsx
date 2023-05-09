  import React from 'react';
  import { Link,Outlet } from 'react-router-dom';
  import { useNavigate } from 'react-router-dom';
  import axios from 'axios';
  import './Adminpages.css'
  import Adminactions from './Adminactions';
  function Adminpages() {

    
      
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
          <div>
                {/* <div style={{ 
        backgroundImage: `url("https://media.istockphoto.com/id/1371690004/photo/happy-administrative-professionals-day-greeting-card-close-up.jpg?b=1&s=170667a&w=0&k=20&c=mjxFWUlPDsUix1zV66Tt-RX5SpYduCHZddjbp0gk2Og=")`, 
        backgroundRepeat:"no-repeat",
        backgroundsize:"cover"
      }}>
        </div> */}
 <h1 className=' container text-center py-5 bg-light text-primary border border-5 border-secondary h1'>ZEEKERS Technology Solutions pvt ltd</h1>

        <div className='container-fluid'>
       
        </div>
<div className='container-fluid  d-flex justify-content-center '>
   <div className='row '>
    <div className=' col-6'>
    <button className=' btn btn-outline-primary btn-large text-center my-3  '>  <Link className='head' to='/Adminpages/Addtrader' >AddTrader</Link></button>
    </div>
    <div className='col-6'>
    <button className='btn btn-outline-primary btn-large my-3 '><Link className='head'   onClick={handleLogout}>Logout</Link></button>
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

  export default Adminpages;