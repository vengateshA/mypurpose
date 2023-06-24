import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Newvalidation from '../Regex_validation/Newvalidation';

function Admin_add_owner() {

    const [addtrader, setaddtrader] = useState({
        roles: "owner",
        username: "",
        password: "",
        addedby: "admin@gmail.com",
        companyname: "",
        personname: "",
        gender: "",
        phonenumber: "", 
        alternumber: "",
        email: "",
        address: "",
        city: "",
        pincode: "",
        state: ""
    })


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
    // const like = choice
    // console.log(like , 'me')



    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

       seterrors(Newvalidation(addtrader))


        axios.post("http://localhost:5001/api/Admin_add_owner", addtrader)
            .then(res => {
                if (res.data.status === "success") {
                    navigate(-1)
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
                                        <label htmlFor="name"> Username  {errors.username && <span className='text-danger' >{errors.username}</span>} </label>
                                        <input className="form-control " onChange={e => setaddtrader({ ...addtrader, username: e.target.value })} name='username' id='name' type="text" />
                                    </div>

                                    <div className='formgroup py-2'>
                                        <label htmlFor="name"> Password {errors.password && <span className='text-danger' >{errors.password}</span>}</label>
                                        <input className="form-control " onChange={e => setaddtrader({ ...addtrader, password: e.target.value })} name='password' id='name' type="text" />
                                    </div>

                                    <div className='formgroup py-2'>
                                        <label htmlFor="name"> Companyname {errors.companyname && <span className='text-danger' >{errors.companyname}</span>} </label>
                                        <input className="form-control " onChange={e => setaddtrader({ ...addtrader, companyname: e.target.value })} id='name' type="text" />
                                    </div>
                                    <div className='formgroup py-2'>
                                        <label htmlFor="name"> Personname  {errors.personname && <span className='text-danger' >{errors.personname}</span>}   </label>
                                        <input className="form-control " onChange={e => setaddtrader({ ...addtrader, personname: e.target.value })} id='name' type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-4'>
                                <div className='card text-dark bg-light border-danger mb-3 p-3'>


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
                                        <label htmlFor="name"> Phonenumber {errors.phonenumber && <span className='text-danger' >{errors.phonenumber}</span>}   </label>
                                        <input className="form-control " onChange={e => setaddtrader({ ...addtrader, phonenumber: e.target.value })} id='name' type="text" />
                                    </div>
                                    <div className='formgroup py-2'>
                                        <label htmlFor="name"> Alternumber {errors.alternumber && <span className='text-danger' >{errors.alternumber}</span>}  </label>
                                        <input className="form-control " onChange={e => setaddtrader({ ...addtrader, alternumber: e.target.value })} id='name' type="text" />
                                    </div>
                                    <div className='formgroup py-2'>
                                        <label htmlFor="name"> Email {errors.email && <span className='text-danger' >{errors.email}</span>}  </label>
                                        <input className="form-control " onChange={e => setaddtrader({ ...addtrader, email: e.target.value })} id='name' type="text" />
                                    </div>

                                </div>
                            </div>
                            <div className='col-sm-4'>
                                <div className='card text-dark bg-light border-danger mb-3 p-3'>
                                    <div className='formgroup py-2'>
                                        <label htmlFor="name"> Address  {errors.address && <span className='text-danger' >{errors.address}</span>}  </label>
                                        <input className="form-control " onChange={e => setaddtrader({ ...addtrader, address: e.target.value })} id='name' type="text" />
                                    </div>

                                    <div className='formgroup py-2'>
                                        <label htmlFor="name"> Pincode {errors.pincode && <span className='text-danger' >{errors.pincode}</span>}  </label>
                                        <input className="form-control " onChange={e => setaddtrader({ ...addtrader, pincode: e.target.value })} id='name' type="text" />
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
                            <button className='btn btn-info mb-3' type='submit' >submit</button>

                            <button className='btn btn-danger' onClick={() => { navigate(-1); }} type='submit' >back</button>
                   
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Admin_add_owner;