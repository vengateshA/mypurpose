import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./Loginpage";
import Admin_add_owner from "./component/Admin/Admin_add_owner";
import Admin_update_owner from "./component/Admin/Admin_update_owner";
import Adminact from "./component/Admin/Adminact";
import Admin_page from "./component/Admin/Admin_page";
import Admin_owner_details from "./component/Admin/Admin_owner_details";
import Owner_page from "./component/Owner/Owner_page";
import Owner_actions from "./component/Owner/Owner_actions";
import Owner_add_manager from "./component/Owner/Owner_add_manager";
import Owner_manager_details from "./component/Owner/Owner_manager_details";
import Owner_Update_manager from "./component/Owner/Owner_Update_manager";
import Manager_page from "./component/Manager/Manager_page";
import Manager_actions from "./component/Manager/Manager_actions";
import Manager_super_details from "./component/Manager/manger_super_details";
import Manager_update_super from "./component/Manager/manager_update_super";
import Manager_add_super from "./component/Manager/Manager_add_super";
import Manager_work_super from "./component/Manager/manager_work_super";


function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
    
      <Route path="/" element={<LoginPage />} />  

      <Route path="/Adminpage" element={<Admin_page />} >
      <Route path="" element={<Adminact/>} /> 
        <Route path="Admin_add_owner" element={<Admin_add_owner />} />  
        <Route path="Admin_update_owner/:id" element={<Admin_update_owner />} />  
        <Route path="Admin_owner_detials/:id" element={<Admin_owner_details />} />  
      </Route>  

      <Route path="/owner_page/:id" element={<Owner_page/>} >
      <Route path="" element={<Owner_actions />} />  
      <Route path="Owner_manager_details/:id" element={<Owner_manager_details/>} />  
      <Route path="Owner_update_manager/:id" element={<Owner_Update_manager/>} />  
      <Route path="Owner_add_manager" element={<Owner_add_manager/>} />  
      </Route> 
  
      <Route path="/manager_page/:id" element={<Manager_page/>} >
      <Route path="" element={<Manager_actions />} />  
      <Route path="manager_super_details/:id" element={<Manager_super_details/>} />  
      <Route path="manager_update_super/:id" element={<Manager_update_super/>} />  
      <Route path="manager_add_super" element={<Manager_add_super/>} />  
      <Route path="manager_work_super/:id" element={<Manager_work_super/>} />  
      </Route> 

      



 
      {/* <Route path="/Adminpages" element={< Adminpages/>} >

      <Route path="" element={<Adminactions />} /> */}
      {/* <Route path="Admindetails/:id" element={<Admindetails />} /> */}
      {/* <Route path="Addtrader" element={<Addtrader />} />
      <Route path="Updatetrader/:id" element={<Updatetrader />} />
      <Route path="Adminviewtrader/:id" element={<Adminviewtrader />} /> 
      </Route> 

      <Route path="/Traderpage/:id" element={<Traderpage />} >
      <Route path="" element={<Traderviews />} />
      <Route path="Addworker" element={<Addworker />} />
      <Route path="Updateworker/:id" element={<Updateworker />} />

      <Route path="Workeractions/:id" element={<Workeractions />} />
      <Route path="Workeractions/:id" element={<Workeractions />} />
  
      <Route path="Traderviewworker/:id" element={<Traderviewworker />} />
  
       </Route>

      <Route path="/Workerpage" element={<Workerpages />} />
      </Route> */}
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
