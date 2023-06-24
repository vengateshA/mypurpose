import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Manager_actions from './Manager_actions';
import Manager_farmactions from './Manager_farmactions';

function Manager_view() {
 
    const[change, setchange] = useState(false)
    const[color, setcolor] = useState(false)



    return (
        <div>     
         <div className='bg-primary '> 
            <button onClick={()=>setchange(false)} className='btn btn-primary fs-bold' >supervisior</button>
            <button onClick={()=>setchange(true)} className='btn btn-primary fs-bold'>farmer</button>
        {change?<Manager_farmactions/>:<Manager_actions/>}   
              
         </div>
        </div>
    );
} 
export default Manager_view;  

    