import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Admin_add_owner() {
    // roles, username, password, addedby, companyname, personname, phonenumber, alternumber, email, address, city, state, pincode
    const [addtrader, setaddtrader]=useState({
     roles:"trader",
     username:"",
     password:"",
     addedby:"admin@gmail.com",
     companyname:"",
     personanme:"",
     gender:"",
     phonenumber:"",
     alternumber:"", 
     email:"",
     address:"",
     city:"",
     state:"", 
     pincode:"" 
    })

    const navigate = useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:5001/api/Admin_add_owner", addtrader)
        .then(res=>{
            if(res.data.Status === "success"){
                navigate('/Adminpage')
            }
        })
        .catch(err => console.log(err));
    

    }
    return (
        <div>   
                  <form onSubmit={handleSubmit}>
         

<div className='container-fluid  d-flex justify-content-center pt-5 '>
<div className='card border-secondary bg- p-4'>
<div className='text-center '>
                            <h3>Add User</h3>
                        </div>
                <div className='row '>
                    <div className='col-sm-4'>
                        <div className='card text-dark bg-light border-danger mb-3 p-3'>
                    
                        <div className='formgroup py-2'>
                        <label htmlFor="name"> Username</label>
                        <input className="form-control " onChange={e=>setaddtrader({...addtrader,  username:e.target.value})} id= 'name'  type="text" />
                        </div>
                     
                        <div className='formgroup py-2'>
                        <label htmlFor="name"> Password</label>
                        <input className="form-control " onChange={e=>setaddtrader({...addtrader,  password:e.target.value})} id= 'name'  type="text" />
                        </div>
                         
                        <div className='formgroup py-2'>
                        <label htmlFor="name"> Companyname</label>
                        <input className="form-control " onChange={e=>setaddtrader({...addtrader,  companyname:e.target.value})} id= 'name'  type="text" />
                        </div>
                        <div className='formgroup py-2'>
                        <label htmlFor="name"> Personname</label>
                        <input className="form-control " onChange={e=>setaddtrader({...addtrader,  personanme:e.target.value})} id= 'name'  type="text" />
                        </div>
                 </div>
                 </div>
                 <div className='col-sm-4'>
                        <div className='card text-dark bg-light border-danger mb-3 p-3'>
                        <div className='formgroup py-2'>
                        <label htmlFor="name"> Gender</label>
                        <input className="form-control " onChange={e=>setaddtrader({...addtrader,  gender:e.target.value})} id= 'name'  type="text" />
                        </div>
                        <div className='formgroup py-2'>
                        <label htmlFor="name"> Phonenumber</label>
                        <input className="form-control " onChange={e=>setaddtrader({...addtrader,  phonenumber:e.target.value})} id= 'name'  type="text" />
                        </div>
                        <div className='formgroup py-2'>
                        <label htmlFor="name"> Alternumber</label>
                        <input className="form-control " onChange={e=>setaddtrader({...addtrader,  alternumber:e.target.value})} id= 'name'  type="text" />
                        </div>
                        <div className='formgroup py-2'>
                        <label htmlFor="name"> Email</label>
                        <input className="form-control " onChange={e=>setaddtrader({...addtrader,  email:e.target.value})} id= 'name'  type="text" />
                        </div>
           
                 </div>
                 </div>
                 <div className='col-sm-4'>
                        <div className='card text-dark bg-light border-danger mb-3 p-3'>
                        <div className='formgroup py-2'>
                        <label htmlFor="name"> Address</label>
                        <input className="form-control " onChange={e=>setaddtrader({...addtrader,  address:e.target.value})} id= 'name'  type="text" />
                        </div>
                        <div className='formgroup py-2'>
                        <label htmlFor="name"> City</label>
                        <input className="form-control " onChange={e=>setaddtrader({...addtrader,  city:e.target.value})} id= 'name'  type="text" />
                        </div>
                        <div className='formgroup py-2'>
                        <label htmlFor="name"> State</label>
                        <input className="form-control " onChange={e=>setaddtrader({...addtrader,  state:e.target.value})} id= 'name'  type="text" />
                        </div>
                        <div className='formgroup py-2'>
                        <label htmlFor="name"> Pincode</label>
                        <input className="form-control " onChange={e=>setaddtrader({...addtrader,  pincode  :e.target.value})} id= 'name'  type="text" />
                        </div>
                 </div>
                 </div>
                 <button className='btn btn-info mb-3'  type='submit' >submit</button>
             
            <button className='btn btn-danger'  onClick={() => { navigate('/Adminpage');   }} type='submit' >back</button>
            
           
                </div>
          
                </div>
          
            </div>
            </form>
         
        </div>
    );
}

export default Admin_add_owner;