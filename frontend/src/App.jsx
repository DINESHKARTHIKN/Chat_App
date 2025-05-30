
import React, { useEffect } from 'react';
import Navbar from "./components/Navbar";
import { Navigate } from 'react-router-dom';
import {Routes,Route} from "react-router-dom"
import  {useAuthStore}  from './store/useAuthStore';
import {Loader} from "lucide-react";
import  HomePage  from './pages/HomePage';
import  {LoginPage}  from './pages/LoginPage';
import {SignupPage}  from './pages/SignupPage';
import  {ProfilePage} from './pages/ProfilePage';
import { Toaster } from 'react-hot-toast';

export const App = () => {

     const {authUser,checkAuth,isCheckingAuth,onlineUsers} = useAuthStore();
     
     useEffect(()=>{
          checkAuth();
     },[checkAuth]);

     console.log({onlineUsers});
     console.log({authUser});

     if(isCheckingAuth && !authUser){
          return (
               <div className="flex items-center justify-center h-screen">
                    <Loader className="size-10 animate-spin"/>
               </div>
          )
     }
     
  
  return (
    <div>
         
         <Navbar/>

         <Routes>
            <Route path ="/" element={authUser ? <HomePage/> : <Navigate to="/login"/>}/>
            <Route path ="/signup" element={!authUser?<SignupPage/>:<Navigate to="/"/>}/>
            <Route path ="/login" element={!authUser?<LoginPage/>:<Navigate to="/"/>}/>
            <Route path ="/profile" element={authUser?<ProfilePage/>:<Navigate to="/login"/>}/>
         </Routes>

     <Toaster/>
    </div>
  )
}

export default App;
