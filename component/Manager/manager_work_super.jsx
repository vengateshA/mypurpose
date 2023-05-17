import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Manager_work_super() {

    const [values,setValues]=useState([])
    const[work, setwork]= useState({
        work:'',
        id:'',
        username:''
    })

    const {id} = useParams()

    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:5001/api/allgetinfo/${id}`)
        // .then((data)=>data.json())
        .then((val)=>setValues(val.data))
    },[])

    
    const handleSubmit = (e)=>{ 
        e.preventDefault();
        axios.post("http://localhost:5001/api/manager_work_super", work)
        .then(res=>{
            if(res.data.Status === "success"){
                console.log('success')
                // navigate('/Adminpage')
            }
        })
        .catch(err => console.log(err));
    }


    return (


        <div >
                  <div>
     

        </div>
            <form onSubmit={handleSubmit}>
            <label htmlFor="">work</label>
            <input type="text" onChange={e=>setwork({...work, work:e.target.value})}/>
            <label htmlFor="">id</label>
            <input type="number" onChange={e=>setwork({...work, id:values[0].id })} />
            <label htmlFor="">username</label>
            <select onChange={e=>setwork({...work, username:e.target.value})}>
                {
                    values.map((opts,index)=><option key={index.id}>{opts.username}</option>)
                }
            </select><button>sumbit</button>
            </form>
        </div>
    );
}

export default Manager_work_super;