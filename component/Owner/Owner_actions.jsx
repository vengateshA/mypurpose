import React, { useEffect, useState } from 'react';
import './Owner_actions.css'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';


function Owner_actions() {

    const [manger, setmanager]= useState([])
    const [getid, setgetid] = useState([])
    const [search, setsearch] = useState('')
    const {id} = useParams()


    useEffect(()=>{
        axios.get(`http://localhost:5001/api/allgetinfo/${id}`)
        .then(res=>
            {
            setgetid({...res.data[0]})
            console.log({...res.data[0]})   
        }
            )

    },[id]) 


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
  const usersname = getid.username
  console.log(usersname,  'now')

    const filteredUsers = manger.filter((manager) => manager.addedby === usersname);

    return (
   <div className=''>
<nav class="navbar navbar-expand-lg navbar-light  owner_nav_color sticky-top">
  <div class="container-fluid">

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active text-dark " aria-current="page" href="#"><h4>{getid.personname}</h4></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><Link className='link' to={'Owner_add_manager'}><button className=" btn btn-outline-info btn-large "> Add   </button></Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">  
<Link className='head'   onClick={handleLogout}> <button className='btn btn-outline-danger btn-large ' >  Logout</button></Link></a>
        </li>

      </ul>

    </div>
  </div>
  <div>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"   onChange={(e) => {
    setsearch(e.target.value)
  }}/>
  
        {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
      </form>
      </div>
</nav>
  {/* <div className='d-flex justify-content-between align-items-center  sub-color  py-2'> 

    <div>
<div className='card py-1   text-warning '>{getid.personname}</div> 
</div>
<div>
<input type="text" className="form-control"
  placeholder="search me"
  onChange={(e) => {
    setsearch(e.target.value)
  }}
/>
</div>

  <div className='text-left'>
<Link className='link' to={'Owner_add_manager'}><button className=" btn btn-outline-info btn-large "> Add worker </button></Link>
       </div>
  
<Link className='head'   onClick={handleLogout}> <button className='btn btn-outline-danger btn-large ' >  Logout</button></Link>

   </div> */}

        <div  className='backgroundcolor'>

        <div  className='container'>{
           filteredUsers
           .filter((val) => {
            if (search === "") {
              return val;
            }
            else  
                  {
                    const searchTerm = search.toLowerCase();
                    return val.username.toLowerCase().includes(searchTerm) ||
                          val.phonenumber.toLowerCase().includes(searchTerm) ;  
                          // val.personname.toLowerCase().includes(searchTerm) ;

                }
          })  
           .map((trade, index)=>{
            return(
              <div className='companynameborder  container card text-center p-4  mt'>
             <div key={trade.id}     >
                 <div> {index+1}</div> 
                <div className='  username h3 card '> {trade.username}   </div>
  <div className='buttonborder card d-flex justify-content-center py-3 d-flex justify-content-around'>
 
                <button  className=" button-view btn btn-outline-info px-4"> <Link to={`Owner_update_manager/${trade.id}`} class="nav-link active" aria-current="page" >Update</Link></button>
                <button  className=" button-view btn btn-outline-success px-4 my-2"> <Link to={`Owner_manager_details/${trade.id}`} class="nav-link active" aria-current="page" >View</Link></button>
                <button  className=" button-view btn btn-outline-secondary px-4"> <Link to={`Owner_update_manar/${trade.id}`} class="nav-link active" aria-current="page" >Their performance</Link></button>
                <button  className=" button-view btn btn btn-outline-danger px-3 my-2" onClick={()=>deletecontact(trade.id)}>Delete</button>
         
  </div>
            
             </div>
              
             </div>
             
            )
           })
          }
        </div>
    <h1 className='text-light'>zts technology</h1>
    <h1 className='text-light'>zts technology</h1>
        <div className='fixed-bottom text-center h3 py-4  bg-secondary '>
        Contact ZTS: 9898786798
        </div>


            
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
