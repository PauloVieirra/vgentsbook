import React,{useContext} from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import ReaderView from '../Screens/Home';
import SignUp from '../Screens/SignUp';
import Controle from '../Screens/Gestao';
import { useAuth } from '../context/AuthContext';
import { WebFooter } from '../Components/Footer';
import { LoggedInMenu } from '../Components/Menu';


function AppRoutes  () {
  const {user} = useAuth();
  
  return (
    <div>
      <LoggedInMenu/>
      <Routes>
        <Route path="/" element={<ReaderView/>} />
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/Controle" element={<Controle/>} />
      </Routes> 
      <WebFooter/>
    </div>
  );
};

export default AppRoutes;
