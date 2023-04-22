import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Loginpage from "./components/Loginpage"
import Company from "./components/Company"  

function App() {

return(
<BrowserRouter>
<Routes>
<Route path="/" element={<Loginpage/>} />
<Route path="/Company" element={<Company/>} />


                                                                        
</Routes> 
</BrowserRouter>
  ) 
}; 

export default App
