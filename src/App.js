import logo from './logo.svg';
import './App.css';
import Homepage from './component/Homepage';
import Aboutpage from './component/Aboutpage';
import Servicepage from './component/Servicepage';
import Contactpage from './component/Contactpage';
import Faqpage from './component/Faqpage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
  <div>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/Aboutpage" element={<Aboutpage/>} />
        <Route path="/Servicepage" element={<Servicepage/>} />
        <Route path="/Contactpage" element={<Contactpage/>} />
        <Route path="/Faqpage" element={<Faqpage/>} />
      </Routes>
      </BrowserRouter>
   </div>
  );
}

export default App;
