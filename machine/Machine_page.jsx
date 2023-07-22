import React, { useState } from 'react';

import Machine_before_details from './Machine_before_details';

function Machine_page() {
    const[change, setchange] = useState('text-warning')
    const handlechange =() =>{
        console.log('like')
        setchange(change?'text-danger':'text-info')
    
    }
    return (
        <div>  
    <div>
        <div onClick={handlechange} className={`${change}`} onChange={()=>setchange(true)}>
            the application
        </div>
    </div>
              {/* {change?<button className='btn btn-primary' onClick={()=>setchange(true)}>first</button>:<button  onClick={()=>setchange(true)}>first</button>}
              {change?<button  onClick={()=>setchange(false)}>second</button>:<button className='btn btn-info' onClick={()=>setchange(false)}>second</button>}
              */}

             <Machine_before_details/>
        </div>
    );
}
 
export default Machine_page;         