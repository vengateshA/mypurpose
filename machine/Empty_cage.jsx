import React, { useEffect, useState } from 'react';
import './machine.css'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


 
function Empty_cage() {
 const [getid, setgetid] = useState([])
 const [machineid, setmachineid] = useState([])
 const [total, settotal] = useState([])
 const [list, setlist] = useState([])
  const[send, setsend] = useState({

    device_id : "",
    status : "",
    location: "",
    empty_cage: "",
    num_cages: "",
    id:""
  })

const navigate = useNavigate()
const {id} = useParams()


  const handleSubmit = (e) => {
    // e.preventDefault();
    
  
    axios.post(`http://localhost:5001/api/machine_add_empty`, send)
        .then(res => {
  
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


  useEffect(()=>{
    axios.get(`http://localhost:5001/api/machine_detail/${id}`) 
    .then(res=>
        {
        setmachineid({...res.data[0]})
        console.log({...res.data[0]})   
    }
        ) 
},[id])

console.log(machineid.mac_id, 'in empty page')




useEffect(()=>{
  axios.get(`http://localhost:5001/api/total_empty_weight`)
  .then(res => {
      settotal(res.data)
      console.log(res.data)
 
  } 
  )
},[id])

useEffect(()=>{
  axios.get('http://localhost:5001/api/weight_list')
  .then(res => setlist(res.data))
  .then(err => console.log(err))
}, [id])

console.log(total, ' little')
const filterusers = list.filter((li)=> li.mac_id === machineid.mac_id && li.empty_cage != null)
const timefilter = total.filter((li)=> li.mac_id === machineid.mac_id)
console.log(timefilter, 'timefilter')
console.log(filterusers, 'filterusers')



  
    return (
      <form onSubmit={handleSubmit}>
        <div className='container d-flex align-items-center justify-content-center vh-100 fore '>

<div className='card p-5 mac-inside'>
    <div className='text-center fw-bold' >
 EMPTY CAGE 
    </div>





    <div class="form-group py-2 ">
    <label for="exampleFormControlSelect1" className=' fst-italic'>number of cages</label>
    <select onChange={e =>setsend({...send, num_cages: e.target.value})} class="form-control" id="exampleFormControlSelect1"  >
      <option value={1}>1</option>
      <option value={2}>2</option>
      <option value={3}>3</option>
      <option value={4}>4</option>
      <option value={5}>5</option>
    </select>
  </div>

  <div class="form-group py-2">
    <label for="current" className=' fst-italic'>current weight</label>
    <input onChange={e =>setsend({...send, empty_cage: e.target.value})} type="text" class="form-control" id="current"  placeholder="current"/>
 </div>
             
 <div class="form-group py-2">
    <label for="exampleInputEmail1" className=' fst-italic '>total weight</label>
    <div>
    {timefilter.map((tim, index) => (
      <div key={index}>{tim['total_empty_cage']}</div>
    ))}
  </div>
 </div>

 <div className="form-group py-2">
  <label htmlFor="exampleFormControlTextarea1" className="fst-italic">list of weights</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" cols="4 " rows="6" 
    value={filterusers.map((list, index) =>  ` ${index + 1}: weight: ${list.empty_cage}, cages: ${list.num_cages}`).join('\n')}
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
        </form>


    );
}

export default Empty_cage;