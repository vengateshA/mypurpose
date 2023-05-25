import React, { useEffect, useState } from 'react';
// import './Owner_actions.css'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';


function Manager_actions() {

    const [manger, setmanager]= useState([])
    const [getid, setgetid] = useState([])
    const [search, setsearch] = useState('')
 
    const {id} = useParams()
    // console.log(id)


    useEffect(()=>{
        axios.get(`http://localhost:5001/api/branch_info`)
        .then(res=>{
    
            setmanager(res.data.data)
            // console.log(res.data.data)
        })
 
        .catch(err=>console.log(err))
    },[])
 
 
    const deletecontact = (id) =>{  
        
        if(window.confirm("are you sure that you want to delete that contact ?"))
        {
            axios.delete(`http://localhost:5001/api/manager_delete/${id}`)
            .then(res=>
                {console.log(res)
                  window.location.reload(true)
                })
            .catch(err=>{console.log(err)})
        }
    }

    useEffect(()=>{
        axios.get(`http://localhost:5001/api/allgetinfo/${id}`)
        .then(res=>
            {
            setgetid({...res.data[0]})
            console.log({...res.data[0]})   
        }
            ) 

    },[id])


    const navigate = useNavigate()
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
    

    // console.log(getid.username, 'its me' )
    // manager_add_super
  const usersname = getid.username 
  console.log(usersname,  'now')

    const filteredUsers = manger.filter((manager) => manager.addedby === usersname);

    return (

        <div  className='backgroundcolor'>
     <nav class="navbar navbar-expand-lg navbar-light  owner_nav_color">
  <div class="container-fluid">

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active text-light " aria-current="page" href="#"><h4>{getid.personname}</h4></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><Link className='link' to={'manager_add_super'}><button className=" btn btn-outline-info btn-large "> Add   </button></Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">  
<Link className='head'   onClick={handleLogout}> <button className='btn btn-outline-danger btn-large ' >  Logout</button></Link></a>
        </li>

      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"   onChange={(e) => {
    setsearch(e.target.value)
  }}/>
        {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
      </form>
    </div>
  </div>
</nav>

          {/* <div className='text-center'> 
     
          <button className=" text-center"><Link className='link' to={`manager_add_super`}> Add worker</Link></button> 
    <button className='btn btn-outline-primary btn-large my-3 '><Link className='head'   onClick={handleLogout}>Logout</Link></button> 

           </div>
           <h1>{getid.username}</h1> */}

        <div  className='container'>{
           filteredUsers
           .filter((val) => {
            if (search === "") {
              return val;
            }
            else if (
              val.username.toLowerCase().includes(search.toLowerCase())
            ) {
              return val;
            }
          })
           .map((trade, index)=>{
            return(
              <div className='companynameborder  container card text-center p-4  mt'>
             <div key={trade.id}     >
                 <div> {index+1}</div> 
                <div className='  username h3 card '> {trade.username}</div>
  <div className='buttonborder card d-flex justify-content-center py-3 d-flex justify-content-around'>
 
                <button  className=" button-view btn btn-outline-info px-4"> <Link to={`manager_update_super/${trade.id}`} class="nav-link active" aria-current="page" >Update</Link></button>
                <button  className=" button-view btn btn-outline-success px-4 my-2"> <Link to={`manager_super_details/${trade.id}`} class="nav-link active" aria-current="page" >View</Link></button>
                <button  className=" button-view btn btn-outline-secondary px-4"> <Link to={`manager_work_super/${trade.id}`} class="nav-link active" aria-current="page" >Viesssw</Link></button>
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

export default Manager_actions;
