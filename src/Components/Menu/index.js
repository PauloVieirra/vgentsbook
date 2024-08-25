import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './style.css';

// Menu para Usuários Logados
const LoggedInMenu = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/'); // Redireciona para a página inicial após o logout
  };

  return (
    <div className="loggedin">
      <div className="profile">
        <img src={'https://via.placeholder.com/50'} alt="Profile"/>
        <p className="email">{user?.email}</p>
      </div>
      <div className="menu-item"><a href="/notifications">Notificações</a></div>
      <div className="menu-item"><a href="/messages">Mensagens</a></div>
      <div className='contbtn'>
        <div className='btnslogs' onClick={handleLogout}>SAIR</div>
      </div>
    </div>
  );
};

// Menu para Usuários Não Logados
const LoggedOutMenu = () => {
  const navigate = useNavigate(); // Adicione a navegação

  const handleSignIn = () => {
    navigate('/signin'); // Redireciona para a página de SignIn
  };

  const handleInicio = () => {
    navigate('./'); 
  };

  

  return (
    <div className="loggedout">
      <div className='contlogo'>
        <div>Logo</div>
      </div>
      <div className='out-log'>
        <div className="menu-item" onClick={handleInicio}>Inicio</div>
      </div>
      <div className='contbtn'>
        <div className='btnslogs' onClick={handleSignIn}>Entrar</div> {/* Adicione o manipulador de clique */}
      </div>
    </div>
  );
}

export { LoggedInMenu, LoggedOutMenu };
