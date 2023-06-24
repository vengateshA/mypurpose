
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import NewValidation from '../Regex_validation/Newvalidation';

function Manager_add_farmer() {

    const [getid, setgetid] = useState([])
    const [choice, setchoice] = useState([])

    const [addtrader, setaddtrader] = useState({
        farm_name: "",
        farmer_name: "",
        farmer_number: "",
        farmer_gender: "", 
        farmer_address: "",
        city: "",
        state: "",
        farmer_location: "",
        timeanddate: "", 
        alternumber: "",
        username: "",
        addedby: "",
        pincode:"",
        id:""
        
    })
    
    useEffect(() => {
        axios.get('http://localhost:5001/api/choice')

            .then(res => { 
                // console.log(res.data, 'fdafdsa')
                setchoice(res.data)

            })
            .catch(err => console.log(err))
    }, [])

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5001/api/allgetinfo/${id}`)
            .then(res => {
                setgetid({ ...res.data[0] })
            }
            ) 
    }, [id])


    useEffect(() => {
        setaddtrader(prevState => ({
            ...prevState,
            addedby: getid.username,
            username: getid.addedby,
            id: getid.id,
            spl_id: getid.spl_id
        }));
    }, [getid]);


 
    const handleSubmit = (e) => {
        e.preventDefault();
    //    seterrors(NewValidation(addtrader))
        axios.post(`http://localhost:5001/api/manager_add_farmer/${id}`, addtrader)

            .then(res => {
                if (res.data.Status === "success") {
                    navigate(-1)
                }
            })
            .catch(err => console.log(err));
    }


    return (
        <div>
        <form onSubmit={handleSubmit}>


            <div className='container-fluid  d-flex align-items-center justify-content-center pt-5 '>
                <div className='card border-secondary bg- p-4'>
                    <div className='text-center '>
                        <h3>Add farmer</h3>
                    </div>
                    <div className='row '>
                        <div className='col-sm-6'>
                            <div className='card text-dark bg-light border-danger mb-3 p-3'>

                                <div className='formgroup py-2'>
                                    {/* <label htmlFor="name"> Username  {errors.username && <span className='text-danger' >{errors.username}</span>} </label> */}
                                    <label htmlFor="name"> farm_name  </label>
                                    <input className="form-control " onChange={e => setaddtrader({ ...addtrader, farm_name: e.target.value })} name='farm_name'  id='name' type="text" />

                                </div>

                                <div className='formgroup py-2'>

                                    <label htmlFor="name"> farmer_name  </label>

                                    <input className="form-control " onChange={e => setaddtrader({ ...addtrader, farmer_name: e.target.value })} name='farmer_name' id='name' type="text" />
                             
                                </div>
                   
                                <div className='formgroup py-2'>


                                    <label htmlFor="name"> farmer_number    </label>


                                    <input className="form-control " onChange={e => setaddtrader({ ...addtrader, farmer_number: e.target.value })} name='farmer_number' id='name' type="text" />
                                </div>
                                <div className='formgroup py-2'>
                                    <label htmlFor="">farmer_gender </label>
                                    <select className="form-control" onChange={e => setaddtrader({ ...addtrader, farmer_gender: e.target.value })}>
                                        {
                                            choice.map((opts, index) =>
                                                <option key={index.id}>{opts.gender}
                                                </option>)
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                  
                        <div className='col-sm-6'>
                            <div className='card text-dark bg-light border-danger mb-3 p-3'>
                        
                            <div className='formgroup py-2'>
                                    <label htmlFor="">city   </label>
                                    <select className='form-control py-2' onChange={e => setaddtrader({ ...addtrader, city: e.target.value })}>
                                        {
                                            choice.map((opts, index) =>
                                                <option key={index.id}>{opts.city}
                                                </option>)
                                        }
                                    </select>
                                </div>

                                <div className='formgroup py-2'>
                                    <label htmlFor="">state </label>
                                    <select className='form-control py-2 ' onChange={e => setaddtrader({ ...addtrader, state: e.target.value })}>
                                        {
                                            choice.map((opts, index) =>
                                                <option key={index.id}>{opts.state}
                                                </option>)
                                        }
                                    </select>
                                </div>
                                <div className='formgroup py-2'>
                                    <label htmlFor="name"> Pincode   </label>
                                    <input className="form-control " onChange={e => setaddtrader({ ...addtrader, pincode: e.target.value })} name='pincode' id='name' type="text" />

                                </div>
                                <div className='formgroup py-2'>
                                    <label htmlFor="name"> farmer_location </label>
                                    <input className="form-control " onChange={e => setaddtrader({ ...addtrader, farmer_location: e.target.value })} name='farmer_location' id='name' type="text" />

                                </div>
                            </div>

                        </div>
                            {/* <div>
                                <input type="checkbox" onChange={() => setaddtrader({ ...addtrader, addedby: getid.username })} />
                                <label htmlFor="">please tick the check box addedby  </label>
                            </div>
                            <div>
                                <input type="checkbox" onChange={() => setaddtrader({ ...addtrader, username: getid.addedby })} /> 
                                <label htmlFor="">please tick the check box companyname </label>
                            </div> */}
             
                        <button className='btn btn-info mb-3 mt-3  ' type='submit' >submit</button>

                        <button className='btn btn-danger' onClick={() => { navigate(`/manager_page/${id}`); }} type='submit' >back</button>
                    </div>

                </div>

            </div>
        </form>

    </div>
    );
}

export default Manager_add_farmer;