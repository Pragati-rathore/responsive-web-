
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/layout';
import RegisterForm from './components/Register/register';
import FinalPage from './components/FinalPage/finalpage';

import FromStep from './components/FormStep/formstep';
//import LoginForm from './components/Login/login';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
       <Routes>
         <Route path="/" element={<Layout/>}/>
         <Route path="/formstep" element={<FromStep/>}/>
         <Route path='/register' element={<RegisterForm/>}/>
         <Route path='/finalpage' element={< FinalPage/>}/>
         
       </Routes>
       </BrowserRouter>

       
     
     
    </div>
  );
}

export default App;

