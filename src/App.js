import './App.css';
import {Routes, Route, BrowserRouter } from "react-router-dom";
import Wrapper from './components/Wrapper';
import LandingPage from './components/LandingPage';




function App() {
  return (
      <>
        <BrowserRouter>
         <Routes>
          <Route path='/' element={<LandingPage />}></Route>
          <Route path="/home" element={<Wrapper />}></Route>
         </Routes>
        </BrowserRouter>
      </>
   
);
}

export default App;
