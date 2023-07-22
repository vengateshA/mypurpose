import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Html_Excel() {
  const [selectedDate, setSelectedDate] = useState();

  const [datas, setDatas] = useState([]);
  const [before, setbefore] = useState([]);
  const [before_value, setbefore_value] = useState([]);
  const [before_time, setbefore_time] = useState([]);
  const [single, setsingle] = useState([]);

  const [empty,   setempty] = useState([]);
  const [filterdata, setfilterdata] = useState([]);

  const [filtertime, setfiltertime] = useState([]);
     

  const reloadPage = () => {
    window.location.reload();
  };



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



  const id = 4



  useEffect(() => {
    axios.get(`http://localhost:5001/api/pdf_singlevalue/${id}`)
      .then((res) => {
        setsingle({ ...res.data[0] })
        console.log(res.data[0], 'its me')
      })  
      .catch((err) => console.log(err))
  }, []);
  console.log(id, 'use me')

console.log(single)
  console.log(single.spl_id, 'the little things hppened')

  


  useEffect(() => {
    axios.get(`http://localhost:5001/api/total_empty_weight`)
      .then(res => {
        setempty(res.data)
        console.log(res.data)
      }
      )
  }, [])

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  console.log(selectedDate, 'selected date')
  console.log(typeof (selectedDate), 'selected date')


  const filterdate = before.filter((data) => data.date === selectedDate && data.spl_id === single.spl_id );
  console.log(filterdate, 'date is here')
  console.log(typeof (filterdate))

  const filterbefore = before.filter((data) => data.date === selectedDate && data.farm_name === before_value && data.spl_id === single.spl_id );
  console.log(filterbefore.map((data) => data.mac_id));
  const like = filterbefore.map((data) => data.mac_id)

  const filtertimes = before.filter((data) => data.date === selectedDate && data.farm_name === before_value && data.time === before_time  && data.spl_id === single.spl_id  );
  console.log(filtertimes.map((data) => data.mac_id), 'things happened me');
  const likes = filtertimes.map((data) => data.mac_id)


  console.log(like, 'like is here')
  console.log(typeof (like))


  const clickme = () => {

    const filterdata = datas.filter((data) => likes.some((likeId) => likeId === data.mac_id) );
    setfilterdata(filterdata)

    const filtertimes = empty.filter((data) =>likes.some((likeId) => likeId === data.mac_id) );
    setfiltertime(filtertimes)
  }




  return (
    <div>
      <div>
        <h1>Date Picker Example</h1>
        <input
          type="date"
          value={selectedDate || ''}
          onChange={handleDateChange}
          min="1900-01-01" 
          max="2099-12-31" 
        />
      </div>

      <div>
        {single.companyname}, the little
      </div>
      <div>
        <div>
          <label></label>
          <select className="form-control" onChange={e => setbefore_value(e.target.value) }>
            <option value="">select the time</option>
            {filterdate.map((opts, index) => (
              <option key={index}>{opts.farm_name}</option>
            ))}
          </select>
        </div>

        <div>
          <label>timing</label>
          <select className="form-control" onChange={e => setbefore_time(e.target.value) }>
            <option value="">select the time</option>
            {filterbefore.map((opts, index) => (
              <option key={index}>{opts.time}</option>
            ))}
          </select>
        </div>



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

      <table id='table-to-xls' >
<h1>tht little things</h1>
      </table>

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
          {filtertime.map((tim, index) => (
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
            <th>working time</th>
          </tr>
        </thead>

        <tbody>

          {filtertime.map((tim, index) => (
            <tr key={index}>
            <td>{tim['total_empty_cage']}</td>
          
            <td>{tim['total_loaded_cage']}</td>
            <td>{tim['total_empty_cage']-tim['total_loaded_cage']}</td>
            <td>{tim['num_chicken']}</td>
            <td>{tim['total_num_empty']}</td>
            <td>{tim['total_num_loaded']}</td>
            <td>{tim['total_num_empty']-tim['total_num_loaded']}</td>  
            <td>{tim['time_diff']}</td>  
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
