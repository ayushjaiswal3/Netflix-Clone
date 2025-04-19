import './index.css';
import React from "react";
import LoginPage from './Pages/LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeroSection from './sections/HeroSection';
import AuthScreen from './Pages/home/AuthScreen';
import NotFoundPage from './Pages/NotFoundpage';

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/signup' element={<HeroSection/>}/>
      <Route path='/signin' element={<HeroSection/>}/>
      <Route path='/authscreen' element={<AuthScreen/>}/>
	    <Route path='/four' element={<NotFoundPage/>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;

