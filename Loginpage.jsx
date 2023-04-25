  import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Loginpage(){
  const [values, setvalues] = useState({
    email: '',
    password: ''
  })

const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    
    const handleSubmit= (e) =>{
      e.preventDefault();
      axios.post("http://localhost:6003/api/login", values)
      .then(res =>{
        if(res.data.Status ==="success"){
          if(res.data.data[0].user_type === "admin1"){
            navigate("/Company")
          }else if(res.data.data[0].user_type === "admin2"){
            navigate("/admin2")
          }else{
            navigate("/admin3")
          }
            
            console.log("meassage wil be checked")
        }
else{
   alert(res.data.Message)
}
      })
      .catch(err=> console.log(err));
    }

    return (
  <div>
    <form onSubmit={handleSubmit}>
  <label htmlFor="name"> Username</label>
  <input name='myusername' onChange={e=>setvalues({...values, email:e.target.value})} id='name'  type="text" />
  <label htmlFor='pass'>password</label>
  <input name='mypassword' onChange={e=>setvalues({...values, password:e.target.value})}  type="text"  />
  <button type='submit' >submit</button>
    </form>
  </div>

    )
};
export default Loginpage;