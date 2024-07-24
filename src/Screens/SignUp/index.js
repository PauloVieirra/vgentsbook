import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './style.css'; // Importando o arquivo de estilos

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const { signUp } = useAuth();
    const navigate = useNavigate();

    const handleiniti = () => {
        navigate('/');
    }

    const handleSignUp = async (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário

        if (password !== confirmPassword) {
            setError("As senhas não coincidem.");
            return;
        }

        try {
            await signUp(email, password); // Chama a função de cadastro do seu contexto de autenticação

            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setError(''); // Limpar qualquer erro anterior

            // Após o cadastro bem-sucedido, redireciona o usuário ou mostra uma mensagem de sucesso
            navigate('/'); // Redireciona para a página de login
        } catch (error) {
            setError("Erro ao cadastrar. Verifique os dados e tente novamente.");
            console.error("Erro ao cadastrar:", error);
        }
    };

    return (
        <div className="container">
        <div className="signup-container">
    <div className='divtitle'>
         <h1>Cadastro</h1>
    </div>
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleSignUp}>
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
                <div className="form-group">
                <div className='divlabels'>
                    <label htmlFor="confirm-password">Confirme a Senha</label>
                </div>
                    <input
                        type="password"
                        id="confirm-password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <div className='divbtn'>
                <button type="submit" className='btnentrar'>Cadastrar</button>
                </div>
                <div className='divvoltar'>
                <button className='btnvoltar' onClick={handleiniti}>Início</button>
                </div>
            </form>
            <p>
             
            </p>
        </div>
        </div>
    );
};

export default SignUp;
