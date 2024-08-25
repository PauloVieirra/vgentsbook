import React,{useContext} from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import ReaderView from '../Screens/Home';
import SignUp from '../Screens/SignUp';
import { WebFooter } from '../Components/Footer';
import { LoggedInMenu } from '../Components/Menu';


function AppRoutes  () {
  
  return (
    <div>
      <LoggedInMenu/>
      <Routes>
        <Route path="/" element={<ReaderView/>} />
        <Route path="/SignUp" element={<SignUp/>} />
      </Routes> 
      <WebFooter/>
    </div>
  );
};

export default AppRoutes;
