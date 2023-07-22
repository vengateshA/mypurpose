import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import About from './component/About/About';
import Achievements from './component/Achievements/Achievements';
import Contact from './component/Contact/Contact';
import Services from './component/Services/Services';

import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';
import Products from './component/Products/Products';


function App() {
  return (
<BrowserRouter>
<Navbar/ >
<Routes>
<Route path="/" element={<Home />} />
<Route path="About" element={<About />}/>
<Route path="/Navbar" element={<Navbar />} />
<Route path="Achievements" element={<Achievements />} />
<Route path="Contact" element={<Contact />} />
<Route path="Services" element={<Services />} />
<Route path="Products" element={<Products />} />
<Route path="/Footer" element={<Footer />} />
<Route path="*" element={<p>404 Error</p>} /> 
</Routes>
<Footer/>

</BrowserRouter>
  );
}

export default App;
