// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Practice2 from './Practice2';


// const Practice = () => {
//   const [datas, setDatas] = useState([]);
//   const [second, setsecond] = useState([]);

//   useEffect(() => {
//     axios
//       .get('http://localhost:5001/api/machine_pdf')
//       .then((res) => {
//         setDatas(res.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

  
//   useEffect(() => {
//     axios
//       .get('http://localhost:5001/api/machine_pdf')
//       .then((res) => {
//         setsecond(res.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div>
//       <h1>Click pdf generator</h1>
//       <Practice2 datas={datas} second={second} />
//     </div>
//   );
// };

// export default Practice;

 






import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Practice2 from './Practice2';


const Practice = () => {
  const [selectedDate, setSelectedDate] = useState();
  const [returnDate, setreturnDate] = useState(null);
  const [datas, setDatas] = useState([]);
  const [before, setbefore] = useState([]);
  const [time, settime] = useState([]);
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

  //   const handleDateChange = (date) =>  {
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


  const emptys = empty.filter((data)=> like.some((likeId) => likeId === data.mac_id));


  
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

     </div>

     <div>
          <label>timing</label>
          <select className="form-control" onChange={e => setbefore_value(e.target.value) }>
            <option value="">select the time</option>
            {filterdate.map((opts, index) => (
              <option key={index}>{opts.farm_name}</option>
            ))}
          </select>
        </div>


      
        <button onClick={clickme} >clickme</button>
      <h1>Click pdf generator</h1>
      <Practice2 filtertotal={filtertotal} filterdata={filterdata} />
    </div>
  );
};

export default Practice;


