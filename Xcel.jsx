import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CSVLink, CSVDownload } from 'react-csv';



const Xcel = () => {
    const [datas, setDatas] = useState([]);
    const [id, setid] = useState(1);
    const [device, setdevice] = useState("machine1");
    const [news, setnews] = useState([])



  
    useEffect(() => {
      axios
        .get('http://localhost:5001/api/machine_pdf')
        .then((res) => {
          setDatas(res.data);
        }) 
        .catch((err) => console.log(err));
    }, []);




    // const filterdata = datas.filter((data) => (data.id) === type && data.device_id === 'machine1');
    const filterdata = datas.filter((data) => data.id === parseInt(id, 10) && data.device_id === device);

console.log(filterdata, 'filter')




  return (  
    <div>
        {/* <form onSubmit={handlechange}> */}
        <div>
            <select  type="text" onChange={(e)=>{setid(e.target.value)}} >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
        </div>
        <div>
            <input  type="text" onChange={(e)=>{setdevice(e.target.value)}} />
        </div>
        <div>
            {id} {device}
        </div>
  <button>    <CSVLink data={filterdata}>Download me</CSVLink>
      {/* or */}
      <CSVDownload data={filterdata} target="_blank" />

      </button>
      {/* </form> */}


<div>
<table>
  <thead>
    <tr>
      <th>the head 1</th>
      <th>the head 2</th>
    </tr>
  </thead>
  <tbody>
    {
      datas.map((data, index)=>{
        return(
          <tr key={data.mac_id}>
          <td>{data.loaded_cage}</td>
          <td>{data.empty_cage}</td>
        </tr> 
        )
      })
    }
  </tbody>
</table>
</div>

    </div>
  );
};

export default Xcel;
