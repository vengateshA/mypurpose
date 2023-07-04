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
import Super_page from "./component/Supervisior/Super_page";

import Manager_view from "./component/Manager/Manager_view";
import Owner_view from "./component/Owner/Owner_view";
import Admin_count from "./component/Admin/Admin_count";
import Admin_view from "./component/Admin/Admin_view";
import Manager_add_farmer from "./component/Manager/Manager_add_farmer";

import Manager_farmactions from "./component/Manager/Manager_farmactions";
import Manager_farmer_details from "./component/Manager/Manager_farmer_details";
import Manager_update_farmer from "./component/Manager/Manager_update_farmer";
import Super_view from "./component/Supervisior/Super_view";
import Super_actions from "./component/Supervisior/Super_actions";
import Super_farm_details from "./component/Supervisior/Super_farm_details";

import Machine_page from "./machine/Machine_page";
import Machine_before_details from "./machine/Machine_before_details";
import Empty_cage from "./machine/Empty_cage";
import Loaded_cage from "./machine/Loaded_cage";
import Machine_weight from "./machine/Machine_weight";
import Machine_loginpage from "./Machine_loginpage";
import Practice from "./Practice";
import Practice2 from "./Practice2";

import Xcel from "./Xcel";
import Html_Excel from "./component/Html_Excel";
import MyDatePicker from "./Date_picker";
import Bluetooth from "./Bluetooth";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<LoginPage />} />

          <Route path="/Adminpage/:id" element={<Admin_page />} >
            <Route path="" element={<Admin_view />} />
            <Route path="Adminact/id" element={<Adminact />} />
            <Route path="Admin_add_owner" element={<Admin_add_owner />} />
            <Route path="Admin_update_owner/:id" element={<Admin_update_owner />} />
            <Route path="Admin_owner_detials/:id" element={<Admin_owner_details />} />
            <Route path="Admin_count/:id" element={<Admin_count />} />

          </Route>

          <Route path="/owner_page/:id" element={<Owner_page />} >
            <Route path="" element={<Owner_view />} />
            <Route path="Owner_actions" element={<Owner_actions />} />
            <Route path="Owner_manager_details/:id" element={<Owner_manager_details />} />
            <Route path="Owner_update_manager/:id" element={<Owner_Update_manager />} />
            <Route path="Owner_add_manager" element={<Owner_add_manager />} />
          </Route>

          <Route path="/manager_page/:id" element={<Manager_page />} >
            <Route path="" element={<Manager_view />} />
            <Route path="manager_actions/:id" element={<Manager_actions />} />
            <Route path="manager_farmaction/:id" element={<Manager_farmactions />} />
            <Route path="manager_super_details/:id" element={<Manager_super_details />} />
            <Route path="manager_update_super/:id" element={<Manager_update_super />} />
            <Route path="manager_add_super" element={<Manager_add_super />} />
            <Route path="manager_add_farmer" element={<Manager_add_farmer />} />
            <Route path="manager_work_super/:id" element={<Manager_work_super />} />
          </Route>
          
          <Route path="/manager_update_farmer/:id" element={<Manager_update_farmer />} />
          <Route path="/manager_farmer_details/:id" element={<Manager_farmer_details />} />


          <Route path="/superpage/:id" element={<Super_page />} >
            <Route path="" element={<Super_view />} />
            <Route path="super_actions" element={<Super_actions />} />
            <Route path="super_farmer_details/:id" element={<Super_farm_details />} />
          </Route>


          <Route path="/machine_loginpage" element={<Machine_loginpage />} />
          <Route path="/machine_page/:id" element={<Machine_page />} />
          <Route path="/machine_before_details/:id" element={<Machine_before_details />} />
          <Route path="/machine_weight/:id" element={<Machine_weight />} />
          <Route path="/empty_cage/:id" element={<Empty_cage />} />
          <Route path="/loaded_cage" element={<Loaded_cage />} />

          <Route path="/Pratice" element={<Practice />} />
          <Route path="/pratice2" element={<Practice2 />} />
          <Route path="/xcel" element={<Xcel />} />
          <Route path="/html_excel/:id" element={<Html_Excel/>} />
          <Route path="/Date_picker" element={<MyDatePicker/>} />
          <Route path="/bluetooth" element={<Bluetooth/>} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
