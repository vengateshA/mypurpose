import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Newvalidation from '../Regex_validation/Newvalidation';

function Manager_update_super() {

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


    const [errors, seterrors] = useState({})

    const [choice, setchoice] = useState([])

    
    useEffect(() => {
        axios.get('http://localhost:5001/api/choice')

            .then(res => { 
                // console.log(res.data, 'fdafdsa')
                setchoice(res.data)

            })
            .catch(err => console.log(err))
    }, [])
    
    useEffect(()=>{
        axios.get(`http://localhost:5001/api/manager_update_superbyid/${id}`)
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
        seterrors(Newvalidation(addtrader))

        axios.put(`http://localhost:5001/api/manager_update_super/${id}`, addtrader)
        .then(res=>{
            if(res.data.Status === "success"){
                navigate(-1)
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

                  <div className='formgroup py-2'>
                  <label htmlFor="name"> Username   {errors.username && <span className='text-danger' >{errors.username}</span>} </label>
                  <input className="form-control " onChange={e=>setaddtrader({...addtrader,  username:e.target.value})} value={addtrader.username} name='username' id= 'name'  type="text" />
                  </div>
               
                  <div className='formgroup py-2'>
                  <label htmlFor="name"> Password {errors.password && <span className='text-danger' >{errors.password}</span>} </label>
                  <input className="form-control " onChange={e=>setaddtrader({...addtrader,  password:e.target.value})} name='password' value={addtrader.password} id= 'name'  type="text" />
                  </div>
                   
                  <div className='formgroup py-2'>
                  <label htmlFor="name"> Companyname {errors.companyname && <span className='text-danger' >{errors.companyname}</span>} </label>
                  <input className="form-control " onChange={e=>setaddtrader({...addtrader,  companyname:e.target.value})} name='companyname' value={addtrader.companyname} id= 'name'  type="text" />
                  </div>
                  <div className='formgroup py-2'>
                  <label htmlFor="name"> Personname {errors.personname && <span className='text-danger' >{errors.personname}</span>} </label>
                  <input className="form-control " onChange={e=>setaddtrader({...addtrader,  personname:e.target.value})} name='personname' value={addtrader.personname} id= 'name'  type="text" />
                  </div>
           </div>
           </div>
           <div className='col-sm-4'>
                  <div className='card text-dark bg-light border-danger mb-3 p-5'>
                  <div className='formgroup py-2'>
                                  <label htmlFor="">gender {errors.gender && <span className='text-danger' >{errors.gender}</span>}   </label>
                                  <select className="form-control" onChange={e => setaddtrader({ ...addtrader, gender: e.target.value })}>
                                      {
                                          choice.map((opts, index) =>
                                              <option key={index.id}>{opts.gender}
                                              </option>)
                                      }
                                  </select>
                              </div>
                  <div className='formgroup py-2'>
                  <label htmlFor="name"> Phonenumber {errors.phonenumber && <span className='text-danger' >{errors.phonenumber}</span>} </label>
                  <input className="form-control " onChange={e=>setaddtrader({...addtrader,  phonenumber:e.target.value})} name='phonenumber' value={addtrader.phonenumber} id= 'name'  type="text" />
                  </div>
             
                  <div className='formgroup py-2'>
                  <label htmlFor="name"> Alternumber {errors.alternumber && <span className='text-danger' >{errors.alternumber}</span>} </label>
                  <input className="form-control " onChange={e=>setaddtrader({...addtrader,  alternumber:e.target.value})} value={addtrader.alternumber} name='alternumber' id= 'name'  type="text" />
                  </div>
                  <div className='formgroup py-2'>
                  <label htmlFor="name"> Email {errors.email && <span className='text-danger' >{errors.email}</span>} </label>
                  <input className="form-control " onChange={e=>setaddtrader({...addtrader,  email:e.target.value})} name='email' value={addtrader.email} id= 'name'  type="text" />
                  </div>
             
           </div>
           </div>
           <div className='col-sm-4'>
                  <div className='card text-dark bg-light border-danger mb-3 p-5'>
                 
                  <div className='formgroup py-2'>
                  <label htmlFor="name"> Address {errors.address && <span className='text-danger' >{errors.address}</span>} </label>
                  <input className="form-control " onChange={e=>setaddtrader({...addtrader,  address:e.target.value})} name='address' value={addtrader.address} id= 'name'  type="text" />
                  </div>
            
                  <div className='formgroup py-2'>
                  <label htmlFor="name"> Pincode {errors.pincode && <span className='text-danger' >{errors.pincode}</span>} </label>
                  <input className="form-control " onChange={e=>setaddtrader({...addtrader,  pincode  :e.target.value})} name='pincode' value={addtrader.pincode} id= 'name'  type="text" />
                  </div>
                  <div className='formgroup py-2'>
                                  <label htmlFor="">city {errors.city && <span className='text-danger' >{errors.city}</span>}  </label>
                                  <select className='form-control py-2' onChange={e => setaddtrader({ ...addtrader, city: e.target.value })}>
                                      {
                                          choice.map((opts, index) =>
                                              <option key={index.id}>{opts.city}
                                              </option>)
                                      }
                                  </select>
                              </div>

                              <div className='formgroup py-2'>
                                  <label htmlFor="">state {errors.state && <span className='text-danger' >{errors.state}</span>}  </label>
                                  <select className='form-control py-2 ' onChange={e => setaddtrader({ ...addtrader, state: e.target.value })}>
                                      {
                                          choice.map((opts, index) =>
                                              <option key={index.id}>{opts.state}
                                              </option>)
                                      }
                                  </select>
                              </div>


           </div>
           </div>
       
     
          </div>
          <button className='btn btn-info'  type='submit' >submit</button>
          <button className='btn btn-danger mt-3'  onClick={() => { navigate(0);   }} type='submit' >back</button>
       
      </div>
      </div>
      </form>
   
  </div>
  </div>
    );
}

export default Manager_update_super;


