
   
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

import Practice2 from './Practice2';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { SlBell } from "react-icons/sl";
import { CiInboxIn} from "react-icons/ci";



export default function MyDataPicker(){

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
   
       const filtertime = empty.filter((data) =>likes.some((likeId) => likeId === data.mac_id) );
       setfiltertime(filtertime)
     }
   
   
   

  return(
    <div>
     <div>
     <Practice2 filtertotal={filtertime} filterdata={filterdata} />
     </div>
           <div>
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="download-table-xls-button"
          table="table-to-xls"
          filename="tablexls"
          sheet="tablexls"
          buttonText="Download as XLS " />
      </div>
     
     <div>
          <div>
      <button onClick={clickme} >Generate Report</button>
      </div>
  

      </div>


     

      <div className="container">



           <div className="text-center pt-2">
               <div className="">Report Generator</div>

               <div>
     <div>


      <div className="container-fluid py-3">
           <div className="row">       

               <div className="col-6 col-lg-4">
               <div className=""> <strong> Date</strong     > </div>
             <div>  <input
          type="date"
          value={selectedDate || ''}
          onChange={handleDateChange}
          min="1900-01-01" 
          max="2099-12-31" 
        />
        </div>
               </div>
               <div className="col-6 col-lg-4">
  
               <div className=""> <strong> Farm Name </strong> </div>
               <div >  <select className="form-control" onChange={e => setbefore_value(e.target.value) }>
            <option value="">select the time</option>
            {filterdate.map((opts, index) => (
              <option key={index}>{opts.farm_name}</option>
            ))}
          </select></div>

               </div>
               <div className="col-12 col-lg-4 ">
               <div > <strong> Time </strong> </div>
               <div>  
                           <select className="form-control" onChange={e => setbefore_time(e.target.value) }>
            <option value="">select the time</option>
            {filterbefore.map((opts, index) => (
              <option key={index}>{opts.time}</option>
            ))}
          </select>     </div>
               </div>
            </div>   
      </div> 


           <div>
                
               {filtertime.map((tim, index)=>(
                    <div key = {index}>

<div className="table table-borderless table-secondary">
      <div className="container-fluid">
        <div className="row">
        <div className=""> <strong> {single.company_name} </strong></div>   
                <div className=""> <strong> {before_value} </strong></div>   

   <div className="col-6 col-lg-2  "> 
               <div> <strong> Driver Name </strong> </div>
               <div> <em> {tim.driver_name} </em></div>
              
          </div>

          
   <div className="col-6 col-lg-2  "> 
               <div> <strong> Truck Number </strong> </div>
               <div> <em> {tim.truck_number} </em></div>
              
          </div>

          <div className="col-6 col-lg-2  "> 
               <div> <strong> Farm_supervisior </strong> </div>
               <div> <em> {tim.farm_supervisior} </em></div>
              
          </div>
          
          <div className="col-6 col-lg-2"> 
               <div> <strong> Customer Name </strong></div>
               <div> <em>{tim.trader_name} </em> </div>
          </div>

          
          <div className="col-6 col-lg-2"> 
               <div> <strong>Customer Number </strong></div>
               <div> <em> {tim.trader_number} </em></div>
          </div>

          <div className="col-6 col-lg-2"> 
               <div> <strong>Date </strong></div>
               <div> <em> {tim.date} </em></div>
          </div>

          
          <div className="col-12 col-lg"> 
               <div> <strong>Time </strong></div>
               <div> <em> {tim.time} </em></div>
          </div>

          </div>
          
            

          </div>
        </div>
                    </div>
               ))}
      

      </div>

      <div>
               
               {filtertime.map((tim, index)=>(
                    <div key = {index}>

<div className="table table-borderless table-secondary">
      <div className="container-fluid">
        <div className="row">
  
 
                <div className="col-6 col-lg-2"> 
               <div> <strong>Empty Weight</strong></div>
               <div>{tim['total_empty_cage']} </div>
          </div>
          <div className="col-6 col-lg-2"> 
               <div> <strong>Loaded Weight</strong></div>
               <div>{tim['total_loaded_cage']} </div>
          </div>

          <div className="col-6 col-lg-2"> 
               <div> <strong> Chicken Weight </strong></div>
               <div> {tim['total_empty_cage']-tim['total_loaded_cage']} </div>
          </div>
          <div className="col-6 col-lg-2"> 
               <div> <strong>Chicken Number </strong></div>
               <div>{tim['num_chicken']}  </div>
          </div>

          <div className="col-6 col-lg-2"> 
               <div> <strong>Empty Cage </strong></div>
               <div>{tim['total_num_empty']}</div>
          </div>
          <div className="col-6 col-lg-2"> 
               <div> <strong>Loaded Cage </strong></div>
               <div>{tim['total_num_loaded']}</div>
          </div>
          <div className="col col-md"> 
               <div> <strong>Balance Cage </strong></div>
               <div>{tim['total_num_empty']-tim['total_num_loaded']}</div>
          </div>
          <div className="col col-md"> 
               <div> <strong>working hours </strong></div>
               <div>{tim['time_diff']}</div>
          </div>

          </div>
          
            

          </div>
        </div>
                    </div>
               ))}
      

      </div>


    


    
        <div>
  <div className="table table-borderless table-secondary">
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <strong>S.no</strong>
        </div>
        <div className="col">
          <strong>Empty</strong>
        </div>
        <div className="col">
          <strong>Loaded</strong>
        </div>
        <div className="col">
          <strong>Chicken</strong>
        </div>
        <div className="col">
          <strong>Cages</strong>
        </div>
      </div>
    </div>
  </div>

  {filterdata.map((data, index) => (
    <div key={index}>
      <div className="table table-borderless table-secondary">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div>{index + 1}</div>
            </div>
            <div className="col">
              <div>{data.empty_cage}</div>
            </div>
            <div className="col">
              <div>{data.loaded_cage}</div>
            </div>
            <div className="col">
              <div>{data.num_chicken}</div>
            </div>
            <div className="col">
              <div>{data.num_cages}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

               </div>
               </div> 
               <div></div>
           </div>
    </div>
    </div>
  )
}

 
// import axios from 'axios';
// import React, { useEffect, useState, useRef } from 'react';
// import ReactHTMLTableToExcel from 'react-html-table-to-excel';
// import { jsPDF } from 'jspdf';
// import html2canvas from 'html2canvas';

// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// function MyDataPicker() {
//   const [selectedDate, setSelectedDate] = useState();
//   const [returnDate, setreturnDate] = useState(null);
//   const [datas, setDatas] = useState([]);
//   const [before, setbefore] = useState([]);
//   const [before_value, setbefore_value] = useState([]);
//   const [single, setsingle] = useState([]);
//   const [device, setdevice] = useState("machine1");
//   const [device_value, setdevice_value] = useState();
//   const [empty, setempty] = useState([]);
//   const [filterdata, setfilterdata] = useState([]);
//   const [filtertotal, setfiltertotal] = useState([]);
//   const [refreshTable, setRefreshTable] = useState(false);
//   const [resetTrigger, setResetTrigger] = useState(false);
//   const [disable, setdisable] = useState(false);
//   const initialFilterdata = [];
//   const tableRef = useRef(null);

//   const reloadPage = () => {
//     window.location.reload();
//   };

//   console.log(returnDate, 'return state');

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
//       .get('http://localhost:5001/api/machine_get_before')
//       .then((res) => {
//         setbefore(res.data);
//         console.log(res.data, 'set-before');
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   console.log(before, 'before');

//   const id = 1;

//   useEffect(() => {
//     axios
//       .get(`http://localhost:5001/api/pdf_singlevalue/${id}`)
//       .then((res) => {
//         setsingle({ ...res.data[0] });
//         console.log(res.data[0], 'its me');
//       })
//       .catch((err) => console.log(err));
//   }, []);
//   console.log(id, 'use me');

//   useEffect(() => {
//     axios.get(`http://localhost:5001/api/total_empty_weight`).then((res) => {
//       setempty(res.data);
//       console.log(res.data);
//     });
//   }, [id]);

//   console.log(empty, 'empty_cage_weight');
//   const mac_id = single.mac_id;
//   console.log(mac_id, 'ooi mac_id');

//   const handleDateChange = (e) => {
//     setSelectedDate(e.target.value);
//   };

//   console.log(selectedDate, 'selected date');
//   console.log(typeof selectedDate, 'selected date');

//   const filterdate = before.filter((data) => data.date === selectedDate);
//   console.log(filterdate, 'date is here');
//   console.log(typeof filterdate);

//   const filterbefore = before.filter(
//     (data) => data.date === selectedDate && data.farm_name === before_value
//   );
//   console.log(filterbefore.map((data) => data.mac_id));
//   const like = filterbefore.map((data) => data.mac_id);
//   console.log(like, 'like is here');
//   console.log(typeof like);

//   console.log(returnDate, 'like is working');

//   const emptys = empty.filter((data) =>
//     like.some((likeId) => likeId === data.mac_id)
//   );

//   const clickme = () => {
//     handleReset();
//     const filterdata = datas.filter((data) =>
//       like.some((likeId) => likeId === data.mac_id)
//     );
//     setfilterdata(filterdata);
//     const filtertotal = empty.filter((data) =>
//       like.some((likeId) => likeId === data.mac_id)
//     );
//     setfiltertotal(filtertotal);
//   };

//   const handleReset = () => {
//     setfilterdata(initialFilterdata);
//     setResetTrigger(!resetTrigger);
//   };
//   const generatePdf = () => {
//     const table = tableRef.current;
//     if (!table) {
//       console.error('Table ref is not set correctly.');
//       return;
//     }
  
//     html2canvas(table, { useCORS: true })
//       .then((canvas) => {
//         const imgData = canvas.toDataURL('image/png');
//         const pdf = new jsPDF();
//         const imgProps = pdf.getImageProperties(imgData);
//         const pdfWidth = pdf.internal.pageSize.getWidth();
//         const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
//         pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
//         pdf.save('table.pdf');
//       })
//       .catch((error) => {
//         console.error('An error occurred while generating the PDF:', error);
//       });
//   };
  
//   return (
//     <div>
//       <div>
//         <h1>Date Picker Example</h1>
//         <input
//           type="date"
//           value={selectedDate || ''}
//           onChange={handleDateChange}
//           min="1900-01-01" // Set minimum selectable date
//           max="2099-12-31" // Set maximum selectable date
//         />
//       </div>

//       <div>
//         <div>
//           <label>timing</label>
//           <select
//             className="form-control"
//             onChange={(e) => setbefore_value(e.target.value)}
//           >
//             <option value="">select the time</option>
//             {filterdate.map((opts, index) => (
//               <option key={index}>{opts.farm_name}</option>
//             ))}
//           </select>
//         </div>
//         <div>{before_value}</div>
//       </div>

//       <table id="table-to-xls" ref={tableRef}>
//         {/* Table content */}
//       </table>

//       <div>
//         <ReactHTMLTableToExcel
//           id="test-table-xls-button"
//           className="download-table-xls-button"
//           table="table-to-xls"
//           filename="tablexls"
//           sheet="tablexls"
//           buttonText="Download as XLS"
//         />
//       </div>

//       <div>
//         <button onClick={clickme}>Click Me</button>
//         <button onClick={handleReset}>Reset Values</button>
//         <button onClick={reloadPage}>Reload</button>
//         <button onClick={generatePdf}>Download as PDF</button>
//       </div>
//     </div>
//   );
// }

// export default MyDataPicker;

