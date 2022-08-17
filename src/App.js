
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';
import AppartmentDetails from './pages/AppartmentDetails/AppartmentDetails';
function App() {
  return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/a-propos" element={<About/>}/>
          <Route path="*" element={<NotFound/>}/>
          <Route path="/appartment-details/:id" element={<AppartmentDetails/>} />
        </Routes>
      </BrowserRouter>
   
  );
}

export default App;
