import logo from './logo.svg';
import './App.css';
import Aboutpage from './component/Aboutpage';
import Servicepage from './component/ViewALL';

import Search from './component/Search';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
  <div>
   <BrowserRouter>
      <Routes>
        
        <Route path="/Aboutpage" element={<Aboutpage/>} />
        <Route path="/Servicepage" element={<Servicepage/>} />
        
        <Route path="/Search" element={<Search/>} />
      </Routes>
      </BrowserRouter>
   </div>
  );
}

export default App;
