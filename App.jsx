import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginpage from "./components/Loginpage";
import Adminpages from "./components/admin/Adminpages";
import Traderpage from "./components/trader/Traderpage";
import Workerpages from "./components/worker/Workerpages";
import Adminactions from "./components/admin/Adminactions";
import Admindetails from "./components/admin/Admindetails";
import Addtrader from "./components/admin/Addtrader";
import Updatetrader from "./components/admin/Updatetrader";
import Adminviewtrader from "./components/admin/Adminviewtrader";

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route>
      <Route path="/" element={<Loginpage />} />
      <Route path="/Adminpages" element={< Adminpages/>} >
      <Route path="" element={<Adminactions />} />
      <Route path="Admindetails/:id" element={<Admindetails />} />
      <Route path="Addtrader" element={<Addtrader />} />
      <Route path="Updatetrader/:id" element={<Updatetrader />} />
      <Route path="Adminviewtrader/:id" element={<Adminviewtrader />} />
      </Route> 

      <Route path="/Traderpage" element={<Traderpage />} />
      <Route path="/Workerpage" element={<Workerpages />} />
      </Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
