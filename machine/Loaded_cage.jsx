import React, { useEffect, useState } from 'react';
import './machine.css'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


function Loaded_cage() {
  const [getid, setgetid] = useState([])
  const [total, settotal] = useState([])
  const [machineid, setmachineid] = useState([])
  const [list, setlist] = useState([])
  // const [extra, setextra] = useState()

  // const handleExtraChange = (e) => {
  //   const newExtra = parseInt(e.target.value, 10); // Assuming the value is numeric
  //   setextra(newExtra);
  // };

  // console.log(extra, 'extra')
  // console.log(typeof (extra))

  const [send, setsend] = useState({
    device_id: "",
    status: "",
    location: "",
    loaded_cage: "",
    num_chicken: 1,
    num_cages: 0,
    id: ""
  })
  console.log(send.num_cages, 'chicken cages')
  console.log(send.num_chicken, 'chicken calucaultion')


  // console.log(extra, 'extra')

  const navigate = useNavigate()
  const { id } = useParams()


  const handleSubmit = (e) => {
    // e.preventDefault();

    axios.post(`http://localhost:5001/api/machine_add_loaded`, send)
      .then(res => {
        console.log('if above')
        window.location.reload(true)
        if (res.data.status === "success") {

          console.log('good its working')
          navigate(`/machine_weight/${id}`)
        }
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    axios.get(`http://localhost:5001/api/allgetinfo/${id}`)
      .then(res => {
        setgetid({ ...res.data[0] })
        // console.log({ ...res.data[0] })
      }
      )
  }, [id])


  useEffect(() => {
    setsend(prevState => ({
      ...prevState,
      id: getid.id,
      mac_id: machineid.mac_id
    }));
  }, [getid]);


  useEffect(() => {
    axios.get(`http://localhost:5001/api/total_loaded_weight`)
      .then(res => {
        settotal(res.data)
        console.log(res.data)

      }
      )
  }, [id])

  console.log(total, 'time working')


  useEffect(() => {
    axios.get(`http://localhost:5001/api/machine_detail/${id}`)
      .then(res => {
        setmachineid({ ...res.data[0] })
        console.log({ ...res.data[0] })
      }
      )
  }, [id])

  console.log(machineid.mac_id, 'in loaded page')


  useEffect(() => {
    axios.get('http://localhost:5001/api/weight_list')
      .then(res => setlist(res.data))
      .then(err => console.log(err))
  }, [id])

  // const filteredUsers = manger.filter((manager) => manager.addedby === usersname);
  const filterusers = list.filter((li) => li.mac_id === machineid.mac_id && li.loaded_cage != null)
  const timefilter = total.filter((li) => li.mac_id === machineid.mac_id)

  return (
    <form onSubmit={handleSubmit}>
      <div className='container d-flex align-items-center justify-content-center vh-100    fore'>

        <div className='card p-5 mac_fore_load'>
          <div>
            <div className=' fw-bold' >
              LOADED CAGE
            </div>
            {/* <div class="form-group py-1 ">
              <label for="exampleFormControlSelect1" className=' fst-italic' >extra</label>
              <select onChange={handleExtraChange} class="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div> */}

            {/* {extra} is there */}


            <div class="form-group py-1 ">
    <label for="exampleFormControlSelect1" className=' fst-italic'>number of cage</label>
    <select onChange={e =>setsend({...send, num_cages: e.target.value})} class="form-control" id="exampleFormControlSelect1">
      <option >1</option>
      <option >2</option>
      <option >3</option>
      <option >4</option>
      <option >5</option>
    </select>
  </div>

            <div class="form-group py-2 ">
              <label for="exampleFormControlSelect1" className=' fst-italic' >number of chicken</label>
              <select onChange={e => setsend({ ...send, num_chicken: e.target.value })} class="form-control" id="exampleFormControlSelect1">
                <option value={0 * parseInt(send.num_cages)} >0  </option>
                <option value={1 * parseInt(send.num_cages)} >1  </option>
                <option value={2 * parseInt(send.num_cages)} >2  </option>
                <option value={3 * parseInt(send.num_cages)} >3  </option>
                <option value={4 * parseInt(send.num_cages)} >4  </option>
                <option value={5 * parseInt(send.num_cages)} >5  </option>
                <option value={6 * parseInt(send.num_cages)} >6  </option>
                <option value={7 * parseInt(send.num_cages)} >7  </option>
                <option value={8 * parseInt(send.num_cages)} >8  </option>
                <option value={9 * parseInt(send.num_cages)} >9  </option>
                <option value={10 * parseInt(send.num_cages)}>10 </option>

              </select>
            </div>

            <div class="form-group py-2">
              <label for="current" className=' fst-italic'>current weight </label>
              <input onChange={e => setsend({ ...send, loaded_cage: e.target.value })} type="text" class="form-control" id="current" placeholder="current" />
            </div>

            <div class="form-group py-2">
              <label for="exampleInputEmail1" className=' fst-italic '>total weight</label>
              <div>
                {timefilter.map((tim, index) => (
                  <div key={index}>{tim['total_loaded_cage']}</div>
                ))}
              </div>
            </div>

            <div className="form-group py-2">
              <label htmlFor="exampleFormControlTextarea1" className="fst-italic">list of weights</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" cols="4 " rows="6"
                value={filterusers.map((list, index) => ` ${index + 1}: ${list.loaded_cage}, cages: ${list.num_cages}, birds: ${list.num_chicken}`).join('\n')}
                readOnly
              ></textarea>
            </div>

            <div className='text-center pt-5'>
              <button className='btn btn-secondary '>submit</button>
            </div>

          </div>
          <div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Loaded_cage;