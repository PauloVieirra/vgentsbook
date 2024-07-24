import React, { useContext }  from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import SignIn from '../Screens/Signin';
import SignUp from '../Screens/SignUp';





function AuthRoutes  () {
  return (
      <div>
      <Routes>
        <Route path="/" element={<SignIn/>} />
        <Route path="/SignUp" element={<SignUp/>}/>
      </Routes> 
    </div>
  );
};

export default AuthRoutes;
