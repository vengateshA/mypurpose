import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Updatetrader() {

    const [addtrader, setaddtrader]=useState({
        roles:"admin",
        username:"",
        password:"",
        addedby:"trader@gmail.com",
        companyname:"",
        personname:"",
        gender:"",
        phonenumber:"",
        alternumber:"",
        email:"",
        address:"",
        city:"",
        state:"",   
        pincode:"" 
       })
    const navigate = useNavigate()
    const {id} = useParams();
    
    useEffect(()=>{
        axios.get(`http://localhost:5001/api/gettraderforupdate/${id}`)
        .then(res=>{
        
            setaddtrader({...addtrader, 

                username:res.data.Result[0].username,
                 password:res.data.Result[0].password,
         
                 companyname:res.data.Result[0].companyname,
                 personname:res.data.Result[0].personname,
                 gender:res.data.Result[0].gender,
                 phonenumber:res.data.Result[0].phonenumber,
                 email:res.data.Result[0].email,
                 address:res.data.Result[0].address,
                 city:res.data.Result[0].city,
                 state:res.data.Result[0].state,
                 pincode:res.data.Result[0].pincode
                 
            })
        })
        .catch(err=>console.log(err));
    }, [ ])


    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:5001/api/updatetrader/${id}`, addtrader)
        .then(res=>{
            if(res.data.Status === "success"){
                navigate('/')
            }
        })
        .catch(err => console.log(err));
    }

   
    return (
        <div>
              <div>   
                  <form onSubmit={handleSubmit}>
<div className='container-fluid  d-flex justify-content-center '>
<div className='card border-secondary bg- p-5'>
<div className='text-center '>
                            <h3>Update trader</h3>
                        </div>
                <div className='row '>
                    <div className='col-sm-4'>
                        <div className='card text-dark bg-light border-danger mb-3 p-5'>

                        {/* <div className='formgroup py-2'>
                        <label htmlFor="name"> Username</label>
                        <input className="form-control " onChange={e=>setaddtrader({...addtrader,  roles:e.target.value})} value={addtrader.roles} id= 'name'  type="text" />
                        </div>
                        <div className='formgroup py-2'>
                        <label htmlFor="name"> Username</label>
                        <input className="form-control " onChange={e=>setaddtrader({...addtrader,  addedby:e.target.value})} value={addtrader.addedby} id= 'name'  type="text" />
                        </div>
                     */}
                        <div className='formgroup py-2'>
                        <label htmlFor="name"> Username</label>
                        <input className="form-control " onChange={e=>setaddtrader({...addtrader,  username:e.target.value})} value={addtrader.username} id= 'name'  type="text" />
                        </div>
                     
                        <div className='formgroup py-2'>
                        <label htmlFor="name"> Password</label>
                        <input className="form-control " onChange={e=>setaddtrader({...addtrader,  password:e.target.value})} value={addtrader.password} id= 'name'  type="text" />
                        </div>
                         
                        <div className='formgroup py-2'>
                        <label htmlFor="name"> Companyname</label>
                        <input className="form-control " onChange={e=>setaddtrader({...addtrader,  companyname:e.target.value})} value={addtrader.companyname} id= 'name'  type="text" />
                        </div>
                        <div className='formgroup py-2'>
                        <label htmlFor="name"> Personname</label>
                        <input className="form-control " onChange={e=>setaddtrader({...addtrader,  personname:e.target.value})} value={addtrader.personname} id= 'name'  type="text" />
                        </div>
                 </div>
                 </div>
                 <div className='col-sm-4'>
                        <div className='card text-dark bg-light border-danger mb-3 p-5'>
                        <div className='formgroup py-2'>
                        <label htmlFor="name"> Gender</label>
                        <input className="form-control " onChange={e=>setaddtrader({...addtrader,  gender:e.target.value})}  value={addtrader.gender} id= 'name'  type="text" />
                        </div>
                        <div className='formgroup py-2'>
                        <label htmlFor="name"> Phonenumber</label>
                        <input className="form-control " onChange={e=>setaddtrader({...addtrader,  phonenumber:e.target.value})} value={addtrader.phonenumber} id= 'name'  type="text" />
                        </div>
                   
                        <div className='formgroup py-2'>
                        <label htmlFor="name"> Alternumber</label>
                        <input className="form-control " onChange={e=>setaddtrader({...addtrader,  alternumber:e.target.value})} value={addtrader.alternumber} id= 'name'  type="text" />
                        </div>
                        <div className='formgroup py-2'>
                        <label htmlFor="name"> Email</label>
                        <input className="form-control " onChange={e=>setaddtrader({...addtrader,  email:e.target.value})} value={addtrader.email} id= 'name'  type="text" />
                        </div>
                   
                 </div>
                 </div>
                 <div className='col-sm-4'>
                        <div className='card text-dark bg-light border-danger mb-3 p-5'>
                       
                        <div className='formgroup py-2'>
                        <label htmlFor="name"> Address</label>
                        <input className="form-control " onChange={e=>setaddtrader({...addtrader,  address:e.target.value})} value={addtrader.address} id= 'name'  type="text" />
                        </div>
                        <div className='formgroup py-2'>
                        <label htmlFor="name"> City</label>
                        <input className="form-control " onChange={e=>setaddtrader({...addtrader,  city:e.target.value})} value={addtrader.city} id= 'name'  type="text" />
                        </div>
                        <div className='formgroup py-2'>
                        <label htmlFor="name"> State</label>
                        <input className="form-control " onChange={e=>setaddtrader({...addtrader,  state:e.target.value})} value={addtrader.state} id= 'name'  type="text" />
                        </div>
                        <div className='formgroup py-2'>
                        <label htmlFor="name"> Pincode</label>
                        <input className="form-control " onChange={e=>setaddtrader({...addtrader,  pincode  :e.target.value})} value={addtrader.pincode} id= 'name'  type="text" />
                        </div>
                 </div>
                 </div>
             
           
                </div>
                <button className='btn btn-info'  type='submit' >submit</button>
             
            </div>
            </div>
            </form>
         
        </div>
        </div>
    );
}

export default Updatetrader;