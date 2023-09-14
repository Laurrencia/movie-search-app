import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Moviedetails from './components/Moviedetails';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies/:id' element={<Moviedetails/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
