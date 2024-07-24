import React,{useContext} from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import ReaderView from '../Screens/Home';
import SignUp from '../Screens/SignUp';



function AppRoutes  () {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<ReaderView/>} />
        <Route path="/SignUp" element={<SignUp/>} />
      </Routes> 
    </div>
  );
};

export default AppRoutes;
