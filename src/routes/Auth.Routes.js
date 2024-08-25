import React, { useContext }  from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import SignIn from '../Screens/Signin';
import SignUp from '../Screens/SignUp';
import Landing from '../Screens/Landing';
import { WebFooterOut } from '../Components/Footer';
import { LoggedOutMenu } from '../Components/Menu';


function AuthRoutes  () {
  return (
      <div>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/SignIn" element={<SignIn/>} />
      </Routes> 
      <WebFooterOut/>
    </div>
  );
};

export default AuthRoutes;
