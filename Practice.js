


 






import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Practice2 from './Practice2';


const Practice = () => {
  const [datas, setDatas] = useState([]);
  const [second, setsecond] = useState([]);

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
      .get('http://localhost:5001/api/machine_pdf')
      .then((res) => {
        setsecond(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Click pdf generator</h1>
      <Practice2 datas={datas} second={second} />
    </div>
  );
};

export default Practice;


