import './App.css';
import React, {Suspense, lazy} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from './Components/Auth/ProtectedRoute';
import GoogleLog from './Pages/GoogleLog';
import Quote from './Pages/Quote';
const Payment=lazy(()=>import('./Pages/Payment'));
const GoogleBusiness=lazy(()=>import('./Pages/GoogleBusiness'));
// const Chats=lazy(()=>import('./Pages/Chats'));
const Inbox=lazy(()=>import('./Pages/Inbox'));
const Conatcts=lazy(()=>import('./Pages/Contacts'));
const Reviews=lazy(()=>import('./Pages/Reviews'));
const Builder =lazy(()=>import('./Pages/Builder'))
const SignUpPage =lazy(()=>import('./Pages/SignUpPage'));
const Tracking =lazy(()=>import('./Pages/Tracking'));
const Dashboard =lazy(()=>import('./Pages/Dashboard'));
//  const Header =lazy(()=>import("./Header"));
// const Footer =lazy(()=>import("./Footer"));
// const FooterBottom =lazy(()=>import("./FooterBottom"));
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
       {/* {window.location.pathname==='/login'||window.location.pathname==='/'?
       '':<Header/>} */}
      <Routes>
        <Route path="/blog" element={<Builder/>} />
        <Route element={<ProtectedRoute/>}>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='dashboard/inbox' element={<Inbox/>}></Route>
        <Route path='dashboard/contacts' element={<Conatcts/>}></Route>
        <Route path='dashboard/reviews' element={<Reviews/>}></Route>
        <Route path='/payment/:id/:id2/:priceid' element={<Payment/>}></Route>
        </Route>
        <Route path='/login/:priceid' element={<Login/>}></Route>
        <Route path='/:priceid' element={<SignUpPage/>}></Route>
        <Route path='/' element={<SignUpPage/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path= '/tracking/:id/:id2/:refno' element={<Tracking/>}></Route>
        <Route path='/google-business' element={<GoogleBusiness/>}></Route>
        <Route path='/googlelogin' element={<GoogleLog/>}></Route>
        <Route path='/quote' element={<Quote/>}></Route>
        {/* <Route path='/dashboard/messenger' element={<Chats/>}></Route> */}


      </Routes>
      {/* {window.location.pathname==='/login'||window.location.pathname==='/'?
      ''
      :<>
      <Footer/>
      <FooterBottom/>
      </>} */}
   </BrowserRouter>
   </Suspense>
    </div>
  );
}

export default App;
