import React, { useState } from 'react';
import Empty_cage from './Empty_cage';
import Loaded_cage from './Loaded_cage';

import {  useEffect } from 'react';

function Machine_weight() {
  const [change, setChange] = useState(localStorage.getItem('selectedPage') === 'empty');

  useEffect(() => {
    // Save the selected page to local storage when it changes
    localStorage.setItem('selectedPage', change ? 'empty' : 'loaded');
  }, [change]);

  return (
    <div className='sticky-top'>
      <div className='fore text-center pt-5'>
        <button onClick={() => setChange(true)} className='btn btn-outline-dark fw-bold'>
          Empty
        </button>
        <button onClick={() => setChange(false)} className='btn btn-outline-dark fw-bold'>
          Loaded
        </button>
        {change ? <Empty_cage /> : <Loaded_cage />}
      </div>
    </div>
  );
}

export default Machine_weight;


// import React, { useState } from 'react';
// import EmptyCage from './Empty_cage';
// import LoadedCage from './Loaded_cage';

// function MachineWeight() {
//   const [change, setChange] = useState(false);
//   const [color, setcolor] = useState('btn btn-outline-dark fw-bold');
//   const [colors, setcolors] = useState('btn btn-outline-dark fw-bold');

//   const handleEmptyButtonClick = () => {
//     setcolor(change ? 'btn btn-outline-dark fw-bold':'btn btn-outline-danger fw-bold')
//     setChange(true);
//     // setcolor('btn btn-outline-info fw-bold')?

//     console.log('like you')
//   };

//   const handleLoadedButtonClick = () => {
//     setChange(false);
//     setcolors(change ?'btn btn-outline-info fw-bold':'btn btn-outline-dark fw-bold')
//     console.log('little me')
//   };

//   return (
//     <div className='sticky-top'>
//       <div className='fore text-center pt-5'>
//         <button onClick={handleEmptyButtonClick} className={`${color}`} >
//           Empty
//         </button>
//         <button onClick={handleLoadedButtonClick} className={`${colors  }`}>
//           Loaded
//         </button>
//         {change ? <EmptyCage /> : <LoadedCage />}
//       </div>
//     </div>
//   );
// }

// export default MachineWeight;
