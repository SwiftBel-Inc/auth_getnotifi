import './App.css';
import React, {Suspense, lazy} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from './Components/Auth/ProtectedRoute';
import Builder from './Pages/Builder'
import SignUpPage from './Pages/SignUpPage';
const Dashboard =lazy(()=>import('./Pages/Dashboard'));
const Header =lazy(()=>import("./Header"));
const Footer =lazy(()=>import("./Footer"));
const FooterBottom =lazy(()=>import("./FooterBottom"));
const Login =lazy(()=>import("./Pages/Login"));

function App() {
  const loading = () => (
    <p className="animated fadeIn pt-3 text-center" >...loading</p>
  );
  return (
    <div className="App">
              <Suspense fallback={loading()}
      >
        <BrowserRouter>
       {window.location.pathname==='/login'||window.location.pathname==='/'?
       '':<Header/>}
      <Routes>
        <Route path="/blog" element={<Builder/>} />
        <Route element={<ProtectedRoute/>}>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        </Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/' element={<SignUpPage/>}></Route>
      </Routes>
      {window.location.pathname==='/login'||window.location.pathname==='/'?
      ''
      :<>
      <Footer/>
      <FooterBottom/>
      </>}
   </BrowserRouter>
   </Suspense>
    </div>
  );
}

export default App;
