import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Manager_work_super() {

    
    // const[one, setone] =useState()


    // useEffect(()=>{
    //     axios.get(`http://localhost:5001/api/allgetone/${id}`)
    //     .then(res =>{
    //         setone(res.data.Result[0].username)
    //     })
    // }, [])
 
    // console.log(one , 'fdsa')


    const [getid,setgetid]=useState([])
    const[work, setwork]= useState({
        work:'',
      username: '',
        addedby:'',
        farmer_name:''
    })

    const[farmer, setfarmer]= useState([])

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



    
    useEffect(() => {
        setwork(prevState => ({
            ...prevState,
            username: getid.username,
            addedby: getid.addedby,
            id:getid.id

        }));
    }, [getid]);



    
useEffect(()=>{
    axios.get(`http://localhost:5001/api/farmer_info`)
    .then(res=>setfarmer(res.data))

}, [id])
    

    const handleSubmit = (e)=>{ 
        e.preventDefault();

        axios.post(`http://localhost:5001/api/manager_work_super/${id}`, work)
        .then(res=>{
            if(res.data.Status === "success") {
           
                
            // setwork(work.one, 'inside in')
        
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

        


        <div  className='container pt-5 d-flex align-items-center justify-content-center '>
            <div className='bg-secondary p-4'>
               
            <form onSubmit={handleSubmit} >
            <label htmlFor="">weight of the chicken</label> <br />
            <input className='my-3' type="text" onChange={e=>setwork({...work, work:e.target.value})}/> <br />
            {/* <input type="checkbox" onChange={()=>setwork({...work, username:getid.username})}/>   <label htmlFor="">username:getid.username</label> <br /> */}
            {/* <h1>{getid.username}</h1>
            <h1>{getid.addedby}</h1>
            {/* <input type="checkbox" onChange={()=>setwork({...work, addedby:getid.username})}/> */}
            {/* <input type="checkbox" onChange={() => setwork({ ...work, addedby: getid.addedby })} /> <label htmlFor="">addedby: getid.addedby</label> */}

            <div className='formgroup py-2 my-2'>
                                    <label htmlFor="">select the farmer </label>
                                
                                    <select className="form-control" onChange={e => setwork({ ...work, farm_name: e.target.value })}>
                                       <option >select the farmer</option>
                                        {
                                            farmer.map((opts, index) =>
                                                <option key={index.id}>{opts.farm_name}
                                                </option>)
                                        }
                                    </select>
                                </div>
                  
            


         {/* <label htmlFor="">username</label>
            <select onChange={e=>setwork({...work, username:e.target.value})}>
                {
                    getid.map((opts,index)=>
                    <option key={index.id}>{opts.username}
                    </option>)
                }  
            </select>  */}
    
            {/* <label htmlFor="">username</label>
            <select onChange={e=>setwork({...work, addedby:getid.addedby})}>
                {
                    getid.map((opts,index)=><option key={index.id}>{opts.addedby}</option>)
                }      
            </select> */}
            
            
            <button className='btn btn-outline-light'>sumbit</button>
            </form> 
            </div>
        </div>
    );
}

export default Manager_work_super;