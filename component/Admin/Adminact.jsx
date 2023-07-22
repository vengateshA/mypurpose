import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


function Adminact() {
  const [traderdetails, settraderdetails] = useState([])
  const [totalcount, settotalcount] = useState(0)
  const [activecount, setactivecount] = useState(0)
  const [inactivecount, setinactivecount] = useState(0)
  const [search, setsearch] = useState('')
  const [getid, setgetid] = useState([])
  // const [ButtonColor,  setButtonColor] = useState('blue')

    const {id} = useParams()
    console.log(id , 'id please') 

  useEffect(() => {
    axios.get("http://localhost:5001/api/getinfo")
      .then(res => settraderdetails(res.data))
      .catch(err => console.log(err))
  }, [])

  const deletecontact = (id) => {

    if (window.confirm("are you sure that you want to delete that contact ?")) {
      axios.delete(`http://localhost:5001/api/deletelogin/${id}`)
        .then(res => {
          console.log(res)
          window.location.reload(true)
        })
        .catch(err => { console.log(err) })
    }
  }

  const enableuser= (id) => {

    if (window.confirm("are you sure that you want to delete that contact ?")) {
      axios.put(`http://localhost:5001/api/enable_user/${id}`)
        .then(res => {
          console.log(res)
          window.location.reload(true)
          // const newColor = ButtonColor === 'red' ? 'black' : 'red';  
          // setButtonColor(newColor);

        })
        .catch(err => { console.log(err) })
    }
  }

  const disableuser = (id) => {

    if (window.confirm("are you sure that you want to delete that contact ?")) {
      axios.put(`http://localhost:5001/api/disable_user/${id}`)
        .then(res => {
          console.log(res)
          window.location.reload(true)

        })
        .catch(err => { console.log(err) })
    }
  }


    useEffect(() => {
      axios.get("http://localhost:5001/api/count_user")
        .then(res =>
          settotalcount(res.data.Result[0]['count(username)'])
        )
        .catch(err => console.log(err))
    }, [])

    useEffect(() => {
      axios.get("http://localhost:5001/api/count_active")
        .then(res =>
          setactivecount(res.data.Result[0]['count(roles)'])
        )
        .catch(err => console.log(err))
    }, [])

    useEffect(() => {
      axios.get("http://localhost:5001/api/count_inactive")
        .then(res =>
          setinactivecount(res.data.Result[0]['count(roles)'])
        )
        .catch(err => console.log(err))
    }, [])

    useEffect(()=>{
      axios.get(`http://localhost:5001/api/allgetinfo/${id}`)
      .then(res=>
          {
          setgetid({...res.data[0]})
          console.log({...res.data[0]})   
      }
          ) 

  },[])
  const username = getid.username 
  console.log(username,  'now')


  const filteredUsers = traderdetails.filter((trader) => trader.addedby === username);

  // console.log(count, 'df')




  return (
    <div>
      <table className="table table-bordered table-responsive table-striped table-secondary text-center ">
        <tr>
          <td><h5>total customers:</h5> {totalcount}</td>
          <td><h5>active: </h5> {activecount}</td>
          <td> <h5>inactive: </h5> {inactivecount}</td>
        </tr>
      </table>

      <div className=" my-2 px-5 d-flex justify-contnet-center">

        <input type="text" className="form-control"
          placeholder="search me"
          onChange={(e) => {
            setsearch(e.target.value)
          }}
        />

      </div>
      <div className="container-fluid  d-flex justify-contnet-center">

        <table class="table table-bordered table-responsive table-striped table-secondary ">

          <thead>
   
    

            <tr>
              <th scope="col ">s.no</th>
              <th scope="col">username</th>
              <th scope="col">actions</th>

            </tr>
          </thead>
          <tbody>
            {filteredUsers
              .filter((val) => {
                if (search === "") {
                  return val;
                }
                else if (
                  val.username.toLowerCase().includes(search.toLowerCase())
                ) {
                  return val;
                }
              })
              
              .map((trade, index) => {
                return (
                  <tr key={trade.id}>
                    <th>{index + 1}</th>
                    <td >{trade.username}</td>
                    {/* <td style={{ backgroundColor: ButtonColor}}>{trade.username}</td> */}
              
            


                    <td>
                      <button className="btn btn btn-outline-primary px-3"  onClick={() => deletecontact(trade.id)}>Delete</button>
                      <button className="btn btn btn-outline-primary px-3"    onClick={() => enableuser(trade.id)}>enable</button>
                      <button className="btn btn btn-outline-primary px-3" onClick={() => disableuser(trade.id)}>disable</button>
                      <button className="btn btn-outline-primary px-3 " > <Link to={`Admin_update_owner/` + trade.id} class="nav-link active" aria-current="page" >update</Link></button>
                      <button className="btn btn-outline-primary px-4"> <Link to={`Admin_owner_detials/${trade.id}`} class="nav-link active" aria-current="page" >view</Link></button>
                      
                    </td>
                  </tr>
                )
              })
            }

          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Adminact;