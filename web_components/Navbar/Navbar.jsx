import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import './Navbar.css';
import { IconContext } from 'react-icons';
import ztslogo from '../images/ztslogo.png'


function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
<div className='sticky-top'>
      <IconContext.Provider value={{ color: 'skyblue' }}>
        <div className='navbar container-fluid   d-flex justify-content-between  '>

  <div>
  
        <Link to='#' className='menu-bars px-2 '>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          </div> 
          <div>
          
          <div  className='fs-4 fw-bold px-2'>Zeekers Technology</div>
          
          </div>
 
        <div className='px-3'>
 <img src={ztslogo} class="img-circle ztslogo " height='70' width='80' alt="img" /> 
 </div>
   </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {Sidebar.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path} >
                    <div className='icon'>
                    {item.icon }
                    </div>
                    <span className='text-info'>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
      </div>

    </>
  );
}

export default Navbar;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// import ztslogo from '../images/ztslogo.png'



// function Navbar() {


//   return (
//     <div className='background sticky-top bg-primary'>
//       {/* <div className='bg-warning py-2'>
//       <marquee behavior="" direction="" loop='infinite' className='mar' >
//       Let's Make Safe Welding <span className='mar_space'> </span> 
//       Let's Make Safe Welding <span className='mar_space'></span>
//       Let's Make Safe Welding <span className='mar_space'> </span> 
//       Let's Make Safe Welding <span className='mar_space'></span>
//       Let's Make Safe Welding <span className='mar_space'></span>
//       Let's Make Safe Welding <span className='mar_space'> </span> 
//       Let's Make Safe Welding <span className='mar_space'></span>
//       Let's Make Safe Welding </marquee>
//       </div> */}
//       {/* <img src={ztslogo} class="img-circle ztslogo" height='80' width='80' alt="img" /> */}
//       <nav class="navbar navbar-expand-lg bg-transparent ">
//         <div class="container sticky-top">
//           <img src={ztslogo} class="img-circle ztslogo" height='80' width='80' alt="img" />
//           <button class="navbar-toggler shadow-none border-0"
//             type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="collapse navbar-collapse " id="navbarNav">
//             <ul class="navbar-nav mx-auto justify-content-between w-100 ">
//               <li class="nav-item mx-auto  ">
//                 <Link to='/' class="nav-link nav_name fs-5 fw-bold" aria-current="page"  >Home</Link>
//               </li>
//               <li class="nav-item mx-auto">
//                 <Link to='About' class="nav-link nav_name fs-5 fw-bold" >About</Link>
//               </li>

//               <li class="nav-item mx-auto">
//                 <Link to='Services' class="nav-link nav_name fs-5 fw-bold">Services</Link>
//               </li>
//               <li class="nav-item mx-auto">
//                 <Link to='Products' class="nav-link nav_name fs-5 fw-bold" >Products</Link>
//               </li>

//               <li class="nav-item mx-auto">
//                 <Link to='Achievements' class="nav-link  nav_name fs-5 fw-bold" >Achievements</Link>
//               </li>
//               <li class="nav-item mx-auto">
//                 <Link to='Contact' class="nav-link  nav_name fs-5 fw-bold" >Contact</Link>
//               </li>
//             </ul>
//           </div>
     
//         </div>


//       </nav>



//     </div>
//   );
// }

// export default Navbar;