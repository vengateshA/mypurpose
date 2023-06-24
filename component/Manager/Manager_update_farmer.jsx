import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Manager_update_farmer() {


    const [addtrader, setaddtrader] = useState({
        farm_name: "",
        farmer_name: "",
        farmer_number: "",
        farmer_gender: "",
        pincode: "",
        farmer_address: "",
        city: "",
        state: "",
        farmer_location: "",
        username: "",
        addedby: ""

    })
    const navigate = useNavigate()
    const { id } = useParams();


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

    useEffect(() => {
        axios.get(`http://localhost:5001/api/manager_update_farmerbyid/${id}`)
            .then(res => {

                setaddtrader({
                    ...addtrader,

                    farm_name: res.data.Result[0].farm_name,
                    farmer_name: res.data.Result[0].farmer_name,
                    farmer_number: res.data.Result[0].farmer_number,
                    farmer_gender: res.data.Result[0].farmer_gender,
                    farmer_address: res.data.Result[0].farmer_address,
                    phonenumber: res.data.Result[0].phonenumber,
                    city: res.data.Result[0].city,
                    farmer_location: res.data.Result[0].farmer_location,
                    pincode: res.data.Result[0].pincode,
                    alternumber: res.data.Result[0].alternumber,


                })
            })
            .catch(err => console.log(err));
    }, [])



    const handleSubmit = (e) => {
        e.preventDefault();
        // seterrors(Newvalidation(addtrader))

        axios.put(`http://localhost:5001/api/manager_update_farmer/${id}`, addtrader)
            .then(res => {
                if (res.data.Status === "success") {
                    navigate(-1)
                } 
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <div className='bg-secondary vh-100 d-flex align-items-center justify-content-center'>
                <form onSubmit={handleSubmit}>
                    <div className='container-fluid  d-flex justify-content-center '>
                        <div className='card border-secondary bg- p-5'>
                            <div className='text-center '>
                                <h3>Update farmer</h3>
                            </div>
                            <div className='row '>
                                <div className='col'>
                                    <div className='card text-dark bg-light border-danger mb-3 p-5'>

                                        <div className='formgroup py-2'>
                                            <label htmlFor="name"> farm_name </label>
                                            <input className="form-control " onChange={e => setaddtrader({ ...addtrader, farm_name: e.target.value })} value={addtrader.farm_name} name='username' id='name' type="text" />
                                        </div>

                                        <div className='formgroup py-2'>
                                            <label htmlFor="name"> farmer_name </label>
                                            <input className="form-control " onChange={e => setaddtrader({ ...addtrader, farmer_name: e.target.value })} name='farmer_name' value={addtrader.farm_name} id='name' type="text" />
                                        </div>

                                        <div className='formgroup py-2'>
                                            <label htmlFor="name"> farmer_number </label>
                                            <input className="form-control " onChange={e => setaddtrader({ ...addtrader, farmer_number: e.target.value })} name='farmer_number' value={addtrader.farmer_number} id='name' type="text" />
                                        </div>
                                        <div className='formgroup py-2'>
                                            <label htmlFor="">farmer_gender {errors.city && <span className='text-danger' >{errors.city}</span>}  </label>
                                            <select className='form-control py-2' onChange={e => setaddtrader({ ...addtrader, farmer_gender: e.target.value })}>
                                                {
                                                    choice.map((opts, index) =>
                                                        <option key={index.id}>{opts.city}
                                                        </option>)
                                                }
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='card text-dark bg-light border-danger mb-3 p-5'>

                                    <div className='formgroup py-2'>
                                            <label htmlFor="name"> pincode </label>
                                            <input className="form-control " onChange={e => setaddtrader({ ...addtrader, pincode: e.target.value })} name='pincode' value={addtrader.pincode} id='name' type="text" />
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
                                        <div className='formgroup py-2'>
                                            <label htmlFor="name"> farm_location </label>
                                            <input className="form-control " onChange={e => setaddtrader({ ...addtrader, farmer_location: e.target.value })} name='farmer_location' value={addtrader.farmer_location} id='name' type="text" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <button className='btn btn-info' type='submit' >submit</button>
                            <button className='btn btn-danger mt-3' onClick={() => { navigate(1); }} type='submit' >back</button>

                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default Manager_update_farmer; 