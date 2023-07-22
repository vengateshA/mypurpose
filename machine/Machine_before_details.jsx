import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Machine_before_details () {

const[send, setsend] = useState({
  driver_name: "",
  truck_number: "",
  farm_supervisior: "",
  trader_name: "",
  trader_number: "",
  username: "",
  id:"",
  farm_name:""
})

const[getid, setgetid] = useState([])
const[getfarm_name, setfarm_name] = useState([])

const navigate = useNavigate()


const {id} = useParams()
console.log(id, 'new id')

const handleSubmit = (e) => {
  e.preventDefault();

  axios.post(`http://localhost:5001/api/machine_add_before`, send)
      .then(res => {
        console.log('if above')
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
  axios.get(`http://localhost:5001/api/farm_name_drop`)
      .then(res =>{ setfarm_name(res.data)}
    
      )
      .catch(err => console.log(err))
}, [id])


useEffect(() => {
  setsend(prevState => ({
      ...prevState,
      username: getid.username,
      id:getid.id,
      spl_id:getid.spl_id
  }));
}, [getid]);


const filterusers = getfarm_name.filter((farm)=>farm.spl_id === getid.spl_id)
console.log(filterusers, 'filterusers')

    return (
      <div>
        <form onSubmit={handleSubmit}>
      <div className='container d-flex align-items-center justify-content-center vh-100 fore card'>

      <div className='card p-5 mac-inside'>
          <div className='text-center fw-bold' >
       DETAILS
          </div>

          <div className='formgroup py-2'>
                                    <label htmlFor="">state </label>
                                    <select className='form-control py-2 ' onChange={e => setsend({ ...send, farm_name: e.target.value })}>
                                      <option value="">select the farm</option>
                                        {
                                            filterusers.map((opts, index) =>
                                                <option key={index.id}>{opts.farm_name}
                                                </option>)
                                        }
                                    </select>
                                </div>

        <div class="form-group py-2">
          <label for="driver" className=' fst-italic'>driver name </label>
          <input placeholder="current" onChange={e =>setsend({...send, driver_name: e.target.value})} type="text" class="form-control" id="driver"   />
       </div>
                  
        <div class="form-group py-2">
          <label for="truck_num" className=' fst-italic'>truck number </label>
          <input placeholder="current" onChange={e =>setsend({...send, truck_number: e.target.value})} type="text" class="form-control" id="truck_name"  />
       </div>
        <div class="form-group py-2">
          <label for="super_vi" className=' fst-italic'>farm-supervisior </label>
          <input placeholder="current" onChange={e =>setsend({...send, farm_supervisior: e.target.value})} type="text" class="form-control" id="super_vi" aria-describedby="emailHelp" />
       </div>
        <div class="form-group py-2">
          <label for="trader_name" className=' fst-italic'> trader_name </label>
          <input placeholder="current" onChange={e =>setsend({...send, trader_name: e.target.value})} type="text" class="form-control" id="trader_name" aria-describedby="emailHelp" />
       </div>
       <div class="form-group py-2">
          <label for="trader_name" className=' fst-italic'> trader_number </label>
          <input placeholder="current" onChange={e =>setsend({...send, trader_number: e.target.value})} type="text" class="form-control" id="trader_name" aria-describedby="emailHelp" />
       </div>
             
        <div className='text-center pt-5'>
          <button className='btn btn-secondary '>submit</button>
        </div>
      
        </div> 
        <div>
          
        </div>
              </div>
              </form>
              </div>
      
    );
  };

export default Machine_before_details ;

