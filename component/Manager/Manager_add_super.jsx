import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Newvalidation from '../Regex_validation/Newvalidation';

function Manager_add_super() {

    

    const [errors, seterrors] = useState({})
    const [choice, setchoice] = useState([])
    const [getid, setgetid] = useState([])
    const { id } = useParams();
    const navigate = useNavigate();




    useEffect(() => {
        axios.get(`http://localhost:5001/api/allgetinfo/${id}`)
            .then(res => {
                setgetid({ ...res.data[0] })
                // console.log({ ...res.data[0] })
            } 
            )
    }, [id])

    useEffect(() => {
        setaddtrader(prevState => ({
            ...prevState,
            addedby: getid.username,
            companyname: getid.companyname,
            branchname: getid.branchname
        }));
    }, [getid]);

    // useEffect(() => {
    //     setaddtrader(prevState => ({
    //         ...prevState,
    //         companyname: getid.companyname
    //     }));
    // }, [getid]);

    // useEffect(() => {
    //     setaddtrader(prevState => ({
    //         ...prevState,
    //         branchname: getid.branchname
    //     }));
    // }, [getid]);




    // console.log(getid.username, 'its working')

    const [addtrader, setaddtrader] = useState({
        roles: "super",
        username: "",
        password: "",
        addedby: "",
        companyname: "",
        branchname: "",
        personname: "",
        gender: "",
        phonenumber: "",
        alternumber: "",
        email: "",
        address: "",
        city: "",
        state: "",
        pincode: ""
    })


    const handleSubmit = (e) => {
        e.preventDefault();
        seterrors(Newvalidation(addtrader))  //anna ithu
        axios.post(`http://localhost:5001/api/manager_add_super/${id}`, addtrader)
            .then(res => {
                if (res.data.Status === "success") {
                    navigate(-1)
                }
            })
            .catch(err => console.log(err));
    }



    useEffect(() => {
        axios.get('http://localhost:5001/api/choice')
            .then(res => {
                setchoice(res.data)
            })
            .catch(err => console.log(err))
    }, [])



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='container-fluid  d-flex justify-content-center pt-5 '>
                    <div className='card border-secondary bg- p-4'>
                        <div className='text-center '>
                            <h3>Add Supervisior</h3>
                        </div>
                        <div className='row '>
                            <div className='col-sm-4'>
                                <div className='card text-dark bg-light border-danger mb-3 p-3'>

                                    <div className='formgroup py-2'>
                                        <label htmlFor="name"> Username  {errors.username && <span className='text-danger' >{errors.username}</span>} </label>
                                        <input className="form-control " onChange={e => setaddtrader({ ...addtrader, username: e.target.value })} name='username' id='name' type="text" />

                                    </div>

                                    <div className='formgroup py-2'>

                                        <label htmlFor="name"> Password  {errors.password && <span className='text-danger' >{errors.password}</span>} </label>

                                        <input className="form-control " onChange={e => setaddtrader({ ...addtrader, password: e.target.value })} name='password' id='name' type="text" />

                                    </div>

                                    <div className='formgroup py-2'>


                                        <label htmlFor="name"> Personname  {errors.personname && <span className='text-danger' >{errors.personname}</span>}  </label>


                                        <input className="form-control " onChange={e => setaddtrader({ ...addtrader, personname: e.target.value })} name='personname' id='name' type="text" />
                                    </div>
                                    <div className='formgroup py-2'>
                                        <label htmlFor="">gender  {errors.gender && <span className='text-danger' >{errors.gender}</span>}   </label>
                                        <select className="form-control" onChange={e => setaddtrader({ ...addtrader, gender: e.target.value })}>
                                            {
                                                choice.map((opts, index) =>
                                                    <option key={index.id}>{opts.gender}
                                                    </option>)
                                            }
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-4'>
                                <div className='card text-dark bg-light border-danger mb-3 p-3'>

                                    <div className='formgroup py-2'>
                                        <label htmlFor="name"> Phonenumber  {errors.phonenumber && <span className='text-danger' >{errors.phonenumber}</span>}  </label>
                                        <input className="form-control " onChange={e => setaddtrader({ ...addtrader, phonenumber: e.target.value })} name='phonenumber' id='name' type="text" />
                                    </div>
                                    <div className='formgroup py-2'>
                                        <label htmlFor="name"> Alternumber  {errors.alternumber && <span className='text-danger' >{errors.alternumber}</span>}    </label>
                                        <input className="form-control " onChange={e => setaddtrader({ ...addtrader, alternumber: e.target.value })} name='alternumber' id='name' type="text" />
                                    </div>
                                    <div className='formgroup py-2'>
                                        <label htmlFor="name"> Email  {errors.email && <span className='text-danger' >{errors.email}</span>}    </label>
                                        <input className="form-control " onChange={e => setaddtrader({ ...addtrader, email: e.target.value })} name='email' id='name' type="text" />
                                    </div>
                                    <div className='formgroup py-2'>
                                        <label htmlFor="name"> Address  {errors.address && <span className='text-danger' >{errors.address}</span>}    </label>
                                        <input className="form-control " onChange={e => setaddtrader({ ...addtrader, address: e.target.value })} name='address' id='name' type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-4'>
                                 <div className='card text-dark bg-light border-danger mb-3 p-3'>

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
                                        <label htmlFor="">state {errors.state && <span className='text-danger' >{errors.state}</span>} </label>
                                        <select className='form-control py-2 ' onChange={e => setaddtrader({ ...addtrader, state: e.target.value })}>
                                            {
                                                choice.map((opts, index) =>
                                                    <option key={index.id}>{opts.state}
                                                    </option>)
                                            }
                                        </select>
                                    </div>
                                    <div className='formgroup py-2'>
                                        <label htmlFor="name"> Pincode   {errors.pincode && <span className='text-danger' >{errors.pincode}</span>}  </label>
                                        <input className="form-control " onChange={e => setaddtrader({ ...addtrader, pincode: e.target.value })} name='pincode' id='name' type="text" />

                                    </div>
                                </div>

                            </div>
                            {/* <div>
                                <input type="checkbox" onChange={() => setaddtrader({ ...addtrader, addedby: getid.username })} />
                                 <label htmlFor="">please tick the check box addedby  {errors.addedby && <span className='text-danger' >{errors.addedby}</span>}  </label>
                            </div>
                            <div>
                                <input type="checkbox" onChange={() => setaddtrader({ ...addtrader, companyname: getid.companyname })} /> 
                                <label htmlFor="">please tick the check box companyname  {errors.companyname && <span className='text-danger' >{errors.companyname}</span>}  </label>
                            </div>
                            <div>
                                <input type="checkbox" onChange={() => setaddtrader({ ...addtrader, branchname: getid.branchname })} /> 
                                <label htmlFor="">please tick the check box branchname  {errors.branchname && <span className='text-danger' >{errors.branchname}</span>} </label>
                            </div> */}
                            <button className='btn btn-info mb-3 mt-3  ' type='submit' >submit</button>

                            <button className='btn btn-danger' onClick={() => { navigate(-1); }} type='submit' >back</button>


                        </div>

                    </div>

                </div>
            </form>

        </div>
    );
}

export default Manager_add_super;
