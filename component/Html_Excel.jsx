import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Html_Excel() {
  const [selectedDate, setSelectedDate] = useState();
  const [returnDate, setreturnDate] = useState(null);
  const [datas, setDatas] = useState([]);
  const [before, setbefore] = useState([]);
  const [before_value, setbefore_value] = useState([]);
  const [single, setsingle] = useState([]);
  const [device, setdevice] = useState("machine1");
  const [device_value, setdevice_value] = useState()
  const [empty,   setempty] = useState([]);
  const [filterdata, setfilterdata] = useState([]);
  const [filtertotal, setfiltertotal] = useState([]);
  const [refreshTable, setRefreshTable] = useState(false);
  const [resetTrigger, setResetTrigger] = useState(false);
  const [disable, setdisable] = useState(false);
  const initialFilterdata = []

  const reloadPage = () => {
    window.location.reload();
  };



  console.log(returnDate, 'return state')


  useEffect(() => {
    axios
      .get('http://localhost:5001/api/machine_pdf')
      .then((res) => {
        setDatas(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get('http://localhost:5001/api/machine_get_before')
      .then((res) => {
        setbefore(res.data);
        console.log(res.data, 'set-before')
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(before, 'before')



  const id = 1

  useEffect(() => {
    axios.get(`http://localhost:5001/api/pdf_singlevalue/${id}`)
      .then((res) => {
        setsingle({ ...res.data[0] })
        console.log(res.data[0], 'its me')
      })  
      .catch((err) => console.log(err))
  }, []);
  console.log(id, 'use me')


  useEffect(() => {
    axios.get(`http://localhost:5001/api/total_empty_weight`)
      .then(res => {
        setempty(res.data)
        console.log(res.data)
      }
      )
  }, [id])

  console.log(empty, 'empty_cage_weight')
  const mac_id = single.mac_id
  console.log(mac_id, 'ooi mac_id')








  // const filterdata = datas.filter((data) => data.id === parseInt(id, 10) && data.device_id === device);






  //   const handleDateChange = (date) => {
  //   // const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  //   const formattedDates = (date)
  //   setSelectedDate(formattedDates);
  // };


  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  console.log(selectedDate, 'selected date')
  console.log(typeof (selectedDate), 'selected date')


  const filterdate = before.filter((data) => data.date === selectedDate);
  console.log(filterdate, 'date is here')
  console.log(typeof (filterdate))

  const filterbefore = before.filter((data) => data.date === selectedDate && data.farm_name === before_value);
  console.log(filterbefore.map((data) => data.mac_id));
  const like = filterbefore.map((data) => data.mac_id)
  console.log(like, 'like is here')
  console.log(typeof (like))

  console.log(returnDate, 'like is working')

  // const filterdata = datas.filter((data) => data.device_id === device && data.mac_id === like)
  // const filterdata = datas.filter((data) => data.device_id === device_value)
  // const filterdata = datas.filter((data) => like.some((likeId) => likeId === data.mac_id));

  const emptys = empty.filter((data)=> like.some((likeId) => likeId === data.mac_id));
  

  // const filtertotal = empty.filter((data) => data.device_id === device);


  
  const clickme = () => {
  handleReset()
    const filterdata = datas.filter((data) => like.some((likeId) => likeId === data.mac_id));
    setfilterdata(filterdata)
    const filtertotal = empty.filter((data) =>like.some((likeId) => likeId === data.mac_id));
    setfiltertotal(filtertotal)
  }

  const handleReset = () => {
    setfilterdata(initialFilterdata);
    setResetTrigger(!resetTrigger);
  };

  return (
    <div>
      <div>
        <h1>Date Picker Example</h1>
        <input
          type="date"
          value={selectedDate || ''}
          onChange={handleDateChange}
          min="1900-01-01" // Set minimum selectable date
          max="2099-12-31" // Set maximum selectable date
        />

        {/* {selectedDate && <p> Selected Date: {selectedDate.getFullYear()}-{selectedDate.getMonth() + 1}-{selectedDate.getDate()}</p>} */}
      </div>

      <div>
        {/* <div>
            <select  type="text" onChange={(e)=>{setid(e.target.value)}} >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
        </div> */}
 

        <div>
          <label>timing</label>
          <select className="form-control" onChange={e => setbefore_value(e.target.value) }>
            <option value="">select the time</option>
            {filterdate.map((opts, index) => (
              <option key={index}>{opts.farm_name}</option>
            ))}
          </select>
        </div>

        {/* <div>
          <input type="text" onChange={(e) => { setdevice(e.target.value) }} />
        </div> */}


<div>
          {before_value}
        </div>
        {/* <div>
          <label>machine</label>
          <select className="form-control" onChange={e => setdevice_value(e.target.value)}>
            <option value="machine1">machine1</option>
            <option value="machine2">machine2</option>
            <option value="machine3">machine3</option>
          </select>
        </div>
        <div>
          <input type="text" onChange={(e) => { setdevice(e.target.value)}} />
        </div> */}


      </div>

      <table id='table-to-xls'>
        <thead>
          <tr>
            <th>drivername</th>
            <th>Truck_number</th>
            <th>Farm_supervisior</th>
            <th>Trader_name</th>
            <th>Trader_number</th>
            <th>Date</th>
            <th>Time</th>
            
          </tr>
        </thead>
     
        <tbody>

          {filtertotal.map((tim, index) => (
            <tr key={index}>
            <td>{tim.driver_name}</td>
            <td>{tim.truck_number}</td>
            <td>{tim.farm_supervisior}</td>
            <td>{tim.trader_name }</td>
            <td>{tim.trader_number}</td>
            <td>{tim.date}</td>
            <td>{tim.time}</td>

        
              </tr>
          ))}
        </tbody>

        <thead>
          <tr>
            <th>total_empty- weight</th>
            <th>total_loaded- weight</th>
            <th>weight of the chicken</th>
            <th>number of chicken</th>
            <th>number of empty cage</th>
            <th>number of loaded cage</th>
            <th>balance cage</th>


          </tr>
        </thead>

        <tbody>

          {filtertotal.map((tim, index) => (
            <tr key={index}>
            <td>{tim['total_empty_cage']}</td>
            <td>{tim['total_loaded_cage']}</td>
            <td>{tim['total_empty_cage']-tim['total_loaded_cage']}</td>
            <td>{tim['num_chicken']}</td>
            <td>{tim['total_num_empty']}</td>
            <td>{tim['total_num_loaded']}</td>
            <td>{tim['total_num_empty']-tim['total_num_loaded']}</td>  
            </tr>
          ))}
        </tbody>

        <thead>
          <tr>
            <th>empty_cage</th>
            <th>loaded_cage</th>
            <th>num_chicken</th>
            <th>num_cages</th>
          </tr>
        </thead>

        <tbody>
          {
            filterdata.map((data, index) => (

                <tr key={index}>
                  <td>{data.empty_cage}</td>
                  <td>{data.loaded_cage}</td>
                  <td>{data.num_chicken}</td>
                  <td>{data.num_cages}</td>
                </tr>
  
              ))
          }
        </tbody>

        <button onClick={clickme} >clickme</button>
        <button onClick={handleReset} >Reset Values</button>
        <button onClick={reloadPage} >Reload</button>
      </table>
      <div>
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="download-table-xls-button"
          table="table-to-xls"
          filename="tablexls"
          sheet="tablexls"
          buttonText="Download as XLS" />
      </div>
    </div>
  );
}

export default Html_Excel;
