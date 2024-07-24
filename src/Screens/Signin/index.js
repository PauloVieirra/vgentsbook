import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Ajuste o caminho conforme sua estrutura de pastas
import './style.css'; // Importando o arquivo de estilos

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Limpa erros anteriores

        try {
            if (!email || !password) {
                setError("Por favor, preencha todos os campos.");
                return;
            }
    
            await login(email, password);
            navigate('/'); // Navega para a página inicial após o login
        } catch (error) {
            if (error.code === "auth/user-not-found") {
                setError("Usuário não encontrado. Por favor, verifique o email.");
            } else if (error.code === "auth/wrong-password") {
                setError("Senha incorreta. Por favor, tente novamente.");
            } else if (error.code === "auth/email-not-confirmed") {
                setError(
                    "O email ainda não foi confirmado. Por favor, verifique sua caixa de entrada."
                );
            } else {
                setError(
                    "Ocorreu um erro ao fazer login. Por favor, tente novamente mais tarde."
                );
            }
        }
    };

    return (
        <div className="container">
            <div className='diclogomarca'>
                <img src="/books/logomarilia.png" alt="Logo" className='logo' /> {/* Ajuste o caminho da imagem conforme necessário */}
            </div> 
            <div className="signin-container">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <div className='divlabels'>
                            <label htmlFor="email">E-mail</label> 
                        </div>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <div className='divlabels'>
                            <label htmlFor="password">Senha</label> 
                        </div>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <div className="error-message">{error}</div>}
                    <div className='divbtn'>
                        <button type="submit" className='btnentrar'>Entrar</button>
                    </div>
                </form>
                 <p>
                  
                </p>
            </div>
        </div>
    );
};

export default SignIn;
