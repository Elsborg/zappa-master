import './App.css';
import {Routes, Route, BrowserRouter } from "react-router-dom";
import Wrapper from './components/Wrapper';
import LandingPage from './components/LandingPage';
import PostPage from './components/PostPage';




function App() {
  return (
      <>
        <BrowserRouter>
         <Routes>
          <Route path='/' element={<LandingPage />}></Route>
          <Route path="/home" element={<Wrapper />}></Route>
          <Route path="/home/:slug" element={<PostPage />} />
         </Routes>
        </BrowserRouter>
      </>
   
);
}

export default App;
