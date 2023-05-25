import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Manager_work_super() {

    const [getid,setgetid]=useState([])
    const[work, setwork]= useState({
        work:'',
        username:'',
        addedby:''
    })

    const {id} = useParams()

    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`http://localhost:5001/api/allgetinfo/${id}`)
            .then(res => {
                setgetid({ ...res.data[0] })
                console.log({ ...res.data[0] })
            }
            )

    }, [id])

    
    const handleSubmit = (e)=>{ 
        e.preventDefault();
        axios.post(`http://localhost:5001/api/manager_work_super/${id}`, work)
        .then(res=>{
            if(res.data.Status === "success") {
                // setwork(res.data.Result)
                navigate(-1)
                // console.log(res.data.Result) 
      
                // navigate('/Adminpage')   
            }
        })
        .catch(err=>console.log(err))
    
    }

    // console.log(getid.username , "dfaf" )
    // console.log(getid.addedby, 'like')


    return (


        <div >
                  <div>
        </div>
            <form onSubmit={handleSubmit}>
            <label htmlFor="">work</label>
            <input type="text" onChange={e=>setwork({...work, work:e.target.value})}/>
            <input type="checkbox" onChange={()=>setwork({...work, username:getid.username})}/>
            <h1>{getid.username}</h1>
            <h1>{getid.addedby}</h1>
            {/* <input type="checkbox" onChange={()=>setwork({...work, addedby:getid.username})}/> */}
            <input type="checkbox" onChange={() => setwork({ ...work, addedby: getid.addedby })} /> <label htmlFor="">please tick the check box</label>


         {/* <label htmlFor="">username</label>
            <select onChange={e=>setwork({...work, username:e.target.value})}>
                {
                    getid.map((opts,index)=>
                    <option key={index.id}>{opts.username}
                    </option>)
                }  
            </select> 
     */}
            {/* <label htmlFor="">username</label>
            <select onChange={e=>setwork({...work, addedby:getid.addedby})}>
                {
                    getid.map((opts,index)=><option key={index.id}>{opts.addedby}</option>)
                }      
            </select> */}
            
            
            <button>sumbit</button>
            </form>
        </div>
    );
}

export default Manager_work_super;