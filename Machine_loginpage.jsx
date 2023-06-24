
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Machine_loginpage() {
    const [values, setvalues] = useState({
        username: '',
        password: ''
      })
      
    
    const navigate = useNavigate()
        // axios.defaults.withCredentials = true;
        
        const handleSubmit= (e) =>{
          e.preventDefault();
          axios.post("http://localhost:5001/api/loginpage", values) 
          .then(res =>{
            if(res.data.Status ==="success"){
                const id = res.data.id
                navigate(`/machine_page/${id} `)
                console.log("meassage wil be checked")
            }
    else{
       alert(res.data.Message) 
    }
          })
          .catch(err=> console.log(err));
        }
    
        return (
    <div className='card'>
    
    <div className='pb-5' style={{ 
            backgroundImage: `url("https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg?auto=compress&cs=tinysrgb&w=1600")`, 
            height:'100%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundsize: '100%',
            backgroundposition: 'center bottom'
          }}>
          
    
    <div className='container min-vh-100  d-flex justify-content-center align-items-center'>
    
    
    
      <div className='row'>
        <div className='col '>
    <div className="card" style={{background:'#C3D4EE'}}>
      <div className='p-5'>
      <div className='text-center'>
        <img src='data:image/jpeg;base64,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'
        style={{height:200, width:200}} className='pt-4 img-fluid ' alt='loginimg'
        ></img>
      </div>
      <div className='text-center card-title'>
        Let's start with our machine for easy to make
    
      </div>
      <div className='py-3 px-5'>
    <form onSubmit={handleSubmit} >
    <div className="form-group py-3 ">
        <label htmlFor="exampleInputEmail1 " className='h5'> username</label>
        <input type="email"  onChange={e=>setvalues({...values,username:e.target.value})} className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    
      </div>
      <div className="form-group pt-3 pb-5">
        <label htmlFor="exampleInputPassword1" className='h5'>Password</label>
        <input onChange={e=>setvalues({...values,password:e.target.value})} 
        type="password" className="form-control " 
        id="exampleInputPassword1" placeholder="Password"/>
      </div>
    <div className='text-center'>
      <button type="submit" className="btn btn-primary px-3  ">Submit</button>
      </div>
    </form> 
    </div>
    <div className='text-center'>
<Link to={'/'}> <button className='btn btn-outline-secondary' >Login With Business Account </button></Link>
</div>
    </div>

    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    );
}

export default Machine_loginpage;