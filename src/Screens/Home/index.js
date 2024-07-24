import React from 'react';
import MyPdfViewer from '../Bookview/BookViewer';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './style.css';

const ReaderView = () => {
    const pdfUrl = '/books/completo.pdf'; // Substitua pelo caminho correto do seu PDF

    const { logout, user } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
    };

    const handleNavigateToSignUp = () => {
        navigate('/signup'); // Navega para a página de cadastro
    };

    return (
        <div className="reader-view-container">
            <div className="menu">
                <div className='contmenuleft'>
                    <button onClick={handleLogout} className="btn-logout">Sair</button>
                </div>
               <div className='contmenurigth'>
                  {user?.email === "mariliateixeirapsi@vgents.com" && (
                        <button onClick={handleNavigateToSignUp} className="btn-signup">Cadastro</button>
                    )}
               </div>
                
               
            </div>

            <MyPdfViewer fileUrl={pdfUrl} />
        </div>
    );
};

export default ReaderView;
